import { Route, Routes } from "react-router-dom";
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
import ExtraCodeDiv from "../components/CodeExtra/ExtraCodeDiv";
import Profile from '../pages/comppages/page2/Profile'
import MyMatches from '../pages/comppages/myMatch/MyMatches'
import MyInterests from '../pages/comppages/myInterests/MyInterests'
import AssistanceServices from '../pages/comppages/assistanceServices/AssistanceServices'
import ViewAll from '../pages/comppages/viewAll/ViewAll'
import Search from '../pages/comppages/search/Search'

const AppRoutes = () => {
  return (
    <> 
      <Routes>
        <Route path="/">
           <Route index element={<Header  />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="registrationform" element={<RegistrationForm />} />
          <Route path="registrationform1" element={<Regstrationform1 />} />
          <Route path="registrationconfirm" element={<RegistrationConfirm />} />
          <Route path="registrationsuccess" element={<RegistrationSuccess />} />
          <Route path="confirmlogout" element={<LogoutConfirm />} />
          <Route path="table" element={<TableData/>} />
          <Route path="extra" element={<ExtraCodeDiv/>} />
         <Route path="user">
          <Route path="dashboard" element={<Dashboard1  />} />
          <Route path="profile" element={<Profile />} />
          <Route path="my-matches" element={<MyMatches  />} />
          <Route path="my-interests" element={<MyInterests  />} />
          <Route path="assistance-services" element={<AssistanceServices  />} />
          <Route path="view-all" element={<ViewAll  />} />
          <Route path="search" element={<Search  />} />
          <Route path="confirmlogout" element={<Dashboard1  />} />
          
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
