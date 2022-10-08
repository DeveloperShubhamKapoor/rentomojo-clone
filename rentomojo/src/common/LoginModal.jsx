import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import styles from "../styles/homepage.module.css";
import { AuthContext } from "../context/AuthContext";
import { OtpModal } from "../components/OtpModal";

const LoginModal = () => {
  const {
    isOpen: isLoginSignupOpen,
    onOpen: onLoginSignupOpen,
    onClose: onLoginSignupClose,
  } = useDisclosure();
  const {
    isOpen: isOtpOpen,
    onOpen: onOtpOpen,
    onClose: onOtpClose,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, data, setData } = useContext(AuthContext);

  const handleInputMobile = (e) => {
    setData({
      ...data,
      mobile: e.target.value,
    });
  };
  console.log(data);
  return (
    <>
      <Button
        bgColor="#e53e3e"
        className={styles.login_signup_btn}
        onClick={onLoginSignupOpen}
      >
        Login/SignUp
      </Button>

      <Modal onClose={onLoginSignupClose} isOpen={isLoginSignupOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Enter your number to Signup or Login
            <div>
              <input
                onChange={handleInputMobile}
                value={data.mobile}
                placeholder="Enter your phone number*"
                type="number"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              className={styles.login_signup_btn}
              onClick={(onLoginSignupClose, onOtpOpen)}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* <Button
          bgColor="#e53e3e"
          className={styles.login_signup_btn}
          onClick={onOpen}
        >
          continue
        </Button> */}
      <Modal isOpen={isOtpOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            Enter four digit otp
            <div>
              <input placeholder="Enter otp*" type="number" />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onOtpClose}>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
