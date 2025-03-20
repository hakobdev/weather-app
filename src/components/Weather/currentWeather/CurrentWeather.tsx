import React from "react";
import styles from "./CurrentWeather.module.scss";
import { Weather } from "../../../store/slices/type";
import convertApiTime from "../../../services/convertApiTime";
import getLocalTime from "../../../services/getLocalTime";
import Loader from "../../loader/Loader";

interface PropsControl {
  weather: Weather | null;
  isLoading: boolean;
}

const CurrentWeather: React.FC<PropsControl> = ({ weather, isLoading }) => {
  const appWeather = {
    temp: Math.floor(weather?.main.temp!),
    country: weather?.name,
    time: convertApiTime(weather?.timezone!),
    localTime: getLocalTime(weather?.timezone! / 1000),
  };

  return (
    <div className={styles.curent__weather}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.curent__weather_div1}>
            <div className={styles.day__div}>
              <span className={styles.dagree}>{appWeather.temp}°</span>
              <span className={styles.day}>Today</span>
            </div>
            <div className={styles.icon}>
              <img
                src={`${import.meta.env.BASE_URL}images/${
                  weather?.weather[0].icon
                }.png`}
              />
            </div>
          </div>
          <span className={styles.p__div}>
            <p className={styles.time}>Time: {appWeather.time}</p>
            <p className={styles.country}>Location: {appWeather.country}</p>
          </span>
          <div className={styles.curent__weather_div2}></div>{" "}
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
