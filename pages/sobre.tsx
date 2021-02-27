import React from 'react'
import {
  Flex,
  Text,
  Icon,
  Heading,
  Link,
  Stack,
  Button
} from '@chakra-ui/react'
import { AiOutlineInfoCircle, AiOutlineAntDesign } from 'react-icons/ai'
import { FaGamepad } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { IoMdMedical } from 'react-icons/io'
import { RiAdvertisementFill } from 'react-icons/ri'
import DadosPessoais from '../components/DadosPessoais'
import Experiência from '../components/Experiencia'
import FúriaIcon from '../components/FúriaIcon'
import Interesse from '../components/Interesse'
import LadipIcon from '../components/LadipIcon'

// import { Container } from './styles';

const Sobre: React.FC = () => {
  return (
    <Flex
      bgColor="brand.300"
      overflow="hidden"
      minH="100vh"
      align="center"
      justify="space-around"
      flexDir="column"
    >
      <Flex flexDir="column" align="center" mt={6} mb={4}>
        <Icon as={AiOutlineInfoCircle} color="brand.100" w={12} h={12} />
        <Heading color="brand.100" as="h2" mb={6}>
          sobre mim
        </Heading>
        <Text color="brand.100" textAlign="justify" fontWeight="light" px={6}>
          <span style={{ color: '#12A33A' }}>Oi, me chamo Leonardo</span>. Sou
          acadêmico de medicina em estágio voluntário em UTI Covid-19, diretor
          de marketing na{' '}
          <Link
            color="brand.500"
            isExternal
            href="https://instagram.com/aaafuria"
          >
            @aaafuria
          </Link>{' '}
          e{' '}
          <Link
            color="brand.500"
            isExternal
            href="https://instagram.com/ladip.ufpi"
          >
            @ladip.ufpi
          </Link>
          , desenvolvedor web full-stack, web design, UI-UX.
        </Text>
      </Flex>
      <Flex wrap={['wrap', 'initial']} mb={4} w="100%">
        <Flex flexDir="column" mb={4} minW="50%" px={6}>
          <Heading color="brand.100" fontWeight="light" as="h2" mb={2}>
            dados pessoais
          </Heading>
          <Flex flexDir="column">
            <DadosPessoais title="idade" dado="23 anos" />
            <DadosPessoais title="whatsapp" dado="+55 86 9 8131 2488" />
            <DadosPessoais title="email" dado="leonunesbs@gmail.com" isLink />
          </Flex>
        </Flex>
        <Flex flexDir="column" w="100%">
          <Flex flexDir="column" mb={4}>
            <Heading color="brand.100" fontWeight="light" as="h2" mb={2} px={6}>
              interesses pessoais
            </Heading>
            <Stack
              overflowX="auto"
              pl={6}
              py={2}
              spacing="15px"
              isInline
              borderRadius="md"
            >
              <Interesse
                icon={IoMdMedical}
                title="Medicina"
                _hover={{ bgColor: 'brand.100', color: 'brand.500' }}
              />
              <Interesse
                icon={RiAdvertisementFill}
                title="Maketing"
                _hover={{ bgColor: 'brand.100', color: 'brand.500' }}
              />
              <Interesse
                icon={HiOutlineLightBulb}
                title="Empreender"
                _hover={{ bgColor: 'brand.100', color: 'brand.500' }}
              />
              <Interesse
                icon={AiOutlineAntDesign}
                title="Web design"
                _hover={{ bgColor: 'brand.100', color: 'brand.500' }}
              />
              <Interesse
                icon={FaGamepad}
                title="Games"
                _hover={{ bgColor: 'brand.100', color: 'brand.500' }}
              />
              <Flex w={6}>&nbsp;</Flex>
            </Stack>
          </Flex>
          <Flex flexDir="column" mb={4}>
            <Heading color="brand.100" fontWeight="light" as="h2" mb={2} px={6}>
              experiências
            </Heading>
            <Stack
              overflow="auto"
              pl={6}
              py={2}
              spacing="15px"
              isInline
              borderRadius="md"
            >
              <Experiência
                color="brand.100"
                _hover={{ bgColor: 'brand.100', color: 'brand.500' }}
              >
                <LadipIcon w={12} h={12} />
              </Experiência>
              <Experiência
                color="brand.100"
                _hover={{ bgColor: 'brand.100', color: 'brand.500' }}
              >
                <FúriaIcon w={12} h={12} />
              </Experiência>
              <Flex w={6}>&nbsp;</Flex>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
      <Button
        as="a"
        href="http://lattes.cnpq.br/9059372127108730"
        mb={6}
        target="_blank"
        borderRadius="md"
        size="lg"
        backgroundColor="brand.500"
        color="brand.100"
        _hover={{ bgColor: 'brand.100', color: 'brand.500' }}
      >
        Acessar currículo <Icon ml="3px" as={FiExternalLink} />
      </Button>
    </Flex>
  )
}

export default Sobre
