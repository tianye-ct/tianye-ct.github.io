import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import './index.css'; 
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <Router>
    <Box>
      <Header />
      <Box as="main">
        <Introduction />
        <Projects />
        <Contact />
      </Box>
    </Box>
  </Router>
);

export default App;
