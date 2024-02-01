import React from "react";
import { Box, Breadcrumbs, Stack } from "@mui/material";
import "./companycontact.scss";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../homePages/footerPart/Footer";
import logo4 from "../../assets/images/sangam-sathi-logo.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { NavigateNext } from "@mui/icons-material";

const CompanyContact = () => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/");
  };

  return (
    <>
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
      <Box className="companycontact-container-div-2"></Box>
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
                <Link to="/" style={{ textDecoration: "none" }}>
                  {" "}
                  Home{" "}
                </Link>{" "}
              </h4>
              <h4 className="reg-heading-4"> Registration </h4>
            </Breadcrumbs>
          </Stack>
          </Box>

      <Box className="companycontact-main-content">
        <Box className="companycontact-main-logo">
          <FavoriteIcon className="heart-icon" />
        </Box>
        <h2>Established in March 26th 2012</h2>
        <p className="companycontact-para">
          Kiran Computers Pvt Ltd has grown from strength to provide the IT
          Solutions that meet the critical business requirements and fast
          growing enterprises. Service rendering processes at Kiran Computers
          Pvt Ltd conform to IT Standards.Our capabilities are backed by sound
          corporate resources.
        </p>
      </Box>
      <Box className="section-title-div">
        <Box className="companycontact-section-title">
          <h2> What we do </h2>
          <p>
            We take pleasure in introducing our self as â€œKiran Computers Pvt
            Ltdâ€ engaged in Computer Sales & Services, Network and Data
            Solutions, Security Systems, Software Development and Business
            Process and other fields of Information Technology. We endeavour to
            furnish our precious clients superior services designed for to meet
            clientâ€™s needs.
          </p>
          <p>
            We provide services from the latest technology available to contend
            our self in the global arena and to provide the best technology to
            our clients rather than be a passenger of time. Kiran Computers Pvt
            Ltd infrastructure has in par with latest available equipment. It
            has a team of experienced, well certified Customer Support
            Professionals, who with their in depth knowledge have achieved a
            high level of corporate satisfaction.
          </p>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CompanyContact;
