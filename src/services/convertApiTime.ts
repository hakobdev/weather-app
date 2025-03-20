import moment from "moment-timezone";

const convertApiTime = (timeZone: number) => {
  if (timeZone !== undefined) {
    const localTime = moment()
      .utcOffset(timeZone / 60)
      .format("HH:mm");
    return localTime;
  }
};
export default convertApiTime;
