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
import {Cancel , EditNote} from "@mui/icons-material";
import json from "../../../../../Jsondata/data.json";
import "./education.scss";

const Education = ({ render }) => {
  const data = json;
  const [degree, setDegree] = useState("B.E/B.Tech");
  const [openDegree, setOpenDegree] = useState(false);
  const [occupation, setOccupation] = useState("Software Engg");
  const [openOccupation, setOpenOccupation] = useState(false);
  const [Income, setIncome] = useState("16Lakh-18Lakh");
  const [openIncome, setOpenIncome] = useState(false);
  const [occupationCountry, setOccupationCountry] = useState("India");
  const [openOccupationCountry, setOpenOccupationCountry] = useState(false);

  const handleCloseDegreeDialog = () => {
    setOpenDegree(false);
  };
  const handleOpenDegreeDialog = () => {
    setOpenDegree(true);
  };

  const handleCloseOccupationCountryDialog = () => {
    setOpenOccupationCountry(false);
  };
  const handleOpenOccupationCountryDialog = () => {
    setOpenOccupationCountry(true);
  };

  const handleCloseOccupationDialog = () => {
    setOpenOccupation(false);
  };
  const handleOpenOccupationDialog = () => {
    setOpenOccupation(true);
  };

  const handleCloseIncomeDialog = () => {
    setOpenIncome(false);
  };
  const handleOpenIncomeDialog = () => {
    setOpenIncome(true);
  };

  const handleDegreeSubmit = (e) => {
    e.preventDefault();
    const newDegree = degree;
    setDegree(newDegree);
    handleCloseDegreeDialog();
    render(true);
  };

  const handleOccupationSubmit = (e) => {
    e.preventDefault();
    const newOccupation = occupation;
    setOccupation(newOccupation);
    handleCloseOccupationDialog();
    render(true);
  };
  const handleIncomeSubmit = (e) => {
    e.preventDefault();
    const newIncome = Income;
    setIncome(newIncome);
    handleCloseIncomeDialog();
    render(true);
  };
  const handleOccupationCountrySubmit = (e) => {
    e.preventDefault();
    const newOccupationCountry = occupationCountry;
    setOccupationCountry(newOccupationCountry);
    handleCloseOccupationCountryDialog();
    render(true);
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
                  <EditNote
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
                  <EditNote
                    className="edit-icon"
                    onClick={handleOpenOccupationDialog}
                  />
                </td>
              </tr>
              <tr>
                <th> Income Per Annum </th>
                <td>
                  {" "}
                  {Income}{" "}
                  <EditNote
                    className="edit-icon"
                    onClick={handleOpenIncomeDialog}
                  />
                </td>
              </tr>
              <tr>
                <th> Occupation Country </th>
                <td>
                  {occupationCountry}{" "}
                  <EditNote
                    className="edit-icon"
                    onClick={handleOpenOccupationCountryDialog}
                  />
                </td>
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
                <Cancel
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseDegreeDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="popmodify-edit-div" onSubmit={handleDegreeSubmit}>
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
                  <MenuItem value={item} key={index}>
                    {item}{" "}
                  </MenuItem>
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
                <Cancel
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseOccupationDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form
            className="popmodify-edit-div"
            onSubmit={handleOccupationSubmit}
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
                {data[3].occupationValues.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}{" "}
                  </MenuItem>
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
      {/* This Dialog is for Income Per Annum Changes  */}
      <Dialog
        maxWidth="md"
        open={openIncome}
        onClose={handleCloseIncomeDialog}
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
                Edit Income Per Annum
              </h3>
              <DialogActions>
                <Cancel
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseIncomeDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form className="popmodify-edit-div" onSubmit={handleIncomeSubmit}>
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Income Per Annum
              </label>
              <br />
              <Select
                size="small"
                className="select-father-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={Income}
                onChange={(e) => setIncome(e.target.value)}
              >
                {data[2].incomeValues.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}{" "}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseIncomeDialog}
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
      {/* This Dialog is for Occupation Country Changes  */}
      <Dialog
        maxWidth="md"
        open={openOccupationCountry}
        onClose={handleCloseOccupationCountryDialog}
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
                Edit Occupation Country
              </h3>
              <DialogActions>
                <Cancel
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseOccupationCountryDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form
            className="popmodify-edit-div"
            onSubmit={handleOccupationCountrySubmit}
          >
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Occupation Country
              </label>
              <br />
              <Select
                size="small"
                className="select-father-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={occupationCountry}
                onChange={(e) => setOccupationCountry(e.target.value)}
              >
                {data[4].qualificationValues.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}{" "}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Divider />
            <Box className="edit-changes-button">
              <button
                className="close-button"
                onClick={handleCloseOccupationCountryDialog}
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
