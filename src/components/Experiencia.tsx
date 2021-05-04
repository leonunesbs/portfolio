import { Box, Flex, FlexProps, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Experiência: React.FC<FlexProps> = ({ children, ...rest }) => {
  return (
    <Flex
      cursor="pointer"
      w="130px"
      h="75px"
      flexShrink={0}
      bgColor="brand.400"
      borderRadius="md"
      shadow="md"
      flexDir="column"
      align="center"
      justify="center"
      color="brand.100"
      {...rest}
    >
      {children}
    </Flex>
  )
}

export default Experiência
