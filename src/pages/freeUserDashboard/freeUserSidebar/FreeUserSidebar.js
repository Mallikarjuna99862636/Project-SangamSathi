import React, { useState } from "react";
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItemIcon,
  ListItemButton,
  Stack,
  DialogContent,
  DialogActions,
  Dialog,
  styled,
  ListItem
} from "@mui/material";
import "./freeusersidebar.scss";
import { Link, useLocation } from "react-router-dom";
import profilephoto from "../../../assets/images/profile-pic.jpg";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import CalculateIcon from "@mui/icons-material/Calculate";
import LogoutIcon from "@mui/icons-material/Logout";
import CancelIcon from "@mui/icons-material/Cancel";
import { CheckBox }   from "@mui/icons-material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
const ListItemsName = styled(ListItem)`
  font-size: 0.9rem;
  line-height: 26px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItemsSilver = styled(ListItem)`
  font-size: 0.8rem;
  line-height: 10px;
  padding-bottom: 5px;
  color: black;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FreeUserSidebar = () => {
  const location = useLocation();

  const [openUpdate,setOpenUpdate] = useState(false)

  const handleOpenUpdate=()=>{
    setOpenUpdate(true)
  }
  const handleCloseUpdate=()=>{
    setOpenUpdate(false)
  }

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
            <button onClick={handleOpenUpdate} className="update-button">Update</button>
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
            <Link className="links" to="/freeuser/fdashboard">
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
                <FormatListBulletedIcon />
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
                  <CalculateIcon />
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

       {/* This Dialog is for  Profile Update  Changes  */}
      
       <Dialog
        maxWidth="md"
        open={openUpdate}
        onClose={handleCloseUpdate}
        PaperProps={{
          style: {
            width: "60%",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            overflow: "none",
          },
        }}
      >
        <Box className="freeuser-profile-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="freeuser-profile-edit-popup-div1">
              <h3 className="freeuser-profile-edit-popup-heading">
              Upgrade Your Account <span>(For any queries 9148824442)</span> 
              </h3>
              <DialogActions>
                <CancelIcon
                  className="freeuser-profile-edit-cancel-icon"
                  onClick={handleCloseUpdate}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <Stack className="freeuser-reg-stack-1" spacing={2} >
        <Box className="freeuser-container1">
          <Box className="freeuser-pricing-box1">
            <h4 className="freeuser-membership-heading-1"> MEMBERSHIP PLAN </h4>
            <h3 className="freeuser-membership-heading-2"> PRICE </h3>
            <Box>
              <List className="freeuser-listname">
                <ListItemsName >
                  View Profile Details
                </ListItemsName>
                <ListItemsName>Contact Details on request</ListItemsName>
                <ListItemsName>Photo Privacy Settings</ListItemsName>
                <ListItemsName>Express Interest for 25 profiles</ListItemsName>
                <ListItemsName>Share Your Profile Details</ListItemsName>
                <ListItemsName>Mobile Application</ListItemsName>
                <ListItemsName>Validity</ListItemsName>
              </List>
            </Box>
          </Box>
        </Box>
        <Box className="freeuser-container2">
          <Box className="freeuser-pricing-box2">
            <h4 className="freeuser-premium-heading-1">PREMIUM MEMBERSHIP</h4>
            <p className="freeuser-premium-heading-2">Rs. 2399.00</p>
            <h4 className="freeuser-premium-heading-3">Save 60%</h4>
            <h3 className="freeuser-premium-heading-4"> Rs. 899/-</h3>
            <Box>
              <List>
                <ListItemsSilver>
                  <CheckBox />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckBox />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckBox />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckBox />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckBox />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckBox />
                </ListItemsSilver>
                <ListItemsSilver>
                <CheckBox />
                </ListItemsSilver>
              </List>
            </Box>
            <Box>
              <h3 className="freeuser-premium-heading-5"> 1 Year</h3>
              <button
                className="freeuser-continue-button"
              >
                CONTINUE To PaY
              </button>
            </Box>
          </Box>
        </Box>
        </Stack>
        </Box>
      </Dialog>
    </Box>
  );
};

export default FreeUserSidebar;
