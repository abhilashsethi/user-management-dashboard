import { Alert } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../common/Loader";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";

function UsersTable({ users, loading, error, onEdit }) {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "firstName",
      headerName: "First Name",
      flex: 1,
    },
    {
      field: "lastName",
      headerName: "Last Name",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <IconButton
          color="primary"
          onClick={() => onEdit(params.row)}
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <DataGrid
      rows={users}
      columns={columns}
      autoHeight
      pageSizeOptions={[10, 25, 50, 100]}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 10,
          },
        },
      }}
      disableRowSelectionOnClick
    />
  );
}

export default UsersTable;