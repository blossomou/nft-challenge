import Head from 'next/head';

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Welcom to the NFT DROP CHALLENGE</h1>
    </div>
  )
}

export default Home
