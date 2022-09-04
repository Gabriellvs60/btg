import { colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 220px;
  padding: ${({ theme }) => theme.spacing(3)};
  background: linear-gradient(213.86deg, ${colors.pickledBlue.light} 0%, ${colors.pickledBlue.dark} 100%);
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
`;

export const LabelsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
`;
