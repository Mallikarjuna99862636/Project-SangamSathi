import React, { useState } from "react";
import { Box, Divider, Tab, Tabs } from "@mui/material";
import "./assistanceservices.scss";
import MyMatch from "./insidecomp/myMatches/MyMatch";
import Suggestions from "./insidecomp/suggestions/Suggestions";
import Selected from "./insidecomp/selected/Selected";
import OnProcess from "./insidecomp/onProcess/OnProcess";
import Completed from "./insidecomp/completed/Completed";
import Rejected from "./insidecomp/rejected/Rejected";
import Dashheader from "../../dashHeader/Dashheader";
import Sidebar from "../../sidebar/Sidebar";

const AssistanceServices = () => {
  const indexNum = 2;
  const [values, setValues] = useState(0);

  const handleChange = (event, newValue) => {
    setValues(newValue);
  };

  const renderContents = () => {
    switch (values) {
      case 0:
        return <MyMatch/>;
      case 1:
        return <Suggestions />;
      case 2:
        return <Selected />;
      case 3:
        return <OnProcess />;
      case 4:
        return <Completed />;
      case 5:
        return <Rejected />;
      default:
        return null;
    }
  };

  return (
    <>
     <Dashheader/>
     <Sidebar/>
    <Box className="assistanceservices-page-container">
      <Box className="assistanceservices-header-part">
        <h3 className="assistanceservices-user-name">RamaS (SGM001) 9876543210</h3>
        <Divider />
      </Box>
      <Box className="assistanceservices-tabs-list">
        <Box>
          <Tabs className="assistanceservices-tabs" value={values} onChange={handleChange}>
            <Tab className="assistanceservices-tab-names-list-01" label={`My Matches (${indexNum})`} />
            <Tab className="assistanceservices-tab-names-list-02" label={`Suggestions (${indexNum})`} />
            <Tab className="assistanceservices-tab-names-list-03" label={`Selected (${indexNum})`}  />
            <Tab className="assistanceservices-tab-names-list-04" label={`OnProcess (${indexNum})`}  />
            <Tab className="assistanceservices-tab-names-list-05" label={`Completed (${indexNum})`}  />
            <Tab className="assistanceservices-tab-names-list-06" label={`Rejected (${indexNum})`}  />
          </Tabs>
          <Box className="assistanceservices-tabs-content">{renderContents()}</Box>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default AssistanceServices;
