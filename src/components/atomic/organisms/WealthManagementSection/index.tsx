import * as React from 'react';

import SectionTemplate from '@/components/layout/SectionTemplate';
import InfoCard from '../../molecules/InfoCard';
import { Grid, Typography } from '@mui/material';
import { colors } from '@/styles/colors';

const WealthManagementSection = () => {
  return (
    <SectionTemplate
      wrapperProps={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      titleComponent={
        <Typography
          color={colors.edelweissGray.dark}
          variant="subtitle1"
          mb={2}
          mt={2}
        >
          Wealth Management
        </Typography>
      }
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <InfoCard
            title="R$ 458 bi"
            description="WuM - 1T22"
            imageUrl="/info-1.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoCard
            title="314 Profissionais"
            description="Focados em Wealth ao redor do mundo"
            imageUrl="/info-2.png"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <InfoCard
            title="Prêmios"
            description="Melhor Private Banking da América Latina"
            imageUrl="/info-3.png"
          />
        </Grid>
      </Grid>
    </SectionTemplate>
  );
};

export default WealthManagementSection;
