import React from "react";
import "./admindashboard1.scss";
import AdminHeader from "../adminHeader/AdminHeader";
import AdminSidebar from "../adminSidebar/AdminSidebar";

const AdminDashboard1 = () => { 
  return (
    <div>
      <AdminHeader/>
      <AdminSidebar/>
      <div className="content-page">
       <h1> hello </h1>
      </div>
    </div>
  );
};

export default AdminDashboard1;
