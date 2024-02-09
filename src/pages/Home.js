/** @format */

import React from "react";
import Question from "../components/Question";
import styles from "./styles.module.css";
import CheckButton from "../components/CheckButton";

const Home = () => {
  return (
    <main className={styles.hContainer}>
      <div>
        <Question question={"1. How would you say goody in Spanish ?"} />
        <Question
          question={
            "2. Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?  riots breaking in stores"
          }
        />
        <Question
          question={"3. In which country was the caesar salad invented?"}
        />
        <Question question={"4. How Many Hearts Does An Octopus Have?"} />
        <Question question={"5. How Many Hearts Does An Octopus Have?"} />
      </div>
      <div  className={styles.checkBWrapper}>
        <CheckButton text="Check Answers"/>
      </div>
    </main>
  );
};

export default Home;
