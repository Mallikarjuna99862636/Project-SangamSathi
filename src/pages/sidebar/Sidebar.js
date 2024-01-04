import React from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Stack,
} from "@mui/material";
import "./sidebaar.scss";
import { Link } from "react-router-dom";
import profilephoto  from '../../assets/images/profile-pic.jpg'
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupIcon from "@mui/icons-material/Group";
import CalculateIcon from "@mui/icons-material/Calculate";
import LogoutIcon from "@mui/icons-material/Logout";



const Sidebar = () => {
  return (
    <Box className="sidebar-main-container">
     
      <Drawer
        sx={{
          width: "250px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "250px",
            marginTop: "64px",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        // anchor="left"
      >
       <Stack className="profile-details-div" spacing={2} direction="row">
       <Box className="img-div">
       <img className="profile-photo" src={profilephoto} alt="user-profile-pic" />
       </Box>
       <Box>
           <h3 className="user-name"> Rama S</h3>
           <p className="user-age" > 32  Years Old</p>
       </Box>
       <Box>

       </Box>
        
      </Stack>
        <Divider />
        <Box >
          <List
            sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" , }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton className="list-items-buttons  active">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <ExploreIcon />
              </ListItemIcon>
              <Link className="links" to="/dashboard">
                <ListItemText className="text-list" primary="Dashboard" />
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <PersonIcon />
              </ListItemIcon>
              <Link className="links" to='/profile'>
              <ListItemText primary="Profile" />
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <Link className="links" to="/my-matches" >
              <ListItemText primary="My Matches"  /> 
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <GroupIcon />
              </ListItemIcon>
              <Link className="links" to="/my-interests">
              <ListItemText primary="My Interests" />
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <CalculateIcon />
              </ListItemIcon>
              <Link className="links" to="/assistance-services">
              <ListItemText primary="Assistance Services" />
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <CalculateIcon />
              </ListItemIcon>
              <Link className="links" to="/view-all">
              <ListItemText primary="View All" />
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <GroupIcon />
              </ListItemIcon>
              <Link className="links" to="/search">
              <ListItemText primary="Search" />
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <LogoutIcon />
              </ListItemIcon>
              <Link className="links" to="/logout">
              <ListItemText primary="Logout" />
              </Link>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
