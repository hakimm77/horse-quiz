import {
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Text,
  usePrevious,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getQuiz } from "../helpers/db";
import { QuizType } from "../../types/appTypes";
import Navbar from "../components/Navbar";
import { Loading } from "../components/Loading";

const PlayQuiz = ({ match }: { match: any }) => {
  const [quizID, setQuizID] = useState(match.params.id);
  const [quiz, setQuiz] = useState<QuizType>();
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [results, setResults] = useState<any>([]);

  useEffect(() => {
    getQuiz(quizID).then(async (snapchot) => {
      setQuiz(snapchot as any);
    });
  }, []);

  const moveNextQuestion = () => {
    if (quiz && questionIdx !== quiz?.questions.length - 1) {
      if (typeof answers[questionIdx] !== "undefined") {
        setQuestionIdx((previousIdx) => previousIdx + 1);
      } else {
        alert("Choose an answer to continue");
      }
    } else {
      answers.forEach((item) => {
        setResults((p: any) => [
          ...p,
          {
            [answers.indexOf(item)]:
              quiz?.questions[answers.indexOf(item)].choices[item].isCorrect,
          },
        ]);
      });
    }
  }; //fixxxxx

  const chooseAnswer = async (choiceIdx: number) => {
    let answerList = [...answers];
    answerList[questionIdx] = choiceIdx;

    setAnswers(answerList);
  };

  useEffect(() => {
    console.log(results);
  }, [results]);

  return (
    <Flex
      width="100%"
      height="100vh"
      backgroundColor="#225843"
      flexDir="column"
      alignItems="center"
    >
      <Navbar marginBottom="20px" color="#fff" />

      {quiz ? (
        results ? (
          <Flex
            flexDirection="column"
            bgColor="#fff"
            padding={5}
            width="55%"
            height="60%"
            justifyContent="center"
            alignItems="center"
            borderRadius={10}
          >
            <Heading mb={20}>{quiz?.questions[questionIdx].question}</Heading>

            <Flex flexDirection="column" mb={10}>
              {quiz?.questions[questionIdx].choices.map((choice, choiceIdx) => (
                <Flex key={choiceIdx} flexDir="row" alignItems="center">
                  <Checkbox
                    borderColor="#1D1D1D"
                    padding={3}
                    onChange={(e: any) => {
                      chooseAnswer(choiceIdx);
                    }}
                    isChecked={answers[questionIdx] === choiceIdx}
                  />
                  <Text fontSize={23}>{choice.choiceText}</Text>
                </Flex>
              ))}
            </Flex>

            <Button
              width={100}
              height={50}
              onClick={moveNextQuestion}
              backgroundColor="#1D1D1D"
              color="#fff"
            >
              {questionIdx === quiz.questions.length - 1 ? "submit" : "next"}
            </Button>
            <Text fontSize={23} color="#1D1D1D">{`${questionIdx + 1} / ${
              quiz?.questions.length
            }`}</Text>
          </Flex>
        ) : (
          <Flex
            flexDirection="column"
            bgColor="#fff"
            padding={5}
            width="55%"
            height="60%"
            justifyContent="center"
            alignItems="center"
            borderRadius={10}
          >
            <Text>hyebye</Text>
          </Flex>
        )
      ) : (
        <Loading />
      )}
    </Flex>
  );
};

export default PlayQuiz;
