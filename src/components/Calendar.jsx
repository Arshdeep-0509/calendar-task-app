import { Grid, Typography, Box } from "@mui/material";
import Slot from "./Slot";
import BookingDialog from "./BookingDialog";
import OccupiedDialog from "./OccupiedDialog";
import React,{ useState } from "react";

const Calendar = ({ role, slots, setSlots }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [showOccupied, setShowOccupied] = useState(false);

  const handleBooking = (slotId, name, subject) => {
    const updatedSlots = slots.map((slot) =>
      slot.id === slotId
        ? { ...slot, available: false, bookedBy: name, subject }
        : slot
    );
    setSlots(updatedSlots);
    setSelectedSlot(null);
  };

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const hours = Array.from({ length: 9 }, (_, i) => i + 9);

  return (
    <Box sx={{ overflowX: "auto" }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item sx={{ minWidth: 100 }}>
          <Typography variant="subtitle2">Time</Typography>
        </Grid>
        {days.map((day) => (
          <Grid item key={day} sx={{ minWidth: 120 }}>
            <Typography variant="subtitle2" align="center">
              {day}
            </Typography>
          </Grid>
        ))}
      </Grid>

      {hours.map((hour) => (
        <Grid container spacing={1} alignItems="center" key={hour}>
          <Grid item sx={{ minWidth: 100 }}>
            <Typography>{hour}:00</Typography>
          </Grid>
          {days.map((day) => {
            const slot = slots.find((s) => s.day === day && s.hour === hour);
            return (
              <Grid item key={slot.id} sx={{ minWidth: 120 }}>
                <Slot
                  slot={slot}
                  role={role}
                  onSelect={() => {
                    if (role === "student" && slot.available) {
                      setSelectedSlot(slot);
                    } else if (role === "tutor" && !slot.available) {
                      setSelectedSlot(slot);
                      setShowOccupied(true);
                    }
                  }}
                />
              </Grid>
            );
          })}
        </Grid>
      ))}

      {selectedSlot && role === "student" && (
        <BookingDialog
          slot={selectedSlot}
          onConfirm={handleBooking}
          onClose={() => setSelectedSlot(null)}
        />
      )}

      {selectedSlot && role === "tutor" && showOccupied && (
        <OccupiedDialog
          slot={selectedSlot}
          onClose={() => {
            setSelectedSlot(null);
            setShowOccupied(false);
          }}
        />
      )}
    </Box>
  );
};

export default Calendar;
