import React from 'react';
import { Box, Flex, Text, useColorMode, Stack, Link as ChakraLink, VStack } from '@chakra-ui/react';
import { repoType } from '@/pages/api/github';
import { pinnedRepoType } from '@/data/pinnedRepos';
import PinnedImageProjects from '../PinnedImageProjects';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Tags from '../Tags';

interface PinnedProjectsProps {
  repo: repoType;
  projectData: pinnedRepoType;
  left: boolean;
}

const PinnedProjects = ({ repo, projectData, left }: PinnedProjectsProps): JSX.Element => {
  const { colorMode } = useColorMode();

  if (projectData && projectData?.image) {
    return <PinnedImageProjects left={left} repo={repo} projectData={projectData} />;
  }

  return (
    <Box h='full' w='full' my={5}>
      <VStack
        px={{ base: 4, md: 8 }}
        backdropFilter='saturate(180%) blur(5px)'
        py={4}
        height='100%'
        width='100%'
        border='1px solid'
        borderColor='brand.1'
        borderRadius='2xl'
        boxShadow='xl'
        textAlign='left'
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={1}
      >
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          maxWidth='full'
          width='full'
          justifyContent='space-between'
          alignItems='flex-start'
        >
          <Flex width='full' justifyContent='space-between'>
            <Text fontSize={{ base: `2xl`, md: `4xl` }} fontWeight='bold' maxW='100%' pr={2}>
              {projectData.name}
            </Text>
            <Stack isInline justifyContent='flex-end' alignItems='center' spacing={4} mr={1}>
              {repo?.html_url && (
                <Link href={repo?.html_url} passHref>
                  <ChakraLink isExternal color={colorMode === 'light' ? `brand.2` : `brand.1`}>
                    <FaGithub size={23} />
                  </ChakraLink>
                </Link>
              )}
              {projectData?.deployedLink && (
                <Link href={projectData.deployedLink} passHref>
                  <ChakraLink isExternal color={colorMode === 'light' ? `brand.2` : `brand.1`}>
                    <FaExternalLinkAlt size={20} />
                  </ChakraLink>
                </Link>
              )}
            </Stack>
          </Flex>
        </Flex>
        <Tags tags={projectData?.stack} />
        <Text
          color={colorMode === 'light' ? `brand.2` : `brand.0`}
          justifySelf='center'
          height='100%'
          width='100%'
          whiteSpace='normal'
          pt={2}
          textAlign='justify'
        >
          {projectData.longDescription}
        </Text>
      </VStack>
    </Box>
  );
};

export default PinnedProjects;
