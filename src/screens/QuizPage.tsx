import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { isMobile } from "../helpers/mobile";

const QuizPage = ({ match }: { match: any }) => {
  const [quizName, setQuizName] = useState(match.params.name);

  return (
    <Flex
      width="100%"
      backgroundColor="#225843"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Navbar marginBottom="20px" color="#fff" />

      <Image
        src={require("../assets/quiz-background.jpg")}
        width="100%"
        height={600}
        objectFit="cover"
        mb={50}
      />

      <Heading color="#fff" size="2xl" mb={10}>
        {quizName}
      </Heading>

      <Flex
        width="90%"
        flexDir="column"
        alignItems={isMobile ? "center" : undefined}
      >
        <Text color="#fff" fontWeight="bold" fontSize={30} mb={5}>
          About this quiz
        </Text>

        <Text
          width={isMobile ? "100%" : "60%"}
          textAlign={isMobile ? "center" : undefined}
          color="#fff"
          fontSize={18}
          mb={5}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>

        <Text color="#fff" fontSize={24} fontWeight="bold" mb={5}>
          for 250 SEK
        </Text>

        <Button
          backgroundColor="#efbcc8"
          color="#225843"
          width={200}
          mb={10}
          onClick={() => {
            window.location.href =
              "https://buy.stripe.com/test_cN23d726UeOUdBmcMM";
          }}
        >
          Buy quiz
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuizPage;
