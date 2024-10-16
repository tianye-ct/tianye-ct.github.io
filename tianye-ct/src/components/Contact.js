import React from "react";
import {
  Box,
  Text,
  HStack,
  Button,
  IconButton,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const ChakraLinkedIn = chakra(FaLinkedin);
const ChakraGithub = chakra(FaGithub);

const Contact = () => {
  const iconStackDirection = useBreakpointValue({ base: "column", md: "row" });
  const iconSpacing = useBreakpointValue({ base: 4, md: 10 });

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
      <HStack
        spacing={iconSpacing}
        mb={8}
        align="center"
        flexDirection={iconStackDirection}
      >
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/tianyefan"
          target="_blank"
          aria-label="LinkedIn"
          icon={<ChakraLinkedIn size={40} />}
          variant="outline"
          width={{ base: "60px", md: "80px" }}
          height={{ base: "60px", md: "80px" }}
          borderRadius="full"
          color="black"
          borderColor="black"
          _hover={{ backgroundColor: "black", color: "white" }}
        />
        <IconButton
          as="a"
          href="https://github.com/tianye-ct"
          target="_blank"
          aria-label="GitHub"
          icon={<ChakraGithub size={40} />}
          variant="outline"
          borderRadius="full"
          borderColor="black"
          color="black"
          width={{ base: "60px", md: "80px" }}
          height={{ base: "60px", md: "80px" }}
          _hover={{ backgroundColor: "black", color: "white" }}
        />
      </HStack>
      <Text
        fontSize={{ base: "2xl", md: "5xl" }}
        fontWeight={400}
        textAlign="center"
        mb={4}
      >
        Looking for a Software Engineer?
      </Text>
      <Box
        as="a"
        href="mailto:tf275@cornell.edu"
        mt={8}
        display="inline-block"
      >
        <Button
          width={{ base: "200px", md: "300px" }}
          height={{ base: "60px", md: "100px" }}
          variant="outline"
          fontSize={{ base: "20px", md: "35px" }}
          fontWeight={200}
          borderRadius="full"
          borderColor="black"
          _hover={{ bgColor: "black", color: "white", borderColor: "white" }}
        >
          Get In Touch
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
