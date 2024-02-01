import React from "react";
import { Box, Stack } from "@mui/material";
import "./freeeducationpop.scss";

const FreeEducationPop = () => {
  return (
    <Box className="educationpop-main-container">
      <Stack className="educationpop-stack-container">
        <Box className="educationpop-first-table-data">
          <table className="educationpop-table">
            <tbody>
              <tr>
                <th> Qualification </th>
                <td> B.E/B.Tech </td>
              </tr>
              <tr>
                <th> Occupation </th>
                <td> Software Professional (Others)</td>
              </tr>
              <tr>
                <th> Income Per Annum</th>
                <td> 4 Lakh - 5 Lakh</td>
              </tr>
              <tr>
                <th> Occupation Country</th>
                <td> India</td>
              </tr>
              <tr>
                <th> Other Info </th>
                <td> Not Specified</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Stack>
    </Box>
  );
};

export default FreeEducationPop;
