import React from 'react';
import { Box, Container, Heading, VStack, Text, Link, Tag, HStack, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const MotionBox = motion(Box);

const BlogList = ({ posts }) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.800');

  return (
    <Container maxW='container.xl' pt={32} pb={20}>
      <VStack spacing={6} align='stretch'>
        {posts.map((post, index) => (
          <MotionBox
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              as={RouterLink}
              to={`/blog/${post.slug}`}
              _hover={{ textDecoration: 'none' }}
            >
              <Box
                p={6}
                borderWidth='1px'
                borderRadius='lg'
                borderColor={borderColor}
                _hover={{ bg: hoverBg, transform: 'translateY(-2px)' }}
                transition='all 0.2s'
              >
                <Heading as='h2' size='lg' mb={2} fontFamily="'Playfair Display', 'Georgia', serif">
                  {post.title}
                </Heading>
                
                <Text fontSize='md' color='gray.600' mb={3} fontFamily="'Georgia', 'Times New Roman', serif">
                  {post.date} • {post.readTime}
                </Text>
                
                <Text mb={3} noOfLines={2} fontFamily="'Georgia', 'Times New Roman', serif" lineHeight={1.6}>
                  {post.excerpt}
                </Text>
                
                <HStack spacing={2}>
                  {post.tags.map(tag => (
                    <Tag key={tag} size='sm' colorScheme='blue'>
                      {tag}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Link>
          </MotionBox>
        ))}
      </VStack>
    </Container>
  );
};

export default BlogList;