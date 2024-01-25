import React from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  // ListItemText,
  ListItemIcon,
  ListItemButton,
  Stack,
} from "@mui/material";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import profilephoto from "../../../assets/images/profile-pic.jpg";
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
            <img
              className="profile-photo"
              src={profilephoto}
              alt="user-profile-pic"
            />
          </Box>
          <Box>
            <h3 className="user-name"> Rama S</h3>
            <p className="user-age"> 32 Years Old</p>
          </Box>
          <Box></Box>
        </Stack>
        <Divider />
        <Box>
          <List
            sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton className="list-items-buttons">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <ExploreIcon />
              </ListItemIcon>
              <Link className="links " to="/user/dashboard">
                {/* <ListItemText  primary="Dashboard" /> */}
                <h4 className="sidebar-lists">Dashboard </h4>
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons   ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <PersonIcon />
              </ListItemIcon>
              <Link className="links active" to="/user/profile">
                {/* <ListItemText  primary="Profile" />  */}
                <h4 className="sidebar-lists">Profile </h4>
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <FormatListBulletedIcon />
              </ListItemIcon>
              <Link className="links" to="/user/my-matches">
                {/* <ListItemText primary="My Matches"  />  */}
                <h4 className="sidebar-lists">My Matches </h4>
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <GroupIcon />
              </ListItemIcon>
              <Link className="links" to="/user/my-interests">
                {/* <ListItemText primary="My Interests" /> */}
                <h4 className="sidebar-lists">My Interests </h4>
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <CalculateIcon />
              </ListItemIcon>
              <Link className="links" to="/user/assistance-services">
                {/* <ListItemText primary="Assistance Services" /> */}
                <h4 className="sidebar-lists">Assistance Services </h4>
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <CalculateIcon />
              </ListItemIcon>
              <Link className="links" to="/user/view-all">
                {/* <ListItemText primary="View All" /> */}
                <h4 className="sidebar-lists">View All </h4>
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons  ">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <GroupIcon />
              </ListItemIcon>
              <Link className="links" to="/user/search">
                {/* <ListItemText primary="Search" /> */}
                <h4 className="sidebar-lists">Search </h4>
              </Link>
            </ListItemButton>
            <ListItemButton className="list-items-buttons">
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <LogoutIcon />
              </ListItemIcon>
              <Link className="links" to="/confirmlogout">
                <h4 className="sidebar-lists">Logout </h4>
              </Link>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
