// eslint-disable-next-line no-use-before-define
import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <meta name="application-name" content="Portfolio" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Meu portfólio" />

          <meta name="mobile-web-app-capable" content="yes" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#12a33a"
          />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#12a33a" />
          <meta
            name="msapplication-config"
            content="/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#12a33a" />
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
