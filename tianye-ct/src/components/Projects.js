// import { Box, Heading, Image, Text } from "@chakra-ui/react";
// import { motion } from "framer-motion";

// const MotionHead = motion(Heading);
// const Projects = () => (
//   <Box
//     id="projects"
//     height="100vh"
//     display="flex"
//     flexDirection="column"
//     justifyContent="center"
//     alignItems="center"
//     bg="white"
//   >
//     <MotionHead
//       as="h1"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 2 }}
//       flexDirection={{ base: "column", md: "row" }} // Stack vertically on small screens
//       marginTop={{ base: "60px", md: "80px" }} // Adjust the marginTop to push content down
//     >
//       Selected Projects
//     </MotionHead>
//     <Box
//       display="flex"
//       flexWrap="wrap"
//       justifyContent="center"
//       marginTop="20px"
//     >
//       <Box textAlign="center" width="300px" margin="20px">
//         <Image src="project1.jpg" alt="Project 1" boxSize="300px" />
//         <Heading as="h2" size="md" marginTop="10px">
//           Project 1
//         </Heading>
//         <Text fontSize="sm" marginTop="10px">
//           Brief description of project 1.
//         </Text>
//       </Box>
//     </Box>
//   </Box>
// );

// export default Projects;
import { Box, Heading, Image, Text, Link } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MotionHead = motion(Heading);

const Projects = () => {
  const controls = useAnimation();

  // Trigger animation when scrolling into view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 100; // Adjust based on when you want to trigger the animation
      if (scrollPosition > triggerPoint) {
        controls.start({
          x: 0,
          opacity: 1,
          transition: { duration: 1 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <Box
      id="projects"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="white"
    >
      <MotionHead
        as="h1"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={controls}
        transition={{ duration: 4 }}
        flexDirection={{ base: "column", md: "row" }} // Stack vertically on small screens
        marginTop={{ base: "60px", md: "80px" }} // Adjust the marginTop to push content down
        fontWeight={200}
      >
        SELECTED PROJECTS
      </MotionHead>
      <Box textAlign="center" margin="20px">
        {/* Image */}
        <Link href="https://github.com/tianye-ct/Simple-Artist" isExternal>
          <Image src="project1.jpg" alt="Project 1" height={400} width={700} />
        </Link>

        {/* Text below each heading */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="10px"
        >
          {/* Left Text */}
          <Text fontSize="xl" textAlign="left" fontWeight={800}>
            SimArt Social Meida
          </Text>

          {/* Right Text */}
          <Text fontSize="md" textAlign="right">
            Neural Style Transfer to add artistic style to images.
          </Text>
        </Box>
      </Box>

      <Box textAlign="center" margin="20px">
        {/* Image */}
        <Link href="https://milestone3-offer.vercel.app/" isExternal>
          <Image src="project2.png" alt="Project 2" height={400} width={700} />
        </Link>

        {/* Text below each heading */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop="10px"
        >
          {/* Left Text */}
          <Text fontSize="xl" textAlign="left" fontWeight={800}>
            Innersonic Promotion
          </Text>

          {/* Right Text */}
          <Text fontSize="md" textAlign="right">
            LLM Powered One-stop-shop Socail Media Promotion Platform
          </Text>
        </Box>
      </Box>
      
    </Box>
  );
};

export default Projects;
