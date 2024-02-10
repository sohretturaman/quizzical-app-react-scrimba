/** @format */

import React, { memo } from "react";
import styles from "./cStyles.module.css";
const CheckButton = memo(({ text = "Check Answer" }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.buttonText}>{text}</button>
    </div>
  );
});

export default CheckButton;
