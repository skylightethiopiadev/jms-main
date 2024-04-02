import { NavLink, Outlet } from "react-router-dom";

// icons
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  MdPhoneInTalk,
  MdOutlineMarkEmailRead,
  MdOutlineMediation,
} from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

// components
import Header from "../components/Header";
import FinalHeader from "../components/FinalHeader";

// main
const FinalHome = () => {
  return (
    <div className="w-screen h-screen pt-[12.5vh] font-workSans relative">
      {/* <Header /> */}
      <FinalHeader />
      <div className="h-[87.5vh] overflow-y-auto">
        <Outlet />
        {/* footer container */}
        <div className="bg-black text-gray-300">
          {/* footer top */}
          <div className="px-[1%] sm:px-[5%] py-3 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
            {/* top right */}
            <div className="w-[100%] md:w-[70%]">
              {/* menu list */}
              <div className="py-1 md:py-[7%] flex items-center justify-between gap-16 text-[1rem]">
                {/* about us */}
                <div>
                  <header className=" mb-5 py-1 border-b-[2px] border-gray-300 font-[700] text-[1.25rem]">
                    <h3>About us</h3>
                  </header>
                  <ul className="flex flex-col gap-y-[10px] font-medium">
                    <li>
                      <NavLink>Company Vision & Mission</NavLink>
                    </li>
                    <li>
                      <NavLink>Leadership</NavLink>
                    </li>
                    <li>
                      <NavLink>Careers</NavLink>
                    </li>
                    <li>
                      <NavLink>Event</NavLink>
                    </li>
                    <li>
                      <NavLink>Press</NavLink>
                    </li>
                    <li>
                      <NavLink>Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
                {/* partners */}
                <div>
                  <div>
                    <header className=" mb-5 py-1 border-b-[2px] border-gray-300 font-[700] text-[1.25rem]">
                      <h3>Partners</h3>
                    </header>
                    <ul className="flex flex-col gap-y-[10px] font-medium">
                      <li>
                        <NavLink>Company</NavLink>
                      </li>
                      <li>
                        <NavLink>Leadership</NavLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <header className=" my-3 py-1 border-b-[2px] border-gray-300 font-[700] text-[1.25rem]">
                      <h3>Why Skylight</h3>
                    </header>
                    <ul className="flex flex-col gap-y-[10px] font-medium">
                      <li>
                        <NavLink>Company</NavLink>
                      </li>
                      <li>
                        <NavLink>Leadership</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* about us */}
                <div>
                  <header className=" mb-5 py-1 border-b-[2px] border-gray-300 font-[700] text-[1.25rem]">
                    <h3>About us</h3>
                  </header>
                  <ul className="flex flex-col gap-y-[10px] font-medium">
                    <li>
                      <NavLink>Company Vision & Mission</NavLink>
                    </li>
                    <li>
                      <NavLink>Leadership</NavLink>
                    </li>
                    <li>
                      <NavLink>Careers</NavLink>
                    </li>
                    <li>
                      <NavLink>Event</NavLink>
                    </li>
                    <li>
                      <NavLink>Press</NavLink>
                    </li>
                    <li>
                      <NavLink>Contact Us</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    USA
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    Russia
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    China
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://img.freepik.com/premium-vector/germany-flag-flag-germany-vector-illustration_685751-83.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    Germany
                  </h3>
                </div>
              </div>
            </div>

            {/* bottom left */}
            <div className="w-[90%] sm:w-[65%] self-center md:w-[45%] md:self-start">
              {/* header */}
              <header className="flex items-center gap-[15%] px-[5%] py-2 text-white rounded-sm bg-yellow-500">
                <div className="p-2 rounded-full bg-white text-xl text-yellow-500">
                  <MdPhoneInTalk />
                </div>
                <h3 className="text-2xl font-bold">Let's Talk</h3>
              </header>
              {/* content */}
              <div className="flex flex-col p-[7%] gap-y-7">
                <div className="flex items-center gap-5">
                  <div>
                    <MdOutlineMarkEmailRead className="text-3xl text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Business Inquiries</h3>
                    <span>sales@company.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div>
                    <MdOutlineMediation className="text-3xl text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">PR Of Media</h3>
                    <span>marketing@company.com</span>
                  </div>
                </div>
              </div>
              {/* footer */}
              <footer className="mt-5 px-[5%] flex items-center">
                {/* input */}
                <div className="flex-grow bg-blue-900 flex items-center rounded-full border-2 border-gray-400 p-[.13rem]">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full focus:outline-none focus:ring-0 bg-transparent border-none"
                  />
                  <button className="px-5 rounded-full bg-yellow-500 h-full text-white py-[.5rem]">
                    SIGNUP
                  </button>
                </div>
              </footer>
            </div>
          </div>
          {/* footer bottom */}
          <footer className="px-[1%] mt-5 sm:px-[5%] flex items-center justify-between md:font-medium py-3  md:text-[1rem]">
            <div>
              <span>2024 Copyright</span>
            </div>
            <div>
              <span>Terms and Conditions | Privacy Policy</span>
            </div>
            <div className="flex items-center justify-center gap-5 text-2xl">
              <FaFacebookF />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </footer>
          {/* final footer part */}
          <div className="px-[1%] sm:px-[5%] pt-[4%] text-[.75rem]">
            <div className="w-full border-t-[2px] border-gray-400 pt-[5%]">
              {/* first paragraph */}
              <div>
                <p className="flex items-center">
                  <span className="text-[1.3rem] mr-1">©</span>
                  makutalawfirm.com All rights reserved.
                </p>
              </div>
              {/* second paragraph */}
              <div className="flex items-center justify-between">
                <div className="my-5 pr-[25%]">
                  <p>
                    Makuta Law Firm will be the first law firm of its kind in
                    the country and in the continent of Africa. It is the first
                    law firm to be founded and led by a woman. Makuta Law firm
                    has laid the groundwork for the establishment of branches in
                    every country of Africa.
                  </p>
                </div>
                <div className="pr-[5%]">
                  <div>
                    <img className="w-[350px] " src="/png.png" alt="" />
                  </div>
                </div>
              </div>
              {/* final paragraph */}
              <div className="pb-5">
                <p>Design by Skylight Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalHome;
