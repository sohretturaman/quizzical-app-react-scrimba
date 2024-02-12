/** @format */

import React, { useEffect } from "react";
import Confetti from "react-confetti";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import Lottie from "react-lottie";
import winAnimation from "../animations/win.json";
import continueAnimation from "../animations/moveon.json";
import CheckButton from "../components/CheckButton";
import useWindowSize from "react-use/lib/useWindowSize";
const Result = () => {
  const navigate = useNavigate();
  const locaiton = useLocation();
  const state = locaiton.state;
  const trueCounts = state.trueCounts;
  let successed = trueCounts > 2;

  const { width, height } = useWindowSize();
  useEffect(() => {
    console.log("location.state", trueCounts);
  }, [trueCounts]);

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
      {successed ? <Confetti width={width} height={height} /> : null}
      <div className={styles.circle} />
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Your Score is {state.trueCounts}/10{" "}
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
