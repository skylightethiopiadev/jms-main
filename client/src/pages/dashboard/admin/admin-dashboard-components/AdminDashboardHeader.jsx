import { useState } from "react";
// icons
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoEllipsisVertical } from "react-icons/io5";
import { BiSolidMessageAlt } from "react-icons/bi";
import { IoMdNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const AdminDashboardHeader = () => {
  // local states
  const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);

  // admin right side component toggler
  const adminRightSideComponentToggler = () => {
    let rightSideComponent = document.getElementById(
      "admin-right-side-nav-component"
    );
    if (rightSideComponent?.classList.contains("absolute")) {
      if (rightSideComponent?.classList.contains("right-[-100vw]")) {
        rightSideComponent?.classList.remove("right-[-100vw]");
        rightSideComponent?.classList.add("right-0");
      } else {
        rightSideComponent?.classList.remove("right-0");
        rightSideComponent?.classList.add("right-[-100vw]");
      }
    }
  };

  // admin dashboard left side nav toggle
  const adminDashboardLeftSideNavToggler = () => {
    let leftSideNav = document.getElementById("admin-dashboard-left-side-nav");
    if (leftSideNav?.classList.contains("absolute")) {
      if (leftSideNav?.classList.contains("left-[-100vw]")) {
        leftSideNav?.classList.remove("left-[-100vw]");
        leftSideNav?.classList.add("left-0");
      } else {
        leftSideNav?.classList.remove("left-0");
        leftSideNav?.classList.add("left-[-100vw]");
      }
    }
  };

  return (
    <header className="w-full h-[7vh] bg-white shadow-md absolute left-0 top-0 z-40">
      <div className="w-full h-full px-[1%] flex items-center justify-between">
        {/* header left container */}
        <div className="flex items-center gap-3">
          {/* menu drawer icon */}
          <div className="lg:hidden">
            <button
              onClick={() => {
                adminDashboardLeftSideNavToggler();
              }}
            >
              <AiOutlineMenu className="text-[1.7rem] text-gray-700 mt-1" />
            </button>
          </div>
          {/* search bar container */}
          <div className="flex items-center">
            <div className="flex items-center p-1 rounded-sm bg-gray-100">
              <CiSearch className="text-[1.3rem]" />
              <input
                type="text"
                placeholder="search"
                className="focus:outline-none focus:ring-0 bg-transparent border-none w-[150px] h-[18px] text-sm sm:w-full"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* notifications */}
          <div className="flex items-center justify-end gap-[.5rem]">
            <div className="flex items-center">
              <div className="flex items-center justify-center relative cursor-pointer">
                <BiSolidMessageAlt className="text-[1.35rem] text-gray-500 transition-all ease-in-out duration-150 hover:text-gray-700" />
                <div className="absolute w-[10px] aspect-square top-0 right-0 rounded-full overflow-hidden bg-red-500 text-white font-semibold text-[.35rem] flex items-center justify-center">
                  <span>7+</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-center relative cursor-pointer">
                <IoMdNotifications className="text-[1.35rem] text-gray-500 transition-all ease-in-out duration-150 hover:text-gray-700" />
                <div className="absolute w-[10px] aspect-square top-0 right-0 rounded-full overflow-hidden bg-red-500 text-white font-semibold text-[.35rem] flex items-center justify-center">
                  <span>5+</span>
                </div>
              </div>
            </div>
          </div>
          {/* user and button */}
          <div className="flex items-center gap-1">
            {/* user */}
            <div className="relative">
              {/* user content */}
              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setIsProfileDropDownOpen(!isProfileDropDownOpen);
                }}
              >
                <div className="w-[28px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1712793600&semt=sph"
                    alt=""
                  />
                </div>
                <div className="flex items-center text-[.75rem] text-gray-700 gap-1">
                  <span className="hidden sm:inline-flex">Haddis</span>
                  <span className="hidden md:inline-flex">Fanta</span>
                </div>
                <div>
                  <MdKeyboardArrowDown
                    className={`text-[1.3rem] text-gray-700 transition-all ease-in-out duration-300 ${
                      isProfileDropDownOpen ? "rotate-[-180deg]" : "rotate-0"
                    }`}
                  />
                </div>
              </div>
              {/* pop up */}
              <div
                className={`absolute right-0 top-[80%] w-[190px] overflow-hidden transition-all ease-in-out duration-300 ${
                  isProfileDropDownOpen ? "h-[250px]" : "h-[0px]"
                }`}
              >
                <div className="absolute z-50 left-0 top-[.85rem] p-5 bg-gray-100 shadow-xl w-full h-full before:absolute before:left-1/2 before:top-[-10px] before:w-[20px] before:h-[20px] before:bg-inherit before:rotate-45"></div>
              </div>
            </div>
            {/* button */}
            <div className="xl:hidden">
              <button
                onClick={() => {
                  adminRightSideComponentToggler();
                }}
              >
                <IoEllipsisVertical className="text-[1.13rem] text-gray-500 transition-all ease-in-out duration-150 hover:text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminDashboardHeader;
