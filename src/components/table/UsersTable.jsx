import { Box, Typography } from "@mui/material";

function UsersTable() {
  return (
    <Box
      sx={{
        height: 450,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px dashed #ccc",
        borderRadius: 2,
      }}
    >
      <Typography color="text.secondary">
        All users.
      </Typography>
    </Box>
  );
}

export default UsersTable;