import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Homepages/Header-Part/Header";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";
import RegistrationPage from "../components/registration/RegistrationPage";
import RegistrationForm from "../components/Registrationform/RegistrationForm";
import RegistrationSuccess from "../components/registrationSuccess/RegistrationSuccess";
import Regstrationform1 from "../components/RegistrationForm1/Regstrationform1";
import RegistrationConfirm from "../components/registrationConfirm/RegistrationConfirm";
import Dashboard1 from "../pages/dashboard1/Dashboard1";
import LogoutConfirm from "../components/logoutConfirm/LogoutConfirm";
import TableData from "../components/Table/TableData";
// import { useSelector } from "react-redux";
// import { selectUser } from "../Redux/reduxData/DataRedux";

const AppRoutes = () => {
  const [render, setRander] = useState(false);
  // const user = useSelector(selectUser)
  return (
    <>
     {render && <Dashboard1 />} 
      <Routes>
        <Route path="/">
           <Route index element={<Header open={setRander} />} />
           <Route path="dashboard" element={<Dashboard1 />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="registrationform" element={<RegistrationForm />} />
          <Route path="registrationform1" element={<Regstrationform1 />} />
          <Route path="registrationconfirm" element={<RegistrationConfirm />} />
          <Route path="registrationsuccess" element={<RegistrationSuccess />} />
          <Route path="confirmlogout" element={<LogoutConfirm />} />
          <Route path="table" element={<TableData/>} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
