import React from 'react';
import Link from 'next/link';
import {
  Link as ChakraLink,
  Text,
  useColorModeValue,
  Heading,
  HStack,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';
import BlogBadge from '../BlogBadge';
import { frontMatterType } from '@/utils/mdx';

interface BlogPostProps {
  frontMatter: frontMatterType;
}

const BlogPost = ({ frontMatter }: BlogPostProps): JSX.Element => {
  const spliceBP = useBreakpointValue({ base: 2, md: 4 });
  const { title, slug, tags, publishedAt, summary } = frontMatter;
  return (
    <Link href={`/blog/${slug}`} passHref>
      <ChakraLink _hover={{ textDecoration: `none` }} width='full'>
        <Flex
          mb={8}
          px={5}
          py={4}
          direction='column'
          width='calc(100% -10px)'
          mx={'5px'}
          border='2px solid'
          sx={{ backdropFilter: `saturate(180%) blur(5px)` }}
          boxShadow='2xl'
          transition='all 0.25s'
          borderRadius='2xl'
          transitionTimingFunction='spring(1 100 10 10)'
          _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
        >
          <Flex
            width='full'
            alignItems={{ base: 'flex-start', sm: 'flex-end' }}
            flexDirection={{ base: `column`, sm: `row` }}
            justifyContent='space-between'
            maxW='full'
            mb={2}
          >
            <HStack mb={{ base: 2, sm: 0 }} sx={{ marginLeft: '0px!important' }}>
              {tags &&
                tags.slice(0, spliceBP).map((tag, i) => <BlogBadge tag={tag} key={i.toString()} />)}
            </HStack>
            <Text fontWeight='light' fontSize='lg' color={useColorModeValue('brand.2', 'brand.0')}>
              {frontMatter.readingTime?.text} {'•'} {publishedAt}
            </Text>
          </Flex>
          <Heading
            color={useColorModeValue('brand.2', 'brand.1')}
            mb={2}
            fontSize={{ base: '2xl', md: '3xl' }}
          >
            {title}
          </Heading>
          <Text color={useColorModeValue('brand.2', 'brand.0')} width='full'>
            {summary}
          </Text>
        </Flex>
      </ChakraLink>
    </Link>
  );
};

export default BlogPost;
