import React from 'react'
import "./extracode.scss"

const ExtraCodeDiv = () => {

     const handleClick =()=>{
         alert("hello ")
     }
    
  return (
    <div className='extra-div'>
        <h1 className='extra-heading'> Hello </h1>
        <button onClick={handleClick}> Click </button>
    </div>
  )
}

export default ExtraCodeDiv