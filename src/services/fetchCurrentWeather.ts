import { API_ID, API_UNIT, API_URL } from "../constants/constants";

const fetchCurrentWeather = async (location: string) => {
  try {
    const response = await fetch(API_URL + location + API_ID + API_UNIT);
    const data = await response.json();
    if (data.cod === "404") {
      throw new Error(data.message);
    }
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export default fetchCurrentWeather;
