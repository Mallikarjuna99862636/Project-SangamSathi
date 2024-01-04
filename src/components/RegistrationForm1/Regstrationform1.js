import React, { useState } from "react";
import "./registration.scss";
import {
  Box,
  Container,
  Paper,
  Stepper,
  StepLabel,
  Button,
  Typography,
  Step
} from "@mui/material";
import logo5 from "../../assets/images/sangam-sathi-logo.png";
import FirstPage from "./personalForm/FirstPage";
import SecondPage from "./socialAndCarrer/SecondPage";
import ThirdPage from "./loginDetails1/ThirdPage";

const steps = [
  { label1: "Personal", label2: "First step description" },
  { label1: "Social & Carrer", label2: "Second step description" },
  { label1: "Login Details", label2: "Third step description" },
];

const Regstrationform1 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isFirstPageComplete, setFirstPageComplete] = useState(false);
  const [isSecondPageComplete, setSecondPageComplete] = useState(false);
  const [isThirdPageComplete, setThirdPageComplete] = useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleFirstPageComplete = (isComplete) => {
    setFirstPageComplete(isComplete);
  };

  const handleSecondPageComplete = (isComplete) => {
    setSecondPageComplete(isComplete);
  };

  const handleThirdPageComplete = (isComplete) => {
    setThirdPageComplete(isComplete);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <FirstPage onFirstPageComplete={handleFirstPageComplete} />;
      case 1:
        return <SecondPage onSecondPageComplete={handleSecondPageComplete} />;
      case 2:
        return <ThirdPage onThirdPageComplete={handleThirdPageComplete} />;
      default:
        throw new Error("Unknown step");
    }
  }
  return (
    <Box className="register-main-page">
      <Box sx={{ padding: "20px 20px 0px 20px" }}>
        <img src={logo5} alt="sangam-sathi-icon" />
      </Box>
      <Container sx={{ width: "77%" }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 3 }, p: { xs: 2, md: 1 } }}
        >
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>
                  <Typography>{label.label1}</Typography>
                  <Typography>{label.label2}</Typography>
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  disabled={
                    (activeStep === 0 && !isFirstPageComplete) ||
                    (activeStep === 1 && !isSecondPageComplete) ||
                    (activeStep === 2 && !isThirdPageComplete)
                  }
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default Regstrationform1;
