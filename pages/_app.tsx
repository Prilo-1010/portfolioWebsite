import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Router } from "react-router-dom";
import React from "react";
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
       <Head>
          <meta name="description" content="  Im a Full-Stack Developer situated in South Africa. I have forever
                been somebody who has both an innovative and a consistent side.
                At the point when I found website composition , I understood it
                would be the ideal fit. I could utilize my inventive side to
                plan and my consistent side to code. As a little something
                extra, being both originator and designer permits me to ensure
                no detail is lost in interpretation. Efficient individual, issue
                solver, autonomous worker with high scrupulousness and love to
                chipping away at aggressive activities with positive
                individuals." />
        </Head>
        <Head>
      <link rel="shortcut icon" href="/john.svg" />
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}


