import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import "./others.scss";

const Others = () => {
  const [otherinfo, setOtherInfo] = useState("Not Specified");
  return (
    <Box className="others-main-container">
      <Stack className="others-stack-container">
        <Box className="others-data">
          <h4 className="others-heading">Other Information</h4>
          <Box className="textarea-field">
            <textarea
              name="other-info"
              value={otherinfo}
              id="other-info-id"
              cols="30"
              rows="10"
              onChange={(e) => setOtherInfo(e.target.value)}
            ></textarea>
            
          </Box>
          <Box className="other-buttons-class-div">
         <button className="other-submit-button"> Submit</button>
         <button className="other-reset-button"> Reset</button>
       </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Others;
