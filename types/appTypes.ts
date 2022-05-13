interface QuestionChoice {
  choiceText: string;
  isCorrect: boolean;
}

export interface QuestionsType {
  question: string;
  choices: Array<QuestionChoice>;
}
