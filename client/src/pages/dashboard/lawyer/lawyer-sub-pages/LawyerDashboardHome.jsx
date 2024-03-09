import { useState } from "react";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";

// icons
import { CiSearch, CiPhone, CiEdit } from "react-icons/ci";
import { MdOutlineMail, MdOutlineMoreVert } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import {
  IoStarOutline,
  IoStarHalfOutline,
  IoStarSharp,
  IoAlarmOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { BiSolidMessageAdd } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { IoArrowDownSharp } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

import { VscDebugStackframeActive } from "react-icons/vsc";
import { MdOutlinePending } from "react-icons/md";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

// data files
import { caseHistory, lawyerCustomers } from "../../../../DataFile";

// main
// CustomerDashboardHome
const LawyerDashboardHome = () => {
  // local states
  const [isUserMore, setIsUserMore] = useState(null);
  const [isUserMorePopup, setIsUserMorePopup] = useState(null);

  return (
    <div className="p-[2%] relative">
      {isUserMorePopup ? (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-sm z-[5000]">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15 }}
            className="bg-white z-[1200] w-max right-0 top-[2rem] rounded-md cursor-default shadow-xl flex flex-col items-center p-3"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <header className="flex items-center justify-between gap-16 py-2 border-b-2 border-gray-400">
              {/* left */}
              <div className="flex items-center gap-1">
                <div>
                  <img
                    src="http://localhost:3000/src/assets/images/customers/customer-i.jpg"
                    alt=""
                    className="w-[32px] h-[32px] rounded-full mr-1"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-700">
                    Legal Case Appointment
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">
                      Meseret Seyoum
                    </span>
                  </div>
                </div>
              </div>
              {/* right */}
              <div>
                <button
                  className="flex items-center justify-center p-2 rounded-full bg-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsUserMore(null);
                    setIsUserMorePopup(null);
                  }}
                >
                  <IoCloseOutline className="text-xl" />
                </button>
              </div>
            </header>
            {/* first portion */}
            <div className="my-1 py-1 border-b border-gray-200 text-gray-700 w-full flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">preivous shift</h3>
              </div>
              <div>
                <h3>Arrive</h3>
                <div>
                  <span className="bg-blue-700 text-white rounded-sm px-1 py-[.13rem]">
                    09:30
                  </span>
                  -<span>06:00</span>
                </div>
              </div>
              <div>
                <h3>depart</h3>
                <div>
                  <span className="bg-orange-500 text-white rounded-sm px-1 py-[.13rem]">
                    09:30
                  </span>
                </div>
              </div>
              <div>
                <h3>pasue</h3>
                <div>
                  <span>06:00</span>
                </div>
              </div>
            </div>
            {/* first portion */}
            <div className="my-1 py-1 border-b border-gray-200 text-gray-700 w-full flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">next shift</h3>
              </div>
              <div>
                <h3>Arrive</h3>
                <div>
                  <span>09:30</span>-
                  <span className="bg-blue-700 text-white rounded-sm px-1 py-[.13rem]">
                    06:00
                  </span>
                </div>
              </div>
              <div>
                <h3>depart</h3>
                <div>
                  <span>09:30</span>
                </div>
              </div>
              <div>
                <h3>pasue</h3>
                <div>
                  <span className="bg-green-500 text-white rounded-sm px-1 py-[.13rem]">
                    06:00
                  </span>
                </div>
              </div>
            </div>
            {/* first portion */}
            <div className="my-1 py-1 border-b border-gray-200 text-gray-700 w-full flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">final shift</h3>
              </div>
              <div>
                <h3>Arrive</h3>
                <div>
                  <span className="bg-blue-700 text-white rounded-sm px-1 py-[.13rem]">
                    09:30
                  </span>
                  -<span>06:00</span>
                </div>
              </div>
              <div>
                <h3>depart</h3>
                <div>
                  <span className="bg-orange-500 text-white rounded-sm px-1 py-[.13rem]">
                    09:30
                  </span>
                </div>
              </div>
              <div>
                <h3>pasue</h3>
                <div>
                  <span>06:00</span>
                </div>
              </div>
            </div>
            <div className="my-1 py-3  w-full flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsUserMore(null);
                  setIsUserMorePopup(null);
                }}
                className="text-white px-5 py-1 rounded-sm bg-blue-700"
              >
                save chnages
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
      {/* top */}
      <div className="rounded-md relative bg-sky-100">
        <div className="flex items-center justify-between px-[5%] py-[2%]">
          {/* left */}
          <div className="flex-grow w-[100%] flex flex-col gap-y-3">
            <div>
              <h3 className="font-bold">
                Ma<span className="text-blue-700">ku</span>tta
              </h3>
            </div>
            <div>
              <h1 className="text-xl font-bold">Legal Management System</h1>
              <p>
                Explore the network of{" "}
                <span className="font-black text-blue-700">500+</span> lawyers
                who are members of our service
              </p>
            </div>
            <div>
              <button className="px-3 py-1 rounded-md bg-gray-800 text-white">
                Get Access
              </button>
            </div>
          </div>
          {/* right */}
          <div className="w-[40%] hidden md:flex items-center  justify-end">
            <div>
              <img
                src="https://th.bing.com/th/id/R.175b3802f7c5c4c98b9bcbdf9a7b9945?rik=98ox9lTe%2ffYIwA&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className="flex items-center justify-evenly gap-x-3">
              <div className="h-[7px] bg-white"></div>
              <div className="h-[7px] bg-white"></div>
              <div className=" h-[7px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="py-[1%]">
        {/* numbers contaoner */}
        <div className="flex items-center justify-between gap-5">
          {/* top left */}
          <div className="w-full shadow-md p-[1%] rounded-md">
            {/* header */}
            <header className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-900 font-semibold">Total Cases</h3>
              </div>
              <div>
                <button className="text-xs px-3 py-1 rounded-full border border-gray-200 transition-all ease-in-out duration-300 hover:border-gray-400">
                  view detail
                </button>
              </div>
            </header>
            {/* content */}
            <div className="flex items-center justify-between gap-5 py-[3%]">
              <div>
                <h3 className="lawyer-case-number">23.4k</h3>
                <div className="text-green-500 flex items-center justify-center gap-1">
                  <VscDebugStackframeActive />
                  <span>active</span>
                </div>
              </div>
              <div>
                <h3 className="lawyer-case-number">13.4k</h3>
                <div className="text-orange-500 flex items-center justify-center gap-1">
                  <MdOutlinePending />
                  <span>pending</span>
                </div>
              </div>
              <div>
                <h3 className="lawyer-case-number">17.3k</h3>
                <div className="text-red-700 flex items-center justify-center gap-1 ">
                  <GiCardboardBoxClosed />
                  <span>closed</span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end">
                <h3 className="font-bold">43.7lk</h3>
                <span className="text-xs text-gray-500">total cases </span>
              </div>
            </div>
          </div>
          {/* bottom right */}
          <div className="w-full flex items-center justify-between gap-5">
            {/* left */}
            <div className="w-[55%] px-[3%] rounded-md shadow-md">
              <header className="flex items-center justify-between gap-5">
                <div className="mb-5 mt-1">
                  <h3 className="text-gray-700 font-semibold text-[.975rem]">
                    customers
                  </h3>
                </div>
                <div className="mb-5 mt-1">
                  <span className="text-xs font-semibold">12.75k</span>
                </div>
              </header>
              <div className="flex items-center justify-between gap-5 mt-3 mb-4">
                <div>
                  <h3 className="text-3xl font-black text-gray-600">789</h3>
                </div>
                <div>
                  <div className="flex items-center justify-center px-2 py-1 rounded-full border border-green-500 bg-green-50 text-green-500 text-xs font-semibold">
                    <FaPlus />
                    <span>34.64</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-[40%] px-[3%] rounded-md shadow-md">
              <header className="flex items-center justify-between gap-5">
                <div className="mb-5 mt-1">
                  <h3 className="text-gray-700 font-semibold text-[.975rem]">
                    services
                  </h3>
                </div>
                <div className="mb-5 mt-1">
                  <span className="text-xs font-semibold">12.75k</span>
                </div>
              </header>
              <div className="flex items-center justify-between gap-5 mt-3 mb-4">
                <div>
                  <h3 className="text-3xl font-black text-gray-600">7/24</h3>
                </div>
                <div>
                  <div className="flex items-center justify-center px-2 py-1 text-xs font-semibold">
                    <LuAlarmClock className="text-3xl text-blue-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* table container */}
        <div className="mt-2">
          {/* table header */}
          <header className="py-1 flex items-center justify-between gap-5 ">
            {/* left */}
            <div className="flex items-center justify-between gap-5">
              <span className="px-3 py-2 rounded-full bg-blue-500 text-white">
                total cases(200)
              </span>
              <span className="text-gray-500">pending cases (250)</span>
            </div>
            {/* right */}
            <div className="flex items-center justify-between gap-5">
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center border border-gray-300 px-2 py-1 rounded-full cursor-pointer transition-all ease-in-out duration-150 hover:border-gray-500 text-gray-500">
                  <IoCalendarNumberOutline className="text-xl mr-1" />
                  <span>schedule</span>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-center p-2 bg-gray-200 rounded-full">
                  <button>
                    <FiSearch className="text-xl" />
                  </button>
                </div>
              </div>
            </div>
          </header>
          {/* table container */}
          <div className="mt-2 h-[35vh] overflow-y-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="border-b border-emerald-900 border-opacity-[.15]">
                  <td>
                    <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                      <span>customers</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                      <span>start date</span>
                    </div>
                  </td>
                  <td className="border-r border-emerald-900 border-opacity-[.15]">
                    <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                      <span>end date</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                      <span>file no</span>
                    </div>
                  </td>
                  <td className="border-r border-emerald-900 border-opacity-[.15]">
                    <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                      <span>court place</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                      <span>status</span>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                      <span>actions</span>
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {lawyerCustomers.map((customer, index) => (
                  <tr
                    key={index}
                    className="border-b border-emerald-900 border-opacity-[.15]"
                  >
                    <td>
                      <div className="flex items-center text-gray-500 cursor-pointer py-1">
                        <div>
                          <img
                            src={customer.profile}
                            alt=""
                            className="w-[32px] h-[32px] rounded-full object-center object-cover mr-[.3rem]"
                          />
                        </div>
                        <div className="flex flex-col text-xs text-gray-500">
                          <span className="font-semibold">
                            {customer.first_name}
                          </span>
                          <span>{customer.last_name}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span
                          className={`${
                            customer.status === "active"
                              ? "text-green-900"
                              : customer.status === "pending"
                              ? "text-orange-500"
                              : "text-red-900"
                          }`}
                        >
                          {customer.start_date}
                        </span>
                      </div>
                    </td>
                    <td className="border-r border-emerald-900 border-opacity-[.15]">
                      <div className="flex items-center justify-center text-gray-800 cursor-pointer py-1 bg-red-500">
                        <span
                          className={`${
                            customer.status === "active"
                              ? "text-green-900"
                              : customer.status === "pending"
                              ? "text-orange-500"
                              : "text-red-900"
                          }`}
                        >
                          {customer.end_date ? customer.end_date : "_____"}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center text-gray-800 cursor-pointer py-1">
                        <span className="text-gray-500">
                          {customer.file_no}
                        </span>
                      </div>
                    </td>
                    <td className="border-r border-emerald-900 border-opacity-[.15]">
                      <div className="flex items-center justify-center text-gray-500 cursor-pointer py-1">
                        <span>{customer.court_place}</span>
                      </div>
                    </td>

                    <td>
                      <div
                        className={`flex items-center justify-center text-white cursor-pointer rounded-sm mx-1 px-1 py-[.13rem] ${
                          customer.status === "active"
                            ? "bg-green-500"
                            : customer.status === "pending"
                            ? "bg-orange-500"
                            : "bg-red-600"
                        }`}
                      >
                        <span>{customer.status}</span>
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center gap-3 text-gray-500 cursor-pointer py-1 relative">
                        <button className="text-2xl">
                          <BiSolidMessageAdd />
                        </button>
                        <button
                          className="text-2xl"
                          onClick={(e) => {
                            if (isUserMore) {
                              setIsUserMore(null);
                            } else {
                              setIsUserMore(history);
                            }
                          }}
                        >
                          <IoMdMore />
                        </button>
                        {lawyerCustomers[index].file_no ===
                        isUserMore?.file_no ? (
                          <div className="absolute right-0 top-[100%] bg-white rounded-sm shadow-md z-50">
                            <ul className="px-1 py-2">
                              <li
                                className="my-1 border-b border-gray-300 flex items-center gap-3 px-3 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsUserMorePopup(customer);
                                  setIsUserMore(null);
                                }}
                              >
                                <CiEdit className="text-2xl" />
                                <span>modify</span>
                              </li>
                              <li className="my-1 border-b border-gray-300 flex items-center gap-3 px-3">
                                <MdOutlineMail className="text-2xl" />
                                <span>Message</span>
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboardHome;
