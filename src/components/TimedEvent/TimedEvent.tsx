import React from 'react';
import { Box, Heading, chakra } from '@chakra-ui/react';

interface TimedEventProps {
  date: string;
  organization: string;
  place: string;
  event_name: string;
  children: any;
}

const TimedEvent = ({
  date,
  organization,
  place,
  event_name,
  children,
}: TimedEventProps): JSX.Element => {
  return (
    <Box>
      <Heading
        fontSize={{
          base: 'sm',
          sm: 'md',
          md: 'xl',
        }}
        fontWeight='extrabold'
        textTransform='uppercase'
        display='inline-block'
        textAlign='center'
        px={2}
        color='brand.1'
        borderBottomWidth={2}
        borderColor='brand.1'
      >
        {date}
      </Heading>
      <Box p={{ base: 2 }}>
        <Heading
          fontSize={{
            base: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'xl',
          }}
        >
          {event_name}
        </Heading>
        <Heading
          fontSize={{
            base: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'xl',
          }}
          fontWeight='light'
        >
          {organization} <chakra.span fontStyle='italic'>({place})</chakra.span>
        </Heading>
        <Box
          fontSize={{
            base: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'lg',
            xl: 'xl',
          }}
          pl={8}
          py={4}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default TimedEvent;
