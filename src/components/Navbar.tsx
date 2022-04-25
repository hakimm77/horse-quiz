import { ArrowDownIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  StatDownArrow,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { isMobile } from "../helpers/mobile";

const Navbar = ({
  marginBottom = "40px",
  color = "#225843",
}: {
  marginBottom?: string;
  color?: string;
}) => {
  const [navItems, setnavItems] = useState([
    { name: "Läs mer", navigation: "/about" },
    { name: "Quiz", navigation: "/quizzes" },
    { name: "Sök", navigation: "/search" },
  ]);

  return (
    <Flex
      flexDir={"row"}
      width={isMobile ? "95%" : "85%"}
      alignItems="center"
      justifyContent="space-between"
      mt="20px"
      mb={marginBottom}
    >
      <Image
        src={require("../assets/app-logo.png")}
        width={isMobile ? "60px" : "80px"}
        height={isMobile ? "60px" : "80px"}
        margin={0}
        padding={0}
        onClick={() => {
          window.location.href = "/";
        }}
        cursor="pointer"
      />

      {isMobile ? (
        <Menu>
          <MenuButton aria-label="Options">
            <HamburgerIcon
              width={50}
              height={50}
              color={marginBottom === "40px" ? "#1D1D1D" : "#fff"}
            />
          </MenuButton>
          <MenuList borderColor="#1D1D1D">
            {navItems.map((item, idx) => (
              <MenuItem
                icon={
                  item.name === "Sök" ? (
                    <SearchIcon />
                  ) : (
                    <StatDownArrow color="#1D1D1D" />
                  )
                }
                onClick={() => {
                  window.location.href = item.navigation;
                }}
              >
                {item.name}
              </MenuItem>
            ))}
            <MenuItem
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              logga in
            </MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <>
          <Flex flexDir="row" alignItems="center">
            {navItems.map((item, idx) => (
              <Flex
                key={idx}
                cursor="pointer"
                onClick={() => {
                  window.location.href = item.navigation;
                }}
                marginInline={8}
              >
                <Text
                  color={color}
                  fontSize={isMobile ? 15 : 18}
                  fontWeight="semibold"
                >
                  {item.name === "Sök" ? (
                    <SearchIcon color={color} margin={3} />
                  ) : (
                    <StatDownArrow color={color} margin={3} />
                  )}
                  {item.name}
                </Text>
              </Flex>
            ))}
          </Flex>

          <Flex
            cursor="pointer"
            onClick={() => {
              window.location.href = "/login";
            }}
            marginInline={8}
          >
            <Text
              color={color}
              fontSize={isMobile ? 15 : 18}
              fontWeight="semibold"
            >
              logga in
            </Text>
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default Navbar;
