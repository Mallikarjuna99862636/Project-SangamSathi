import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Divider,
  Stack,
} from "@mui/material";
import "./about.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import EditNoteIcon from "@mui/icons-material/EditNote";

const About = ({render}) => {
  const [pincode, setPincode] = useState("583115");
  const [address, setAddress] = useState("Bengalore");
  const [occupationCountry, setOccupationCountry] = useState("India");
  const [language, setLanguage] = useState("Kannada");
  const [openAddressPin, setopenAddressPin] = useState(false);
  const [openCountry, setopenCountry] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  const handleCloseDialog = () => {
    setopenAddressPin(false);
  };
  const handleOpenDialog = () => {
    setopenAddressPin(true);
  };
  const handleOpenCountryDialog = () => {
    setopenCountry(true);
  };

  const handleCloseCountryDialog = () => {
    setopenCountry(false);
  };

  const handleOpenLanguageDialog = () => {
    setOpenLanguage(true);
  };

  const handleCloseLanguageDialog = () => {
    setOpenLanguage(false);
  };

  

  const handlePinAddressSubmit = (e) => {
    e.preventDefault();
    const newAddress = e.target.elements.address.value;
    const newPincode = e.target.elements.pincode.value;
    setAddress(newAddress);
    setPincode(newPincode);
    handleCloseDialog();
    render(true)
  };


  const handleCountrySubmit = (e) => {
    e.preventDefault();
    const newoccupationCountry = e.target.elements.occupationCountry.value;
    setOccupationCountry(newoccupationCountry);
    handleCloseCountryDialog();
    render(true)
  };

  const handleLanguageSubmit = (e) => {
    e.preventDefault();
    const newLanguage = e.target.elements.language.value;
    setLanguage(newLanguage);
    handleCloseLanguageDialog();
    render(true)
  };

  

  
  return (
    <Box className="about-main-container">
      <Stack className="about-stack-container">
        <Box className="first-table-data">
          <h4 className="table-one-heading"> Basic Information</h4>
          <table className="table-1">
            <tbody>
              <tr>
                <th> Email Id </th>
                <td> malli@gmail.com </td>
              </tr>
              <tr>
                <th> Phone No. </th>
                <td> 9986362636</td>
              </tr>
              <tr>
                <th> Address </th>
                <td>
                  {" "}
                  {address}{" "}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenDialog}
                  />
                </td>
              </tr>
              <tr>
                <th> Pin Code</th>
                <td> {pincode}</td>
              </tr>
              <tr>
                <th> City </th>
                <td> Bengalore</td>
              </tr>
              <tr>
                <th> State </th>
                <td> Karnataka</td>
              </tr>
              <tr>
                <th> Country </th>
                <td> India</td>
              </tr>
              <tr>
                <th> Occupation Country</th>
                <td>
                  {" "}
                  {occupationCountry} <EditNoteIcon onClick={handleOpenCountryDialog} className="edit-icon" />
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box className="second-table-data">
          <h4 className="table-two-heading">Personal Information</h4>
          <table className="table-2">
            <tbody>
              <tr>
                <th> Full Name </th>
                <td> Mallikarjun </td>
              </tr>
              <tr>
                <th> Date of Birth </th>
                <td> 05/06/1998</td>
              </tr>
              <tr>
                <th> Age </th>
                <td> 25</td>
              </tr>
              <tr>
                <th> Height </th>
                <td> 5.4</td>
              </tr>
              <tr>
                <th> Gender </th>
                <td> Male</td>
              </tr>
              <tr>
                <th> Language </th>
                <td>
                  {" "}
                  {language} <EditNoteIcon onClick={handleOpenLanguageDialog} className="edit-icon" />
                </td>
              </tr>
              <tr>
                <th> Marrital Status</th>
                <td> Single</td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Stack>
       {/* This Dialog is for Address And Pin Changes  */}
      <Dialog
        maxWidth="md"
        open={openAddressPin}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            width: "35%",
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            overflow: "none",
          },
        }}
      >
        <Box className="addess-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="addess-edit-popup-div1">
              <h3 className="addess-edit-popup-heading">Edit Address</h3>
              <DialogActions>
                <CancelIcon
                  className="addess-edit-cancel-icon"
                  onClick={handleCloseDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="addess-edit-div" onSubmit={handlePinAddressSubmit}>
            <Box className="addess-edit-popup-div2">
              <label htmlFor="address" className="addess-edit-popup-div2-label">
                Address
              </label>
              <br />
              <textarea
                id="address"
                name="address"
                className="addess-textarea"
                value={address}
                 onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </Box>
            <Box className="addess-edit-popup-div3">
              <label htmlFor="pincode" className="addess-edit-popup-div3-label">
                {" "}
                Pin Code{" "}
              </label>
              <br />
              <input
                type="text"
                id="pincode"
                className="addess-pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button className="close-button"> Close</button>
              <button type="submit" className="save-changes-button">
                {" "}
                Save Changes
              </button>
            </Box>
          </form>
        </Box>
      </Dialog>
      {/* This Dialog is for Occupation Country Changes  */}
      <Dialog
        maxWidth="md"
        open={openCountry}
        onClose={handleCloseCountryDialog}
        PaperProps={{
          style: {
            width: "35%",
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            overflow: "none",
          },
        }}
      >
        <Box className="addess-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="addess-edit-popup-div1">
              <h3 className="addess-edit-popup-heading">Edit Occupation Country</h3>
              <DialogActions>
                <CancelIcon
                  className="addess-edit-cancel-icon"
                  onClick={handleCloseCountryDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="addess-edit-div" onSubmit={handleCountrySubmit}>
              <Box className="addess-edit-popup-div3">
              <label htmlFor="occupationCountry" className="addess-edit-popup-div3-label">
                {" "}
                Occupation Country{" "}
              </label>
              <br />
              <input
                type="text"
                id="occupationCountry"
                className="addess-pincode"
                value={occupationCountry}
                onChange={(e) => setOccupationCountry(e.target.value)}
              />
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button className="close-button" onClick={handleCloseCountryDialog}> Close</button>
              <button type="submit" className="save-changes-button">
                {" "}
                Save Changes
              </button>
            </Box>
          </form>
        </Box>
      </Dialog>
       {/* This Dialog is for Language Changes  */}
       <Dialog
        maxWidth="md"
        open={openLanguage}
        onClose={handleCloseLanguageDialog}
        PaperProps={{
          style: {
            width: "35%",
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            overflow: "none",
          },
        }}
      >
        <Box className="addess-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="addess-edit-popup-div1">
              <h3 className="addess-edit-popup-heading">Edit Language</h3>
              <DialogActions>
                <CancelIcon
                  className="addess-edit-cancel-icon"
                  onClick={handleCloseLanguageDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="addess-edit-div" onSubmit={handleLanguageSubmit}>
          <Box className="addess-edit-popup-div3">
              <label htmlFor="language" className="addess-edit-popup-div3-label">
                {" "}
                Language{" "}
              </label>
              <br />
              <input
                type="text"
                id="language"
                className="addess-pincode"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button className="close-button" onClick={handleCloseLanguageDialog}> Close</button>
              <button type="submit" className="save-changes-button">
                {" "}
                Save Changes
              </button>
            </Box>
          </form>
        </Box>
      </Dialog>
    </Box>
  );
};

export default About;
