import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import HomeDashboard from "./pages/dashboard/HomeDashboard";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { Flowbite } from "flowbite-react";
import FinalHome from "./pages/FinalHome";

// admin
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
// admin dashboard sub pages
import AdminDashboardIndex from "./pages/dashboard/admin/admin-dashboard-sub-pages/admin-dashboard-sub-sub-pages/AdminDashboardIndex";
// sub pages
import SuperAdminCase from "./pages/dashboard/admin/admin-dashboard-sub-pages/admin-dashboard-case-sub-pages/SuperAdminCase";
import SuperAdminCases from "./pages/dashboard/admin/admin-dashboard-sub-pages/admin-dashboard-case-sub-pages/SuperAdminCases";

// customers
import CustomersDashboard from './pages/dashboard/customers/CustomersDashboard'
import CustomersDashboardIndex from "./pages/dashboard/customers/customers-pages/CustomersDashboardIndex";
// customers dashboard compliance
import CustomersDashboardCompliance from "./pages/dashboard/customers/customers-pages/compliance/CustomersDashboardCompliance";
import CustomersDashboardNewCase from "./pages/dashboard/customers/customers-pages/compliance/customers-compliance/CustomersDashboardNewCase";
import CustomersDashboardOnRequest from "./pages/dashboard/customers/customers-pages/compliance/customers-compliance/CustomersDashboardOnRequest";
import CustomersDashboardOnRequestList from "./pages/dashboard/customers/customers-pages/compliance/customers-compliance/customers-dashboard-on-request/CustomersDashboardOnRequestList";
import CustomersDashboardOnRequestDetail from "./pages/dashboard/customers/customers-pages/compliance/customers-compliance/customers-dashboard-on-request/CustomersDashboardOnRequestDetail";
// customers dashboard -- my chart -- start
import CustomersDashboardMyChart from "./pages/dashboard/customers/customers-pages/my-chart/CustomersDashboardMyChart";
// ------------
import CustomersDashboardMyChartCaseTeam from './pages/dashboard/customers/customers-pages/my-chart/case-team/CustomersDashboardMyChartCaseTeam.jsx'
import CustomersDashboardMyChartCaseTeamIndex from './pages/dashboard/customers/customers-pages/my-chart/case-team/case-team-pages/CustomersDashboardMyChartCaseTeamIndex.jsx'
// ------------
import CustomersDashboardMyChartActiveCase from './pages/dashboard/customers/customers-pages/my-chart/active-case/CustomersDashboardMyChartActiveCase.jsx'
import CustomersDashboardMyChartActiveCaseIndex from './pages/dashboard/customers/customers-pages/my-chart/active-case/active-case-pages/CustomersDashboardMyChartActiveCaseIndex.jsx'
// -------------
import CustomersDashboardMyChartClosedCase from './pages/dashboard/customers/customers-pages/my-chart/closed-case/CustomersDashboardMyChartClosedCase.jsx'

// customers dashboard -- my chart -- end
// customer
import CustomerDashboard from "./pages/dashboard/customer/CustomerDashboard";
import ManagerDashboard from "./pages/dashboard/ManagerDashboard";
import LawyerDashboard from "./pages/dashboard/lawyer/LawyerDashboard";
import CustomerDashboardHome from "./pages/dashboard/customer/customer-sub-pages/CustomerDashboardHome";
import Message from "./pages/dashboard/customer/customer-sub-pages/Message";
import Appointment from "./pages/dashboard/customer/customer-sub-pages/Appointment";
// customer compliance
import NewCase from "./pages/dashboard/customer/customer-sub-pages/NewCase";
// customer charts pages
import CaseTeam from "./pages/dashboard/customer/customer-charts/CaseTeam";
import ActiveCase from "./pages/dashboard/customer/customer-charts/ActiveCase";
import ClosedCase from "./pages/dashboard/customer/customer-charts/ClosedCase";
// customer finance pages
import AddFunds from "./pages/dashboard/customer/customer-finance/AddFunds";
import RequestedPayment from "./pages/dashboard/customer/customer-finance/RequestedPayment";
import RefundFunds from "./pages/dashboard/customer/customer-finance/RefundFunds";
import RecentTransactions from "./pages/dashboard/customer/customer-finance/RecentTransaction";

// customers  services
import Training from "./pages/dashboard/customer/customer-services/Training";
import Consulting from "./pages/dashboard/customer/customer-services/Consulting";
import Researches from "./pages/dashboard/customer/customer-services/Researches";

// lawyer

import LawyerDashboardHome from "./pages/dashboard/lawyer/lawyer-sub-pages/LawyerDashboardHome";
import LawyerNewCase from "./pages/dashboard/lawyer/lawyer-sub-pages/LawyerNewCase";
import Video from "./pages/Video";
import { useReadQuery } from "./features/api/apiSlice";
import { createContext, useEffect } from "react";
import Applications from "./pages/dashboard/applications/Applications";
import OnRequest from "./pages/dashboard/customer/customer-sub-pages/new-case-sub-pages/OnRequest";
import Success from "./pages/Success";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";
import CustomerProfile from "./pages/dashboard/customer/customer-sub-pages/CustomerProfile";
import ChangePassword from "./pages/dashboard/customer/customer-sub-pages/ChangePassword";
import ComingSoon from "./components/ComingSoon";
import LawyerProfile from "./pages/dashboard/lawyer/lawyer-sub-pages/LawyerProfile";
import StaticPage from "./pages/StaticPage";

export const userContext = createContext();

// home pages
import HomeIndex from "./pages/home-pages/HomeIndex";
// civil
import Succession from "./pages/civil/Succession";
import Employment from "./pages/civil/Employment";
import Property from "./pages/civil/Property";
import Torts from "./pages/civil/Torts";

// civil -- contract
import CivilContractOutlet from "./pages/civil/contract/CivilContractOutlet";
import CivilContractGeneralContract from "./pages/civil/contract/CivilContractGeneralContract";
import CivilContractSpecialMovables from "./pages/civil/contract/CivilContractSpecialMovables";
import CivilContractSaleLeaseBuildings from "./pages/civil/contract/CivilContractSaleLeaseBuildings";
import CivilContractConstruction from "./pages/civil/contract/CivilContractConstruction";
import CivilContractSupplyGoodsServices from "./pages/civil/contract/CivilContractSupplyGoodsServices";
import CivilContractRentalMachineriesVehicles from "./pages/civil/contract/CivilContractRentalMachineriesVehicles";
import CivilContractLoan from "./pages/civil/contract/CivilContractLoan";

// civil -- family
import CivilFamily from "./pages/civil/family/CivilFamily";
import CivilFamilyMaintenance from "./pages/civil/family/family-sub-pages/CivilFamilyMaintenance";
import CivilFamilyDivorce from "./pages/civil/family/family-sub-pages/CivilFamilyDivorce";
import CivilFamilyIrregularUnion from "./pages/civil/family/family-sub-pages/CivilFamilyIrregularUnion";
import CivilFamilyAdoption from "./pages/civil/family/family-sub-pages/CivilFamilyAdoption";
import CivilFamilyOthers from "./pages/civil/family/family-sub-pages/CivilFamilyOthers";

// corporate 
// corporate - intellectual property
import CorporateIntellectualProperty from "./pages/corporate/CorporateIntellectualProperty";
import CorporateCopyright from "./pages/corporate/corporate-intellectual-property/CorporateCopyright";
import CorporatePatent from "./pages/corporate/corporate-intellectual-property/CorporatePatent";
import CorporateTrademark from "./pages/corporate/corporate-intellectual-property/CorporateTrademark";
import CorporateUtilities from "./pages/corporate/corporate-intellectual-property/CorporateUtilities";
import CorporateGeographicalIndication from "./pages/corporate/corporate-intellectual-property/CorporateGeographicalIndication";
import CorporateVarietiesPlantBreedsRight from "./pages/corporate/corporate-intellectual-property/CorporateVarietiesPlantBreedsRight";
import CorporateOthers from "./pages/corporate/corporate-intellectual-property/CorporateOthers";
// corporate - trade and investment
import CorporateTradeInvestment from "./pages/corporate/CorporateTradeInvestment";
import CorporateIncorporation from "./pages/corporate/corporate-trade-investment/CorporateIncorporation";
import CorporateBankruptcy from "./pages/corporate/corporate-trade-investment/CorporateBankruptcy";
import CorporateConversion from "./pages/corporate/corporate-trade-investment/CorporateConversion";
import CorporateMerger from "./pages/corporate/corporate-trade-investment/CorporateMerger";
import CorporateInvestment from "./pages/corporate/corporate-trade-investment/CorporateInvestment";
import CorporateTradeInvestmentOthers from "./pages/corporate/corporate-trade-investment/CorporateTradeInvestmentOthers";

// criminal 
import CriminalOutlet from "./pages/criminal/CriminalOutlet";
import CriminalOrdinaryCrime from "./pages/criminal/CriminalOrdinaryCrime";
import CriminalCorruption from "./pages/criminal/CriminalCorruption";
import CriminalMoneyLaundering from "./pages/criminal/CriminalMoneyLaundering";
import CriminalTaxCustomCrimes from "./pages/criminal/CriminalTaxCustomCrimes";

// other services
import HomeTraining from "./pages/other-services/Training";
import HomeConsulting from "./pages/other-services/Consulting";
import HomeResearches from "./pages/other-services/Researches";

function App() {
  const { data: user } = useReadQuery({
    url: "/user/readProfileInfo",
    tag: ["users"]
  });

  // useEffect(() => {
  //   console.log(user, "user data from app js");
  // }, [user]);
  // console.log(user, "user from app js");
  return (
    <Flowbite>
      <userContext.Provider value={{ user: user?.data }}>
        <div className={`font-workSans medium   tracking-wide`}>
          <div className="flex flex-col">
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signUp" element={<SignUp />}></Route>
              <Route path="/forget" element={<Forget />}></Route>
              <Route path="/reset" element={<Reset />}></Route>
              <Route path="/business" element={<StaticPage />}></Route>
              <Route path="/admin" element={<AdminDashboard />}>
                <Route path="/admin" element={<AdminDashboardIndex />}></Route>
                <Route path="/admin/case" element={<SuperAdminCase />}></Route>
                <Route
                  path="/admin/cases"
                  element={<SuperAdminCases />}
                ></Route>
              </Route>

              {/* ###################################### ADMIN DASHBOARD #################################### */}
              <Route path="/dashboard" element={<HomeDashboard />}>
                <Route
                  path="/dashboard/applications"
                  element={<Applications />}
                />
              </Route>

              {/* ###################################### HOME #################################### */}
              <Route path="/" element={<FinalHome />}>
                <Route path="/" element={<HomeIndex />}></Route>
                {/* civil-family */}
                <Route path="/family" element={<CivilFamily />}>
                  <Route index element={<CivilFamilyMaintenance />}></Route>
                  <Route path="/family/divorce" element={<CivilFamilyDivorce />}></Route>
                  <Route path="/family/irregular-union" element={<CivilFamilyIrregularUnion />}></Route>
                  <Route path="/family/adoption" element={<CivilFamilyAdoption />}></Route>
                  <Route path="/family/others" element={<CivilFamilyOthers />}></Route>
                </Route>
                {/* corporate */}
                {/* corporate-intellectual property */}
                <Route path="/corporate/intellectual-property" element={<CorporateIntellectualProperty />}>
                  <Route path="/corporate/intellectual-property" element={<CorporateCopyright />}></Route>
                  <Route path="/corporate/intellectual-property/patent" element={<CorporatePatent />}></Route>
                  <Route path="/corporate/intellectual-property/trademark" element={<CorporateTrademark />}></Route>
                  <Route path="/corporate/intellectual-property/utilities" element={<CorporateUtilities />}></Route>
                  <Route path="/corporate/intellectual-property/geographical-indications" element={<CorporateGeographicalIndication />}></Route>
                  <Route path="/corporate/intellectual-property/varieties-plant-breeds-right" element={<CorporateVarietiesPlantBreedsRight />}></Route>
                  <Route path="/corporate/intellectual-property/others" element={<CorporateOthers />}></Route>
                </Route>
                {/* corporate-trade-investment */}
                <Route path="/corporate/trade-investment" element={<CorporateTradeInvestment />}>
                  <Route path="/corporate/trade-investment" element={<CorporateIncorporation />}></Route>
                  <Route path="/corporate/trade-investment/bankruptcy" element={<CorporateBankruptcy />}></Route>
                  <Route path="/corporate/trade-investment/conversion" element={<CorporateConversion />}></Route>
                  <Route path="/corporate/trade-investment/merger" element={<CorporateMerger />}></Route>
                  <Route path="/corporate/trade-investment/investment" element={<CorporateInvestment />}></Route>
                  <Route path="/corporate/trade-investment/others" element={<CorporateTradeInvestmentOthers />}></Route>
                </Route>
                {/* criminal */}
                <Route path="/criminal" element={<CriminalOutlet />}>
                  <Route path="/criminal/ordinary-crime" element={<CriminalOrdinaryCrime />}></Route>
                  <Route path="/criminal/corruption" element={<CriminalCorruption />}></Route>
                  <Route path="/criminal/money-laundering" element={<CriminalMoneyLaundering />}></Route>
                  <Route path="/criminal/tax-custom-crimes" element={<CriminalTaxCustomCrimes />}></Route>
                </Route>
                <Route path="/succession" element={<Succession />}></Route>
                <Route path="/employment" element={<Employment />}></Route>
                <Route path="/property" element={<Property />}></Route>
                <Route path="/torts" element={<Torts />}></Route>
                <Route
                  path="/civil/contract"
                  element={<CivilContractOutlet />}
                >
                  <Route path="/civil/contract" element={<CivilContractGeneralContract />}></Route>
                  <Route path="/civil/contract/special-movables" element={<CivilContractSpecialMovables />}></Route>
                  <Route path="/civil/contract/sale-lease-buildings" element={<CivilContractSaleLeaseBuildings />}></Route>
                  <Route path="/civil/contract/construction" element={<CivilContractConstruction />}></Route>
                  <Route path="/civil/contract/supply-goods-services" element={<CivilContractSupplyGoodsServices />}></Route>
                  <Route path="/civil/contract/rental-machineries-vehicles" element={<CivilContractRentalMachineriesVehicles />}></Route>
                  <Route path="/civil/contract/loan" element={<CivilContractLoan />}></Route>

                </Route>
                {/* other services */}
                <Route path="/training" element={<HomeTraining />}></Route>
                <Route path="/consulting" element={<HomeConsulting />}></Route>
                <Route path="/researches" element={<HomeResearches />}></Route>
              </Route>

              {/* ###################################### LAWYER DASHBOARD #################################### */}
              <Route path="/dashboard/lawyer" element={<LawyerDashboard />}>
                <Route
                  // path="/dashboard/customer/home"
                  index
                  element={<LawyerDashboardHome />}
                ></Route>
                {/* customer case request */}
                <Route
                  path="/dashboard/lawyer/profile"
                  element={<LawyerProfile />}
                ></Route>
                {/* change password */}
                <Route
                  path="/dashboard/lawyer/change-password"
                  element={<ChangePassword />}
                ></Route>
                <Route
                  path="/dashboard/lawyer/lawyer-new-case"
                  element={<ComingSoon />}
                // element={<LawyerNewCase />}
                ></Route>
              </Route>

              {/* ###################################### CUSTOMER DASHBOARD #################################### */}
              <Route path="/dashboard/customer" element={<CustomerDashboard />}>
                <Route
                  // path="/dashboard/customer/home"
                  index
                  element={<CustomerDashboardHome />}
                ></Route>
                <Route
                  path="/dashboard/customer/message"
                  element={<ComingSoon />}
                // element={<Message />}
                ></Route>
                <Route
                  path="/dashboard/customer/message/video"
                  element={<ComingSoon />}
                // element={<Video />}
                />
                <Route
                  path="/dashboard/customer/appointment"
                  element={<ComingSoon />}
                // element={<Appointment />}
                ></Route>
                <Route
                  path="/dashboard/customer/success"
                  element={<ComingSoon />}
                // element={<Success />}
                ></Route>
                {/* customer compliance */}
                <Route
                  path="/dashboard/customer/new-case"
                  // element={<ComingSoon />}
                  element={<NewCase />}
                ></Route>
                {/* customer case request */}
                <Route
                  path="/dashboard/customer/on-request"
                  element={<OnRequest />}
                ></Route>
                {/* customer case request */}
                <Route
                  path="/dashboard/customer/profile"
                  element={<CustomerProfile />}
                ></Route>
                {/* change password */}
                <Route
                  path="/dashboard/customer/change-password"
                  element={<ChangePassword />}
                ></Route>

                {/* customer charts */}
                <Route
                  path="/dashboard/customer/case-team"
                  element={<ComingSoon />}
                // element={<CaseTeam />}
                ></Route>
                <Route
                  path="/dashboard/customer/active-case"
                  element={<ComingSoon />}
                // element={<ActiveCase />}
                ></Route>
                <Route
                  path="/dashboard/customer/closed-case"
                  element={<ComingSoon />}
                // element={<ClosedCase />}
                ></Route>
                {/* customer finance */}
                <Route
                  path="/dashboard/customer/add-funds"
                  element={<ComingSoon />}
                // element={<AddFunds />}
                ></Route>
                <Route
                  path="/dashboard/customer/requested-payment"
                  element={<ComingSoon />}
                // element={<RequestedPayment />}
                ></Route>
                <Route
                  path="/dashboard/customer/refund-funds"
                  element={<ComingSoon />}
                // element={<RefundFunds />}
                ></Route>
                <Route
                  path="/dashboard/customer/recent-transactions"
                  element={<ComingSoon />}
                // element={<RecentTransactions />}
                ></Route>
                {/* customer services */}
                <Route
                  path="/dashboard/customer/training"
                  element={<ComingSoon />}
                // element={<Training />}
                ></Route>
                <Route
                  path="/dashboard/customer/consulting"
                  element={<ComingSoon />}
                // element={<Consulting />}
                ></Route>
                <Route
                  path="/dashboard/customer/researches"
                  element={<ComingSoon />}
                // element={<Researches />}
                ></Route>
              </Route>
              {/* customers */}
              <Route path="/dashboard/customers" element={<CustomersDashboard />}>
                <Route path="/dashboard/customers" element={<CustomersDashboardIndex />}></Route>
                {/* compliance */}
                <Route path="/dashboard/customers/compliance" element={<CustomersDashboardCompliance />}>
                  <Route path="/dashboard/customers/compliance" element={<CustomersDashboardNewCase />}></Route>
                  <Route path="/dashboard/customers/compliance/on-request" element={<CustomersDashboardOnRequest />}>
                    <Route path="/dashboard/customers/compliance/on-request" element={<CustomersDashboardOnRequestList />}></Route>
                    <Route path="/dashboard/customers/compliance/on-request/detail" element={<CustomersDashboardOnRequestDetail />}></Route>
                  </Route>
                </Route>
                {/* customers dashboard my Chart */}
                <Route path="/dashboard/customers/my-chart" element={<CustomersDashboardMyChart />}>
                  <Route path="/dashboard/customers/my-chart/case-team" element={<CustomersDashboardMyChartCaseTeam />}>
                    <Route path="/dashboard/customers/my-chart/case-team" element={<CustomersDashboardMyChartCaseTeamIndex />}></Route>
                  </Route>
                  <Route path="/dashboard/customers/my-chart/active-case" element={<CustomersDashboardMyChartActiveCase />}>
                    <Route path="/dashboard/customers/my-chart/active-case" element={<CustomersDashboardMyChartActiveCaseIndex />}></Route>
                  </Route>
                  <Route path="/dashboard/customers/my-chart/closed-case" element={<CustomersDashboardMyChartClosedCase />}></Route>
                </Route>
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </div>
      </userContext.Provider>
    </Flowbite>
  );
}

export default App;
