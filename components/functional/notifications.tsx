import { useEffect, useState } from "react";
import {
  getCurrentDate,
  getTimeAhead,
} from "../../functions/timeFunctions";
import { useAppSelector } from "../../redux/hooks";

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

  useEffect(() => {
    Object.values(alerts).forEach((el) => {
      clearTimeout(el);
    });

    notifications.forEach((notification) => {
      const timeAhead = getTimeAhead(notification.time);
      if (
        getCurrentDate() === notification.date &&
        timeAhead > -60000 
      ) {
        setAlerts((prev) => {
          const alarm = new Audio(`../sounds/${sound}.mp3`);
          prev[notification.id] = setTimeout(() => {
            alarm.play()
            alert('notification')
            notification.time;
          }, timeAhead);
          console.log('time', timeAhead);          
          return prev;
        });
      }
    });
  }, [notifications]);

  return <></>;
};

export default Notifications;
