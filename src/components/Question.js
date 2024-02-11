/** @format */

import React, { memo } from "react";
import OptionButton from "./OptionButton";
import styles from "./cStyles.module.css";
const Question = memo((props) => {
  return (
    <div className={styles.questionWrapper}>
      <p className={styles.question}>{props.question}</p>
      <div className={styles.listWrapper}>
        {props.options?.map((option) => (
          <OptionButton
            key={option.id}
            text={option}
            checkSelected={props.handleSelectedData}
            id={props.id}
            selectedOption={props.selectedOption}
            isChecked={props.isChecked}
            isTrue={props.isTrue}
            answer={props.answer}
          />
        ))}
      </div>
    </div>
  );
});

export default Question;
