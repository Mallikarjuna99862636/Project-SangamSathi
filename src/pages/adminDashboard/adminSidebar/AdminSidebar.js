import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItemIcon,
  ListItemButton,
  Collapse,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
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
  Cancel
} from "@mui/icons-material";

const AdminSidebar = () => {
  const [open, setOpen] = useState(false);
  const [secondOpen, setSecondOpen] = useState(false);
  const [thirdOpen, setThirtOpen] = useState(false);
  const [fourOpen, setFourOpen] = useState(false);
  const [fiveOpen, setFiveOpen] = useState(false);
  const location = useLocation();
  const [openProfile, setOpenProfile] = useState(false);

  const handleOpenProfileDialog = () => {
    setOpenProfile(true);
    setOpen(null);
  };

  const handleCloseProfileDialog = () => {
    setOpenProfile(false);
  };


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
            overflow: "hidden",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Stack className="admin-profile-details-div" direction="row">
          <Box className="admin-img-div">
            <img
              className="admin-photo"
              src={adminphoto}
              alt="user-profile-pic"
            />
          </Box>
          <Box>
            <h3 className="admin-user-name"> Rama S</h3>
           <button className="profile-edit-button" onClick={handleOpenProfileDialog} > <p className="admin-user-age"> Edit Profile</p></button>
          </Box>
          <Box></Box>
        </Stack>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 300, paddingTop: "0px" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <Link className="admin-nav-link" to="/admin/dashboard">
            <ListItemButton
              className="admin-list-items-buttons"
              style={{
                backgroundColor:
                  location.pathname === "/admin/dashboard" ? "#ffe9e9" : "initial",
              }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}>
                <Explore />
              </ListItemIcon>
              {/* <ListItemText primary="Dashboard" /> */}
              <h4 className="admin-sidebar-lists">Dashboard</h4>
            </ListItemButton>
          </Link>
          <ListItemButton className="buttons-list-link" onClick={handleClick1} >
          <div className="button-text-div-1">
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListAlt />
            </ListItemIcon>
            {/* <ListItemText primary="User Managemnet" /> */}
            <h4 className="admin-sidebar-lists">User Managemnet</h4>
            </div>
             <div className="button-text-div-2">
           {open ? <ExpandLess /> : <ExpandMore />}
           </div>
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link className="admin-nav-link" to="/admin/users">
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="admin-list-items-buttons"
                  style={{
                    backgroundColor:
                      location.pathname === "/admin/users" ? "#ffe9e9" : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Users" /> */}
                  <h4 className="admin-sidebar-lists">Users </h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/upgradeusers">
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="admin-list-items-buttons"
                  style={{
                    backgroundColor:
                      location.pathname === "/admin/upgradeusers"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Upgrade Users" /> */}
                  <h4 className="admin-sidebar-lists">Upgrade Users</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/renewals">
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="admin-list-items-buttons"
                  style={{
                    backgroundColor:
                      location.pathname === "/admin/renewals"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Renewals" /> */}
                  <h4 className="admin-sidebar-lists">Renewals</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/tempusers">
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="admin-list-items-buttons"
                  style={{
                    backgroundColor:
                      location.pathname === "/admin/tempusers"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Temp Users" /> */}
                  <h4 className="admin-sidebar-lists">Temp Users</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/resetpassword">
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="admin-list-items-buttons"
                  style={{
                    backgroundColor:
                      location.pathname === "/admin/resetpassword"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Reset Password" /> */}
                  <h4 className="admin-sidebar-lists">Reset Password</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/imageverification">
                <ListItemButton
                  sx={{ pl: 4 }}
                  className="admin-list-items-buttons"
                  style={{
                    backgroundColor:
                      location.pathname === "/admin/imageverification"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Image Verification" /> */}
                  <h4 className="admin-sidebar-lists">Image Verification</h4>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton className="buttons-list-link" onClick={handleClick2} >
          <div className="button-text-div-1">
            
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ListAlt />
            </ListItemIcon>
            {/* <ListItemText primary="Assistance Services" /> */}
            <h4 className="admin-sidebar-lists">Assistance Services</h4>
          </div>
            <div className="button-text-div-2">

            {secondOpen ? <ExpandLess /> : <ExpandMore />}
            </div>
          </ListItemButton>
          <Collapse in={secondOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link className="admin-nav-link" to="/admin/assistancepending">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/assistancepending"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Pending" /> */}
                  <h4 className="admin-sidebar-lists">Pending</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/assistancesuccess">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/assistancesuccess"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Success" /> */}
                  <h4 className="admin-sidebar-lists">Success</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/promoterusers">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/promoterusers"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Promoter Users" /> */}
                  <h4 className="admin-sidebar-lists">Promoter Users</h4>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton className="buttons-list-link" onClick={handleClick3} >
          <div className="button-text-div-1">

            <ListItemIcon sx={{ minWidth: "40px" }}>
              <Group />
            </ListItemIcon>
            {/* <ListItemText primary="Promoter Management" /> */}
            <h4 className="admin-sidebar-lists">Promoter Management</h4>
          </div>
            <div className="button-text-div-2">

            {thirdOpen ? <ExpandLess /> : <ExpandMore />}
            </div>
          </ListItemButton>
          <Collapse in={thirdOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link className="admin-nav-link" to="/admin/promoters">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/promoters"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Promoters" /> */}
                  <h4 className="admin-sidebar-lists">Promoters</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/promocodeusers">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/promocodeusers"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Promoters Users" /> */}
                  <h4 className="admin-sidebar-lists">Promoters Users</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/promotersearning">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/promotersearning"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Promoters Earning" /> */}
                  <h4 className="admin-sidebar-lists">Promoter Earning</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/paytopromoters">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/paytopromoters"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Pay to Promoters" /> */}
                  <h4 className="admin-sidebar-lists">Pay to Promoters</h4>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton className="buttons-list-link" onClick={handleClick4}>
          <div className="button-text-div-1">
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <ImportContacts />
            </ListItemIcon>
            {/* <ListItemText primary="Receipts" /> */}
            <h4 className="admin-sidebar-lists">Receipts</h4>
            </div>
            <div className="button-text-div-2">

            {fourOpen ? <ExpandLess /> : <ExpandMore />}
            </div>
          </ListItemButton>
          <Collapse in={fourOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link className="admin-nav-link" to="/admin/onlinetransaction">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/onlinetransaction"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Online Transaction" /> */}
                  <h4 className="admin-sidebar-lists">Online Transaction</h4>
                </ListItemButton>
              </Link>
              <Link
                className="admin-nav-link"
                to="/admin/assistanceonlinetransaction"
              >
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/assistanceonlinetransaction"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Assistance Online Transaction" /> */}
                  <h4 className="admin-sidebar-lists">Assistance Online Transaction</h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/receiptvoucher">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/receiptvoucher"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Receipt Voucher" /> */}
                  <h4 className="admin-sidebar-lists">Receipt Voucher</h4>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <ListItemButton className="buttons-list-link" onClick={handleClick5} >
          <div className="button-text-div-1">

         
            <ListItemIcon sx={{ minWidth: "40px" }}>
              <Email />
            </ListItemIcon>
            {/* <ListItemText primary="Reports" /> */}
            <h4 className="admin-sidebar-lists">Reports </h4>
            </div>
            <div className="button-text-div-2">
            {fiveOpen ? <ExpandLess /> : <ExpandMore />}
            </div>
          </ListItemButton>
          <Collapse in={fiveOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link className="admin-nav-link" to="/admin/usersreports">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/usersreports"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Users" /> */}
                  <h4 className="admin-sidebar-lists">Users </h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/renewalsreports">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/renewalsreports"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Renewals" /> */}
                  <h4 className="admin-sidebar-lists">Renewals </h4>
                </ListItemButton>
              </Link>
              <Link className="admin-nav-link" to="/admin/receiptsreports">
                <ListItemButton sx={{ pl: 4 }}
                style={{
                    backgroundColor:
                      location.pathname === "/admin/receiptsreports"
                        ? "#ffe9e9"
                        : "initial",
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "30px" }}></ListItemIcon>
                  {/* <ListItemText primary="Receipts" /> */}
                  <h4 className="admin-sidebar-lists">Receipts </h4>
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <Link className="admin-nav-link" to="/admin/notification">
            <ListItemButton
             className="admin-list-items-buttons"
            style={{
                    backgroundColor:
                      location.pathname === "/admin/notification"
                        ? "#ffe9e9"
                        : "initial",
                  }}
            >
              <ListItemIcon sx={{ minWidth: "40px" }}
              >
                <Notifications />
              </ListItemIcon>
              {/* <ListItemText primary="Notifications" /> */}
              <h4 className="admin-sidebar-lists">Notifications </h4>
            </ListItemButton>
          </Link>
        </List>
      </Drawer>
        {/* This Dialog is for Img Profilr pic Changes  */}
        <Dialog
        maxWidth="md"
        open={openProfile}
        onClose={handleCloseProfileDialog}
        PaperProps={{
          style: {
            width: "35%",
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            overflow: "none",
          },
        }}
      >
        <Box className="addess-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="addess-edit-popup-div1">
              <h3 className="addess-edit-popup-heading">
                Change Profile Image
              </h3>
              <DialogActions>
                <Cancel
                  className="addess-edit-cancel-icon"
                  onClick={handleCloseProfileDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="addess-edit-div">
            <Box className="addess-edit-popup-div3" sx={{ display: "flex" }}>
              <Box className="profile-img-div">
                <figure>
                  <img className="header-user-dp" src={adminphoto} alt="user-dp" />
                </figure>
              </Box>
              <input type="file" className="select-user-dp" />
            </Box>

            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseProfileDialog}
              >
                {" "}
                Submit
              </button>
              <button type="submit" className="save-changes-button">
                {" "}
                Close
              </button>
            </Box>
          </form>
        </Box>
      </Dialog>
    </Box>

  );
};

export default AdminSidebar;
