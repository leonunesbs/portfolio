// eslint-disable-next-line no-use-before-define
import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import theme from '../styles/theme'

import fontFace from '../styles/fontFace'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Global styles={fontFace} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
