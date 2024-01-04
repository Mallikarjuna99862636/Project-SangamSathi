import React, { useState, useEffect } from "react";
import { Stack, TextField, Grid } from "@mui/material";
import "./thirdpage.scss";

const ThirdPage = ({ onThirdPageComplete }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mailid, setMailId] = useState("");
  const [number, setNumber] = useState("");
  const [isThirdPageComplete, setThirdPageComplete] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidNumber, setIsValidNumber] = useState(true);

  const handleMailIdChange = (e) => {
    const inputValue = e.target.value;
    setMailId(inputValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setThirdPageComplete(
      firstname.trim() !== "" &&
        lastname.trim() !== "" &&
        emailRegex.test(mailid.trim()) &&
        number.trim() !== "" &&
        number.trim().length === 10
    );
  }, [firstname, lastname, mailid, number]);

  useEffect(() => {
    onThirdPageComplete(isThirdPageComplete);
  }, [isThirdPageComplete, onThirdPageComplete]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleNumberChange = (event) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/\D/g, "");
    const isValid = numericValue.length === 10;

    setNumber(numericValue);
    setIsValidNumber(isValid);
  };

  return (
    <>
      <Stack spacing={4}>
        <Grid>
          <Grid>
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter first name"
              label="First Name (Bride or Groom)"
              className="login-textfield-1"
              value={firstname}
              onChange={handleFirstNameChange}
              required
              sx={{ m: 1 }}
            />
          </Grid>
          <Grid>
            <TextField
              className="login-textfield-2"
              sx={{ m: 1 }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter last name"
              label="Last Name (Bride or Groom)"
              value={lastname}
              onChange={handleLastNameChange}
              required
            />
          </Grid>
          <Grid>
            <TextField
              className="login-textfield-3"
              sx={{ m: 1 }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter email id"
              label="Email Id"
              value={mailid}
              onChange={handleMailIdChange}
              required
              type="email"
              error={!isValidEmail}
              helperText={!isValidEmail ? "Invalid email format" : ""}
            />
          </Grid>
          <Grid>
            <TextField
              className="login-textfield-4"
              sx={{ m: 1 }}
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter mobile no"
              label="Mobile No."
              value={number}
              onChange={handleNumberChange}
              required
              type="tel"
              error={!isValidNumber}
              helperText={
                !isValidNumber ? "Mobile number must have 10 digits" : ""
              }
            />
          </Grid>
        </Grid>
      </Stack>
    </>
  );
};

export default ThirdPage;
