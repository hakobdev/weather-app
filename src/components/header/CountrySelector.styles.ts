import { CSSObjectWithLabel } from "react-select";

export const CountrySelectorStyles = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    backgroundColor: "var(--header-select-default)",
    width: "200px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--header-select-hover-default)",
    },
  }),
  menu: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    backgroundColor: "var(--header-select-default)",
    color: "var(--header-select-color-default)",
  }),
  option: (
    baseStyles: CSSObjectWithLabel,
    { isFocused, isSelected }: { isFocused: any; isSelected: any }
  ) => ({
    ...baseStyles,
    backgroundColor: isSelected
      ? "#007bff"
      : isFocused
      ? "#939cb0"
      : "var(--header-select-default)",
    cursor: "pointer",
  }),
  placeholder: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "var(--header-select-color-default)",
    fontSize: "15px",
    letterSpacing: "-0.5px",
  }),
  dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "var(--header-select-color-default)",
    "&:hover": {
      color: "white",
    },
  }),
  singleValue: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "var(--header-select-color-default)",
  }),
  input: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    color: "var(--header-select-color-default)",
  }),
};
