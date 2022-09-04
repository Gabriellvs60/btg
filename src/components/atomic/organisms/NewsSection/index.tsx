import * as React from "react";

import SectionTemplate from "@/components/layout/SectionTemplate";
import { Grid, Typography } from "@mui/material";
import { colors } from "@/styles/colors";
import NewsCard from "../../molecules/NewsCard";
import { StyledTitle } from "./styles";

const NewsSection = () => {
  return (
    <SectionTemplate
      wrapperProps={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: colors.edelweissGray.main,
      }}
      titleComponent={<StyledTitle variant="h2">Novidades</StyledTitle>}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <NewsCard
            title="Previdência também é Investimento"
            description="Confira um novo espaço dedicado a mostrar detalhes e tirar dúvidas sobre previdência privada no BTG PACTUAL"
            imageUrl="/previdencia-privada.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <NewsCard
            title="Relatório Mensal"
            description="Confira o podcast de nosso relatório mensal"
            imageUrl="/podcast-relatorio-mensal.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <NewsCard
            title="O Melhor Private Bank para você"
            description="Nós, do BTG Pactual Wealth Management, somos referência. Trabalhamos para oferecer sempre o que há de melhor em soluções de investimento e em gestão de patrimônio, com excelência em todos os detalhes. O resultado? Reconhecimento em 6 premiações de 2021!"
            imageUrl="/premio-wm-site.png"
          />
        </Grid>
      </Grid>
    </SectionTemplate>
  );
};

export default NewsSection;
