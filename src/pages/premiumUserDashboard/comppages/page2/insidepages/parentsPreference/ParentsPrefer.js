import React, { useState  } from "react";
import {
  Grid,
  Stack,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import "./parentsprefer.scss";
import jsonData  from '../../../../../../Jsondata/data.json'

const ParentsPrefer = () => {
  const datas = jsonData;

  const [caste, setCaste] = useState(null);
  const [fromAge, setFromAge] = useState(null);
  const [toAge, setToAge] = useState(null);
  const [fromHeight, setFromHeight] = useState(null);
  const [toHeight, seToHeight] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [marrital, setMarrital] = useState(null);
  const [education, setEducation] = useState(null);



  return (
    <Box className="parentsprefer-main-container">
      <Stack spacing={2} direction="row">
        <Box>
          <Grid>
            <Grid>
              <FormControl
              className="social-formcontrol-1"
                size="middle"
              >
                <InputLabel id="caste-field-id">
                Caste Preference 
                </InputLabel>
                <Select
                  labelId="caste-field-label"
                  id="caste-field-id"
                  label=" Caste Preference"
                  value={caste}
                  onChange={(e)=>setCaste(e.target.value)}
                >
                  {
                    datas[0].casteValues.map((item,index)=>(
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
               size="middle"
              >
                <InputLabel id="age-label-value">
                Age Preference (From) 
                </InputLabel>
                <Select
                  labelId="age-label-id"
                  id="age-label-value"
                  label=" Age Preference (From) "
                  value={fromAge}
                  onChange={(e)=>setFromAge(e.target.value)}
                >
                  {
                    datas[9].minAge.map((item,index)=>(
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
                size="middle"
              >
                <InputLabel id="height-label">Height Preference (From)</InputLabel>
                <Select
                  labelId="height-label"
                  id="height-id"
                  label="Height Preference (From)"
                  value={fromHeight}
                  onChange={(e)=>setFromHeight(e.target.value)}
                >
                   {
                    datas[5].heightValues.map((item,index)=>(
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
                size="middle"
              >
                <InputLabel id="occupation-label">Occupation Country</InputLabel>
                <Select
                  labelId="occupation-label"
                  id="occupation-label-id"
                  label="Occupation Country"
                  value={occupation}
                  onChange={(e)=> setOccupation(e.target.value)}
                >
                  <MenuItem value={1}>India</MenuItem>
                  <MenuItem value={2}>China</MenuItem>
                  <MenuItem value={3}>USA</MenuItem>
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
                size="middle"
              >
                <InputLabel id="education-id">Education Preference</InputLabel>
                <Select
                  labelId="education-data-label"
                  id="education-id"
                  value={education}
                  label="Education Preference"
                  onChange={(e)=> setEducation(e.target.value)}
                >
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
               className="social-formcontrol-6"
               sx={{ m : 1}}
                size="middle"
              >
                <InputLabel id="age-data-id">Age Preference (To)</InputLabel>
                <Select
                  labelId="age-data-label"
                  id="age-data-id"
                  label="Age Preference (To)"
                  value={toAge}
                  onChange={(e)=>setToAge(e.target.value)}
                 
                >
                  {
                    datas[9].minAge.map((item,index)=>(
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
                size="middle"
              >
                <InputLabel id="height-data-id">Height Preference (To)</InputLabel>
                <Select
                  labelId="height-data-label"
                  id="height-data-id"
                  label="Height Preference (To)"
                  value={toHeight}
                  onChange={(e)=>seToHeight(e.target.value)}
                 
                >
                  {
                    datas[5].heightValues.map((item,index)=>(
                      <MenuItem value={index} >{item} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <FormControl
               className="social-formcontrol-7"
               sx={{ m : 1}}
                size="middle"
              >
                <InputLabel id="marrital-data-id">Marrital Status </InputLabel>
                <Select
                  labelId="marrital-data-label"
                  id="marrital-data-id"
                  label="Marrital Status "
                  value={marrital}
                  onChange={(e)=>setMarrital(e.target.value)}
                >
                   {
                    datas[6].marritalStatus.map((item,index)=>(
                      <MenuItem value={index} >{item} </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Stack>
        <Box className="buttons-class-div">
         <button className="submit-button"> Submit</button>
         <button className="reset-button"> Reset</button>
       </Box> 
    </Box>
  );
};

export default ParentsPrefer;
