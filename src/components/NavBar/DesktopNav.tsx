import React from 'react';
import {
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { transparentize } from '@chakra-ui/theme-tools';
import Link from 'next/link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import ToggleTheme from './ToggleTheme';

function DesktopNav({ links }: { links: any }): JSX.Element {
  const { colorMode } = useColorMode();

  return (
    <HStack spacing={8} display={{ base: `none`, lg: `flex` }}>
      {links.map((linkItem: any, index: number) => {
        if (linkItem.type !== `dropdown`) {
          return (
            <Link href={linkItem.link} key={index.toString()} passHref>
              <ChakraLink
                key={index.toString()}
                color={colorMode === 'light' ? `brand.2` : `brand.0`}
                position='relative'
                fontWeight='light'
                textTransform='uppercase'
                _after={{
                  transition: `all 0.25s ease-in-out`,
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `0%`,
                  height: `25%`,
                  position: `absolute`,
                  bottom: 1,
                  left: 0,
                  bg: transparentize(`brand.1`, 0.2),
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: `100%`,
                  },
                  color: `brand.1`,
                }}
              >
                {linkItem.name}
              </ChakraLink>
            </Link>
          );
        }
        if (linkItem.type === `dropdown`) {
          return (
            <Menu key={index.toString()}>
              <MenuButton
                key={index.toString()}
                color={colorMode === 'light' ? `brand.2` : `brand.0`}
                fontWeight='light'
                position='relative'
                textTransform='uppercase'
                _after={{
                  transition: `all 0.25s ease-in-out`,
                  content: `''`,
                  /* Fixes anti-aliasing issue in chrome that leaves one pixel' */
                  outline: `1px solid transparent`,
                  width: `0%`,
                  height: `25%`,
                  position: `absolute`,
                  bottom: 1,
                  left: 0,
                  bg: transparentize(`brand.1`, 0.2),
                  zIndex: -1,
                }}
                _hover={{
                  _after: {
                    width: `75%`,
                  },
                  color: `brand.1`,
                }}
              >
                {linkItem.name}
                <Icon as={ChevronDownIcon} />
              </MenuButton>
              <MenuList
                color={colorMode === 'light' ? `brand.2` : `brand.0`}
                fontWeight='light'
                textTransform='uppercase'
                bg={colorMode === 'light' ? `white` : `brand.2`}
              >
                {linkItem.links.map((item: any, i: number) => (
                  <Link href={item.link} key={`${i.toString()}MenuLink`} passHref>
                    <MenuItem as='a' sx={{ cursor: `pointer` }} key={i.toString()}>
                      {item.name}
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          );
        }
        return null;
      })}
      <HStack spacing={2}>
        <ToggleTheme />
      </HStack>
    </HStack>
  );
}

export default DesktopNav;
