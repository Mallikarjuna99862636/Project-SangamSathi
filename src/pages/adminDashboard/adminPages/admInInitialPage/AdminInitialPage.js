import React, { useEffect, useState } from "react";
import "./admininitialpage.scss";
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
import { Link } from "react-router-dom";
import axios from "axios";
import GroupsIcon from "@mui/icons-material/Groups";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const AdminInitialPage = () => {
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
              <GroupsIcon className="group-icons" />
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
              <GroupsIcon className="group-icons" />
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
              <GroupsIcon className="group-icons" />
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
              <GroupsIcon className="group-icons" />
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
              <GroupsIcon className="group-icons" />
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
              <p className="card3-heading-002"> Assistance Success </p>
            </Box>
            <Box>
              <GroupsIcon className="group-icons" />
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
              <h1 className="card1-heading-01" style={{ fontSize: "34px" }}>
                {" "}
                1134352.86{" "}
              </h1>
              <p className="card1-heading-02"> Paid User Receipts </p>
            </Box>
            <Box>
              <CurrencyRupeeIcon className="group-icons" />
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
              <h1 className="card2-heading-01" style={{ fontSize: "34px" }}>
                {" "}
                153373.88{" "}
              </h1>
              <p className="card2-heading-02"> Assistance Receipts </p>
            </Box>
            <Box>
              <CurrencyRupeeIcon className="group-icons" />
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
              <h1 className="card3-heading-01" style={{ fontSize: "34px" }}>
                {" "}
                6646.0{" "}
              </h1>
              <p className="card3-heading-02" style={{ width: "152px" }}>
                {" "}
                Renewal Receipts{" "}
              </p>
            </Box>
            <Box>
              <CurrencyRupeeIcon className="group-icons" />
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
        <Box className="last-main-div">
          <Box className="last-card-div-01">
            <Box>
              <h1 className="last-card-heading-01"> 1296971.8 </h1>
              <p className="last-card-heading-02"> Total Online Receipts </p>
            </Box>
            <Box>
              <CurrencyRupeeIcon className="group-icons" />
            </Box>
          </Box>
          <Box className="last-view-all-link">
            <Link className="last-link-one">
              <p>View All</p>
            </Link>
          </Box>
        </Box>
      </Stack>
      {/* Table Data Render here  */}

      <Box className="tables-data">

         {/* Table One   */}

        <Box className="table-one-div">
          <Box>
            <h3 className="table-one-heading">Recent Register</h3>
          </Box>
          <Divider />
          <Box className="table-one">
              <TableContainer sx={{ maxHeight: 510 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                  <TableRow>
                  <TableCell className="cell-items-name">
                    Registraton No
                  </TableCell>
                  <TableCell className="cell-items-name">Name</TableCell>
                  <TableCell className="cell-items-name">Mobile</TableCell>
                  <TableCell className="cell-items-name">Status</TableCell>
                </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="cell-data">{row.id}</TableCell>
                        <TableCell className="cell-data">{row.name}</TableCell>
                        <TableCell className="cell-data">9986362636</TableCell>
                        <TableCell className="cell-data">active</TableCell>
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
            <h3 className="table-one-heading">Recent Online Transaction</h3>
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
                  <TableCell className="cell-items-name"> Registraton No</TableCell>
                  <TableCell className="cell-items-name">Mode Of Payment</TableCell>
                  <TableCell className="cell-items-name">Amount</TableCell>
                </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="cell-data">12-02-2022</TableCell>
                        <TableCell className="cell-data">SMN1256</TableCell>
                        <TableCell className="cell-data">Phone pe</TableCell>
                        <TableCell className="cell-data">Rs. 920.0</TableCell>
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
            <h3 className="table-one-heading">Recent Register</h3>
          </Box>
          <Divider />
          <Box className="table-one">
              <TableContainer sx={{ maxHeight: 510 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                  <TableRow>
                  <TableCell className="cell-items-name">
                    Registraton No
                  </TableCell>
                  <TableCell className="cell-items-name">Name</TableCell>
                  <TableCell className="cell-items-name">Mobile</TableCell>
                  <TableCell className="cell-items-name">Status</TableCell>
                </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell  className="cell-data">{row.id}</TableCell>
                        <TableCell className="cell-data">{row.name}</TableCell>
                        <TableCell className="cell-data">9986362636</TableCell>
                        <TableCell className="cell-data">active</TableCell>
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
            <h3 className="table-one-heading">Recent Assistance Online Transaction</h3>
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
                  <TableCell className="cell-items-name"> Registraton No</TableCell>
                  <TableCell className="cell-items-name">Mode Of Payment</TableCell>
                  <TableCell className="cell-items-name">Amount</TableCell>
                </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="cell-data">12-02-2022</TableCell>
                        <TableCell className="cell-data">SMN1256</TableCell>
                        <TableCell className="cell-data">Phone pe</TableCell>
                        <TableCell className="cell-data">Rs. 920.0</TableCell>
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

export default AdminInitialPage;
