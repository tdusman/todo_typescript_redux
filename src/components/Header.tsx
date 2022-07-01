import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

function Header() {
  return (
    <>
      <AppBar position="static" sx={{ mb: 3 }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Todo List
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
