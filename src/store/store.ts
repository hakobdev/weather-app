import { configureStore } from "@reduxjs/toolkit";
import { currentWeatherSlice } from "./slices/currentWeatherSlice";

export const store = configureStore({
  reducer: {
    weather: currentWeatherSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
