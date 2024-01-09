import React, { useState } from "react";
import { Box, Divider, Tab, Tabs } from "@mui/material";
import "./myinterests.scss";
import Accepted from "./insidepage/accepted/Accepted";
import Requests from "./insidepage/requests/Requests";
import Sent from "./insidepage/sent/Sent";
import Pending from "./insidepage/pending/Pending";

const MyInterests = () => {
  const [values, setValues] = useState(0);

  const handleChange = (event, newValue) => {
    setValues(newValue);
  };

  const renderContents = () => {
    switch (values) {
      case 0:
        return <Accepted />;
      case 1:
        return <Requests />;
      case 2:
        return <Sent />;
      case 3:
        return <Pending />;
      default:
        return null;
    }
  };

  return (
    <Box className="myinterests-page-container">
      <Box className="myinterests-header-part">
        <h3 className="myinterests-user-name">Interested Profile</h3>
        <Divider />
      </Box>
      <Box className="myinterests-tabs-list">
        <Box>
          <Tabs className="myinterests-tabs" value={values} onChange={handleChange}>
            <Tab className="tab-names-list-01" label="Accepted" />
            <Tab className="tab-names-list-02" label="Requests" />
            <Tab className="tab-names-list-03" label="Sent" />
            <Tab className="tab-names-list-04" label="Pending" />
          </Tabs>
          <Box className="tabs-content">{renderContents()}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MyInterests;
