import { NextPage } from "next";
import Head from "next/head";
import Content from "~/components/content";
import Header from "~/components/header";

import { Sofia_Sans } from "next/font/google"

const sofia = Sofia_Sans({
  subsets: ["latin"]
})

const Home: NextPage = () => {
  return (
    <div className={`${sofia.className}`}>
      <Head>
        <title>Astra Notepad</title>
        <meta name="description" content="Notepad" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content />
    </div>
  );
}

export default Home
