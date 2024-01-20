import React from "react";
import { Box, Stack, TextField, styled } from "@mui/material";

const TextFields = styled(TextField)`
  width: 50%;
  font-size: 16px;
  background-color: white;
  margin-top: 2px;
`;

const Label = styled("label")`
  && {
    text-align: left;
    font-weight: 700;
    color: white;
    margin: 0;
  }
`;

const LoginDetails = () => {
  return (
    <Box>
      <Stack
        spacing={2}
        direction="column"
        sx={{ marginLeft: "35%", padding: "20px" }}
      >
        <Label htmlFor="age-count">First Name (Bride or Groom)</Label>
        <TextFields
          id="outlined-basic"
          variant="outlined"
          placeholder="Age"
          size="small"
          required
        />
        <Label htmlFor="age-count">Last Name (Bride or Groom)</Label>
        <TextFields
          id="outlined-basic"
          variant="outlined"
          placeholder="Age"
          size="small"
          required
        />
        <Label htmlFor="age-count">Email Id</Label>
        <TextFields
          id="outlined-basic"
          variant="outlined"
          placeholder="Age"
          size="small"
          required
          type="email"
        />
        <Label htmlFor="age-count">Mobile No.</Label>
        <TextFields
          id="outlined-basic"
          variant="outlined"
          placeholder="Age"
          size="small"
          required
          type="number"
        />
      </Stack>
    </Box>
  );
};

export default LoginDetails;
