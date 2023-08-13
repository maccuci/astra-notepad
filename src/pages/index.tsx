import { NextPage } from "next";
import Head from "next/head";
import Content from "~/components/content";
import Header from "~/components/header";

import { Ubuntu } from "next/font/google"

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
})

const Home: NextPage = () => {
  return (
    <div className={`${ubuntu.className}`}>
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
