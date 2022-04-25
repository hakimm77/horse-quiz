import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const Search = () => {
  return (
    <Flex
      flexDir="column"
      width="100%"
      height="100vh"
      backgroundColor="#225843"
      alignItems="center"
    >
      <Navbar marginBottom="20px" color="#fff" />

      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt={100}
      >
        <Heading color="#fff" mb={20} size="2xl">
          Search for quizzes
        </Heading>

        <Flex flexDir="column" width="100%" alignItems="center">
          <InputGroup
            width={window.innerWidth - 200}
            alignItems="center"
            justifyContent="center"
          >
            <Input
              width="80%"
              height="80px"
              borderRadius={10}
              backgroundColor="#efbcc8"
              color="#1D1D1D"
              fontSize={25}
              placeholder="Sök efter frågesporter..."
              _placeholder={{ color: "gray" }}
            />

            <InputRightAddon
              cursor="pointer"
              height="80px"
              width="80px"
              backgroundColor="#1D1D1D"
              alignItems="center"
              justifyContent="center"
            >
              <SearchIcon width="40px" height="40px" color="#fff" />
            </InputRightAddon>
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Search;
