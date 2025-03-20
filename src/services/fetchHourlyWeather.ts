import {
  API_ID,
  API_UNIT,
  API_URL_DAILY,
  LAT,
  LON,
} from "../constants/constants";

const fetchHourlyWeather = async (obj: { lat: number; lon: number }) => {
  try {
    const response = await fetch(
      API_URL_DAILY + LAT + obj.lat + LON + obj.lon + API_ID + API_UNIT
    );
    const data = await response.json();
    if (data.cod === "404") {
      throw new Error(data.message);
    }
    return data.list;
  } catch (err: any) {
    console.log(err);
  }
};

export default fetchHourlyWeather;
