import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import HomeButton from "../atoms/HomeButton";

function Navbar() {
  return (
    <div id="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{ backgroundColor: "black" }}>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Days Until
            </Typography>
            <HomeButton />
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
export default Navbar;
