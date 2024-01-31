import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Menu,
  Box,
  Avatar,
  MenuItem,
  Stack,
  Button,
  styled,
  Divider,
  DialogContent,
  DialogActions,
  Dialog,
  Badge,
} from "@mui/material";
import sangamlogo from "../../../assets/images/sangam-sathi-logo.png";
import adminimg from "../../../assets/images/admin-pic.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import userdps from "../../../assets/images/profile-pic.jpg";
import StarIcon from "@mui/icons-material/Star";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./adminheader.scss";

const App = styled(AppBar)`
  height: 65px;
  opticity: 0.3;
  background-color: white;
  border-bottom: 1px solid rgb(235, 235, 235);
`;

const AdminHeader = () => {
  const navigate = useNavigate();
  const usermail = "rama@gmail.com";
  const password = "123456";
  const [open, setOpen] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOpenProfileDetailsDialog = () => {
    setOpenDialog(true);
    setOpen(null);
  };

  const handleCloseProfileDetailsDialog = () => {
    setOpenDialog(false);
  };

  const handleOpenProfileDialog = () => {
    setOpenProfile(true);
    setOpen(null);
  };

  const handleClosProfileDialog = () => {
    setOpenProfile(false);
  };

  const handleLogout = () => {
    navigate("/confirmlogout");
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <App position="fixed" elevation="none">
        <Toolbar className="main-div">
          <img
            className="sanga-icon"
            src={sangamlogo}
            alt="sangam-sathi-logo"
          />
          <Stack direction="row">
            <Badge
              badgeContent={4}
              color="primary"
              overlap="circular"
              sx={{ position: "relative", left: "-40px", top: "10px" }}
            >
              <NotificationsIcon
                className="notify-icon"
                sx={{ margin: "6px 0px 0px 0px" }}
              />
            </Badge>
            <Avatar>
              {" "}
              <img
                className="profile-img"
                src={adminimg}
                alt="profile-pic"
              />{" "}
            </Avatar>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              color="inherit"
            >
              email <ArrowDropDownIcon />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={open}
              keepMounted
              open={Boolean(open)}
              onClose={handleClose}
            >
              <MenuItem
                className="menu-items"
                onClick={handleOpenProfileDetailsDialog}
              >
                <SettingsIcon fontSize="small" sx={{ padding: "0px 8px" }} />{" "}
                Setting
              </MenuItem>
              <MenuItem onClick={handleOpenProfileDialog}>
                <PersonIcon fontSize="small" sx={{ padding: "0px 8px" }} />{" "}
                Profile
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <LogoutIcon fontSize="small" sx={{ padding: "0px 8px" }} />{" "}
                logout
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </App>
      {/* This Dialog is for  User Name and Password Changes  */}
      <Dialog
        maxWidth="md"
        open={openDialog}
        onClose={handleCloseProfileDetailsDialog}
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
              <h3 className="addess-edit-popup-heading">Change Password</h3>
              <DialogActions>
                <CancelIcon
                  className="addess-edit-cancel-icon"
                  onClick={handleCloseProfileDetailsDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="addess-edit-div">
            <Box className="addess-edit-popup-div3">
              <input
                type="text"
                id="usermail"
                className="addess-pincode"
                value={usermail}
                disabled
              />
              <span className="input-icon">
                <PersonIcon />
              </span>
              <input
                type="password"
                id="password"
                className="addess-pincode"
                value={password}
                disabled
                required
                readOnly="readonly"
              />
              <span className="input-icon-1">
                <StarIcon />
              </span>
              <input
                type="text"
                id="pincode"
                className="addess-pincode"
                value={newPassword}
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <span className="input-icon-2">
                <StarIcon />
              </span>
              <input
                type="text"
                id="pincode"
                className="addess-pincode"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="input-icon-3">
                <StarIcon />
              </span>
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseProfileDetailsDialog}
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
      {/* This Dialog is for  User Name and Password Changes  */}
      <Dialog
        maxWidth="md"
        open={openProfile}
        onClose={handleClosProfileDialog}
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
                <CancelIcon
                  className="addess-edit-cancel-icon"
                  onClick={handleClosProfileDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="addess-edit-div">
            <Box className="addess-edit-popup-div3" sx={{ display: "flex" }}>
              <Box className="profile-img-div">
                <figure>
                  <img className="header-user-dp" src={userdps} alt="user-dp" />
                </figure>
              </Box>
              <input type="file" className="select-user-dp" />
            </Box>

            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleClosProfileDialog}
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

export default AdminHeader;
