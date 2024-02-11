/** @format */

// OptionButton.js
import React, { memo } from "react";
import styles from "./cStyles.module.css";

const OptionButton = memo(
  ({ text, checkSelected, id, selectedOption, isChecked, isTrue, answer }) => {
    let isSelected = selectedOption === text;

    // Function to format the option text
    const formatOptionText = (optionText) => {
      return { __html: optionText };
    };
    const handleClick = (item) => {
      checkSelected(id, item);
    };

    return (
      <div className={styles.buttonWrapper}>
        {!isChecked ? (
          <button
            className={styles.button}
            style={{
              backgroundColor: isSelected ? "#D6DBF5" : "white",
              color: "black",
            }}
            onClick={() => handleClick(text)}
          >
            {text}
          </button>
        ) : (
          <button
            className={styles.button}
            style={{
              backgroundColor: isSelected
                ? selectedOption === text && text === answer
                  ? "#94D7A2"
                  : "#D85050"
                : text === answer
                ? "#94D7A2"
                : "white",

              color: "black",
            }}
            onClick={() => handleClick(text)}
            dangerouslySetInnerHTML={formatOptionText(text)}
          ></button>
        )}
      </div>
    );
  }
);

export default OptionButton;
