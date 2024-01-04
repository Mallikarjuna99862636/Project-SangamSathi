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

const AppRoutes = () => {
  const [render, setRander] = useState(false);
  return (
    <>
      {render && <Dashboard1 />}
      <Routes>
        <Route path="/">
          {render ? (
            <Route index element={<Dashboard1 />} />
          ) : (
            <Route index element={<Header open={setRander} />} />
          )}
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="registrationform" element={<RegistrationForm />} />
          <Route path="registrationform1" element={<Regstrationform1 />} />
          <Route path="registrationconfirm" element={<RegistrationConfirm />} />
          <Route path="registrationsuccess" element={<RegistrationSuccess />} />
          <Route path="confirmlogout" element={<LogoutConfirm />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
