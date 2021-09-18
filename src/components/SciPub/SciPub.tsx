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
  chakra,
} from '@chakra-ui/react';
import BlogBadge from '../BlogBadge';

interface SciPubProps {
  title: string;
  abstract: string;
  publishedAt: string;
  publishedIn: string;
  tags: string[];
  citation: string;
  article: string;
}

const SciPub = ({
  title,
  abstract,
  publishedAt,
  publishedIn,
  tags,
  citation,
  article,
}: SciPubProps): JSX.Element => {
  const spliceBP = useBreakpointValue({ base: 2, md: 5 });
  return (
    <Link href={article} passHref>
      <ChakraLink _hover={{ textDecoration: `none` }} width='full'>
        <Flex
          mb={8}
          direction='column'
          width='calc(100% -10px)'
          border='1px solid'
          backdropFilter='saturate(180%) blur(5px)'
          boxShadow='2xl'
          transition='all 0.25s'
          borderRadius='2xl'
          transitionTimingFunction='spring(1 100 10 10)'
          _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
          overflow='hidden'
          fontSize={{
            base: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'xl',
            xl: '2xl',
          }}
          mx={{ base: 2, md: 4, lg: 8 }}
          textAlign='justify'
        >
          <Flex
            width='full'
            alignItems={{ base: 'flex-start', sm: 'flex-end' }}
            flexDirection={{ base: `column`, sm: `row` }}
            justifyContent='space-between'
            fontWeight='light'
            textTransform='uppercase'
            fontSize='lg'
            color='brand.2'
            bg='brand.1'
            py={2}
            px={{ base: 2, md: 4 }}
          >
            <Text>{publishedIn}</Text>
            <Text>{publishedAt}</Text>
          </Flex>
          <Flex direction='column' p={{ base: 2, md: 4 }}>
            <Heading
              color={useColorModeValue('brand.2', 'brand.1')}
              mb={2}
              fontSize={{
                base: 'md',
                sm: 'lg',
                md: 'xl',
                lg: '2xl',
              }}
              fontWeight='extrabold'
            >
              {title}
            </Heading>
            <HStack mb={{ base: 2, sm: 0 }} sx={{ marginLeft: '0px!important' }}>
              {tags &&
                tags.slice(0, spliceBP).map((tag, i) => <BlogBadge tag={tag} key={i.toString()} />)}
            </HStack>
            <chakra.span
              pt={2}
              fontSize={{
                base: 'sm',
                lg: 'md',
              }}
              fontStyle='italic'
              fontWeight='semibold'
              color={useColorModeValue('brand.2', 'brand.0')}
            >
              {citation}
            </chakra.span>
            <Text
              color={useColorModeValue('brand.2', 'brand.0')}
              width='full'
              p={{ base: 2, md: 4 }}
              fontSize={{
                base: 'xs',
                lg: 'sm',
              }}
            >
              {abstract}
            </Text>
          </Flex>
        </Flex>
      </ChakraLink>
    </Link>
  );
};

export default SciPub;
