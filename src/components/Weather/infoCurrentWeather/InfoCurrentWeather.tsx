import React from "react";
import styles from "./InfoCurrentWeather.module.scss";
import { Weather } from "../../../store/slices/type";
import getCurrentWeatherInfo from "../../../services/getCurrentWeatherInfo";
import Loader from "../../loader/Loader";

interface PropsControl {
  weather: Weather | null;
  isLoading: boolean;
}

const InfoCurrentWeahter: React.FC<PropsControl> = ({ weather, isLoading }) => {
  const infoWeather = getCurrentWeatherInfo(weather);

  return (
    <div className={styles.curent__weather_info}>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.curent__weather_ul}>
          <li>
            <div className={styles.temperature}></div>
            <span className={styles.span1}>Temperature</span>
            <span className={styles.theme__span}>
              {infoWeather.temperature} - feels like {infoWeather.feels_like}
            </span>
          </li>
          <li>
            <div className={styles.pressure}></div>
            <span className={styles.span1}>Pressure</span>
            <span className={styles.theme__span}>
              {infoWeather.pressure} mm Hg is normal
            </span>
          </li>
          <li>
            <div className={styles.precipitation}></div>
            <span className={styles.span1}>Precipitation</span>
            <span className={styles.theme__span}>
              {infoWeather.precipitation}
            </span>
          </li>
          <li>
            <div className={styles.wind}></div>
            <span className={styles.span1}>Wind</span>
            <span className={styles.theme__span}>{infoWeather.wind}</span>
          </li>
        </ul>
      )}
      <div className={styles.back_image}></div>
    </div>
  );
};

export default InfoCurrentWeahter;
