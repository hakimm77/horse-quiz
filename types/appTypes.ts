interface QuestionChoice {
  choiceText: string;
  isCorrect: boolean;
}

export interface QuestionsType {
  question: string;
  choices: Array<QuestionChoice>;
}

export interface QuizType {
  name: string;
  description: string;
  level: string;
  price: string;
  questions: Array<QuestionsType>;
}
