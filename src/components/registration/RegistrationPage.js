import React from "react";
import { Box, styled, Stack, Breadcrumbs, List, ListItem } from "@mui/material";
import "./registration.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, useNavigate } from "react-router-dom";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import FeaturedVideoIcon from "@mui/icons-material/FeaturedVideo";
import Footer from "../Homepages/Footer-Part/Footer";
import logo4 from "../../assets/images/sangam-sathi-logo.png";
import securePayment from '../../assets/images/secure-payment.png'

const CheckedIcon = styled(CheckBoxIcon)`
  color: green;
`;

const ListItemsName = styled(ListItem)`
  font-size: 1.1rem;
  line-height: 26px;
  color: #fff;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItemsSilver = styled(ListItem)`
  font-size: 1.1rem;
  line-height: 26px;
  padding-bottom: 10px;
  color: black;
  text-align: center;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegistrationPage = () => {
  const navigation = useNavigate();

  const handleLogin = () => {
    navigation("/");
  };

  const handleContinueButton = () => {
    navigation("/registrationform1");
  };
  return (
    <>
      <Box className="reg-container">
        <h3 variant="h3" className="reg-heading-1">
          Welcome to SangamSathi
        </h3>
        <h3 className="reg-heading-2">
          Are You Looking Matches Within Your Community? Register Now
        </h3>
      </Box>
      <Box className="reg-container-div-1">
        <img src={logo4} alt="sangam-sathi-logo" />

        <button className="login-button" onClick={handleLogin}>
          {" "}
          Login{" "}
        </button>
      </Box>
      <Box className="reg-container-div-2">
        <Box className="reg-container-div-3">
          <Stack className="reg-stack-1" direction="row" spacing={2}>
            <Breadcrumbs
              separator={
                <NavigateNextIcon fontSize="small" sx={{ color: "white" }} />
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
      </Box>
      <Stack className="reg-stack-2" spacing={4} direction="row">
        <Box className="container1">
          <Box className="pricing-box1">
            <h4 className="membership-heading-1"> MEMBERSHIP PLAN </h4>
            <h3 className="membership-heading-2"> PRICE </h3>
            <Box>
              <List className="listname">
                <ListItemsName sx={{ fontSize: "17px" }}>
                  View Profile Details
                </ListItemsName>
                <ListItemsName>Contact Details</ListItemsName>
                <ListItemsName>Photo Privacy</ListItemsName>
                <ListItemsName>Express Interest</ListItemsName>
                <ListItemsName>Share Profile</ListItemsName>
                <ListItemsName>Assistance</ListItemsName>
                <ListItemsName>Validity</ListItemsName>
              </List>
            </Box>
          </Box>
        </Box>
        <Box className="container2">
          <Box className="pricing-box2">
            <h4 className="silver-heading-1">SILVER MEMBERSHIP</h4>
            <p className="silver-heading-2">Rs. 1899.00</p>
            <h4 className="silver-heading-3">Save 50%</h4>
            <h3 className="silver-heading-4"> Rs.999/-</h3>
            <Box>
              <List>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <DisabledByDefaultIcon style={{ color: "red" }} />
                </ListItemsSilver>
              </List>
            </Box>
            <Box>
              <h3 className="silver-heading-5"> 6 MONTH</h3>
              <button
                className="continue-button"
                onClick={handleContinueButton}
              >
                CONTINUE
              </button>
            </Box>
          </Box>
          <Box>
            <h4 className="silver-heading-6" variant="h4">
              {" "}
              Have Promocode ? Get Rs. 100 discount{" "}
            </h4>
          </Box>
        </Box>
        <Box className="container3">
          <Box className="pricing-box3">
            <h4 className="premium-heading-1">PREMIUM MEMBERSHIP</h4>
            <p className="premium-heading-2">Rs. 2999.00</p>
            <h4 className="premium-heading-3">Save 50%</h4>
            <h3 className="premium-heading-4"> Rs.1,599/-</h3>
            <Box>
              <List>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <DisabledByDefaultIcon style={{ color: "red" }} />
                </ListItemsSilver>
              </List>
            </Box>
            <Box>
              <h3 className="premium-heading-5"> 1 Year</h3>
              <button
                className="continue-button"
                onClick={handleContinueButton}
              >
                CONTINUE
              </button>
            </Box>
          </Box>
          <Box>
            <h4 className="premium-heading-6">
              {" "}
              Have Promocode ? Get Rs. 100 discount{" "}
            </h4>
          </Box>
        </Box>
        <Box className="container4">
          <Box className="pricing-box4">
            <h4 className="assistance-heading-1">ASSISTANCE</h4>
            <p className="assistance-heading-2">Rs. 1899.00</p>
            <h4 className="assistance-heading-3">Save 50%</h4>
            <h3 className="assistance-heading-4"> Rs.999/-</h3>
            <Box>
              <List>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
                <ListItemsSilver>
                  <CheckedIcon />
                </ListItemsSilver>
              </List>
            </Box>
            <Box>
              <h3 className="assistance-heading-5"> 1 Year</h3>
              <button
                className="continue-button"
                onClick={handleContinueButton}
              >
                CONTINUE
              </button>
            </Box>
          </Box>
          <Box>
            <h4 className="assistance-heading-6">
              {" "}
              Have Promocode ? Get Rs. 100 discount{" "}
            </h4>
          </Box>
        </Box>
      </Stack>

      <Box>
        <Box>
          <h4 className="trusted-heading-1">Trusted By All Users</h4>
        </Box>
        <Stack direction="row" spacing={3} className="trusted-stack">
          <Box className="container-card1">
          <img className="security-icon-img" src={securePayment} alt="securePayment" />
            <Box>
              <h4 className="trusted-heading-2"> Secure Payment </h4>
              <h4 className="trusted-heading-3">
                {" "}
                Your information is protected by secure payment.{" "}
              </h4>
            </Box>
          </Box>
          <Box className="container-card2">
            <h4 className="trusted-heading-4">
              {" "}
              We accept all of the following credit cards.{" "}
            </h4>
            <Box sx={{ textAlign: "left" }}>
              <FeaturedVideoIcon fontSize="large" />
              <FeaturedVideoIcon fontSize="large" />
              <FeaturedVideoIcon fontSize="large" />
            </Box>
          </Box>
        </Stack>
      </Box>
      <Footer />
    </>
  );
};

export default RegistrationPage;
