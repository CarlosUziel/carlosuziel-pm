import { Stack, useColorModeValue, Box, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialIcons from '../SocialIcons';

const Footer = (): JSX.Element => {
  return (
    <Box backdropFilter='saturate(180%) blur(5px)' color={useColorModeValue(`brand.2`, `brand.0`)}>
      <Flex
        m='auto'
        py={2}
        px={5}
        direction={{ base: 'column', sm: 'row' }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Flex
          direction='row'
          maxW='full'
          mx={{ base: `auto`, sm: 5 }}
          alignItems='left'
          pb={{ base: 2, sm: 0 }}
        >
          © Carlos Uziel Perez Malla {new Date().getFullYear()}
        </Flex>
        <Stack direction='row' spacing={6} ml='auto' mr={{ base: `auto`, sm: 5 }}>
          <SocialIcons label='GitHub' href='https://github.com/CarlosUziel/'>
            <FaGithub />
          </SocialIcons>
          <SocialIcons
            label='LinkedIn'
            href='https://linkedin.com/in/carlos-uziel-p%C3%A9rez-malla-323aa5124'
          >
            <FaLinkedin />
          </SocialIcons>
          <SocialIcons label='Twitter' href='https://twitter.com/perez_malla'>
            <FaTwitter />
          </SocialIcons>
        </Stack>
      </Flex>
    </Box>
  );
};
export default Footer;
