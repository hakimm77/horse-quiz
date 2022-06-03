import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { QuizType } from "../../types/appTypes";
import Navbar from "../components/Navbar";
import { getQuizzes } from "../helpers/db";

const AdminPage = () => {
  const [quizzes, setQuizzes] = useState<Array<QuizType> | Array<undefined>>(
    []
  );

  useEffect(() => {
    getQuizzes(setQuizzes);
  }, []);

  return (
    <Flex
      flexDir="column"
      width="100%"
      alignItems="center"
      backgroundColor="#225843"
      height="100vh"
    >
      <Navbar color="#fff" />

      {quizzes.length > 0 ? (
        <>
          <Button height="50px" backgroundColor="#efbcc8" mb={10}>
            <Text
              color="#225843"
              fontSize={20}
              onClick={() => {
                window.location.href = "/add-quiz-page";
              }}
            >
              Add new quiz
            </Text>
          </Button>
          <Flex flexDir="column" width="80%" mb={10}>
            {quizzes.map((quiz) => (
              <Flex
                flexDir="row"
                alignItems="center"
                width="100%"
                height={70}
                padding={10}
                borderRadius={10}
                backgroundColor="#f3d2da"
                mb={3}
                cursor="pointer"
              >
                <Text color="#225843" fontSize={22} fontWeight="bold">
                  {quiz?.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        </>
      ) : (
        <Spinner color="#efbcc8" size="md" />
      )}
    </Flex>
  );
};

export default AdminPage;
