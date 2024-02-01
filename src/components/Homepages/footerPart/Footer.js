import React from "react";
import "./footerpart.scss";
import { Box, Stack } from "@mui/material";
import {
  Facebook,
  Twitter,
  Google,
  Instagram,
  YouTube,
  Email,
  AddIcCall,
} from "@mui/icons-material";
import logo4 from "../../../assets/images/SangamSathi-white.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Box className="footer-main-container">
        <h1 className="footer-heading-1" variant="p" component="div">
          Would you like to connect with us
        </h1>
        <Stack spacing={1} direction="row">
          <Facebook className="icon-button" />
          <Twitter className="icon-button" />
          <Google className="icon-button" />
          <Instagram className="icon-button" />
          <YouTube className="icon-button" />
        </Stack>
      </Box>
      <Stack className="footer-part" direction="row">
        <Box className="contaner1">
          <img src={logo4} alt="sangam-sathi-logo" />
          <br />
          <p className=".footer-heading-section1-1">
            A Superior Matrimony Service. Register and Find your Special Someone
            Matches Within Your Community.
          </p>
        </Box>
        <Box className="contaner2">
          <h3 className="contact-heading-1">CONTACT US</h3>
          <p className="contact-heading-2">
            <Email
              fontSize="small"
              sx={{ color: "red", position: "relative", top: "7px" }}
            />{" "}
            contactussangamsathi@gmail.com
          </p>
          <h3 className="contact-heading-3">FOR ANY QUERIES</h3>
          <p className="contact-heading-4">
            <AddIcCall
              fontSize="small"
              sx={{ color: "red", position: "relative", top: "5px" }}
            />{" "}
            9148824442
          </p>
        </Box>
        <Box className="contaner3">
          <h3 className="about-heading-1">ABOUT COMPANY</h3>
          <Link to="/about" className="footer-nav-links">
            <p className="about-heading-2">About us</p>
          </Link>
          <Link to="/promoter" className="footer-nav-links">
            <p className="about-heading-3">Promoter</p>
          </Link>
          <Link to="/contact" className="footer-nav-links">
            <p className="about-heading-4">Contact us</p>
          </Link>
          <Link className="footer-nav-links">
            <p className="about-heading-5">Privacy Policy</p>
          </Link>
          <Link className="footer-nav-links">
            <p className="about-heading-6">Terms & Conditions</p>
          </Link>
          <Link className="footer-nav-links">
            <p className="about-heading-7">Cancellation Policy</p>
          </Link>
        </Box>
        <Box className="contaner4">
          <h3 className="subscrib-heading">SUBSCRIBE TO NEWSLETTER</h3>
          <form>
            <input
              type="mail"
              className="sub-input-field"
              placeholder="Enter your email address"
            />
            <button
              className="subscrib-button"
              type="submit"
              variant="contained"
            >
              SUBSCRIBE
            </button>
          </form>
        </Box>
      </Stack>
      <Box className="bottom-div">
        <p className="bottom-heading">
          {" "}
          © 2019 Kiran Computers Pvt Ltd. All Rights Reserved.
        </p>
      </Box>
    </>
  );
};

export default Footer;
