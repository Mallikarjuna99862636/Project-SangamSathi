import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, styled } from '@mui/material';
import PersonalDetails from './personalForm/PersonalDetails';
import SocialCarrerForm from './socialAndCarrerForm/SocialCarrerForm';
import LoginDetails from './loginDetails/LoginDetails';
import './RegistrationForm.css'
import logo  from '../../assets/images/sangam-sathi-logo.png'

const steps = [
  { label1: 'Personal', label2: 'First step description' },
  { label1: 'Social & Carrer', label2: 'Second step description' },
  { label1: 'Login Details', label2: 'Third step description' },
];

const MainContainer = styled(Container)`
  position: relative;
  padding: 2px;
`;

const StepContentContainer = styled(Box)`
  background-color: rgba(0, 0, 0, 0.8);
  minHeight: 550px;
`;

const WrappableStepLabel = styled(StepLabel)`
  && {
    whiteSpace: normal;
  }
`;

const RegistrationForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className = 'main-container'>
    <Box sx={{ padding : '20px 20px 0px 20px'}}>
      <img src={logo} alt='sangam-sathi-icon'/>
    </Box>
    <MainContainer>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={index} {...stepProps}>
              <WrappableStepLabel {...labelProps}>
                <Typography>{step.label1}</Typography>
                <Typography>{step.label2}</Typography>
              </WrappableStepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === 0 && (
        <StepContentContainer>
          <PersonalDetails />
        </StepContentContainer>
      )}
      {activeStep === 1 && (
        <StepContentContainer>
          <SocialCarrerForm />
        </StepContentContainer>
      )}
      {activeStep === 2 && (
        <StepContentContainer>
          <LoginDetails />
        </StepContentContainer>
      )}
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
        <Button color="inherit" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Box sx={{ flex: '1 1 auto' }} />
        <Button onClick={handleNext}>
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </MainContainer>
    </Box>
  );
};

export default RegistrationForm;
