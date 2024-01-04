import React from 'react'
import {Box , Stack } from '@mui/material'
import "./education.scss";

const Education = () => {
  return (
    <Box className="education-main-container">
    <Stack className='education-stack-container'> 
       <Box className="education-first-table-data">
       <h4 className='education-table-one-heading'>Eduction & Occupation</h4>
         <table className='education-table'>
          <tbody>
            <tr> 
             <th> Qualification </th>
             <td> B.E/B.Tech </td>
            </tr>
            <tr> 
             <th> Occupation </th>
             <td>  No Siblings</td>
            </tr>
            <tr> 
             <th> Income Per Annum </th>
             <td>  No Siblings</td>
            </tr>
            <tr> 
             <th> Occupation Country </th>
             <td>  No Siblings</td>
            </tr>
          </tbody>
         </table>
       </Box>
    </Stack>
       
    </Box>
  )
}

export default Education