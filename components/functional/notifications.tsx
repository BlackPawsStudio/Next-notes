import { useEffect, useState } from "react";
import { getCurrentDate, getTimeAhead } from "../../functions/timeFunctions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setAlert } from "../../redux/slices/modalSlice";
import SystemNotification from "./systemNotification";

const Notifications = () => {
  const [alerts, setAlerts] = useState([]);

  const { notifications } = useAppSelector(({ notificationSlice: toolkit }) => {
    return {
      notifications: toolkit.notifications,
    };
  });

  const { sound } = useAppSelector(({ prefsSlice: toolkit }) => {
    return {
      sound: toolkit.sound,
    };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.values(alerts).forEach((el) => {
      clearTimeout(el);
    });

    notifications.forEach((notification) => {
      const timeAhead = getTimeAhead(notification.time);
      if (getCurrentDate() === notification.date && timeAhead > -60000) {
        setAlerts((prev) => {
          const alarm = new Audio(`../sounds/${sound}.mp3`);
          prev[notification.id] = setTimeout(() => {
            dispatch(setAlert(`${notification.title} note is alerting!`));
            alarm.play();
          }, timeAhead);
          console.log("time", timeAhead);
          return prev;
        });
      }
    });
  }, [notifications]);

  return (
    <>
      <SystemNotification />
    </>
  );
};

export default Notifications;
