import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  Button,
  Image,
  SimpleGrid,
  Divider,
  Icon,
  Flex,
  Link,
  useColorModeValue
} from '@chakra-ui/react';
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const ProjectDetail = ({ project }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const projectDetails = {
    'mox-ai': {
      overview: `Mox AI is a cutting-edge artificial intelligence platform designed to democratize access to advanced AI capabilities. 
      The platform combines the power of multiple Large Language Models (LLMs) with sophisticated Retrieval-Augmented Generation (RAG) 
      technology to create intelligent agents that can understand context, access relevant information, and provide accurate responses.`,
      
      technicalDetails: [
        {
          title: 'Frontend Architecture',
          content: 'Next.js 14 with App Router for server-side rendering, TypeScript for type safety, and Tailwind CSS for responsive design. Optimized for performance with React Server Components.'
        },
        {
          title: 'Backend API Layer',
          content: 'FastAPI with Pydantic for robust data validation, async request handling, and automatic OpenAPI documentation. Implements RESTful and WebSocket endpoints for real-time features.'
        },
        {
          title: 'Data Infrastructure',
          content: 'PostgreSQL for relational data, Milvus vector database for semantic search, MinIO for S3-compatible object storage, and Redis for caching and session management.'
        },
        {
          title: 'AI/ML Pipeline',
          content: 'Multi-provider LLM integration with streaming responses, RAG implementation using Milvus for vector similarity search, and distributed processing for scalable document ingestion.'
        }
      ],
      
      challenges: [
        'Implementing efficient token management across multiple LLM providers',
        'Designing a scalable RAG pipeline for large document collections',
        'Ensuring data privacy and security in multi-tenant environment',
        'Optimizing response latency for real-time interactions'
      ],
      
      futureEnhancements: [
        'Multi-modal AI support (images, audio, video)',
        'Advanced agent orchestration and workflow automation',
        'Plugin marketplace for custom integrations',
        'Enterprise-grade admin dashboard'
      ]
    }
  };

  const details = projectDetails[project.id] || {};

  return (
    <Container maxW='container.lg' pt={32} pb={20}>
      <Button
        as={RouterLink}
        to='/portfolio'
        leftIcon={<ArrowBackIcon />}
        variant='ghost'
        mb={8}
      >
        Back to Portfolio
      </Button>

      <VStack spacing={12} align='stretch'>
        {/* Project Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack align='stretch' spacing={6}>
            <Flex justify='space-between' align='flex-start' wrap='wrap' gap={4}>
              <Box flex='1'>
                <Heading as='h1' size='2xl' mb={4} fontFamily="'Playfair Display', 'Georgia', serif">
                  {project.title}
                </Heading>
                <Text fontSize='xl' color='gray.600' mb={4} fontFamily="'Georgia', 'Times New Roman', serif" lineHeight={1.6}>
                  {project.description}
                </Text>
                <HStack spacing={4} wrap='wrap'>
                  <Badge colorScheme='orange' px={3} py={1}>
                    {project.status}
                  </Badge>
                  {project.tags.map(tag => (
                    <Badge key={tag} colorScheme='blue' variant='outline'>
                      {tag}
                    </Badge>
                  ))}
                </HStack>
              </Box>
              
              <VStack align='stretch' spacing={3}>
                {project.github && (
                  <Button
                    as={Link}
                    href={project.github}
                    target='_blank'
                    leftIcon={<FaGithub />}
                    colorScheme='gray'
                    variant='outline'
                  >
                    View Code
                  </Button>
                )}
                {project.live && (
                  <Button
                    as={Link}
                    href={project.live}
                    target='_blank'
                    leftIcon={<FaRocket />}
                    colorScheme='blue'
                  >
                    Live Demo
                  </Button>
                )}
              </VStack>
            </Flex>
          </VStack>
        </MotionBox>

        <Divider />

        {/* Project Overview */}
        {details.overview && (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <VStack align='stretch' spacing={4}>
              <Heading as='h2' size='lg' fontFamily="'Playfair Display', 'Georgia', serif">
                Project Overview
              </Heading>
              <Text fontSize='lg' lineHeight='tall' fontFamily="'Georgia', 'Times New Roman', serif">
                {details.overview}
              </Text>
            </VStack>
          </MotionBox>
        )}

        {/* Key Features */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <VStack align='stretch' spacing={4}>
            <Heading as='h2' size='lg' fontFamily="'Playfair Display', 'Georgia', serif">
              Key Features
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {project.features.map((feature, idx) => (
                <HStack key={idx} align='flex-start' spacing={3}>
                  <Icon as={FaCheckCircle} color='green.500' mt={1} />
                  <Text fontFamily="'Georgia', 'Times New Roman', serif" lineHeight={1.6}>{feature}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          </VStack>
        </MotionBox>

        {/* Technical Details */}
        {details.technicalDetails && (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <VStack align='stretch' spacing={6}>
              <Heading as='h2' size='lg' fontFamily="'Playfair Display', 'Georgia', serif">
                Technical Implementation
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {details.technicalDetails.map((detail, idx) => (
                  <Box
                    key={idx}
                    p={6}
                    bg={bgColor}
                    borderWidth='1px'
                    borderColor={borderColor}
                    borderRadius='lg'
                  >
                    <Heading as='h3' size='md' mb={3} fontFamily="'Playfair Display', 'Georgia', serif">
                      {detail.title}
                    </Heading>
                    <Text color='gray.600' fontFamily="'Georgia', 'Times New Roman', serif" lineHeight={1.6}>
                      {detail.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>
        )}

        {/* Challenges & Solutions */}
        {details.challenges && (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <VStack align='stretch' spacing={4}>
              <Heading as='h2' size='lg' fontFamily="'Playfair Display', 'Georgia', serif">
                Challenges & Solutions
              </Heading>
              <VStack align='stretch' spacing={3}>
                {details.challenges.map((challenge, idx) => (
                  <Box key={idx} pl={4} borderLeftWidth='3px' borderLeftColor='blue.500'>
                    <Text fontFamily="'Georgia', 'Times New Roman', serif" lineHeight={1.6}>{challenge}</Text>
                  </Box>
                ))}
              </VStack>
            </VStack>
          </MotionBox>
        )}


        {/* Future Enhancements */}
        {details.futureEnhancements && (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <VStack align='stretch' spacing={4}>
              <Heading as='h2' size='lg' fontFamily="'Playfair Display', 'Georgia', serif">
                Future Enhancements
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
                {details.futureEnhancements.map((enhancement, idx) => (
                  <HStack key={idx} align='flex-start' spacing={3}>
                    <Icon as={FaRocket} color='purple.500' mt={1} />
                    <Text fontFamily="'Georgia', 'Times New Roman', serif" lineHeight={1.6}>{enhancement}</Text>
                  </HStack>
                ))}
              </SimpleGrid>
            </VStack>
          </MotionBox>
        )}
      </VStack>
    </Container>
  );
};

export default ProjectDetail;