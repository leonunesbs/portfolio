import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ScrollProps } from '../pages'

interface FloatMenuProps extends ScrollProps {
  active?: string
}

const FloatMenu: React.FC<FloatMenuProps> = ({ scrollTo, active }) => {
  const menuItens = ['início', 'sobre', 'habilidades']

  return (
    <Flex
      position="fixed"
      bottom="40px"
      left={6}
      zIndex={150}
      flexDir="column"
      color="brand.200"
      borderRadius="md"
      shadow="md"
      p={2}
      backgroundColor="brand.400"
      opacity={0.03}
      _hover={{ opacity: 0.98 }}
    >
      {menuItens.map(item => (
        <Flex
          key={item}
          cursor="pointer"
          onClick={() => scrollTo(item)}
          fontSize={active === item && 'lg'}
          fontWeight={active === item && 'bold'}
          color={active === item && 'brand.500'}
          _hover={{ color: 'brand.500' }}
        >
          {item}
        </Flex>
      ))}
    </Flex>
  )
}

export default FloatMenu
