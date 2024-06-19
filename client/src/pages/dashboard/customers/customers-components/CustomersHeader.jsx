import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// icons
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
import { PiUserCircleGearThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import {
  useUpdateMutation,
  useUserLogoutMutation
} from "../../../../features/api/apiSlice";
import Response from "../../../../components/Response";

const CustomersHeader = () => {
  const user = JSON.parse(localStorage.getItem("makuta_user"));
  // states
  const [isUserProfilePopUpOpen, setIsUserProfilePopUpOpen] = useState(false);
  // languages
  const [languages, setLanguages] = useState([
    {
      language: "Amharic",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
    },
    {
      language: "Arabic",
      flag:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3dfU5w05oiEfg2RHI3Ej8pWfLdYq6bb6BOVpkV9ezA&s"
    },
    {
      language: "Chinese",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png"
    },
    {
      language: "Eng(US)",
      flag:
        "https://static.vecteezy.com/system/resources/thumbnails/002/816/608/small/american-national-flag-free-vector.jpg"
    },
    {
      language: "Swahili",
      flag:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png"
    }
  ]);
  const [isLanguage, setIsLanguage] = useState(languages[3]);
  const [isLanguagePopUp, setIsLanguagePopUp] = useState(false);

  // customers dashboard toggler
  const customersDashboardToggler = () => {
    let sideNav = document.getElementById("customers-dashboard-side-nav");

    if (sideNav?.classList.contains("absolute")) {
      if (sideNav?.classList.contains("left-[-100vw]")) {
        sideNav?.classList.remove("left-[-100vw]");
        sideNav?.classList.add("left-0");
      } else {
        sideNav?.classList.remove("left-0");
        sideNav?.classList.add("left-[-100vw]");
      }
    }
  };

  const [logout, logoutResponse] = useUserLogoutMutation();
  const [pending, setPending] = useState(false);
  const logoutHandler = () => {
    logout({});
  };

  const [profileData, profileResponse] = useUpdateMutation();
  const [profilePending, setProfilePending] = useState(false);

  const updateProfileHandler = image => {
    const formData = new FormData();
    formData.append("profileImage", image);
    formData.append("id", user?.user?._id);
    formData.append("url", "/privates");
    formData.append("tag", ["users"]);
    profileData(formData);
  };

  console.log(user, "user from header");

  return (
    <div className="h-[7vh] px-[.5%] sm:[.75%] md:[1%] lg:px-[2%] bg-white border-b border-gray-200 flex items-center justify-between">
      <Response
        response={logoutResponse}
        setPending={setPending}
        redirects="/login"
        type="logout"
      />

      <Response
        response={profileResponse}
        setPending={setProfilePending}
        redirects="/dashboard/customers"
        type="update"
      />
      {/* left */}
      <div className="flex items-center gap-3">
        {/* menu drawer */}
        <div className="xl:hidden">
          <div
            className="flex flex-col items-start justify-between gap-[5px] cursor-pointer"
            onClick={() => {
              customersDashboardToggler();
            }}
          >
            <div className="w-[20px] h-[2px] rounded-full bg-blue-900"></div>
            <div className="w-[16px] h-[2px] rounded-full bg-yellow-400"></div>
            <div className="w-[20px] h-[2px] rounded-full bg-blue-900"></div>
          </div>
        </div>
        <NavLink className={"header-level-4"}>
          <span>Dashboard</span>
        </NavLink>
      </div>
      {/* search */}
      <div className="hidden md:flex">
        <div className="flex items-center bg-gray-100 rounded-sm px-1 py-[.13rem]">
          <button>
            <CiSearch className="text-xl mr-1" />
          </button>
          <input
            className="focus:outline-none focus:ring-0 border-none bg-transparent w-full text-sm p-0"
            type="text"
            placeholder="search here"
          />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-5 xl:gap-10">
        {/* language */}
        <div className="relative">
          <div
            className={`flex items-center gap-1 w-[120px] cursor-pointer px-1 py-[.25rem] border rounded-sm transition-colors ease-in-out duration-300  ${
              isLanguagePopUp
                ? "border-gray-200"
                : "hover:border-gray-200 border-transparent"
            }`}
            onClick={() => {
              setIsLanguagePopUp(!isLanguagePopUp);
            }}
          >
            <div className="w-[20px] aspect-square rounded-full overflow-hidden">
              <img
                className="w-full h-full object-center object-cover"
                src={isLanguage.flag}
                alt=""
              />
            </div>
            <div className="text-sm">
              <span>{isLanguage.language}</span>
            </div>
            <div>
              <MdKeyboardArrowDown
                className={`text-lg transition-transform ease-in-out duration-300 ${
                  isLanguagePopUp ? "-rotate-180" : "rotate-0"
                }`}
              />
            </div>
          </div>
          <div
            className={`absolute z-50 left-1/2 -translate-x-1/2 top-[100%] w-[150px] bg-transparent overflow-hidden transition-all ease-in-out duration-150 ${
              isLanguagePopUp ? "h-[450px]" : "h-0"
            }`}
          >
            <div className="mt-4 h-max w-full bg-white border border-gray-200 rounded-md relative">
              {/* triangle */}
              <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-[24px] aspect-square bg-inherit border-l border-t border-gray-200 rotate-45 z-0"></div>
              <div className="px-1 py-3">
                {languages.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer mb-3 flex items-center gap-2 py-1 px-3 transition-colors ease-in-out duration-150 hover:bg-gray-100 relative z-10 rounded-sm"
                      onClick={() => {
                        setIsLanguagePopUp(!isLanguagePopUp);
                        setIsLanguage(item);
                      }}
                    >
                      <div className="w-[20px] aspect-square rounded-full overflow-hidden">
                        <img
                          className="w-full h-full object-center object-cover"
                          src={item.flag}
                          alt=""
                        />
                      </div>
                      <div>
                        <span>{item.language}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 md:gap-3">
          {/* notification */}
          <div>
            <div className="relative flex items-center justify-center cursor-pointer bg-transparent transition-colors ease-in-out duration-300 hover:bg-orange-100 p-[.15rem] rounded-sm">
              <IoIosNotificationsOutline className="text-xl" />
              <div className="w-[6px] aspect-square rounded-full bg-red-700 absolute top-1 right-1"></div>
            </div>
          </div>
          {/* user */}
          <div className="relative">
            <div
              className={`flex items-center gap-1 cursor-pointer px-2 py-[.15rem] border transition-colors ease-in-out duration-300  ${
                isUserProfilePopUpOpen
                  ? "border-gray-200"
                  : "border-transparent hover:border-gray-200"
              }`}
              onClick={() => {
                setIsUserProfilePopUpOpen(!isUserProfilePopUpOpen);
              }}
            >
              {/* image */}
              <div className="w-[22px] aspect-square rounded-sm overflow-hidden">
                <img
                  className="w-full h-full object-center object-cover"
                  src={user?.user?.profilePicture}
                  alt=""
                />
              </div>
              {/* name */}
              <div className="flex items-center gap-1 text-xs">
                <div>
                  <span>{user?.user?.firstName}</span>
                </div>
              </div>
              {/* icon */}
              <div className="self-start">
                <MdKeyboardArrowDown
                  className={`text-lg transition-transform ease-in-out duration-300 ${
                    isUserProfilePopUpOpen ? "-rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            {/* pop up */}
            <div
              className={`absolute z-50 w-[170px]  overflow-hidden bg-transparent right-0 top-[100%] transition-all ease-in-out duration-300 ${
                isUserProfilePopUpOpen ? "h-auto" : "h-0"
              }`}
            >
              <div className="mt-4 w-full pb-3 h-auto bg-white relative border rounded-md border-gray-200 ppt-12">
                <div className="w-[24px] aspect-square bg-inherit rotate-45 absolute top-0 right-10 mt-[-12px] border-gray-200 border-t border-l"></div>
                {/* user profile */}
                <div className="flex items-center justify-center">
                  <div className="w-max mt-1 relative">
                    <div className="w-[72px] border-4 border-white shadow-lg aspect-square rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-center object-cover"
                        src={user?.user?.profilePicture}
                        alt=""
                      />
                    </div>
                    {/* new profile input */}
                    {/* <input
                      onChange={e => {
                        updateProfileHandler(e.target.files);
                      }}
                      type="file"
                      name="profile"
                      id="profile"
                      accept="image/*"
                      hidden
                    />
                    <label
                      htmlFor="profile"
                      className="absolute left-0 top-0 w-full h-full z-40 cursor-pointer rounded-full overflow-hidden bg-transparent flex flex-col"
                    >
                      <div></div>
                      <div className="flex-grow"></div>
                      <div className="w-full flex items-center justify-center">
                        <MdPhotoCamera className="text-black text-xl" />
                      </div>
                    </label> */}
                  </div>
                </div>
                {/* username */}
                <div className="mt-1">
                  <div className="flex items-center justify-center gap-1">
                    <div className="flex items-center justify-center gap-1 font-medium">
                      <span>{user?.user?.firstName}</span>
                      <span>{user?.user?.lastName}</span>
                    </div>
                    <div>
                      <VscVerifiedFilled className="text-xl text-sky-500" />
                    </div>
                  </div>
                </div>

                {/* profile fill */}
                <div className="w-full px-2 flex flex-col mt-2 items-center justify-center">
                  <p className="">Profile Fill Status </p>
                  <p className="text-xl w-16  text-center flex items-center justify-center h-16 rounded-full border-2 border-main font-bold text-main">
                    {user?.user?.profileFill}%
                  </p>
                </div>
                {/* bio */}
                <div className="px-2 py-3">
                  <div className="border-y border-gray-200 py-1">
                    <p className="text-center text-xs p-1">{user?.user?.bio}</p>
                  </div>
                </div>
                {/* btns */}
                <div className="flex items-center gap-3 px-1">
                  <a
                    href={
                      user?.role === "business-customer"
                        ? `/dashboard/customers/business-profile`
                        : `/dashboard/customers/private-profile`
                    }
                    className="flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-red-600"
                  >
                    <PiUserCircleGearThin className="text-xl" />
                    <span className="text-xs">profile</span>
                  </a>
                  <a
                    href="/dashboard/customers/change-password"
                    className="flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-red-600"
                  >
                    <CiLock className="text-xl" />
                    <span className="text-xs">security</span>
                  </a>
                </div>
                <button
                  onClick={logoutHandler}
                  className="flex items-center gap-1 mt-2 ml-2  px-2 py-[.15rem] rounded-sm bg-gray-700 text-white"
                >
                  <CiLogout className="text-lg rotate-180" />
                  <span className="text-xs">logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersHeader;
