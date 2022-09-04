import styled from '@emotion/styled';
import { Card, CardMedia } from '@mui/material';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const DescriptionWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  min-height: 132px;
  max-height: 132px;
  overflow-y: auto;
`;

export const StyledCardMedia = styled(CardMedia)`
  border-radius: 5px;
`;
