import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Stack, Typography } from "@mui/material";

function PageHeader() {
  return (
    <Stack
      direction="row"
      spacing={2}
    // alignItems="center"
    >
      <PeopleAltIcon
        color="primary"
        sx={{ fontSize: 40 }}
      />

      <Stack>
        <Typography variant="h4" fontWeight={700}>
          User Management Dashboard
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Manage, search and organize users efficiently.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default PageHeader;