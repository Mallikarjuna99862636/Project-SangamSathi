import React, { useEffect, useState } from "react";
import "./promoterdashinitialpage.scss";
import {
  Box,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
const PromoterDashInitialPage = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setTableData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <Box className="promoter-initial-page-container">
      <Box className="promoter-header-part">
      <h3 className="promoter-user-name">Welcome</h3>
        <h3 className="promoter-user-name"> SHREE@GMAIL.COM</h3>
        
      </Box>
      <Divider />
      {/* This Forst Links  Card  */}
      <Stack className="dash-stack-container-1">
        <Box className="stack-first-card">
          <Box className="card-div-01">
            <Box>
              <h1 className="card1-heading-01"> Promoter Type: </h1>
              <p className="card1-heading-02">Premium  </p>
            </Box>
          </Box>
        </Box>
        <Box className="stack-second-card">
          <Box className="card-div-02">
            <Box>
              <h1 className="card2-heading-01"> Promo Code: </h1>
              <p className="card2-heading-02">  CSCS1234 </p>
            </Box>
          </Box>
        </Box>

        <Box className="stack-third-card">
          <Box className="card-div-03">
            <Box>
              <h1 className="card3-heading-01"> Date Of Register: </h1>
              <p className="card3-heading-02">  22-06-2020 - Expires on: Aug 18, 2019 </p>
            </Box>
          </Box>
        </Box>
      </Stack>
      {/* This Second Links  Card  */}
      <Stack className="dash-stack-container-2">
        <Box className="stack-first-card">
          <Box className="card-div-01">
            <Box>
              <h1 className="card1-heading-01"> 310 </h1>
              <p className="card1-heading-002">   Registration Earnings </p>
            </Box>
          </Box>
        </Box>
        <Box className="stack-second-card">
          <Box className="card-div-02">
            <Box>
              <h1 className="card2-heading-01"> 18 </h1>
              <p className="card2-heading-002"> Assistance Earnings  </p>
            </Box>
          </Box>
        </Box>

        <Box className="stack-third-card">
          <Box className="card-div-03">
            <Box className="sub-card-div">
              <h1 className="card3-heading-01"> 2 </h1>
              <p className="card3-heading-002">  Renewal Earnings </p>
            </Box>
          </Box>
        </Box>
      </Stack>

      {/* This Third Links  Card  */}

      <Stack className="dash-stack-container-3">
        <Box className="stack-first-card">
          <Box className="card-div-01">
            <Box>
              <h1 className="card1-heading-01" style={{ fontSize: "34px" }}>
                {" "}
                1134352.86{" "}
              </h1>
              <p className="card1-heading-02">   My Total Earnings </p>
            </Box>
          </Box>
        </Box>
        <Box className="stack-second-card">
          <Box className="card-div-02">
            <Box>
              <h1 className="card2-heading-01" style={{ fontSize: "34px" }}>
                {" "}
                153373.88{" "}
              </h1>
              <p className="card2-heading-02"> Assistance Receipts </p>
            </Box>
          </Box>
        </Box>
        <Box className="stack-third-card">
          <Box className="card-div-03">
            <Box>
              <h1 className="card3-heading-01" style={{ fontSize: "34px" }}>
                {" "}
                6646.0{" "}
              </h1>
              <p className="card3-heading-02" style={{ width: "152px" }}>
                {" "}
                Renewal Receipts{" "}
              </p>
            </Box>
          </Box>
        </Box>
      </Stack>
      {/* Table Data Render here  */}

      <Box className="tables-data">
        {/* Table One   */}

        <Box className="table-one-div">
          <Box>
            <h3 className="table-one-heading">Recent Registration Earnings</h3>
          </Box>
          <Divider />
          <Box className="table-one">
            <TableContainer sx={{ maxHeight: 510 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell className="cell-items-name">
                      Date
                    </TableCell>
                    <TableCell className="cell-items-name">Email Id</TableCell>
                    <TableCell className="cell-items-name">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="cell-data">12-02-2005</TableCell>
                      <TableCell className="cell-data">{row.email}</TableCell>
                      <TableCell className="cell-data"> ₹ 100</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        {/* Table Two   */}
        <Box className="table-one-div">
          <Box>
            <h3 className="table-one-heading">  Recent Assistance Earnings</h3>
          </Box>
          <Divider />
          <Box className="table-one">
            <TableContainer sx={{ maxHeight: 510 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell className="cell-items-name">Date</TableCell>
                    <TableCell className="cell-items-name">
                    Email Id
                    </TableCell>
                    <TableCell className="cell-items-name">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="cell-data">12-02-2022</TableCell>
                      <TableCell className="cell-data">{row.email}</TableCell>
                      <TableCell className="cell-data">₹ 100</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        {/* Table Three  */}
        <Box className="table-one-div">
          <Box>
            <h3 className="table-one-heading">Recent Earnings </h3>
          </Box>
          <Divider />
          <Box className="table-one">
            <TableContainer sx={{ maxHeight: 510 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell className="cell-items-name">
                      Date
                    </TableCell>
                    <TableCell className="cell-items-name">Email Id</TableCell>
                    <TableCell className="cell-items-name">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="cell-data">12-02-5005</TableCell>
                      <TableCell className="cell-data">{row.email}</TableCell>
                      <TableCell className="cell-data">₹ 100</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>

        {/* Table Four   */}
        <Box className="table-one-div">
          <Box>
            <h3 className="table-one-heading">
            Recent Referals
            </h3>
          </Box>
          <Divider />
          <Box className="table-one">
            <TableContainer sx={{ maxHeight: 510 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell className="cell-items-name">Date</TableCell>
                    <TableCell className="cell-items-name">
                     Email Id
                    </TableCell>
                    <TableCell className="cell-items-name">Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="cell-data">12-02-2022</TableCell>
                      <TableCell className="cell-data">{row.email}</TableCell>
                      <TableCell className="cell-data"><button className="status-button"> Pending</button></TableCell>
                    </TableRow>
                  ))} 
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PromoterDashInitialPage;
