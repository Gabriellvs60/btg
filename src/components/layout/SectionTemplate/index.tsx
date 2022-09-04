import { Box, BoxProps } from '@mui/material';
import React, { FC, PropsWithChildren } from 'react';
import { SectionWrapper } from './styles';

type SectionTemplateProps = PropsWithChildren<{
  disabled?: boolean;
  titleComponent?: React.ReactNode;
  wrapperProps?: BoxProps;
}>;

const SectionTemplate: FC<SectionTemplateProps> = ({children, titleComponent, wrapperProps}: SectionTemplateProps) => {
  return (
    <SectionWrapper {...wrapperProps}>
      <Box width="100%">
        {titleComponent}
      </Box>
      {children}
    </SectionWrapper>
  );
};

export default SectionTemplate;
