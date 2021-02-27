import React from 'react'
import { Flex, Icon, Heading } from '@chakra-ui/react'
import { GiSkills } from 'react-icons/gi'
import Habilidade from '../components/Habilidade'

// import { Container } from './styles';

const Habilidades: React.FC = () => {
  return (
    <Flex
      bgColor="brand.400"
      minH="100vh"
      align="center"
      justify="space-around"
      flexDir="column"
      py={6}
    >
      <Flex flexDir="column" align="center">
        <Icon as={GiSkills} color="brand.100" w={12} h={12} />
        <Heading color="brand.100" as="h2" mb={6}>
          habilidades
        </Heading>
      </Flex>
      <Flex w="100%" wrap={['wrap', 'initial']}>
        <Flex flexDir="column" flexGrow={1} mb={4} minW="50%" p={6}>
          <Heading color="brand.100" fontWeight="light" as="h4" mb={4}>
            habilidades técnicas
          </Heading>
          <Flex flexDir="column">
            <Habilidade skill="javascript" value={84} />
            <Habilidade skill="python" value={88} />
            <Habilidade skill="illustrator" value={78} />
            <Habilidade skill="photoshop" value={82} />
          </Flex>
        </Flex>
        <Flex flexDir="column" flexGrow={1} mb={4} p={6}>
          <Heading color="brand.100" fontWeight="light" as="h4" mb={4}>
            habilidades profissionais
          </Heading>
          <Flex flexDir="column">
            <Habilidade skill="comunicação" value={91} />
            <Habilidade skill="resolução de problemas" value={96} />
            <Habilidade skill="criatividade" value={95} />
            <Habilidade skill="inovação" value={98} />
            <Habilidade skill="liderança" value={95} />
            <Habilidade skill="trabalho em equipe" value={90} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Habilidades
