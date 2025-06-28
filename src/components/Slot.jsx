import { Button } from "@mui/material";
import React from "react";

const Slot = ({ slot, role, onSelect }) => {
  if (slot.available) {
    return (
      <Button variant="outlined" color="success" fullWidth onClick={onSelect}>
        {role === "tutor" ? "Available" : "Book"}
      </Button>
    );
  } else {
    return (
      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={() => {
          if (role === "tutor") {
            onSelect(); // Show dialog in tutor view
          }
        }}
        disabled={role === "student"}
      >
        {role === "tutor" ? "Occupied" : "Booked"}
      </Button>
    );
  }
};

export default Slot;
