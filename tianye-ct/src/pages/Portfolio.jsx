import React from 'react';
import { useParams } from 'react-router-dom';
import PortfolioList from '../components/Portfolio/PortfolioList';
import ProjectDetail from '../components/Portfolio/ProjectDetail';

// This would normally come from an API or context
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
    live: null
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
    live: null
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
    live: null
  }
];

const Portfolio = () => {
  const { projectId } = useParams();

  if (projectId) {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      return <ProjectDetail project={project} />;
    }
  }

  return <PortfolioList />;
};

export default Portfolio;