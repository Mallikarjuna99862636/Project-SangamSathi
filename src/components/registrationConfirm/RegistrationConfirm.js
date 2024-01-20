import React from "react";
import { Box, Divider, TextField, Stack } from "@mui/material";
import "./registrationconfirm.scss";
import logo from "../../assets/images/sangam-sathi-logo.png";
import {Link}  from 'react-router-dom'

const RegistrationConfirm = () => {
  return (
    <Box className="confirm-page-div-1">
      <Box>
      <Link to="/">
        <img src={logo} alt="sangam-sathi-icon" />
        </Link>
      </Box>
      <Box className="confirm-page-div-2">
        <h4 className="confirm-page-heading-1">Proceed Towards Payment</h4>
        <Divider />
        <h4 className="confirm-page-heading-2">
          We don't post anything without your permission.
        </h4>
        <Box>
          <label htmlFor="name-field"> Name </label>
          <br />
          <TextField
            id="name-field"
            variant="outlined"
            size="small"
            className="confirm-textfield-1"
          />
        </Box>
        <Box className="confirm-page-div-3">
          <label htmlFor="email-field" className="email-label">
            {" "}
            Email Id{" "}
          </label>
          <br />
          <TextField
            id="email-field"
            variant="outlined"
            size="small"
            className="confirm-textfield-2"
          />
        </Box>
        <Box className="confirm-page-div-4">
          <label htmlFor="phone-field" className="phone-label">
            Mobile No.{" "}
          </label>
          <br />
          <TextField
            id="phone-field"
            variant="outlined"
            size="small"
            className="confirm-textfield-3"
          />
        </Box>
        <Box>
          <h4 className="confirm-page-heading-3" variant="h4">
            Have a Promocode?
            <span>
              <a href="/">Click Here</a>
            </span>
            ( Avail discount of &#8377;100 )
          </h4>
        </Box>
        <Stack className="confirm-stack-1" spacing={3} direction="row">
          <Box className="confirm-page-div-5">
            <h3 className="confirm-page-heading-4"> &#8377; 999 </h3>
            <h3 className="confirm-page-heading-5"> Price </h3>
          </Box>
          <Box className="confirm-page-div-6">
            <h3 className="confirm-page-heading-6"> &#8377; 24 </h3>
            <h3 className="confirm-page-heading-7"> Convenience Fee </h3>
          </Box>
          <Box className="confirm-page-div-7">
            <h3 className="confirm-page-heading-8"> &#8377; 1023 </h3>
            <h3 className="confirm-page-heading-9"> Total Payable </h3>
          </Box>
        </Stack>
        <button className="confirm-button">Confirm</button>
      </Box>
    </Box>
  );
};

export default RegistrationConfirm;
