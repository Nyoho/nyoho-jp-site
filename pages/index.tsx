import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Gloss from '../components/gloss'
import MainContent from '../components/main-content'
import { getData } from '../lib/api'
import { join } from 'path'

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
  const directory = join(process.cwd(), 'components')
  const content = await getData(join(directory, `favorites.org`))

  return {
    props: { content }
  }
}
