import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { getAllFilesFrontMatter } from '@/utils/mdx';
import SciPub from '@/components/SciPub';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { NextSeo } from 'next-seo';

function Research({ pubs }: { pubs: any }): React.ReactElement {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('recent');

  const filteredSciPubs = pubs
    .filter((frontMatter: any) => frontMatter.title.toLowerCase().includes(filter))
    .sort((a: any, b: any) => {
      if (sort === 'recent' || sort === 'old') {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
    });

  if (sort === 'recent') {
    filteredSciPubs.reverse();
  }

  return (
    <>
      <NextSeo title='Research' />

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
          Scientific Publications
        </Heading>
        <Text
          mt={3}
          px={5}
          fontSize={{
            base: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'xl',
            xl: 'xl',
          }}
        >
          This is a collection of all the research publications I have participated in.
        </Text>
        <Box mt={{ base: 6, md: 24 }} width='full'>
          <Flex
            width='full'
            direction={{ base: 'column', md: 'row' }}
            my={7}
            px={{ base: 5, sm: 2 }}
            justifyContent='space-between'
          >
            <InputGroup maxWidth='full' mb={{ base: 5, md: 0 }} mr={2}>
              <InputLeftElement pointerEvents='none'>
                <AiOutlineSearch color='gray.300' />
              </InputLeftElement>
              <Input
                variant='filled'
                type='text'
                placeholder='Search'
                _placeholder={{
                  color: useColorModeValue('gray.800', 'whiteAlpha.800'),
                }}
                onChange={e => setFilter(e.target.value.toLowerCase())}
                _focus={{
                  ringColor: 'brand.1',
                  ring: 2,
                }}
              />
            </InputGroup>

            <Menu>
              <MenuButton as={Button} rightIcon={<BiChevronDown />}>
                Sort by...
              </MenuButton>
              <MenuList zIndex={998} bg={useColorModeValue(`white`, `brand.2`)}>
                <MenuItem
                  zIndex={999}
                  isDisabled={sort === 'recent'}
                  onClick={() => setSort('recent')}
                >
                  Recent
                </MenuItem>
                <MenuItem zIndex={999} isDisabled={sort === 'old'} onClick={() => setSort('old')}>
                  Oldest
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          {filteredSciPubs.length === 0 && (
            <Text fontSize='2xl' textAlign='center'>
              No Results :(
            </Text>
          )}
          {filteredSciPubs.map((frontMatter: any) => (
            <SciPub key={frontMatter.title} {...frontMatter} />
          ))}
        </Box>
      </Flex>
    </>
  );
}

export async function getStaticProps(): Promise<{ props: { pubs: any } }> {
  const pubs = await getAllFilesFrontMatter('pubs');
  return { props: { pubs } };
}
export default Research;
