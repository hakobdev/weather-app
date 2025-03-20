import { OrbitProgress } from "react-loading-indicators";

const Loader: React.FC = () => {
  return (
    <OrbitProgress
      color="var(--header-select-color-default)"
      size="medium"
      text=""
      textColor=""
    />
  );
};

export default Loader;
