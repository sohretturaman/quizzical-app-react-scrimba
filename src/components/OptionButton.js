/** @format */

// OptionButton.js
import React, { memo } from "react";
import styles from "./cStyles.module.css";

const OptionButton = memo(({ text, checkSelected, id, selectedOption }) => {
  let isSelected = selectedOption === text;
  console.log("isSelected", isSelected);

  const handleClick = (item) => {
    checkSelected(id, item);
  };

  return (
    <div className={styles.buttonWrapper}>
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
    </div>
  );
});

export default OptionButton;
