import {
  StyledCard,
  HeaderWrapper,
  DescriptionWrapper,
  TitleWrapper,
  StyledCardcontent,
} from "./styles";
import React, { FC } from "react";
import { CardActions, CardMedia, Typography } from "@mui/material";
import { colors } from "@/styles/colors";

type NewsCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  actionComponent?: React.ReactNode;
};

const NewsCard: FC<NewsCardProps> = ({
  title,
  description,
  imageUrl,
  actionComponent,
}: NewsCardProps) => {
  return (
    <StyledCard>
      <HeaderWrapper>
        <CardMedia
          component="img"
          height="100%"
          image={imageUrl}
          alt="green iguana"
        />
      </HeaderWrapper>
      <StyledCardcontent>
        <TitleWrapper>
          <Typography mb={2} variant="h3" color="text.secondary">
            {title}
          </Typography>
        </TitleWrapper>
        <DescriptionWrapper>
          <Typography variant="body2" color={colors.edelweissGray.dark}>
            {description}
          </Typography>
        </DescriptionWrapper>
    <CardActions>{actionComponent}</CardActions>
      </StyledCardcontent>
    </StyledCard>
  );
};

export default NewsCard;
