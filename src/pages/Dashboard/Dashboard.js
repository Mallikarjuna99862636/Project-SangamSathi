import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Stack,
  Menu,
  MenuItem,
  Drawer,
  List,
  Divider,
  ListItemIcon  ,
  ListItemButton,
  ListItemText,
  Collapse ,

} from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


const Text = styled(Typography)`
  text-align: start;
  text-size: 2rem;
`;




const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick1 = () => {
    setOpen(!open);
  };

  const handlemailClick = () => {
    navigate("/forgotpassword");
  };

   
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" elevation="none">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <FavoriteBorderIcon  />
          </IconButton>
          <Text variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Sangam-Sathi
          </Text>
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
              <MenuItem >email</MenuItem>
              <MenuItem >details</MenuItem>
              <MenuItem >logout</MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: "200px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "160px",
            marginTop : "64px",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List
      sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handlemailClick}>
        <ListItemIcon sx={{ minWidth: "40px"}} >
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton onClick={handleClick1}>
        <ListItemIcon sx={{ minWidth: "40px"}}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        { open ? <ExpandLess /> : <ExpandMore />} 
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ minWidth: "30px"}}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ minWidth: "30px"}}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ minWidth: "30px"}}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
      </Drawer>
    </Box>
  );
};

export default Dashboard;
