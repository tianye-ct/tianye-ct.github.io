import React, { useState, useEffect } from "react";
import { Box, Text, VStack, HStack, keyframes, Link as ChakraLink } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);
const MotionText = motion(Text);

// Shimmer animation keyframes
const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

// Gradient animation
const gradientShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

// Cursor blink animation
const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;


// Typewriter component
const TypewriterText = ({ text, delay = 0, speed = 50, onComplete, showCursor = true }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      if (onComplete) onComplete();
    }
  }, [displayedText, text, speed, isTyping, onComplete]);

  return (
    <>
      {displayedText}
      {showCursor && !isComplete && (
        <Box
          as="span"
          display="inline-block"
          width="3px"
          height="0.9em"
          bg="currentColor"
          ml={1}
          animation={`${blink} 1s infinite`}
          verticalAlign="baseline"
          position="relative"
          top="-0.1em"
        />
      )}
    </>
  );
};

const Introduction = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <MotionBox
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={{ base: "10px", md: "20px" }}
      background="white"
      fontFamily="'Playfair Display', 'Georgia', serif"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      position="relative"
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)",
        pointerEvents: "none",
      }}
    >
      {/* Gradient mesh overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.5"
        backgroundImage={`
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 59px,
            rgba(0, 0, 0, 0.02) 59px,
            rgba(0, 0, 0, 0.02) 60px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 59px,
            rgba(0, 0, 0, 0.02) 59px,
            rgba(0, 0, 0, 0.02) 60px
          )
        `}
        pointerEvents="none"
      />


      {/* Main content container */}
      <MotionBox
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1400px"
        width="100%"
        px={{ base: 6, md: 12 }}
        py={{ base: 8, md: 12 }}
        gap={{ base: 12, md: 20, lg: 24 }}
        zIndex={1}
        background="white"
        borderRadius="16px"
        border="2px solid rgba(0, 0, 0, 0.15)"
        boxShadow="0 8px 30px rgba(0, 0, 0, 0.12)"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <VStack 
          align="flex-start" 
          spacing={4} 
          flex="1" 
          minW={{ base: "300px", md: "500px" }}
        >
          <Box position="relative">
          <VStack 
            align="flex-start" 
            spacing={{ base: 1, md: 2 }}
          >
            <Box fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} fontWeight={400} color="gray.900" lineHeight="1.1" fontFamily="'Playfair Display', 'Georgia', serif">
              <TypewriterText 
                text="Software Engineer" 
                delay={500} 
                speed={60}
                onComplete={() => setShowSecondLine(true)}
              />
            </Box>
          
            {showSecondLine && (
              <Box fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }} fontWeight={400} color="gray.900" lineHeight="1.1" fontFamily="'Playfair Display', 'Georgia', serif">
                <Box display="inline">
                  <TypewriterText text="& " delay={200} speed={60} showCursor={false} />
                </Box>
                
                <MotionBox
                  display="inline-block"
                  ml={2}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <Text
                    fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                    fontWeight={500}
                    display="inline-block"
                    position="relative"
                    cursor="pointer"
                    background="linear-gradient(90deg, #c2185b, #8e24aa, #5e35b1, #3949ab, #1e88e5, #00897b, #43a047, #f57c00, #d32f2f, #c2185b)"
                    backgroundSize="200% auto"
                    backgroundClip="text"
                    WebkitBackgroundClip="text"
                    WebkitTextFillColor="transparent"
                    animation={`${shimmer} 3s linear infinite`}
                    filter="drop-shadow(0 2px 20px rgba(0, 0, 0, 0.3))"
                    _hover={{
                      animation: `${shimmer} 1s linear infinite`,
                      transform: "scale(1.05) rotate(2deg)",
                      filter: "drop-shadow(0 3px 30px rgba(0, 0, 0, 0.5))",
                      transition: "all 0.3s ease"
                    }}
                    sx={{
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-5px",
                        left: "0",
                        right: "0",
                        height: "3px",
                        background: "linear-gradient(90deg, #c2185b, #7b1fa2, #4527a0, #1565c0, #00695c, #e65100, #c2185b)",
                        transform: "scaleX(0)",
                        transformOrigin: "center",
                        transition: "transform 0.3s ease",
                      },
                      "&:hover::after": {
                        transform: "scaleX(1)",
                      }
                    }}
                  >
                    AI
                  </Text>
                </MotionBox>
                
                <Box display="inline" ml={2}>
                  <TypewriterText 
                    text="Engineer" 
                    delay={1000} 
                    speed={60}
                    onComplete={() => setShowDescription(true)}
                  />
                </Box>
              </Box>
            )}
          </VStack>
          
          </Box>
        </VStack>
      
      <VStack 
        align="flex-start" 
        spacing={4} 
        flex="0.6" 
        maxW="500px"
      >
        <AnimatePresence mode="wait">
          {showDescription && (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                fontFamily="'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                fontWeight={300}
                lineHeight={1.8}
                color="gray.600"
              >
                I'm Tianye Fan, a recent graduate Software & AI Engineer. I am passionate about developing
                innovative, data-driven solutions that leverage cutting-edge AI technologies to solve complex problems.
              </Text>
              
              {/* Premium divider */}
              <MotionBox
                height="2px"
                background="linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.1), transparent)"
                width="100%"
                mt={8}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              {/* Call to action hint */}
              <MotionBox
                mt={6}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <ChakraLink
                  as={RouterLink}
                  to="/portfolio"
                  fontSize="sm"
                  color="gray.600"
                  fontWeight={500}
                  letterSpacing="wider"
                  textTransform="uppercase"
                  textDecoration="none"
                  position="relative"
                  _hover={{
                    color: "gray.900",
                    "&::after": {
                      transform: "scaleX(1)",
                    }
                  }}
                  _after={{
                    content: '""',
                    position: "absolute",
                    bottom: "-2px",
                    left: "0",
                    right: "0",
                    height: "1px",
                    background: "gray.900",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.3s ease",
                  }}
                >
                  Explore my work →
                </ChakraLink>
              </MotionBox>
            </MotionBox>
          )}
        </AnimatePresence>
      </VStack>
      </MotionBox>
    </MotionBox>
  );
};

export default Introduction;