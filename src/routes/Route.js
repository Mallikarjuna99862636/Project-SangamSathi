import { Route, Routes } from "react-router-dom";
import Header from "../components/homePages/headerPart/Header";
import ForgotPassword from "../components/forgotPassword/ForgotPassword";
import RegistrationPage from "../components/registration/RegistrationPage";
import RegistrationForm from "../components/Registrationform/RegistrationForm";
import RegistrationSuccess from "../components/registrationSuccess/RegistrationSuccess";
import Regstrationform1 from "../components/registrationForm1/RegstrationForm1";
import RegistrationConfirm from "../components/registrationConfirm/RegistrationConfirm";
import LogoutConfirm from "../components/logoutConfirm/LogoutConfirm";
import TableData from "../components/table/TableData";
import ExtraCodeDiv from "../components/codeExtra/ExtraCodeDiv";
import Profile from "../pages/premiumUserDashboard/comppages/page2/Profile";
import MyMatches from "../pages/premiumUserDashboard/comppages/myMatch/MyMatches";
import MyInterests from "../pages/premiumUserDashboard/comppages/myInterests/MyInterests";
import AssistanceServices from "../pages/premiumUserDashboard/comppages/assistanceServices/AssistanceServices";
import ViewAll from "../pages/premiumUserDashboard/comppages/viewAll/ViewAll";
import Search from "../pages/premiumUserDashboard/comppages/search/Search";
import CompanyAbout from "../components/companyAbout/CompanyAbout";
import CompanyPromoter from "../components/companyPromoter/CompanyPromoter";
import AdminDashboard from "../pages/adminDashboard/adminDashboard/AdminDashboard";
import Users from "../pages/adminDashboard/adminPages/userManagment/users/Users";
import UpgradeUsers from "../pages/adminDashboard/adminPages/userManagment/upgradeUsers/UpgradeUsers";
import Renewals from "../pages/adminDashboard/adminPages/userManagment/Renewals/Renewals";
import TempUsers from "../pages/adminDashboard/adminPages/userManagment/tempUsers/TempUsers";
import ResetPassword from "../pages/adminDashboard/adminPages/userManagment/resetPassword/ResetPassword";
import ImageVerification from "../pages/adminDashboard/adminPages/userManagment/imageVerification/ImageVerification";
import Pending from "../pages/adminDashboard/adminPages/assistanceServices/pending/Pending";
import Success from "../pages/adminDashboard/adminPages/assistanceServices/success/Success";
import PromotersUsers from "../pages/adminDashboard/adminPages/assistanceServices/promoterUsers/PromoterUsers";
import Promoters from "../pages/adminDashboard/adminPages/promoterManagement/promoters/Promoters";
import PromoterUsers from "../pages/adminDashboard/adminPages/promoterManagement/promotersUsers/PromotersUsers";
import PromotersEarning from "../pages/adminDashboard/adminPages/promoterManagement/promoterEaring/PromoterEaring";
import PayToPromoters from "../pages/adminDashboard/adminPages/promoterManagement/payToPromoters/PayToPromoter";
import OnlineTransaction from "../pages/adminDashboard/adminPages/receipts/onlineTransaction/OnlineTransaction";
import AssistanceOnlineTransaction from "../pages/adminDashboard/adminPages/receipts/assistanceOnlineTransaction/AssistanceOnlineTransaction";
import ReceiptVoucher from "../pages/adminDashboard/adminPages/receipts/receiptVoucher/ReceiptVoucher";
import ReportUsers from "../pages/adminDashboard/adminPages/reports/reportUsers/ReportUsers";
import ReportRenewals from "../pages/adminDashboard/adminPages/reports/reportRenewals/ReportRenewals";
import ReportReceipts from "../pages/adminDashboard/adminPages/reports/reportReceipts/ReportReceipts";
import Notification from "../pages/adminDashboard/adminPages/notification/Notification";
import CompanyContact from "../components/companyContact/CompanyContact";
import PremiumUserDashboard from "../pages/premiumUserDashboard/PremiumUserDashboard";
import FreeUserDashboard from "../pages/freeUserDashboard/FreeUserDashboard";
import FreeUserProfile from "../pages/freeUserDashboard/freeUserPages/freeUserProfile/FreeUserProfile";
import FreeUserViewAll from "../pages/freeUserDashboard/freeUserPages/freeUserViewAll/FreeUserViewAll";
import FreeUserSearch from "../pages/freeUserDashboard/freeUserPages/freeUserSearch/FreeUserSearch";
import CompanyPrivacyPolicy from "../components/companyPrivacyPolicy/CompanyPrivacyPolicy";
import CompanyTermsCondition from "../components/companyTermsCondition/CompanyTermsCondition";
import CompanyCancellationPolicy from "../components/companyCancellationPolicy/CompanyCancellationPolicy";
import PromoterDashboard from "../pages/promoterDashboard/promoterDashboard/PromoterDashboard";

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
          <Route path="privacypolicy" element={<CompanyPrivacyPolicy />} />
          <Route path="termsconditions" element={<CompanyTermsCondition />} />
          <Route
            path="refundandcancellation"
            element={<CompanyCancellationPolicy />}
          />
          <Route path="table" element={<TableData />} />
          <Route path="extra" element={<ExtraCodeDiv />} />

          {/* This is Premium User Routing  */}

          <Route path="user">
            <Route path="dashboard" element={<PremiumUserDashboard />} />
            <Route path="profile" element={<Profile />} />

            <Route path="my-matches" element={<MyMatches />} />
            <Route path="my-interests" element={<MyInterests />} />
            <Route
              path="assistance-services"
              element={<AssistanceServices />}
            />
            <Route path="view-all" element={<ViewAll />} />
            <Route path="search" element={<Search />} />
            {/* <Route path="confirmlogout" element={<PremiumUserDashboard />} /> */}
          </Route>

          {/* This is Admin Page Routing  */}

          <Route path="admin">
            <Route path="dashboard" element={<AdminDashboard />} />
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
            <Route path="renewalsreports" element={<ReportRenewals />} />
            <Route path="receiptsreports" element={<ReportReceipts />} />
            <Route path="notification" element={<Notification />} />
          </Route>

          {/* This Is Free User Routing  */}

          <Route path="freeuser">
            <Route path="fdashboard" element={<FreeUserDashboard />} />
            <Route path="fprofile" element={<FreeUserProfile />} />
            <Route path="fviewall" element={<FreeUserViewAll />} />
            <Route path="fsearch" element={<FreeUserSearch />} />
          </Route>
          {/* This Is Promoter Page  Routing  */}

          <Route path="promoter">
            <Route path="dashboard" element={<PromoterDashboard/>} />
            {/* <Route path="profile" element={<FreeUserProfile />} />
            <Route path="viewall" element={<FreeUserViewAll />} />
            <Route path="search" element={<FreeUserSearch />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
