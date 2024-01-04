import React from 'react';
import { Box , Divider} from '@mui/material';
 import './registrationsuccess.scss';
import logo1 from '../../assets/images/sangam-sathi-logo.png'


const RegistrationSuccess = () => {
  return (
    <Box className='RegistrationSuccess'>
      <Box className='first-box'>
        <img src={logo1} alt="sangam-sathi-logo"/>
      </Box>
      <Box className='second-box'>
       <Divider/>
        <h1 className='heading-1'>Registration is successful</h1>
        <h1 className='heading-2'>
          Kindly make payment by Google Pay / Phone Pay / Paytm or any UPI to below number and send screenshot for activation
        </h1>
        <h1 className='heading-3'>9148824442</h1>
        <h1 className='heading-4'>For any assistance call to our support number 9148824442</h1>
      </Box>
    </Box>
  );
};

export default RegistrationSuccess;
