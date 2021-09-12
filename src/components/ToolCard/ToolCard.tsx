import React from 'react';
import {
  Box,
  Image,
  Text,
  useColorModeValue,
  Flex,
  SimpleGrid,
  AspectRatio,
  useColorMode,
  Tag,
  Stack,
} from '@chakra-ui/react';
import { usePalette } from 'react-palette';
import { ToolType } from '@/data/tools';

export const ToolCard = ({ name, description, link, id, labels }: ToolType): JSX.Element => {
  const { data } = usePalette(`./static/images/toolImages/${id}.png`);
  const { colorMode } = useColorMode();

  return (
    <Box as='a' href={link} height='100%'>
      <SimpleGrid
        backdropFilter='saturate(180%) blur(5px)'
        p={3}
        height='100%'
        gridTemplateColumns='85px 1fr'
        border='2px solid'
        borderColor='brand.1'
        borderRadius='2xl'
        boxShadow='lg'
        transition='all 0.25s'
        transitionTimingFunction='spring(1 100 10 10)'
        _hover={{ transform: `translateY(-4px)`, shadow: `xl` }}
        overflow='auto'
      >
        <AspectRatio ratio={1} boxSize='85px'>
          <Box
            position='relative'
            maxHeight='100%'
            maxWidth='100%'
            boxShadow={`inset 0 0 20px 5px ${useColorModeValue(
              `${data.darkVibrant}19`,
              `${data.lightVibrant}19`
            )}`}
            borderRadius='2xl'
          >
            <Box
              bg='white'
              position='absolute'
              top={0}
              bottom={0}
              left={0}
              right={0}
              overflow='hidden'
            />
            <Image
              alt={`${name} logo`}
              top='50%'
              left='50%'
              transform='translate(-50%, -50%)'
              position='absolute'
              src={
                id === `biorender`
                  ? colorMode === 'light'
                    ? `./static/images/toolImages/${id}.png`
                    : `./static/images/toolImages/${id}dark.png`
                  : `./static/images/toolImages/${id}.png`
              }
              maxHeight='80%'
              maxWidth='80%'
            />
          </Box>
        </AspectRatio>

        <Flex
          textAlign='left'
          direction='column'
          pl={5}
          height='100%'
          justifyContent='center'
          alignItems='flex-start'
        >
          <Text fontSize='xl' fontWeight='semibold' color={useColorModeValue(`brand.2`, `brand.1`)}>
            {name}
          </Text>
          <Stack isInline isTruncated alignItems='center'>
            {labels?.map((label, index) => (
              <Tag
                size='md'
                height='20px'
                key={index.toString() + id}
                color={colorMode === 'light' ? data.darkVibrant : data.lightVibrant}
                bg={`${colorMode === 'light' ? data.darkVibrant : data.lightVibrant}22`}
              >
                {label}
              </Tag>
            ))}
          </Stack>

          <Text color={useColorModeValue(`brand.2`, `brand.0`)} whiteSpace='normal' width='100%'>
            {description}
          </Text>
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default ToolCard;
