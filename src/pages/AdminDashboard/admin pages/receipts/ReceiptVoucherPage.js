import React from 'react'
import Header from "../../../components/admin_components/header/Header";
import Sidebar from '../../../components/admin_components/sidebar/Sidebar';
import ReceiptVoucherData from '../../../components/admin_components/receipts/receiptvoucher/ReceiptVoucherData';
import './receipts.scss'

const ReceiptVoucherPage = () => {
  return (
    <div className="main-admin-div">
      <div className="head-div">
      <Header />
      </div>
      <div className="div1">
       <div className="left-side"> 
       <Sidebar/>
       </div>
        <div className="receipts-side-content">
         <ReceiptVoucherData/>
         </div>
      </div>
    </div>
  )
}

export default ReceiptVoucherPage