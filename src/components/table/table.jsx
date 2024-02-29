import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 300,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'imageUrl',
    headerName: 'Image',
    width: 130,
    renderCell: (params) => (
      <ClickableImageCell
        imageUrl={params.row.imageUrl}
        id={params.row.id}
      />
    ),
  },
];

const ClickableImageCell = ({ imageUrl, id }) => {
  const navigate = useNavigate();

  const handleRowClick = () => {
    navigate(`/${id}`);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }} onClick={handleRowClick}>
      <img
        src={imageUrl}
        alt="Character"
        style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }}
      />
    </div>
  );
};

const DataTable = ({ characters }) => {
  return (
    <div style={{ height: 'auto', width: 'max-content', margin: '0 auto' }}>
      <DataGrid
        rows={characters}
        columns={columns}
        pageSize={10}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};

export default DataTable;
