import type { NextPage } from "next";

import Head from "next/head";
import LayoutTemplate from "@/components/layout/LayoutTemplate";
import WealthManagementSection from "@/components/atomic/organisms/WealthManagementSection";
import NewsSection from "@/components/atomic/organisms/NewsSection";
import HeroBanner from "@/components/atomic/organisms/HeroBanner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wealth Management | BTG Pactual</title>
        <meta name="Wealth Management - BTG Pactual" content="Home is BTG" />
      </Head>
      <LayoutTemplate>
        <HeroBanner
          title="Btg Pactual Wealth Management."
          description="uma das equipes mais premiadas em gestão patrimonial e acesso a
            produtos globais para atingir seus objetivos"
        />
        <WealthManagementSection />
        <NewsSection />
      </LayoutTemplate>
    </>
  );
};

export default Home;
