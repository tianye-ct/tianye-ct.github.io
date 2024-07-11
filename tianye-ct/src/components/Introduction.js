import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const Introduction = () => {
  return (
    <MotionBox
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center" // Centered content for better mobile experience
      padding={{ base: "10px", md: "20px" }} // Responsive padding
      backgroundColor="white"
      fontFamily="'Helvetica Neue', Arial, sans-serif"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      flexDirection={{ base: "column", md: "row" }} // Stack vertically on small screens
      marginTop={{ base: "60px", md: "80px" }} // Adjust the marginTop to push content down
    >
      <VStack align="flex-start" spacing={4} maxWidth="1000px" m={{ base: 4, md: 20 }}>
        <MotionText
          fontSize={{ base: "4xl", md: "8xl" }} // Responsive font size
          fontWeight={400}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Software Engineer & ML Engineer
        </MotionText>
      </VStack>
      <VStack align="flex-start" spacing={4} maxWidth={{ base: "100%", md: "500px" }} m={{ base: 4, md: 20 }}>
        <MotionText
          fontSize={{ base: "xl", md: "3xl" }} // Responsive font size
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm Tianye Fan, a recent graduate Software & Machine Learning Engineer. I am interested in developing
          innovative, data-driven solutions that optimize performance and achieve with software and ML tools.
        </MotionText>
      </VStack>
    </MotionBox>
  );
};

export default Introduction;
