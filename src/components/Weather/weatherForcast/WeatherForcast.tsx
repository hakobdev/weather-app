import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import styles from "./WeatherForcast.module.scss";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { fetchHourlyWeatherThunk } from "../../../store/thunks/fetchHourlyWeatherThunk";
import ForcastItems from "../forcastWeather/Forcast-Items";
import { Weather } from "../../../store/slices/type";

const WeatherWeeks: React.FC = () => {
  const [listForcast, setListForcast] = useState<Weather[]>([]);
  const state = useAppSelector((state) => state.weather);
  const weather = state?.weather;
  const dipatch = useAppDispatch();

  useEffect(() => {
    if (weather?.coord.lon && weather.coord.lat) {
      dipatch(fetchHourlyWeatherThunk(weather.coord));
    }
  }, [weather]);

  useEffect(() => {
    if (state.weathers) {
      setListForcast(state.weathers.slice(0, 7));
    }
  }, [state.weathers]);

  return (
    <div className={styles.weeks}>
      <ForcastItems listForcast={listForcast} />
    </div>
  );
};

export default WeatherWeeks;
