import React from "react";
import Dashheader from "./dashHeader/Dashheader";
import Sidebar from "./sidebar/Sidebar";
import DashboardInitialPage from "./comppages/dashboardPage/DashboardInitialPage";
import "./premiumuserdashboard.scss";

const PremiumUserDashboard = () => { 
  return (
    <div>
      <Dashheader  />
      <Sidebar />
      <div className="pages">
        <DashboardInitialPage />
      </div>
    </div>
  );
};

export default PremiumUserDashboard;
