import React from "react";
import { Box, Breadcrumbs, Stack } from "@mui/material";
import "./companycancellationpolicy.scss";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../homePages/footerPart/Footer";
import logo4 from "../../assets/images/sangam-sathi-logo.png";
import { NavigateNext } from "@mui/icons-material";

const CompanyCancellationPolicy = () => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/");
  };

  return (
    <Box>
      <Box className="companycancellationpolicy-container">
        <h3 variant="h3" className="companycancellationpolicy-heading-1">
          Welcome to SangamSathi
        </h3>
        <h3 className="companycancellationpolicy-heading-2">
          Are You Looking Matches Within Your Community? Register Now
        </h3>
      </Box>
      <Box className="companycancellationpolicy-container-div-1">
        <Link to="/">
          <img src={logo4} alt="sangam-sathi-logo" />
        </Link>
        <button
          className="companycancellationpolicy-login-button"
          onClick={handleLogin}
        >
          {" "}
          Login{" "}
        </button>
      </Box>
      <Box className="companycancellationpolicy-container-div-2">
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
              <h4 className="reg-heading-4"> Cancellation Policy </h4>
            </Breadcrumbs>
          </Stack>
        </Box>
      </Box>
      <Box className="companycancellationpolicy-main-content">
        <Box className="companycancellationpolicy-div-1">
          <Box className="div-cont-1">
            <p>
              Our focus is complete customer satisfaction. In the event, if you
              are displeased with the services provided, we will refund back the
              money, provided the reasons are genuine and proved after
              investigation. Please read the fine prints of each deal before
              buying it, it provides all the details about the services or the
              product you purchase.
            </p>
            <p>
              In case of dissatisfaction from our services, clients have the
              liberty to cancel their projects and request a refund from us. Our
              Policy for the cancellation and refund will be as follows:
            </p>
          </Box>

          <Box className="div-cont-2">
            <h3>Cancellation Policy</h3>
            <p>For Cancellations please contact the us via contact us link.</p>
            <p>
              Requests received later than 7 business days prior to the end of
              the current service period will be treated as cancellation of
              services for the next service period.
            </p>
          </Box>
          <Box className="div-cont-3">
            <h3>Refund Policy</h3>
            <p>
              We will try our best to create the suitable design concepts for
              our clients.
            </p>
            <p>
              In case any client is not completely satisfied with our products
              we can provide a refund.
            </p>
            <p>
              If paid by credit card, refunds will be issued to the original
              credit card provided at the time of purchase and in case of
              payment gateway name payments refund will be made to the same
              account.
            </p>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CompanyCancellationPolicy;
