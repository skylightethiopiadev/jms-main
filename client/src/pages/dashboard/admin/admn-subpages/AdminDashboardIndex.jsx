import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";
// icons
import { FaCamera } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosChatbubbles } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMoreVert } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { IoWifi } from "react-icons/io5";
import { TiSocialGooglePlus } from "react-icons/ti";
// main
const AdminDashboardIndex = () => {
  return (
    <div className="w-full h-full">
      {/* background profile image */}
      <div className="relative w-full h-[170px] flex">
        <div className="w-full h-full overflow-hidden bg-black">
          <img
            className="opacity-75 w-full h-full object-cover object-center"
            src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
            alt=""
          />
        </div>
        <div className="absolute left-0 top-0 w-full h-full bg-transparent cursor-pointer transition-all ease-in-out duration-150 opacity-0 hover:opacity-100">
          <div className="absolute top-1 right-1 text-gray-100">
            <input
              type="file"
              name="profile-bg"
              id="profile-bg"
              accept="image/*"
              hidden
            />
            <label htmlFor="profile-bg" className="cursor-pointer">
              <FaCamera className="text-3xl" />
            </label>
          </div>
        </div>
      </div>
      {/* second order container */}
      <div className="w-full bg-white px-[3%] pb-[32px] pt-[5px] flex items-center justify-between">
        {/* profile container */}
        <div className="flex items-center gap-1">
          <div>
            <div className="w-[120px] flex items-center justify-center aspect-square rounded-full overflow-hidden border-4 border-white shadow-md mt-[-60px] relative z-30">
              <img
                className="w-full h-full object-center object-cover"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                alt=""
              />
              <div className="absolute left-0 bottom-0 w-full h-full bg-transparent cursor-pointer transition-all ease-in-out duration-300 opacity-0 hover:opacity-100">
                <div className="absolute bg-black bg-opacity-50 text-white left-0 bottom-0 w-full flex items-center justify-center">
                  <input
                    type="file"
                    name="profile"
                    id="profile"
                    accept="image/*"
                    hidden
                  />
                  <label htmlFor="profile" className="cursor-pointer">
                    <FaCamera className="text-xl" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-gray-700 flex items-center gap-1">
              <span>Haddis</span>
              <span>Fanta</span>
            </div>
            <div>
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
        {/* contact link */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1 p-1 rounded-sm border border-gray-200 cursor-pointer">
            <div>
              <FaMessage />
            </div>
            <div>
              <span>message</span>
            </div>
          </div>
          <div className="flex items-center gap-1 p-1 rounded-sm border border-gray-200 cursor-pointer">
            <div>
              <BiSolidUserDetail />
            </div>
            <div>
              <span>detail</span>
            </div>
          </div>
        </div>
      </div>
      {/* third container cards */}
      <div className="w-full p-[3%] ">
        <div className="w-full grid grid-cols-4 gap-5">
          {[...Array(4)].map((item, index) => (
            <div key={index} className="bg-white rounded-md p-3 shadow-md">
              <header className="flex items-center justify-between pb-1 border-b border-gray-100">
                <div className="flex items-center gap-1">
                  <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover object-center"
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt=""
                    />
                  </div>
                  <div className="font-medium text-sm to-gray-50">
                    <span>Haddis F.</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-[7px] aspect-square rounded-full bg-green-500"></div>
                  <span className="text-gray-500 text-xs">online</span>
                </div>
              </header>
              <div className="my-1">
                <div className="text-gray-700 font-semibold mt-2">
                  <h3>Header Text</h3>
                </div>
                <div className="text-xs text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod beatae natus corrupti.
                  </p>
                </div>
              </div>
              <footer className="py-1 flex items-center justify-center border-t border-gray-100">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1 cursor-pointer">
                    <div className="flex items-center justify-center p-1 rounded-full bg-green-500 text-white">
                      <FaPhoneVolume className="text-[.65rem]" />
                    </div>
                    <span>call</span>
                  </div>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <div className="flex items-center justify-center p-1 rounded-full bg-green-500 text-white">
                      <IoIosChatbubbles className="text-[.65rem]" />
                    </div>
                    <span>chat</span>
                  </div>

                  {/* <div className="flex items-center gap-1 cursor-pointer">
                  <div className="flex items-center justify-center p-1 rounded-full bg-green-500 text-white">
                    <BiSolidUserDetail className="text-[.65rem]"/>
                  </div>
                  <span>detail</span>
                </div> */}
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
      {/* fourth order container */}
      <div className="w-full px-[3%] pb-[3%]">
        {/* table container */}
        <div className="w-full flex items-center justify-center gap-5">
          {/* left customers table */}
          <div className="w-[50%] p-1 rounded-sm bg-white shadow-md">
            <header className="flex items-center justify-between p-1 border-b border-gray-100">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">
                  Customers
                </h3>
              </div>
              <div className="flex-grow px-[10%] flex items-center">
                <div className="flex items-center border border-gray-200 rounded-md px-1 py-[.13rem]">
                  <CiSearch className="text-2xl" />
                  <input
                    type="text"
                    placeholder="search"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent h-[18px] w-full text-sm"
                  />
                </div>
              </div>
              <div>
                <button className="whitespace-nowrap px-3 py-1 text-xs text-gray-700 border border-gray-100 rounded-full transition-all ease-in-out duration-300 hover:border-gray-400">
                  view all
                </button>
              </div>
            </header>
            {/* table */}
            <div className="w-full h-[70vh] overflow-y-auto overflow-x-hidden admin-dashboard-table">
              <table className="w-full">
                <tbody>
                  {[...Array(24)].map((customer, index) => (
                    <tr key={index} className="border-b-[1px] border-gray-200">
                      <td>
                        <div className="flex items-center gap-1 py-2">
                          <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                            <img
                              className="w-full h-full object-center object-cover"
                              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-700">
                            <span>Haddis</span>
                            <span>Fanta</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-sm text-gray-700">
                          <span>+251923996736</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-sm text-gray-700">
                          <span>haddis@gmail.com</span>
                        </div>
                      </td>
                      <td>
                        <NavLink>
                          <MdOutlineMoreVert className="text-xl text-gray-500 transition-all ease-in-out duration-150 hover:text-gray-700" />
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* right lawyers table */}
          <div className="w-[50%] p-1 rounded-sm bg-white shadow-md">
            <header className="flex items-center justify-between p-1 border-b border-gray-100">
              <div>
                <h3 className="text-sm font-semibold text-gray-600">Lawyers</h3>
              </div>
              <div className="flex-grow px-[10%] flex items-center">
                <div className="flex items-center border border-gray-200 rounded-md px-1 py-[.13rem]">
                  <CiSearch className="text-2xl" />
                  <input
                    type="text"
                    placeholder="search"
                    className="focus:outline-none focus:ring-0 border-none bg-transparent h-[18px] w-full text-sm"
                  />
                </div>
              </div>
              <div>
                <button className="whitespace-nowrap px-3 py-1 text-xs text-gray-700 border border-gray-100 rounded-full transition-all ease-in-out duration-300 hover:border-gray-400">
                  view all
                </button>
              </div>
            </header>
            {/* table */}
            <div className="w-full h-[70vh] overflow-y-auto overflow-x-hidden admin-dashboard-table">
              <table className="w-full">
                <tbody>
                  {[...Array(24)].map((customer, index) => (
                    <tr key={index} className="border-b-[1px] border-gray-200">
                      <td>
                        <div className="flex items-center gap-1 py-2">
                          <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                            <img
                              className="w-full h-full object-center object-cover"
                              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-700">
                            <span>Haddis</span>
                            <span>Fanta</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="text-sm text-gray-700">
                          <span>+251923996736</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-sm text-gray-700">
                          <span>haddis@gmail.com</span>
                        </div>
                      </td>
                      <td>
                        <NavLink>
                          <MdOutlineMoreVert className="text-xl text-gray-500 transition-all ease-in-out duration-150 hover:text-gray-700" />
                        </NavLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <footer className="w-full bg-gray-200 text-gray-700 p-[3%] px-[5%]">
        {/* top header */}
        <div className="flex justify-between">
          <div>
            <div className="w-[100px] aspect-square">
              <img
                className="w-full h-full object-center object-contain"
                src="/final-logo.png"
                alt=""
              />
            </div>
          </div>
          {/* first */}
          <div>
            <ul className="flex flex-col gap-y-3 font-semibold">
              <li>
                <NavLink>FEEBLY THEMES</NavLink>
              </li>
              <li>
                <NavLink>PRE-SALE FAQS</NavLink>
              </li>
              <li>
                <NavLink>SUBMIT A TICKET</NavLink>
              </li>
            </ul>
          </div>
          {/* second */}
          <div>
            <ul className="flex flex-col gap-y-3 font-semibold">
              <li>
                <NavLink>SERVICES</NavLink>
              </li>
              <li>
                <NavLink>THEME TWEAK</NavLink>
              </li>
            </ul>
          </div>
          {/* third */}
          <div>
            <ul className="flex flex-col gap-y-3 font-semibold">
              <li>
                <NavLink>SHOWCASES</NavLink>
              </li>
              <li>
                <NavLink>WIDGET KIT</NavLink>
              </li>
              <li>
                <NavLink>SUPPORT</NavLink>
              </li>
            </ul>
          </div>
          {/* fourth */}
          <div>
            <ul className="flex flex-col gap-y-3 font-semibold">
              <li>
                <NavLink>ABOUT US</NavLink>
              </li>
              <li>
                <NavLink>CONTACT US</NavLink>
              </li>
              <li>
                <NavLink>AFFILIATES</NavLink>
              </li>
              <li>
                <NavLink>RESOURCES</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center py-[32px]">
          <div className="w-[75%] h-[3px] bg-gray-500"></div>
        </div>
        {/* bottom header */}
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-3">
              <div className="p-1 rounded-full border-2 border-gray-700">
                <FaFacebookF />
              </div>
              <div className="p-1 rounded-full border-2 border-gray-700">
                <IoLogoTwitter />
              </div>
              <div className="p-1 rounded-full border-2 border-gray-700">
                <IoWifi />
              </div>
              <div className="p-1 rounded-full border-2 border-gray-700">
                <TiSocialGooglePlus />
              </div>
            </div>
            <div className="flex items-center justify-center my-3">
              <span>@</span>
              <span>Copyright</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboardIndex;
