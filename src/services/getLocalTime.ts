const getLocalTime = (timezoneOffset: number) => {
  const utcTime = new Date();
  const localTime = new Date(utcTime.getTime() + timezoneOffset * 1000);
  return localTime.getHours();
};

export default getLocalTime;
