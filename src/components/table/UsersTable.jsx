import { DataGrid } from "@mui/x-data-grid";
import Loader from "../common/Loader";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Alert,
  Tooltip,
  IconButton,
} from "@mui/material";

function UsersTable({ users, loading, error, onEdit, onDelete }) {
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
      width: 140,
      sortable: false,
      renderCell: (params) => (
        <>
          <Tooltip title="Edit User">
            <IconButton
              color="primary"
              onClick={() => onEdit(params.row)}
            >
              <EditIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete User">
            <IconButton
              color="error"
              onClick={() => onDelete(params.row)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </>
      ),
    }
  ];

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (!loading && users.length === 0) {
    return (
      <Alert severity="info">
        No users found.
      </Alert>
    );
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
      sx={{
        border: 0,

        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: "#1976d2",
          color: "#fff",
          fontWeight: "bold",
        },

        "& .MuiDataGrid-cell:focus": {
          outline: "none",
        },

        "& .MuiDataGrid-row:hover": {
          backgroundColor: "#f5f5f5",
        },
      }}
    />
  );
}

export default UsersTable;