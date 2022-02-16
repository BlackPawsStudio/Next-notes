import { useEffect } from "react";
import {
  getCurrentDate,
  getCurrentTime,
  isTimeAhead,
} from "../../functions/timeFunctions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { removeNotification } from "../../redux/slices/notificationSlice";

const Notifications = () => {
  const { notifications } = useAppSelector(({ notificationSlice: toolkit }) => {
    return {
      notifications: toolkit.notifications
    }
  })

  const { sound } = useAppSelector(({ prefsSlice: toolkit }) => {
    return {
      sound: toolkit.sound,
    };
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    const alarm = new Audio(`../sounds/${sound}.mp3`);
    notifications.forEach((note) => {
      if (note)
        if (
          getCurrentDate() === note.date &&
          isTimeAhead(note.time)
        ) {
          // dispatch(removeNotification(note))
          const interval = setInterval(() => {
            if (getCurrentTime() === note.time) {
              alarm.play();
              alert(`Notification!!!!`);
              clearInterval(interval);
            }
          }, 10000);
          console.log(`${note.time} will remind`);
        }
    });
  }, [notifications]);

  return <></>;
};

export default Notifications;
