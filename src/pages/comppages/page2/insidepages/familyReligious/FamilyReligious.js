import React from 'react'
import {Box , Stack } from '@mui/material'
import './familyreligious.scss'


const FamilyReligious = () => {
  return (
    <Box className="familyreligious-main-container">
    <Stack className='familyreligious-stack-container'> 
       <Box className="first-table-data">
       <h4 className='table-one-heading'>Family</h4>
         <table className='table-1'>
          <tbody>
            <tr> 
             <th> Father </th>
             <td> tara </td>
            </tr>
           
            <tr> 
             <th> Sibling </th>
             <td>  No Siblings</td>
            </tr>
          </tbody>
         </table>
       </Box>
       <Box className="second-table-data">
        <h4 className='table-two-heading'>Religious Background</h4>
       <table className='table-2'>
          <tbody>
            <tr> 
             <th> Religion </th>
             <td>  Hindu </td>
            </tr>
            <tr> 
             <th> Caste </th>
             <td>  Brahmin</td>
            </tr>
            <tr> 
             <th> Sub Caste </th>
             <td>  brahmin</td>
            </tr>
            <tr> 
             <th> Nakshatra </th>
             <td>  anuradha</td>
            </tr>
            <tr> 
             <th> Rashi </th>
             <td>  mesha</td>
            </tr>
            <tr> 
             <th> Gotra </th>
             <td>  mallige</td>
            </tr>
           
          </tbody>
         </table>
       </Box>
    </Stack>
       
    </Box>
  )
}

export default FamilyReligious