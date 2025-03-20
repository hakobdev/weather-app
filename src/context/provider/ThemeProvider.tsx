import React, { useState } from "react";
import ThemeContext from "../ThemeContext";
import getThemeFromLocalStorage from "../../localStorage/getTheme";
import { DARK } from "../../constants/constants";

interface ThemeProviderInterface {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderInterface> = ({
  children,
  ...props
}) => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage() || DARK);

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: setTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
