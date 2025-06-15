import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props) => ({
    body: {
      bg: mode('white', '#1a1a1a')(props),
      color: mode('gray.800', 'gray.100')(props),
    },
    '*::placeholder': {
      color: mode('gray.400', 'gray.600')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'gray.600')(props),
    },
  }),
};

const colors = {
  brand: {
    50: '#E6FFFA',
    100: '#B2F5EA',
    200: '#81E6D9',
    300: '#4FD1C5',
    400: '#38B2AC',
    500: '#319795',
    600: '#2C7A7B',
    700: '#285E61',
    800: '#234E52',
    900: '#1D4044',
  },
};

const fonts = {
  heading: "'Playfair Display', 'Georgia', serif",
  body: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'medium',
      borderRadius: 'md',
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode('blue.600', 'blue.400')(props),
      _hover: {
        textDecoration: 'underline',
      },
    }),
  },
};

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
});

export default theme;