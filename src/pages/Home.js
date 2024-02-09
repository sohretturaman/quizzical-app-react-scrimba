/** @format */

import React, { useEffect, useState } from "react";
import Question from "../components/Question";
import styles from "./styles.module.css";
import CheckButton from "../components/CheckButton";
import { nanoid } from "nanoid";

const Home = () => {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
      .then((jsonData) => jsonData.json())
      .then((result) => {
        const data = result.results;
        const newData = [];

        data?.map((item) => {
          let randomId = nanoid();
          let options = shuffleArray(
            item.incorrect_answers,
            item.correct_answer
          );
          newData.push({
            id: randomId,
            category: item.category,
            question: item.question,
            answer: item.correct_answer,
            options: options,
          });
        });
 setData(newData);
      
      });
  }, []);



  const questionsLlist = data?.map((item) => {
    return (
      <Question
        key={item.id}
      {...item}
      />
    );
  })
  return (
    <div className={styles.hContainer}>
      <main>
       {questionsLlist}
      </main>
      <div className={styles.checkBWrapper}>
        <CheckButton text="Check Answers" />
      </div>
    </div>
  );
};

export default Home;
