import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: 5,
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;