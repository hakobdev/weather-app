import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherThunk } from "../thunks/currentWeatherThunk";
import { InitialState } from "./type";
import { fetchHourlyWeatherThunk } from "../thunks/fetchHourlyWeatherThunk";
import storage from "../../sessionStorage/session-storage";
import { CURRENT_WEATHER, LOCATION } from "../../constants/constants";

export const initialState: InitialState = {
  weather: null,
  weathers: null,
  location: storage.getItemFromSessionStorage(LOCATION),
  isLoading: false,
  response: {
    status: null,
    message: null,
  },
};

export const currentWeatherSlice = createSlice({
  name: CURRENT_WEATHER,
  initialState,
  reducers: {
    setLocation: (state, action) => {
      if (action.payload) {
        state.location = action.payload;
        storage.setItemToSessionStorage(LOCATION, action.payload);
      }
    },
    removeLocation: () => {
      storage.setItemToSessionStorage(LOCATION, "");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherThunk.pending, (state) => {
        state.isLoading = true;
        state.response = {
          message: null,
          status: null,
        };
      })
      .addCase(fetchWeatherThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weather = action.payload;
        state.response = {
          message: null,
          status: null,
        };
      })
      .addCase(fetchWeatherThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.weather = null;
        state.response = {
          status: action.error.code!,
          message: action.error.message!,
        };
      })
      //Fetch Daily WeatherThunk
      .addCase(fetchHourlyWeatherThunk.pending, (state) => {
        state.isLoading = true;
        state.response = {
          message: null,
          status: null,
        };
      })
      .addCase(fetchHourlyWeatherThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weathers = action.payload;
        state.response = {
          message: null,
          status: null,
        };
      })
      .addCase(fetchHourlyWeatherThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.weathers = null;
        state.response = {
          status: action.error.code!,
          message: action.error.message!,
        };
      });
  },
});

export const { setLocation, removeLocation } = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;
