import {
  Box,
  Container,
  Stack,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  HStack,
  VStack,
  IconButton,
  Divider,
  SimpleGrid,
  Heading,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const bgColor = useColorModeValue('gray.50', '#1a1a1a');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const headingColor = useColorModeValue('gray.700', 'gray.200');
  const linkColor = useColorModeValue('blue.600', 'blue.400');
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/about', label: 'About' },
  ];

  const socialLinks = [
    {
      href: 'https://www.linkedin.com/in/tianyefan',
      icon: FaLinkedin,
      label: 'LinkedIn',
      color: 'blue.500',
    },
    {
      href: 'https://github.com/tianye-ct',
      icon: FaGithub,
      label: 'GitHub',
      color: 'purple.500',
    },
    {
      href: 'mailto:t4fan@cornell.edu',
      icon: FaEnvelope,
      label: 'Email',
      color: 'red.500',
    },
  ];

  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTopWidth="1px"
      borderTopColor={borderColor}
      mt={16}
    >
      <Container maxW="container.xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
            <Heading
              size="lg"
              fontWeight={400}
              fontFamily="'Playfair Display', 'Georgia', serif"
              color={headingColor}
            >
              Tianye @ 25
            </Heading>
            <Text fontSize="sm" color={textColor} textAlign={{ base: 'center', md: 'left' }}>
              Full-stack developer passionate about creating meaningful digital experiences.
            </Text>
            <HStack spacing={3}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  as={ChakraLink}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  icon={<social.icon />}
                  variant="ghost"
                  size="sm"
                  fontSize="20px"
                  _hover={{ color: social.color }}
                />
              ))}
            </HStack>
          </VStack>

          <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
            <Text fontWeight="semibold" fontSize="lg" color={headingColor}>
              Quick Links
            </Text>
            <Stack direction="column" spacing={2}>
              {navLinks.map((link) => (
                <ChakraLink
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  color={textColor}
                  _hover={{ color: linkColor, textDecoration: 'underline' }}
                  fontSize="sm"
                >
                  {link.label}
                </ChakraLink>
              ))}
            </Stack>
          </VStack>

          <VStack align={{ base: 'center', md: 'start' }} spacing={4}>
            <Text fontWeight="semibold" fontSize="lg" color={headingColor}>
              Get in Touch
            </Text>
            <VStack align={{ base: 'center', md: 'start' }} spacing={2}>
              <HStack spacing={2}>
                <FaEnvelope color={textColor} />
                <ChakraLink
                  href="mailto:tf275@cornell.edu"
                  color={textColor}
                  _hover={{ color: linkColor, textDecoration: 'underline' }}
                  fontSize="sm"
                >
                  tf275@cornell.edu
                </ChakraLink>
              </HStack>
              <HStack spacing={2}>
                <FaMapMarkerAlt color={textColor} />
                <Text fontSize="sm" color={textColor}>
                  Xuhui, Shanghai
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </SimpleGrid>

        <Divider my={6} borderColor={borderColor} />

        <Stack
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          align="center"
          spacing={4}
        >
          <Text fontSize="sm" color={textColor}>
            © {currentYear} Tianye Fan. All rights reserved.
          </Text>
          <HStack spacing={4}>
            <ChakraLink
              href="/privacy"
              color={textColor}
              _hover={{ color: linkColor, textDecoration: 'underline' }}
              fontSize="sm"
            >
              Privacy Policy
            </ChakraLink>
            <ChakraLink
              href="/terms"
              color={textColor}
              _hover={{ color: linkColor, textDecoration: 'underline' }}
              fontSize="sm"
            >
              Terms of Service
            </ChakraLink>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;