export const getWindDirection = (deg: number) => {
  if (deg >= 0 && deg < 22.5) return "North";
  else if (deg >= 22.5 && deg < 67.5) return "Northeast";
  else if (deg >= 67.5 && deg < 112.5) return "East";
  else if (deg >= 112.5 && deg < 157.5) return "Southeast";
  else if (deg >= 157.5 && deg < 202.5) return "South";
  else if (deg >= 202.5 && deg < 247.5) return "Southwest";
  else if (deg >= 247.5 && deg < 292.5) return "West";
  else if (deg >= 292.5 && deg < 337.5) return "Northwest";
  else return "North";
};

export const getWindIntensity = (speed: number) => {
  const windIntensity =
    speed <= 1 ? "light wind" : speed <= 5 ? "moderate wind" : "strong wind";
  return windIntensity;
};
