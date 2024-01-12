import React from 'react'
import {Box , Stack } from '@mui/material'
import "./aboutpop.scss";

const AboutPop = () => {
  return (
    <Box className="aboutpop-main-container">
    <Stack className='aboutpop-stack-container'> 
       <Box className="aboutpop-first-table-data">
         <table className='aboutpop-table'>
          <tbody>
            <tr> 
             <th> Date of Birth </th>
             <td> 01 - Aug - 1998 </td>
            </tr>
            <tr> 
             <th> Marital Status </th>
             <td>  Unmarried</td>
            </tr>
            <tr> 
             <th> Height</th>
             <td>  5' 2'' - 157cm</td>
            </tr>
            <tr> 
             <th> Language </th>
             <td>  Kannada</td>
            </tr>
            <tr> 
             <th> Country </th>
             <td>  India</td>
            </tr>
            <tr> 
             <th> State </th>
             <td>  Karnataka</td>
            </tr>
            <tr> 
             <th> City </th>
             <td>  Bangalore</td>
            </tr>
            <tr> 
             <th> Contact No </th>
             <td>  9008717293</td>
            </tr>
            <tr> 
             <th> Email Id </th>
             <td>  manjulaprabhakar68@gmail.com</td>
            </tr>
          </tbody>
         </table>
       </Box>
    </Stack>
       
    </Box>
  )
}

export default AboutPop