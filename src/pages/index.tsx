// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Início from './_inicio'
import Sobre from './_sobre'
import Habilidades from './_habilidades'
import Música from './_musica'
import { useRouter } from 'next/dist/client/router'
import FloatMenu from '../components/FloatMenu'
import { useScrollYPosition } from 'react-use-scroll-position'

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
  const músicaRef = useRef<HTMLDivElement>(null)

  const scrollY = useScrollYPosition()

  const [currentSection, setCurrentSection] = useState('início')
  const [currentOffsetTop, setCurrentOffsetTop] = useState(0)

  const router = useRouter()

  const scrollTo = (section: string) => {
    setCurrentSection(section)
    const sections = {
      início: inícioRef,
      sobre: sobreRef,
      habilidades: habilidadesRef,
      música: músicaRef
    }

    window.scroll({
      top: sections[section].current.offsetTop,
      behavior: 'smooth'
    })

    setCurrentOffsetTop(sections[section].current.offsetTop)
  }

  useEffect(() => {
    if (scrollY >= inícioRef.current.offsetTop - 225) {
      setCurrentSection('início')
    }
    if (scrollY >= sobreRef.current.offsetTop - 225) {
      setCurrentSection('sobre')
    }
    if (scrollY >= habilidadesRef.current.offsetTop - 225) {
      setCurrentSection('habilidades')
    }
    if (scrollY >= músicaRef.current.offsetTop - 225) {
      setCurrentSection('música')
    }
  }, [scrollY])
  return (
    <>
      <Head>
        <title>Leonardo Nunes | Meu portfólio</title>
        <meta name="description" content="Seja bem vindo à minha página!" />
      </Head>
      <section id="início">
        <Início ref={inícioRef} scrollTo={scrollTo} user={user} />
      </section>
      <section id="sobre">
        <Sobre ref={sobreRef} scrollTo={scrollTo} />
      </section>
      <section id="habilidades">
        <Habilidades ref={habilidadesRef} scrollTo={scrollTo} />
      </section>
      <section id="música">
        <Música ref={músicaRef} scrollTo={scrollTo} />
      </section>
      <FloatMenu scrollTo={scrollTo} active={currentSection} />
    </>
  )
}

export default Home
