import { Container, Paper, Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PageHeader from "../components/common/PageHeader";
import UsersTable from "../components/table/UsersTable";
import useUsers from "../hooks/useUsers";
import SearchBar from "../components/common/SearchBar";
import { Typography } from "@mui/material";
import AddUserDialog from "../components/forms/AddUserDialog";
import { useState } from "react";
import EditUserDialog from "../components/forms/EditUserDialog";

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editOpen, setEditOpen] = useState(false);
  const {
    users,
    totalUsers,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    addUser,
    editUser
  } = useUsers();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack spacing={3}>
          <PageHeader />

          <Stack
            direction="row"
            justifyContent="flex-end"
          >
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setOpen(true)}
            >
              Add User
            </Button>
          </Stack>

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />

          <Typography variant="body2" color="text.secondary">
            Total Users: {users.length} / {totalUsers}
          </Typography>

          <AddUserDialog
            open={open}
            onClose={() => setOpen(false)}
            onSave={(user) => {
              addUser(user);
              setOpen(false);
            }}
          />

          <EditUserDialog
            open={editOpen}
            user={selectedUser}
            onClose={() => setEditOpen(false)}
            onSave={(updatedUser) => {
              editUser(updatedUser.id, updatedUser);
              setEditOpen(false);
            }}
          />

          <UsersTable
            users={users}
            loading={loading}
            error={error}
            onEdit={(user) => {
              setSelectedUser(user);
              setEditOpen(true);
            }}
          />
        </Stack>
      </Paper>
    </Container>
  );
}

export default Dashboard;