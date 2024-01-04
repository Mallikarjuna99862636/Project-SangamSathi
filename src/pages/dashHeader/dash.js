import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Dashheader = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="fixed" elevation="none">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sangam-Sathi
          </Typography>
          <Stack direction="row">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              email
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem>email</MenuItem>
              <MenuItem>details</MenuItem>
              <MenuItem>logout</MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Dashheader;
