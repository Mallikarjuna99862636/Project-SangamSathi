import React from 'react'
import PromoterHeader from '../promoterHeader/PromoterHeader'
import PromoterSidebar from '../promoterSidebar/PromoterSidebar'
import './promoterdashboard.scss'
import PromoterDashInitialPage from '../promoterComp/promoterDashInitialPage/PromoterDashInitialPage'

const PromoterDashboard = () => {
  return (
    <div>
       <PromoterHeader/>
       <PromoterSidebar/>
       <div className='promoter-page'>
         <PromoterDashInitialPage/>
       </div> 
    </div>
  )
}

export default PromoterDashboard