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
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import profilephoto from "../../../assets/images/profile-pic.jpg";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import GroupIcon from "@mui/icons-material/Group";
import CalculateIcon from "@mui/icons-material/Calculate";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
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
            <Link className="links " to="/user/dashboard">
              <ListItemButton
                className="list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/user/dashboard" ? "red" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <ExploreIcon />
                </ListItemIcon>

                {/* <ListItemText  primary="Dashboard" /> */}
                <h4 className="sidebar-lists">Dashboard </h4>
              </ListItemButton>
            </Link>
            <Link className="links active" to="/user/profile">
              <ListItemButton
                className="list-items-buttons "
                style={{
                  backgroundColor:
                    location.pathname === "/user/profile" ? "red" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <PersonIcon />
                </ListItemIcon>

                {/* <ListItemText  primary="Profile" />  */}
                <h4 className="sidebar-lists">Profile </h4>
              </ListItemButton>
            </Link>
            <Link className="links" to="/user/my-matches">
              <ListItemButton
                className="list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/user/my-matches"
                      ? "red"
                      : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <FormatListBulletedIcon />
                </ListItemIcon>

                {/* <ListItemText primary="My Matches"  />  */}
                <h4 className="sidebar-lists">My Matches </h4>
              </ListItemButton>
            </Link>
            <Link className="links" to="/user/my-interests">
              <ListItemButton
                className="list-items-buttons "
                style={{
                  backgroundColor:
                    location.pathname === "/user/my-interests"
                      ? "red"
                      : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <GroupIcon />
                </ListItemIcon>

                {/* <ListItemText primary="My Interests" /> */}
                <h4 className="sidebar-lists">My Interests </h4>
              </ListItemButton>
            </Link>
            <Link className="links" to="/user/assistance-services">
              <ListItemButton
                className="list-items-buttons  "
                style={{
                  backgroundColor:
                    location.pathname === "/user/assistance-services"
                      ? "red"
                      : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CalculateIcon />
                </ListItemIcon>

                {/* <ListItemText primary="Assistance Services" /> */}
                <h4 className="sidebar-lists">Assistance Services </h4>
              </ListItemButton>
            </Link>
            <Link className="links" to="/user/view-all">
              <ListItemButton
                className="list-items-buttons "
                style={{
                  backgroundColor:
                    location.pathname === "/user/view-all" ? "red" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <CalculateIcon />
                </ListItemIcon>

                {/* <ListItemText primary="View All" /> */}
                <h4 className="sidebar-lists">View All </h4>
              </ListItemButton>
            </Link>
            <Link className="links" to="/user/search">
              <ListItemButton
                className="list-items-buttons "
                style={{
                  backgroundColor:
                    location.pathname === "/user/search" ? "red" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  <GroupIcon />
                </ListItemIcon>

                {/* <ListItemText primary="Search" /> */}
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

export default Sidebar;
