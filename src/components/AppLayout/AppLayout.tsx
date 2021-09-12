import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import Nav from '../NavBar/Nav';
import Footer from '../Footer/Footer';
import Particles from 'react-tsparticles';
import ParticlesConfig from 'src/theme/particles';

interface AppLayoutProps {
  children: React.ReactElement;
}

const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  const router = useRouter();
  const particlesOptions = ParticlesConfig();

  return (
    <>
      <NextSeo
        canonical={`https://www.carlosuziel.pm/${router.asPath}`}
        openGraph={{ url: `https://www.carlosuziel.pm/${router.asPath}` }}
      />
      <Box position='fixed' minH='100vh' minW='100vw' top={0} left={0} zIndex={-500}>
        <Particles options={particlesOptions} height='100vh' width='100vw' />
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
