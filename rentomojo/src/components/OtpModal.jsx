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

export const OtpModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log("insode");
    return (
      <>
        <Button
          bgColor="#e53e3e"
          className={styles.login_signup_btn}
          onClick={onOpen}
        >
          continue
        </Button>
        <Modal  isOpen={isOpen} isCentered>
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