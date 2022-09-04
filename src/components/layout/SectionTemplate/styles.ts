import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const SectionWrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1200px) {
    padding: ${({ theme }) => theme.spacing(3)};
  }
  @media (min-width: 1200px ) {
    padding: ${({ theme }) => theme.spacing(3, 20, 10, 20)};
  }
  @media (min-width: 1400px ) {
    padding: ${({ theme }) => theme.spacing(3, 30, 10, 30)};
  }
`;
