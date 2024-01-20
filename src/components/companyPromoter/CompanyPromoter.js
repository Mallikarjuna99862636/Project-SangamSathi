import React, { useState } from "react";
import { Box } from "@mui/material";
import "./companypromoter.scss";
import logo1 from "../../assets/images/sangam-sathi-logo.png";
import {Link}  from 'react-router-dom'

const CompanyPromoter = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openReg, setOpenReg] = useState(true);
  const [sizeUpdate, setsizeUpdate] = useState(false); 

  const handleLogin = () => {
    setOpenLogin(true);
    setOpenReg(false);
    setsizeUpdate(true);
  };
  const handleReg = () => {
    setOpenReg(true);
    setOpenLogin(false);
    setsizeUpdate(false);
  };
  return (
    <Box className={`companypromoter-container ${sizeUpdate ? 'active' : ''}`}>
      <Box className="companypromoter-first-box">
      <Link  to="/">
        <img
          className="companypromoter-sangam-logo"
          src={logo1}
          alt="sangam-sathi-logo"
        />
        </Link>
      </Box>
      <Box className="companypromoter-second-box">
        <Box className="buttons-div">
          <button
            className={`register-button ${openReg ? "active" : ""}`}
            onClick={handleReg}
          >
            Register
          </button>
          <button
            className={`login-button ${openLogin ? "active" : ""}`}
            onClick={handleLogin}
          >
            Login
          </button>
        </Box>

        {/* Register Page Html  */}
        {openReg && (
          <Box className="input-box-one">
            <Box className="input-sub-div">
              <h3>Register ! Become promoter and Earn.</h3>
              <input
                className="input-fields-list"
                type="text"
                placeholder="Name"
              />
              <input
                className="input-fields-list"
                type="email"
                placeholder="Email"
              />
              <input
                className="input-fields-list"
                type="number"
                placeholder="Mobile Number"
              />
              <input
                className="input-fields-list"
                type="text"
                placeholder="Promo Code"
              />
              <input
                className="input-fields-list"
                type="text"
                placeholder="User Name"
              />
              <input
                className="input-fields-list"
                type="password"
                placeholder="Password"
              />
            </Box>
            <Box className="submit-button">
              <button> Sumbit</button>
            </Box>
            <p className="para-line">
              Have you subscribed? <a href="/">Login</a>{" "}
            </p>
          </Box>
        )}
        {/* Login Page Html  */}
        {openLogin && (
          <Box className="login-box-one">
            <Box className="login-sub-div">
              <h3>Sign In to Your Account</h3>
              <input
                className="login-fields-list"
                type="text"
                placeholder="User Name"
              />
              <input
                className="login-fields-list"
                type="password"
                placeholder="Password"
              />
            </Box>
            <Box className="login-submit-button">
              <button> Login </button>
            </Box>
            <p className="para-line">
              Are you new Promoter? Create a New Account.{" "}
              <a href="/">Click here</a>{" "}
            </p>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CompanyPromoter;
