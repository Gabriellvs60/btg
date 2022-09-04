
import Appbar from '@/components/atomic/organisms/Appbar';
import { Box } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

type LayoutTemplateProps = PropsWithChildren<{}>;

const LayoutTemplate: FC<LayoutTemplateProps> = ({children}: LayoutTemplateProps) => {
  return (
    <>
      <Appbar/>
      <Box
        mt={8}
        component="main"
      >
        {children}
      </Box>
  
    </>
  );
};

export default LayoutTemplate;