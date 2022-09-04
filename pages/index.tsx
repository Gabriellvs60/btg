import * as React from "react";
import type { NextPage, GetStaticProps } from "next";

import Head from "next/head";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home is redy" />
      </Head>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {},
});

export default Home;
