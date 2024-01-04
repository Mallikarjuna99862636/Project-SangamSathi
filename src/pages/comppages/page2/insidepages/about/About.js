import React from 'react'
import {Box , Stack } from '@mui/material'
import "./about.scss"

const About = () => {
  return (
    <Box className="about-main-container">
    <Stack className='about-stack-container'> 
       <Box className="first-table-data">
       <h4 className='table-one-heading'> Basic Information</h4>
         <table className='table-1'>
          <tbody>
            <tr> 
             <th> Email Id </th>
             <td> malli@gmail.com </td>
            </tr>
            <tr> 
             <th> Phone No. </th>
             <td>  9986362636</td>
            </tr>
            <tr> 
             <th> Address </th>
             <td>  bellary , yarangali</td>
            </tr>
            <tr> 
             <th> Pin Code</th>
             <td>  583115</td>
            </tr>
            <tr> 
             <th> City </th>
             <td>  Bengalore</td>
            </tr>
            <tr> 
             <th> State </th>
             <td>  Karnataka</td>
            </tr>
            <tr> 
             <th> Country </th>
             <td>  India</td>
            </tr>
            <tr> 
             <th> Occupation Country</th>
             <td>  Developer (IT)</td>
            </tr>
           
          </tbody>
         </table>
       </Box>
       <Box className="second-table-data">
        <h4 className='table-two-heading'>Personal Information</h4>
       <table className='table-2'>
          <tbody>
            <tr> 
             <th> Full Name </th>
             <td>  Mallikarjun </td>
            </tr>
            <tr> 
             <th> Date of Birth </th>
             <td>  05/06/1998</td>
            </tr>
            <tr> 
             <th> Age </th>
             <td>  25</td>
            </tr>
            <tr> 
             <th> Height </th>
             <td>  5.4</td>
            </tr>
            <tr> 
             <th> Gender </th>
             <td>  Male</td>
            </tr>
            <tr> 
             <th> Language </th>
             <td>  Kannada</td>
            </tr>
            <tr> 
             <th> Marrital Status</th>
             <td>  Single</td>
            </tr>
           
          </tbody>
         </table>
       </Box>
    </Stack>
       
    </Box>
  )
}

export default About