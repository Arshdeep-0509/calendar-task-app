import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import React from "react";

const OccupiedDialog = ({ slot, onClose }) => {
  return (
    <Dialog open onClose={onClose}>
      <DialogTitle>Slot Details</DialogTitle>
      <DialogContent>
        <Typography>
          <strong>Student Name:</strong> {slot.bookedBy}
        </Typography>
        <Typography>
          <strong>Subject:</strong> {slot.subject}
        </Typography>
        <Typography>
          <strong>Time:</strong> {slot.day} at {slot.hour}:00
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OccupiedDialog;
