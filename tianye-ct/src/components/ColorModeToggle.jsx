import { IconButton, useColorMode, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

const ColorModeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const iconColor = useColorModeValue('gray.600', 'yellow.400');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  

  return (
    <Tooltip placement="bottom">
      <MotionIconButton
        aria-label="Toggle color mode"
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        color={iconColor}
        _hover={{ bg: hoverBg }}
        size="md"
        fontSize="20px"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      />
    </Tooltip>
  );
};

export default ColorModeToggle;