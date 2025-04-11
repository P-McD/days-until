import React from "react";
import { IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <IconButton
      sx={{ color: "white" }}
      onClick={handleHomeClick}
      aria-label="Home"
    >
      <HomeIcon />
    </IconButton>
  );
}

export default HomeButton;
