import { Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';

interface DadosPessoais {
  title: string;
  dado: string;
  isLink?: boolean
}

const DadosPessoais: React.FC<DadosPessoais> = ({dado, title, isLink}) => {
  return (
    <Flex>
      <Text color='brand.500' w='100px'>
        {title}
      </Text>
      { isLink ? 
      <Link href='mailto:leonunesbs@gmail.com' target='_blank' color='brand.100' _hover={{color: 'brand.500'}}>
        <Text fontWeight='light'>
          {dado}
        </Text>
      </Link>
    :
      <Text color='brand.100' fontWeight='light'>
        {dado}
      </Text>
      }
    </Flex>
  );
}

export default DadosPessoais;
