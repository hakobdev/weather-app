import { createAsyncThunk } from "@reduxjs/toolkit";
import { HOURLY_FETCHWEATHER } from "../../constants/constants";
import fetchHourlyWeather from "../../services/fetchHourlyWeather";

export const fetchHourlyWeatherThunk = createAsyncThunk(
  HOURLY_FETCHWEATHER,
  async (obj: { lat: number; lon: number }, { rejectWithValue }) => {
    try {
      const data = await fetchHourlyWeather(obj);
      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
