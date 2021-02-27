// eslint-disable-next-line no-use-before-define
import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import theme from '../styles/theme'

import fontFace from '../styles/fontFace'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Global styles={fontFace} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
