import { NavLink } from "react-router-dom";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { MdHome } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdGroup } from "react-icons/md";
import { SiCashapp } from "react-icons/si";
import { MdSettingsApplications } from "react-icons/md";
import { MdHomeRepairService } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

const AdminDashboardLeftSideNav = () => {
  // main lav link
  const mainNavLinks = [
    {
      header: "Home",
      icon: MdHome,
      path: "#"
    },
    {
      header: "Dashboard",
      icon: MdDashboard,
      subLinks: true
    },
    {
      header: "Lawyers",
      icon: MdHomeRepairService,
      path: "#"
    },
    {
      header: "Customers",
      icon: MdGroup,
      subLinks: true
    },
    {
      header: "Balance",
      icon: SiCashapp,
      path: "#"
    },
    {
      header: "Settings",
      icon: MdSettingsApplications,
      subLinks: true
    }
  ];
  return (
    <div className="min-w-[210px]">
      {/* content container */}
      <div className="flex flex-col h-full">
        {/* site logo */}
        <div className="w-full flex items-center justify-center relative p-5">
          <NavLink to={"/"}>
            <div className="w-[100px] aspect-square">
              <img
                className="w-full h-full object-contain object-center"
                src="/final-logo.png"
                alt=""
              />
            </div>
          </NavLink>
          <div className="absolute top-1 right-1 text-gray-700">
            <button className="text-2xl p-1 rounded-full bg-gray-50 flex items-center justify-center transition-all ease-in-out duration-300 hover:bg-gray-200">
              <AiOutlineClose />
            </button>
          </div>
        </div>
        {/* nav links */}
        <div className="px-5">
          <ul>
            {mainNavLinks?.map((navLink, index) => (
              <li key={index}>
                <NavLink
                  className={
                    "flex items-center justify-between mb-1 py-2 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] rounded-full after:bg-black after:transition-all after:ease-in-out after:duration-150 hover:after:w-full"
                  }
                >
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      <navLink.icon className="text-2xl" />
                    </div>
                    <div className="flex items-center pt-1">
                      <span>{navLink?.header}</span>
                    </div>
                  </div>
                  <div>
                    {navLink?.subLinks ? (
                      <button>
                        <MdKeyboardArrowDown className="text-xl" />
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* footer */}
        <div className="flex-grow flex items-end">
          <div className="px-5 w-full">
            <div>
              <NavLink className={"flex items-center gap-1 my-2"}>
                <div>
                  <MdOutlineContactSupport className="text-xl" />
                </div>
                <div>
                  <span>support</span>
                </div>
              </NavLink>
              <NavLink className={"flex items-center gap-1 my-2"}>
                <div>
                  <IoExitOutline className="text-xl" />
                </div>
                <div>
                  <span>logout</span>
                </div>
              </NavLink>
            </div>
            <div className="flex w-full items-center justify-between mt-5 mb-3 border border-gray-200 rounded-sm p-1">
              <div className="flex items-center gap-1">
                <div className="w-[28px] aspect-square rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt=""
                  />
                </div>
                <div className="text-gray-600 text-xs">
                  <h3 className="font-bold text-sm">Haddis F.</h3>
                  <span>Web Dev</span>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <button>
                  <MdKeyboardArrowDown className="rotate-180"/>
                </button>
                <button>
                  <MdKeyboardArrowDown />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLeftSideNav;
