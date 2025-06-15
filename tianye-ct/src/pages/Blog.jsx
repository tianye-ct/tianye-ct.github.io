import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogList from '../components/Blog/BlogList';
import BlogPost from '../components/Blog/BlogPost';
import { Box } from '@chakra-ui/react';

const Blog = () => {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  useEffect(() => {
    // In production, you would fetch this from an API or markdown files
    // For now, we'll use mock data
    const mockPosts = [
      {
        slug: 'building-ml-models-at-scale',
        title: 'Building ML Models at Scale',
        date: 'June 15, 2025',
        readTime: '5 min read',
        excerpt: 'Learn how to build and deploy machine learning models that can handle millions of requests...',
        tags: ['Machine Learning', 'Python', 'Engineering'],
        content: `# Building ML Models at Scale

Machine learning at scale presents unique challenges that go beyond simple model training...

## Key Considerations

1. **Data Pipeline Architecture**
2. **Model Serving Infrastructure**
3. **Monitoring and Observability**

\`\`\`python
# Example of efficient batch processing
import numpy as np
from sklearn.preprocessing import StandardScaler

def process_batch(data_batch):
    scaler = StandardScaler()
    return scaler.fit_transform(data_batch)
\`\`\`

## Conclusion

Building ML systems at scale requires careful consideration of both engineering and ML concerns...`
      },
      {
        slug: 'react-performance-optimization',
        title: 'React Performance Optimization Tips',
        date: 'June 10, 2025',
        readTime: '7 min read',
        excerpt: 'Discover advanced techniques to optimize your React applications for better performance...',
        tags: ['React', 'JavaScript', 'Performance'],
        content: `# React Performance Optimization Tips

Performance is crucial for user experience...`
      }
    ];

    setPosts(mockPosts);
    
    if (slug) {
      const post = mockPosts.find(p => p.slug === slug);
      setCurrentPost(post);
    }
  }, [slug]);

  return (
    <Box minH='100vh' pt={20}>
      {slug && currentPost ? (
        <BlogPost post={currentPost} />
      ) : (
        <BlogList posts={posts} />
      )}
    </Box>
  );
};

export default Blog;