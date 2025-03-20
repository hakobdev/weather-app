import React from "react";
import styles from "./Forcast-Items.module.scss";
import { Weather } from "../../../store/slices/type";
import convertDate from "../../../services/convertDate";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Loader from "../../loader/Loader";

const ForcastItems: React.FC<{ listForcast: Weather[] }> = ({
  listForcast,
}) => {
  const isLoading = useAppSelector((state) => state.weather.isLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {listForcast.map((item) => (
        <div key={item.dt} className={styles.week}>
          <p className={styles.current__day}>
            {convertDate(item.dt_txt?.split(" ")[0])}
          </p>
          <p className={styles.date}>
            {item.dt_txt?.split(" ")[1].slice(0, 5)}
          </p>
          <img
            className={styles.weather__image}
            src={`${import.meta.env.BASE_URL}images/${
              item.weather[0].icon
            }.png`}
          />
          <p className={styles.weather__dagree1}>
            {Math.floor(item.main.temp)}°
          </p>
          <p className={styles.weather__dagree2}>
            {Math.floor(item.main.feels_like)}°
          </p>
          <p className={styles.weather__today}>{item.weather[0].main}</p>
        </div>
      ))}
    </>
  );
};

export default ForcastItems;
