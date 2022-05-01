import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";

const PaymentScreen = ({ match }: { match: any }) => {
  const [quizId, setQuizId] = useState(match.params.id);

  return (
    <Flex
      width="100%"
      backgroundColor="#225843"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Navbar marginBottom="20px" color="#fff" />
    </Flex>
  );
};

export default PaymentScreen;
