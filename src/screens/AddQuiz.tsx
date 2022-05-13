import {
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { QuestionsType } from "../../types/appTypes";
import { addQuiz } from "../helpers/db";

const questionBoilerPlate = {
  question: "",
  choices: [
    {
      choiceText: "",
      isCorrect: false,
    },
    {
      choiceText: "",
      isCorrect: false,
    },
    {
      choiceText: "",
      isCorrect: false,
    },
    {
      choiceText: "",
      isCorrect: false,
    },
  ],
};

const AddQuiz = () => {
  const [questions, setQuestions] = useState<Array<QuestionsType>>([
    questionBoilerPlate,
  ]);
  const [quizName, setQuizName] = useState<string>("");
  const [quizDescription, setQuizDescription] = useState<string>("");
  const [quizPrice, setQuizPrice] = useState<string>("");
  const [quizLevel, setQuizLevel] = useState<string>("");

  const updateState = async (
    questionIndex: number,
    choiceIndex: number,
    type: string,
    value?: string | number
  ) => {
    let newState = [...questions];

    switch (type) {
      case "choiceBoolean":
        let previousValue =
          newState[questionIndex].choices[choiceIndex].isCorrect;

        newState[questionIndex].choices[choiceIndex].isCorrect = previousValue
          ? false
          : true;
        break;
      case "questionText":
        newState[questionIndex].question = value as string;
        break;

      case "choiceText":
        newState[questionIndex].choices[choiceIndex].choiceText =
          value as string;
        break;
    }

    setQuestions(newState);
  };

  return (
    <Flex
      flexDir="column"
      width="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#225843"
    >
      <Navbar color="#fff" />

      <Flex
        flexDir="column"
        width="75%"
        padding={10}
        backgroundColor="#efbcc8"
        borderColor="#225843"
        mb={30}
      >
        <Input
          width="90%"
          placeholder="Name for quiz"
          _placeholder={{ color: "#225843" }}
          mb={10}
          onChange={(e) => {
            setQuizName(e.target.value);
          }}
        />

        <Input
          width="90%"
          placeholder="Price for quiz"
          _placeholder={{ color: "#225843" }}
          mb={10}
          onChange={(e) => {
            setQuizPrice(e.target.value);
          }}
        />

        <Select
          placeholder="Select quiz level"
          mb={10}
          width="90%"
          color="#225843"
          borderColor="#225843"
          onChange={(e) => {
            setQuizLevel(e.target.value);
          }}
        >
          <option value="Bas">Bas</option>
          <option value="Medel">Medel</option>
          <option value="Advancerad">Advancerad</option>
        </Select>

        <Textarea
          onChange={(e) => {
            setQuizDescription(e.target.value);
          }}
          width="90%"
          height={100}
          placeholder="Description for quiz"
          _placeholder={{ color: "#225843" }}
          mb={30}
        />

        <Heading textAlign="center" mb="60px">
          Questions
        </Heading>

        {questions.map((question, questionIdx) => (
          <Flex
            flexDir="column"
            mb={20}
            borderColor="#225843"
            borderWidth={1}
            padding={5}
          >
            <Heading textAlign="center" mb={10} color="#225843">{`question ${
              questionIdx + 1
            }`}</Heading>

            <Input
              borderColor="#225843"
              width="90%"
              placeholder={"Question"}
              _placeholder={{ color: "#225843" }}
              value={question.question}
              mb={5}
              onChange={(e) => {
                updateState(questionIdx, 0, "questionText", e.target.value);
              }}
            />

            <Heading mb={30} size="md" color="#225843">
              Choices
            </Heading>

            {question.choices.map((choice, choiceIdx) => (
              <Flex flexDir="row" alignItems="center" mb={1}>
                <Input
                  value={choice.choiceText}
                  borderColor="#225843"
                  placeholder={`choice ${choiceIdx + 1}`}
                  _placeholder={{ color: "#225843" }}
                  onChange={(e) => {
                    updateState(
                      questionIdx,
                      choiceIdx,
                      "choiceText",
                      e.target.value
                    );
                  }}
                />
                <Checkbox
                  borderColor="#225843"
                  padding={5}
                  isChecked={choice.isCorrect}
                  onChange={() => {
                    updateState(questionIdx, choiceIdx, "choiceBoolean");
                  }}
                />
              </Flex>
            ))}
          </Flex>
        ))}

        <Button height="50px" backgroundColor="#225843" mb={10} width={200}>
          <Text
            color="#efbcc8"
            fontSize={20}
            onClick={() => {
              setQuestions((p) => [...p, questionBoilerPlate]);
            }}
          >
            Add question
          </Text>
        </Button>
      </Flex>

      <Button
        height="50px"
        backgroundColor="#efbcc8"
        mb={10}
        width={200}
        onClick={() => {
          addQuiz(quizName, quizDescription, quizPrice, quizLevel, questions);
        }}
      >
        <Text color="#225843" fontSize={20}>
          Add quiz
        </Text>
      </Button>
    </Flex>
  );
};

export default AddQuiz;
