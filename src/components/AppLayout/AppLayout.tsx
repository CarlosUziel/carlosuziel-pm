import React from 'react';
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Nav from '../NavBar/Nav';
import Footer from '../Footer/Footer';
import Particles from 'react-tsparticles';

interface AppLayoutProps {
  children: React.ReactElement;
}

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <NextSeo
        canonical={`https://www.carlosuziel-pm.dev/${router.asPath}`}
        openGraph={{ url: `https://www.carlosuziel-pm.dev/${router.asPath}` }}
      />
      <Box position='fixed' minH='100vh' minW='100vw' top={0} left={0} zIndex={-500} bg='brand.2'>
        <Particles
          params={{
            background: {
              color: {
                value: useColorModeValue('#FFFFFF', '#262626'),
              },
            },
            fpsLimit: 45,
            interactivity: {
              detectsOn: 'window',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#F2D8C2',
              },
              links: {
                color: '#F2B263',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
          height='100vh'
          width='100vw'
        />
      </Box>
      <Grid templateRows='auto 1fr auto' minH='100vh'>
        <Nav />
        <Box>{children}</Box>
        <Footer />
      </Grid>
    </>
  );
};

export default AppLayout;
