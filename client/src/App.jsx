import { Link, Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./pages/SignUp";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateRole from "./pages/dashboard/roles/CreateRole";
import AllRoles from "./pages/dashboard/roles/AllRoles";
import Update from "./pages/dashboard/roles/Update";
import Detail from "./pages/dashboard/roles/Detail";
import Dashboard from "./pages/dashboard/Dashboard";
import ClientType from "./pages/dashboard/clientType/ClientType";
import ClientTypeUpdate from "./pages/dashboard/clientType/ClientTypeUpdate";
import AllServiceArea from "./pages/dashboard/serviceArea/AllServiceArea";
import ServiceAreaUpdate from "./pages/dashboard/serviceArea/ServiceAreaUpdate";
import { AccessTime, Balance } from "@mui/icons-material";
import { createContext, useState } from "react";
import CaseChart from "./pages/dashboard/caseChart/CaseChart";
import Applications from "./pages/dashboard/applications/Applications";
import Chat from "./pages/dashboard/chat/Chat";
import Representative from "./pages/dashboard/representatives/Representative";
import Payment from "./pages/dashboard/payment/Payment";
import Lawyer from "./pages/dashboard/lawyers/Lawyer";
import Customers from "./pages/dashboard/customers/Customers";
import Consulting from "./pages/dashboard/consulting/Consulting";
import Tutorials from "./pages/dashboard/tutorials/Tutorials";
import Reports from "./pages/dashboard/reports/Reports";

export const mobileContext = createContext();
function App() {
  const user = JSON.parse(sessionStorage.getItem("gsm-user"));
  const location = useLocation();
  const paths = location.pathname.split("/");

  const greetingHandler = () => {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 10) greeting = "Good Morning";
    else if (hour < 20) greeting = "Good Afternoon";
    else greeting = "Good Evening";
    return greeting;
  };

  const dateHandler = () => {
    const date = new Date().toString().split(" ").splice(0, 4).join(" ");
    const time = new Date()
      .toString()
      .split(" ")[4]
      .split(":")
      .splice(0, 2)
      .join(":");
    const type = new Date().getHours() < 12 ? "AM" : "PM";
    return `${date}  ${time} ${type}`;
  };

  const [mobile, setMobile] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const borderColor = `${nightMode ? "border-gray-700" : "border-gray-200"}`;
  let role = "customer";

  return (
    <div
      className={`font-poppins small ${
        nightMode ? "bg-gray-800 text-gray-400" : "bg-white text-gray-600"
      }  tracking-wide`}
    >
      <div className="">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
          <Route path="*" element={<p></p>} />
        </Routes>
      </div>

      {/* secure routes */}
      <mobileContext.Provider
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

              {/* {user && ( */}
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
              {/* )} */}
            </div>
          </div>
        </div>
      </mobileContext.Provider>
    </div>
  );
}

export default App;
