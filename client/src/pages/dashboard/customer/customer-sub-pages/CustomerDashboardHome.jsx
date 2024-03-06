// icons
import { CiSearch, CiPhone, CiEdit } from "react-icons/ci";
import { MdOutlineMail, MdOutlineMoreVert } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
// main
// CustomerDashboardHome
const CustomerDashboardHome = () => {
  return (
    <div className="p-[2%]">
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
      <div className="grid grid-cols-3 gap-3 py-[3%]">
        {/* left */}
        <div className="w-full p-2 rounded-md shadow-lg">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center border-4 w-[64px] h-[64px] rounded-full border-l-blue-700 border-t-blue-500 border-r-blue-300">
              <div className="font-semibold">75%</div>
            </div>
            <div>
              <h3 className="text-sky-500">UI/UX Design</h3>
              <h2 className="font-semibold">Research</h2>
              <h2 className="font-semibold">Objective User</h2>
            </div>
          </div>
          <div className="text-gray-500 text-xs my-2">
            <h5>
              You marked <span>3/5</span>
            </h5>
            <h5>Subscriptions are done</h5>
          </div>
        </div>
        {/* middle */}
        <div className="w-full p-2 rounded-md shadow-lg">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center border-4 w-[64px] h-[64px] rounded-full border-l-blue-700 border-t-blue-500 border-r-blue-300">
              <div className="font-semibold">75%</div>
            </div>
            <div>
              <h3 className="text-sky-500">UI/UX Design</h3>
              <h2 className="font-semibold">Research</h2>
              <h2 className="font-semibold">Objective User</h2>
            </div>
          </div>
          <div className="text-gray-500 text-xs my-2">
            <h5>
              You marked <span>3/5</span>
            </h5>
            <h5>Subscriptions are done</h5>
          </div>
        </div>
        {/* right */}
        <div className="w-full p-2 rounded-md shadow-lg">
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center justify-center border-4 w-[64px] h-[64px] rounded-full border-l-blue-700 border-t-blue-500 border-r-blue-300">
              <div className="font-semibold">75%</div>
            </div>
            <div>
              <h3 className="text-sky-500">UI/UX Design</h3>
              <h2 className="font-semibold">Research</h2>
              <h2 className="font-semibold">Objective User</h2>
            </div>
          </div>
          <div className="text-gray-500 text-xs my-2">
            <h5>
              You marked <span>3/5</span>
            </h5>
            <h5>Subscriptions are done</h5>
          </div>
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
          <div className="h-[22vh] overflow-y-auto">
            <table className="w-full">
              <tbody>
                <tr className="bg-white mb-1 border-b-8 border-sky-100 text-xs text-gray-900">
                  <td>
                    <div className="flex items-center justify-start gap-x-1 p-1">
                      <div>
                        <img
                          src="https://th.bing.com/th/id/OIP.s3RJ4bcuEf9d2BBzCCB_0wHaHa?rs=1&pid=ImgDetMain"
                          alt=""
                          className="w-[24px] h-[24px] rounded-full"
                        />
                      </div>
                      <div>
                        <span>Haddis Fanta</span>
                      </div>
                    </div>
                  </td>
                  <td>Case Manager</td>
                  <td>+251923996736</td>
                  <td>
                    <button className="px-3 py-1 rounded-md bg-yellow-400 text-white">
                      active
                    </button>
                  </td>

                  <td>
                    <div className="relative">
                      <button>
                        <MdOutlineMoreVert className="text-xl" />
                      </button>
                      {!true ? (
                        <div className="absolute bg-white top-[100%] right-0 shadow-md">
                          <ul className="px-3 py-1">
                            <li className="flex items-center gap-x-1 py-1 font-semibold cursor-pointer mb-1 border-b border-gray-300">
                              <BiSolidUserDetail className="text-lg text-gray-500" />
                              Detail
                            </li>
                            <li className="flex items-center gap-x-1 py-1 font-semibold cursor-pointer mb-1 border-b border-gray-300">
                              <CiPhone className="text-lg text-gray-500" />
                              Call
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
              </tbody>
            </table>
          </div>
        </div>
        {/* right card */}
        <div className="shadow-sm p-[1%]">
          <header className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-gray-600">Lessons</h3>
            </div>
            <div>
              <button className="text-xs font-semibold text-gray-500">
                view all
              </button>
            </div>
          </header>
          <div className="h-[26vh] w-[230px] overflow-y-auto py-2">
            {/* cards 1 */}
            <div className="bg-white p-1 border-l-4 border-green-500 rounded-md shadow-md py-2 mb-3">
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div>
                  <span>pre-algebra</span>
                </div>
                <div>
                  <button>
                    <CiEdit className="text-lg" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold ">Multipling Decimals</h3>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500">09:30AM-10:00AM</span>
                </div>
                <div className="relative flex-grow flex items-center justify-end">
                  <div className="absolute right-6">
                    <img
                      src="https://th.bing.com/th/id/OIP.s3RJ4bcuEf9d2BBzCCB_0wHaHa?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-[22px] h-[22px] rounded-full"
                    />
                  </div>
                  <div className="absolute right-3">
                    <img
                      src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
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
            {/* card 2 */}
            <div className="bg-white p-1 border-l-4 border-blue-500 rounded-md shadow-md py-2 mb-2">
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div>
                  <span>pre-algebra</span>
                </div>
                <div>
                  <button>
                    <CiEdit className="text-lg" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold ">Multipling Decimals</h3>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500">09:30AM-10:00AM</span>
                </div>
                <div className="relative flex-grow flex items-center justify-end">
                  <div className="absolute right-6">
                    <img
                      src="https://th.bing.com/th/id/OIP.s3RJ4bcuEf9d2BBzCCB_0wHaHa?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-[22px] h-[22px] rounded-full"
                    />
                  </div>
                  <div className="absolute right-3">
                    <img
                      src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
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
            {/* card 3 */}
            <div className="bg-white p-1 border-l-4 border-red-500 rounded-md shadow-md py-2 mb-2">
              <div className="flex items-center justify-between text-gray-500 text-sm">
                <div>
                  <span>pre-algebra</span>
                </div>
                <div>
                  <button>
                    <CiEdit className="text-lg" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold ">Multipling Decimals</h3>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-gray-500">09:30AM-10:00AM</span>
                </div>
                <div className="relative flex-grow flex items-center justify-end">
                  <div className="absolute right-6">
                    <img
                      src="https://th.bing.com/th/id/OIP.s3RJ4bcuEf9d2BBzCCB_0wHaHa?rs=1&pid=ImgDetMain"
                      alt=""
                      className="w-[22px] h-[22px] rounded-full"
                    />
                  </div>
                  <div className="absolute right-3">
                    <img
                      src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboardHome;
