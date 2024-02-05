import React from 'react'
import PromoterHeader from '../promoterHeader/PromoterHeader'
import PromoterSidebar from '../promoterSidebar/PromoterSidebar'
import './promoterdashboard.scss'

const PromoterDashboard = () => {
  return (
    <div>
       <PromoterHeader/>
       <PromoterSidebar/>
       <div className='promoter-page'>
         <h3> Hello </h3>
       </div> 
    </div>
  )
}

export default PromoterDashboard