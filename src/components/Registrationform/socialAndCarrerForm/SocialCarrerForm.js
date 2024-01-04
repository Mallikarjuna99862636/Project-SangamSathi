import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Stack } from "@mui/material";
const SocialCarrerForm = () => {
  const [education, setEducation] = useState(null);
  const [ocupation, setOcupation] = useState(null);
  const [income, setIncome] = useState(null);
  const [country, setCountry] = useState(null);
  const [marrital, setMarrital] = useState(null);
  const [laungauge, setLaungauge] = useState(null);
  const [religion, setReligion] = useState(null);
  const [caste, setCaste] = useState(null);

  const handleEducationChange = (event) => {
    setEducation(event.target.value);
  };

  const handleCasteChange = (event) => {
    setCaste(event.target.value);
  };

  const handleReligionChange = (event) => {
    setReligion(event.target.value);
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
    <Stack spacing={3} direction="row" sx={{ padding: "5px 10px 10px 20px" }}>
      <Stack spacing={1} direction="column">
        <label
          htmlFor="educationfield-id"
          style={{ textAlign: "left", fontWeight: "700", color: "white" }}
        >
          {" "}
          Educational Qualification{" "}
        </label>
        <FormControl
          sx={{ m: 1, minWidth: 500, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="educationfield-id">Select Qualification</InputLabel>
          <Select
            labelId="educationfield-label"
            id="educationfield-id"
            value={education}
            onChange={handleEducationChange}
          >
            <MenuItem value="">
              <em>Create Profile For</em>
            </MenuItem>
            <MenuItem value={1}>Diploma </MenuItem>
            <MenuItem value={2}>BE</MenuItem>
            <MenuItem value={3}>2nd Pu</MenuItem>
            <MenuItem value={3}>Degree</MenuItem>
            <MenuItem value={3}>BMA</MenuItem>
            <MenuItem value={3}>CA</MenuItem>
          </Select>
        </FormControl>
        <label
          htmlFor="occupation-label-value"
          style={{ textAlign: "left", fontWeight: "700", color: "white" }}
        >
          {" "}
          Occupation
        </label>
        <FormControl
          sx={{ m: 1, minWidth: 500, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="gender-label-value">Select Occupation</InputLabel>
          <Select
            labelId="occupation-label-id"
            id="occupation-label-value"
            value={ocupation}
            onChange={handleOcupationChange}
          >
            <MenuItem value="">
              <em>Select Gender</em>
            </MenuItem>
            <MenuItem value={1}>Female</MenuItem>
            <MenuItem value={2}>Male</MenuItem>
          </Select>
        </FormControl>
        <label
          htmlFor="income-id"
          style={{ textAlign: "left", fontWeight: "700", color: "white" }}
        >
          {" "}
          Income Per Annum{" "}
        </label>
        <FormControl
          sx={{ m: 1, minWidth: 500, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="income-id">Select Income</InputLabel>
          <Select
            labelId="income-label"
            id="income-id"
            value={income}
            onChange={handleIncomeChange}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Father</MenuItem>
            <MenuItem value={2}>Mother</MenuItem>
            <MenuItem value={3}>Gurdian</MenuItem>
          </Select>
        </FormControl>
        <label
          htmlFor="country-label-id"
          style={{ textAlign: "left", fontWeight: "700", color: "white" }}
        >
          {" "}
          Occupation Country{" "}
        </label>
        <FormControl
          sx={{ m: 1, minWidth: 500, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="country-label-id">Select Country</InputLabel>
          <Select
            labelId="country-label"
            id="country-label-id"
            value={country}
            onChange={handleCountryChange}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Father</MenuItem>
            <MenuItem value={2}>Mother</MenuItem>
            <MenuItem value={3}>Gurdian</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Stack spacing={1} direction="column">
        <label
          htmlFor="marrital-id"
          style={{
            textAlign: "left",
            padding: "0",
            fontWeight: "700",
            color: "white",
          }}
        >
          {" "}
          Marrital Status{" "}
        </label>
        <FormControl
          sx={{ m: 1, minWidth: 500, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="marrital-id">Select Marrital</InputLabel>
          <Select
            labelId="marrital-data-label"
            id="marrital-id"
            value={marrital}
            label="India"
            onChange={handleMarritalChange}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>India</MenuItem>
            <MenuItem value={2}>USA</MenuItem>
            <MenuItem value={3}>Canada</MenuItem>
          </Select>
        </FormControl>
        <label
          htmlFor="tounge-data-id"
          style={{
            textAlign: "left",
            padding: "0",
            fontWeight: "700",
            color: "white",
          }}
        >
          {" "}
          Mother Tounge{" "}
        </label>
        <FormControl
          sx={{ m: 1, minWidth: 500, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="tounge-data-id">Select Tounge</InputLabel>
          <Select
            labelId="tounge-data-label"
            id="tounge-data-id"
            value={laungauge}
            onChange={handleLaungaugeChange}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>India</MenuItem>
            <MenuItem value={2}>USA</MenuItem>
            <MenuItem value={3}>Canada</MenuItem>
          </Select>
        </FormControl>
        <label
          htmlFor="city-data-id"
          style={{
            textAlign: "left",
            padding: "0",
            fontWeight: "700",
            color: "white",
          }}
        >
          {" "}
          Religion{" "}
        </label>
        <FormControl
          sx={{ m: 1, minWidth: 500, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="city-data-id">Select Religion</InputLabel>
          <Select
            labelId="religion-data-label"
            id="city-data-id"
            value={religion}
            onChange={handleReligionChange}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>Bengalore</MenuItem>
            <MenuItem value={2}>Bellary</MenuItem>
            <MenuItem value={3}>Mysore</MenuItem>
          </Select>
        </FormControl>
        <label
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
        </label>
        <FormControl
          sx={{ m: 1, minWidth: 500, backgroundColor: "white" }}
          size="small"
        >
          <InputLabel id="caste-data-id">Select Caste</InputLabel>
          <Select
            labelId="caste-data-label"
            id="caste-data-id"
            value={caste}
            label="Bengalore"
            onChange={handleCasteChange}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>4.1</MenuItem>
            <MenuItem value={2}>4.2</MenuItem>
            <MenuItem value={3}>4.3</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default SocialCarrerForm;
