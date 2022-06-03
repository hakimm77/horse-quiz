import { addDoc, collection, getDocs } from "firebase/firestore";
import React from "react";
import { QuestionsType, QuizType } from "../../types/appTypes";
import { db } from "./firebase";

export const addQuiz = (
  name: string,
  description: string,
  price: string,
  level: string,
  questions: Array<QuestionsType>
) => {
  console.log(name, description, price, level);

  if (name && description && price && level) {
    addDoc(collection(db, "quizzes"), {
      name: name,
      description: description,
      price: price,
      level: level,
      questions: questions,
    });

    console.log("done");
    window.location.href = "/admin-page";
  } else {
    alert("Plese fill up all inputs");
  }
};

export const getQuizzes = async (
  setQuizzes: React.Dispatch<
    React.SetStateAction<Array<QuizType> | Array<undefined>>
  >
) => {
  let arr: Array<QuizType> = [];

  await getDocs(collection(db, "quizzes")).then((snapchot) => {
    snapchot.forEach(async (childSnapchot) => {
      arr = [...arr, childSnapchot.data() as QuizType];
    });
  });

  console.log(arr);
  setQuizzes(arr);
};
