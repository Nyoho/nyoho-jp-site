import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Gloss from '../components/gloss'
import MainContent from '../components/main-content'

const Home = () =>
    <div>
        <Head>
          <title>Nyoho.jp</title>
        </Head>
        <Gloss/>
      <Header />
      <MainContent/>
    </div>

export default Home
