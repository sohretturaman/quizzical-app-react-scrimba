/** @format */

import React from "react";
import styles from "./cStyles.module.css";
const OptionButton = ({ text }) => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.button} style={{backgroundColor:'#D6DBF5',
      color:'black'
    
    }}>{text} </button>
    </div>
  );
};

export default OptionButton;
