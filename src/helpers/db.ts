import { addDoc, collection } from "firebase/firestore";
import { QuestionsType } from "../../types/appTypes";
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
  } else {
    alert("Plese fill up all inputs");
  }
};
