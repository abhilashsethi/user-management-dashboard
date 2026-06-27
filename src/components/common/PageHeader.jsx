import PeopleIcon from "@mui/icons-material/People";
import { Stack, Typography } from "@mui/material";

function PageHeader() {
  return (
    <Stack
      direction="row"
      spacing={2}
    // alignItems="center"
    >
      <PeopleIcon
        color="primary"
        fontSize="large"
      />

      <Typography variant="h4">
        User Management Dashboard
      </Typography>
    </Stack>
  );
}

export default PageHeader;