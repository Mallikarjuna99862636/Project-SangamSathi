import React from 'react'
import {Box , Stack } from '@mui/material'
import "./familypop.scss";

const FamilyPop = () => {
  return (
    <Box className="familypop-main-container">
    <Stack className='familypop-stack-container'> 
       <Box className="familypop-first-table-data">
         <table className='familypop-table'>
          <tbody>
            <tr> 
             <th> Mother </th>
             <td> Manjula </td>
            </tr>
            <tr> 
             <th> Siblings </th>
             <td>  No Siblings</td>
            </tr>
            <tr> 
             <th> Religion</th>
             <td>  Hindu</td>
            </tr>
            <tr> 
             <th> Caste </th>
             <td>  Brahmin Smartha</td>
            </tr>
            <tr> 
             <th> Sub Caste </th>
             <td>  Smartha badagnadu</td>
            </tr>
            <tr> 
             <th> Nakshatra </th>
             <td>  Vishakha 1st Pada</td>
            </tr>
            <tr> 
             <th> Rashi </th>
             <td>  Tula</td>
            </tr>
            <tr> 
             <th> Gotra </th>
             <td>  Bharadwaja</td>
            </tr>
          </tbody>
         </table>
       </Box>
    </Stack>
       
    </Box>
  )
}

export default FamilyPop