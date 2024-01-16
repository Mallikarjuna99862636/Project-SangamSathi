import React from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import Body from "../BodyPart/Body";
import "./Header-part.scss";
import { useNavigate } from "react-router-dom";
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
          <img src={logo3} alt="sangam-sathi-logo" />

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
