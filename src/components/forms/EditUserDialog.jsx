import { useEffect, useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import UserForm from "./UserForm";

function EditUserDialog({
  open,
  onClose,
  user,
  onSave,
}) {
  const [formData, setFormData] = useState(user);

  useEffect(() => {
    setFormData(user);
  }, [user]);
  console.log(formData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!formData) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>Edit User</DialogTitle>

      <DialogContent>
        <UserForm
          formData={formData}
          handleChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={() => onSave(formData)}
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditUserDialog;