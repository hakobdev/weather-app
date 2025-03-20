import React from "react";
import Error from "../components/error/Error";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import { useAppSelector } from "../hooks/useAppSelector";
import Container from "../UI/container/Container";
import styles from "./App.module.scss";

const App: React.FC = () => {
  const isRejected = useAppSelector((state) => state.weather.response.message);

  console.log(import.meta.env.BASE_URL);
  return (
    <div className={styles.app__div}>
      <Container>
        {isRejected === "Rejected" ? <Error /> : ""}
        <Header />
        <Main />
      </Container>
    </div>
  );
};

export default App;
