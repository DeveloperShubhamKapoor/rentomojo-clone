import React from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Input,
} from "@chakra-ui/react";
import styles from "../styles/homepage.module.css";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { HiOutlineShoppingCart } from "react-icons/hi";
import  logo  from "../images/rentomojo.jpeg";
const Navbar = () => {
  return (
    <div>
      <Box
        className={styles.navbar_container}
        bg="white"
        p={4}
        color="black"
      >
        <Flex justifyContent="space-evenly">
          <img src={logo} alt="rentomojologo" />
          <Button
            rightIcon={<ChevronDownIcon />}
            colorScheme="black"
            variant="ghost"
          >
            Delhi
          </Button>
          <Input placeholder="Search for Products" width="45%" />
          <Button
            leftIcon={<HiOutlineShoppingCart />}
            colorScheme="black"
            variant="ghost"
          >
            Cart
          </Button>
          <button className={styles.login_signup_btn}>LOGIN/SIGNUP</button>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
