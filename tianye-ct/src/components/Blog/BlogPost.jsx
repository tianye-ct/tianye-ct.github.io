import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Tag, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = ({ post }) => {
  return (
    <Container maxW='container.md' pt={32} pb={10}>
      <Button
        as={RouterLink}
        to='/blog'
        leftIcon={<ArrowBackIcon />}
        variant='ghost'
        mb={6}
      >
        Back to Blog
      </Button>
      
      <VStack spacing={6} align='stretch'>
        <Box>
          <Heading as='h1' size='2xl' mb={4} fontFamily="'Playfair Display', 'Georgia', serif">
            {post.title}
          </Heading>
          
          <HStack spacing={4} mb={4}>
            <Text fontSize='sm' color='gray.600' fontFamily="'Georgia', 'Times New Roman', serif">
              {post.date}
            </Text>
            <Text fontSize='sm' color='gray.600' fontFamily="'Georgia', 'Times New Roman', serif">
              {post.readTime}
            </Text>
          </HStack>
          
          <HStack spacing={2} mb={6}>
            {post.tags.map(tag => (
              <Tag key={tag} size='sm' colorScheme='blue'>
                {tag}
              </Tag>
            ))}
          </HStack>
        </Box>
        
        <Box className='markdown-content'>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag='div'
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              h1: ({ children }) => <Heading as='h1' size='xl' my={4} fontFamily="'Playfair Display', 'Georgia', serif">{children}</Heading>,
              h2: ({ children }) => <Heading as='h2' size='lg' my={4} fontFamily="'Playfair Display', 'Georgia', serif">{children}</Heading>,
              h3: ({ children }) => <Heading as='h3' size='md' my={3} fontFamily="'Playfair Display', 'Georgia', serif">{children}</Heading>,
              p: ({ children }) => <Text mb={4} fontFamily="'Georgia', 'Times New Roman', serif" lineHeight={1.8}>{children}</Text>,
              ul: ({ children }) => <Box as='ul' pl={6} mb={4}>{children}</Box>,
              ol: ({ children }) => <Box as='ol' pl={6} mb={4}>{children}</Box>,
              li: ({ children }) => <Box as='li' mb={2}>{children}</Box>,
              blockquote: ({ children }) => (
                <Box
                  borderLeftWidth='4px'
                  borderLeftColor='blue.500'
                  pl={4}
                  py={2}
                  my={4}
                  fontStyle='italic'
                >
                  {children}
                </Box>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </Box>
      </VStack>
    </Container>
  );
};

export default BlogPost;