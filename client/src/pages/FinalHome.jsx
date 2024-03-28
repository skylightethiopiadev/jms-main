import Chart from "react-apexcharts";

// icons
import {
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
  IoMdRepeat,
} from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import {
  FaCarCrash,
  FaShoppingCart,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { MdDashboard, MdOutlineFireplace,MdPhoneInTalk,MdOutlineMarkEmailRead ,MdOutlineMediation  } from "react-icons/md";
import { GiOpenFolder } from "react-icons/gi";
import { FaCircleCheck, FaXTwitter } from "react-icons/fa6";
import { IoFolder } from "react-icons/io5";

// components
import Header from "../components/Header";
import FinalHeader from "../components/FinalHeader";
// main
const FinalHome = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto pt-[6vh] font-workSans relative">
      {/* <Header /> */}
      <FinalHeader />

      {/* first order container */}
      <div className="w-full px-[3%] pt-[3%] sm:pt-[5%] sm:px-[12%] bg-gradient-to-r from-white to-orange-100 pb-12 sm:pb-[100px] relative shadow-md">
        <div className="relative z-20 w-full h-full sm:py-[1%] flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-[3%]">
          {/* top left */}
          <div className="w-full mt-12 sm:mt-5  sm:w-[45%]">
            {/* first button */}
            <div className="sm:mt-7">
              <button className="px-[5%] py-1 border border-sky-100 bg-sky-50 rounded-full">
                some text over here
              </button>
            </div>
            {/* bold paragraph */}
            <div className="my-7">
              <p className="text-[1.23rem] md:text-[2rem] leading-7 md:leading-9 font-[700] my-[1%] text-gray-700">
                Strength in representation, dedication to your case
              </p>
            </div>
            {/* normal paragraph */}
            <div>
              <p className="my-[5%]">
                Get the legal help you needs, with our DIY services or attorney
                advice. Either way, we've got your back
              </p>
            </div>
            {/* gold buttons */}
            <div className="my-[2.5rem] flex items-center gap-[7%]">
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
                    <p>Lorem ipsum and</p>
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
                    <p>Lorem ipsum also</p>
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
                  className="relative z-20 ml-[72px] sm:ml-auto sm:h-[400px] w-full object-contain"
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
                          <h3 className="font-semibold">Our Lawyers</h3>
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
        {/* background image */}
        <div className="absolute z-0 left-0 bottom-0 h-full w-full flex overflow-hidden">
          <div className="w-full h-full">
            <img
              className="opacity-[0.035] w-full object-cover"
              src="/images/bg/bg-zero.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className="w-full py-[3%] px-[3%] sm:px-[12%] relative h-max">
        <div className="relative z-50">
          {/* top container */}
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center justify-between lg:gap-[10%] ">
            {/* top left container */}
            <div className="w-full lg:w-[50%]">
              {/* button container */}
              <div>
                <button className="px-[7%] py-1 rounded-full border border-sky-200 bg-sky-100">
                  some text here
                </button>
              </div>
              {/* bold paragraph */}
              <div className="text-[1.15rem] leading-6 md:text-[1.5rem] font-[700] my-3 md:leading-8">
                <p>Lorem ipsum dolor, sit amet consectetur</p>
              </div>
              {/* normal paragraph */}
              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti assumenda autem amet.
                </p>
              </div>
            </div>
            {/* bottom right */}
            <div className="w-full lg:w-[75%] flex flex-col gap-y-2 md:flex-row md:items-center justify-between md:gap-[5%]">
              {/* left */}
              <div className="flex flex-col gap-y-2 md:gap-y-7">
                <div className="flex items-center gap-3 ">
                  {/* icon */}
                  <div>
                    <div className="p-2 rounded-full border border-orange-300 bg-orange-50 text-orange-500 text-[1.45rem]">
                      <FaCarCrash />
                    </div>
                  </div>
                  {/* text */}
                  <div>
                    <p>Lorem ipsum dolor sit amet cons</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ">
                  {/* icon */}
                  <div>
                    <div className="p-2 rounded-full border border-green-300 bg-green-50 text-green-500 text-[1.45rem]">
                      <MdDashboard />
                    </div>
                  </div>
                  {/* text */}
                  <div>
                    <p>Lorem ipsum dolor sit amet cons</p>
                  </div>
                </div>
              </div>
              {/* right */}
              <div className="flex flex-col gap-y-2 md:gap-y-7">
                <div className="flex items-center gap-3 ">
                  {/* icon */}
                  <div>
                    <div className="p-2 rounded-full border border-pink-300 bg-pink-50 text-pink-500 text-[1.45rem]">
                      <FaShoppingCart />
                    </div>
                  </div>
                  {/* text */}
                  <div>
                    <p>Lorem ipsum dolor sit amet cons</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 ">
                  {/* icon */}
                  <div>
                    <div className="p-2 rounded-full border border-blue-300 bg-blue-50 text-blue-500 text-[1.45rem]">
                      <GiOpenFolder />
                    </div>
                  </div>
                  {/* text */}
                  <div>
                    <p>Lorem ipsum dolor sit amet cons</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom container */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[7%] py-[4%]">
            {/* left container */}
            <div className="w-full mb-14 lg:mb-auto lg:w-[50%] relative flex items-center justify-center">
              {/* background image */}
              <div className="px-[10%] flex-grow flex">
                <div className="h-[350px] w-full flex relative z-10 after:absolute after:left-0 after:bottom-0 after:w-[85%] after:h-[85%] after:bg-cyan-500 after:rounded-r-full after:z-0">
                  <img
                    className="relative z-10 h-full"
                    src="/images/personnels/lawyer-five.png"
                    alt=""
                  />
                </div>
              </div>
              {/* content container */}
              <div className="absolute left-0 bottom-0 w-full h-full z-30 flex flex-col">
                {/* top cards */}
                <div className="flex-grow h-[65%] flex items-end">
                  <div>
                    <div className="bg-white shadow-lg px-3 py-1">
                      <header>
                        <div>
                          <h3 className="font-semibold">Active Customers</h3>
                        </div>
                      </header>
                      <div className="flex items-center justify-between gap-2">
                        {[...Array(4)].map((item, index) => (
                          <div
                            key={index}
                            className="w-[32px] border-[2px] border-white shadow-md aspect-square overflow-hidden rounded-full"
                          >
                            <img
                              className="h-full object-cover"
                              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                      <footer>
                        <div>
                          <span className="text-gray-500 text-[.65rem]">
                            some text
                          </span>
                        </div>
                      </footer>
                    </div>
                  </div>
                </div>
                {/* bottom card */}
                <div className="flex-grow h-[50%] flex justify-end items-end">
                  <div>
                    <div className="bg-white shadow-lg p-1 mb-[-42px] md:mb-[-20px] mr-[.75rem]">
                      {/* circle  */}
                      <div className="w-full flex items-center justify-center p-5">
                        <div className="w-[80px] h-[75px] md:w-[100px] md:h-[90px] border-[16px] border-b-green-500 border-r-yellow-300 rounded-full aspect-square flex items-center justify-center">
                          <div>
                            <h3 className="font-black text-[1rem]">75%</h3>
                            <span>done</span>
                          </div>
                        </div>
                      </div>
                      {/* text container */}
                      <div className="flex items-center justify-between gap-[24px] px-3 mb-2">
                        <div>
                          <span>customers</span>
                          <h3 className="font-bold text-[1.3rem]">23.7k</h3>
                        </div>
                        <div>
                          <span>customers</span>
                          <h3 className="font-bold text-[1.3rem]">23.7k</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right container */}
            <div className="w-full lg:w-[50%]">
              {/* button container */}
              <div>
                <button className="px-[5%] py-1 rounded-full bg-sky-100 border border-sky-200">
                  some text
                </button>
              </div>
              {/* bold paragraph */}
              <div className="text-[1.5rem] font-bold my-3 leading-7">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
              {/* normal paragraph */}
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  ad quaerat esse. and others
                </p>
              </div>
              {/* indented paragraph */}
              <div className="my-3">
                <div className="my-5">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[1.25rem] text-green-400" />
                    <h3 className="font-semibold text-[1rem]">
                      Ethiopian, Wisdom
                    </h3>
                  </div>
                  <div className="pl-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat tempore optio enim?
                    </p>
                  </div>
                </div>
                <div className="my-5">
                  <div className="flex items-center gap-3">
                    <FaCircleCheck className="text-[1.25rem] text-green-400" />
                    <h3 className="font-semibold text-[1rem]">
                      Ethiopian, Wisdom
                    </h3>
                  </div>
                  <div className="pl-10">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellat tempore optio enim?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* background image */}
        <div className="absolute left-0 bottom-0 h-full w-full flex overflow-hidden">
          <div className="flex w-full h-full">
            <img
              className="w-full object-cover opacity-5"
              src="/images/bg/bg-one.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FinalHome;
