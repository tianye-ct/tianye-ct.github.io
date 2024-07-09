import { Flex, Link as ChakraLink, Heading } from "@chakra-ui/react";

const Header = () => (
  <Flex
    as="nav"
    justify="space-between"
    padding="20px"
    bg="white"
    position="fixed"
    width="100%"
    zIndex="1"
  >
    <Heading as="h1" size="lg" m={5}>
      Tianye @ 24{" "}
    </Heading>
    <Flex m={5}>
      <ChakraLink href="" m={5}>
        Intro
      </ChakraLink>
      <ChakraLink href="#projects" m={5}>
        Projects
      </ChakraLink>
      <ChakraLink href="#contact" m={5}>
        Contact
      </ChakraLink>
    </Flex>
  </Flex>
);

export default Header;
