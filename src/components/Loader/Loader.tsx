import { chakra, useColorModeValue } from '@chakra-ui/system';

const Loader = (): JSX.Element => {
  return (
    <chakra.section className='loading-wrapper' bg={useColorModeValue(`white`, `brand.2`)}>
      <chakra.div className='loading-card'>
        <chakra.div className='loading-loader'>
          <chakra.span />
          <chakra.span />
          <chakra.span />
          <chakra.span />
        </chakra.div>
      </chakra.div>
    </chakra.section>
  );
};

export default Loader;
