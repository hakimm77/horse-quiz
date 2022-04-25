import { Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import TypeWriter from "../components/TypeWriter";
import { isMobile } from "../helpers/mobile";
import ItemsCarousel from "react-items-carousel";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const LandingPage = () => {
  const [profiles, setProfiles] = useState([
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
  ]);
  const [visible, setVisible] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const textBoxRef: any = useRef();
  const videoRef: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });

    textBoxRef.current && observer.observe(textBoxRef.current);

    return () => observer.unobserve(textBoxRef.current);
  }, []);

  return (
    <Flex
      width="100%"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#225843"
    >
      <Navbar color="#fff" />

      <Flex
        flexDir={isMobile ? "column" : "row"}
        width="95%"
        alignItems="center"
        justifyContent="space-between"
        mb="100px"
        mt={10}
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          width={isMobile ? "95%" : "30%"}
          mb={isMobile ? "50px" : 0}
        >
          <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            lineHeight={1.2}
            fontFamily="Seymour One"
            mb={3}
          >
            <Text color="#efbcc8" fontSize={45}>
              EVERYONE
            </Text>
            <Text fontSize={45} color="#1a202c">
              CAN MAKE
            </Text>
            <Flex flexDirection="row">
              <Text fontSize={45} mr={3} color="#1a202c">
                THE
              </Text>
              <Text color="#efbcc8" fontSize={45}>
                TOP
              </Text>
            </Flex>
          </Flex>

          <Text
            color="#fff"
            fontSize={20}
            textAlign="center"
            width="80%"
            mb={8}
          >
            Tävla mot dig själv eller utmana kända ryttarprofiler,
            hästintresserade & experter i hästkunskap.
          </Text>

          <Button width={"80%"} height="50px" backgroundColor="#efbcc8">
            <Text color="#225843" fontSize={20}>
              Utforska våra quiz
            </Text>
          </Button>
        </Flex>

        {/*............/////////////////////////.*/}

        <Flex
          flexDir="column"
          width={isMobile ? "95%" : "60%"}
          mb={isMobile ? "50px" : 0}
        >
          {/* <Flex flexDir="row" minWidth="100%" overflowX="auto">
            {profiles.map((item, idx) => (
              <Flex key={idx} position="relative" cursor="pointer">
                <>
                  <Image
                    src={require("../assets/example-profile.jpg")}
                    minHeight="270px"
                    minWidth="190px"
                    objectFit="cover"
                    borderRadius={10}
                    mr={5}
                  />
                </>
              </Flex>
            ))}
          </Flex> */}

          <div
            style={{
              padding: isMobile ? 0 : "0 60px",
              maxWidth: isMobile ? "100%" : 800,
              margin: isMobile ? 0 : "0 auto",
            }}
          >
            <Flex flexDir="row" alignItems="center" mb={5}>
              <Text fontSize={20} color="#efbcc8" fontWeight="600" mr={2}>
                Populärt just nu
              </Text>

              <Text
                fontSize={16}
                color="#1D1D1D"
                cursor="pointer"
                onClick={() => {
                  console.log("heyvye");
                }}
              >
                Se alla
              </Text>
            </Flex>

            <ItemsCarousel
              infiniteLoop={false}
              gutter={isMobile ? 5 : 10}
              activePosition={"center"}
              chevronWidth={isMobile ? 0 : 60}
              disableSwipe={false}
              alwaysShowChevrons={false}
              numberOfCards={3}
              slidesToScroll={1}
              outsideChevron={isMobile ? false : true}
              showSlither={false}
              firstAndLastGutter={false}
              activeItemIndex={activeItemIndex}
              requestToChangeActive={(value: any) => setActiveItemIndex(value)}
              rightChevron={
                isMobile ? (
                  <></>
                ) : (
                  <ArrowForwardIcon
                    backgroundColor="#fff"
                    borderRadius={100}
                    width={30}
                    height={30}
                  />
                )
              }
              leftChevron={
                isMobile ? (
                  <></>
                ) : (
                  <ArrowBackIcon
                    backgroundColor="#fff"
                    borderRadius={100}
                    width={30}
                    height={30}
                  />
                )
              }
            >
              {Array.from(new Array(10)).map((_, i) => (
                <Image
                  src={require("../assets/example-profile.jpg")}
                  minHeight="300px"
                  objectFit="cover"
                  borderRadius={10}
                  cursor="pointer"
                />
              ))}
            </ItemsCarousel>
          </div>
        </Flex>
      </Flex>

      <Flex
        flexDir={isMobile ? "column" : "row"}
        width="95%"
        alignItems="flex-start"
        justifyContent={isMobile ? "center" : "space-between"}
        mb="20px"
      >
        <Flex
          flexDir="column"
          justifyContent="center"
          width={isMobile ? "100%" : "60%"}
        >
          <Text
            color="#fff"
            fontSize={21}
            fontFamily="Seymour One"
            textAlign="center"
            mb={10}
          >
            Få tillgång till 5000+ frågor, ligor & tävlingar varje månad.
          </Text>
          <Flex
            backgroundColor="#225843"
            justifyContent="center"
            alignItems="center"
            width={"100%"}
            mb={20}
          >
            <video
              ref={videoRef}
              preload="auto"
              style={{
                width: "100%",
                height: isMobile ? 350 : 520,
                objectFit: "cover",
                marginBottom: 20,
                borderRadius: 15,
              }}
              loop
              muted
              autoPlay
              controls={false}
            >
              <source
                src={
                  "https://firebasestorage.googleapis.com/v0/b/saddle-up-40172.appspot.com/o/horse-video.mp4?alt=media&token=ee27e36f-520a-47e8-9452-1564f9c95d42"
                }
                type="video/mp4"
              />
            </video>
          </Flex>
        </Flex>

        {/*///////////////////////////////////////////*/}
        <Flex
          ref={textBoxRef}
          flexDir="column"
          backgroundColor="#efbcc8"
          borderRadius={15}
          padding="50px"
          width={isMobile ? "100%" : "400px"}
          height={isMobile ? 420 : 520}
          mr={30}
          alignItems="center"
        >
          <Text
            color="#225843"
            fontSize={isMobile ? 21 : 25}
            fontWeight="bold"
            mb={10}
          >
            QUIZTOPPEN
          </Text>

          {visible && (
            <TypeWriter
              content={`The lone lamp post of the one-street town flickered, not quite dead
                      but definitely on its way out. Suitcase by her side, she paid no
                      heed to the light.heed to the light.heed to the light. Suitcase by her side,
                       Suitcase by her side, 
                       Suitcase by her side.`}
              speed={50}
            />
          )}

          <Button
            backgroundColor="#225843"
            color="#efbcc8"
            fontWeight="semibold"
            width="50%"
            mt={isMobile ? "" : "30%"}
          >
            Tävla här
          </Button>
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="center"
        borderRadius={10}
        color="#225843"
        backgroundColor="#efbcc8"
        width="300px"
        height={50}
        padding={5}
        fontWeight="bold"
        cursor="pointer"
        mb="60px"
      >
        Could we have a test quiz here?
      </Flex>

      <Flex
        width="100%"
        flexDir={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent={isMobile ? "center" : "flex-end"}
        paddingLeft={isMobile ? "8%" : "10%"}
        mb={"60px"}
      >
        {[1, 2, 3].map((item, idx) => (
          <Flex key={idx} flexDir="column" mb={isMobile ? 10 : ""}>
            <Text
              width={isMobile ? "90%" : "60%"}
              color="#efbcc8"
              fontSize={25}
              textAlign="center"
            >
              "I love Saddle up, it gave me a lot of knowledge"
            </Text>
          </Flex>
        ))}
      </Flex>

      <Flex
        flexDir={isMobile ? "column" : "row"}
        backgroundColor="#efbcc8"
        width="90%"
        height={isMobile ? 300 : 400}
        alignItems="center"
        justifyContent={isMobile ? "center" : "space-around"}
        mb={20}
        borderRadius={15}
      >
        <Flex
          cursor="pointer"
          width={isMobile ? "70%" : "25%"}
          height={isMobile ? "50px" : "80px"}
          backgroundColor="#225843"
          borderRadius={10}
          fontWeight="bold"
          fontSize={isMobile ? 18 : 23}
          color="#efbcc8"
          alignItems="center"
          justifyContent="center"
          mb={isMobile ? "40px" : 0}
        >
          TÄVLA MOT DIG SJÄLV
        </Flex>

        <Flex
          cursor="pointer"
          width={isMobile ? "70%" : "25%"}
          height={isMobile ? "50px" : "80px"}
          backgroundColor="#225843"
          borderRadius={10}
          fontWeight="bold"
          fontSize={isMobile ? 18 : 23}
          color="#efbcc8"
          alignItems="center"
          justifyContent="center"
        >
          TÄVLA MOT ANDRA
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
