import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const AdminPage = () => {
  const [tempQuizzes, setTempQuizzes] = useState([1, 2, 3, 4, 5, 6, 7]);

  return (
    <Flex
      flexDir="column"
      width="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#225843"
    >
      <Navbar color="#fff" />

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
        {tempQuizzes.map((quiz) => (
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
            <Text
              color="#225843"
              fontSize={22}
              fontWeight="bold"
            >{`Quiz ${quiz}`}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default AdminPage;
