// eslint-disable-next-line no-use-before-define
import React from 'react'
import {
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  Image,
  Button,
  Icon,
  Tooltip
} from '@chakra-ui/react'

import { FiInstagram, FiExternalLink } from 'react-icons/fi'
import { IoMdMedical } from 'react-icons/io'
import { RiAdvertisementFill } from 'react-icons/ri'
import { GiSkills } from 'react-icons/gi'
import {
  AiFillGithub,
  AiOutlineAntDesign,
  AiOutlineInfoCircle
} from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { FaLinkedinIn, FaWhatsapp, FaGamepad } from 'react-icons/fa'

import Interesse from '../components/Interesse'
import DadosPessoais from '../components/DadosPessoais'
import Habilidade from '../components/Habilidade'
import Head from 'next/head'
import Experiência from '../components/Experiencia'
import LadipIcon from '../components/LadipIcon'
import FúriaIcon from '../components/FúriaIcon'
import { GetStaticProps } from 'next'
import { ApiResponse, create } from 'apisauce'

interface InstagramUserProps {
  user: {
    username: string
    pk: number
    profile_pic_url: string
    status: string
  }
}

const Home: React.FC<InstagramUserProps> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Leonardo Nunes | Meu portfólio</title>
        <meta name="description" content="Seja bem vindo à minha página!" />
      </Head>
      <Flex
        bgColor="brand.400"
        minH="100vh"
        overflow="hidden"
        align="center"
        flexDir="column"
      >
        <Flex flexDir="column" align="center">
          <Flex
            backgroundColor="rgb(18, 163, 58, 0.22)"
            w={['290px', '360px']}
            h={['290px', '360px']}
            borderRadius="full"
            zIndex="100"
            justify="center"
            align="center"
          >
            <Image
              src={user.profile_pic_url}
              alt="pp"
              boxSize={['260px', '330px']}
              borderRadius="full"
              zIndex="100"
              borderColor="brand.500"
              borderWidth="25px"
            />
          </Flex>
          <Flex
            backgroundColor="brand.300"
            w={['320px', '400px']}
            h={['390px', '400px']}
            mt="-180px"
            pt="190px"
            pb="10px"
            shadow="md"
            zIndex="50"
            borderRadius="md"
            flexDir="column"
            textAlign="center"
            align="center"
          >
            <Heading color="brand.100" as="h1" fontWeight="ligth">
              LEONARDO NUNES
            </Heading>
            <Text color="brand.500" as="h4">
              acadêmico de medicina
            </Text>
            <Stack flexGrow={1} align="center" isInline spacing={8}>
              <Tooltip
                hasArrow
                label="@leonunesbs"
                aria-label="instagram"
                bg="brand.500"
              >
                <Link href="https://instagram.com/leonunesbs" isExternal>
                  <Icon
                    as={FiInstagram}
                    color="brand.100"
                    w={[8, 10]}
                    h={[8, 10]}
                    _hover={{ color: 'brand.500' }}
                  />
                </Link>
              </Tooltip>

              <Tooltip
                hasArrow
                label="LinkedIn"
                aria-label="linkedin"
                bg="brand.500"
              >
                <Link
                  href="https://www.linkedin.com/in/leonardo-n-38001a100/"
                  isExternal
                >
                  <Icon
                    as={FaLinkedinIn}
                    color="brand.100"
                    w={[8, 10]}
                    h={[8, 10]}
                    _hover={{ color: 'brand.500' }}
                  />
                </Link>
              </Tooltip>

              <Tooltip
                hasArrow
                label="Whatsapp"
                aria-label="whatsapp"
                bg="brand.500"
              >
                <Link href="https://wa.me/5586981312488" isExternal>
                  <Icon
                    as={FaWhatsapp}
                    color="brand.100"
                    w={[8, 10]}
                    h={[8, 10]}
                    _hover={{ color: 'brand.500' }}
                  />
                </Link>
              </Tooltip>

              <Tooltip
                hasArrow
                label="Github"
                aria-label="github"
                bg="brand.500"
              >
                <Link href="https://github.com/leonunesbs" isExternal>
                  <Icon
                    as={AiFillGithub}
                    color="brand.100"
                    w={[8, 10]}
                    h={[8, 10]}
                    _hover={{ color: 'brand.500' }}
                  />
                </Link>
              </Tooltip>
            </Stack>
          </Flex>
        </Flex>
      </Flex>

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
              <Heading
                color="brand.100"
                fontWeight="light"
                as="h2"
                mb={2}
                px={6}
              >
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
              <Heading
                color="brand.100"
                fontWeight="light"
                as="h2"
                mb={2}
                px={6}
              >
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
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const api = create({
    baseURL: 'https://i.instagram.com/api/v1/',
    headers: {
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 105.0.0.11.118 (iPhone11,8; iOS 12_3_1; en_US; en-US; scale=2.00; 828x1792; 165586599)'
    }
  })

  const response: ApiResponse<InstagramUserProps> = await api.get(
    'users/225476968/info/'
  )

  return {
    props: {
      user: response.data.user
    }
  }
}

export default Home
