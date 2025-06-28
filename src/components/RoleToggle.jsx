import { ToggleButton, ToggleButtonGroup, Box } from "@mui/material";
import React from "react"

const RoleToggle = ({ role, setRole }) => {
  return (
    <Box sx={{ textAlign: "center", mb: 3 }}>
      <ToggleButtonGroup
        value={role}
        exclusive
        onChange={(e, newRole) => newRole && setRole(newRole)}
        color="primary"
      >
        <ToggleButton value="student">Student View</ToggleButton>
        <ToggleButton value="tutor">Tutor View</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default RoleToggle;
