import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import "./lifestyle.scss";
import CancelIcon from "@mui/icons-material/Cancel";
import EditNoteIcon from "@mui/icons-material/EditNote";
import jsondata from '../../../../../Jsondata/data.json'

const LifeStyle = () => {
  const values = jsondata;
  const [openDialog, setOpenDialog] = useState(false);
  const [drink, setDrink] = useState("No");
  const [smoke, setSmoke] = useState("No");
  const [diet, setDiet] = useState("Veg");
  const [sunsign, setSunsign] = useState("Aries");
  const [bloodgroup, setBloodgroup] = useState("A+");
  const [bodyType, setBodyType] = useState("Average");
  const [skinType, setSkinType] = useState("Fair");

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Box className="lifestyle-main-container">
      <Stack className="lifestyle-stack-container">
        <Box className="lifestyle-first-table-data">
          <h4 className="lifestyle-table-one-heading">Life Style</h4>
          <table className="lifestyle-table-1">
            <tbody>
              <tr>
                <th> Drink </th>
                <td> {drink} </td>
              </tr>
              <tr>
                <th> Smoke </th>
                <td> {smoke} </td>
              </tr>
              <tr>
                <th> Diet </th>
                <td> {diet} </td>
              </tr>
              <tr>
                <th> Sunsign </th>
                <td> {sunsign} </td>
              </tr>

              <tr>
                <th> Bloodgroup </th>
                <td> {bloodgroup}</td>
              </tr>
            </tbody>
          </table>
        </Box>
        <Box className="lifestyle-second-table-data">
          <h4 className="lifestyle-table-two-heading">Appearence</h4>
          <table className="lifestyle-table-2">
            <tbody>
              <tr>
                <th> Body Type </th>
                <td> {bodyType} </td>
              </tr>
              <tr>
                <th> Skin Type </th>
                <td> {skinType}</td>
              </tr>
            </tbody>
          </table>
          <Box className="icon-div-edit">
            <EditNoteIcon onClick={handleOpenDialog} className="edit-icon" />
          </Box>
        </Box>
      </Stack>
      {/* This Dialog is for All Items Changes  */}
      <Dialog
        maxWidth="md"
        open={openDialog}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            width: "35%",
            position: "fixed",
            top: "40%",
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
                Life Style & Appearence
              </h3>
              <DialogActions>
                <CancelIcon
                  className="popmodify-edit-cancel-icon"
                  onClick={handleCloseDialog}
                />
              </DialogActions>
            </Box>
          </DialogContent>
          <form
            className="popmodify-edit-div"
            //  onSubmit={handleDegreeSubmit}
          >
            {/* This Dialog is for Drink Changes  */}

            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Drink{" "}
              </label>
              <Select
                size="small"
                className="select-drink-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={drink}
                onChange={(e) => setDrink(e.target.value)}
              >
               
              <MenuItem value="Yes"> Yes </MenuItem>
              <MenuItem value="No"> No </MenuItem>
              <MenuItem value="Occasionally" > Occasionally </MenuItem>
                
              </Select>
            </Box>
            {/* This Dialog is for Smoke Changes  */}
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Smoke{" "}
              </label>
              <Select
                size="small"
                className="select-smoke-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={smoke}
                onChange={(e) => setSmoke(e.target.value)}
              >
               <MenuItem value="Yes"> Yes </MenuItem>
              <MenuItem value="No"> No </MenuItem>
              <MenuItem value="Occasionally" > Occasionally </MenuItem>
              </Select>
            </Box>
            {/* This Dialog is for Diet Changes  */}
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Diet{" "}
              </label>
              <Select
                size="small"
                className="select-diet-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
              >
                <MenuItem value="Veg"> Veg </MenuItem>
              <MenuItem value="Non-Veg"> Non-Veg </MenuItem>
              <MenuItem value="Occasionally Non-Veg" > Occasionally Non-Veg </MenuItem>
              </Select>
            </Box>
            {/* This Dialog is for Sunsign Changes  */}
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Sunsign
              </label>
              <Select
                size="small"
                className="select-sunsign-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={sunsign}
                onChange={(e) => setSunsign(e.target.value)}
              >
                {values[7].sunsignStatus.map((item, index) => (
                  <MenuItem value={item} key={index}>{item} </MenuItem>
                ))} 
              </Select>
            </Box>
            {/* This Dialog is for  Blood Group Changes  */}
            <Box className="popmodify-edit-popup-div3">
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Blood Group
              </label>
              <Select
                size="small"
                className="select-bloodgroup-div"
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={bloodgroup}
                onChange={(e) => setBloodgroup(e.target.value)}
              >
                 {values[8].bloodGroupStatus.map((item, index) => (
                  <MenuItem value={item} key={index}>{item} </MenuItem>
                ))} 
              </Select>
            </Box>

            {/* This Dialog is for  Skintone Changes  */}
         
            <Box
              className="popmodify-edit-popup-div3"
              sx={{ display: "flex", justifyContent: "space-evenly" }}
            >
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
              >
                {" "}
                Skintone
              </label>
              <Stack direction="row" spacing={2}>
                <Box className="radio-list-div">
                  <input
                    type="radio"
                    id="fair"
                    name="skinTone"
                    value="Fair"
                    className="radio-input"
                  />
                  <label htmlFor="fair">Fair</label>

                  <input
                    type="radio"
                    id="very-fair"
                    name="skinTone"
                    value="Very Fair"
                  />
                  <label htmlFor="very-fair">Very Fair</label>

                  <input
                    type="radio"
                    id="wheatish"
                    name="skinTone"
                    value="Wheatish"
                  />
                  <label htmlFor="wheatish">Wheatish</label>

                  <input type="radio" id="dark" name="skinTone" value="Dark" />
                  <label htmlFor="dark">Dark</label>
                </Box>
              </Stack>
            </Box>
            
            {/* This Dialog is for  Body Type Changes  */}
            
            <Box
              className="popmodify-edit-popup-div3"
              sx={{ display: "flex", justifyContent: "space-between"  }}
            >
              <label
                htmlFor="language"
                className="popmodify-edit-popup-div3-label"
                 >
                {" "}
                Body Type
              </label>
              <Stack direction="row" spacing={2}>
                <Box className="radio-list-div">
                  <input
                    type="radio"
                    id="average"
                    name="bodyType"
                    value="Average"
                    className="radio-input"
                  />
                  <label htmlFor="average">Average</label>

                  <input
                    type="radio"
                    id="slim"
                    name="bodyType"
                    value="Slim"
                  />
                  <label htmlFor="slim">Slim</label>

                  <input
                    type="radio"
                    id="athletic"
                    name="bodyType"
                    value="Athletic"
                  />
                  <label htmlFor="athletic">Athletic</label>

                  <input type="radio" id="heavy" name="bodyType" value="Dark" />
                  <label htmlFor="heavy">Heavy</label>
                </Box>
              </Stack>
            </Box>

           
            <Divider />
            <Box className="edit-changes-button">
              <button className="close-button" onClick={handleCloseDialog}>
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

export default LifeStyle;
