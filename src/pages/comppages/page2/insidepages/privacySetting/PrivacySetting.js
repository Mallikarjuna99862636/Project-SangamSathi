import React from "react";
import { Box } from "@mui/material";
import './privacysetting.scss'
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';

const PrivacySetting = () => {
  return (
    <Box className="privacysetting-main-container">
      <Box className="privacysetting-sub-container">
        <Box className="privacysetting-first-box">
          <PanoramaOutlinedIcon className="icon-one"/>
          <h3 className="privacysetting-one">Display photo</h3>
        </Box> 
        <Box className="privacysetting-second-box">
        <PanoramaOutlinedIcon className="icon-two" />
          <h3 className="privacysetting-two" >hello</h3>
        </Box> 
        <Box className="privacysetting-third-box">
        <PanoramaOutlinedIcon className="icon-three" />
          <h3 className="privacysetting-three">hello</h3>
        </Box> 
      </Box>
    </Box>
  );
};

export default PrivacySetting;
