import { 
  Box,
  Flex, 
  Link as ChakraLink, 
  Heading, 
  Text, 
  Container,
  HStack,
  IconButton,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useDisclosure,
  Button
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import ColorModeToggle from "./ColorModeToggle";

const MotionFlex = motion(Flex);

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue("white", "#1a1a1a");
  const borderColor = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("gray.700", "gray.200");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const activeItemBg = useColorModeValue('blue.50', 'gray.800');
  const buttonHoverBg = useColorModeValue('gray.100', 'gray.700');

  const navItems = [
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
  ];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <>
    <MotionFlex
      as="nav"
      position="fixed"
      top="0"
      width="100%"
      zIndex="999"
      bg={bgColor}
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      boxShadow="sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <Container maxW="container.xl">
        <Flex
          justify="space-between"
          alignItems="center"
          height={{ base: "70px", md: "80px" }}
        >
          <ChakraLink onClick={handleLogoClick} _hover={{ textDecoration: 'none' }}>
            <Heading
              size={{ base: "xl", md: "2xl" }}
              fontWeight={400}
              cursor="pointer"
              fontFamily="'Playfair Display', 'Georgia', serif"
              color={useColorModeValue("black", "white")}
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
              Tianye @ 25
            </Heading>
          </ChakraLink>
          
          <HStack spacing={{ base: 4, md: 6 }} display={{ base: "none", md: "flex" }}>
            {navItems.map((item) => (
              <ChakraLink
                key={item.path}
                as={RouterLink}
                to={item.path}
                position="relative"
                _hover={{ textDecoration: 'none' }}
                onClick={onClose}
              >
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight={400}
                  color={location.pathname.startsWith(item.path) ? 'blue.500' : textColor}
                  _hover={{ textDecoration: 'underline' }}
                  transition="color 0.2s"
                  fontFamily="'Playfair Display', 'Georgia', serif"
                >
                  {item.label}
                </Text>
              </ChakraLink>
            ))}
            
            <HStack spacing={3} ml={4} divider={<Box height="20px" width="1px" bg={borderColor} />}>
              <ColorModeToggle />
              <IconButton
                as={ChakraLink}
                href="https://www.linkedin.com/in/tianyefan"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                size="sm"
                fontSize="20px"
                _hover={{ color: 'blue.500' }}
              />
              <IconButton
                as={ChakraLink}
                href="https://github.com/tianye-ct"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                size="sm"
                fontSize="20px"
                _hover={{ color: 'purple.500' }}
              />
            </HStack>
          </HStack>

          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            icon={<HamburgerIcon />}
            variant="ghost"
            aria-label="Open menu"
            size="md"
            fontSize="24px"
            _hover={{ bg: hoverBg }}
          />
        </Flex>
      </Container>
    </MotionFlex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton size="lg" />
          <DrawerBody pt={16}>
            <VStack spacing={6} align="stretch">
              {navItems.map((item) => (
                <ChakraLink
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  onClick={onClose}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button
                    variant="ghost"
                    justifyContent="start"
                    width="100%"
                    height="auto"
                    py={3}
                    px={4}
                    bg={location.pathname.startsWith(item.path) ? activeItemBg : 'transparent'}
                    _hover={{ bg: buttonHoverBg }}
                  >
                    <Text
                      fontSize="xl"
                      fontWeight={400}
                      color={location.pathname.startsWith(item.path) ? 'blue.500' : textColor}
                      fontFamily="'Playfair Display', 'Georgia', serif"
                    >
                      {item.label}
                    </Text>
                  </Button>
                </ChakraLink>
              ))}
              
              <Box pt={6} borderTopWidth="1px" borderTopColor={borderColor}>
                <HStack justify="center" spacing={4}>
                  <ColorModeToggle />
                  <IconButton
                    as={ChakraLink}
                    href="https://www.linkedin.com/in/tianyefan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    icon={<FaLinkedin />}
                    variant="ghost"
                    size="lg"
                    fontSize="24px"
                    _hover={{ color: 'blue.500' }}
                  />
                  <IconButton
                    as={ChakraLink}
                    href="https://github.com/tianye-ct"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    icon={<FaGithub />}
                    variant="ghost"
                    size="lg"
                    fontSize="24px"
                    _hover={{ color: 'purple.500' }}
                  />
                </HStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;