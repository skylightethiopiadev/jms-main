import { useState } from "react";
import { NavLink } from "react-router-dom";

// site logo
import siteMainLogo from "../../../../assets/images/site-logo/jms-site-logo.jpg";

//
import {
  IoIosArrowDown,
  IoMdNotifications,
  IoIosArrowUp,
} from "react-icons/io";
import {
  MdClose,
  MdOutlineHomeRepairService,
  MdMessage,
  MdDashboard,
} from "react-icons/md";
import { FaClock, FaRegChartBar } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { GrCompliance } from "react-icons/gr";
import { TiGlobe } from "react-icons/ti";
import { IoExitSharp } from "react-icons/io5";
// main
// CustomerLeftSideNav
const CustomerLeftSideNav = () => {
  // local states
  // nav controller states
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [isMyChartOpen, setIsMyChartOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);
  const [isOtherServiceOpen, setIsOtherServiceOpen] = useState(false);
  return (
    <div className=" w-[20%] min-w-[180px] flex flex-col justify-between px-[1%]">
      {/* logo and nav container */}
      <div className="relative">
        {/* close btn container */}
        <div className="absolute top-1 right-1">
          <button className="text-3xl text-gray-500">
            <MdClose />
          </button>
        </div>
        {/* logo */}
        <div className="flex items-center justify-center pt-[7%]">
          <NavLink className={"flex items-center justify-center"}>
            {/* icon */}
            <img src={siteMainLogo} alt="" className="w-[64px] h-[64px]" />
            <span className="text-gray-700 font-bold">MACOTA</span>
          </NavLink>
        </div>
        {/* nav container */}
        <div className="pt-[7%] text-gray-700">
          {/* Dashboard */}
          <NavLink
            to={`/dashboard/customer`}
            className={`flex items-center my-4`}
            onClick={(e) => {
              setIsComplianceOpen(false);
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
            }}
          >
            <MdDashboard className="text-lg mr-2" />
            <span>Dashboard</span>
          </NavLink>
          {/* Compliance */}
          <div className="my-4 relative">
            {/* main text */}
            <div
              className="flex items-center justify-between w-[85%] cursor-pointer"
              onClick={(e) => {
                setIsMyChartOpen(false);
                setIsFinanceOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(!isComplianceOpen);
              }}
            >
              <div className="flex items-center">
                <GrCompliance
                  className={`mr-2 text-lg ${
                    isComplianceOpen ? "text-sky-500" : ""
                  }`}
                />
                <span>Compliance</span>
              </div>
              {/* icon */}
              {isComplianceOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isComplianceOpen ? "text-sky-500" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isComplianceOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isComplianceOpen ? (
              <div className="font-normal mt-2 bg-white">
                <NavLink
                  to={`/dashboard/customer/new-case`}
                  className="pl-[20%] py-1 bg-white"
                >
                  New Case
                </NavLink>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* My Chart */}
          <div className="my-4 relative">
            {/* main text */}
            <div
              className="flex items-center justify-between w-[85%] cursor-pointer"
              onClick={(e) => {
                setIsFinanceOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(false);
                setIsMyChartOpen(!isMyChartOpen);
              }}
            >
              <div className="flex items-center">
                <FaRegChartBar
                  className={`mr-2 text-lg ${
                    isMyChartOpen ? "text-sky-500" : ""
                  }`}
                />
                <span>My Chart</span>
              </div>
              {/* icon */}
              {isMyChartOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isMyChartOpen ? "text-sky-500" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isMyChartOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isMyChartOpen ? (
              <div className="font-normal relative">
                <div className="flex flex-col w-full bg-white">
                  <NavLink className="pl-[20%] py-1">Case Team</NavLink>
                  <NavLink className="pl-[20%] py-1">Active Case</NavLink>
                  <NavLink className="pl-[20%] py-1">Closed Case</NavLink>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* message */}
          <NavLink
            className={`flex items-center my-4`}
            onClick={(e) => {
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
              setIsComplianceOpen(false);
            }}
          >
            <MdMessage className="text-lg mr-2" />
            <span>Message</span>
          </NavLink>
          {/* appointment */}
          <NavLink
            className={`flex items-center my-4`}
            onClick={(e) => {
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
              setIsComplianceOpen(false);
            }}
          >
            <FaClock className="text-lg mr-2" />
            <span>Appointment</span>
          </NavLink>
          {/* Finance */}
          <div className="my-4 relative">
            {/* main text */}
            <div
              className="flex items-center justify-between w-[85%] cursor-pointer"
              onClick={(e) => {
                setIsMyChartOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(false);
                setIsFinanceOpen(!isFinanceOpen);
              }}
            >
              <div className="flex items-center">
                <SiCashapp
                  className={`mr-2 text-lg ${
                    isFinanceOpen ? "text-sky-500" : ""
                  }`}
                />
                <span>Finance</span>
              </div>
              {/* icon */}
              {isMyChartOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isFinanceOpen ? "text-sky-500" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isFinanceOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isFinanceOpen ? (
              <div className="font-normal relative">
                <div className="flex flex-col w-full bg-white">
                  <NavLink className="pl-[20%] py-1">Add Funds</NavLink>
                  <NavLink className="pl-[20%] py-1">Requested Payment</NavLink>
                  <NavLink className="pl-[20%] py-1">Refund Funds</NavLink>
                  <NavLink className="pl-[20%] py-1">
                    Recent Transactions
                  </NavLink>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* other services */}
          <div className="my-4 relative">
            {/* main text */}
            <div
              className="flex items-center justify-between w-[85%] cursor-pointer"
              onClick={(e) => {
                setIsMyChartOpen(false);
                setIsFinanceOpen(false);
                setIsComplianceOpen(false);
                setIsOtherServiceOpen(!isOtherServiceOpen);
              }}
            >
              <div className="flex items-center">
                <MdOutlineHomeRepairService
                  className={`mr-2 text-lg ${
                    isOtherServiceOpen ? "text-sky-500" : ""
                  }`}
                />
                <span>Other Services</span>
              </div>
              {/* icon */}
              {isOtherServiceOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isOtherServiceOpen ? "text-sky-500" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isOtherServiceOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isOtherServiceOpen ? (
              <div className="font-normal relative">
                <div className="flex flex-col w-full bg-white">
                  <NavLink className="pl-[20%] py-1">Traning</NavLink>
                  <NavLink className="pl-[20%] py-1">Consulting</NavLink>
                  <NavLink className="pl-[20%] py-1">Researches</NavLink>
                  <NavLink className="pl-[20%] py-1">
                    Recent Transactions
                  </NavLink>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* button container */}
      <div>
        {/* top */}
        <div className="p-3 rounded-md bg-sky-100 flex flex-col items-center justify-between mb-5">
          <h3 className="font-bold">Upgrade your plan</h3>
          <h3 className="font-bold">To get pro service</h3>
          <div className="my-3">
            <img
              src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
              alt=""
              className="w-[100px] h-[100px] rounded-full"
            />
          </div>
          <button className="px-5 my-1 py-1 rounded-full text-white bg-sky-600">
            upgrade
          </button>
        </div>
        {/* bottom */}
        <div>
          <button className="text-gray-500 flex items-center my-3">
            <IoExitSharp className="text-xl mr-1" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerLeftSideNav;
