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
      justifyContent="flex-start"
      padding="20px"
      backgroundColor="white"
      fontFamily="'Helvetica Neue', Arial, sans-serif"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <VStack align="flex-start" spacing={4} maxWidth="600px" m={20}>
        <MotionText
          fontSize="6xl"
          fontWeight="bold"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Software Engineer & AI enthusiast
        </MotionText>
        <MotionText
          fontSize="2xl"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
           I'm Tianye Fan, a skilled Software Engineer and Machine Learning Engineer.
           I collaborate with global cooperations to develop innovative, data-driven solutions 
           that optimize performance and achieve strategic objectives.
        </MotionText>
      </VStack>
    </MotionBox>
  );
};

export default Introduction;
