import React from "react";
import { Link } from "react-router-dom";
import './receiptvoucher.scss'
import AdminHeader from "../../../adminHeader/AdminHeader";
import AdminSidebar from "../../../adminSidebar/AdminSidebar";
import { Box, Divider, Stack } from "@mui/material";
import icon1 from "../../../../../assets/images/wedding-arch.png";
import icon2 from "../../../../../assets/images/love-letter.png";
import icon3 from "../../../../../assets/images/chat.png";


const ReceiptVoucher = () => {
  return (
    <>
       <AdminHeader/>
       <AdminSidebar/>
       <Box className="receipt-page-container">
      <Box className="receipt-header-part">
        <h3 className="receipt-user-name"> Receipt Voucher</h3>
        <Divider />
      </Box>
      {/* This Forst Links  Card  */}
      <Stack className="receipt-dash-stack-container">
        <Box className="receipt-stack-first-card">
          <Box className="receipt-card-div-01">
            <Box>
              <h1 className="card1-heading-01"> 6 </h1>
              <p className="card1-heading-02">Free Users </p>
            </Box>
            <Box>
            <img className="logo-one" src={icon1} alt="logo-one" />
            </Box>
          </Box>
          <Box className="view-all-link-01">
            <Link className="link-one">
              <p>View All</p>
            </Link>
          </Box>
        </Box>
        <Box className="receipt-stack-second-card">
          <Box className="card-div-02">
            <Box>
              <h1 className="card2-heading-01"> 2 </h1>
              <p className="card2-heading-02"> Premium Users

 </p>
            </Box>
            <Box>
            <img className="logo-one" src={icon2} alt="logo-one" />
            </Box>
          </Box>
          <Box className="view-all-link-02">
            <Link className="link-two">
              {" "}
              <p>View All</p>
            </Link>
          </Box>
        </Box>

        <Box className="receipt-stack-third-card">
          <Box className="card-div-03">
            <Box>
              <h1 className="card3-heading-01"> $1 </h1>
              <p className="card3-heading-02"> Online Receipts </p>
            </Box>
            <Box>
            <img className="logo-one" src={icon3} alt="logo-one" />
            </Box>
          </Box>
          <Box className="view-all-link-03">
            <Link className="link-three">
              {" "}
              <p>View All</p>
            </Link>
          </Box>
        </Box>
        <Box className="receipt-stack-third-card">
          <Box className="card-div-03">
            <Box>
              <h1 className="card3-heading-01"> 6 </h1>
              <p className="card3-heading-02"> Renewals </p>
            </Box>
            <Box>
            <img className="logo-one" src={icon1} alt="logo-one" />
            </Box>
          </Box>
          <Box className="view-all-link-03">
            <Link className="link-three">
              {" "}
              <p>View All</p>
            </Link>
          </Box>
        </Box>
      </Stack>
      </Box>
      </>
  );
};

export default ReceiptVoucher;
