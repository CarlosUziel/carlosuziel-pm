import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import { NextSeo } from 'next-seo';
import RepoCard from '@/components/RepoCard';
import PinnedProjects from '@/components/PinnedProjects';
import { pinnedRepos, pinnedRepoType } from '@/data/pinnedRepos';
import { getGHRepos, repoType } from '@/pages/api/github';

interface ProjectsProps {
  stars: number;
  repos: repoType[];
  followers: number;
  revalidate?: number;
}

function Projects({ repos }: ProjectsProps): React.ReactElement {
  return (
    <>
      <NextSeo title='Projects' />
      <Flex
        direction='column'
        alignItems='center'
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW='5xl'
        mx='auto'
        color={useColorModeValue(`brand.2`, `brand.0`)}
        userSelect='none'
        my={{ base: 6, md: 24 }}
      >
        <Heading
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign='center'
          color={useColorModeValue(`brand.2`, `brand.1`)}
          fontWeight='semibold'
        >
          Projects
        </Heading>
        <Button
          as='a'
          href='https://github.com/CarlosUziel'
          variant='ghost'
          size='lg'
          mt={2}
          leftIcon={<FaGithub />}
          _hover={{
            bg: 'brand.1',
            color: 'brand.2',
          }}
          rounded='full'
          color={useColorModeValue(`brand.2`, `brand.0`)}
        >
          View My Profile
        </Button>

        <Heading
          fontSize={{
            base: 'xl',
            sm: '2xl',
            md: '3xl',
            lg: '4xl',
            xl: '5xl',
          }}
          textAlign='center'
          mt={{ base: 8, md: 16 }}
          color={useColorModeValue(`brand.2`, `brand.1`)}
        >
          Pinned Repositories
        </Heading>
        <Text
          fontSize={{
            base: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'xl',
            xl: 'xl',
          }}
        >
          Some of my biggest projects
        </Text>

        <VStack
          direction='column'
          width='full'
          height='full'
          maxWidth='5xl'
          spacing={10}
          mt={{ base: 4, md: 8 }}
        >
          {pinnedRepos
            .sort(
              (a: pinnedRepoType, b: pinnedRepoType) =>
                new Date(repos.filter((x: repoType) => x.name === a.id)[0]?.created_at).getTime() -
                new Date(repos.filter((y: repoType) => y.name === b.id)[0]?.created_at).getTime()
            )
            .reverse()
            .map((data: pinnedRepoType, index) => (
              <PinnedProjects
                key={index.toString()}
                repo={repos.filter((x: repoType) => x.name === data.id)[0]}
                left={index % 2 === 0}
                projectData={data}
              />
            ))}
        </VStack>

        <Heading
          fontSize={{
            base: 'xl',
            sm: '2xl',
            md: '3xl',
            lg: '4xl',
            xl: '5xl',
          }}
          textAlign='center'
          mt={{ base: 8, md: 16 }}
          color={useColorModeValue(`brand.2`, `brand.1`)}
        >
          All Repositories
        </Heading>
        <Text
          fontSize={{
            base: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'xl',
            xl: 'xl',
          }}
        >
          A list of all of the <chakra.span fontWeight='extrabold'>public</chakra.span> repositories
          on my GitHub.
        </Text>

        <SimpleGrid
          mt={10}
          columns={{ base: 1, md: 2 }}
          width='full'
          height='full'
          maxH='full'
          mx='auto'
          gridAutoRows='1fr'
          spacingX={10}
          spacingY={8}
          isTruncated
          overflow='visible'
        >
          {repos
            .sort(
              (a: any, b: any) => new Date(a.pushed_at).getTime() - new Date(b.pushed_at).getTime()
            )
            .reverse()
            .map((repo: repoType, index: number) => (
              <RepoCard key={index.toString()} repo={repo} i={index} />
            ))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: ProjectsProps }> {
  const { stars, repos, followers } = await getGHRepos();

  return { props: { stars, repos, followers, revalidate: 600 } };
}

export default Projects;
