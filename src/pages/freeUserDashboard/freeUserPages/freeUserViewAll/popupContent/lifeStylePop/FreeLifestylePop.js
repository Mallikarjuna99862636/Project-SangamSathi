import React from "react";
import { Box, Stack } from "@mui/material";
import "./freelifestylepop.scss";

const FreeLifestylePop = () => {
  return (
    <Box className="lifestylepop-main-container">
      <Stack className="lifestylepop-stack-container">
        <Box className="lifestylepop-first-table-data">
          <table className="lifestylepop-table">
            <tbody>
              <tr>
                <th> Skin Type </th>
                <td> Fair </td>
              </tr>
              <tr>
                <th> Body type </th>
                <td> Average</td>
              </tr>
              <tr>
                <th> Diet</th>
                <td> Veg</td>
              </tr>
              <tr>
                <th> Drink</th>
                <td> No</td>
              </tr>
              <tr>
                <th> Smoke </th>
                <td> No</td>
              </tr>
              <tr>
                <th> Sunsign </th>
                <td> Libra</td>
              </tr>
              <tr>
                <th> Bloodgroup </th>
                <td> B+</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Stack>
    </Box>
  );
};

export default FreeLifestylePop;
