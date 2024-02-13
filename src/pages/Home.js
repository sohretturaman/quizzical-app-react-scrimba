/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Question from "../components/Question";
import styles from "./styles.module.css";
import CheckButton from "../components/CheckButton";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clickedCheck, setClickedCheck] = useState(false);
  const [trueCounts, setTrueCounts] = useState({});
  const navigate = useNavigate();

  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  const getQuestions = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await fetch(
        "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
      ).then((res) => res.json());

      const newData = result.results?.map((item) => ({
        id: nanoid(),
        category: item.category,
        question: item.question,
        answer: item.correct_answer,
        options: shuffleArray(item.incorrect_answers, item.correct_answer),
        selectedOption: null,
        isTrue: false,
        isChecked: false, // Initially, no options are checked
      }));
      setData(newData || []);
      setIsLoading(false);
    } catch (error) {
      console.log("An error occurred while fetching", error);
      setIsLoading(false);
    }
  }, [setData, setIsLoading]);

  const throttledGetQuestions = useCallback(
    () =>
      throttle(() => {
        getQuestions();
      }, 1000), // Adjust the throttle delay as needed (e.g., 1000ms = 1 second)
    [getQuestions] // Include getQuestions in the dependency array
  );

  useEffect(() => {
    throttledGetQuestions();
  }, [throttledGetQuestions]);

  const shuffleArray = (arr, item) => {
    let n = arr.length;
    let randomIndex = Math.floor(Math.random() * (n + 1)); // generate random index including the end of the array
    arr.splice(randomIndex, 0, item); // insert 'x' at random index
    for (let i = n - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // generate random index to swap with
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap elements at indices i and j
    }
    return arr;
  };

  const handleSelectedData = useCallback(
    (questionId, selectedOption) => {
      setData((prevData) =>
        prevData.map((question) =>
          question.id === questionId
            ? { ...question, selectedOption }
            : question
        )
      );
    },
    [setData]
  );

  const countTrues = useCallback(() => {
    let counts = 0;
    data?.forEach((item) => {
      if (item.isTrue) {
        counts++;
      }
    });

    console.log("const Trues", counts);
    setTrueCounts(counts);
  }, [setTrueCounts, data]);

  useEffect(() => {
    if (clickedCheck) {
      countTrues();
    }
  }, [clickedCheck, countTrues]);

  const handleCheckClick = () => {
    if (clickedCheck) {
      navigate("/result", { state: { trueCounts } });
    } else {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          isTrue: item.selectedOption === item.answer,
          isChecked: true,
        }))
      );
      setClickedCheck(true);
    }
  };

  return (
    <div className={styles.hContainer}>
      <main>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          data?.map((item) => (
            <Question
              key={item.id}
              question={item.question}
              options={item.options}
              handleSelectedData={handleSelectedData}
              id={item.id}
              selectedOption={item.selectedOption}
              isChecked={item.isChecked}
              isTrue={item.isTrue}
              answer={item.answer}
            />
          ))
        )}
      </main>
      <div className={styles.checkBWrapper}>
        <CheckButton
          text={clickedCheck ? "See Results" : "Check Answers"}
          checkClick={handleCheckClick}
        />
      </div>
    </div>
  );
};

export default Home;
