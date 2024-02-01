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
import Profile from "../pages/userDashboard/comppages/page2/Profile";
import MyMatches from "../pages/userDashboard/comppages/myMatch/MyMatches";
import MyInterests from "../pages/userDashboard/comppages/myInterests/MyInterests";
import AssistanceServices from "../pages/userDashboard/comppages/assistanceServices/AssistanceServices";
import ViewAll from "../pages/userDashboard/comppages/viewAll/ViewAll";
import Search from "../pages/userDashboard/comppages/search/Search";
import CompanyAbout from "../components/companyAbout/CompanyAbout";
import CompanyPromoter from "../components/companyPromoter/CompanyPromoter";
import AdminDashboard1 from "../pages/adminDashboard1/adminDashboard/AdminDashboard1";
import Users from "../pages/adminDashboard1/adminPages/userManagment/users/Users";
import UpgradeUsers from "../pages/adminDashboard1/adminPages/userManagment/upgradeUsers/UpgradeUsers";
import Renewals from "../pages/adminDashboard1/adminPages/userManagment/Renewals/Renewals";
import TempUsers from "../pages/adminDashboard1/adminPages/userManagment/tempUsers/TempUsers";
import ResetPassword from "../pages/adminDashboard1/adminPages/userManagment/resetPassword/ResetPassword";
import ImageVerification from "../pages/adminDashboard1/adminPages/userManagment/imageVerification/ImageVerification";
import Pending from "../pages/adminDashboard1/adminPages/assistanceServices/pending/Pending";
import Success from "../pages/adminDashboard1/adminPages/assistanceServices/success/Success";
import PromotersUsers from "../pages/adminDashboard1/adminPages/assistanceServices/promoterUsers/PromoterUsers";
import Promoters from "../pages/adminDashboard1/adminPages/promoterManagement/promoters/Promoters";
import PromoterUsers from "../pages/adminDashboard1/adminPages/promoterManagement/promotersUsers/PromotersUsers";
import PromotersEarning from "../pages/adminDashboard1/adminPages/promoterManagement/promoterEaring/PromoterEaring";
import PayToPromoters from "../pages/adminDashboard1/adminPages/promoterManagement/payToPromoters/PayToPromoter";
import OnlineTransaction from "../pages/adminDashboard1/adminPages/receipts/onlineTransaction/OnlineTransaction";
import AssistanceOnlineTransaction from "../pages/adminDashboard1/adminPages/receipts/assistanceOnlineTransaction/AssistanceOnlineTransaction";
import ReceiptVoucher from "../pages/adminDashboard1/adminPages/receipts/receiptVoucher/ReceiptVoucher";
import ReportUsers from "../pages/adminDashboard1/adminPages/reports/reportUsers/ReportUsers";
import ReportRenewals from "../pages/adminDashboard1/adminPages/reports/reportRenewals/ReportRenewals";
import ReportReceipts from "../pages/adminDashboard1/adminPages/reports/reportReceipts/ReportReceipts";
import Notification from "../pages/adminDashboard1/adminPages/notification/Notification";
import CompanyContact from "../components/companyContact/CompanyContact";

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
          <Route path="about" element={<CompanyAbout />} />
          <Route path="promoter" element={<CompanyPromoter />} />
          <Route path="contact" element={<CompanyContact />} />
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
          <Route path="admin">
            <Route path="dashboard" element={<AdminDashboard1 />} />
            <Route path="users" element={<Users />} />
            <Route path="upgradeusers" element={<UpgradeUsers />} />
            <Route path="renewals" element={<Renewals />} />
            <Route path="tempusers" element={<TempUsers />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="imageverification" element={<ImageVerification />} />
            <Route path="assistancepending" element={<Pending />} />
            <Route path="assistancesuccess" element={<Success />} />
            <Route path="promoterusers" element={<PromotersUsers />} />
            <Route path="promoters" element={<Promoters />} />
            <Route path="promocodeusers" element={<PromoterUsers />} />
            <Route path="promotersearning" element={<PromotersEarning />} />
            <Route path="paytopromoters" element={<PayToPromoters />} />
            <Route path="onlinetransaction" element={<OnlineTransaction />} />
            <Route
              path="assistanceonlinetransaction"
              element={<AssistanceOnlineTransaction />}
            />
            <Route path="receiptvoucher" element={<ReceiptVoucher />} />
            <Route path="usersreports" element={<ReportUsers />} />
            <Route path="renewalsreports" element={<ReportRenewals/>} />
            <Route path="receiptsreports" element={<ReportReceipts/>} />
            <Route path="notification" element={<Notification/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
