import { useState } from "react";

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

// main
// CustomerDashboardHeader
const CustomerDashboardHeader = () => {
  // local state
  const [isUserProfilePopup, setIsUserProfilePopup] = useState(false);
  return (
    <header className="py-2 px-1 flex items-center justify-between w-full">
      {/* left header portion */}
      <div className="flex items-center">
        {/* menu icon */}
        <div className="text-2xl text-gray-500">
          <button>
            <GrMenu />
          </button>
        </div>
        {/* search bar */}
        <div className="pl-[9%]">
          <div className="flex items-center bg-gray-100 rounded-md">
            <input
              type="text"
              placeholder="search"
              className="focus:outline-none focus:ring-0 bg-transparent border-none h-[24px] md:w-[350px] text-sm"
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
        <div className="flex items-center gap-x-1 transition-all ease-in-out duration-150 border border-transparent px-1 py-[.1rem] rounded-md hover:border-gray-300">
          <img
            src={customerImage}
            alt=""
            className="w-[24px] h-[24px] rounded-sm"
          />
          <span className="text-xs text-gray-500">Meseret Seyoum</span>
          {/* sub menu */}
          <div className="relative">
            {/* sub menu icon */}
            <button
              className={`${
                isUserProfilePopup ? "text-sky-700" : "text-gray-500"
              }`}
              onClick={() => {
                setIsUserProfilePopup(!isUserProfilePopup);
              }}
            >
              {isUserProfilePopup ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            {/* pop up */}
            {isUserProfilePopup ? (
              <div className="absolute bg-white z-[1200] w-[300px] h-[300px] right-0 shadow-xl">
                pop up
              </div>
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
