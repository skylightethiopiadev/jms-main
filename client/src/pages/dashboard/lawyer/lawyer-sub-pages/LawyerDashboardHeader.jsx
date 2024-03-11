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

// main
// CustomerDashboardHeader
const LawyerDashboardHeader = () => {
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
    <header className="py-2 px-1 flex items-center justify-between w-full border-b border-gray-200">
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
                <div className="p-2 shadow-md w-max rounded-md">
                  <img
                    src={customerImage}
                    alt=""
                    className="w-[200px] h-[200px] rounded-sm"
                  />
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

export default LawyerDashboardHeader;
