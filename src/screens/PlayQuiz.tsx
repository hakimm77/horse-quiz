import { Button, Container, Flex, Text, usePrevious } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getQuiz } from "../helpers/db";
import { QuizType } from "../../types/appTypes";
import Navbar from "../components/Navbar";

const PlayQuiz = ({ match }: { match: any }) => {
  const [quizID, setQuizID] = useState(match.params.id);
  const [quiz, setQuiz] = useState<QuizType>();
  const [questionIdx, setQuestionIdx] = useState(0);

  useEffect(() => {
    getQuiz(quizID).then((snapchot) => {
      setQuiz(snapchot as any);
    });
  }, []);

  const moveNextQuestion = () => {
    if (quiz && questionIdx !== quiz?.questions.length - 1) {
      setQuestionIdx((previousIdx) => previousIdx + 1);
    }
  };

  return (
    <Flex
      width="100%"
      height="100vh"
      backgroundColor="#225843"
      flexDir="column"
      alignItems="center"
    >
      <Navbar marginBottom="20px" color="#fff" />

      <Container bgColor="#fff">
        <Text mb={20}>{quiz?.questions[questionIdx].question}</Text>
        {quiz?.questions[questionIdx].choices.map((choice, idx) => (
          <Text key={idx}>{choice.choiceText}</Text>
        ))}

        <Button onClick={moveNextQuestion}>submit</Button>
      </Container>
    </Flex>
  );
};

export default PlayQuiz;
