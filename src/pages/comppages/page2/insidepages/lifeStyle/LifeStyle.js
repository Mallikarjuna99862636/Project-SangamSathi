import React from 'react'
import { Box, Stack } from '@mui/material'
import './lifestyle.scss'

const LifeStyle = () => {
  return (
    <Box className="lifestyle-main-container">
    <Stack className='lifestyle-stack-container'> 
       <Box className="lifestyle-first-table-data">
       <h4 className='lifestyle-table-one-heading'>Life Style</h4>
         <table className='lifestyle-table-1'>
          <tbody>
            <tr> 
             <th> Drink </th>
             <td> No </td>
            </tr>
            <tr> 
             <th> Smoke </th>
             <td> No </td>
            </tr>
            <tr> 
             <th> Diet </th>
             <td> Veg </td>
            </tr>
            <tr> 
             <th> Sunsign </th>
             <td> Aries </td>
            </tr>
           
            <tr> 
             <th> Bloodgroup </th>
             <td>  A+</td>
            </tr>
          </tbody>
         </table>
       </Box>
       <Box className="lifestyle-second-table-data">
        <h4 className='lifestyle-table-two-heading'>Appearence</h4>
       <table className='lifestyle-table-2'>
          <tbody>
            <tr> 
             <th> Body Type </th>
             <td>  Average </td>
            </tr>
            <tr> 
             <th> Skin Type </th>
             <td>  Fair</td>
            </tr>
          </tbody>
         </table>
       </Box>
    </Stack>
       
    </Box>
  )
}

export default LifeStyle;