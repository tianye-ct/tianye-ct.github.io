import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import "./index.css";
import Introduction from "./components/Introduction";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";

const HomePage = () => (
  <>
    <Introduction />
  </>
);

const App = () => (
  <Router>
    <Box>
      <Header />
      <Box as="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
      </Box>
    </Box>
  </Router>
);

export default App;