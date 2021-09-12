import Link from 'next/link';
import { css } from '@emotion/react';
import {
  Box,
  Link as ChakraLink,
  Text,
  Flex,
  BoxProps,
  useColorModeValue,
  chakra,
  ListItem,
  AspectRatio,
  ChakraProps,
  OrderedList,
  List,
  ListIcon,
} from '@chakra-ui/react';
import LineHeading from '../LineHeading';
import React from 'react';
import Image, { ImageProps } from 'next/image';
import { ArrowRightIcon } from '@chakra-ui/icons';

interface CustomLinkProps {
  href: string;
}

export * from './Definition';
export * from './Aside';

export const CustomLink = (props: CustomLinkProps): JSX.Element => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <ChakraLink
          width='calc(100% + 28px)'
          position='absolute'
          ml={'-0.7em'}
          height='full'
          maxW='700px'
          {...props}
          cursor='pointer'
          _after={{
            content: "'#'",
            visibility: 'hidden',
            color: 'brand.1',
          }}
          _hover={{
            _after: {
              visibility: 'visible',
            },
          }}
        />
      </Link>
    );
  }

  return <ChakraLink color='brand.1' target='_blank' rel='noopener noreferrer' {...props} />;
};

interface CustomImageProps {
  ratio?: number;
  border?: boolean;
  chakraWidth?: number;
}

export const CustomImage = ({
  alt,
  ratio,
  border,
  chakraWidth,
  ...props
}: ImageProps & CustomImageProps): JSX.Element => {
  return (
    <Flex direction='column' my={7}>
      {ratio ? (
        <AspectRatio width={chakraWidth || 'full'} mx={'auto'} ratio={ratio}>
          <Image className={`${border && 'border'}`} alt={alt} {...props} />
        </AspectRatio>
      ) : (
        <Image className={`${border && 'border'}`} alt={alt} {...props} />
      )}
      <style jsx global>{`
        .border {
          border-radius: var(--chakra-radii-xl);
        }
      `}</style>
      <Text
        textAlign='center'
        fontWeight={'semibold'}
        mt={2}
        color={useColorModeValue('gray.600', 'gray.400')}
      >
        {alt}
      </Text>
    </Flex>
  );
  ``;
};

export const CustomTitle = (props: { children: JSX.Element[] }): JSX.Element => {
  const title = props.children[0].props.parentName;
  const titleSize = {
    h1: ['2xl', '4xl'],
    h2: ['xl', '2xl'],
    h3: ['lg', 'xl'],
    h4: ['md', 'lg'],
    h5: ['sm', 'md'],
    h6: 'sm',
  };

  return (
    <Flex>
      <LineHeading
        as={title}
        fontSize={titleSize[title]}
        mt={5}
        color={useColorModeValue('brand.2', 'brand.1')}
        {...props}
      >
        {props.children}
      </LineHeading>
    </Flex>
  );
};

export const CustomText = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <Text mt={4} color={useColorModeValue('brand.2', 'brand.0')} textAlign='justify'>
      {children}
    </Text>
  );
};

export const CustomUnorderedList = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <List mt={3}>{children}</List>;
};

export const CustomOrderedList = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <OrderedList mt={3}>{children}</OrderedList>;
};

export const CustomListItem = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <ListItem ml={4} color={useColorModeValue('brand.2', 'brand.0')}>
      <ListIcon as={ArrowRightIcon} color={useColorModeValue('brand.2', 'brand.0')} />
      <chakra.span fontStyle='italic'>{children}</chakra.span>
    </ListItem>
  );
};

export const Padding = (props: BoxProps): JSX.Element => {
  return <Box width='full' height='1px' {...props} />;
};

export const RemarkTitle = (props: BoxProps): JSX.Element => {
  return (
    <chakra.div
      mt={8}
      mx={'-20px'}
      px={'20px'}
      py={3}
      color='brand.2'
      borderTopRadius={'xl'}
      bg='brand.1'
      fontSize='sm'
      fontFamily={'mono'}
      fontWeight='bold'
      {...props}
    />
  );
};

export const CustomDiv = (props: BoxProps): JSX.Element => {
  if (props?.className?.includes('remark-code-title')) {
    return <RemarkTitle {...props} />;
  }

  return <chakra.div {...props} />;
};

export const CustomPre = (props: ChakraProps): JSX.Element => {
  return (
    <chakra.pre
      {...props}
      borderRadius='xl'
      shadow='lg'
      mt={8}
      mx={'-20px'}
      pt={5}
      pb={3}
      px={'20px'}
      bg={useColorModeValue('white', 'brand.2')}
      //color={useColorModeValue('gray.800', 'gray.50')}
    >
      <chakra.div
        overflowX='auto'
        pb={2}
        sx={{
          scrollPaddingBottom: '10px',
          scrollbarColor: useColorModeValue('dark', 'brand.2'),
          scrollbarWidth: 'thin',
        }}
        {...props}
      />
    </chakra.pre>
  );
};

const codeStyles = css`
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: var(--chakra-colors-yellow-500);
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: var(--chakra-colors-yellow-500);
  }
`;

const lightCodeStyles = css`
  ${codeStyles};
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.punctuation {
    color: var(--chakra-colors-gray-700);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--chakra-colors-pink-600);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--chakra-colors-blue-600);
  }

  .token.function,
  .token.class-name {
    color: var(--chakra-colors-brand-600);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--chakra-colors-purple-600);
  }
`;

const darkCodeStyles = css`
  ${codeStyles};
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.punctuation {
    color: var(--chakra-colors-gray-300);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: var(--chakra-colors-pink-300);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: var(--chakra-colors-blue-300);
  }

  .token.function,
  .token.class-name {
    color: var(--chakra-colors-brand-300);
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: var(--chakra-colors-purple-300);
  }
`;

export const CustomCode = (props: ChakraProps): JSX.Element => {
  return (
    <chakra.code
      {...props}
      color={useColorModeValue('brand.2', 'brand.0')}
      bg={useColorModeValue('white', 'brand.2')}
      css={useColorModeValue({ ...lightCodeStyles }, { ...darkCodeStyles })}
    />
  );
};

export const TextColorMode = (): string => {
  const value = useColorModeValue('dark', 'light');
  return value;
};
