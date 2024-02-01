import React from "react";
import "./admindashboard.scss";
import AdminHeader from "../adminHeader/AdminHeader";
import AdminSidebar from "../adminSidebar/AdminSidebar";
import AdminInitialPage from "../adminPages/admInInitialPage/AdminInitialPage";

const AdminDashboard = () => { 
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <div className="content-page">
      <AdminInitialPage/>
      </div>
    </div>
  );
};

export default AdminDashboard;
