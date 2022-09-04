import { FC } from "react";
import { HeroContent, HeroUnit, HeroWrapper } from "./styles";
import { Typography } from "@mui/material";

type HeroBannerProps = {
  title?: string;
  description?: string;
};

const HeroBanner: FC<HeroBannerProps> = ({ title, description }) => {
  return (
    <HeroWrapper>
      <HeroUnit>
        <HeroContent>
          <Typography
            component="h1"
            variant="h2"
            color="textPrimary"
            gutterBottom
            fontWeight={700}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="textPrimary" paragraph>
            {description}
          </Typography>
        </HeroContent>
      </HeroUnit>
    </HeroWrapper>
  );
};

export default HeroBanner;
