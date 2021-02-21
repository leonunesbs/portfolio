import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          <title>Leonardo Nunes | Meu portfólio</title>
          <meta name="description" content="Seja bem vindo à minha página!"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document