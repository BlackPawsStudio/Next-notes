type Notification = {
  time: string;
  date: string;
}

interface Props {
  new: Array<Notification>;
  old: Array<Notification>;
}

export const checkNotifications = (data: Props): boolean => {
  let sameFound = false;
  data.old.forEach(el => {
    const same = data.new.find(sameEl => {
      if (el.time === sameEl.time && sameEl.date === el.date) {
        sameFound = true
      }
    })
  });
  return sameFound;
};
