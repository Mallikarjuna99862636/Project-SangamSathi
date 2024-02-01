import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Divider,
  Stack,
  Select,
  MenuItem,
} from "@mui/material";
import "./familyreligious.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import EditNoteIcon from "@mui/icons-material/EditNote";

const FamilyReligious = ({render}) => {
  const [fatherName, setFatherName] = useState("rama");
  const [openFatherName, setopenFatherName] = useState(false);
  const [selectParentType, setSelectParentType] = useState("Father");
  const [subCaste, setSubCaste] = useState("brahmin");
  const [openSubCaste, setOpenSubCaste] = useState(false);
  const [nakshatra, setNakshatra] = useState("anuradha");
  const [openNakshatra, setOpenNakshatra] = useState(false);
  const [rashi, setRashi] = useState("mesha");
  const [openRashi, setOpenRashi] = useState(false);
  const [gotra, setGotra] = useState("mallig");
  const [openGotra, setOpenGotra] = useState(false);
  

 

  const handleCloseFatherDialog = () => {
    setopenFatherName(false);
  };
  const handleOpenFatherDialog = () => {
    setopenFatherName(true);
  };

  const handleCloseSubCasteDialog = () => {
    setOpenSubCaste(false);
  };
  const handleOpenSubCasteDialog = () => {
    setOpenSubCaste(true);
  };

  const handleCloseNakshatraDialog = () => {
    setOpenNakshatra(false);
  };
  const handleOpenNakshatraDialog = () => {
    setOpenNakshatra(true);
  };

  const handleCloseRashiDialog = () => {
    setOpenRashi(false);
  };
  const handleOpenRashiDialog = () => {
    setOpenRashi(true);
  };

  const handleCloseGotraDialog = () => {
    setOpenGotra(false);
  };
  const handleOpenGotraDialog = () => {
    setOpenGotra(true);
  };

 
  const handleSubCasteSubmit = (e) => {
    e.preventDefault();
    const newSubCaste = e.target.elements.subCaste.value;
    setSubCaste(newSubCaste);
    handleCloseSubCasteDialog();
    render(true)
  };
  const handleNakshatraSubmit = (e) => {
    e.preventDefault();
    const newNakshatra = e.target.elements.nakshatra.value;
    setNakshatra(newNakshatra)
    handleCloseNakshatraDialog();
    render(true)
  };
  const handleRashiSubmit = (e) => {
    e.preventDefault();
    const newRashi = e.target.elements.rashi.value;
    setRashi(newRashi)
    handleCloseRashiDialog()
    render(true)
  };
  const handleGotraSubmit = (e) => {
    e.preventDefault();
    const newGotra = e.target.elements.gotra.value;
    setGotra(newGotra);
    handleCloseGotraDialog();
    render(true)
  };



  return (
    <Box className="familyreligious-main-container">
      <Stack className="familyreligious-stack-container">
        <Box className="first-table-data">
          <h4 className="table-one-heading"> Family</h4>
          <table className="table-1">
            <tbody>
              <tr>
                <th> {selectParentType} </th>
                <td>
                  {" "}
                  Rama{" "}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenFatherDialog}
                  />
                </td>
              </tr>
              <tr>
                <th>Sibling</th>
                <td>
                  No Sibling{" "}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenFatherDialog}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box className="second-table-data">
          <h4 className="table-two-heading">Religious Background</h4>
          <table className="table-2">
            <tbody>
              <tr>
                <th> Religion </th>
                <td> Hindu </td>
              </tr>
              <tr>
                <th> Caste </th>
                <td> Brahmin</td>
              </tr>
              <tr>
                <th> Sub Caste </th>
                <td>
                  {" "}
                 {subCaste}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenSubCasteDialog}
                  />
                </td>
              </tr>
              <tr>
                <th> Nakshatra </th>
                <td>
                 {nakshatra}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenNakshatraDialog}
                  />
                </td>
              </tr>
              <tr>
                <th> Rashi </th>
                <td>
                 {rashi}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenRashiDialog}
                  />
                </td>
              </tr>
              <tr>
                <th> Gotra </th>
                <td>
                  {gotra}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenGotraDialog}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Stack>
      {/* This Dialog is for Father and siblings Changes  */}
      <Dialog
        maxWidth="md"
        open={openFatherName}
        onClose={handleCloseFatherDialog}
        PaperProps={{
          style: {
            width: "35%",
            position: "fixed",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "0px",
            overflow: "none",
          },
        }}
      >
        <Box className="popmodify-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="popmodify-edit-popup-div1">
              <h3 className="popmodify-edit-popup-heading">
                Edit Family Details
              </h3>
              <DialogActions>
                <CancelIcon
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseFatherDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form
            className="popmodify-edit-div"
            // onSubmit={handlePinAddressSubmit}
          >
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="fatherName"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Select Guardian{" "}
              </label>
              <br />
              <Select
                size="small"
                className="select-father-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={selectParentType}
                onChange={(e) => setSelectParentType(e.target.value)}
              >
                <MenuItem value="Father">Father</MenuItem>
                <MenuItem value="Mother">Mother</MenuItem>
                <MenuItem value="Gurdian">Gurdian</MenuItem>
              </Select>
              <input
                type="text"
                id="fatherName"
                className="father-name-div"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
              />
            </Box>
            <Box className="table-edit-popup-div">
              <table className="table">
                <thead className="table-head">
                  <tr>
                    <th className="table-heading"> Brother </th>
                    <th className="table-heading">  Elder </th>
                    <th className="table-heading"> Younger </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <th className="table-heading-unmarried"> Unmarried </th>
                    <th className="table-heading-unmarried"> 
                     <input type="number" className="elder-brother-textfield"/>
                     </th>
                    <th className="table-heading-unmarried">
                    <input type="number"  className="younger-brother-textfield"/>
                     </th>
                  </tr>
                  <tr>
                    <th className="table-heading-married"> Married </th>
                    <th className="table-heading-married"> 
                    <input type="number" className="elder-brother-textfield"/>
                     </th>
                    <th className="table-heading-married"> 
                    <input type="number"  className="younger-brother-textfield"/>
                     </th>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Box className="table-two-edit-popup-div">
              <table className="table">
                <thead className="table-head">
                  <tr>
                    <th className="table-heading"> Sister </th>
                    <th className="table-heading">  Elder </th>
                    <th className="table-heading"> Younger </th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <th className="table-heading-unmarried"> Unmarried </th>
                    <th className="table-heading-unmarried"> 
                    <input type="number" className="elder-sister-textfield"/>
                     </th>
                    <th className="table-heading-unmarried"> 
                    <input type="number" className="younger-sister-textfield"/>
                     </th>
                  </tr>
                  <tr>
                    <th className="table-heading-married"> Married </th>
                    <th className="table-heading-married"> 
                    <input type="number" className="elder-sister-textfield"/>
                     </th>
                    <th className="table-heading-married"> 
                    <input type="number" className="younger-sister-textfield"/>
                     </th>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Divider sx={{marginTop : '10px'}}/>
            <Box className="edit-changes-button">
              <button className="close-button" onClick={handleCloseFatherDialog}> Close</button>
              <button type="submit" className="save-changes-button">
                {" "}
                Save Changes
              </button>
            </Box>
          </form>
        </Box>
      </Dialog>


      {/* This Dialog is for Sub Caste Changes  */}

      <Dialog
        maxWidth="md"
        open={openSubCaste}
        onClose={handleCloseSubCasteDialog}
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
        <Box className="popmodify-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="popmodify-edit-popup-div1">
              <h3 className="popmodify-edit-popup-heading">
              Update Sub Caste
              </h3>
              <DialogActions>
                <CancelIcon
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseSubCasteDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="popmodify-edit-div"
            onSubmit={handleSubCasteSubmit}
           >
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="subCaste"
                className="popmodify-edit-popup-div3-label"
              >
               Sub Caste
              </label>
              <br />
              <input
                type="text"
                id="subCaste"
                className="sub-caste-div"
                value={subCaste}
                onChange={(e) => setSubCaste(e.target.value)}
              />
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                 onClick={handleCloseSubCasteDialog}
              >
                {" "}
                Close
              </button>
              <button type="submit" className="save-changes-button">
                {" "}
                Save Changes
              </button>
            </Box>
          </form>
        </Box>
      </Dialog>


      {/* This Dialog is for Nakshatra Changes  */}
      <Dialog
        maxWidth="md"
        open={openNakshatra}
        onClose={handleCloseNakshatraDialog}
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
        <Box className="popmodify-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="popmodify-edit-popup-div1">
              <h3 className="popmodify-edit-popup-heading">
              Update Nakshatra
              </h3>
              <DialogActions>
                <CancelIcon
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseNakshatraDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="popmodify-edit-div"
            onSubmit={handleNakshatraSubmit}
           >
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="nakshatra"
                className="popmodify-edit-popup-div3-label"
              >
              Nakshatra
              </label>
              <br />
              <input
                type="text"
                id="nakshatra"
                className="sub-caste-div"
                value={nakshatra}
                onChange={(e) => setNakshatra(e.target.value)}
              />
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseNakshatraDialog}
              >
                {" "}
                Close
              </button>
              <button type="submit" className="save-changes-button">
                {" "}
                Save Changes
              </button>
            </Box>
          </form>
        </Box>
      </Dialog>
      {/* This Dialog is for Rashi Changes  */}
      <Dialog
        maxWidth="md"
        open={openRashi}
        onClose={handleCloseRashiDialog}
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
        <Box className="popmodify-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="popmodify-edit-popup-div1">
              <h3 className="popmodify-edit-popup-heading">
              Update Rashi
              </h3>
              <DialogActions>
                <CancelIcon
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseRashiDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="popmodify-edit-div"
            onSubmit={handleRashiSubmit}
           >
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="rashi"
                className="popmodify-edit-popup-div3-label"
              >
              Rashi
              </label>
              <br />
              <input
                type="text"
                id="rashi"
                className="sub-caste-div"
                value={rashi}
                onChange={(e) => setRashi(e.target.value)}
              />
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseRashiDialog}
              >
                {" "}
                Close
              </button>
              <button type="submit" className="save-changes-button">
                {" "}
                Save Changes
              </button>
            </Box>
          </form>
        </Box>
      </Dialog>
      {/* This Dialog is for Gotra Changes  */}
      <Dialog
        maxWidth="md"
        open={openGotra}
        onClose={handleCloseGotraDialog}
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
        <Box className="popmodify-edit-popup-list">
          <DialogContent maxWidth="md" style={{ padding: "0px" }}>
            <Box className="popmodify-edit-popup-div1">
              <h3 className="popmodify-edit-popup-heading">
              Update Sub Caste
              </h3>
              <DialogActions>
                <CancelIcon
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseGotraDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="popmodify-edit-div" 
           onSubmit={handleGotraSubmit}
          >
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="gotra"
                className="popmodify-edit-popup-div3-label"
              >
               Sub Caste
              </label>
              <br />
              <input
                type="text"
                id="gotra"
                className="sub-caste-div"
                value={gotra}
                onChange={(e) => setGotra(e.target.value)}
              />
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseGotraDialog}
              >
                {" "}
                Close
              </button>
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

export default FamilyReligious;
