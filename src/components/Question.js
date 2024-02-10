/** @format */

import React, { memo } from "react";
import OptionButton from "./OptionButton";
import styles from "./cStyles.module.css";
const Question = memo(({ question }) => {
  return (
    <div className={styles.questionWrapper}>
      <p className={styles.question}>{question}</p>
      <div className={styles.listWrapper}>
        <OptionButton text={"Adios"} />
      </div>
    </div>
  );
});

export default Question;
