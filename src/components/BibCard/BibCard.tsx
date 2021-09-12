import React from 'react';
import { Box, Text, useColorModeValue, Flex, Tag, Stack } from '@chakra-ui/react';
import { BibType } from '@/data/bibliography';

export const BibCard = ({ name, author, description, link, id, labels }: BibType): JSX.Element => {
  return (
    <Box
      as='a'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      height='100%'
      border='1px solid'
      borderColor='brand.1'
      borderRadius='2xl'
      boxShadow='lg'
      transition='all 0.25s'
      transitionTimingFunction='spring(1 100 10 10)'
      _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
      backdropFilter='saturate(180%) blur(5px)'
      p={3}
    >
      <Flex
        textAlign='left'
        direction='column'
        p={{ base: 1, md: 2 }}
        height='100%'
        justifyContent='center'
        alignItems='flex-start'
        overflow='auto'
      >
        <Text
          fontSize='xl'
          fontWeight='semibold'
          fontStyle='italic'
          color={useColorModeValue(`brand.2`, `brand.1`)}
        >
          {name}
        </Text>

        <Stack isInline isTruncated alignItems='center'>
          {labels?.map((label, index) => (
            <Tag
              size='md'
              height='20px'
              key={index.toString() + id}
              color='brand.2'
              bg='brand.0'
              my={2}
            >
              {label}
            </Tag>
          ))}
        </Stack>
        <Text
          fontSize={{
            base: 'xs',
            lg: 'sm',
          }}
          fontWeight='light'
          color={useColorModeValue(`brand.2`, `brand.0`)}
        >
          {author}
        </Text>

        <Text
          color={useColorModeValue(`brand.2`, `brand.0`)}
          whiteSpace='normal'
          width='full'
          fontSize={{
            base: 'xs',
            lg: 'sm',
          }}
          textAlign='justify'
          pt={{ base: 1, md: 2 }}
        >
          {description}
        </Text>
      </Flex>
    </Box>
  );
};

export default BibCard;
