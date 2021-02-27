// eslint-disable-next-line no-use-before-define
import React from 'react'
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

const Home: React.FC<InstagramUserProps> = ({ user }) => {
  return (
    <>
      <Head>
        <title>Leonardo Nunes | Meu portfólio</title>
        <meta name="description" content="Seja bem vindo à minha página!" />
      </Head>
      <Início user={user} />
      <Sobre />
      <Habilidades />
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
      user: response.data.user || {
        profile_pic_url: ''
      }
    }
  }
}

export default Home
