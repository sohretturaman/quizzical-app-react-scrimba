/** @format */

import React from "react";
import OptionButton from "./OptionButton";
import styles from "./cStyles.module.css";
const Question = ({question}) => {
    
  return (
    <div className={styles.questionWrapper}>
      <p className={styles.question}>
      {question}
      </p>
      <div className={styles.listWrapper}>
      <OptionButton text={"Adios"} />
      <OptionButton text={"Hola"} />
      <OptionButton text={"Au Revoir"} />
      <OptionButton text={"Slair"} />
      </div>
    
    </div>
  );
};

export default Question;
