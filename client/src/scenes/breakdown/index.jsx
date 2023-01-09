import React from 'react';
import { Box } from '@mui/material';
import BreakdownChart from 'components/BreakdownChart';
import SceneContainer from 'components/SceneContainer';

const Breakdown = () => {
  return (
    <SceneContainer title="BREAKDOWN" subTitle="Breakdown Of Sales By Category">
      <Box mt="20px" height="80vh">
        <BreakdownChart />
      </Box>
    </SceneContainer>
  );
};

export default Breakdown;
