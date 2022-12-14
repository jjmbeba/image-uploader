import Head from 'next/head'
import React from 'react'
import Uploading from '../components/Uploading'

function uploading() {
  return (
    <div>
      <Head>
        <title>Image uploader</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className='h-screen w-screen flex items-center justify-center'>
      <Uploading/>
    </main>
    </div>
  )
}

export default uploading