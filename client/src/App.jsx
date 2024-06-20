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

// ------ customers dashboard start ---- //
// customers
import CustomersDashboard from "./pages/dashboard/customers/CustomersDashboard";
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
import CustomersDashboardMyChartCaseTeam from "./pages/dashboard/customers/customers-pages/my-chart/case-team/CustomersDashboardMyChartCaseTeam.jsx";
import CustomersDashboardMyChartCaseTeamIndex from "./pages/dashboard/customers/customers-pages/my-chart/case-team/case-team-pages/CustomersDashboardMyChartCaseTeamIndex.jsx";
// ------------
import CustomersDashboardMyChartActiveCase from "./pages/dashboard/customers/customers-pages/my-chart/active-case/CustomersDashboardMyChartActiveCase.jsx";
import CustomersDashboardMyChartActiveCaseIndex from "./pages/dashboard/customers/customers-pages/my-chart/active-case/active-case-pages/CustomersDashboardMyChartActiveCaseIndex.jsx";
// -------------
import CustomersDashboardMyChartClosedCase from "./pages/dashboard/customers/customers-pages/my-chart/closed-case/CustomersDashboardMyChartClosedCase.jsx";
import CustomersDashboardMyChartClosedCaseIndex from "./pages/dashboard/customers/customers-pages/my-chart/closed-case/closed-page-cases/CustomersDashboardMyChartClosedCaseIndex.jsx";

// customers dashboard -- my chart -- end

// customers dashboard -- appointment -- start
import CustomersDashboardAppointment from "./pages/dashboard/customers/customers-pages/appointment/CustomersDashboardAppointment.jsx";
// office - appointment
import CustomersDashboardAppointmentOfficeAppointment from "./pages/dashboard/customers/customers-pages/appointment/office-appointment/CustomersDashboardAppointmentOfficeAppointment.jsx";
import CustomersDashboardAppointmentOfficeAppointmentIndex from "./pages/dashboard/customers/customers-pages/appointment/office-appointment/office-appointment-sub-pages/CustomersDashboardAppointmentOfficeAppointmentIndex.jsx";
import CustomersDashboardAppointmentOfficeAppointmentNewAppointmentForm from "./pages/dashboard/customers/customers-pages/appointment/office-appointment/office-appointment-sub-pages/CustomersDashboardAppointmentOfficeAppointmentNewAppointmentForm.jsx";

// case-appointment
import CustomersDashboardAppointmentCaseAppointment from "./pages/dashboard/customers/customers-pages/appointment/case-appointment/CustomersDashboardAppointmentCaseAppointment.jsx";
import CustomersDashboardAppointmentCaseAppointmentIndex from "./pages/dashboard/customers/customers-pages/appointment/case-appointment/case-appointment-sub-pages/CustomersDashboardAppointmentCaseAppointmentIndex.jsx";
// customers dashboard -- appointment -- end

// customers dashboard -- other services -- start

import CustomersDashboardOtherServices from "./pages/dashboard/customers/customers-pages/other-services/CustomersDashboardOtherServices.jsx";

// training start
import CustomersDashboardTrainingOutlet from "./pages/dashboard/customers/customers-pages/other-services/training/CustomersDashboardTrainingOutlet.jsx";
import CustomersDashboardTrainingIndex from "./pages/dashboard/customers/customers-pages/other-services/training/sub-pages/CustomersDashboardTrainingIndex.jsx";
import CustomersDashboardNewTrainingForm from "./pages/dashboard/customers/customers-pages/other-services/training/sub-pages/CustomersDashboardNewTrainingForm.jsx";

// consulting
import CustomersDashboardConsultingOutlet from "./pages/dashboard/customers/customers-pages/other-services/consulting/CustomersDashboardConsultingOutlet.jsx";
import CustomersDashboardConsultingIndex from "./pages/dashboard/customers/customers-pages/other-services/consulting/sub-pages/CustomersDashboardConsultingIndex.jsx";
import CustomersDashboardConsultingNewConsultingForm from "./pages/dashboard/customers/customers-pages/other-services/consulting/sub-pages/CustomersDashboardConsultingNewConsultingForm.jsx";

// research
import CustomersDashboardResearchOutlet from "./pages/dashboard/customers/customers-pages/other-services/research/CustomersDashboardResearchOutlet.jsx";
import CustomersDashboardResearchIndex from "./pages/dashboard/customers/customers-pages/other-services/research/sub-pages/CustomersDashboardResearchIndex.jsx";

// customers dashboard -- other services -- end

// ------ customers dashboard start ---- //

// ------ lawyers dashboard start ---- //
import LawyersDashboard from "./pages/dashboard/lawyers/LawyersDashboard.jsx";
import LawyersDashboardIndex from "./pages/dashboard/lawyers/lawyers-pages/LawyersDashboardIndex.jsx";

// lawyers dashboard all cases
import LawyersDashboardMyChartAllCases from "./pages/dashboard/lawyers/lawyers-pages/my-chart/all-cases/LawyersDashboardMyChartAllCases.jsx";
import LawyersDashboardMyChartAllCasesIndex from "./pages/dashboard/lawyers/lawyers-pages/my-chart/all-cases/all-cases-sub-pages/LawyersDashboardMyChartAllCasesIndex.jsx";

// lawyers dashboard pending cases
import LawyersDashboardAllPendingCases from "./pages/dashboard/lawyers/lawyers-pages/lawyers-dashboard-pending-cases/lawyers-dashboard-pending-cases-pages/LawyersDashboardAllPendingCases.jsx";

// lawyers dashboard my chart
import LawyersDashboardMyChart from "./pages/dashboard/lawyers/lawyers-pages/my-chart/LawyersDashboardMyChart.jsx";

// active case
import LawyersDashboardMyChartActiveCases from "./pages/dashboard/lawyers/lawyers-pages/my-chart/active-cases/LawyersDashboardMyChartActiveCases.jsx";
import LawyersDashboardMyChartActiveCasesIndex from "./pages/dashboard/lawyers/lawyers-pages/my-chart/active-cases/active-case-pages/LawyersDashboardMyChartActiveCasesIndex.jsx";

// closed cases
import LawyersDashboardMyChartClosedCases from "./pages/dashboard/lawyers/lawyers-pages/my-chart/closed-cases/LawyersDashboardMyChartClosedCases.jsx";
import LawyersDashboardMyChartClosedCasesIndex from "./pages/dashboard/lawyers/lawyers-pages/my-chart/closed-cases/closed-cases-sub-pages/LawyersDashboardMyChartClosedCasesIndex.jsx";

// lawyers - appointment
import LawyersDashboardAppointment from "./pages/dashboard/lawyers/lawyers-pages/lawyers-appointment/LawyersDashboardAppointment.jsx";
// -- office appointment
import LawyersDashboardOfficeAppointment from "./pages/dashboard/lawyers/lawyers-pages/lawyers-appointment/lawyers-dashboard-office-appointment/LawyersDashboardOfficeAppointment.jsx";
import LawyersDashboardOfficeAppointmentIndex from "./pages/dashboard/lawyers/lawyers-pages/lawyers-appointment/lawyers-dashboard-office-appointment/office-appointment-pages/LawyersDashboardOfficeAppointmentIndex.jsx";
import LawyersDashboardOfficeAppointmentNewAppointmentForm from "./pages/dashboard/lawyers/lawyers-pages/lawyers-appointment/lawyers-dashboard-office-appointment/office-appointment-pages/LawyersDashboardOfficeAppointmentNewAppointmentForm.jsx";

// -- case appointment
import LawyersDashboardCaseAppointment from "./pages/dashboard/lawyers/lawyers-pages/lawyers-appointment/lawyers-dashboard-case-appointment/LawyersDashboardCaseAppointment.jsx";
import LawyersDashboardCaseAppointmentIndex from "./pages/dashboard/lawyers/lawyers-pages/lawyers-appointment/lawyers-dashboard-case-appointment/case-appointment-pages/LawyersDashboardCaseAppointmentIndex.jsx";
import LawyersDashboardCaseAppointmentNewCaseAppointmentForm from "./pages/dashboard/lawyers/lawyers-pages/lawyers-appointment/lawyers-dashboard-case-appointment/case-appointment-pages/LawyersDashboardCaseAppointmentNewCaseAppointmentForm.jsx";

// ------ lawyers dashboard end ---- //

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
import CivilContractOther from "./pages/civil/contract/CivilContractOther.jsx";

// civil -- family
import CivilFamily from "./pages/civil/family/CivilFamily";
import CivilFamilyMaintenance from "./pages/civil/family/family-sub-pages/CivilFamilyMaintenance";
import CivilFamilyDivorce from "./pages/civil/family/family-sub-pages/CivilFamilyDivorce";
import CivilFamilyIrregularUnion from "./pages/civil/family/family-sub-pages/CivilFamilyIrregularUnion";
import CivilFamilyAdoption from "./pages/civil/family/family-sub-pages/CivilFamilyAdoption";
import CivilFamilyOthers from "./pages/civil/family/family-sub-pages/CivilFamilyOthers";

// corporate
// corporate - contract
import CorporateContract from "./pages/corporate/CorporateContract.jsx";
import CorporateContractSpecialMovables from "./pages/corporate/corporate-contract/CorporateContractSpecialMovables.jsx";
import CorporateSaleLeaseBuildings from "./pages/corporate/corporate-contract/CorporateSaleLeaseBuildings.jsx";
import CorporateConstruction from "./pages/corporate/corporate-contract/CorporateConstruction.jsx";
import CorporateSupplyGoodServices from "./pages/corporate/corporate-contract/CorporateSupplyGoodServices.jsx";
import CorporateRentalMachineriesVehicles from "./pages/corporate/corporate-contract/CorporateRentalMachineriesVehicles.jsx";
import CorporateLoan from "./pages/corporate/corporate-contract/CorporateLoan.jsx";
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

// corporate - financial sector
import CorporateFinancialSectorOutlet from "./pages/corporate/corporate-financial-sector/CorporateFinancialSectorOutlet.jsx";
import CorporateFinancialSectorBanking from "./pages/corporate/corporate-financial-sector/CorporateFinancialSectorBanking.jsx";
import CorporateFinancialSectorCapitalMarket from "./pages/corporate/corporate-financial-sector/CorporateFinancialSectorCapitalMarket.jsx";
import CorporateFinancialSectorInsurance from "./pages/corporate/corporate-financial-sector/CorporateFinancialSectorInsurance.jsx";
import CorporateFinancialSectorPayment from "./pages/corporate/corporate-financial-sector/CorporateFinancialSectorPayment.jsx";
import CorporateFinancialSectorOthers from "./pages/corporate/corporate-financial-sector/CorporateFinancialSectorOthers.jsx";

// corporate
import CorporateTaxation from "./pages/corporate/CorporateTaxation.jsx";
import CorporateCustoms from "./pages/corporate/CorporateCustoms.jsx";
import CorporateRealEstateLaw from "./pages/corporate/CorporateRealEstateLaw.jsx";
import CorporateLand from "./pages/corporate/CorporateLand.jsx";

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
                  <Route
                    path="/family/divorce"
                    element={<CivilFamilyDivorce />}
                  ></Route>
                  <Route
                    path="/family/irregular-union"
                    element={<CivilFamilyIrregularUnion />}
                  ></Route>
                  <Route
                    path="/family/adoption"
                    element={<CivilFamilyAdoption />}
                  ></Route>
                  <Route
                    path="/family/others"
                    element={<CivilFamilyOthers />}
                  ></Route>
                </Route>
                {/* corporate */}
                {/* corporate-contract */}
                <Route
                  path="/corporate/contract"
                  element={<CorporateContract />}
                >
                  <Route
                    path="/corporate/contract"
                    element={<CorporateContractSpecialMovables />}
                  ></Route>
                  <Route
                    path="/corporate/contract/sale-lease-buildings"
                    element={<CorporateSaleLeaseBuildings />}
                  ></Route>
                  <Route
                    path="/corporate/contract/construction"
                    element={<CorporateConstruction />}
                  ></Route>
                  <Route
                    path="/corporate/contract/supply-goods-services"
                    element={<CorporateSupplyGoodServices />}
                  ></Route>
                  <Route
                    path="/corporate/contract/rental-machineries-vehicles"
                    element={<CorporateRentalMachineriesVehicles />}
                  ></Route>
                  <Route
                    path="/corporate/contract/loan"
                    element={<CorporateLoan />}
                  ></Route>
                </Route>
                {/* corporate-intellectual property */}
                <Route
                  path="/corporate/intellectual-property"
                  element={<CorporateIntellectualProperty />}
                >
                  <Route
                    path="/corporate/intellectual-property"
                    element={<CorporateCopyright />}
                  ></Route>
                  <Route
                    path="/corporate/intellectual-property/patent"
                    element={<CorporatePatent />}
                  ></Route>
                  <Route
                    path="/corporate/intellectual-property/trademark"
                    element={<CorporateTrademark />}
                  ></Route>
                  <Route
                    path="/corporate/intellectual-property/utilities"
                    element={<CorporateUtilities />}
                  ></Route>
                  <Route
                    path="/corporate/intellectual-property/geographical-indications"
                    element={<CorporateGeographicalIndication />}
                  ></Route>
                  <Route
                    path="/corporate/intellectual-property/varieties-plant-breeds-right"
                    element={<CorporateVarietiesPlantBreedsRight />}
                  ></Route>
                  <Route
                    path="/corporate/intellectual-property/others"
                    element={<CorporateOthers />}
                  ></Route>
                </Route>
                {/* corporate-trade-investment */}
                <Route
                  path="/corporate/trade-investment"
                  element={<CorporateTradeInvestment />}
                >
                  <Route
                    path="/corporate/trade-investment"
                    element={<CorporateIncorporation />}
                  ></Route>
                  <Route
                    path="/corporate/trade-investment/bankruptcy"
                    element={<CorporateBankruptcy />}
                  ></Route>
                  <Route
                    path="/corporate/trade-investment/conversion"
                    element={<CorporateConversion />}
                  ></Route>
                  <Route
                    path="/corporate/trade-investment/merger"
                    element={<CorporateMerger />}
                  ></Route>
                  <Route
                    path="/corporate/trade-investment/investment"
                    element={<CorporateInvestment />}
                  ></Route>
                  <Route
                    path="/corporate/trade-investment/others"
                    element={<CorporateTradeInvestmentOthers />}
                  ></Route>
                </Route>
                {/* corporate - financial sector */}
                <Route
                  path="/corporate/financial-sector"
                  element={<CorporateFinancialSectorOutlet />}
                >
                  <Route
                    path="/corporate/financial-sector/banking"
                    element={<CorporateFinancialSectorBanking />}
                  ></Route>
                  <Route
                    path="/corporate/financial-sector/capital-market"
                    element={<CorporateFinancialSectorCapitalMarket />}
                  ></Route>
                  <Route
                    path="/corporate/financial-sector/insurance"
                    element={<CorporateFinancialSectorInsurance />}
                  ></Route>
                  <Route
                    path="/corporate/financial-sector/payment"
                    element={<CorporateFinancialSectorPayment />}
                  ></Route>
                  <Route
                    path="/corporate/financial-sector/others"
                    element={<CorporateFinancialSectorOthers />}
                  ></Route>
                </Route>
                {/* corporate general */}
                <Route
                  path="/corporate/taxation"
                  element={<CorporateTaxation />}
                ></Route>
                <Route
                  path="/corporate/customs"
                  element={<CorporateCustoms />}
                ></Route>
                <Route
                  path="/corporate/real-estate"
                  element={<CorporateRealEstateLaw />}
                ></Route>
                <Route
                  path="/corporate/land"
                  element={<CorporateLand />}
                ></Route>

                {/* ///////////////////////////////////////////// */}
                {/* criminal */}
                <Route path="/criminal" element={<CriminalOutlet />}>
                  <Route
                    path="/criminal/ordinary-crime"
                    element={<CriminalOrdinaryCrime />}
                  ></Route>
                  <Route
                    path="/criminal/corruption"
                    element={<CriminalCorruption />}
                  ></Route>
                  <Route
                    path="/criminal/money-laundering"
                    element={<CriminalMoneyLaundering />}
                  ></Route>
                  <Route
                    path="/criminal/tax-custom-crimes"
                    element={<CriminalTaxCustomCrimes />}
                  ></Route>
                </Route>
                <Route path="/succession" element={<Succession />}></Route>
                <Route path="/employment" element={<Employment />}></Route>
                <Route path="/property" element={<Property />}></Route>
                <Route path="/torts" element={<Torts />}></Route>
                <Route path="/civil/contract" element={<CivilContractOutlet />}>
                  <Route
                    path="/civil/contract"
                    element={<CivilContractGeneralContract />}
                  ></Route>
                  <Route
                    path="/civil/contract/special-movables"
                    element={<CivilContractSpecialMovables />}
                  ></Route>
                  <Route
                    path="/civil/contract/sale-lease-buildings"
                    element={<CivilContractSaleLeaseBuildings />}
                  ></Route>
                  <Route
                    path="/civil/contract/construction"
                    element={<CivilContractConstruction />}
                  ></Route>
                  <Route
                    path="/civil/contract/supply-goods-services"
                    element={<CivilContractSupplyGoodsServices />}
                  ></Route>
                  <Route
                    path="/civil/contract/rental-machineries-vehicles"
                    element={<CivilContractRentalMachineriesVehicles />}
                  ></Route>
                  <Route
                    path="/civil/contract/others"
                    element={<CivilContractOther />}
                  ></Route>
                  <Route
                    path="/civil/contract/loan"
                    element={<CivilContractLoan />}
                  ></Route>
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
              <Route
                path="/dashboard/customers"
                element={<CustomersDashboard />}
              >
                <Route
                  path="/dashboard/customers"
                  element={<CustomersDashboardIndex />}
                ></Route>
                {/* compliance */}
                <Route
                  path="/dashboard/customers/compliance"
                  element={<CustomersDashboardCompliance />}
                >
                  <Route
                    path="/dashboard/customers/compliance"
                    element={<CustomersDashboardNewCase />}
                  ></Route>
                  <Route
                    path="/dashboard/customers/compliance/on-request"
                    element={<CustomersDashboardOnRequest />}
                  >
                    <Route
                      path="/dashboard/customers/compliance/on-request"
                      element={<CustomersDashboardOnRequestList />}
                    ></Route>
                    <Route
                      path="/dashboard/customers/compliance/on-request/detail"
                      element={<CustomersDashboardOnRequestDetail />}
                    ></Route>
                  </Route>
                </Route>
                {/* customers dashboard my Chart */}
                <Route
                  path="/dashboard/customers/my-chart"
                  element={<CustomersDashboardMyChart />}
                >
                  <Route
                    path="/dashboard/customers/my-chart/case-team"
                    element={<CustomersDashboardMyChartCaseTeam />}
                  >
                    <Route
                      path="/dashboard/customers/my-chart/case-team"
                      element={<CustomersDashboardMyChartCaseTeamIndex />}
                    ></Route>
                  </Route>
                  <Route
                    path="/dashboard/customers/my-chart/active-case"
                    element={<CustomersDashboardMyChartActiveCase />}
                  >
                    <Route
                      path="/dashboard/customers/my-chart/active-case"
                      element={<CustomersDashboardMyChartActiveCaseIndex />}
                    ></Route>
                  </Route>
                  <Route
                    path="/dashboard/customers/my-chart/closed-case"
                    element={<CustomersDashboardMyChartClosedCase />}
                  >
                    <Route
                      path="/dashboard/customers/my-chart/closed-case"
                      element={<CustomersDashboardMyChartClosedCaseIndex />}
                    ></Route>
                  </Route>
                </Route>
                {/* customers dashboard appointment */}
                <Route
                  path="/dashboard/customers/appointment"
                  element={<CustomersDashboardAppointment />}
                >
                  <Route
                    path="/dashboard/customers/appointment/office-appointment"
                    element={<CustomersDashboardAppointmentOfficeAppointment />}
                  >
                    <Route
                      path="/dashboard/customers/appointment/office-appointment"
                      element={
                        <CustomersDashboardAppointmentOfficeAppointmentIndex />
                      }
                    ></Route>
                    <Route
                      path="/dashboard/customers/appointment/office-appointment/new-office-appointment"
                      element={
                        <CustomersDashboardAppointmentOfficeAppointmentNewAppointmentForm />
                      }
                    ></Route>
                  </Route>
                  <Route
                    path="/dashboard/customers/appointment/case-appointment"
                    element={<CustomersDashboardAppointmentCaseAppointment />}
                  >
                    <Route
                      path="/dashboard/customers/appointment/case-appointment"
                      element={
                        <CustomersDashboardAppointmentCaseAppointmentIndex />
                      }
                    ></Route>
                  </Route>
                </Route>
                {/* customers dashboard other services */}
                <Route
                  path="/dashboard/customers/other-services"
                  element={<CustomersDashboardOtherServices />}
                >
                  {/* training */}
                  <Route
                    path="/dashboard/customers/other-services/training"
                    element={<CustomersDashboardTrainingOutlet />}
                  >
                    <Route
                      path="/dashboard/customers/other-services/training"
                      element={<CustomersDashboardTrainingIndex />}
                    ></Route>
                    <Route
                      path="/dashboard/customers/other-services/training/new-training"
                      element={<CustomersDashboardNewTrainingForm />}
                    ></Route>
                  </Route>
                  {/* consulting */}
                  <Route
                    path="/dashboard/customers/other-services/consulting"
                    element={<CustomersDashboardConsultingOutlet />}
                  >
                    <Route
                      path="/dashboard/customers/other-services/consulting"
                      element={<CustomersDashboardConsultingIndex />}
                    ></Route>
                    <Route
                      path="/dashboard/customers/other-services/consulting/new-consulting-form"
                      element={
                        <CustomersDashboardConsultingNewConsultingForm />
                      }
                    ></Route>
                  </Route>
                  {/* research */}
                  <Route
                    path="/dashboard/customers/other-services/research"
                    element={<CustomersDashboardResearchOutlet />}
                  >
                    <Route
                      path="/dashboard/customers/other-services/research"
                      element={<CustomersDashboardResearchIndex />}
                    ></Route>
                  </Route>
                </Route>
              </Route>

              {/* lawyers  */}
              <Route path="/dashboard/lawyers" element={<LawyersDashboard />}>
                <Route
                  path="/dashboard/lawyers"
                  element={<LawyersDashboardIndex />}
                ></Route>
                {/* all cases */}
                <Route
                  path="/dashboard/lawyers/my-chart/all-cases"
                  element={<LawyersDashboardMyChartAllCases />}
                >
                  <Route
                    path="/dashboard/lawyers/my-chart/all-cases"
                    element={<LawyersDashboardMyChartAllCasesIndex />}
                  ></Route>
                </Route>

                {/* pending cases */}
                <Route
                  path="/dashboard/lawyers/pending-cases"
                  element={<LawyersDashboardAllPendingCases />}
                ></Route>
                <Route
                  path="/dashboard/lawyers/my-chart"
                  element={<LawyersDashboardMyChart />}
                >
                  <Route
                    path="/dashboard/lawyers/my-chart/active-cases"
                    element={<LawyersDashboardMyChartActiveCases />}
                  >
                    <Route
                      path="/dashboard/lawyers/my-chart/active-cases"
                      element={<LawyersDashboardMyChartActiveCasesIndex />}
                    ></Route>
                  </Route>
                </Route>

                {/* closed cases */}
                <Route
                  path="/dashboard/lawyers/my-chart/closed-cases"
                  element={<LawyersDashboardMyChartClosedCases />}
                >
                  <Route
                    path="/dashboard/lawyers/my-chart/closed-cases"
                    element={<LawyersDashboardMyChartClosedCasesIndex />}
                  ></Route>
                </Route>

                {/* appointment */}
                <Route
                  path="/dashboard/lawyers/appointment"
                  element={<LawyersDashboardAppointment />}
                >
                  {/* office appointment */}
                  <Route
                    path="/dashboard/lawyers/appointment/office-appointment"
                    element={<LawyersDashboardOfficeAppointment />}
                  >
                    <Route
                      path="/dashboard/lawyers/appointment/office-appointment"
                      element={<LawyersDashboardOfficeAppointmentIndex />}
                    ></Route>
                    <Route
                      path="/dashboard/lawyers/appointment/office-appointment/new-office-appointment"
                      element={
                        <LawyersDashboardOfficeAppointmentNewAppointmentForm />
                      }
                    ></Route>
                  </Route>
                  {/* case appointment */}
                  <Route
                    path="/dashboard/lawyers/appointment/case-appointment"
                    element={<LawyersDashboardCaseAppointment />}
                  >
                    <Route
                      path="/dashboard/lawyers/appointment/case-appointment"
                      element={<LawyersDashboardCaseAppointmentIndex />}
                    ></Route>
                    <Route
                      path="/dashboard/lawyers/appointment/case-appointment/new-case-appointment"
                      element={
                        <LawyersDashboardCaseAppointmentNewCaseAppointmentForm />
                      }
                    ></Route>
                  </Route>
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
