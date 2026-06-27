import { Container, Paper, Stack, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import UsersTable from "../components/table/UsersTable";
import PageHeader from "../components/common/PageHeader";

function Dashboard() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack spacing={3}>
          <PageHeader />

          <Stack direction="row" justifyContent="flex-end">
            <Button
              variant="contained"
              startIcon={<AddIcon />}
            >
              Add User
            </Button>
          </Stack>

          <UsersTable />
        </Stack>
      </Paper>
    </Container>
  );
}

export default Dashboard;