import { useState } from "react";
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
import { FaCarCrash, FaShoppingCart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdDashboard, MdOutlineFireplace } from "react-icons/md";
import { GiOpenFolder } from "react-icons/gi";
import { IoFolder } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { GoLightBulb } from "react-icons/go";

const HomeIndex = () => {
  // local states
  const [isOtherService, setIsOtherService] = useState(false);
  // local date
  const ourServices = [
    "Advise on investment including merger and acquisition",
    "Advise on capital market",
    "Advise on bankruptcy and financial frameworks",
    "Advise on syndicated loan or finance",
    "Advise on project finance",
    "Advise on secured lending, sovereign loans and debt restructuring",
  ];
  const ourServicesTwo = [
    "IP due diligence ",
    "Technology transactions",
    "Strategic IP counselling",
    "Trademark, copyright and patent registration and renewal",
    "Represent clients before tribunal all the way to the Federal Supreme Court",
  ];
  return (
    <>
      {/* first order container */}
      <div className="w-full px-[3%] pt-[3%] sm:pt-[0%] sm:px-[12%] bg-gradient-to-r from-white to-orange-50 pb-12 sm:pb-[100px] relative shadow-md">
        <div className="relative z-20 w-full h-full sm:py-[1%] flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-[3%]">
          {/* top left */}
          <div className="w-full mt-12 sm:mt-5  sm:w-[45%]">
            {/* first button */}
            <div className="sm:mt-16">
              <button className="px-[5%] py-1 border border-sky-100 bg-sky-50 rounded-full">
                Legal Help In Ethiopia
              </button>
            </div>
            {/* bold paragraph */}
            <div className="my-7">
              <p className="text-[1.23rem] track md:text-[2.875rem] leading-7 md:leading-[50px] font-[700] my-[1%]">
                U.S Legal Help in Ethiopia
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
          <div className="w-full sm:w-[50%]  h-full">
            {/* content container */}
            <div className="w-full h-full relative flex">
              {/* image */}
              <div className="relative z-10 w-full h-full px-[5%] md:px-[15%] flex">
                <div className="w-full h-full relative flex justify-center after:absolute after:left-0 after:bottom-0 after:w-[100%] md:after:w-[85%] after:h-[75%] after:bg-green-400 after:z-0 after:rounded-l-[15%]">
                  <img
                    className="h-[450px] md:h-[500px] object-cover relative z-10"
                    src="/images/personnels/customer-i-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              {/* content */}
              <div className="absolute left-0 bottom-0 h-full w-full z-50 flex flex-col gap-y-5">
                {/* yellow card div */}
                <div className="flex-grow flex items-end justify-end h-[75%]">
                  <div className="flex items-center gap-x-2 p-2 rounded-sm text-white bg-yellow-300">
                    {/* icon */}
                    <div className="rounded-full bg-white text-[1.35rem] text-green-400">
                      <SiPostman />
                    </div>
                    {/* text */}
                    <div>
                      <p>Ethiopian, Wisdom</p>
                    </div>
                  </div>
                </div>
                {/* lawyers container */}
                <div className="flex-grow h-[50%] flex items-end">
                  <div className="bg-white shadow-lg mb-[-24px] w-max">
                    <header className="px-3 py-2 border-b border-gray-100">
                      <h3 className="text-[.85rem] font-[700]">
                        Our Expert Lawyers
                      </h3>
                    </header>
                    <div
                      className="px-3 h-[19.5vh] overflow-y-auto mr-1"
                      id="home-lawyer-list-card"
                    >
                      {/* lawyer container */}
                      {[...Array(12)].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-x-[50px] my-1"
                        >
                          <div className="flex items-center gap-x-3">
                            <div className="w-[28px] aspect-square rounded-full overflow-hidden">
                              <img
                                className="w-full h-full object-cover"
                                src="/images/personnels/lawyer-two.jpg"
                                alt=""
                              />
                            </div>
                            <div>
                              <div className="text-[.875rem] font-semibold flex items-center gap-1 mb-[-5px]">
                                <span>Haddis</span>
                                <span>Fanta</span>
                              </div>
                              <span className="text-[.75rem] text-gray-400">
                                web dev
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="rounded-full text-[1.35rem] text-green-400">
                              <VscVerifiedFilled />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <footer className="px-3 py-2">
                      <span className="text-[.65rem] text-gray-400">
                        some footer text
                      </span>
                    </footer>
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
              className="opacity-[0.04] w-full object-cover"
              src="/images/bg/bg-zero.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* post-first */}
      <div className="px-[3%] sm:px-[12%] py-[5%]">
        <div className="w-full flex items-center gap-0">
          {/* text container */}
          <div className="w-[50%] border-b-[7px] pb-[2%] border-black">
            <div className="my-5 text-[1.75rem] font-bold">
              <p>Why Choose US</p>
            </div>
            {/* sub texts */}
            <div className="mb-7">
              <div className="my-2 text-[1.35rem] font-semibold">
                <p>Expertise</p>
              </div>
              <div className="text-[1rem]">
                <p>
                  Our team of experienced lawyers specializes in various areas
                  of law, ensuring you receive the best legal advice tailored to
                  your needs.
                </p>
              </div>
            </div>

            <div className="mb-7">
              <div className="my-2 text-[1.35rem] font-semibold">
                <p>Personalized Approach</p>
              </div>
              <div className="text-[1rem]">
                <p>
                  We take the time to understand your unique situation and
                  provide personalized solutions to ensure the best possible
                  outcome for your case.
                </p>
              </div>
            </div>

            <div>
              <div className="my-2 text-[1.35rem] font-semibold">
                <p>Client-Centered Focus</p>
              </div>
              <div className="text-[1rem]">
                <p>
                  Your satisfaction is our top priority, and we strive to go
                  above and beyond to exceed your expectations and deliver
                  exceptional legal services.
                </p>
              </div>
            </div>
          </div>
          {/* image container */}
          <div className="w-[50%] h-full flex items-center justify-center">
            {/* image container */}
            <div className="flex items-center justify-center">
              <div>
                <img
                  src="https://www.legalzoom.com/resources/img/lzr/homepage/kelly-why-us.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* pre-second order container */}
      <div className="px-[3%] sm:px-[12%] py-[5%]">
        {/* first container for bold text */}
        <div className="flex items-center justify-center text-[2.5rem] font-bold text-center px-[5%]">
          <p>
            Comprehensive Legal Assistance for Every Aspect of Your Business
          </p>
        </div>
        {/* second container */}
        <div className="flex items-end mt-10">
          {/* left */}
          <div className="w-[50%] relative flex">
            {/* image container */}
            <div className="w-full h-full overflow-hidden">
              <img
                className="h-full w-full object-center object-cover"
                src="https://assets.delawarebusinesstimes.com/2018/05/Fotolia_76403295_Subscription_Monthly_M.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 right-0 bg-white w-[250px] h-[150px] shadow-xl p-5">
              <div className="my-3">
                <GoLightBulb className="text-[2.5rem]" />
              </div>
              <div className="font-semibold text-[.875rem] ">
                <p>We've made dreams a reality for 2m+ entrepreneurs.</p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-[50%]  p-10 pb-0">
            {/* bold paragraph */}
            <div className="mb-4 text-[1.975rem] font-bold">
              <p>For your business</p>
            </div>
            {/* normal paragraph */}
            <div className="text-[1.05rem]">
              <p>
                Whether you need to establish a company, apply for licenses and
                permits, or obtain a tax ID, we will help set your business up
                for success.
              </p>
            </div>
            {/* first button */}
            <div className="my-7">
              <button className="rounded-full px-12 py-[.5rem] bg-yellow-500 text-[1.15rem] font-semibold text-white transition-all ease-in-out duration-150 hover:bg-yellow-400">
                start my business
              </button>
            </div>
            {/* second buttons */}
            <div className="flex items-center gap-5 text-[1.05rem] font-semibold mb-3">
              <button className="rounded-full px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                PLC
              </button>
              <button className="rounded-full px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                Share Company
              </button>
            </div>
            {/* third buttons */}
            <div className="flex items-center gap-5 text-[1.05rem] font-semibold mt-5">
              <button className="rounded-full px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                NGO
              </button>
              <button className="rounded-full px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                Get Legal Help
              </button>
            </div>
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
                    <p>Lorem ipsum dolor sit amet man</p>
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
                <p>Are you looking for an intellectual property lawyer?</p>
              </div>
              {/* normal paragraph */}
              <div className="relative">
                <div
                  className={`absolute left-0 top-0 bg-transparent overflow-hidden transition-all ease-in-out duration-300 z-50 ${
                    isOtherService ? "h-[50vh]" : "h-0"
                  }`}
                >
                  <div className="p-3 bg-inherit relative bg-white">
                    <p>
                      Financial sector including capital market is obvious
                      choice for foreign companies to engage in. Ethiopia is
                      liberalizing many sectors that were otherwise reserved for
                      local investors. One of the areas that the government is
                      planning to liberalize is financial sector. With the
                      opening up of various sectors for foreign investors
                      coupled with the coming of capital market, triggers the
                      need to have a support of law firm. We have highly
                      regarded lawyers in the sector that can exactly meet your
                      needs to work with your company.
                    </p>
                    <button
                      className="absolute bottom-1 right-1 rounded-full p-1 bg-gray-100 transition-all ease-in-out duration-300 hover:bg-gray-200"
                      onClick={() => {
                        setIsOtherService(false);
                      }}
                    >
                      <MdClose className="text-[1.15rem]" />
                    </button>
                  </div>
                </div>
                <p className="">
                  You have clicked the right platform. Harnessing innovation and
                  digital transformation is essential to the long-term success
                  of companies and institutions.
                </p>
              </div>
              {/* our services */}
              <div className="mt-3">
                {/* header */}
                <header>
                  <h3 className="text-[1.25rem] font-bold">Our Services</h3>
                </header>
                {/* list */}
                <div className="pl-5">
                  <ul>
                    {ourServicesTwo?.map((service, index) => (
                      <li key={index} className="flex items-start gap-3 py-1">
                        <div className="w-[14px] aspect-square bg-emerald-500 text-white rounded-full relative flex items-center justify-center">
                          <TiTick />
                        </div>
                        <div className="border-b border-black border-opacity-0">
                          {service}
                        </div>
                      </li>
                    ))}
                  </ul>
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

      {/* third order container */}
      <div className="px-[3%] sm:px-[12%] bg-gradient-to-r from-gray-50 to-orange-100 py-[3%] flex items-center justify-between gap-[5%] relative">
        <div>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-y-5 lg:gap-y-0 lg:gap-[5%] relative z-30">
            {/* top left container */}
            <div className="w-full lg:w-[50%]">
              {/* button */}
              <div>
                <button className="px-[5%] py-1 rounded-full bg-sky-100 border border-sky-200">
                  some text here
                </button>
              </div>
              {/* bold paragraph */}
              <div className="my-5 text-[1.15rem] leading-6 md:text-[1.5rem] font-[700] md:leading-7">
                <p>Lorem ipsum dolor sit amet consectetur, adipi</p>
              </div>
              {/* normal paragraph */}
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni nihil explicabo consectetur doloribus saepe delectus,
                  labore itaque.
                </p>
              </div>
              {/* text with icon */}
              <div className="flex flex-col gap-y-5 mt-5">
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-pink-100 border border-pink-400 text-pink-600 text-[1.15rem] rounded-full">
                    <MdOutlineFireplace />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Id suscipit delectus tempora?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-blue-100 border border-blue-400 text-blue-600 text-[1.15rem] rounded-full">
                    <IoMdRepeat />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Id suscipit delectus tempora?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-green-100 border border-green-400 text-green-600 text-[1.15rem] rounded-full">
                    <IoFolder />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Id suscipit delectus tempora?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom right container */}
            <div className="w-full lg:w-[50%] flex relative">
              {/* background image */}
              <div className="w-full h-full flex px-[15%]">
                <div className="flex-grow relative after:absolute after:left-0 after:bottom-0 after:w-[85%] after:h-[80%] after:rounded-tl-[35%] after:bg-orange-400 z-0 flex items-end justify-end">
                  <div>
                    <img
                      className="relative z-10 max-h-[350px]"
                      src="/images/personnels/lawyer-three.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* content */}
              <div className="absolute left-0 top-0 w-full h-full z-50">
                {/* card */}
                <div className="absolute left-0 top-1/2 -translate-y-1/4 bg-white shadow-lg">
                  <Chart
                    width={"100%"}
                    height={155}
                    type="area"
                    series={[
                      {
                        name: "spent",
                        data: [120, 100, 145, 170, 100, 200, 125],
                      },
                    ]}
                    options={{
                      legend: {
                        show: false,
                      },
                      dataLabels: {
                        show: false,
                        formatter: (val) => ``,
                      },
                      tooltip: {
                        fillSeriesColor: true,
                      },
                      xaxis: {
                        categories: [
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                        ],
                        labels: {
                          show: false,
                        },
                        tickPlacement: "off",
                      },
                      yaxis: {
                        labels: {
                          show: true,
                        },
                      },
                      grid: {
                        show: false,
                      },
                      plotOptions: {
                        bar: {
                          distributed: true,
                          // colors: ["#00B136", "#B23601", "#011CB2", "#A001B2"],
                        },
                      },
                    }}
                  ></Chart>
                </div>
              </div>
            </div>
          </div>
          {/* background image */}
          <div className="absolute left-0 bottom-0 w-full h-full flex overflow-hidden">
            <div className="flex-grow w-full h-full overflow-hidden">
              <img
                className="h-full w-full object-cover opacity-10"
                src="/images/bg/bg-two.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* forth order container */}
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
                    <p>Lorem ipsum dolor sit amet man</p>
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
                <p>Do you want to engage in newly liberalized sectors?</p>
              </div>
              {/* normal paragraph */}
              <div className="relative">
                <div
                  className={`absolute left-0 top-0 bg-transparent overflow-hidden transition-all ease-in-out duration-300 z-50 ${
                    isOtherService ? "h-[50vh]" : "h-0"
                  }`}
                >
                  <div className="p-3 bg-inherit relative bg-white">
                    <p>
                      Financial sector including capital market is obvious
                      choice for foreign companies to engage in. Ethiopia is
                      liberalizing many sectors that were otherwise reserved for
                      local investors. One of the areas that the government is
                      planning to liberalize is financial sector. With the
                      opening up of various sectors for foreign investors
                      coupled with the coming of capital market, triggers the
                      need to have a support of law firm. We have highly
                      regarded lawyers in the sector that can exactly meet your
                      needs to work with your company.
                    </p>
                    <button
                      className="absolute bottom-1 right-1 rounded-full p-1 bg-gray-100 transition-all ease-in-out duration-300 hover:bg-gray-200"
                      onClick={() => {
                        setIsOtherService(false);
                      }}
                    >
                      <MdClose className="text-[1.15rem]" />
                    </button>
                  </div>
                </div>
                <p className="p-3">
                  Financial sector including capital market is obvious choice
                  for foreign companies to engage in. Ethiopia is liberalizing
                  many sectors that were otherwise reserved for local investors.
                  {/* One of the areas that the government is planning to liberalize
                  is financial sector. With the opening up of various sectors
                  for foreign investors coupled with the coming of capital
                  market, triggers the need to have a support of law firm. We
                  have highly regarded lawyers in the sector that can exactly
                  meet your needs to work with your company. */}
                  <span
                    className="cursor-pointer ml-1 text-blue-700 font-medium"
                    onClick={() => {
                      setIsOtherService(true);
                    }}
                  >
                    more
                  </span>
                </p>
              </div>
              {/* our services */}
              <div className="mt-3">
                {/* header */}
                <header>
                  <h3 className="text-[1.25rem] font-bold">Our Services</h3>
                </header>
                {/* list */}
                <div className="pl-5">
                  <ul>
                    {ourServices?.map((service, index) => (
                      <li key={index} className="flex items-start gap-2 py-1">
                        <div className="w-[16px] aspect-square bg-emerald-500 text-white rounded-full relative flex items-center justify-center">
                          <TiTick />
                        </div>
                        <div>{service}</div>
                      </li>
                    ))}
                  </ul>
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

      {/* fifth order container */}
      <div className="px-[3%] sm:px-[12%] bg-gradient-to-r from-gray-50 to-orange-100 py-[3%] flex items-center justify-between gap-[5%] relative">
        <div>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-y-5 lg:gap-y-0 lg:gap-[5%] relative z-30">
            {/* top left container */}
            <div className="w-full lg:w-[50%]">
              {/* button */}
              <div>
                <button className="px-[5%] py-1 rounded-full bg-sky-100 border border-sky-200">
                  some text here
                </button>
              </div>
              {/* bold paragraph */}
              <div className="my-5 text-[1.15rem] leading-6 md:text-[1.5rem] font-[700] md:leading-7">
                <p>Lorem ipsum dolor sit amet consectetur, adipi</p>
              </div>
              {/* normal paragraph */}
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Magni nihil explicabo consectetur doloribus saepe delectus,
                  labore itaque.
                </p>
              </div>
              {/* text with icon */}
              <div className="flex flex-col gap-y-5 mt-5">
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-pink-100 border border-pink-400 text-pink-600 text-[1.15rem] rounded-full">
                    <MdOutlineFireplace />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Id suscipit delectus tempora?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-blue-100 border border-blue-400 text-blue-600 text-[1.15rem] rounded-full">
                    <IoMdRepeat />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Id suscipit delectus tempora?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-green-100 border border-green-400 text-green-600 text-[1.15rem] rounded-full">
                    <IoFolder />
                  </div>
                  <div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Id suscipit delectus tempora?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom right container */}
            <div className="w-full lg:w-[50%] flex relative">
              {/* background image */}
              <div className="w-full h-full flex px-[15%]">
                <div className="flex-grow relative after:absolute after:left-0 after:bottom-0 after:w-[85%] after:h-[80%] after:rounded-tl-[35%] after:bg-orange-400 z-0 flex items-end justify-end">
                  <div>
                    <img
                      className="relative z-10 max-h-[350px]"
                      src="/images/personnels/lawyer-three.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* content */}
              <div className="absolute left-0 top-0 w-full h-full z-50">
                {/* card */}
                <div className="absolute left-0 top-1/2 -translate-y-1/4 bg-white shadow-lg">
                  <Chart
                    width={"100%"}
                    height={155}
                    type="area"
                    series={[
                      {
                        name: "spent",
                        data: [120, 100, 145, 170, 100, 200, 125],
                      },
                    ]}
                    options={{
                      legend: {
                        show: false,
                      },
                      dataLabels: {
                        show: false,
                        formatter: (val) => ``,
                      },
                      tooltip: {
                        fillSeriesColor: true,
                      },
                      xaxis: {
                        categories: [
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                        ],
                        labels: {
                          show: false,
                        },
                        tickPlacement: "off",
                      },
                      yaxis: {
                        labels: {
                          show: true,
                        },
                      },
                      grid: {
                        show: false,
                      },
                      plotOptions: {
                        bar: {
                          distributed: true,
                          // colors: ["#00B136", "#B23601", "#011CB2", "#A001B2"],
                        },
                      },
                    }}
                  ></Chart>
                </div>
              </div>
            </div>
          </div>
          {/* background image */}
          <div className="absolute left-0 bottom-0 w-full h-full flex overflow-hidden">
            <div className="flex-grow w-full h-full overflow-hidden">
              <img
                className="h-full w-full object-cover opacity-10"
                src="/images/bg/bg-two.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
