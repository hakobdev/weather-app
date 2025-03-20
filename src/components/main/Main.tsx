import React from "react";
import styles from "./Main.module.scss";
import CurrentWeather from "../Weather/currentWeather/CurrentWeather";
import InfoCurrentWeahter from "../Weather/infoCurrentWeather/InfoCurrentWeather";
import WeatherDays from "../Weather/hourlyWeather/HourlyWeather";
import WeatherWeeks from "../Weather/weatherForcast/WeatherForcast";
import { useAppSelector } from "../../hooks/useAppSelector";

const Main: React.FC = () => {
  const state = useAppSelector((state) => state.weather);

  return (
    <div className={styles.main__div}>
      <div className={styles.main__div_div1}>
        <CurrentWeather weather={state.weather} isLoading={state.isLoading} />
        <InfoCurrentWeahter
          weather={state.weather}
          isLoading={state.isLoading}
        />
      </div>
      <div className={styles.main__div_div2}>
        <WeatherDays />
        <WeatherWeeks />
      </div>
    </div>
  );
};

export default Main;
