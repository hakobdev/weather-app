import { createContext } from "react";

interface ThemePropsInterface {
  theme: string;
  changeTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemePropsInterface>({
  theme: "",
  changeTheme: () => {},
});

export default ThemeContext;
