import React from 'react';
import './globals.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>My Loft</title>
        <link rel="icon" href="/LOGOblack.svg" />
      </Head>
      <main>
        <h1 className="text-black text-4xl">Home page!</h1>
      </main>
    </>
  );
}
