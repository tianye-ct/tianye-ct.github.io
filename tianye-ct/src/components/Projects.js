import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Projects = () => (
  <Box
    id="projects"
    height="100vh"
    display="flex"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    bg="white"
  >
    <Heading as="h1">Selected Projects</Heading>
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      marginTop="20px"
    >
      <Box textAlign="center" width="300px" margin="20px">
        <Image src="project1.jpg" alt="Project 1" boxSize="300px" />
        <Heading as="h2" size="md" marginTop="10px">
          Project 1
        </Heading>
        <Text fontSize="sm" marginTop="10px">
          Brief description of project 1.
        </Text>
      </Box>
    </Box>
  </Box>
);

export default Projects;
