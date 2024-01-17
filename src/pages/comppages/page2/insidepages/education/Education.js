import React, { useState } from "react";
import {
  Box,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import EditNoteIcon from "@mui/icons-material/EditNote";
import json from "../../../../../Jsondata/data.json";
import "./education.scss";

const Education = () => {
  const data = json;
  const [degree, setDegree] = useState("B.E/B.Tech");
  const [openDegree, setOpenDegree] = useState(false);
  const [occupation, setOccupation] = useState("Software Engg");
  const [openOccupation, setOpenOccupation] = useState(false);

  const handleCloseDegreeDialog = () => {
    setOpenDegree(false);
  };
  const handleOpenDegreeDialog = () => {
    setOpenDegree(true);
  };

  const handleCloseOccupationDialog = () => {
    setOpenOccupation(false);
  };
  const handleOpenOccupationDialog = () => {
    setOpenOccupation(true);
  };

  return (
    <Box className="education-main-container">
      <Stack className="education-stack-container">
        <Box className="education-first-table-data">
          <h4 className="education-table-one-heading">Eduction & Occupation</h4>
          <table className="education-table">
            <tbody>
              <tr>
                <th> Qualification </th>
                <td>
                  {" "}
                  {degree}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenDegreeDialog}
                  />
                </td>
              </tr>
              <tr>
                <th> Occupation </th>
                <td>
                  {" "}
                  {occupation}{" "}
                  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenOccupationDialog}
                  />
                </td>
              </tr>
              <tr>
                <th> Income Per Annum </th>
                <td>  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenOccupationDialog}
                  /></td>
              </tr>
              <tr>
                <th> Occupation Country </th>
                <td>  <EditNoteIcon
                    className="edit-icon"
                    onClick={handleOpenOccupationDialog}
                  /></td>
              </tr>
            </tbody>
          </table>
        </Box>
      </Stack>
      {/* This Dialog is for Qualification Changes  */}
      <Dialog
        maxWidth="md"
        open={openDegree}
        onClose={handleCloseDegreeDialog}
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
                Edit Qualification
              </h3>
              <DialogActions>
                <CancelIcon
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseDegreeDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form
            className="popmodify-edit-div"
            // onSubmit={handleLanguageSubmit}
          >
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Qualification{" "}
              </label>
              <br />
              <Select
                size="small"
                className="select-father-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
              >
                {data[4].qualificationValues.map((item, index) => (
                  <MenuItem value={index}>{item} </MenuItem>
                ))}
              </Select>
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseDegreeDialog}
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
      {/* This Dialog is for Occupation Changes  */}
      <Dialog
        maxWidth="md"
        open={openOccupation}
        onClose={handleCloseOccupationDialog}
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
                Edit Qualification
              </h3>
              <DialogActions>
                <CancelIcon
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseOccupationDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form
            className="popmodify-edit-div"
            // onSubmit={handleLanguageSubmit}
          >
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Qualification{" "}
              </label>
              <br />
              <Select
                size="small"
                className="select-father-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              >
                {data[4].qualificationValues.map((item, index) => (
                  <MenuItem value={index}>{item} </MenuItem>
                ))}
              </Select>
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseOccupationDialog}
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

export default Education;
