import styled from '@emotion/styled';
import { Box, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';

export const AppBarWrapper = styled(Box)`
  display: flex;
`;

export const StyledAppbar = styled(AppBar)`
  background-color: ${({theme}) => theme.palette.background.default};
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 31%);
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: ${({theme}) => theme.spacing(2)};

`;