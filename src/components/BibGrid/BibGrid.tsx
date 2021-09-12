import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import BibCard from '../BibCard';
import bibs, { categories, BibType } from '../../data/bibliography';

const BibGrid = ({ filter }: { filter: categories }): JSX.Element => {
  return (
    <SimpleGrid pt={10} columns={{ base: 1 }} spacingX={10} spacingY={5}>
      {bibs
        .filter(x => x.category.includes(filter))
        .sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        })
        .map((bib: BibType, index: number) => (
          <BibCard {...bib} key={index.toString()} />
        ))}
    </SimpleGrid>
  );
};

export default BibGrid;
