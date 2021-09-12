import {
  Box,
  Flex,
  chakra,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link as ChakraLink,
  Heading,
} from '@chakra-ui/react';

import Link from 'next/link';
import React from 'react';
import { NextSeo } from 'next-seo';
import TimedEvent from '@/components/TimedEvent';

export default function Home(): React.ReactElement {
  return (
    <>
      <NextSeo title='About' />

      <Box
        width={{ base: '95%', md: '90%', lg: '80%', xl: '90%W' }}
        maxW='7xl'
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
        <Heading
          fontSize={{ base: `3xl`, sm: `4xl`, md: `5xl`, lg: `6xl` }}
          textAlign='center'
          color={useColorModeValue(`brand.2`, `brand.1`)}
          fontWeight='semibold'
        >
          Get to know me better...
        </Heading>
        <Flex
          direction='column'
          justifyContent='left'
          alignItems='flex-start'
          textAlign='justify'
          bg='transparent'
          p={{ base: 2, md: 4, lg: 8 }}
          rounded='2xl'
          mx={{ base: 2, lg: 4 }}
          my={{ base: 4, lg: 8 }}
        >
          <chakra.p>
            My name is <chakra.span textStyle='span'>Carlos Uziel Pérez Malla</chakra.span>, born
            and raised in sunny <chakra.span textStyle='span'>Gran Canaria</chakra.span>. I am a{' '}
            <chakra.span textStyle='span'>Research Assistant</chakra.span> living in Vienna,
            Austria. I currently work in the field of{' '}
            <chakra.span textStyle='span'>computational biology</chakra.span> as part of my PhD
            programme. More concretely, I am exploring novel{' '}
            <chakra.span textStyle='span'>machine learning</chakra.span> approaches to advance our
            knowledge in <chakra.span textStyle='span'>prostate cancer</chakra.span>.
          </chakra.p>

          <chakra.span pt={{ base: 4, md: 8 }}>
            Check out what <chakra.span textStyle='span'>technologies</chakra.span> I use in the{' '}
            <Link href='/projects' passHref>
              <ChakraLink>projects</ChakraLink>
            </Link>{' '}
            section.
          </chakra.span>
          <chakra.span pt={{ base: 4, md: 8 }}>
            You can find me on{' '}
            <ChakraLink href='https://github.com/CarlosUziel/'>GitHub</ChakraLink>,{' '}
            <ChakraLink href='https://linkedin.com/in/carlos-uziel-p%C3%A9rez-malla-323aa5124'>
              LinkedIn
            </ChakraLink>{' '}
            and <ChakraLink href='https://twitter.com/perez_malla'>Twitter</ChakraLink>.
          </chakra.span>

          <Tabs isFitted variant='enclosed' mt={{ base: 4, md: 8, lg: 16 }} width='full'>
            <TabList
              display='flex'
              flexWrap='wrap'
              bg='brand.0'
              rounded='2xl'
              color='brand.2'
              overflow='hidden'
              fontSize={{
                base: 'xs',
                sm: 'md',
                md: 'lg',
                lg: 'xl',
                xl: '2xl',
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
                Experience
              </Tab>
              <Tab
                letterSpacing='wider'
                fontWeight='light'
                textTransform='uppercase'
                borderRadius={0}
                _selected={{ color: 'brand.2', bg: 'brand.1' }}
                _focus={{ outline: 'none' }}
              >
                Education
              </Tab>
              <Tab
                letterSpacing='wider'
                fontWeight='light'
                textTransform='uppercase'
                borderRadius={0}
                _selected={{ color: 'brand.2', bg: 'brand.1' }}
                _focus={{ outline: 'none' }}
              >
                Awards
              </Tab>
              <Tab
                letterSpacing='wider'
                fontWeight='light'
                textTransform='uppercase'
                borderRadius={0}
                _selected={{ color: 'brand.2', bg: 'brand.1' }}
                _focus={{ outline: 'none' }}
              >
                Publications
              </Tab>
            </TabList>
            <TabPanels py={4}>
              <TabPanel>
                <TimedEvent
                  date='Jun 2020 - Present'
                  organization='Ludwig Boltzmann Institute Applied Diagnostics'
                  place='Vienna, Austria'
                  event_name='Research Assistant (PhD student)'
                >
                  <p>
                    Biomarkers research for prostate cancer using machine learning methods applied
                    to NGS datasets.
                  </p>
                </TimedEvent>
                <TimedEvent
                  date='Jan 2019 - Mar 2020'
                  organization='The MoonVision GmbH'
                  place='Vienna, Austria'
                  event_name='Computer Vision Engineer'
                >
                  <ul className='list-disc pl-8'>
                    <li>
                      Modelling and validation of learning systems for the recognition of objects
                      and their characteristics
                    </li>
                    <li>Improvements in the data processing architecture</li>
                    <li>Technical project management</li>
                  </ul>
                </TimedEvent>
                <TimedEvent
                  date='Oct 2016 - Dec 2016'
                  organization='ITQ GmbH'
                  place='Las Palmas De Gran Canaria, Spain'
                  event_name='Business and IT Intern'
                >
                  <p>Focus on Computer Vision, Deep Learning and Robotics</p>
                </TimedEvent>
              </TabPanel>
              <TabPanel>
                <TimedEvent
                  date='Jun 2020 - Present'
                  organization='Medical University of Vienna'
                  place='Vienna, Austria'
                  event_name='PhD in Medical Informatics, Biostatistics and Complex Systems'
                >
                  <p>
                    Biomarkers research for prostate cancer using machine learning methods applied
                    to NGS datasets.
                  </p>
                </TimedEvent>

                <TimedEvent
                  date='Sep 2017 - Aug 2018'
                  organization='University of Edinburgh'
                  place='Edinburgh, Scotland'
                  event_name='M.Sc. in Artificial Intelligence'
                >
                  <p>Focus on Computer Vision, Deep Learning and Robotics.</p>
                </TimedEvent>

                <TimedEvent
                  date='Sep 2012 - June 2017'
                  organization='Universidad de Las Palmas de Gran Canaria'
                  place='Las Palmas de Gran Canaria, Spain'
                  event_name='B.Sc. in Computer Science'
                >
                  <p>
                    Distinction award in final thesis and thirteen other courses.
                    <br />
                  </p>
                </TimedEvent>

                <TimedEvent
                  date='Sep 2012 - June 2017'
                  organization='Universidad de Las Palmas de Gran Canaria'
                  place='Las Palmas de Gran Canaria, Spain'
                  event_name='B.Sc. in Business Management'
                >
                  <p>
                    Distinction award in final thesis and two other courses.
                    <br />
                  </p>
                </TimedEvent>
              </TabPanel>
              <TabPanel>
                <TimedEvent
                  date='Sep 2018'
                  organization='University of Edinburgh'
                  place='Edinburgh, Scotland'
                  event_name='Distinction in M.Sc. Dissertation'
                >
                  <p></p>
                </TimedEvent>

                <TimedEvent
                  date='May 2018'
                  organization='Universidad de Las Palmas de Gran Canaria'
                  place='Las Palmas de Gran Canaria, Spain'
                  event_name='Extraordinary Award for the Double Degree Programme: Degree in Computer Science and Degree in Business Management (2017 cohort)'
                >
                  <p>
                    Awarded by the Universidad de Las Palmas de Gran Canaria for achieving the
                    highest final grade of the programme while graduating in the minimum amount of
                    years.
                  </p>
                </TimedEvent>

                <TimedEvent
                  date='Sep 2017'
                  organization='University of Edinburgh'
                  place='Edinburgh, Scotland'
                  event_name='Informatics UK/EU Masters Scholarships'
                >
                  <p>Obtained one of the ten available scholarships.</p>
                </TimedEvent>
              </TabPanel>
              <TabPanel>
                <TimedEvent
                  date='29th of May 2019'
                  organization='Evaluation of Enhanced Learning Techniques for Segmenting Ischaemic Stroke Lesions in Brain Magnetic Resonance Perfusion Images Using a Convolutional Neural Network Scheme'
                  place='Frontiers in Neuroinformatics'
                  event_name='Carlos Uziel Pérez Malla, Maria del C. Valdés Hernández, Muhammad Febrian Rachmadi and Taku Komura'
                >
                  <p className='text-justify'>
                    Magnetic resonance (MR) perfusion imaging non-invasively measures cerebral
                    perfusion, which describes the blood`&apos;`s passage through the brain`&apos;`s
                    vascular network. Therefore it is widely used to assess cerebral ischaemia.
                    Convolutional Neural Networks (CNN) constitute the state-of-the-art method in
                    automatic pattern recognition and hence, in segmentation tasks. But none of the
                    CNN architectures developed to date have achieved high accuracy when segmenting
                    ischaemic stroke lesions, being the main reasons their heterogeneity in
                    location, shape, size, image intensity and texture, especially in this imaging
                    modality. We use a freely available CNN framework, developed for MR imaging
                    lesion segmentation, as core algorithm to evaluate the impact of enhanced
                    machine learning techniques, namely data augmentation, transfer learning and
                    post-processing, in the segmentation of stroke lesions using the ISLES 2017
                    dataset, which contains expert annotated diffusion-weighted perfusion and
                    diffusion brain MRI of 43 stroke patients. Of all the techniques evaluated, data
                    augmentation with binary closing achieved the best results, improving the mean
                    Dice score in 17% over the baseline model. Consistent with previous works,
                    better performance was obtained in the presence of large lesions.
                  </p>
                </TimedEvent>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </>
  );
}
