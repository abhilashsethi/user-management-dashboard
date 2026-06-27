import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  TextField,
} from "@mui/material";

function FilterDialog({
  open,
  onClose,
  filters,
  setFilters,
}) {
  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFilters({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
    });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Filter Users
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="First Name"
            name="firstName"
            value={filters.firstName}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Last Name"
            name="lastName"
            value={filters.lastName}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            value={filters.email}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Department"
            name="department"
            value={filters.department}
            onChange={handleChange}
            fullWidth
          />
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button
          color="inherit"
          onClick={handleReset}
        >
          Reset
        </Button>

        <Button
          variant="contained"
          onClick={onClose}
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FilterDialog;