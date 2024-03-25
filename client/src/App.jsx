import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import HomeDashboard from "./pages/dashboard/HomeDashboard";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { Flowbite } from "flowbite-react";
import FinalHome from "./pages/FinalHome";
// customer
import CustomerDashboard from "./pages/dashboard/customer/CustomerDashboard";
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
import LawyerDashboard from "./pages/dashboard/lawyer/LawyerDashboard";
import LawyerDashboardHome from "./pages/dashboard/lawyer/lawyer-sub-pages/LawyerDashboardHome";
import LawyerNewCase from "./pages/dashboard/lawyer/lawyer-sub-pages/LawyerNewCase";

function App() {
  const jwt = localStorage.getItem("jwt");
  // const user = JSON.parse(localStorage.getItem("user"));

  // console.log(jwt, user);
  return (
    <Flowbite>
      <div className={`font-workSans medium   tracking-wide`}>
        <div className="flex flex-col">
          <Routes>
            <Route path="/" element={<FinalHome />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="signUp" element={<SignUp />}></Route>
            <Route path="chat" element={<Chat />}></Route>
            <Route path="/dashboard/lawyer" element={<LawyerDashboard />}>
              <Route
                // path="/dashboard/customer/home"
                index
                element={<LawyerDashboardHome />}
              ></Route>
              <Route
                path="/dashboard/lawyer/lawyer-new-case"
                element={<LawyerNewCase />}
              ></Route>
            </Route>
            <Route path="/dashboard/customer" element={<CustomerDashboard />}>
              <Route
                // path="/dashboard/customer/home"
                index
                element={<CustomerDashboardHome />}
              ></Route>
              <Route
                path="/dashboard/customer/message"
                element={<Message />}
              ></Route>
              <Route
                path="/dashboard/customer/appointment"
                element={<Appointment />}
              ></Route>
              {/* customer compliance */}
              <Route
                path="/dashboard/customer/new-case"
                element={<NewCase />}
              ></Route>
              {/* customer charts */}
              <Route
                path="/dashboard/customer/case-team"
                element={<CaseTeam />}
              ></Route>
              <Route
                path="/dashboard/customer/active-case"
                element={<ActiveCase />}
              ></Route>
              <Route
                path="/dashboard/customer/closed-case"
                element={<ClosedCase />}
              ></Route>
              {/* customer finance */}
              <Route
                path="/dashboard/customer/add-funds"
                element={<AddFunds />}
              ></Route>
              <Route
                path="/dashboard/customer/requested-payment"
                element={<RequestedPayment />}
              ></Route>
              <Route
                path="/dashboard/customer/refund-funds"
                element={<RefundFunds />}
              ></Route>
              <Route
                path="/dashboard/customer/recent-transactions"
                element={<RecentTransactions />}
              ></Route>
              {/* customer services */}
              <Route
                path="/dashboard/customer/training"
                element={<Training />}
              ></Route>
              <Route
                path="/dashboard/customer/consulting"
                element={<Consulting />}
              ></Route>
              <Route
                path="/dashboard/customer/researches"
                element={<Researches />}
              ></Route>
            </Route>
            {/* {jwt && user && (
              <Route
                path="/dashboard/*"
                element={<HomeDashboard role={user?.role} />}
              ></Route>
            )} */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        {/* secure routes */}
        {/* <mobileContext.Provider
        value={{
          mobile,
          setMobile,
          nightMode,
          setNightMode,
          borderColor,
          role,
        }}
      >
        <div className="flex h-[100vh]  w-full flex-col">
          <div
            className={`flex border ${borderColor} justify-between items-center`}
          >
            <div className="flex items-center w-[300px] gap-2 p-2">
              <Balance fontSize="large" />{" "}
              <p className="title font-semibold">JMS</p>
            </div>
            <Header />
          </div>
          <div className="w-full h-auto flex ">
            {mobile && (
              <Sidebar
                type="mobile"
                value={`h-[91.2vh] ${
                  nightMode
                    ? "bg-gray-800 text-gray-500"
                    : "bg-white text-gray-500"
                } absolute md:hidden w-[300px] pb-5 z-20`}
              />
            )}
            <Sidebar value="h-[91.2vh] hidden md:block w-[300px] pb-5  z-20" />
            <div className="flex flex-col overflow-y-scroll w-full h-[90.5vh]  px-5 py-2">
              <div className="w-full flex justify-between items-center py-2 px-2">
                <div className="flex flex-col">
                  <div className="title flex text-blue-500">
                    <p className="uppercase">
                      {paths[paths.length - 1].toString().split("")[0]}
                    </p>
                    <p>
                      {paths[paths.length - 1]
                        .replaceAll("-", " ")
                        .split("")
                        .splice(1, paths[paths.length - 1].length - 1)}
                    </p>{" "}
                  </div>
                  <div className="w-auto mb-2 mt-1 flex items-center">
                    {paths.map((path, i) => (
                      <div key={i} className="flex gap-4">
                        {i !== paths.length - 1 && (
                          <Link
                            to={location.pathname
                              .split("/")
                              .splice(0, paths.length - 1)
                              .join("/")}
                          >
                            {path.replaceAll("-", " ")}/
                          </Link>
                        )}
                        {i === paths.length - 1 && (
                          <p className="text-blue-500">
                            {paths.pop().replaceAll("-", " ") + " >"}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex gap-1 flex-col items-end justify-end h-auto w-auto">
                  <p className="font-semibold">{greetingHandler()} Tewodros</p>
                  <p className="flex text-[10px] gap-1 items-center text-gray-400">
                    <AccessTime sx={{ width: 16, height: 16 }} />
                    {dateHandler()}
                  </p>
                </div>
              </div>

              <Routes>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route
                  path="/dashboard/service-area"
                  element={<AllServiceArea />}
                />
                <Route
                  path="/dashboard/service-rea/update"
                  element={<ServiceAreaUpdate />}
                />

                <Route path="/dashboard/case-chart" element={<CaseChart />} />

                <Route
                  path="/dashboard/applications"
                  element={<Applications />}
                />

                <Route path="/dashboard/chat" element={<Chat />} />

                <Route
                  path="/dashboard/representative"
                  element={<Representative />}
                />

                <Route path="/dashboard/payment" element={<Payment />} />

                <Route path="/dashboard/lawyer" element={<Lawyer />} />

                <Route path="/dashboard/role-create" element={<CreateRole />} />
                <Route path="/dashboard/role-all" element={<AllRoles />} />
                <Route path="/dashboard/role-all/update" element={<Update />} />
                <Route path="/dashboard/role-all/detail" element={<Detail />} />
                <Route path="/dashboard/customers" element={<Customers />} />
                <Route path="/dashboard/consulting" element={<Consulting />} />
                <Route path="/dashboard/tutorials" element={<Tutorials />} />
                <Route path="/dashboard/Client-type" element={<ClientType />} />
                <Route
                  path="/dashboard/Client-type/update"
                  element={<ClientTypeUpdate />}
                />
                <Route path="/dashboard/reports" element={<Reports />} />
                <Route path="*" element={<p>Path not resolved</p>} />
              </Routes>
            </div>
          </div>
        </div>
      </mobileContext.Provider> */}
      </div>
    </Flowbite>
  );
}

export default App;
