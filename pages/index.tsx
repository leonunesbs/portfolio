import React from 'react';
import { Flex, Stack, Heading, Text, Link, Image, Wrap, WrapItem, Button } from '@chakra-ui/react';
import { Icon } from "@chakra-ui/react"
import { FiInstagram, FiExternalLink } from "react-icons/fi"
import { IoMdMedical } from "react-icons/io"
import { SiDjango } from "react-icons/si"
import { RiAdvertisementFill } from "react-icons/ri"
import { GiSkills } from "react-icons/gi"
import { AiOutlineAntDesign, AiOutlineInfoCircle } from "react-icons/ai"
import { HiOutlineLightBulb } from "react-icons/hi"
import { FaLinkedinIn, FaWhatsapp, FaGamepad, FaReact } from "react-icons/fa"

import Interesse from '../components/Interesse';
import DadosPessoais from '../components/DadosPessoais';
import Habilidade from '../components/Habilidade';

const Home: React.FC = () => {
  return (
    <>
      <Flex bgColor='brand.400' h='100vh' align='center' flexDir='column'>
        <Flex flexDir='column' align='center'>
            <Flex backgroundColor='rgb(18, 163, 58, 0.22)' w={['290px', '360px']} h={['290px', '360px']} borderRadius='full'  zIndex='100' justify='center' align='center'>
              <Image src='pp.jpg' alt='pp' boxSize={['260px', "330px"]} borderRadius='full' zIndex='100' borderColor='brand.500' borderWidth='25px' />
            </Flex>
            <Flex backgroundColor='brand.300' w={['300px', '400px']} h={['380px', '400px']} mt='-180px' pt='190px' pb='10px' shadow='md' zIndex='50' borderRadius='md' flexDir='column' textAlign='center' align='center' >
              <Heading color='brand.100' fontWeight='ligth'>LEONARDO NUNES</Heading>
              <Text color='brand.500'>acadêmico de medicina</Text>
              <Stack flexGrow={1} align='center' isInline spacing={8}>
                <Link href='https://instagram.com/leonunesbs' isExternal>
                  <Icon as={FiInstagram} color='brand.100' w={[6, 10]} h={[6, 10]} _hover={{color:'brand.500'}}/>
                </Link>
                <Link href='https://www.linkedin.com/in/leonardo-n-38001a100/' isExternal>
                  <Icon as={FaLinkedinIn} color='brand.100' w={[6, 10]} h={[6, 10]} _hover={{color:'brand.500'}}/>
                </Link>
                <Link href='https://wa.me/5586981312488' isExternal>
                  <Icon as={FaWhatsapp} color='brand.100' w={[6, 10]} h={[6, 10]} _hover={{color:'brand.500'}}/>
                </Link>
              </Stack>
            </Flex>
        </Flex>
      </Flex>

      
      <Flex bgColor='brand.300' h='100vh' align='center' justify='space-around' flexDir='column' p={6}>
        <Flex flexDir='column' align='center'>
          <Icon as={AiOutlineInfoCircle} color='brand.100' w={12} h={12}/>
          <Heading color='brand.100'  as='h2' mb={6}>sobre mim</Heading>
          <Text color='brand.100' textAlign='justify' fontWeight={100} mb={4}>
          <span style={{color: '#12A33A'}}>Oi, me chamo Leonardo</span>. Sou acadêmico de medicina em estágio voluntário em UTI Covid-19, diretor de marketing na <Link color='brand.500' isExternal href='https://instagram.com/aaafuria'>@aaafuria</Link> e <Link color='brand.500' isExternal href='https://instagram.com/ladip.ufpi'>@ladip.ufp</Link>, desenvolvedor web full-stack, web design, UI-UX.
          </Text>
        </Flex>
        <Flex w='100%' wrap={['wrap', 'initial']}>
          <Flex flexDir='column' flexGrow={1} mb={4} minW='50%'>
            <Heading color='brand.100' fontWeight='light' as='h4' mb={2}>dados pessoais</Heading>
            <Flex flexDir='column'>
              <DadosPessoais title='idade' dado='23 anos'/>
              <DadosPessoais title='whatsapp' dado='+55 86 9 8131 2488'/>
              <DadosPessoais title='email' dado='leonunesbs@gmail.com'/>
            </Flex>
          </Flex>
          <Flex flexDir='column' flexGrow={1} mb={4}>
            <Heading color='brand.100' fontWeight='light' as='h4' mb={2}>interesses pessoais</Heading>
            <Wrap spacing='15px'>
              <WrapItem>
                <Interesse icon={IoMdMedical} title='Medicina' _hover={{bgColor: 'brand.100', color: 'brand.500'}} />
              </WrapItem>
              <WrapItem>
                <Interesse icon={RiAdvertisementFill} title='Maketing' _hover={{bgColor: 'brand.100', color: 'brand.500'}} />
              </WrapItem>
              <WrapItem>
                <Interesse icon={HiOutlineLightBulb} title='Empreender' _hover={{bgColor: 'brand.100', color: 'brand.500'}} />
              </WrapItem>
              <WrapItem>
                <Interesse icon={FaReact} title='ReactJS' _hover={{bgColor: 'brand.100', color: 'brand.500'}} />
              </WrapItem>
              <WrapItem>
                <Interesse icon={AiOutlineAntDesign} title='Web design' _hover={{bgColor: 'brand.100', color: 'brand.500'}} />
              </WrapItem>
              <WrapItem>
                <Interesse icon={FaGamepad} title='Games' _hover={{bgColor: 'brand.100', color: 'brand.500'}} />
              </WrapItem>
              <WrapItem>
                <Interesse icon={SiDjango} title='Django' _hover={{bgColor: 'brand.100', color: 'brand.500'}} />
              </WrapItem>
            </Wrap>
          </Flex>
        </Flex>
        <Button as='a' href='http://lattes.cnpq.br/9059372127108730' target='_blank' borderRadius='md' size='lg' backgroundColor='brand.500' color='brand.100' _hover={{bgColor: 'brand.100', color: 'brand.500'}}>Acessar currículo <Icon ml='3px' as={FiExternalLink}/></Button>
      </Flex>



      <Flex bgColor='brand.400' align='center' justify='space-around' flexDir='column' py={6}>
        <Flex flexDir='column' align='center'>
          <Icon as={GiSkills} color='brand.100' w={12} h={12}/>
          <Heading color='brand.100' as='h2' mb={6}>habilidades</Heading>
        </Flex>
        <Flex w='100%' wrap={['wrap', 'initial']}>
          <Flex flexDir='column' flexGrow={1} mb={4} minW='50%' p={6}>
            <Heading color='brand.100' fontWeight='light' as='h4' mb={4}>habilidades técnicas</Heading>
            <Flex flexDir='column'>
              <Habilidade skill='javascript' value={84}/>
              <Habilidade skill='python' value={88}/>
              <Habilidade skill='illustrator' value={78}/>
              <Habilidade skill='photoshop' value={82}/>
            </Flex>
          </Flex>
          <Flex flexDir='column' flexGrow={1} mb={4} p={6}>
            <Heading color='brand.100' fontWeight='light' as='h4' mb={4}>habilidades profissionais</Heading>
            <Flex flexDir='column'>
              <Habilidade skill='comunicação' value={91}/>
              <Habilidade skill='resolução de problemas' value={96}/>
              <Habilidade skill='criatividade' value={95}/>
              <Habilidade skill='inovação' value={98}/>
              <Habilidade skill='liderança' value={95}/>
              <Habilidade skill='trabalho em equipe' value={90}/>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
  </>
  );
}

export default Home;

