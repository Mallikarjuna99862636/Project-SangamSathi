import React from "react";
import { Box, Stack } from "@mui/material";
import "./freepreferencepop.scss";

const FreePreferencePop = () => {
  return (
    <Box className="preferencepop-main-container">
      <Stack className="preferencepop-stack-container">
        <Box className="preferencepop-first-table-data">
          <table className="preferencepop-table">
            <tbody>
              <tr>
                <th> Marital Status </th>
                <td> Unmarried </td>
              </tr>
              <tr>
                <th> Age Preference </th>
                <td> 36 to 63</td>
              </tr>
              <tr>
                <th> Height Preference</th>
                <td> 4' 11'' - 149cm to 4' 11'' - 149cm</td>
              </tr>
              <tr>
                <th> Education Preference</th>
                <td> Any</td>
              </tr>
              <tr>
                <th> Caste Preference </th>
                <td> Any Brahmin</td>
              </tr>
              <tr>
                <th> Occupation Country </th>
                <td> India</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Stack>
    </Box>
  );
};

export default FreePreferencePop;
