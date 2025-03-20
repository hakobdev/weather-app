import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchCurrentWeather from "../../services/fetchCurrentWeather";
import {
  CURRENT_FETCHWEATHER,
  DEFAULT_COUNTRY,
} from "../../constants/constants";

export const fetchWeatherThunk = createAsyncThunk(
  CURRENT_FETCHWEATHER,
  async (location: string | null, { rejectWithValue }) => {
    try {
      const data = await fetchCurrentWeather(location || DEFAULT_COUNTRY);
      return data;
    } catch (error: any) {
      return rejectWithValue(error);
    }
  }
);
