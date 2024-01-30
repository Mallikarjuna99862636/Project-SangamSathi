import React, { useEffect, useState } from "react";
import { useLocation , Link } from "react-router-dom";
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
import {
  ExpandLess,
  ExpandMore,
  Explore,
  Group,
  ListAlt,
  Email,
  Notifications,
  ImportContacts,
} from "@mui/icons-material";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirtOpen] = useState(false);
  const [fourOpen, setFourOpen] = useState(false);
  const [fiveOpen, setFiveOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    if (location.pathname === "/admin/users") {
      setOpen(false); 
    }
  }, [location.pathname]);

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
            overflow : 'hidden'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Stack className="admin-profile-details-div"  direction="row">
          <Box className="admin-img-div">
            <img
              className="admin-photo"
              src={adminphoto}
              alt="user-profile-pic"
            />
          </Box>
          <Box>
            <h3 className="admin-user-name"> Rama S</h3>
            <p className="admin-user-age"> 32 Years Old</p>
          </Box>
          <Box></Box>
        </Stack>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 300, paddingTop: "0px" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
         <Link  className="admin-nav-link" to="/admin/dashboard">
          <ListItemButton
          className="admin-list-items-buttons"
            style={{
              backgroundColor:
                location.pathname === "/admin/dashboard" ? "red" : "initial",
            }}
          >
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <Explore />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          </Link>
          <ListItemButton onClick={handleClick1}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListAlt />
            </ListItemIcon>
            <ListItemText primary="User Managemnet" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
            <Link  className="admin-nav-link" to="/admin/users">
              <ListItemButton
                sx={{ pl: 4 }}
                className="admin-list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/admin/users" ? "red" : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Users" />
              </ListItemButton>
              </Link>
              <Link  className="admin-nav-link" to="/admin/upgradeusers">
              <ListItemButton
                sx={{ pl: 4 }}
                className="admin-list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/admin/upgradeusers"
                      ? "red"
                      : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Upgrade Users" />
              </ListItemButton>
              </Link>
              <Link  className="admin-nav-link" to="/admin/renewals">
              <ListItemButton
                sx={{ pl: 4 }}
                className="admin-list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/admin/renewals"
                      ? "red"
                      : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Renewals" />
              </ListItemButton>
              </Link>
              <Link  className="admin-nav-link" to="/admin/tempusers">
              <ListItemButton
                sx={{ pl: 4 }}
                className="admin-list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/admin/tempusers"
                      ? "red"
                      : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Temp Users" />
              </ListItemButton>
              </Link>
              <Link  className="admin-nav-link" to="/admin/resetpassword">
              <ListItemButton
                sx={{ pl: 4 }}
                className="admin-list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/admin/resetpassword"
                      ? "red"
                      : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Reset Password" />
              </ListItemButton>
              </Link>
              <Link  className="admin-nav-link" to="/admin/imageverification">
              <ListItemButton
                sx={{ pl: 4 }}
                className="admin-list-items-buttons"
                style={{
                  backgroundColor:
                    location.pathname === "/admin/imageverification"
                      ? "red"
                      : "initial",
                }}
              >
                <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                <ListItemText primary="Image Verification" />
              </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick2}>
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListAlt />
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
              <Group />
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
              <ImportContacts />
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
              <Email />
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
              <Notifications />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
};

export default AdminSidebar;
