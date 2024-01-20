import React from "react";
import { Box } from "@mui/material";
import logo5 from "../../assets/images/sangam-sathi-logo.png";
import "./logoutconfirm.scss";
import { useNavigate , Link  } from "react-router-dom";

const LogoutConfirm = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Box className="confirm-logout-div-1">
      <Box className="confirm-logout-div-2">
      <Link to="/">
        <img  src={logo5} alt="sangam-sathi-logo" />
        </Link>
      </Box>
      <Box className="confirm-logout-div-3">
        <Box className="confirm-logout-div-4">
          <h1 className="heading-part-1">Logout</h1>
        </Box>
        <Box className="confirm-logout-div-5">
          <p className="heading-part-2">You have successfully logged out</p>
          <button className="backToLoginButton" onClick={handleLogout}>
            {" "}
            Click Here To Login{" "}
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default LogoutConfirm;
