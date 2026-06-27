import { Container, Paper, Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PageHeader from "../components/common/PageHeader";
import UsersTable from "../components/table/UsersTable";
import useUsers from "../hooks/useUsers";
import SearchBar from "../components/common/SearchBar";
import { Typography } from "@mui/material";

function Dashboard() {
  const {
    users,
    totalUsers,
    loading,
    error,
    searchTerm,
    setSearchTerm,
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

          <UsersTable
            users={users}
            loading={loading}
            error={error}
          />
        </Stack>
      </Paper>
    </Container>
  );
}

export default Dashboard;