import React, { useState } from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  chakra,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import Link from 'next/link';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';
import { useRouter } from 'next/router';
import { transparentize } from '@chakra-ui/theme-tools';
import useScrollPosition from '@/hooks/useScrollPosition.hook';
import { useEffect } from 'react';

const links = [
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
  {
    name: `Projects`,
    link: `/projects`,
  },
  {
    name: `Research`,
    link: `/research`,
  },
  {
    type: `dropdown`,
    name: `Resources`,
    links: [
      {
        name: `Software`,
        link: `/software`,
      },
      {
        name: `Bibliography`,
        link: `/bibliography`,
      },
    ],
  },
];

function Nav(): JSX.Element {
  const { colorMode } = useColorMode();
  const [width, setWidth] = useState(0);
  const { y, max } = useScrollPosition();
  const { pathname } = useRouter();

  const blogPage = pathname === '/blog/[slug]';

  useEffect(() => {
    if (blogPage) {
      const newWidth = y / max;
      if (newWidth !== width) {
        setWidth(newWidth * 100);
      }
    }
  }, [y, max, width, blogPage]);

  return (
    <chakra.header
      width='full'
      position='sticky'
      _before={{
        transition: 'all 0.10s',
        transitionTimingFunction: '1 100 10 10',
        content: '""',
        width: width + '%',
        top: 0,
        left: 0,
        bg: useColorModeValue('brand.2', 'brand.0'),
        position: 'absolute',
        zIndex: 9999,
      }}
      top={0}
      left={0}
      zIndex={10}
      sx={{ backdropFilter: `saturate(180%) blur(5px)` }}
      shadow='xl'
    >
      <chakra.nav mx={{ base: 2, lg: 5, xl: 10 }} py={1} px={{ base: 2, lg: 4 }}>
        <Flex
          margin='auto'
          justifyContent='space-between'
          alignContent='center'
          width='full'
          fontSize={{
            base: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl',
          }}
          letterSpacing='wide'
        >
          <Box display='flex' alignContent='center'>
            <Link href='/' passHref>
              <ChakraLink
                margin='auto'
                fontWeight='light'
                position='relative'
                textTransform='uppercase'
                color={colorMode === 'light' ? `brand.2` : `brand.0`}
                _after={{
                  transition: `all 0.25s ease-in-out`,
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `0%`,
                  height: `25%`,
                  position: `absolute`,

                  bottom: 1,
                  left: 0,
                  bg:
                    colorMode === 'light'
                      ? transparentize(`brand.1`, 0.9)
                      : transparentize(`brand.1`, 0.5),
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: `100%`,
                  },
                }}
              >
                Carlos Uziel
                <chakra.span fontWeight='extrabold' letterSpacing='tight'>
                  {' '}
                  PEREZ MALLA
                </chakra.span>
              </ChakraLink>
            </Link>
          </Box>
          <MobileNav links={links} />
          <DesktopNav links={links} />
        </Flex>
      </chakra.nav>
    </chakra.header>
  );
}

export default Nav;
