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
    // <Box
    //   id="projects"
    //   display="flex"
    //   flexDirection="column"
    //   justifyContent="center"
    //   alignItems="center"
    //   bg="white"
    //   paddingBottom="100px" // Add extra padding to create space after the last project
    // >
    //   <MotionHead
    //     as="h1"
    //     initial={{ x: "-100vw", opacity: 0 }}
    //     animate={controls}
    //     transition={{ duration: 4 }}
    //     marginTop={{ base: "60px", md: "80px" }} // Adjust the marginTop to push content down
    //     fontWeight={200}
    //   >
    //     SELECTED PROJECTS
    //   </MotionHead>

    //   {/* Projects Side by Side */}
    //   <Box
    //     display="flex"
    //     flexDirection={{ base: "column", md: "row" }}
    //     justifyContent="center"
    //     alignItems="center"
    //     marginTop="20px"
    //   >
    //     {/* Project 1 */}
    //     <Box
    //       textAlign="center"
    //       margin="20px"
    //       width={{ base: "100%", md: "50%" }}
    //     >
    //       <Link href="https://github.com/tianye-ct/Simple-Artist" isExternal>
    //         <Image
    //           src="project1.jpg"
    //           alt="Project 1"
    //           height={400}
    //           width={700}
    //         />
    //       </Link>
    //       <Box display="flex" justifyContent="space-between" marginTop="10px">
    //         <Text fontSize="xl" textAlign="left" fontWeight={800}>
    //           SimArt Social Media
    //         </Text>
    //         <Text fontSize="md" textAlign="right">
    //           Neural Style Transfer to add artistic style to images.
    //         </Text>
    //       </Box>
    //     </Box>

    //     {/* Project 2 */}
    //     <Box
    //       textAlign="center"
    //       margin="20px"
    //       width={{ base: "100%", md: "50%" }}
    //     >
    //       <Link href="https://milestone3-offer.vercel.app/" isExternal>
    //         <Image
    //           src="project2.png"
    //           alt="Project 2"
    //           height={400}
    //           width={700}
    //         />
    //       </Link>
    //       <Box display="flex" justifyContent="space-between" marginTop="10px">
    //         <Text fontSize="xl" textAlign="left" fontWeight={800}>
    //           Innersonic Promotion
    //         </Text>
    //         <Text fontSize="md" textAlign="right">
    //           LLM Powered One-stop-shop Social Media Promotion Platform
    //         </Text>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
    <Box
      id="projects"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bg="white"
      paddingBottom="100px" // Add extra padding to create space after the last project
    >
      <MotionHead
        as="h1"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={controls}
        transition={{ duration: 4 }}
        marginTop={{ base: "60px", md: "80px" }} // Adjust the marginTop to push content down
        fontWeight={200}
      >
        SELECTED PROJECTS
      </MotionHead>

      {/* Responsive Projects Section */}
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }} // Stack vertically on small screens, side by side on medium and up
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
        flexWrap="wrap" // Ensure proper wrapping on smaller screens
      >
        {/* Project 1 */}
        <Box
          textAlign="center"
          margin="20px"
          width={{ base: "100%", md: "45%" }} // Full width on mobile, 45% width on medium screens and above
        >
          <Link href="https://github.com/tianye-ct/Simple-Artist" isExternal>
            <Image
              src="project1.jpg"
              alt="Project 1"
              height={{ base: "auto", md: 400 }} // Responsive height, auto on small screens, fixed on larger screens
              width={{ base: "100%", md: 700 }} // Responsive width, full width on mobile, fixed on larger screens
              objectFit="cover" // Make sure the image scales correctly
            />
          </Link>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="10px"
            flexDirection={{ base: "column", sm: "row" }} // Stack text vertically on very small screens
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={800}
              textAlign="left"
            >
              SimArt Social Media
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} textAlign="right">
              Neural Style Transfer to add artistic style to images.
            </Text>
          </Box>
        </Box>

        {/* Project 2 */}
        <Box
          textAlign="center"
          margin="20px"
          width={{ base: "100%", md: "45%" }} // Full width on mobile, 45% width on medium screens and above
        >
          <Link href="https://milestone3-offer.vercel.app/" isExternal>
            <Image
              src="project2.png"
              alt="Project 2"
              height={{ base: "auto", md: 400 }} // Responsive height, auto on small screens, fixed on larger screens
              width={{ base: "100%", md: 700 }} // Responsive width, full width on mobile, fixed on larger screens
              objectFit="cover" // Make sure the image scales correctly
            />
          </Link>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginTop="10px"
            flexDirection={{ base: "column", sm: "row" }} // Stack text vertically on very small screens
          >
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight={800}
              textAlign="left"
            >
              Innersonic Promotion
            </Text>
            <Text fontSize={{ base: "sm", md: "md" }} textAlign="right">
              LLM Powered One-stop-shop Social Media Promotion Platform
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
