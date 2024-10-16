import { Flex, Link as ChakraLink, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);

const Header = () => (
  <MotionFlex
    as="nav"
    justify="space-between"
    alignItems="center"
    padding={{ base: "20px", md: "30px" }} // Reduced padding for smaller height
    bg="white"
    top="0"
    width="100%"
    zIndex="1"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 2 }}
  >
    <Heading
      size="2xl"
      m={3}
      fontWeight={400}
      textAlign={{ base: "center", md: "left" }} // Center on mobile, left on larger screens
      width={{ base: "100%", md: "auto" }} // Full width on mobile
    >
      Tianye @ 24{" "}
    </Heading>
    <Flex m={3} display={{ base: "none", md: "flex" }}> {/* Hide on mobile */}
      <ChakraLink href="#contact" m={3}>
        <Text fontSize={25} fontFamily="sans-serif">
          Contact
        </Text>
      </ChakraLink>
      {/* <ChakraLink href="#projects" m={3}>
        <Text fontSize={25} fontFamily="sans-serif">
          Project
        </Text>
      </ChakraLink>
      <ChakraLink href="#contact" m={3}>
        <Text fontSize={25} fontFamily="sans-serif">
          Contact
        </Text>
      </ChakraLink> */}
    </Flex>
  </MotionFlex>
);

export default Header;
