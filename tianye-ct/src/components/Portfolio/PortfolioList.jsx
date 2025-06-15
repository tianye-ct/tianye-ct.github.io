import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Badge, 
  Image, 
  VStack, 
  HStack,
  Icon,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaRobot, FaCode, FaDatabase } from 'react-icons/fa';

const MotionBox = motion(Box);

const projects = [
  {
    id: 'mox-ai',
    title: 'Mox AI Platform',
    description: 'Enterprise-grade AI platform featuring LLM chat capabilities, intelligent agents with RAG, vector search, and distributed data processing for scalable AI applications.',
    image: '/moxai.png',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Milvus', 'Redis'],
    status: 'In Development',
    features: [
      'Multi-model LLM orchestration',
      'Vector search with Milvus',
      'Distributed file storage with MinIO',
      'Real-time caching with Redis'
    ],
    github: null,
    live: null,
    icon: FaRobot
  },
  {
    id: 'simart-social',
    title: 'SimArt Social Media',
    description: 'Neural Style Transfer application that transforms photos into artistic masterpieces using deep learning.',
    image: '/project1.jpg',
    tags: ['React', 'TensorFlow', 'Python', 'AWS'],
    status: 'Completed',
    features: [
      'Real-time style transfer',
      'Multiple artistic styles',
      'Social sharing features',
      'Cloud processing'
    ],
    github: 'https://github.com/tianye-ct/Simple-Artist',
    live: null,
    icon: FaCode
  },
  {
    id: 'innersonic',
    title: 'Innersonic Promotion',
    description: 'LLM-powered platform for automated social media content generation and campaign management.',
    image: '/project2.png',
    tags: ['Next.js', 'OpenAI API', 'PostgreSQL', 'Redis'],
    status: 'Completed',
    features: [
      'AI content generation',
      'Multi-platform posting',
      'Analytics dashboard',
      'A/B testing'
    ],
    github: 'https://github.com/tianye-ct/innersonic',
    live: null,
    icon: FaDatabase
  }
];

const PortfolioList = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.900');
  const statusColors = {
    'In Development': 'orange',
    'Completed': 'green',
    'Planning': 'blue'
  };

  return (
    <Container maxW='container.xl' pt={32} pb={20}>
      <VStack spacing={16} align='stretch'>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                as={RouterLink}
                to={`/portfolio/${project.id}`}
                display='block'
                _hover={{ textDecoration: 'none' }}
              >
                <Box
                  bg={bgColor}
                  borderWidth='1px'
                  borderColor={borderColor}
                  borderRadius='xl'
                  overflow='hidden'
                  _hover={{ 
                    transform: 'translateY(-4px)', 
                    boxShadow: 'xl',
                    bg: hoverBg 
                  }}
                  transition='all 0.3s ease'
                  h='full'
                >
                  <Box position='relative' h='200px' bg='gray.100'>
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        objectFit='cover'
                        w='full'
                        h='full'
                      />
                    ) : (
                      <Flex
                        align='center'
                        justify='center'
                        h='full'
                        bg='gray.200'
                      >
                        <Icon as={project.icon} boxSize={16} color='gray.500' />
                      </Flex>
                    )}
                    <Badge
                      position='absolute'
                      top={4}
                      right={4}
                      colorScheme={statusColors[project.status]}
                      px={3}
                      py={1}
                      borderRadius='full'
                    >
                      {project.status}
                    </Badge>
                  </Box>

                  <Box p={6}>
                    <VStack align='stretch' spacing={4}>
                      <Box>
                        <Heading as='h3' size='lg' mb={2} fontFamily="'Playfair Display', 'Georgia', serif">
                          {project.title}
                        </Heading>
                        <Text color='gray.600' mb={4} fontFamily="'Georgia', 'Times New Roman', serif" lineHeight={1.6}>
                          {project.description}
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight='bold' mb={2} fontSize='sm' color='gray.700' fontFamily="'Playfair Display', 'Georgia', serif">
                          Key Features:
                        </Text>
                        <VStack align='stretch' spacing={1}>
                          {project.features.slice(0, 3).map((feature, idx) => (
                            <Text key={idx} fontSize='sm' color='gray.600' fontFamily="'Georgia', 'Times New Roman', serif">
                              • {feature}
                            </Text>
                          ))}
                        </VStack>
                      </Box>

                      <Flex wrap='wrap' gap={2}>
                        {project.tags.map(tag => (
                          <Badge key={tag} colorScheme='blue' variant='subtle'>
                            {tag}
                          </Badge>
                        ))}
                      </Flex>

                      <HStack spacing={4} pt={2}>
                        {project.github && (
                          <HStack
                            as='a'
                            href={project.github}
                            target='_blank'
                            rel='noopener noreferrer'
                            spacing={1}
                            color='gray.600'
                            _hover={{ color: 'blue.500' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon as={FaGithub} />
                            <Text fontSize='sm'>Code</Text>
                          </HStack>
                        )}
                        {project.live && (
                          <HStack
                            as='a'
                            href={project.live}
                            target='_blank'
                            rel='noopener noreferrer'
                            spacing={1}
                            color='gray.600'
                            _hover={{ color: 'blue.500' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon as={FaExternalLinkAlt} />
                            <Text fontSize='sm'>Live Demo</Text>
                          </HStack>
                        )}
                      </HStack>
                    </VStack>
                  </Box>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default PortfolioList;