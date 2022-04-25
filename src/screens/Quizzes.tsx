import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { isMobile } from "../helpers/mobile";

const Quizzes = () => {
  const [category, setCategory] = useState("Category 1");
  const [displayCategories, setDisplayCategories] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("Bas");

  return (
    <Flex
      flexDir="column"
      width="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#225843"
    >
      <Navbar marginBottom="20px" color="#fff" />

      <Flex flexDir="column" mt={50} width={isMobile ? "98%" : "80%"}>
        <Flex
          flexDir={isMobile ? "row" : "column"}
          onClick={() => {
            if (isMobile) setDisplayCategories((p) => (p ? false : true));
          }}
          alignItems="center"
          justifyContent="center"
        >
          <Text
            color="white"
            fontWeight="bold"
            fontSize={isMobile ? 40 : 50}
            mb="40px"
            ml={isMobile ? 10 : "25%"}
          >
            {category}
          </Text>

          {isMobile ? (
            displayCategories ? (
              <ArrowUpIcon
                color="#fff"
                ml={5}
                mt={-8}
                width="50px"
                height="50px"
              />
            ) : (
              <ArrowDownIcon
                color="#fff"
                ml={5}
                mt={-8}
                width="50px"
                height="50px"
              />
            )
          ) : null}
        </Flex>

        {isMobile && displayCategories && (
          <Flex
            flexDir="column"
            width="98%"
            justifyContent="center"
            alignItems="center"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
              <Flex
                flexDir="row"
                margin="20px"
                cursor="pointer"
                alignItems="center"
                key={idx}
                onClick={() => {
                  setCategory(`Category ${item}`);
                }}
              >
                {category === `Category ${item}` && (
                  <ArrowRightIcon
                    color="#fff"
                    mr={3}
                    width="25px"
                    height="25px"
                  />
                )}

                <Text
                  color="#efbcc8"
                  _hover={{ color: "#fff" }}
                  fontWeight="bold"
                  fontSize={20}
                >{`Category ${item}`}</Text>
              </Flex>
            ))}
          </Flex>
        )}

        <Flex
          flexDir="row"
          width="100%"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          {!isMobile && (
            <Flex flexDir="column" width="25%">
              {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
                <Flex
                  flexDir="row"
                  margin="20px"
                  cursor="pointer"
                  alignItems="center"
                  key={idx}
                  onClick={() => {
                    setCategory(`Category ${item}`);
                  }}
                >
                  {category === `Category ${item}` && (
                    <ArrowRightIcon
                      color="#fff"
                      mr={3}
                      width="25px"
                      height="25px"
                    />
                  )}

                  <Text
                    color="#efbcc8"
                    _hover={{ color: "#fff" }}
                    fontWeight="bold"
                    fontSize={20}
                  >{`Category ${item}`}</Text>
                </Flex>
              ))}
            </Flex>
          )}

          <Flex
            flexDir="column"
            width={isMobile ? "100%" : "75%"}
            alignItems="center"
            justifyContent="center"
            mb={20}
          >
            <Flex
              flexDir="row"
              alignItems="center"
              justifyContent="space-around"
              mb={10}
              width={isMobile ? "100%" : "80%"}
            >
              {["Bas", "Medel", "Avancerad"].map((item) => (
                <Button
                  backgroundColor="#efbcc8"
                  color="#225843"
                  fontWeight="semibold"
                  width="20%"
                  mb={"10px"}
                  opacity={selectedLevel === item ? 1 : 0.6}
                  onClick={() => {
                    setSelectedLevel(item);
                  }}
                >
                  {item}
                </Button>
              ))}
            </Flex>

            <Flex
              flexDir="row"
              flexWrap="wrap"
              alignItems="center"
              justifyContent="center"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                <Flex
                  key={idx}
                  width={isMobile ? "150px" : "250px"}
                  height={isMobile ? "250px" : "350px"}
                  backgroundColor="#000"
                  borderRadius={10}
                  alignItems="center"
                  justifyContent="center"
                  marginRight={isMobile ? "8px" : 15}
                  marginBottom={isMobile ? "8px" : 15}
                  cursor="pointer"
                >
                  <Text
                    color="white"
                    fontWeight="bold"
                    fontSize={isMobile ? 30 : 40}
                  >{`Quiz ${item}`}</Text>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Quizzes;
