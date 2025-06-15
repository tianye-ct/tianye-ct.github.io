import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Badge,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGamepad, FaCamera, FaBook, FaMountain, FaRocket, FaHeart, FaBrain, FaPalette } from 'react-icons/fa';

const MotionBox = motion(Box);

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const headingColor = useColorModeValue('gray.800', 'gray.100');
  const accentColor = useColorModeValue('blue.600', 'blue.400');

  const hobbies = [
    {
      icon: FaGamepad,
      title: 'Gaming',
      description: 'Love exploring open-world RPGs and competitive strategy games. Currently obsessed with building in Minecraft and climbing ranks in chess.',
      color: 'purple',
    },
    {
      icon: FaCamera,
      title: 'Photography',
      description: 'Capturing moments through street photography and landscapes. Always hunting for that perfect golden hour shot.',
      color: 'orange',
    },
    {
      icon: FaMountain,
      title: 'Hiking',
      description: 'Weekend warrior on Bay Area trails. Nothing beats the view from the top and the journey to get there.',
      color: 'green',
    },
    {
      icon: FaBook,
      title: 'Reading',
      description: 'Sci-fi enthusiast and philosophy nerd. Currently diving into books about AI consciousness and human potential.',
      color: 'blue',
    },
  ];

  const interests = [
    'Artificial Intelligence & Ethics',
    'Open Source Contributing',
    'Digital Art & Creative Coding',
    'Space Exploration',
    'Sustainable Technology',
    'Music Production',
    'Cooking Experiments',
    'Board Game Design',
  ];

  const goals = [
    {
      icon: FaRocket,
      title: 'Build Something Meaningful',
      description: 'Create technology that genuinely improves people\'s lives, not just another app.',
    },
    {
      icon: FaBrain,
      title: 'Never Stop Learning',
      description: 'Master new technologies, explore different fields, and stay curious about everything.',
    },
    {
      icon: FaHeart,
      title: 'Give Back',
      description: 'Mentor aspiring developers and contribute to open-source projects that matter.',
    },
  ];

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack spacing={4} textAlign="center">
            <Heading
              size="2xl"
              fontFamily="'Playfair Display', 'Georgia', serif"
              color={headingColor}
            >
              Hey, I'm Tianye! 👋
            </Heading>
            <Text fontSize="xl" color={textColor} maxW="3xl">
              Beyond the code and algorithms, I'm just a curious human who loves building things, 
              exploring new places, and probably spending too much time perfecting my coffee brewing technique.
            </Text>
          </VStack>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <VStack spacing={8}>
            <Heading size="lg" color={headingColor} alignSelf="start">
              Things I Love Doing 🎮
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
              {hobbies.map((hobby, index) => (
                <MotionBox
                  key={hobby.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Box
                    bg={bgColor}
                    borderRadius="lg"
                    p={6}
                    borderWidth="1px"
                    borderColor={borderColor}
                    _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                    transition="all 0.3s"
                    h="full"
                  >
                    <VStack align="start" spacing={3}>
                      <HStack>
                        <Icon as={hobby.icon} w={6} h={6} color={`${hobby.color}.500`} />
                        <Heading size="md" color={headingColor}>
                          {hobby.title}
                        </Heading>
                      </HStack>
                      <Text color={textColor} fontSize="sm">
                        {hobby.description}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Box bg={bgColor} borderRadius="lg" p={8} borderWidth="1px" borderColor={borderColor}>
            <VStack spacing={6} align="stretch">
              <HStack>
                <Icon as={FaPalette} w={6} h={6} color={accentColor} />
                <Heading size="lg" color={headingColor}>
                  Also Interested In...
                </Heading>
              </HStack>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
                {interests.map((interest, index) => (
                  <MotionBox
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                  >
                    <Badge
                      colorScheme={['purple', 'green', 'orange', 'blue', 'pink'][index % 5]}
                      fontSize="sm"
                      px={3}
                      py={2}
                      borderRadius="full"
                      textAlign="center"
                      w="full"
                    >
                      {interest}
                    </Badge>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <VStack spacing={8}>
            <Heading size="lg" color={headingColor} alignSelf="start">
              Where I'm Heading 🚀
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} w="full">
              {goals.map((goal, index) => (
                <MotionBox
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Box
                    bg={bgColor}
                    borderRadius="lg"
                    p={6}
                    borderWidth="1px"
                    borderColor={borderColor}
                    h="full"
                    position="relative"
                    overflow="hidden"
                    _before={{
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      bgGradient: 'linear(to-r, blue.400, purple.400)',
                    }}
                  >
                    <VStack align="start" spacing={3}>
                      <Icon as={goal.icon} w={8} h={8} color={accentColor} />
                      <Heading size="sm" color={headingColor}>
                        {goal.title}
                      </Heading>
                      <Text color={textColor} fontSize="sm">
                        {goal.description}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Box
            bg={useColorModeValue('blue.50', 'blue.900')}
            borderRadius="lg"
            p={8}
            textAlign="center"
          >
            <Text fontSize="lg" color={headingColor} fontWeight="medium" mb={2}>
              Want to chat about tech, life, or anything in between?
            </Text>
            <Text color={textColor}>
              I'm always up for interesting conversations and new connections! 
              Feel free to reach out through any of my social links below.
            </Text>
          </Box>
        </MotionBox>
      </VStack>
    </Container>
  );
};

export default About;