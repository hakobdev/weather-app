import { Weather } from "../store/slices/type";
import { getWindDirection, getWindIntensity } from "./getWindDirection";

const getCurrentWeatherInfo = (weather: Weather | null) => {
  return {
    temperature: Math.floor(weather?.main.temp!),
    feels_like: Math.floor(weather?.main.feels_like!),
    pressure: Math.floor(weather?.main.pressure! * 0.750062),
    precipitation: weather?.rain
      ? "Rainfall in the last hour: " + weather.rain["1h"] + " mm"
      : "No precipitation",
    wind: `${Math.floor(weather?.wind.speed! * 3.6)} m/s ${getWindDirection(
      weather?.wind.deg!
    )} - ${getWindIntensity(weather?.wind.speed!)}`,
  };
};

export default getCurrentWeatherInfo;
