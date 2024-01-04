import React, { useState , useEffect} from "react";
import {
  Grid,
  Stack,
  Box,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import "./secondpage.scss";
import jsonData  from '../../../Jsondata/data.json'

const SecondPage = ({ onSecondPageComplete }) => {
  const datas = jsonData;
  console.log(datas , "Json datas")
  const religion = "Hindu";
  const [education, setEducation] = useState(null);
  const [ocupation, setOcupation] = useState(null);
  const [income, setIncome] = useState(null);
  const [country, setCountry] = useState(null);
  const [marrital, setMarrital] = useState(null);
  const [laungauge, setLaungauge] = useState(null);
  const [caste, setCaste] = useState(null);
  const [isSecondPageComplete, setIsSecondPageComplete] = useState(false);


  useEffect(() => {
    setIsSecondPageComplete(
      education !== null &&
      ocupation !== null &&
      income !== null &&
      country !== null &&
      marrital !== null &&
      laungauge !== null &&
      caste !== null
    );
  }, [education, ocupation, income, country, marrital, laungauge, caste]);

  // Notify parent component about the completion status
  useEffect(() => {
    onSecondPageComplete(isSecondPageComplete);
  }, [isSecondPageComplete, onSecondPageComplete]);

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleCasteChange = (event) => {
    setCaste(event.target.value);
  };

  const handleLaungaugeChange = (event) => {
    setLaungauge(event.target.value);
  };

  const handleIncomeChange = (event) => {
    setIncome(event.target.value);
  };

  const handleMarritalChange = (event) => {
    setMarrital(event.target.value);
  };

  const handleOcupationChange = (event) => {
    setOcupation(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <>
      <Stack spacing={2} direction="row">
        <Box>
          <Grid>
            <Grid>
              {/* <label
          htmlFor="caste-data-id"
          style={{
            textAlign: "left",
            padding: "0",
            fontWeight: "700",
            color: "white",
          }}
        >
          {" "}
          Caste{" "}
        </label> */}
              <FormControl
              className="social-formcontrol-1"
                size="small"
              >
                <InputLabel id="educationfield-id">
                  Select Eduction Qualification
                </InputLabel>
                <Select
                  labelId="educationfield-label"
                  id="educationfield-id"
                  label=" Select Eduction Qualification"
                  value={education}
                  onChange={handleEducationChange}
                >
                  <MenuItem value="">
                    <em>Create Profile For</em>
                  </MenuItem>
                  {
                    datas[4].qualificationValues.map((item,index)=>(
                      <MenuItem value={index} >{item} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
               className="social-formcontrol-2"
               sx={{ m : 1}}
                size="small"
              >
                <InputLabel id="gender-label-value">
                  Select Occupation
                </InputLabel>
                <Select
                  labelId="occupation-label-id"
                  id="occupation-label-value"
                  label="Select Occupation"
                  value={ocupation}
                  onChange={handleOcupationChange}
                >
                  {
                    datas[3].occupationValues.map((item,index)=>(
                      <MenuItem value={index} >{item} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
               className="social-formcontrol-3"
               sx={{ m : 1}}
                size="small"
              >
                <InputLabel id="income-label">Select Income</InputLabel>
                <Select
                  labelId="income-label"
                  id="income-id"
                  label="Select Income"
                  value={income}
                  onChange={handleIncomeChange}
                >
                   {
                    datas[2].incomeValues.map((item,index)=>(
                      <MenuItem value={index} >{item} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
               className="social-formcontrol-4"
               sx={{ m : 1}}
                size="small"
              >
                <InputLabel id="country-label">Select Country</InputLabel>
                <Select
                  labelId="country-label"
                  id="country-label-id"
                  label="Select Country"
                  value={country}
                  onChange={handleCountryChange}
                >
                  <MenuItem value={1}>Father</MenuItem>
                  <MenuItem value={2}>Mother</MenuItem>
                  <MenuItem value={3}>Gurdian</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>

        {/* Second Box Start Here */}

        <Box>
          <Grid>
            <Grid>
              <FormControl
               className="social-formcontrol-5"
               sx={{ m : 1}}
                size="small"
              >
                <InputLabel id="marrital-id">Select Marrital</InputLabel>
                <Select
                  labelId="marrital-data-label"
                  id="marrital-id"
                  value={marrital}
                  label="Select Marrital"
                  onChange={handleMarritalChange}
                >
                  {
                    datas[6].marritalStatus.map((item,index)=>(
                      <MenuItem value={index} >{item} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
               className="social-formcontrol-6"
               sx={{ m : 1}}
                size="small"
              >
                <InputLabel id="tounge-data-id">Select Tounge</InputLabel>
                <Select
                  labelId="tounge-data-label"
                  id="tounge-data-id"
                  label="Select Tounge"
                  value={laungauge}
                  onChange={handleLaungaugeChange}
                 
                >
                  {
                    datas[1].languageValues.map((item,index)=>(
                      <MenuItem value={index} >{item} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>

              <TextField
                required
                id="city-data-id"
                placeholder="Select your religion "
                size="small"
                value={religion}
                className="social-textfield-1"
               
              />
            </Grid>
            <Grid>
              <FormControl
               className="social-formcontrol-7"
               sx={{ m : 1}}
                size="small"
              >
                <InputLabel id="caste-data-id">Select Caste</InputLabel>
                <Select
                  labelId="caste-data-label"
                  id="caste-data-id"
                  value={caste}
                  label="Select Caste"
                  onChange={handleCasteChange}
                >
                   {
                    datas[0].casteValues.map((item,index)=>(
                      <MenuItem value={index} >{item} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default SecondPage;
