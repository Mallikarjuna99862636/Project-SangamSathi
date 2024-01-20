import { Route, Routes } from "react-router-dom";
import Header from "../components/homePages/headerPart/Header";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";
import RegistrationPage from "../components/registration/RegistrationPage";
import RegistrationForm from "../components/Registrationform/RegistrationForm";
import RegistrationSuccess from "../components/registrationSuccess/RegistrationSuccess";
import Regstrationform1 from "../components/registrationForm1/RegstrationForm1";
import RegistrationConfirm from "../components/registrationConfirm/RegistrationConfirm";
import UserDashboard from "../pages/userDashboard/UserDashboard";
import LogoutConfirm from "../components/logoutConfirm/LogoutConfirm";
import TableData from "../components/table/TableData";
import ExtraCodeDiv from "../components/codeExtra/ExtraCodeDiv";
import Profile from "../pages/comppages/page2/Profile";
import MyMatches from "../pages/comppages/myMatch/MyMatches";
import MyInterests from "../pages/comppages/myInterests/MyInterests";
import AssistanceServices from "../pages/comppages/assistanceServices/AssistanceServices";
import ViewAll from "../pages/comppages/viewAll/ViewAll";
import Search from "../pages/comppages/search/Search";
import CompanyAbout from "../components/companyAbout/CompanyAbout";
import CompanyPromoter from "../components/companyPromoter/CompanyPromoter";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Header />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="registration" element={<RegistrationPage />} />
          <Route path="registrationform" element={<RegistrationForm />} />
          <Route path="registrationform1" element={<Regstrationform1 />} />
          <Route path="registrationconfirm" element={<RegistrationConfirm />} />
          <Route path="registrationsuccess" element={<RegistrationSuccess />} />
          <Route path="confirmlogout" element={<LogoutConfirm />} />
          <Route path="aboutcompany" element={<CompanyAbout />} />
          <Route path="companypromoter" element={<CompanyPromoter />} />
          <Route path="table" element={<TableData />} />
          <Route path="extra" element={<ExtraCodeDiv />} />
          <Route path="user">
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="profile" element={<Profile />} />
            
            <Route path="my-matches" element={<MyMatches />} />
            <Route path="my-interests" element={<MyInterests />} />
            <Route
              path="assistance-services"
              element={<AssistanceServices />}
            />
            <Route path="view-all" element={<ViewAll />} />
            <Route path="search" element={<Search />} />
            <Route path="confirmlogout" element={<UserDashboard />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
