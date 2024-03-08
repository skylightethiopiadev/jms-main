import { Outlet, Route, Routes } from "react-router-dom";
import { Calendar } from "react-calendar";
import { Avatar, Datepicker } from "flowbite-react";
/// images
import customerImage from "../../../assets/images/customers/customer-i.jpg";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";

// customer-sub-pages
import CustomerDashboardHeader from "./customer-sub-pages/CustomerDashboardHeader";
import CustomerLeftSideNav from "./customer-sub-pages/CustomerLeftSideNav";
import { GiSevenPointedStar } from "react-icons/gi";
import CustomerDashboardHome from "./customer-sub-pages/CustomerDashboardHome";
import NewCase from "./customer-sub-pages/NewCase";

const CustomerDashboard = () => {
  return (
    <div className="w-full h-auto relative flex ">
      <CustomerLeftSideNav />
      <div className="ml-1 w-full">
        {/* header */}
        <CustomerDashboardHeader />
        {/* components */}
        <div className="w-full h-full bg-gray-100 p-2">
          {/* header */}
          <header className="flex items-center justify-between">
            {/* left-container */}
            <div>
              <div className="flex items-center justify-start ml-[7%] w-full">
                {/* <h3 className="text-lg font-bold mr-3">Order</h3> */}
              </div>
            </div>
            {/* right */}
            {/* <div>right</div> */}
          </header>
          {/* content */}
          <div className="h-auto flex bg-white">
            {/* main content */}
            <div className="w-full">
              <Routes>
                <Route
                  path="/customer"
                  index
                  element={<CustomerDashboardHome />}
                ></Route>
                <Route path="/customer/new-case" element={<NewCase />}></Route>
              </Routes>
              {/* <Outlet /> */}
            </div>
            {/* right content */}
            <div className="p-3 hidden sm:flex sm:flex-col h-[90vh] w-[40%] overflow-y-scroll">
              {/* user profile */}
              <div className="flex flex-col items-center p-3 mx-12">
                {/* image */}
                <div className="border-4 border-r-transparent border-t-sky-300 border-sky-700 rounded-full w-[78px] h-[78px] flex items-center justify-center">
                  <img
                    src={customerImage}
                    alt=""
                    className="w-[64px] h-[64px] rounded-full"
                  />
                </div>
              </div>
              {/* text */}
              <div className="w-full flex items-center flex-col">
                <div className="font-semibold text-sky-500">welcome</div>
                <div className="w-full flex items-center justify-center gap-1">
                  <span className="flexs font-bold">Meseret Seyoum</span>
                  <VscVerifiedFilled className="text-sky-500 text-lg" />
                </div>
                <div className="text-gray-500">Customer Account</div>
              </div>

              {/* total balance */}
              <div className="shadow-sm border-t-2 mt-3 border-gray-200 ">
                {/* top */}
                <div className="p-2 border-b border-gray-200">
                  <div>
                    <span className="text-gray-500">Current Balance</span>
                    <h3 className="text-lg font-bold text-gray-900 my-2">
                      $21,328.00
                    </h3>
                    <div className="flex items-center justify-between gap-2">
                      <button className="px-10 py-1 rounded-md bg-yellow-400 text-white">
                        Fund
                      </button>
                      <button className="px-10 py-1 rounded-md bg-yellow-400 text-white">
                        Refund
                      </button>
                    </div>
                  </div>
                </div>
                {/* bottom */}
                <div className="my-3">
                  <div className="flex items-center justify-between my-1">
                    <h3 className="font-semibold">Expenses Analysis</h3>
                    <button className="text-gray-500 rounded-full border border-gray-500 flex items-center justify-between p-1">
                      <span>August</span>
                      <IoIosArrowDown />
                    </button>
                  </div>
                  <div>
                    <span className="text-gray-500 font-semibold">Total</span>
                  </div>
                  <div className="grid grid-cols-3 w-full mt-1">
                    <div className="w-full border-b-4 border-purple-700 py-1">
                      <span className="text-gray-500 w-full">Total Spent</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                    <div className="w-full border-b-4 border-purple-500 py-1">
                      <span className="text-gray-500 w-full">Utility</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                    <div className="w-full border-b-4 border-purple-300 py-1">
                      <span className="text-gray-500 w-full">Total Refund</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* calandaer table */}
              <div>
                {/* <Calendar></Calendar> */}
                <Datepicker inline />
                {/* 
                /////////////////////////////////////////////////////
                /////////////////////////////////////////////////////
                /////////////////////////////////////////////////////
                /////////////////////////////////////////////////////
                /////////////////////////////////////////////////////
                /////////////////////////////////////////////////////
                 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
