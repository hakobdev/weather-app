import { THEME } from "../constants/constants";

const getThemeFromLocalStorage = (): string => {
  const localTheme = localStorage.getItem(THEME)!;
  return localTheme;
};

export default getThemeFromLocalStorage;
