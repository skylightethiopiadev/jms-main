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
  IoExitSharp,
} from "react-icons/io5";

// data files
import { caseHistory } from "../../../../DataFile";

// data files
import { caseTeams } from "../../../../DataFile";
// main
// CustomerDashboardHome
const CustomerDashboardHome = () => {
  // local states
  const [isUserMore, setIsUserMore] = useState(null);
  const [isUserMorePopup, setIsUserMorePopup] = useState(null);

  return (
    <div className="p-[2%] relative">
      {isUserMorePopup ? (
        <div className="absolute left-[25%] top-[3%] bg-white shadow-lg rounded-sm z-50">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15 }}
            className="bg-white z-[1200] w-max right-0 top-[2rem] rounded-md cursor-default shadow-xl flex flex-col items-center p-3"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* user profile */}
            <div className="p-2 shadow-md w-max rounded-md">
              <img
                src={isUserMorePopup?.profile}
                alt=""
                className="w-[200px] h-[200px] rounded-sm"
              />
            </div>
            {/* username */}
            <div className="my-1 text-gray-700 font-semibold flex items-center justify-center gap-x-1">
              <span>
                {isUserMorePopup?.first_name} {isUserMorePopup?.last_name}
              </span>
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
              <p className="w-[350px] text-xs italic my-1 p-2 border-y border-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                cum quia fuga delectus dolore a aliquam accusamus.
              </p>
            </div>
            {/* logout */}
            <div className="flex items-center justify-center gap-x-3">
              <button className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
                <CiPhone className="text-xl mr-1" />
                <span>Call</span>
              </button>
              <button className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
                <MdOutlineMail className="text-xl mr-1" />
                <span>Message</span>
              </button>
              <button
                className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsUserMorePopup(null);
                }}
              >
                <IoMdClose className="text-xl mr-1" />
                <span>close</span>
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
                Mi<span className="text-blue-700">s</span>nton
              </h3>
            </div>
            <div>
              <h1 className="text-xl font-bold">Go Premium</h1>
              <p>Explore 500+ courses with lifetime menbership</p>
            </div>
            <div>
              <button className="px-3 py-1 rounded-md bg-gray-800 text-white">
                Get Access
              </button>
            </div>
          </div>
          {/* right */}
          <div className="flex  w-[30%]items-center justify-end">
            <div>
              <img
                src="https://th.bing.com/th/id/R.175b3802f7c5c4c98b9bcbdf9a7b9945?rik=98ox9lTe%2ffYIwA&pid=ImgRaw&r=0"
                alt=""
                className="w-[420px]"
              />
            </div>
            <div className="flex items-center justify-evenly gap-x-3">
              <div className="w-[64px] h-[7px] bg-white"></div>
              <div className="w-[64px] h-[7px] bg-white"></div>
              <div className="w-[64px] h-[7px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="flex items-center gap-3 py-[3%]">
        {/* left */}
        <div className="p-2 rounded-md shadow-lg w-[50%] py-[4%]">
          <div className="">
            <h3 className="text-lg text-gray-500 font-semibold">Case Status</h3>
            <div className="flex gap-1">
              <span className="text-gray-500 font-semibold">
                Current Status:
              </span>
              <span className="text-gray-500">Oral Litagation</span>
            </div>
            <div>
              <h3 className="text-lg text-gray-500 font-black my-1">
                05-march-2024
              </h3>
            </div>
            <div>
              <button className="px-3 py-1 cursor-default rounded-full bg-purple-700 text-white font-semibold">
                03:15AM
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full p-2 rounded-md shadow-lg">
          <Chart
            type="line"
            width={"100%"}
            height={150}
            series={[
              {
                name: "Haddis",
                data: [23, 32, 43, 34, 54, 45, 65, 0],
              },
              {
                name: "Menelik",
                data: [43, 92, 3, 75, 4, 45, 75, 6],
              },
            ]}
            options={{
              yaxis: {
                // show: false,
                labels: {
                  show: false,
                },
              },
            }}
          ></Chart>
        </div>
      </div>
      {/* bottom */}
      <div className="flex items-center justify-between gap-1">
        {/* left table */}
        <div className="w-full rounded-md bg-sky-100 p-[1%]">
          {/* header */}
          <header className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-gray-700 font-bold">Case Team</h3>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-start bg-white rounded-sm">
                <CiSearch className="text-lg ml-1" />
                <input
                  type="text"
                  placeholder="search ..."
                  className="focus:outline-none focus:ring-0 bg-transparent border-none text-xs my-[.05rem] h-[28px]"
                />
              </div>
            </div>
            <div>
              <button className="text-gray-500 text-xs font-semibold">
                view all
              </button>
            </div>
          </header>
          {/* table container */}
          <div className="h-[28vh] overflow-y-auto">
            <table className="w-full">
              <tbody>
                {caseTeams.map((team, index) => (
                  <tr
                    key={index}
                    className="bg-white mb-1 border-b-8 border-sky-100 text-xs text-gray-900"
                  >
                    <td>
                      <div className="flex items-center justify-start gap-x-1 p-1">
                        <div>
                          <img
                            src={team.profile}
                            alt=""
                            className="w-[24px] h-[24px] rounded-full"
                          />
                        </div>
                        <div>
                          <span>
                            {team.first_name} {team.last_name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>{team.proffession}</td>
                    <td className="hidden xl:flex">
                      <span className="xl:mt-2">{team.phone}</span>
                    </td>
                    <td>
                      <button
                        className={`px-3 py-1 rounded-md ${
                          team.status === "ACTIVE"
                            ? "bg-yellow-400"
                            : "bg-red-400"
                        } text-white lowercase`}
                      >
                        {team.status}
                      </button>
                    </td>
                    <td>
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            if (isUserMore) {
                              setIsUserMore(null);
                            } else {
                              setIsUserMore(team);
                            }
                          }}
                        >
                          <MdOutlineMoreVert className="text-xl" />
                        </button>
                        {caseTeams[index].first_name ===
                        isUserMore?.first_name ? (
                          <div className="absolute bg-white top-[100%] right-0 z-50 shadow-md border border-gray-300">
                            <ul className="px-3 py-1">
                              <li
                                className="flex items-center gap-x-1 py-1 font-semibold cursor-pointer mb-1 border-b border-gray-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsUserMorePopup(team);
                                  setIsUserMore(null);
                                }}
                              >
                                <BiSolidUserDetail className="text-lg text-gray-500" />
                                Detail
                              </li>
                              <li className="flex items-center gap-x-1 py-1 font-semibold cursor-pointer mb-1 border-b border-gray-300">
                                <MdOutlineMail className="text-lg text-gray-500" />
                                Message
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
        {/* right card */}
        <div className="shadow-sm p-[1%]">
          <header className="flex items-center justify-between border-b border-r-gray-300">
            <div>
              <h3 className="font-semibold text-gray-600">Case History</h3>
            </div>
            <div>
              <button className="text-xs font-semibold text-gray-500">
                view all
              </button>
            </div>
          </header>
          <div className="h-[30vh] w-[230px] overflow-y-auto py-2">
            {/* case history cards */}
            {caseHistory?.length > 0 ? (
              <>
                {caseHistory.map((history, index) => (
                  <div
                    key={index}
                    className={`bg-white p-1 border-l-4 ${
                      history.status === "ACTIVE"
                        ? "border-green-400"
                        : "border-red-400"
                    } rounded-md shadow-md py-2 mb-5 pl-2`}
                  >
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <div>
                        <span>{history.file_no}</span>
                      </div>
                      <div>
                        <button>
                          <CiEdit className="text-lg" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold ">{history.case_place}</h3>
                      <span className="text-xs font-semibold text-gray-500">
                        {history.caseType}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">
                          {history.status === "ACTIVE" ? (
                            <>starts {history.case_date} ago</>
                          ) : (
                            <>closed {history.case_date} ago</>
                          )}
                        </span>
                      </div>
                      <div className="relative flex-grow flex items-center justify-end">
                        <div className="absolute right-6">
                          <img
                            src={history.lawyers[0]}
                            alt=""
                            className="w-[22px] h-[22px] rounded-full"
                          />
                        </div>
                        <div className="absolute right-3">
                          <img
                            src={history.lawyers[1]}
                            alt=""
                            className="w-[22px] h-[22px] rounded-full"
                          />
                        </div>
                        <div className="relative z-[1200] w-[22px] h-[22px] border-2 border-gray-500 rounded-full flex items-center justify-center bg-white">
                          <span className="text-xs font-semibold text-gray-500">
                            +5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div>No Case History</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboardHome;
