import React, { useState } from "react";
import { Box, Divider, Tab, Tabs , Alert , Snackbar } from "@mui/material";
import "./freeuserprofile.scss";
import FreeUserDashheader from "../../freeUserdashHeader/FreeUserDashheader";
import FreeUserFamilyReligious from "./insideComp/freeUserFamilyReligious/FamilyReligious";
import FreeUserEducation from "./insideComp/freeUserEducation/FreeUserEducation";
import FreeUserPhotos from "./insideComp/freeUserPhoto/FreeUserPhotos";
import FreeUserOthers from "./insideComp/freeUserOthers/FreeUserOthers";
import FreeUserSidebar from "../../freeUserSidebar/FreeUserSidebar";
import FreeUserAbout from "./insideComp/freeUserAbout/FreeUserAbout";

const FreeUserProfile = () => {
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
        return <FreeUserAbout render={setOpen}/>;
      case 1:
        return <FreeUserFamilyReligious render={setOpen}/>;
      case 2:
        return <FreeUserEducation render={setOpen}/>;
      case 3:
        return <FreeUserPhotos/> ;
      case 4:
        return <FreeUserOthers/> ;
      default:
        return null;
    }
  };

  return (
    <>
     <FreeUserDashheader/>
     <FreeUserSidebar/>
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
          <Tabs className="tabs" value={value} onChange={handleChange} >
            <Tab className="tab-names-list-01" label="About" />
            <Tab className="tab-names-list-02" label="Family & Religious" />
            <Tab className="tab-names-list-03" label="Education" />
            <Tab className="tab-names-list-04" label="Photo" />
            <Tab className="tab-names-list-07" label="Others" />
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

export default FreeUserProfile;
