/** @format */

import React from "react";
import Confetti from "react-confetti";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Lottie from "react-lottie";
import winAnimation from "../animations/win.json";
import continueAnimation from "../animations/moveon.json";
import CheckButton from "../components/CheckButton";
const Result = () => {
  const navigate = useNavigate();
  const locaiton = useLocation();
  const state = locaiton.state;
  console.log("locaiton.state", state.trueCounts);
  let successed = state.trueCounts > 2 ? true : false;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successed ? winAnimation : continueAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleNewGame = () => {
    navigate("/home");
  };

  return (
    <div className={styles.resultPage}>
      {successed ? <Confetti /> : null}
      <div className={styles.circle} />
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Your Score is {state.trueCounts}/5{" "}
      </h2>
      <Lottie options={defaultOptions} height={400} width={400} />
      <div className={styles.checkBWrapper}>
        <CheckButton
          text={successed ? "Play Again" : "Don't Worry Try Again :)"}
          checkClick={handleNewGame}
        />
      </div>

      <div className={styles.circle2} />
    </div>
  );
};

export default Result;
