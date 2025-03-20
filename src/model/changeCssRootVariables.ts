import { STYLES_VARIABLES } from "../constants/constants";

const changeCssRootVariables = (theme: string) => {
  const root = document.querySelector(":root") as HTMLElement;

  STYLES_VARIABLES.forEach((el) => {
    root.style.setProperty(`${el}default`, `var(${el}${theme})`);
  });
};

export default changeCssRootVariables;
