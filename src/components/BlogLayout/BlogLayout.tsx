import React from 'react';
import { Heading, chakra, Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { frontMatterType } from '@/utils/mdx';
import BlogBadge from '../BlogBadge';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface BlogLayoutProps {
  children: React.ReactNode;
  frontMatter: frontMatterType;
}

const BlogLayout = ({ children, frontMatter }: BlogLayoutProps): JSX.Element => {
  const router = useRouter();
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.summary}
        canonical={`https://carlosuziel.pm${router.asPath}`}
        twitter={{
          cardType: 'summary_large_image',
          site: '@perez_malla',
        }}
        openGraph={{
          title: frontMatter.title,
          site_name: 'Carlos Uziel',
          description: frontMatter.summary,
          url: `https://carlosuziel.pm${router.asPath}`,
          type: 'article',
          article: {
            publishedTime: new Date(frontMatter.publishedAt).toISOString(),
          },
          images: [
            {
              url: `https://carlosuziel.pm${frontMatter.image}`,
            },
          ],
        }}
      />
      <chakra.article
        id={'blogArticle'}
        display='flex'
        flexDirection='column'
        justifyContent='flex-start'
        alignItems='center'
        my={{ base: 6, md: 24 }}
        rounded='2xl'
        shadow='xl'
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW='4xl'
        mx='auto'
        backdropFilter='saturate(180%) blur(5px)'
        overflow='hidden'
        border='2px solid'
        borderRadius='2xl'
        borderColor='brand.1'
        fontSize={{
          base: 'xs',
          sm: 'sm',
          md: 'md',
          lg: 'lg',
        }}
      >
        <Flex
          width='full'
          alignItems={{ base: 'flex-start', sm: 'flex-end' }}
          flexDirection='row'
          justifyContent='space-between'
          maxW='full'
          fontWeight='light'
          fontSize={{
            base: 'md',
            sm: 'lg',
            md: 'xl',
          }}
          color='brand.2'
          bg='brand.1'
          py={2}
          px={{ base: 2, md: 4 }}
          mb={4}
        >
          <Text>{frontMatter.publishedAt}</Text>
          <Text>
            {frontMatter.readingTime?.text}
            {` • `}
            {frontMatter.wordCount.toLocaleString() + ' words'}
          </Text>
        </Flex>

        {frontMatter.tags && (
          <Flex
            width='full'
            px={3}
            mb={4}
            justifyContent='flex-start'
            flexWrap='wrap'
            sx={{ rowGap: '10px', columnGap: '10px' }}
          >
            {frontMatter.tags.map((tag, i) => (
              <BlogBadge tag={tag} key={i.toString()} />
            ))}
          </Flex>
        )}

        <Box p={{ base: 6, md: 8 }}>
          <Heading
            fontSize={{ base: '3xl', md: '6xl' }}
            textAlign={{ base: 'center', md: 'left' }}
            px={2}
            color={useColorModeValue('brand.2', 'brand.1')}
          >
            {frontMatter.title}
          </Heading>

          <Box mb={16} px={2} maxWidth='4xl' width='full' className={'blog-content'}>
            {children}
          </Box>
        </Box>
      </chakra.article>
    </>
  );
};

export default BlogLayout;
