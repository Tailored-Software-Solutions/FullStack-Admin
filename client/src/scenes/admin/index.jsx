import React from 'react';
import { useTheme, Box } from '@mui/material';
import { DataGrid, GridDensityTypes } from '@mui/x-data-grid';
import { useGetAdminsQuery } from 'state/api';
import SceneContainer from 'components/SceneContainer';
import CustomColumnMenu from 'components/DataGridCustomColumnMenu';

const Admin = () => {
  const theme = useTheme();

  const { data, isLoading } = useGetAdminsQuery();

  const columns = [
    { field: '_id', headerName: 'ID', flex: 1 },
    { field: 'name', headerName: 'Name', flex: 0.5 },
    { field: 'email', headerName: 'Email', flex: 1 },
    {
      field: 'phoneNumber',
      headerName: 'Phone Number',
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, '($1)$2-$3');
      },
    },
    { field: 'country', headerName: 'Country', flex: 0.4 },
    { field: 'occupation', headerName: 'Occupation', flex: 1 },
    { field: 'role', headerName: 'Role', flex: 0.5 },
  ];

  return (
    <SceneContainer title="ADMINISTRATORS" subTitle="List Of Admins">
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
          rows={data || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </SceneContainer>
  );
};

export default Admin;
