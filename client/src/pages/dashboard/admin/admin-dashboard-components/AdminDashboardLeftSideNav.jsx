import { NavLink } from "react-router-dom";

// icons
import { MdHome } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
import { MdBarChart } from "react-icons/md";
import { MdTask } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";

const AdminDashboardLeftSideNav = () => {
  // main nav links
  const mainNavLinks = [
    {
      header: "Home",
      icon: MdHome,
      path: "#",
      subLinks: false
    },
    {
      header: "Dashboard",
      icon: MdDashboard,
      path: "#",
      subLinks: false
    },
    {
      header: "Personnel",
      icon: MdGroups,
      path: "#",
      subLinks: true
    },
    {
      header: "Message",
      icon: RiMessage2Fill,
      path: "#",
      subLinks: false
    },
    {
      header: "Analytics",
      icon: MdBarChart,
      path: "#",
      subLinks: true
    },
    {
      header: "Task",
      icon: MdTask,
      path: "#",
      subLinks: true
    },
    {
      header: "Settings",
      icon: MdSettings,
      path: "#",
      subLinks: false
    }
  ];
  return (
    <div className="min-w-[180px] h-full p-[1%] flex flex-col">
      {/* site logo */}
      <div className="flex items-center justify-center">
        <NavLink>
          <div className="w-[100px] aspect-square">
            <img
              className="w-full h-full object-center object-cover"
              src="/logoFinal.png"
              alt=""
            />
          </div>
        </NavLink>
      </div>
      {/* nav links */}
      <div className="mt-3">
        <ul>
          {mainNavLinks?.map((navLink, index) => (
            <li key={index}>
              <NavLink
                className={
                  "flex items-center justify-between px-[3px] py-[7px] text-gray-600 transition-all ease-in-out duration-150 hover:bg-gray-100 hover:text-blue-700 border-l-8 border-transparent hover:border-blue-700"
                }
              >
                <div className="flex items-center gap-1">
                  <div className="flex items-center">
                    <navLink.icon className="text-xl" />
                  </div>
                  <div className="flex items-center">
                    <span>{navLink.header}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {navLink.subLinks ? (
                      <button className="flex items-center">
                        <MdChevronRight className="text-xl" />
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* footer */}
      <div className="flex-grow p-[10px] flex items-end">
        <div>
          <div>
            <button className="mt-3 text-gray-500 flex items-center gap-1 transition-all ease-in-out duration-150 hover:text-gray-700">
              <IoSettingsOutline className="text-xl" />
              <span>setting</span>
            </button>
          </div>
          <div>
            <button className="mt-1 text-gray-500 flex items-center gap-1 transition-all ease-in-out duration-150 hover:text-gray-700">
              <IoExitOutline className="text-xl" />
              <span>logout</span>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminDashboardLeftSideNav;
