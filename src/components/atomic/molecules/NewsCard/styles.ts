import styled from "@emotion/styled";
import { Card, CardContent, CardMedia } from "@mui/material";

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) and (max-width: 900px) {
    flex-direction: row;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  @media (min-width: 600px) and (max-width: 900px) {
    width: 50%;
  }
`;

export const StyledCardcontent = styled(CardContent)`
  @media (min-width: 600px) and (max-width: 900px) {
    width: 50%;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  min-height: 80px;
`;

export const StyledCardMedia = styled(CardMedia)`
  border-radius: 5px;
`;

export const DescriptionWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  min-height: 132px;
  max-height: 132px;
  overflow-y: auto;
`;
