import {
  Flex,
  Heading,
  Stack,
  Tooltip,
  Image,
  Link,
  Text,
  Icon,
  FlexProps
} from '@chakra-ui/react'
import React, { forwardRef } from 'react'
import { AiFillGithub, AiFillCaretDown } from 'react-icons/ai'
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { InstagramUserProps, ScrollProps } from '.'

interface InícioProps extends InstagramUserProps, ScrollProps {}

const Início: React.ForwardRefRenderFunction<HTMLDivElement, InícioProps> = (
  { user, scrollTo },
  ref
) => {
  return (
    <Flex
      ref={ref}
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
            src="pp.jpg"
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
              label="Instagram"
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

            <Tooltip hasArrow label="Github" aria-label="github" bg="brand.500">
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
      <Flex
        flexGrow={1}
        align="center"
        justify="center"
        cursor="pointer"
        flexDir="column"
        onClick={() => scrollTo('sobre')}
        color="brand.500"
        _hover={{ color: 'brand.200' }}
      >
        mais
        <Icon as={AiFillCaretDown} w={6} h={6} />
      </Flex>
    </Flex>
  )
}

export default forwardRef(Início)
