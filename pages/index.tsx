import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Gloss from '../components/gloss'
import MainContent from '../components/main-content'
import { getData } from '../lib/api'

const Home = ({ content }) =>
    <div>
        <Head>
          <title>Nyoho.jp</title>
        </Head>
        <Gloss/>
      <Header />
      <MainContent content={content}/>
    </div>

export default Home

export const getStaticProps = async () => {
  const content = await getData()

  return {
    props: { content }
  }
}
