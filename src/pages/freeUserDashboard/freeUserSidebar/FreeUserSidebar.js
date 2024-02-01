import React from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItemIcon,
  ListItemButton,
  Stack,
} from "@mui/material";
import "./freeusersidebar.scss";
import { Link, useLocation } from "react-router-dom";
import profilephoto from "../../../assets/images/profile-pic.jpg";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import CalculateIcon from "@mui/icons-material/Calculate";
import LogoutIcon from "@mui/icons-material/Logout";

const FreeUserSidebar = () => {
  const location = useLocation();

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
            overflow : 'hidden'
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
            <Link className="links " to="/freeuser/fdashboard">
              <ListItemButton
                className="list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/freeuser/fdashboard" ? "#ffe9e9" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <ExploreIcon />
                </ListItemIcon>

                {/* <ListItemText  primary="Dashboard" /> */}
                <h4 className="sidebar-lists">Dashboard </h4>
              </ListItemButton>
            </Link>
            <Link className="links active" to="/freeuser/fprofile">
              <ListItemButton
                className="list-items-buttons "
                style={{
                  backgroundColor:
                    location.pathname === "/freeuser/fprofile" ? "#ffe9e9" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <PersonIcon />
                </ListItemIcon>
                <h4 className="sidebar-lists">Profile </h4>
              </ListItemButton>
            </Link>
           
           
            <Link className="links" to="/freeuser/fviewall">
              <ListItemButton
                className="list-items-buttons "
                style={{
                  backgroundColor:
                    location.pathname === "/freeuser/fviewall" ? "#ffe9e9" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CalculateIcon />
                </ListItemIcon>
                <h4 className="sidebar-lists">View All </h4>
              </ListItemButton>
            </Link>
            <Link className="links" to="/freeuser/fsearch">
              <ListItemButton
                className="list-items-buttons "
                style={{
                  backgroundColor:
                    location.pathname === "/freeuser/fsearch" ? "#ffe9e9" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <GroupIcon />
                </ListItemIcon>
                <h4 className="sidebar-lists">Search </h4>
              </ListItemButton>
            </Link>
            <Link className="links" to="/confirmlogout">
              <ListItemButton className="list-items-buttons">
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <LogoutIcon />
                </ListItemIcon>

                <h4 className="sidebar-lists">Logout </h4>
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default FreeUserSidebar;
