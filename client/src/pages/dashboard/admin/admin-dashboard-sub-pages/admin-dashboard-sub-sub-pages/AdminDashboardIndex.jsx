// icons
import { RiArrowRightUpFill } from "react-icons/ri";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";

const AdminDashboardIndex = () => {
  return (
    <div>
      {/* first order container */}
      <header className="flex justify-between mb-2">
        <div className="text-gray-700">
          <div>
            <span>makuta law firm</span>
          </div>
          <div className="text-xl font-bold">
            <h3>Activity</h3>
          </div>
        </div>
        <div>
          <button className="px-3 py-1 bg-yellow-300 rounded-sm flex gap-1 items-center transition-all ease-in-out duration-150 hover:bg-yellow-200">
            <MdOutlineManageAccounts className="text-lg" />
            <span>Account Setting</span>
          </button>
        </div>
      </header>
      {/* second order container */}
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {/* background image */}
        <div className="relative z-0">
          <img
            className="w-full h-[100px] object-center object-cover"
            src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjgyMi1hZXctMDJfMS5qcGc.jpg"
            alt=""
          />
        </div>
        {/* profile status */}
        <div className="px-[5%] pb-[16px] flex justify-between">
          {/* left */}
          <div className="relative z-10 mt-[-32px]">
            <div className="w-[52px] aspect-square border-2 border-white shadow-md rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="/gedi.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-1 font-semibold text-gray-700">
              <span>Haddis</span>
              <span>Fanta</span>
            </div>
            <div className="text-sm text-gray-700">
              <span>Software Engineer</span>
            </div>
            <div className="flex gap-1 text-xs text-gray-500">
              <CiLocationOn className="text-lg" />
              <span>Addis Ababa</span>
              <span>Ethiopia</span>
            </div>
          </div>
          {/* right */}
          <div className="flex gap-3 pt-[10px] text-[.875rem]">
            <div>
              <FaFacebookF className="text-blue-700" />
            </div>
            <div>
              <FaTwitter className="text-cyan-500" />
            </div>
            <div>
              <FaYoutube className="text-red-700" />
            </div>
            <div>
              <FaLinkedinIn className="text-sky-600" />
            </div>
            <div>
              <div className="w-[24px] mt-[-5px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-200 aspect-square flex items-center justify-center bg-gray-100 rounded-full">
                <FaPlus className="text-emerald-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* pre-third order container */}
      <div className="mt-5">
        {/* content container */}
        <div className="p-[1%] flex gap-5">
          {/* left */}
          <div className="w-[50%] rounded-md overflow-hidden flex relative">
            {/* background image */}
            <div className="w-full h-full bg-sky-200 relative z-10">
              <img
                className="w-full h-full opacity-95 object-center object-cover"
                src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-poly-cost-effective-discount-offer-clearance-image_16482.jpg"
                alt=""
              />
            </div>
            {/* card */}
            <div className="absolute top-5 right-5 z-20">
              <div className="flex items-center gap-1 text-white">
                <div>
                  <IoIosSunny className="text-5xl" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">
                    31<sup>c</sup>{" "}
                  </h3>
                </div>
                <div>
                  <h3 className="font-semibold mb-[-5px]">Addis Ababa</h3>
                  <span>Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[50%] grid grid-cols-2 gap-5">
            <div className="bg-purple-400 rounded-md text-white p-[5%]">
              <div>
                <span>Today's Booking</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  <h3>4006</h3>
                </div>
                <div>
                  <span>10.00% (30 days) </span>
                </div>
              </div>
            </div>

            <div className="bg-green-400 rounded-md text-white p-[5%]">
              <div>
                <span>Today's Booking</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  <h3>4006</h3>
                </div>
                <div>
                  <span>10.00% (30 days) </span>
                </div>
              </div>
            </div>

            <div className="bg-red-400 rounded-md text-white p-[5%]">
              <div>
                <span>Today's Booking</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  <h3>4006</h3>
                </div>
                <div>
                  <span>10.00% (30 days) </span>
                </div>
              </div>
            </div>

            <div className="bg-orange-300 rounded-md text-white p-[5%]">
              <div>
                <span>Today's Booking</span>
              </div>
              <div className="mt-2">
                <div className="text-2xl font-semibold">
                  <h3>4006</h3>
                </div>
                <div>
                  <span>10.00% (30 days) </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* third order container */}
      <div className="mt-5 bg-white rounded-sm shadow-md">
        {/* header */}
        <header className="p-[1%] flex items-center justify-between">
          <div className="text-gray-700 font-bold">
            <h3>Top Rated Lawyers</h3>
          </div>
          <div>
            <div className="bg-gray-100 px-1 py-[.15rem] rounded-sm">
              <input
                type="text"
                placeholder="search"
                className="focus:outline-none focus:ring-0 bg-transparent border-none h-[18px] text-sm w-full"
              />
            </div>
          </div>
          <div>
            <button className="px-5 py-[.135rem] rounded-md border border-gray-100 text-sm text-gray-500 transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
              view all
            </button>
          </div>
        </header>
        {/* lawyers grid */}
        <div className="p-[1%] grid grid-cols-4 gap-5 pb-[3%]">
          {/* add new lawyer button */}
          <div>
            <div className="flex items-center gap-1 cursor-pointer">
              <div className="w-[38px] aspect-square rounded-full border-2 border-white shadow-md overflow-hidden flex items-center justify-center bg-gray-50">
                <span className="text-xl text-gray-500 font-bold">+</span>
              </div>
              <div>
                <span className="font-semibold text-gray-700">Add Lawyer</span>
              </div>
            </div>
          </div>
          {/* lawyer */}
          {[...Array(11)].map((lawyer, index) => (
            <div key={index} className="flex gap-1">
              <div className="self-baseline w-[36px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  className="w-full h-full object-cover object-center"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                  alt=""
                />
              </div>
              <div>
                <div className="flex gap-1 text-gray-700 font-bold">
                  <span>Haddis</span>
                  <span>Fanta</span>
                </div>
                <div className="flex gap-1 text-gray-500 text-sm">
                  <div>
                    <span>A.A, Ethiopia</span>
                  </div>
                </div>
                <div>
                  <div className="flex text-xs text-yellow-500">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                    <IoIosStarOutline />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* fourth order container */}
      <div className="mt-5 bg-white rounded-sm">
        {/* header */}
        <header className="p-[1%] flex items-center justify-between">
          <div>
            <h3 className="text-gray-700 font-bold">Customers' Case Status</h3>
          </div>
          <div>
            <button className="px-5 py-[.135rem] rounded-md border border-gray-100 text-sm text-gray-500 transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
              view all
            </button>
          </div>
        </header>
        {/* cards */}
        <div className="bg-gray-50 py-[1%] flex gap-5 justify-between">
          {/* active cases */}
          {[...Array(3)].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-md w-[calc(100%/3)]"
            >
              <header className="p-[3%] flex items-center justify-between">
                {/* left */}
                <div className="flex gap-1">
                  <div>
                    <div className="w-[28px] aspect-square rounded-full overflow-hidden bg-emerald-500 flex items-center justify-center font-bold text-white">
                      <span>AC</span>
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <h3 className="font-bold mb-[-5px]">Active Cases</h3>
                    <span className="text-xs font-bold">1.3k cases</span>
                  </div>
                </div>
                {/* right */}
                <div>
                  <div>
                    <div className="flex relative h-[26px]">
                      <div className="absolute right-7 z-10 w-[24px] aspect-square rounded-full overflow-hidden bg-red-300">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute right-4 z-20 w-[24px] aspect-square rounded-full overflow-hidden bg-green-300">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute right-0 z-30 w-[26px] aspect-square rounded-full overflow-hidden bg-white border-2 border-white shadow-md flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">
                          7+
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-xs text-gray-700">
                    <span>lawyers</span>
                  </div>
                </div>
              </header>
              <div className="m-[1%] p-[2%] border-y border-gray-100">
                <div className="text-sm text-gray-700">
                  <p>
                    dolor sit amet, consectetur adipisicing elit. Est maxime
                    facere culpa deleniti ab amet eaque? Quod, sunt.
                  </p>
                </div>
              </div>
              {/* footer */}
              <footer className="p-[2%] flex items-center justify-between">
                <div>
                  <div>
                    <div className="flex relative h-[26px]">
                      <div className="absolute left-0 z-10 w-[24px] aspect-square rounded-full overflow-hidden bg-red-300">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute left-4 z-20 w-[24px] aspect-square rounded-full overflow-hidden bg-green-300">
                        <img
                          className="w-full h-full object-cover object-center"
                          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yX3Bob3RvX29mX2FfYmxhY2tfYnVzaW5lc3NtYW5faXNvbGF0ZWRfb25fb2ZmX19lZmMxZDllNC1iNzQ5LTQ2NzMtYjRmMS1lYjI0NTBiYzNiOGRfMS5qcGc.jpg"
                          alt=""
                        />
                      </div>
                      <div className="absolute left-7 z-30 w-[26px] aspect-square rounded-full overflow-hidden bg-white border-2 border-white shadow-md flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">
                          7+
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-xs text-gray-700">
                    <span>customers</span>
                  </div>
                </div>
                <div>
                  <button className="flex items-center gap-1 px-1 py-[.13rem] text-gray-700 text-sm bg-gray-100 transition-all ease-in-out duration-150 hover:bg-gray-200">
                    <span>view all</span>
                    <RiArrowRightUpFill />
                  </button>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
      {/* fifth order container */}
      <div className="bg-white shadow-md mt-5">
        <header className="p-[1%] flex items-center justify-between">
          <div className="text-gray-700 font-bold">
            <h3>Customers Location</h3>
          </div>
          <div>
            <button className="flex items-center gap-1 text-sm text-gray-700">
              <IoLocationSharp className="text-lg text-blue-700" />
              <span>view in</span>
              <span>google map</span>
            </button>
          </div>
        </header>
        {/* locations grid */}
        <div className="p-[1%] grid grid-cols-4 gap-5">
          <div>
            <div>
                image
            </div>
            <div>summary</div>
            <div>
                <div>
                    <div className="relative">
                        <div className="w-[24px] aspect-square bg-blue-500 rounded-full overflow-hidden"></div>
                        <div className="w-[24px] aspect-square bg-red-500 rounded-full overflow-hidden"></div>
                        <div className="w-[24px] aspect-square bg-white rounded-full overflow-hidden"></div>
                    </div>
                </div>
                <button>
                    <IoLocationSharp className="text-lg text-blue-700"/>
                </button>
            </div>
          </div>
          <div>two</div>
          <div>three</div>
          <div>four</div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardIndex;
