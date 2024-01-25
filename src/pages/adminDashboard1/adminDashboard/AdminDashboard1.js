import React from "react";
import "./admindashboard1.scss";
import AdminHeader from "../adminHeader/AdminHeader";
import AdminSidebar from "../adminSidebar/AdminSidebar";
import AdminInitialPage from "../adminPages/admInInitialPage/AdminInitialPage";

const AdminDashboard1 = () => { 
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

export default AdminDashboard1;
