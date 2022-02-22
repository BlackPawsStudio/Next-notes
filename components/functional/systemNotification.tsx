import { useEffect, useState } from "react";
import { getCurrentDate, getTimeAhead } from "../../functions/timeFunctions";
import { useAppSelector } from "../../redux/hooks";

const SystemNotification = () => {
  const { notifications } = useAppSelector(({ notificationSlice: toolkit }) => {
    return {
      notifications: toolkit.notifications,
    };
  });

  const [alerts, setAlerts] = useState([]);

  const setNotifications = () => {
    notifications.forEach((notification) => {
      const timeAhead = getTimeAhead(notification.time);
      if (
        getCurrentDate() === notification.date &&
        timeAhead > -60000
      ) {
        setAlerts((prev) => {
          prev[notification.id] = setTimeout(() => {
            new Notification(`${notification.title} note is alerting!`);
          }, timeAhead);
          return prev;
        });
      }
    })
  }

  useEffect(() => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      setNotifications();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          setNotifications();
        }
      });
    }
  }, [notifications]);
  return <></>;
};

export default SystemNotification;
