import React from "react";
import styles from "./error.module.scss";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removeLocation } from "../../store/slices/currentWeatherSlice";

const Error: React.FC = () => {
  const dispatch = useAppDispatch();

  const onReloadBtnHnadler = () => {
    dispatch(removeLocation());
    window.location.reload();
  };

  return (
    <div className={styles.error}>
      <div className={styles.info__div}>
        <h1>Error: 404</h1>
        <p>
          The searched weather information was not found. Please check the
          location and try again.
        </p>
        <button onClick={onReloadBtnHnadler}>Relaod</button>
      </div>
    </div>
  );
};

export default Error;
