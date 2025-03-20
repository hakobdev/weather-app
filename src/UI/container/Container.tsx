import React from "react";
import styles from "./Container.module.scss";
import ContainerInterface from "./Container.interface";

const Container: React.FC<ContainerInterface> = ({ children, classname }) => {
  return <div className={`${styles.container} ${classname}`}>{children}</div>;
};

export default Container;
