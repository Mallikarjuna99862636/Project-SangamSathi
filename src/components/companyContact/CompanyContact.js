import React from "react";
import { Box, Breadcrumbs, Stack } from "@mui/material";
import "./companycontact.scss";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../homePages/footerPart/Footer";
import logo4 from "../../assets/images/sangam-sathi-logo.png";
import { NavigateNext } from "@mui/icons-material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const CompanyContact = () => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/");
  };

  return (
    <Box>
      <Box className="companycontact-container">
        <h3 variant="h3" className="companycontact-heading-1">
          Welcome to SangamSathi
        </h3>
        <h3 className="companycontact-heading-2">
          Are You Looking Matches Within Your Community? Register Now
        </h3>
      </Box>
      <Box className="companycontact-container-div-1">
        <Link to="/">
          <img src={logo4} alt="sangam-sathi-logo" />
        </Link>
        <button className="companycontact-login-button" onClick={handleLogin}>
          {" "}
          Login{" "}
        </button>
      </Box>
      <Box className="companycontact-container-div-2">
        <Box className="reg-container-div-3">
          <Stack className="reg-stack-1" direction="row" spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNext fontSize="small" sx={{ color: "white" }} />
              }
              aria-label="breadcrumb"
              sx={{ marginTop: "50px" }}
            >
              <h4 className="reg-heading-3">
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#bebbc1" }}
                >
                  {" "}
                  Home{" "}
                </Link>{" "}
              </h4>
              <h4 className="reg-heading-4"> Contact Us </h4>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>
      <Box className="companycontact-main-content">
        <Stack className="companycontact-main-stack" spacing={0} >
          <Box className="companycontact-stack-content-1">
            <Box className="icon-div-1">
             <AccountCircleOutlinedIcon fontSize="large" className="contact-icon-1"/>
            </Box>
            <Box className="sub-content-div">
              <h3> Customer Support </h3>
              <p className="helpline">Call our helpline.</p>
              <p>
              <strong>
                Phone number:
              </strong>
              <br/>
              <span className="text-default">9148824442</span>
              <br/>
              <strong>Email Us :</strong>
              <br/>
              <span className="text-default"> contactussangamsathi@gmail.com</span>
              </p>
            </Box>

          </Box>
          <Box className="companycontact-stack-content-2">
            <Box className="icon-div-2">
             <FmdGoodIcon fontSize="large" className="contact-icon-1"/>
            </Box>
            <Box className="sub-content-div-1">
              <h3> Our Address </h3>
              <p className="helpline">Our offices are located in the Bangalore.</p>
              <p>
              <strong>
              Address:
              </strong>
              Kiran Computers Pvt. Ltd
              <br/>
              #148/E, 2nd Floor, 17th Main Vijaynagar,
              <br/>
              Banglore-560040
            </p>
            </Box>

          </Box>
          <Box className="companycontact-stack-content-3">
            <Box className="icon-div-3">
             <EmailOutlinedIcon fontSize="large" className="contact-icon-1"/>
            </Box>
            <Box className="sub-content-div-2">
              <h3> Other Enquiries </h3>
              <p className="helpline">Please contact us at the email below for all other inquiries.</p>
              <p>
  
              <br/>
              <strong>Email Us :</strong>
              <br/>
              <span className="text-default"> contactussangamsathi@gmail.com</span>
              </p>
            </Box>

          </Box>
          
          
        </Stack>
      </Box>

      <Footer />
    </Box>
  );
};

export default CompanyContact;
