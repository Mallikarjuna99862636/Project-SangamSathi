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
} from "@mui/material";
import sangamlogo from "../../assets/images/sangam-sathi-logo.png";
import profileimg from "../../assets/images/profile-pic.jpg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import "./dashhead.scss";

const App = styled(AppBar)`
  height: 65px;
  opticity: 0.3;
  background-color: white;
  border-bottom : 1px solid rgb(235, 235, 235);
`;

const Dashheader = ({render}) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const handleLogout = () => {
    navigate("/confirmlogout");
    render(false)
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
            <Avatar>
              {" "}
              <img
                className="profile-img"
                src={profileimg}
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
              <MenuItem className="menu-items">
                <SettingsIcon fontSize="small" sx={{ padding: "0px 8px" }} />{" "}
                Setting
              </MenuItem>
              <MenuItem>
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
    </Box>
  );
};

export default Dashheader;
