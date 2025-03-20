import { THEME } from "../constants/constants";

const setThemeToLocalStorage = (theme: string) => {
  localStorage.setItem(THEME, theme);
};

export default setThemeToLocalStorage;
