import {
  Box,
  Flex,
  Heading,
  Image,
  chakra,
  useColorModeValue,
  Skeleton,
  Link as ChakraLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { NextSeo } from 'next-seo';

export default function Home(): React.ReactElement {
  const [imageLoad, setImageLoad] = useState(false);
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    // eslint-disable-next-line no-console
    console.log(hostname);
  }

  return (
    <>
      <NextSeo title='Home' />

      <Box
        height='full'
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW='7xl'
        mx='auto'
        userSelect='none'
      >
        <Flex
          direction={{ base: `column`, lg: `row` }}
          height='full'
          justifyContent='center'
          alignItems='center'
        >
          <Skeleton
            isLoaded={imageLoad}
            boxSize='250px'
            borderRadius='full'
            bg='transparent'
            backdropFilter='saturate(180%) blur(5px)'
            ringColor='brand.1'
            ring={1}
            m={2}
          >
            <Image
              borderRadius='full'
              bg='transparent'
              boxSize='250px'
              src='./static/images/portrait_nobg.png'
              objectFit='cover'
              alt='Carlos Uziel Perez Malla'
              onLoad={() => setImageLoad(true)}
            />
          </Skeleton>
          <Flex
            alignSelf='center'
            direction='column'
            pl={{ base: 0, lg: 10 }}
            my={{ base: 10, lg: 0 }}
          >
            <Heading
              bgGradient={`linear(to-r, ${useColorModeValue(
                `gray.700`,
                `brand.0`
              )}, ${useColorModeValue(`brand.1`, `brand.1`)})`}
              className='moving-grad'
              bgClip='text'
              fontSize={{ base: `5xl`, lg: `7xl` }}
              textAlign={{ base: `center`, lg: `left` }}
            >
              Hi, I&apos;m Carlos Uziel!
            </Heading>
            <chakra.p maxW='650px' textAlign={{ base: `center`, lg: `left` }} fontSize='xl' mt={2}>
              Welcome to my website! I use this to show some of my{' '}
              <Link href='/projects' passHref>
                <ChakraLink>projects</ChakraLink>
              </Link>{' '}
              off, and test things out. Sometimes I even write{' '}
              <Link href='/blog' passHref>
                <ChakraLink>blogs</ChakraLink>
              </Link>
              .
            </chakra.p>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
