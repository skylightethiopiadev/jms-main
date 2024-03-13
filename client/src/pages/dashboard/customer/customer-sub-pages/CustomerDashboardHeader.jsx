import { useState } from "react";
import { motion } from "framer-motion";

// image
import customerImage from "../../../../assets/images/customers/customer-i.jpg";
// react icons
// search icon
import { FiSearch } from "react-icons/fi";
// notifications
import { IoMdNotifications } from "react-icons/io";
// up and down arrow
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// menu
import { GrMenu } from "react-icons/gr";
import { VscVerifiedFilled } from "react-icons/vsc";

import {
  IoStarOutline,
  IoStarHalfOutline,
  IoStarSharp,
  IoExitSharp,
} from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

// main
// CustomerDashboardHeader
const CustomerDashboardHeader = () => {
  // local state
  const [isUserProfilePopup, setIsUserProfilePopup] = useState(false);
  // customer dashboard left side bar toggler
  const customerDashBoardLeftSideBarToggler = () => {
    let customerDashBoardLeftSideBar = document.getElementById(
      "customer-dashboard-leftside-nav-bar"
    );
    if (customerDashBoardLeftSideBar?.classList.contains("left-[-100vw]")) {
      customerDashBoardLeftSideBar?.classList.remove("left-[-100vw]");
      customerDashBoardLeftSideBar?.classList.add("left-0");
    } else {
      customerDashBoardLeftSideBar?.classList.add("left-[-100vw]");
      customerDashBoardLeftSideBar?.classList.remove("left-0");
    }
  };
  return (
    <header className="py-2 px-1 flex items-center justify-between w-full">
      {/* left header portion */}
      <div className="flex items-center">
        {/* menu icon */}
        <div className="text-2xl text-gray-500 lg:hidden">
          <button
            onClick={() => {
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <GrMenu />
          </button>
        </div>
        {/* search bar */}
        <div className="pl-[9%]">
          <div className="flex items-center bg-gray-100 rounded-md">
            <input
              type="text"
              placeholder="search"
              className="focus:outline-none focus:ring-0 bg-transparent border-none h-[24px] w-[150px] sm:w-[200px] md:w-[350px] text-sm"
            />
            {/* search icon */}
            <FiSearch className="text-xl my-2 mr-3" />
          </div>
        </div>
      </div>

      {/* user profile container */}
      <div className="flex items-center gap-x-3">
        {/* notification icon */}
        <div>
          <button className="text-xl text-gray-500">
            <IoMdNotifications />
          </button>
        </div>
        {/* username and profile */}
        <div
          className="flex items-center gap-x-1 transition-all ease-in-out duration-150 border border-transparent px-1 py-[.1rem] rounded-md hover:border-gray-300 cursor-pointer"
          onClick={() => {
            setIsUserProfilePopup(!isUserProfilePopup);
          }}
        >
          <img
            src={customerImage}
            alt=""
            className="w-[24px] h-[24px] rounded-sm"
          />
          <div className="text-xs text-gray-500 flex gap-x-1">
            <span>Meseret</span>
            <span className="hidden sm:flex">Seyoum</span>
          </div>
          {/* sub menu */}
          <div className="relative">
            {/* sub menu icon */}
            <button
              className={`${
                isUserProfilePopup ? "text-sky-500" : "text-gray-500"
              }`}
            >
              {isUserProfilePopup ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {/* pop up */}
            {isUserProfilePopup ? (
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.15 }}
                className="absolute bg-white z-[1200] w-max right-0 top-[2rem] rounded-md cursor-default shadow-xl flex flex-col items-center p-3"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {/* user profile */}
                <div className="p-2 shadow-md w-max rounded-md relative">
                  <img
                    src={customerImage}
                    alt=""
                    className="w-[200px] h-[200px] rounded-sm"
                  />
                  <input type="file" id="profile" accept="image/*" hidden />
                  <label
                    htmlFor="profile"
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[1.05rem] p-2 flex items-center justify-center bg-blue-500 rounded-full cursor-pointer text-gray-100 transition-all ease-in-out duration-300 hover:text-gray-100 hover:bg-blue-700"
                  >
                    <FaCamera />
                  </label>
                  <button className="absolute top-1 right-1 p-1 rounded-full bg-gray-100 text-red-900 transition-all ease-in-out duration-300 hover:bg-gray-300 hover:text-red-600">
                    <MdDelete className="text-[1.15rem]" />
                  </button>
                </div>
                {/* username */}
                <div className="my-1 text-gray-700 font-semibold flex items-center justify-center gap-x-1">
                  <span>Meseret Seyoum</span>
                  <VscVerifiedFilled className="text-lg text-sky-500" />
                </div>
                {/* ratting */}
                <div className="flex items-center justify-center gap-1 bg-emerald-500 text-white px-2 py-1 rounded-sm my-1">
                  <div className="flex items-center justify-center gap-x-1">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarHalfOutline />
                    <IoStarOutline />
                  </div>
                  <span className="font-semibold">4.35</span>
                </div>
                {/* bio */}
                <div>
                  <p className="w-[350px] italic my-1 p-2 border-y border-gray-200">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Velit cum quia fuga delectus dolore a aliquam accusamus.
                  </p>
                </div>
                {/* logout */}
                <div>
                  <button className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
                    <IoExitSharp className="text-xl mr-1" />
                    <span>Logout</span>
                  </button>
                </div>
              </motion.div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default CustomerDashboardHeader;
