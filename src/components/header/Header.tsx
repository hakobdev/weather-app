import styles from "./Header.module.scss";
import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import changeCssRootVariables from "../../model/changeCssRootVariables";
import setThemeToLocalStorage from "../../localStorage/setTheme";
import { DARK, LIGHT } from "../../constants/constants";
import CountrySelector from "./CountrySelector";
import { useAppDispatch } from "../../hooks/useAppSelector";
import { removeLocation } from "../../store/slices/currentWeatherSlice";

const Header: React.FC = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const onThemeBtnHandler = () => {
    const localTheme = theme.theme === DARK ? LIGHT : DARK;
    theme.changeTheme(localTheme);
    setThemeToLocalStorage(localTheme);
  };

  const onReloadBtnHnadler = () => {
    dispatch(removeLocation());
    window.location.reload();
  };

  useEffect(() => {
    changeCssRootVariables(theme.theme);
  }, [theme.theme]);

  return (
    <div className={styles.header__div}>
      <div className={styles.header__div_div1}>
        <div className={styles.logo} onClick={onReloadBtnHnadler}></div>
        <span className={styles.title}>React Weather</span>
      </div>
      <div className={styles.header__div_div2}>
        <div onClick={onThemeBtnHandler} className={styles.mode__logo}></div>
        <CountrySelector />
      </div>
    </div>
  );
};

export default Header;
