import React from 'react';
import { Box, Stack, Tag, Text, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
import { repoType } from '@/pages/api/github';

interface RepoCardProps {
  repo: repoType;
  i: number;
}

const RepoCard = ({ repo, i }: RepoCardProps): JSX.Element => {
  const { colorMode } = useColorMode();

  return (
    <Box
      key={i.toString()}
      as='a'
      href={repo.html_url}
      h='full'
      w='full'
      border='1px solid'
      borderColor='brand.1'
      boxShadow='lg'
      transition='all 0.25s'
      borderRadius='2xl'
      overflow='hidden'
      transitionTimingFunction='spring(1 100 10 10)'
      _hover={{ transform: `translateY(-4px)`, shadow: `2xl` }}
      backdropFilter='saturate(180%) blur(5px)'
    >
      <VStack
        spacing={1}
        p={3}
        height='100%'
        width='100%'
        maxWidth='100%'
        borderRadius='lg'
        boxShadow='lg'
        textAlign='left'
        direction='column'
        pl={5}
        justifyContent='flex-start'
        alignItems='flex-start'
        isTruncated
      >
        <Stack isInline alignItems='center'>
          <Text fontSize={{ base: `lg`, md: `xl` }} fontWeight='semibold' maxW='full' isTruncated>
            {repo.name}
          </Text>
          {repo.language && (
            <Tag
              bg={colorMode === 'light' ? `brand.2` : `brand.0`}
              color={colorMode === 'light' ? `brand.1` : `brand.2`}
              size='sm'
              ml={2}
              mt='auto'
              height='22px'
            >
              {repo.language}
            </Tag>
          )}
        </Stack>

        <Text
          color={useColorModeValue(`brand.2`, `brand.0`)}
          justifySelf='center'
          maxWidth='full'
          isTruncated
        >
          {repo.description}
        </Text>
      </VStack>
    </Box>
  );
};

export default RepoCard;
