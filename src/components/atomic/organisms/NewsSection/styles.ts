import { colors } from '@/styles/colors';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const StyledTitle = styled(Typography)`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
  color: ${colors.edelweissGray.dark};
  border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
`;