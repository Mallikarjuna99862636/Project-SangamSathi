import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Collapse,
  Stack,
} from "@mui/material";
import "./adminsidebar.scss";
import adminphoto from "../../../assets/images/admin-pic.jpg";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExploreIcon from "@mui/icons-material/Explore";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import EmailIcon from "@mui/icons-material/Email";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import NotificationsIcon from "@mui/icons-material/Notifications";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirtOpen] = useState(false);
  const [fourOpen, setFourOpen] = useState(false);
  const [fiveOpen, setFiveOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick1 = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setSecondOpen(!secondOpen);
  };

  const handleClick3 = () => {
    setThirtOpen(!thirdOpen);
  };
  const handleClick4 = () => {
    setFourOpen(!fourOpen);
  };
  const handleClick5 = () => {
    setFiveOpen(!fiveOpen);
  };

  const handlemailClick = () => {
    navigate("/forgotpassword");
  };

  return (
    <Box className="admin-dashboard-main-div">
      <Drawer
        sx={{
          width: "270px",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "270px",
            marginTop: "65px",
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Stack className="profile-details-div" spacing={2} direction="row">
          <Box className="img-div">
            <img
              className="admin-photo"
              src={adminphoto}
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
        <List
          sx={{ width: "100%", maxWidth: 300, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handlemailClick}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={handleClick1}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="User Managemnet" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Upgrade Users" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Renewals" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Temp Users" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Reset Password" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Image Verification" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick2}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Assistance Services" />
            {secondOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={secondOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Pending" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Success" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Promoter Users" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick3}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Promoter Management" />
            {thirdOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={thirdOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Promoters" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Promoters Users" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Promoters Earning" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Pay to Promoters" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick4}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ImportContactsIcon />
            </ListItemIcon>
            <ListItemText primary="Receipts" />
            {fourOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={fourOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Online Transaction" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Assistance Online Transaction" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Receipt Voucher" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick5}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
            {fiveOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={fiveOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Renewals" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Receipts" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default AdminSidebar;
