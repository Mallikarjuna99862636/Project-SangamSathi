import React, { useState } from "react";
import { Box, Divider, Tab, Tabs , Alert , Snackbar } from "@mui/material";
import "./profile.scss";
import About from "./insidepages/about/About";
import FamilyReligious from "./insidepages/familyReligious/FamilyReligious";
import Education from "./insidepages/education/Education";
import Photos from "./insidepages/photo/Photos";
import LifeStyle from "./insidepages/lifeStyle/LifeStyle";
import ParentsPrefer from "./insidepages/parentsPreference/ParentsPrefer";
import Others from "./insidepages/others/Others";
import PrivacySetting from "./insidepages/privacySetting/PrivacySetting";
import Dashheader from "../../dashHeader/Dashheader";
import Sidebar from "../../sidebar/Sidebar";

const Profile = () => {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return <About render={setOpen}/>;
      case 1:
        return <FamilyReligious render={setOpen}/>;
      case 2:
        return <Education/>;
      case 3:
        return <Photos/> ;
      case 4:
        return <LifeStyle/> ;
      case 5:
        return <ParentsPrefer/> ;
      case 6:
        return <Others/> ;
      case 7:
        return <PrivacySetting/>;
      default:
        return null;
    }
  };

  return (
    <>
     <Dashheader/>
     <Sidebar/>
    <Box className="profile-page-container">
      <Box className="profile-header-part">
        <h3 className="profile-user-name"> My Profile</h3>
        <Divider />
      </Box>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Updated Successfully
        </Alert>
      </Snackbar>
      <Box className="tabs-list">
        <Box>
          <Tabs className="tabs" value={value} onChange={handleChange} centered>
            <Tab className="tab-names-list-01" label="About" />
            <Tab className="tab-names-list-02" label="Family & Religious" />
            <Tab className="tab-names-list-03" label="Education" />
            <Tab className="tab-names-list-04" label="Photo" />
            <Tab className="tab-names-list-05" label="LifeStyle" />
            <Tab className="tab-names-list-06" label="Parents Preference" />
            <Tab className="tab-names-list-07" label="Others" />
            <Tab className="tab-names-list-08" label="Privacy Setting" />
          </Tabs>
          <Box className="tabs-content">
          {renderContent()}
          </Box>
        </Box>
      </Box>
    </Box>
    </>
  );
};

export default Profile;
