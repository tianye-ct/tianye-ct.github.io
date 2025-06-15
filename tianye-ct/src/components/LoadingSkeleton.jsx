import {
  Box,
  Skeleton,
  SkeletonText,
  VStack,
  HStack,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

export const BlogSkeleton = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <VStack spacing={6} align="stretch">
      {[1, 2, 3].map((i) => (
        <Box
          key={i}
          p={6}
          bg={bgColor}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="lg"
          boxShadow="sm"
        >
          <VStack align="stretch" spacing={4}>
            <Skeleton height="30px" width="70%" />
            <SkeletonText noOfLines={3} spacing={3} />
            <HStack spacing={4}>
              <Skeleton height="20px" width="80px" />
              <Skeleton height="20px" width="100px" />
            </HStack>
          </VStack>
        </Box>
      ))}
    </VStack>
  );
};

export const PortfolioSkeleton = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      {[1, 2, 3, 4].map((i) => (
        <Box
          key={i}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          bg={bgColor}
          borderColor={borderColor}
          boxShadow="md"
        >
          <Skeleton height="200px" />
          <Box p={6}>
            <VStack align="stretch" spacing={4}>
              <HStack justify="space-between">
                <Skeleton height="25px" width="60%" />
                <Skeleton height="20px" width="80px" borderRadius="full" />
              </HStack>
              <SkeletonText noOfLines={3} spacing={3} />
              <HStack spacing={2}>
                {[1, 2, 3].map((j) => (
                  <Skeleton key={j} height="20px" width="60px" borderRadius="full" />
                ))}
              </HStack>
            </VStack>
          </Box>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export const ProjectDetailSkeleton = () => {
  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box bg={bgColor} borderRadius="lg" p={8}>
      <VStack align="stretch" spacing={6}>
        <Skeleton height="40px" width="50%" />
        <Skeleton height="200px" borderRadius="lg" />
        <SkeletonText noOfLines={5} spacing={3} />
        <Box>
          <Skeleton height="25px" width="150px" mb={4} />
          <HStack spacing={2}>
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} height="25px" width="80px" borderRadius="full" />
            ))}
          </HStack>
        </Box>
        <Box>
          <Skeleton height="25px" width="200px" mb={4} />
          <SkeletonText noOfLines={4} spacing={3} />
        </Box>
      </VStack>
    </Box>
  );
};

export const LoadingSpinner = () => {
  const spinnerColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <VStack spacing={4} py={12}>
      <Box
        borderWidth="4px"
        borderColor={spinnerColor}
        borderStyle="solid"
        borderRadius="full"
        borderTopColor="transparent"
        width="50px"
        height="50px"
        animation="spin 0.8s linear infinite"
      />
      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </VStack>
  );
};