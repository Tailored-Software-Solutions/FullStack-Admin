import React from 'react';
import { useTheme, Box } from '@mui/material';
import { DataGrid, GridDensityTypes } from '@mui/x-data-grid';
import { useGetUserPerformanceQuery } from 'state/api';
import { useSelector } from 'react-redux';
import SceneContainer from 'components/SceneContainer';
import CustomColumnMenu from 'components/DataGridCustomColumnMenu';

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);

  const columns = [
    { field: '_id', headerName: 'ID', flex: 1 },
    { field: 'userId', headerName: 'User ID', flex: 1 },
    { field: 'createdAt', headerName: 'Created At', flex: 1 },
    {
      field: 'products',
      headerName: '# of Products',
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: 'cost',
      headerName: 'Cost',
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return (
    <SceneContainer
      title="PERFORMANCE"
      subTitle="Track Affiliate Sales Performance"
    >
      <Box
        height="80vh"
        mt="20px"
        sx={{
          '& .MuiDataGrid-root': {
            border: 'none',
          },
          '& .MuiDataGrid-cell': {
            borderBottom: 'none',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            backgroundColor: theme.palette.primary.light,
          },
          '& .MuiDataGrid-footerContainer': {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: 'none',
          },
          '& .MuiDataGrid-toolBarContainer & .MuiButton-text': {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          density={GridDensityTypes.Compact}
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.sales) || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </SceneContainer>
  );
};

export default Performance;
