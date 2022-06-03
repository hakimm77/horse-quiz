import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { quizPayment } from "../helpers/payment";

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

      <Text color="#fff">{quizId}</Text>
      <Button onClick={quizPayment}>Pay up</Button>
    </Flex>
  );
};

export default PaymentScreen;
