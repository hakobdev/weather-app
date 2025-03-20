//THEME MODE CONSTANTS
export const DARK = "dark";
export const LIGHT = "light";

//CSS VARIABLES FOR THEME CHANGE
export const STYLES_VARIABLES = [
  "--body-background-",
  "--header-select-",
  "--header-select-color-",
  "--header-select-hover-",
  "--current-day-background-",
  "--current-day-color-",
  "--week-card-main-background-",
  "--week-card-background-",
  "--week-card-color-",
  "--week-card-hover-",
];

//OPEN WEATHER API CONSTANTS
export const API_URL = import.meta.env.VITE_API_URL;
export const API_ID = import.meta.env.VITE_API_ID;
export const API_UNIT = import.meta.env.VITE_API_UNIT;
export const API_URL_DAILY = import.meta.env.VITE_API_URL_DAILY;
export const LAT = import.meta.env.VITE_API_LAT;
export const LON = import.meta.env.VITE_API_LON;

//DEFAULT CURRENT COUNTRY
export const DEFAULT_COUNTRY = "Yerevan";

//LOCAL STORAGE and SESSIAON STORAGE VARIABLES
export const LOCATION = "location";
export const THEME = "theme";

//REDUCER  NAMES
export const CURRENT_WEATHER = "current_weather";

//THUNK  NAMES
export const CURRENT_FETCHWEATHER = "weather/fetchWeather";
export const HOURLY_FETCHWEATHER = "hourly/fetchWeather";
