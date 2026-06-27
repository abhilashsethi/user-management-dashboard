import { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import UserForm from "./UserForm";


const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
};

function AddUserDialog({
  open,
  onClose,
  onSave,
}) {
  const [formData, setFormData] =
    useState(initialState);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.value,
    });
  };

  const handleSave = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.department
    ) {
      alert("All fields are required");
      return;
    }
    onSave(formData);

    setFormData(initialState);
  };

  const handleClose = () => {
    setFormData(initialState);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle>
        Add User
      </DialogTitle>

      <DialogContent>
        <UserForm
          formData={formData}
          handleChange={handleChange}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddUserDialog;