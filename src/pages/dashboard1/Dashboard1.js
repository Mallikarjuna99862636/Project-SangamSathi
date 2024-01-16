import React from "react";
import Dashheader from "../dashHeader/Dashheader";
import Sidebar from "../sidebar/Sidebar";
// import { Route, Routes } from "react-router-dom";
import Page1 from "../comppages/page1/Page1";
import "./dashboard.scss";
// import Profile from "../comppages/page2/Profile";
// import MyMatches from "../comppages/myMatch/MyMatches";
// import MyInterests from "../comppages/myInterests/MyInterests";
// import AssistanceServices from "../comppages/assistanceServices/AssistanceServices";
// import ViewAll from "../comppages/viewAll/ViewAll";
// import Search from "../comppages/search/Search";
// import Logout from "../comppages/logout/Logout";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUser, userLogout } from "../../Redux/reduxData/DataRedux";

const Dashboard1 = () => {
  
  return (
    <div>
      <Dashheader  />
      <Sidebar />
      <div className="pages">
      <Page1 />
        {/* <Routes>
          <Route path="/">
            <Route path="dashboard" element={<Page1 />} />
            <Route path="profile" element={<Profile />} />
            <Route path="my-matches" element={<MyMatches />} />
            <Route path="my-interests" element={<MyInterests />} />
            <Route
              path="assistance-services"
              element={<AssistanceServices />}
            />
            <Route path="view-all" element={<ViewAll />} />
            <Route path="search" element={<Search />} />
          </Route>
        </Routes> */}
      </div>
    </div>
  );
};

export default Dashboard1;
