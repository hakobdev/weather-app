import React, { useState, useMemo, useEffect } from "react";
import countryList from "react-select-country-list";
import { CountrySelectorStyles } from "./CountrySelector.styles";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchWeatherThunk } from "../../store/thunks/currentWeatherThunk";
import { setLocation } from "../../store/slices/currentWeatherSlice";
import storage from "../../sessionStorage/session-storage";
import CreatableSelect from "react-select/creatable";

interface CountryOption {
  label: string;
  value: string;
}

const CountrySelector: React.FC = () => {
  const options = useMemo(() => countryList().getData(), []);
  const [value, setValue] = useState<CountryOption | null>(null);
  const dispatch = useAppDispatch();

  const changeHandler = (selectedOption: CountryOption | null) => {
    setValue(selectedOption);
  };

  useEffect(() => {
    dispatch(setLocation(value?.label!));
    dispatch(fetchWeatherThunk(storage.getItemFromSessionStorage("location")));
  }, [dispatch, value]);

  return (
    <CreatableSelect
      styles={CountrySelectorStyles}
      options={options}
      onChange={changeHandler}
      value={value}
      placeholder={
        storage.getItemFromSessionStorage("location") || "Select a country..."
      }
    />
  );
};

export default CountrySelector;
