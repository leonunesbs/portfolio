import React, { forwardRef } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'
import { ScrollProps } from '.'

// import { Container } from './styles';

const Música: React.ForwardRefRenderFunction<HTMLDivElement, ScrollProps> = (
  props,
  ref
) => {
  return (
    <Flex
      ref={ref}
      bgColor="brand.300"
      overflow="hidden"
      minH="100vh"
      align="center"
      justify="space-around"
      flexDir="column"
    >
      Breve
    </Flex>
  )
}

export default forwardRef(Música)
