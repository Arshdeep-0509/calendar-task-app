import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@mui/material";
import React , { useState } from "react";

const BookingDialog = ({ slot, onConfirm, onClose }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");

  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>
        Book {slot.day} at {slot.hour}:00
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Your Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Subject"
          fullWidth
          margin="normal"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          variant="contained"
          onClick={() => {
            if (name && subject) {
              onConfirm(slot.id, name, subject);
            } else {
              alert("Please enter all fields");
            }
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingDialog;
