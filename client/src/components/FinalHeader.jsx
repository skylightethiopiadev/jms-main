import { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { IoChevronDown } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const FinalHeader = () => {
  // local states
  const [isPhone, setIsPhone] = useState(false);
  const [nav,setNav] = useState(false)

  return (
    <header className="fixed left-0 top-0 w-full shadow-md z-[1000] bg-white">
      <div className=" px-[5%] flex h-full items-center justify-between gap-[5%]">
        <div>
          <h3 className="text-2xl font-bold uppercase cursor-pointer">
            Makutta
          </h3>
        </div>
        {/* right container */}
        <div className="flex items-center justify-center flex-grow relative">
          {/* nav container */}
          <div className="h-full flex-grow w-full">
            <ul className="flex items-center justify-center gap-1 h-full">
              {[...Array(4)].map((item, index) => (
                <li
                  key={index}
                  className="h-full flex items-center justify-center relative"
                >
                  <NavLink
                    className={
                      `py-7 px-3 h-full relative text-[.875rem] font-[600] flex items-center justify-between gap-3 after:absolute after:left-0 after:bottom-0 after:h-[7px] after:bg-gray-700 after:transition-all after:ease-in-out after:duration-300 hover:after:w-full transition-all ease-in-out duration-300 hover:text-gray-500 ${nav ? 'after:w-full' : 'after:w-0'}`
                    }
                    onClick={()=>{
                        setNav(!nav)
                    }}
                  >
                    <span>Business</span>
                    <IoChevronDown className={`text-xl transition-all ease-in-out duration-300 ${nav ? 'rotate-[-180deg]' : 'rotate-0'}`} />
                  </NavLink>
                  {/* pop up */}
                  <div className=""></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="self-auto w-full flex items-center justify-end gap-[3%]">
            <div className={`relative h-full py-5 after:absolute after:left-0 after:bottom-0 after:h-[7px] after:bg-gray-700 after:transition-all after:ease-in-out after:duration-300 ${isPhone ? 'after:w-full' : 'after:w-0'}`}>
              <div
                className="flex items-center justify-center gap-1 text-xl rounded-full border-2 border-black px-5 py-2 cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
                onClick={() => {
                  setIsPhone(!isPhone);
                }}
              >
                <LuPhone />
                <IoChevronDown
                  className={`transition-rotate ease-in-out duration-300 ${
                    isPhone ? "rotate-[-180deg]" : "rotate-0"
                  }`}
                />
              </div>
              <div className={`absolute left-0 top-[100%] p-[20px] w-max bg-white shadow-lg z-[150] text-[.95rem] transition-all ease-in-out duration-300 ${isPhone ? 'scale-1 opacity-100' : 'scale-0 opacity-0'}`}>
                <div className="font-bold">
                    <p>Talk to LegalZoom</p>
                    <p>(855) 787-1922</p>
                </div>
                <div>
                    <h3 className="my-3 font-bold">Customer Care Hours</h3>
                </div>
                <div>
                    <div>Mon-Fri 5 a.m. - 7 p.m. PT</div>
                    <div>Weekends 7 a.m. -4 p.m. PT</div>
                </div>
              </div>
            </div>
            <div className="p-[.4rem] rounded-full border-2 border-black cursor-pointer transition-all ease-in-out duration-300 hover:border-gray-500 hover:bg-gray-500 hover:text-white">
              <RiSearch2Line className="text-2xl" />
            </div>
            <div className="flex items-center justify-center rounded-full px-7 py-[.575rem] bg-black text-white cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-500">
              <span className="font-semibold">sign up</span>
            </div>
          </div>
          {/* search bar */}
          
        </div>
      </div>
      {/* firs pop */}
      <div className={`fixed w-full h-[550px] bg-red-100 z-[90] transition-all ease-in-out duration-150 ${nav ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}></div>
    </header>
  );
};

export default FinalHeader;
