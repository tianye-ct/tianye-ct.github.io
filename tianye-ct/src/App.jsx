import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./index.css";
import Introduction from "./components/Introduction";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

const HomePage = () => (
  <>
    <Introduction />
  </>
);

const App = () => (
  <Router>
    <ScrollToTop />
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Box as="main" flex="1" pt={{ base: "70px", md: "80px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:projectId" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  </Router>
);

export default App;