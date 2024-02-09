/** @format */

import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.welContainer}>
      <div className={styles.circle} />
      <div className={styles.welContainer}>
        <h1>Quizzical</h1>

        <span>Best Quiz App to test your knowladge </span>
        <button
          className={styles.buttonWrapper}
          onClick={() => navigate("/home")}
        >
          Start Quiz
        </button>
      </div>
      <div className={styles.circle2} />
    </div>
  );
};

export default Welcome;
