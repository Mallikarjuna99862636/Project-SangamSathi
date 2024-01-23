import React from 'react'
import './admindashboard.scss'
import InitialAdminDashboard from '../../admin_components/initialDashboard/InitialAdminDashboard';
import AdminHeader from '../../admin_components/adminHeader/AdminHeader';
import AdminSidebar from '../../admin_components/sidebar/AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="main-admin-div">
      <div className="head-div">
      <AdminHeader />
      </div>
      <div className="div1">
       <div className="left-side"> 
       <AdminSidebar/>
       </div>
        <div className="dashboard-content">
           <InitialAdminDashboard/> 
         </div>
      </div>
    </div>
  )
}

export default AdminDashboard;