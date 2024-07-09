import React from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";


// const MotionBox = motion(Box);
// const MotionText = motion(Text);
// const MotionButton = motion(Button);

const Contact = () => {
  return (
    <Box
      id="contact"
      height="60vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="20px"
      backgroundColor="white"
      fontFamily="'Helvetica Neue', Arial, sans-serif"
    >
      <HStack spacing={8} mb={8}>
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/tianyefan"
          target="_blank"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          variant="outline"
          size="lg"
          borderRadius="full"
          color="black"
          _hover={{ backgroundColor: "black", color: "white" }}
        />
        <IconButton
          as="a"
          href="https://github.com/tianye-ct"
          target="_blank"
          aria-label="GitHub"
          icon={<FaGithub />}
          variant="outline"
          size="lg"
          borderRadius="full"
          color="black"
          _hover={{ backgroundColor: "black", color: "white" }}
        />
      </HStack>
      <Text fontSize="4xl" fontWeight="bold">
        Looking for a Software Engineer?
      </Text>
      <Tooltip label="richardye980718@gmail.com" aria-label="Email tooltip">
        <Button variant="outline" size="lg" borderRadius="full" mt={8}>
          Get In Touch
        </Button>
      </Tooltip>
    </Box>
  );
};

export default Contact;
