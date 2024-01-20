import React from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import { useNavigate , Link } from "react-router-dom";
import Body from "../bodyPart/Body";
import "./headerpart.scss";
import logo3 from "../../../assets/images/sangam-sathi-logo.png";

const App = styled(AppBar)`
  height: 70px;
  opticity: 0.1;
  background-color: #eee6e65e;
`;

const Header = () => {
  const navigate = useNavigate();

  const handleRegistrarButton = () => {
    navigate("/registration");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <App position="fixed" elevation="none">
        <Toolbar className="tool-bar-container">
        <Link to="/">
          <img src={logo3} alt="sangam-sathi-logo" />
        </Link>
          <button className="registerButton" onClick={handleRegistrarButton}>
            {" "}
            Register Now{" "}
          </button>
        </Toolbar>
      </App>
      <Body  />
    </Box>
  );
};

export default Header;
