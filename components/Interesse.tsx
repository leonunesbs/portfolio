import { Flex, FlexProps, Icon, Text } from '@chakra-ui/react';
import React, { ElementType } from 'react';
import { FaGamepad } from 'react-icons/fa';

interface InteresseProps extends FlexProps {
  icon: ElementType<any>,
  title: string
}

const Interesse: React.FC<InteresseProps> = ({icon, title, ...rest}) => {
  return (
    <Flex w='70px' h='70px' bgColor='brand.400' borderRadius='md' shadow='md' flexDir='column' align='center' justify='center' color='brand.100' {...rest}>
      <Icon as={icon} w={7} h={7}/>
      <Text fontSize={10} fontWeight={100}>{title}</Text>
    </Flex>
  );
}

export default Interesse;
