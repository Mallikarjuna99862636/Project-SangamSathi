import React from "react";
import "./admininitialpage.scss";
import { Box, Divider, Stack } from "@mui/material";
import {Link}  from 'react-router-dom'
import GroupsIcon from '@mui/icons-material/Groups';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const AdminInitialPage = () => {
  return (
    <Box className="admin-initial-page-container">
      <Box className="admin-header-part">
        <h3 className="admin-user-name"> Dashboard</h3>
        <Divider />
      </Box>
      {/* This Forst Links  Card  */}
      <Stack className="dash-stack-container">
        <Box className="stack-first-card">
          <Box className="card-div-01">
            <Box>
              <h1 className="card1-heading-01"> 2063 </h1>
              <p className="card1-heading-02">Free Users </p>
            </Box>
            <Box>
              <GroupsIcon className="group-icons"/>
            </Box>
          </Box>
          <Box className="view-all-link-01">
            <Link className="link-one">
  
              <p>View All</p>
            </Link>
          </Box>
        </Box>
        <Box className="stack-second-card">
          <Box className="card-div-02">
            <Box>
              <h1 className="card2-heading-01"> 24 </h1>
              <p className="card2-heading-02"> Silver Users </p>
            </Box>
            <Box>
            <GroupsIcon className="group-icons"/>
            </Box>
          </Box>
          <Box className="view-all-link-02">
            <Link className="link-two">
              {" "}
              <p>View All</p>
            </Link>
          </Box>
        </Box>

        <Box className="stack-third-card">
          <Box className="card-div-03">
            <Box>
              <h1 className="card3-heading-01"> 29 </h1>
              <p className="card3-heading-02"> Premium Users </p>
            </Box>
            <Box>
            <GroupsIcon className="group-icons"/>
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
       {/* This Second Links  Card  */}
      <Stack className="dash-stack-container">
        <Box className="stack-first-card">
          <Box className="card-div-01">
            <Box>
              <h1 className="card1-heading-01"> 53 </h1>
              <p className="card1-heading-002"> Total Paid Users </p>
            </Box>
            <Box>
              <GroupsIcon className="group-icons"/>
            </Box>
          </Box>
          <Box className="view-all-link-01">
            <Link className="link-one">
  
              <p>View All</p>
            </Link>
          </Box>
        </Box>
        <Box className="stack-second-card">
          <Box className="card-div-02">
            <Box>
              <h1 className="card2-heading-01"> 2096 </h1>
              <p className="card2-heading-002"> Assistance Pending </p>
            </Box>
            <Box>
            <GroupsIcon className="group-icons"/>
            </Box>
          </Box>
          <Box className="view-all-link-02">
            <Link className="link-two">
              {" "}
              <p>View All</p>
            </Link>
          </Box>
        </Box>

        <Box className="stack-third-card">
          <Box className="card-div-03">
            <Box className="sub-card-div">
              <h1 className="card3-heading-01"> 104 </h1>
              <p className="card3-heading-002"> Assistance Success  </p>
            </Box>
            <Box>
            <GroupsIcon className="group-icons"/>
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

       {/* This Third Links  Card  */}

      <Stack className="dash-stack-container">
        <Box className="stack-first-card">
          <Box className="card-div-01">
            <Box>
              <h1 className="card1-heading-01"  style={{fontSize : "34px"}}> 1134352.86 </h1>
              <p className="card1-heading-02">  Paid User Receipts </p>
            </Box>
            <Box>
              <CurrencyRupeeIcon className="group-icons"/>
            </Box>
          </Box>
          <Box className="view-all-link-01">
            <Link className="link-one">
  
              <p>View All</p>
            </Link>
          </Box>
        </Box>
        <Box className="stack-second-card">
          <Box className="card-div-02">
            <Box>
              <h1 className="card2-heading-01" style={{fontSize : "34px"}}> 153373.88 </h1>
              <p className="card2-heading-02"> Assistance Receipts  </p>
            </Box>
            <Box>
            <CurrencyRupeeIcon className="group-icons"/>
            </Box>
          </Box>
          <Box className="view-all-link-02">
            <Link className="link-two">
              {" "}
              <p>View All</p>
            </Link>
          </Box>
        </Box>
        <Box className="stack-third-card">
          <Box className="card-div-03">
            <Box>
              <h1 className="card3-heading-01"  style={{fontSize : "34px"}}> 6646.0 </h1>
              <p className="card3-heading-02" style={{ width : '152px'}}>  Renewal Receipts </p>
            </Box>
            <Box>
            <CurrencyRupeeIcon className="group-icons"/>
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
        {/* This Last Card  */}
        
      <Stack className="last-stack-container">
        <Box  className="last-main-div">
          <Box className="last-card-div-01">
            <Box>
              <h1 className="last-card-heading-01"> 1296971.8 </h1>
              <p className="last-card-heading-02">  Total Online Receipts </p>
            </Box>
            <Box>
              <CurrencyRupeeIcon className="group-icons"/>
            </Box>
          </Box>
          <Box className="last-view-all-link">
            <Link className="last-link-one">
              <p>View All</p>
            </Link>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default AdminInitialPage;
