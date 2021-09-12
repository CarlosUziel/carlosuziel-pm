import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import ToolGrid from '@/components/ToolGrid';
import { NextSeo } from 'next-seo';

function Tools(): React.ReactElement {
  return (
    <>
      <NextSeo title='Software' />

      <Box
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW='5xl'
        mx='auto'
        color={useColorModeValue(`brand.2`, `brand.0`)}
        fontSize={{
          base: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'xl',
          xl: 'xl',
        }}
        my={{ base: 6, md: 24 }}
      >
        <Flex direction='column' alignItems='center' width='full'>
          <Heading
            fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
            textAlign='center'
            color={useColorModeValue(`brand.2`, `brand.1`)}
            fontWeight='semibold'
          >
            Software
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
            This is a collection of some of the software tools I use.
          </Text>
          <Tabs isFitted variant='enclosed' mt={{ base: 4, md: 8, lg: 16 }} width='full'>
            <TabList
              display='flex'
              flexWrap='wrap'
              bg='brand.0'
              rounded='2xl'
              color='brand.2'
              overflow='hidden'
              fontSize={{
                base: 'md',
                sm: 'lg',
                md: 'xl',
                lg: '2xl',
                xl: '3xl',
              }}
              shadow='xl'
              border={0}
              m={0}
            >
              <Tab
                letterSpacing='wider'
                fontWeight='light'
                textTransform='uppercase'
                borderRadius={0}
                _selected={{ color: 'brand.2', bg: 'brand.1' }}
                _focus={{ outline: 'none' }}
              >
                development
              </Tab>
              <Tab
                letterSpacing='wider'
                fontWeight='light'
                textTransform='uppercase'
                borderRadius={0}
                _selected={{ color: 'brand.2', bg: 'brand.1' }}
                _focus={{ outline: 'none' }}
              >
                research
              </Tab>
              <Tab
                letterSpacing='wider'
                fontWeight='light'
                textTransform='uppercase'
                borderRadius={0}
                _selected={{ color: 'brand.2', bg: 'brand.1' }}
                _focus={{ outline: 'none' }}
              >
                visualization
              </Tab>
              <Tab
                letterSpacing='wider'
                fontWeight='light'
                textTransform='uppercase'
                borderRadius={0}
                _selected={{ color: 'brand.2', bg: 'brand.1' }}
                _focus={{ outline: 'none' }}
              >
                productivity
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ToolGrid filter='development' />
              </TabPanel>
              <TabPanel>
                <ToolGrid filter='research' />
              </TabPanel>
              <TabPanel>
                <ToolGrid filter='visualization' />
              </TabPanel>
              <TabPanel>
                <ToolGrid filter='productivity' />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </>
  );
}

export default Tools;
