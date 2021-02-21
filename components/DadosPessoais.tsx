import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

interface DadosPessoais {
  title: string;
  dado: string
}

const DadosPessoais: React.FC<DadosPessoais> = ({dado, title}) => {
  return (
    <Flex>
      <Text color='brand.500' w='100px'>
        {title}
      </Text>
      <Text color='brand.100' fontWeight='light'>
        {dado}
      </Text>
    </Flex>
  );
}

export default DadosPessoais;
