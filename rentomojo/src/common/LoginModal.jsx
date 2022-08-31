import React, { useContext } from "react";
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

const LoginModal = () => {
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
        onClick={onOpen}
      >
        Login/SignUp
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Enter your number to Signup or Login
            <div>
              <input
                onChange={handleInputMobile}
                placeholder="Enter your phone number*"
                type="number"
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <OtpModal/>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export const OtpModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log("insode")
    return (
      <>
      <Button
        bgColor="#e53e3e"
        className={styles.login_signup_btn}
        onClick={onOpen}
      >
        continue
      </Button>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
              <Button>Continue</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };

export default LoginModal;
