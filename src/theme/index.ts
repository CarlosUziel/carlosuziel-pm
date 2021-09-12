import { ChakraTheme, extendTheme, ThemeComponentProps } from '@chakra-ui/react';
import { transparentize, mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  components: {
    Link: {
      baseStyle: props => ({
        color: mode('brand.1', 'brand.1')(props),
        fontWeight: 'semibold',
        _focus: { boxShadow: 'none' },
      }),
    },
    span: {
      baseStyle: props => ({
        color: mode('#F2B263', '#F2B263')(props),
      }),
    },
    body: {
      baseStyle: {
        bg: 'brand.1',
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Ubuntu',
      },
    },
    Text: {
      baseStyle: {
        fontFamily: 'Ubuntu',
      },
    },
    Button: {
      _focus: { boxShadow: 'none' },
      variants: {
        ghostAlwaysOn: (props: ThemeComponentProps<ChakraTheme>) => {
          const darkBg = transparentize(`${props.colorScheme}.2`, 0.12)(props.theme);
          const darkHoverBg = transparentize(`${props.colorScheme}.2`, 0.24)(props.theme);
          const darkActiveBg = transparentize(`${props.colorScheme}.2`, 0.36)(props.theme);
          return {
            color: mode(`${props.colorScheme}.2`, `${props.colorScheme}.2`)(props),
            bgColor: props.colorMode === 'light' ? `${props.colorScheme}.2` : darkBg,
            _hover: {
              bgColor: mode(`${props.colorScheme}.2`, darkHoverBg)(props),
            },
            _active: {
              bgColor: mode(`${props.colorScheme}.1`, darkActiveBg)(props),
            },
          };
        },
      },
    },
  },
  styles: {
    global: (props: any) => ({
      '*': {
        bg: 'none',
        _focus: { boxShadow: 'none' },
        _selection: {
          color: props.colorMode === `light` ? `brand.1` : `brand.2`,
          bg: props.colorMode === `light` ? `brand.2` : `brand.0`,
        },
      },
    }),
  },
  colors: {
    brand: {
      0: '#F2D8C2',
      1: '#F2B263',
      2: '#262626',
    },
    desert: {
      50: '#ffefde',
      100: '#fbd7b4',
      200: '#f6c188',
      300: '#f1ae5a',
      400: '#ed892d',
      500: '#d46415',
      600: '#a5430e',
      700: '#762708',
      800: '#481201',
      900: '#1d0100',
    },
  },
  textStyles: {
    span: {
      fontWeight: 'bold',
      color: 'brand.2',
      '.chakra-ui-dark &': { color: 'brand.0' },
    },
  },
});

export default theme;
