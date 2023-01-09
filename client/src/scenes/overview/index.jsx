import React, { useState } from 'react';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import SceneContainer from 'components/SceneContainer';
import OverviewChart from 'components/OverviewChart';

const Overview = () => {
  const [view, setView] = useState('units');

  return (
    <SceneContainer
      title="SALES OVERVIEW"
      subTitle="Overview Of Revenue And Profit"
    >
      <Box height="80vh">
        <FormControl sx={{ mt: '1rem' }}>
          <Select
            variant="standard"
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </SceneContainer>
  );
};

export default Overview;
