import { getTotalCharCode } from '@/utils/utils';
import { Stack, Tag, TagLabel, useMediaQuery } from '@chakra-ui/react';
import React from 'react';

interface TagsProps {
  tags: string[];
}

const Tags = ({ tags }: TagsProps): JSX.Element => {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
  return (
    <Stack height='25px' isInline>
      {tags?.map(tag => (
        <Tag
          key={tag}
          colorScheme={`${
            ['red', 'orange', 'yellow', 'green', 'brand', 'teal', 'blue', 'cyan', 'pink', 'purple'][
              getTotalCharCode(tag) % 10
            ]
          }`}
          size={isLargerThan800 ? 'md' : 'sm'}
        >
          <TagLabel fontWeight={'600'}>{tag}</TagLabel>
        </Tag>
      ))}
    </Stack>
  );
};

export default Tags;
