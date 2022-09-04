import { CardWrapper, IconWrapper, LabelsWrapper } from './styles';
import { FC } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

type InfoCardProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  imageUrl,
}: InfoCardProps) => {
  return (
    <CardWrapper>
      <IconWrapper>
        <Image
          src={imageUrl}
          alt="card_image"
          width={55}
          height={53}
        />
      </IconWrapper>
      <LabelsWrapper>
        <Typography mb={2} variant='h3'>{title}</Typography>
        <Typography variant='body2'>{description}</Typography>
      </LabelsWrapper>
    </CardWrapper>
  );
};

export default InfoCard;
