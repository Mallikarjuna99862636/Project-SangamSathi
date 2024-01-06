import React from "react";
import "./Footer-part.scss"
import {
  Box,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import logo4 from "../../../assets/images/SangamSathi-white.png";


const Footer = () => {
  return (
    <>
      <Box className="footer-main-container">
        <h1 className="footer-heading-1" variant="p" component="div">
          Would you like to connect with us
        </h1>
        <Stack spacing={1} direction="row">
          <FacebookIcon className="icon-button" />
          <TwitterIcon className="icon-button" />
          <GoogleIcon className="icon-button" />
          <InstagramIcon className="icon-button" />
          <YouTubeIcon className="icon-button" />
        </Stack>
      </Box>
      <Stack className="footer-part" >
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
            <EmailIcon fontSize="small" sx={{ color: "red" }} />{" "}
            contactussangamsathi@gmail.com
          </p>
          <h3 className="contact-heading-3">FOR ANY QUERIES</h3>
          <p className="contact-heading-4">
            <AddIcCallIcon fontSize="small" sx={{ color: "red" }} /> 9148824442
          </p>
        </Box>
        <Box className="contaner3">
          <h3 className="about-heading-1">ABOUT COMPANY</h3>
          <p className="about-heading-2">About us</p>
          <p className="about-heading-3">Promoter</p>
          <p className="about-heading-4">Contact us</p>
          <p className="about-heading-5">Privacy Policy</p>
          <p className="about-heading-6">Terms & Conditions</p>
          <p className="about-heading-7">Cancellation Policy</p>
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
