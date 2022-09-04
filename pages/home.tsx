import * as React from 'react';
import type { NextPage } from 'next';

import Head from 'next/head';
import LayoutTemplate from '@/components/layout/LayoutTemplate';
import WealthManagementSection from '@/components/atomic/organisms/WealthManagementSection';
import NewsSection from '@/components/atomic/organisms/NewsSection';
const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Wealth Management | BTG Pactual</title>
        <meta name='Wealth Management - BTG Pactual' content='Home is BTG' />
      </Head>
      <LayoutTemplate>
        <WealthManagementSection/>
        <NewsSection/>
      </LayoutTemplate>
    </>
  );
};

export default Home;
