import React from "react";
import { Box, Breadcrumbs, Stack } from "@mui/material";
import "./companyprivacypolicy.scss";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../homePages/footerPart/Footer";
import logo4 from "../../assets/images/sangam-sathi-logo.png";
import { NavigateNext } from "@mui/icons-material";

const CompanyPrivacyPolicy = () => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/");
  };

  return (
    <Box>
      <Box className="companyprivacypolicy-container">
        <h3 variant="h3" className="companyprivacypolicy-heading-1">
          Welcome to SangamSathi
        </h3>
        <h3 className="companyprivacypolicy-heading-2">
          Are You Looking Matches Within Your Community? Register Now
        </h3>
      </Box>
      <Box className="companyprivacypolicy-container-div-1">
        <Link to="/">
          <img src={logo4} alt="sangam-sathi-logo" />
        </Link>
        <button
          className="companyprivacypolicy-login-button"
          onClick={handleLogin}
        >
          {" "}
          Login{" "}
        </button>
      </Box>
      <Box className="companyprivacypolicy-container-div-2">
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
              <h4 className="reg-heading-4"> Privacy Policy </h4>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>
      <Box className="companyprivacypolicy-main-content">
        <Box className="companyprivacypolicy-div-1">
          <Box className="div-cont-1">
            <h3> Our website may use the Privacy Policy given below: </h3>
          </Box>
          <Box className="div-cont-2">
            <p>
              {" "}
              The terms "We" / "Us" / "Our"/"Company" individually and
              collectively refer to Kiran Computers Pvt Ltd and the terms "You"
              /"Your" / "Yourself" refer to the users. This Privacy Policy is an
              electronic record in the form of an electronic contract formed
              under the information Technology Act, 2000 and the rules made
              thereunder and the amended provisions pertaining to electronic
              documents / records in various statutes as amended by the
              information Technology Act, 2000. This Privacy Policy does not
              require any physical, electronic or digital signature. This
              Privacy Policy is a legally binding document between you and Kiran
              Computers Pvt Ltd (both terms defined below). The terms of this
              Privacy Policy will be effective upon your acceptance of the same
              (directly or indirectly in electronic form, by clicking on the I
              accept tab or by use of the website or by other means) and will
              govern the relationship between you and Kiran Computers Pvt Ltd
              for your use of the website "www.sangamsathi.com" (defined below).
              This document is published and shall be construed in accordance
              with the provisions of the Information Technology (reasonable
              security practices and procedures and sensitive personal data of
              information) rules, 2011 under Information Technology Act, 2000;
              that require publishing of the Privacy Policy for collection, use,
              storage and transfer of sensitive personal data or information.
              Please read this Privacy Policy carefully by using the Website,
              you indicate that you understand, agree and consent to this
              Privacy Policy.{" "}
            </p>
          </Box>
          <Box className="div-cont-3">
            <p>
              {" "}
              If you do not agree with the terms of this Privacy Policy, please
              do not use this Website. By providing us your Information or by
              making use of the facilities provided by the Website, You hereby
              consent to the collection, storage, processing and transfer of any
              or all of Your Personal Information and Non-Personal Information
              by us as specified under this Privacy Policy. You further agree
              that such collection, use, storage and transfer of Your
              Information shall not cause any loss or wrongful gain to you or
              any other person.{" "}
            </p>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default CompanyPrivacyPolicy;
