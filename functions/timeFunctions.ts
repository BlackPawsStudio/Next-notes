export const getCurrentDate = () => {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentDate = date.getDate();
  return `${date.getFullYear()}-${
    currentMonth < 10 ? `0${currentMonth}` : currentMonth
  }-${currentDate < 10 ? `0${currentDate}` : currentDate}`;
};

export const getCurrentTime = () => {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  return `${currentHour < 10 ? `0${currentHour}` : currentHour}:${
    currentMinute < 10 ? `0${currentMinute}` : currentMinute
  }`;
};

export const getTimeAhead = (expectedTime) => {
  const date = new Date();
  const expectedDate = expectedTime.split(":");

  const expectedMilisec = (expectedDate[0] * 360 + expectedDate[1] * 6) * 10000;
  const currentMilisec = (date.getHours() * 360 + date.getMinutes() * 6) * 10000;   
  
  return expectedMilisec - currentMilisec - date.getSeconds() * 1000;
}