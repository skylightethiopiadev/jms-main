// icons
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";

// components
import Header from "../components/Header";
import FinalHeader from "../components/FinalHeader";
// main
const FinalHome = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto pt-[9vh] font-workSans relative">
      {/* <Header /> */}
      <FinalHeader />
      {/* first order container */}
      <div className="w-full px-[3%] pt-[1%] sm:px-[12%] bg-gradient-to-r from-gray-50 to-orange-100 pb-12 sm:pb-[90px] shadow-md">
        <div className="w-full h-full sm:py-[1%] flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-[3%]">
          {/* top left */}
          <div className="w-full mt-12 sm:mt-10  sm:w-[45%]">
            {/* first button */}
            <div className="sm:mt-7">
              <button className="px-[5%] py-1 border border-sky-100 bg-sky-50 rounded-full">
                some text over here
              </button>
            </div>
            {/* bold paragraph */}
            <div className="my-1">
              <p className="text-[1.85rem] font-semibold my-[1%] text-gray-700">
                Strength in representation, dedication to your case
              </p>
            </div>
            {/* normal paragraph */}
            <div>
              <p className="my-[3%]">
                Get the legal help you needs, with our DIY services or attorney
                advice. Either way, we've got your back
              </p>
            </div>
            {/* gold buttons */}
            <div className="my-[1.5rem] flex items-center gap-[7%]">
              <div className="w-full bg-yellow-400 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-yellow-300 flex items-center justify-center rounded-full py-1 text-white text-[.985rem]">
                <span>Civil</span>
              </div>
              <div className="w-full bg-yellow-400 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-yellow-300 flex items-center justify-center rounded-full py-1 text-white text-[.985rem]">
                <span>Criminal</span>
              </div>
              <div className="w-full bg-yellow-400 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-yellow-300 flex items-center justify-center rounded-full py-1 text-white text-[.985rem]">
                <span>Corporate</span>
              </div>
            </div>
            {/* cards container */}
            <div className="flex sm:flex-col lg:flex-row lg:items-end gap-3 my-[3%]">
              {/* left card */}
              <div className="w-[50%] whitespace-nowrap flex items-center">
                {/* icon */}
                <div className="mr-[5%]">
                  <div className="w-[18px] sm:w-[28px] aspect-square overflow-hidden">
                    <img
                      className="h-full object-cover"
                      src="https://cdn.iconscout.com/icon/free/png-256/free-google-160-189824.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* rating */}
                <div>
                  <div className="flex items-center">
                    <div className="mr-[3%]">
                      <span className="font-semibold">4.5</span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-lg">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStarHalf />
                      <IoMdStarOutline />
                    </div>
                  </div>
                  <div>
                    <p>Lorem ipsum some other</p>
                  </div>
                </div>
              </div>
              {/* right card */}
              <div className="w-[50%] whitespace-nowrap flex items-center">
                {/* icon */}
                <div className="mr-[5%]">
                  <div className="w-[18px] sm:w-[28px] aspect-square overflow-hidden">
                    <img
                      className="h-full object-cover"
                      src="https://www.freeiconspng.com/thumbs/linkedin-logo-png/linkedin-logo-3.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* rating */}
                <div>
                  <div className="flex items-center">
                    <div className="mr-[3%]">
                      <span className="font-semibold">4.5</span>
                    </div>
                    <div className="flex items-center text-yellow-400 text-lg">
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStar />
                      <IoMdStarHalf />
                      <IoMdStarOutline />
                    </div>
                  </div>
                  <div>
                    <p>Lorem ipsum also here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom right */}
          <div className="w-full sm:w-[50%]">
            {/* content container */}
            <div className="w-full h-full px-[10%] relative">
              {/* background image */}
              <div className="relative z-10 w-full h-full after:absolute after:left-1/2 after:-translate-x-1/2  after:top-1/2 after:-translate-y-1/2 after:rounded-l-[15%] after:w-[50%]  after:h-[50%] after:bg-emerald-400 after:z-0">
                <img
                  className="relative z-20 ml-[72px] sm:ml-auto sm:h-[350px] w-full object-contain"
                  src="/images/personnels/customer-i-removebg-preview.png"
                  alt=""
                />
              </div>
              {/* content here */}
              <div className="absolute left-0 bottom-0 w-full h-full z-50 bg-transparent flex flex-col">
                {/* first container */}
                <div className="h-full w-full flex items-center sm:items-end  justify-end">
                  <div className="mb-5">
                    <div className="flex items-start gap-3 ">
                      <div className="flex items-center gap-3 py-2 px-5 rounded-sm bg-yellow-300 shadow-lg">
                        <SiPostman className="text-xl text-emerald-400" />
                        <p>Lorem ipsum dolor </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* lawyers list container */}
                <div className="h-full w-full flex sm:items-end">
                  <div>
                    {/* lawyer container */}
                    <div className="mb-[-24px] bg-white shadow-lg w-max whitespace-nowrap">
                      {/* header */}
                      <header className="flex items-center p-3 border-b border-gray-100">
                        <div>
                          <h3 className="font-semibold">Active Customers</h3>
                        </div>
                      </header>
                      {/* lawyers */}
                      <div
                        className="px-3 h-[116px] mr-[.1rem] overflow-y-auto"
                        id="home-lawyer-list-card"
                      >
                        {[...Array(12)].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between w-full mb-1"
                          >
                            {/* left */}
                            <div className="flex items-center">
                              {/* image */}
                              <div className="border-2 border-white shadow-lg w-[32px] aspect-square rounded-full overflow-hidden mr-2">
                                <img
                                  className="h-full object-cover"
                                  src="/images/personnels/lawyer-two.jpg"
                                  alt=""
                                />
                              </div>
                              {/* text */}
                              <div>
                                <div className="flex items-center gap-1 text-sm font-medium mb-[-7px]">
                                  <span>Haddis</span>
                                  <span>Fanta</span>
                                </div>
                                <span className="text-xs text-gray-500">
                                  web dev
                                </span>
                              </div>
                            </div>
                            {/* right */}
                            <div className="ml-12">
                              <VscVerifiedFilled className="text-xl text-emerald-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* footer */}
                      <footer className="flex items-center p-3 pt-0">
                        <div>
                          <span className="text-xs text-gray-500">
                            some text here
                          </span>
                        </div>
                      </footer>
                    </div>
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

export default FinalHome;
