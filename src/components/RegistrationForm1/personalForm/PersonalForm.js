import React, { useState , useEffect } from "react";
import {
  Grid,
  Box,
  Stack,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField
} from "@mui/material";
import json from "../../../Jsondata/data.json";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "./personalform.scss";

const PersonalForm = ({ onFirstPageComplete }) => {
  const data = json;
  const [parent, setParent] = useState(null);
  const [age, setAge] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [country, setCountry] = useState(null);
  const [state, setstate] = useState(null);
  const [city, setCity] = useState(null);
  const [height, setHeight] = useState(null);
  const [pincode, setPincode] = useState(null);
  const [isFirstPageComplete, setIsFirstPageComplete] = useState(false);
  const [isPincode, setisPincode] = useState(true);
  const [userName, setUserName] = useState('');
  const [userAddress, setUserAddress] = useState('');


  useEffect(() => {
    setIsFirstPageComplete(
      userName !== "" &&
      userAddress !== "" &&
        age !== "" &&
        selectedDate !== null &&
        parent !== null &&
        height !== null &&
        country !== null &&
        state !== null &&
        city !== null &&
        pincode.trim().length === 6
    );
  }, [age, selectedDate, parent, height, country, state, city, pincode,userName , userAddress]);

  useEffect(() => {
    onFirstPageComplete(isFirstPageComplete);
  }, [isFirstPageComplete, onFirstPageComplete]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const calculateAge = (birthdate) => {
    if (!birthdate) return null;

    const today = new Date();
    const birthDate = new Date(birthdate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handlePincodeChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    const isValid = numericValue.length === 6;

    setPincode(numericValue);
    setisPincode(isValid);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleStateChange = (event) => {
    setstate(event.target.value);
  };

  const handleParentChange = (event) => {
    setParent(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <Stack spacing={1} direction="row" className="main-stack-container">
        <Box>
          <Grid>
            <Grid>
              <FormControl className="formcontrol-1" size="small">
                <InputLabel id="demo-select-small-label">
                  Create Profile For
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Create Profile For"
                  onChange={handleAgeChange}
                  
                >
                  <MenuItem value="">
                    <em>Create Profile For</em>
                  </MenuItem>
                  <MenuItem value={1}>Self</MenuItem>
                  <MenuItem value={2}>Brother</MenuItem>
                  <MenuItem value={3}>Sister</MenuItem>
                  <MenuItem value={3}>Son</MenuItem>
                  <MenuItem value={3}>Daughter</MenuItem>
                  <MenuItem value={3}>Relative</MenuItem>
                  <MenuItem value={3}>Friend</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <br />
            <Grid>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  className="date-picker-1"
                  label="Date of Birth"
                  id="date-label"
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => {
                    return <TextField {...params} />;
                  }}
                />
              </LocalizationProvider>
            </Grid>
            <Grid>
              <TextField
                value={calculateAge(selectedDate)}
                InputProps={{
                  readOnly: true,
                }}
                required
                id="age-count"
                placeholder="Age"
                size="small"
                className="per-textfield-1"
              />
            </Grid>
            <Grid>
              <FormControl className="formcontrol-2" size="small">
                <InputLabel id="demo-select-small-label">
                  Select Parents
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={parent}
                  label="Select Parents"
                  onChange={handleParentChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={1}>Father</MenuItem>
                  <MenuItem value={2}>Mother</MenuItem>
                  <MenuItem value={3}>Gurdian</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
               value={userName}
               onChange={(e)=>setUserName(e.target.value)}
                required
                id="user-name"
                placeholder="Please enter name"
                size="small"
                variant="outlined"
                label="User Name"
                className="per-textfield-2"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              value={userAddress}
               onChange={(e)=>setUserAddress(e.target.value)}
                required
                id="user-address"
                placeholder="Please Enter Address"
                size="middle"
                variant="outlined"
                label="User Address"
                className="per-textfield-3"
              />
            </Grid>
          </Grid>
        </Box>

        {/* Second Box Items  */}

        <Box>
          <Grid>
            <Grid>
              <FormControl className="formcontrol-3" size="small">
                <InputLabel id="country-data-id">Select The Country</InputLabel>
                <Select
                  labelId="country-data-id"
                  id="country-data"
                  value={country}
                  label="Select The Country"
                  onChange={handleCountryChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={1}>India</MenuItem>
                  <MenuItem value={2}>USA</MenuItem>
                  <MenuItem value={3}>Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl className="formcontrol-4" size="small">
                <InputLabel id="state-label">Select State</InputLabel>
                <Select
                  labelId="state-data-id"
                  id="state-data"
                  value={state}
                  label="Select State"
                  onChange={handleStateChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={1}>India</MenuItem>
                  <MenuItem value={2}>USA</MenuItem>
                  <MenuItem value={3}>Canada</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl className="formcontrol-5" size="small">
                <InputLabel id="city-label">Select City</InputLabel>
                <Select
                  labelId="city-data-id"
                  id="city-data"
                  value={city}
                  label="Select City"
                  onChange={handleCityChange}
                >
                  <MenuItem value=""></MenuItem>
                  <MenuItem value={1}>Bengalore</MenuItem>
                  <MenuItem value={2}>Bellary</MenuItem>
                  <MenuItem value={3}>Mysore</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <TextField
              value={pincode}
              onChange={handlePincodeChange}
                id="user-pincode"
                placeholder="Please Enter Pincode"
                size="small"
                variant="outlined"
                label="Enter Pincode"
                className="per-textfield-4"
                type="number"
                error={!isPincode}
                helperText={
                  !isPincode ? "Please enter a 6-digit pincode" : ''
                }
              />
            </Grid>
            <Grid>
              <FormControl className="formcontrol-6" size="small">
                <InputLabel id="height-label">Select Height</InputLabel>
                <Select
                  labelId="height-data-id"
                  id="height-data"
                  value={height}
                  label="Select Height"
                  onChange={handleHeightChange}
                >
                  {data[5].heightValues.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default PersonalForm;
