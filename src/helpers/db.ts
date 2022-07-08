import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import React from "react";
import { QuestionsType, QuizType } from "../../types/appTypes";
import { db } from "./firebase";

export const addQuiz = async (
  name: string,
  description: string,
  price: string,
  level: string,
  questions: Array<QuestionsType>
) => {
  console.log(name, description, price, level);
  const id = performance.now();

  if (name && description && price && level) {
    await setDoc(doc(db, `quizzes/${id}`), {
      name: name,
      description: description,
      price: price,
      level: level,
      questions: questions,
      id: id,
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

export const getQuiz = async (id: string): Promise<QuizType> => {
  return await getDoc(doc(db, `quizzes/${id}`)).then(
    (snapchot) => snapchot.data() as QuizType
  );
};
