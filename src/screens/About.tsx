import { Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { isMobile } from "../helpers/mobile";
import { team } from "../helpers/team";

const About = () => {
  const videoRef: any = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, [true]);

  return (
    <Flex
      width="100%"
      backgroundColor="#225843"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDir="column"
        pos="absolute"
        top={0}
        backgroundColor="rgba(34, 88, 67, .5)"
        width="100%"
        alignItems="center"
        zIndex={99}
      >
        <Navbar marginBottom="20px" color="#fff" />
      </Flex>

      <Flex
        width="100%"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <video
          ref={videoRef}
          preload="auto"
          style={{
            width: "100%",
            height: window.innerHeight,
            objectFit: "cover",
            marginBottom: 100,
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

        <Text
          textAlign="center"
          lineHeight={1.2}
          fontFamily="Seymour One"
          fontSize={isMobile ? 35 : 50}
          color="#fff"
          width={isMobile ? "90%" : "60%"}
          position="absolute"
          top={isMobile ? "10%" : "23%"}
          left={isMobile ? "5%" : "20%"}
          zIndex={1}
          textShadow="-0.5px -0.5px 0 #000, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #000, 0.5px 0.5px 0 #000"
        >
          SOME CATCH PHRASE SOME CATCH PHRASE
        </Text>
      </Flex>

      <Flex flexDir="column" width="100%" backgroundColor="#225843">
        <Text
          color="#bad59e"
          fontSize={isMobile ? 30 : 40}
          fontWeight="bold"
          paddingLeft="5%"
          mb={10}
        >
          TEAM
        </Text>

        <Flex
          flexDir={isMobile ? "column" : "row"}
          width="100%"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          {team.map((item, idx) => (
            <Flex
              key={idx}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              width={isMobile ? "100%" : "50%"}
              mb={isMobile ? 20 : 0}
            >
              <Flex
                mb={5}
                clipPath='path("M 193.1 59 c -8.6 -19.5 -20.7 -39.1 -40.3 -49.2 c -1.8 -0.9 -3.7 -1.8 -5.6 -2.5 C 137.9 3.2 128.1 1 118 0.6 c -1.4 -0.2 -2.9 -0.4 -4.4 -0.5 c -9.6 -0.7 -18.3 1.3 -26.3 5 c -14.6 4.5 -28.8 11.7 -40.8 20.6 c -15.7 11.8 -28.7 27 -36.5 45.2 c -4.6 10.7 -7.2 21.9 -8.6 33.5 c -1.5 12 -2.3 24.6 0.3 36.4 c 4.6 20.6 21.6 37 40.1 45.9 c 19.4 9.3 41.1 12.1 62.3 9.3 c 22.5 -3 43.9 -11.9 63.1 -23.9 c 17.3 -10.8 34 -25.4 38.8 -46.1 c 5.3 -23.1 -3.8 -46.2 -12.9 -67 Z")'
              >
                <Image
                  src={item.picture}
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </Flex>

              <Text color="#efbcc8" fontSize={40} mb={8}>
                {item.name}
              </Text>

              <Text color="#efbcc8" fontSize={35} mb={5}>
                {item.role}
              </Text>

              <Text fontSize={20} fontWeight="bold" color="#fff">
                Bakgrund:
              </Text>
              <Text
                fontSize={20}
                color="#fff"
                width={isMobile ? "85%" : "50%"}
                mb={5}
              >
                {item.background}
              </Text>

              <Text fontSize={20} fontWeight="bold" color="#fff">
                Egenskaper:
              </Text>
              <Text
                fontSize={20}
                color="#fff"
                width={isMobile ? "85%" : "50%"}
                mb={5}
              >
                {item.characteristics}
              </Text>

              <Text fontSize={20} fontWeight="bold" color="#fff">
                Övrigt:
              </Text>
              <Text
                fontSize={20}
                color="#fff"
                width={isMobile ? "85%" : "50%"}
                mb={5}
              >
                {item.other}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
