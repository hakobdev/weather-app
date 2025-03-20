import React from "react";
import styles from "./HourlyWeather.module.scss";

const WeatherDays: React.FC = () => {
  return (
    <div className={styles.days}>
      <div className={styles.days__div1}>
        <button className={styles.btn}>Hourly Forecast</button>
      </div>
    </div>
  );
};

export default WeatherDays;
