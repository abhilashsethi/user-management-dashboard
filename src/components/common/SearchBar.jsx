import { TextField } from "@mui/material";

function SearchBar({ value, onChange }) {
  return (
    <TextField
      fullWidth
      size="small"
      label="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;