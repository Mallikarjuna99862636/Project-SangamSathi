import React, { useState } from "react";
import {TextField} from '@mui/material'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
 import {  Stack } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
const PersonalDetails = () => {
    
  const [date, setDate] = useState(null);
  const [parent, setParent] = useState(null);
  const [country, setCountry] = useState(null);
  const [gender, setGender] = useState(null);
  const [city, setCity] = useState(null);
  const [height, setHeight] = useState(null);
  

  const [age, setAge] = useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleParentChange = (event) => {
    setParent(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };



  return (
    <Stack spacing={3} direction="row" sx={{ padding: "5px 10px 10px 20px" }}>
      <Stack  spacing={1} direction="column">
      <label htmlFor="demo-select-small" style={{ textAlign : 'left' , fontWeight : '700' , color : 'white'}}>  Create Profile For </label>
        <FormControl sx={{ m: 1, minWidth: 500 , backgroundColor : 'white'}} size="small">
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
        <label htmlFor="demo-select-small" style={{ textAlign : 'left' , fontWeight : '700' , color : 'white'}}> Select Gender</label>
        <FormControl sx={{ m: 1, minWidth: 500 , backgroundColor : 'white' }} size="small">
          <InputLabel id="gender-label-value">
          Select Gender
          </InputLabel>
          <Select
            labelId="gender-label-id"
            id="gender-label-value"
            value={gender}
            label="Select Gender"
            onChange={handleGenderChange}
          >
            <MenuItem value="">
              <em>Select Gender</em> 
            </MenuItem>
            <MenuItem value={1}>Female</MenuItem>
            <MenuItem value={2}>Male</MenuItem>
          </Select>
        </FormControl>
        <label htmlFor="date-label" style={{ textAlign : 'left' , fontWeight : '700' , color : 'white'}}>  Date </label>
         <LocalizationProvider dateAdapter={AdapterDateFns} sx={{ height: '40px'}} >
           <DesktopDatePicker
            sx={{ m: 1, minWidth: 500  , backgroundColor : 'white' , }} 
            label="Date"
            id="date-label"
            value={date}
            onChange={setDate}
            renderInput={(params) => {
                   return   <TextField {...params} />
            } }
          />  
        </LocalizationProvider> 
        <label htmlFor="age-count" style={{ textAlign : 'left'  , fontWeight : '700' , color : 'white'}}> Age </label>
        <TextField  id="age-count" placeholder="Age" size="small" sx={{  backgroundColor : 'white'}}/>
        <label htmlFor="age-count" style={{ textAlign : 'left'  , fontWeight : '700' , color : 'white'}}> Name of Parent </label>
        <FormControl sx={{ m: 1, minWidth: 500 , backgroundColor : 'white' }} size="small">
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
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={1}>Father</MenuItem>
            <MenuItem value={2}>Mother</MenuItem>
            <MenuItem value={3}>Gurdian</MenuItem>
          </Select>
        </FormControl>
        <TextField  id="user-name" placeholder="Please Enter Name" size="small" sx={{  backgroundColor : 'white'}}/>
        <label htmlFor="user-address" style={{ textAlign : 'left' , marginTop : '10px' , fontWeight : '700' , color : 'white'}}> Address </label>
        <TextField  id="user-address" placeholder="Please Enter Address" size="middle" sx={{ backgroundColor : 'white'}}/>
      </Stack>
      
      <Stack  spacing={1} direction="column">
      <label htmlFor="country-data" style={{ textAlign : 'left' , padding : '0' ,  fontWeight : '700' , color : 'white'}}> Country </label>
        <FormControl sx={{ m: 1, minWidth: 500 , backgroundColor : 'white' }} size="small">
           <InputLabel id="country-label">
           Select The Country
          </InputLabel> 
          <Select
            labelId="country-data-id"
            id="country-data"
            value={country}
            label="India"
            onChange={handleCountryChange} 
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={1}>India</MenuItem>
            <MenuItem value={2}>USA</MenuItem>
            <MenuItem value={3}>Canada</MenuItem>
          </Select>
        </FormControl>
      <label htmlFor="state-data" style={{ textAlign : 'left' , padding : '0' ,  fontWeight : '700' , color : 'white'}}> Select State </label>
        <FormControl sx={{ m: 1, minWidth: 500 , backgroundColor : 'white' }} size="small">
           <InputLabel id="state-label">
           Select State
          </InputLabel>  
          <Select
            labelId="state-data-id"
            id="state-data"
            value={country}
            label="India"
            onChange={handleCountryChange} 
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={1}>India</MenuItem>
            <MenuItem value={2}>USA</MenuItem>
            <MenuItem value={3}>Canada</MenuItem>
          </Select>
        </FormControl>
      <label htmlFor="city-data" style={{ textAlign : 'left' , padding : '0' ,  fontWeight : '700' , color : 'white'}}> Select City </label>
        <FormControl sx={{ m: 1, minWidth: 500 , backgroundColor : 'white'}} size="small">
           <InputLabel id="city-label">
           Select State
          </InputLabel>  
          <Select
            labelId="city-data-id"
            id="city-data"
            value={city}
            label="Bengalore"
            onChange={handleCityChange} 
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={1}>Bengalore</MenuItem>
            <MenuItem value={2}>Bellary</MenuItem>
            <MenuItem value={3}>Mysore</MenuItem>
          </Select>
        </FormControl>
        <label htmlFor="user-pincode" style={{ textAlign : 'left' , marginTop : '10px' , fontWeight : '700' , color : 'white'}}> Pin Code </label>
        <TextField  id="user-pincode" placeholder="Please Enter Pincode" size="small" sx={{ backgroundColor : 'white' }}/>
       <label htmlFor="height-data" style={{ textAlign : 'left' , padding : '0' ,  fontWeight : '700' , color : 'white'}}> Select City </label>
        <FormControl sx={{ m: 1, minWidth: 500  , backgroundColor : 'white' }} size="small">
           <InputLabel id="height-label">
           Select State
          </InputLabel>  
          <Select
            labelId="height-data-id"
            id="height-data"
            value={height}
            label="Bengalore"
            onChange={handleHeightChange} 
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={1}>4.1</MenuItem>
            <MenuItem value={2}>4.2</MenuItem>
            <MenuItem value={3}>4.3</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default PersonalDetails;
