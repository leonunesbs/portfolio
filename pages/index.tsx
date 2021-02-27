// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { ApiResponse, create } from 'apisauce'
import Início from './inicio'
import Sobre from './sobre'
import Habilidades from './habilidades'

export interface InstagramUserProps {
  user: {
    username: string
    pk: number
    profile_pic_url: string
    status: string
  }
}

export interface ScrollProps {
  scrollTo?: (section: string) => void
}

const Home: React.FC<InstagramUserProps> = ({ user }) => {
  const inícioRef = useRef<HTMLDivElement>(null)
  const sobreRef = useRef<HTMLDivElement>(null)
  const habilidadesRef = useRef<HTMLDivElement>(null)

  const scrollTo = (section: string) => {
    const sections = {
      início: inícioRef,
      sobre: sobreRef,
      habilidades: habilidadesRef
    }

    window.scroll({
      top: sections[section].current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <Head>
        <title>Leonardo Nunes | Meu portfólio</title>
        <meta name="description" content="Seja bem vindo à minha página!" />
      </Head>
      <Início ref={inícioRef} scrollTo={scrollTo} user={user} />
      <Sobre ref={sobreRef} scrollTo={scrollTo} />
      <Habilidades ref={habilidadesRef} scrollTo={scrollTo} />
    </>
  )
}

export default Home
