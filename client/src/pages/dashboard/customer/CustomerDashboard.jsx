import { Outlet } from "react-router-dom";
import Calendar from "react-calendar";
import { CalendarComponent } from "@syncfusion/ej2-react-calendars";

/// images
import customerImage from "../../../assets/images/customers/customer-i.jpg";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";

// customer-sub-pages
import CustomerDashboardHeader from "./customer-sub-pages/CustomerDashboardHeader";
import CustomerLeftSideNav from "./customer-sub-pages/CustomerLeftSideNav";
import { GiSevenPointedStar } from "react-icons/gi";

const CustomerDashboard = () => {
  return (
    <div className="w-full h-screen flex">
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
              <div className="flex items-center justify-start ml-[7%] w-full my-3">
                <h3 className="text-lg font-bold mr-3">Order</h3>
                <span>15 orders found</span>
              </div>
            </div>
            {/* right */}
            <div>right</div>
          </header>
          {/* content */}
          <div className="h-full flex bg-white">
            {/* main content */}
            <div className="w-full">
              <Outlet />
            </div>
            {/* right content */}
            <div className="p-3">
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
                <div className="text-gray-500">College Student</div>
              </div>

              {/* total balance */}
              <div className="shadow-sm">
                {/* top */}
                <div className="p-2 border-b border-gray-200">
                  <div>
                    <span className="text-gray-500">Total Balance</span>
                    <h3 className="text-lg font-bold text-gray-900 my-2">
                      $21,328.00
                    </h3>
                    <div className="flex items-center justify-between gap-2">
                      <button className="px-5 py-1 rounded-md bg-yellow-400 text-white">
                        Request
                      </button>
                      <button className="px-5 py-1 rounded-md bg-yellow-400 text-white">
                        Transfer
                      </button>
                    </div>
                  </div>
                </div>
                {/* bottom */}
                <div className="my-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Expenses Analysis</h3>
                    <button className="text-gray-500 rounded-full border border-gray-500 flex items-center justify-between p-1">
                      <span>August</span>
                      <IoIosArrowDown />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 w-full mt-3">
                    <div className="w-full border-b-4 border-purple-700">
                      <span className="text-gray-500 w-full">Food & Drink</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                    <div className="w-full border-b-4 border-purple-500">
                      <span className="text-gray-500 w-full">Topup</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                    <div className="w-full border-b-4 border-purple-300">
                      <span className="text-gray-300 w-full">Total</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* calandaer table */}
              <div>
                {/* <Calendar></Calendar> */}

                <div class="relative max-w-sm">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </div>
                  <input
                    datepicker
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Select date"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
