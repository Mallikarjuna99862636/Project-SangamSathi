import React from "react";
import "./forgotpassword.scss"
import { Box, Button } from "@mui/material";
import logo2 from "../../assets/images/sangam-sathi-logo.png";
import {Link} from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <Box className="forgotpwd-container">
      <Box className="forgotpwd-container1" >
        <Box>
        <Link to="/">
          <img className="sangam-logo" src={logo2} alt="sangam-sathi-logo" />
          </Link>
        </Box>
        <Box className="ForgotPwd-div">
          <h1 className="forgot-heading"> Forgot Password ?</h1>
          <form>
            <input
              type="email"
              autoComplete="off"
              className="forgotPwd-text"
              id="forgot-email"
              placeholder="Enter email id"
            />
            <br />
            <Button className="submit-button" color="error" type="submit" variant="contained">
              SUBMIT
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
