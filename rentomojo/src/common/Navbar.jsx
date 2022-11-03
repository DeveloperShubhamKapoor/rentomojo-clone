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
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate()
  const handleLoginSignup=()=>{
    navigate("/signup")
  }
  return (
    <div>
      <Box
        className={styles.navbar_container}
        bg="white"
        p={4}
        color="black"
      >
        <Flex justifyContent="space-evenly">
          <Link to="/"><img src={logo} alt="rentomojologo" /></Link>
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
          <button onClick={handleLoginSignup} className={styles.login_signup_btn}>Login/Signup</button>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
