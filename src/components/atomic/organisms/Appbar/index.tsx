import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { AppBarWrapper, StyledAppbar, StyledToolbar } from './styles';
import Image from 'next/image';

const Appbar = () => {
  return (
    <AppBarWrapper>
      <StyledAppbar >
        <StyledToolbar>
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={122}
            height={48}
          />
          <Box >
            <Button color="primary" variant='contained'>Abra sua conta</Button>
          </Box>
        </StyledToolbar>
      </StyledAppbar>
    </AppBarWrapper>
  );
};

export default Appbar;
