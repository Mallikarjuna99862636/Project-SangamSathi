import React from "react";
import "./freeuserdashboard.scss";
import FreeUserDashheader from "./freeUserdashHeader/FreeUserDashheader";
import FreeUserSidebar from "./freeUserSidebar/FreeUserSidebar";
import FreeUserInitialPage from "./freeUserPages/freeUserDashboardPage/FreeUserInitialPage";

const FreeUserDashboard = () => { 
  return (
    <div>
      <FreeUserDashheader/>
      <FreeUserSidebar/>
      <div className="pages">
      <FreeUserInitialPage/>
      </div>
    </div>
  );
};

export default FreeUserDashboard;
