/** @format */

import React, { useCallback, useEffect, useState } from "react";
import Question from "../components/Question";
import styles from "./styles.module.css";
import CheckButton from "../components/CheckButton";
import { nanoid } from "nanoid";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getQuestions = useCallback(async () => {
    setIsLoading(true);
    const result = await fetch(
      "https://opentdb.com/api.php?amount=5&category=20&difficulty=easy&type=multiple"
    ).then((res) => res.json());

    const newData = result.results?.map((item) => {
      return {
        id: nanoid(),
        category: item.category,
        question: item.question,
        answer: item.correct_answer,
        options: shuffleArray(item.incorrect_answers, item.correct_answer),
        selectedOption: null, // Initially no option is selected
      };
    });
    console.log("new data", newData);

    setData(newData);
    setIsLoading(false);
  }, [setData]);
  useEffect(() => {
    getQuestions();
  }, [getQuestions]);

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
    (questionId, selecteditem) => {
      console.log("selected item", questionId, selecteditem);

      /*   let item = data.find((item) => item.id === questionId);
      console.log("item found", item);
 */
      setData((prevData) =>
        prevData.map((question) =>
          question.id === questionId
            ? { ...question, selectedOption: selecteditem }
            : question
        )
      );
      console.log("updated data", data);

      /*  if (item.answer === selecteditem) {
      console.log("correct");
    } */
    },
    [data]
  );

  return (
    <div className={styles.hContainer}>
      <main>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          data?.map((item) => (
            <Question
              key={item.id}
              {...item}
              handleSelectedData={handleSelectedData}
            />
          ))
        )}
      </main>
      <div className={styles.checkBWrapper}>
        <CheckButton text="Check Answers" />
      </div>
    </div>
  );
};

export default Home;

/*   const questionsLlist = data?.map((item) => {
    return <Question key={item.id} {...item} />;
  }); */

/* 
  const getQuestions = useCallback(async () => {
    await fetch(
      "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
    )
      .then((jsonData) => jsonData.json())
      .then((result) => {
        const data = result.results;
        const newData = [];

        data?.map((item) => {
          newData.push({
            id: nanoid(),
            category: item.category,
            question: item.question,
            answer: item.correct_answer,
            options: shuffleArray(item.incorrect_answers, item.correct_answer),
          });
        });
        console.log("api ", newData);
        setData(newData);
      });
  }, []); */
