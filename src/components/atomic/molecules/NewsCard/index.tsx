import { StyledCard, HeaderWrapper, DescriptionWrapper } from './styles';
import React, { FC } from 'react';
import { CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { colors } from '@/styles/colors';

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
      <CardContent>
        <Typography mb={2} variant="h3" color="text.secondary">
          {title}
        </Typography>
        <DescriptionWrapper>
          <Typography variant="body2" color={colors.edelweissGray.dark}>
            {description}
          </Typography>
        </DescriptionWrapper>
      </CardContent>
      {actionComponent && <CardActions>{actionComponent}</CardActions>}
    </StyledCard>
  );
};

export default NewsCard;
