import React, { useState } from "react";
import Calendar from "./components/Calendar";
import RoleToggle from "./components/RoleToggle";
import { Container, Typography } from "@mui/material";

const App = () => {
  const [role, setRole] = useState("student");
  const [slots, setSlots] = useState(generateInitialSlots());

  function generateInitialSlots() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    const hours = Array.from({ length: 9 }, (_, i) => i + 9);
    const generated = [];
    days.forEach((day) => {
      hours.forEach((hour) => {
        generated.push({
          id: `${day}-${hour}`,
          day,
          hour,
          available: true,
          bookedBy: "",
          subject: "",
        });
      });
    });
    return generated;
  }

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ my: 3 }}>
        Tutor-Student Booking Calendar
      </Typography>
      <RoleToggle role={role} setRole={setRole} />
      <Calendar role={role} slots={slots} setSlots={setSlots} />
    </Container>
  );
};

export default App;
