import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';

const SceneContainer = ({ title, subTitle, children }) => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title={title} subTitle={subTitle} />
      {children}
    </Box>
  );
};

export default SceneContainer;
