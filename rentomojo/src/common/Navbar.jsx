import React, { useState } from "react";
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
import { Tooltip } from '@chakra-ui/react'
const Navbar = () => {
  const navigate = useNavigate()
  const [token,setToken] = useState(localStorage.getItem("token_rento_mojo"))
  const userEmail = localStorage.getItem("userEmail")
  const handleLoginSignup=()=>{
    navigate("/signup")
  }
  const handleSignout=()=>{
    console.log("in")
    setToken(null)
    localStorage.removeItem("token_rento_mojo")
    localStorage.removeItem("userEmail")
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
          {token ? 
          <Tooltip onClick={handleSignout} hasArrow label="Sign Out" bg='red.600'>
            <div className={styles.user_login_info}>
              <p className={styles.user_name_first_letter}>{userEmail[1]}</p>
            </div>
          </Tooltip>
          :<button onClick={handleLoginSignup} className={styles.login_signup_btn}>Login/Signup</button>}
          
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
