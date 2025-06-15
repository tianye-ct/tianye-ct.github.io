import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const NotFound = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, blue.50, purple.50)',
    'linear(to-br, gray.900, gray.800)'
  );
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const headingColor = useColorModeValue('gray.800', 'gray.100');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <Container maxW="container.md" minH="70vh" display="flex" alignItems="center">
      <MotionBox
        as={VStack}
        spacing={8}
        width="100%"
        textAlign="center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionHeading
          as="h1"
          size={{ base: '3xl', md: '4xl' }}
          fontFamily="'Playfair Display', 'Georgia', serif"
          color={headingColor}
          variants={itemVariants}
        >
          404
        </MotionHeading>

        <MotionText
          fontSize={{ base: 'xl', md: '2xl' }}
          color={textColor}
          fontWeight={300}
          variants={itemVariants}
        >
          Oops! The page you're looking for doesn't exist.
        </MotionText>

        <MotionText
          fontSize={{ base: 'md', md: 'lg' }}
          color={textColor}
          maxW="md"
          variants={itemVariants}
        >
          It seems you've ventured into uncharted territory. Let's get you back on track.
        </MotionText>

        <MotionBox variants={itemVariants}>
          <Button
            as={RouterLink}
            to="/"
            size="lg"
            colorScheme="blue"
            fontWeight="medium"
            px={8}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
            transition="all 0.2s"
          >
            Return Home
          </Button>
        </MotionBox>

        <MotionBox
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width={{ base: '300px', md: '500px' }}
          height={{ base: '300px', md: '500px' }}
          bgGradient={bgGradient}
          borderRadius="full"
          filter="blur(100px)"
          opacity={0.3}
          zIndex={-1}
          variants={itemVariants}
        />
      </MotionBox>
    </Container>
  );
};

export default NotFound;