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
import {
  MdDashboard,
  MdOutlineFireplace,
  MdPhoneInTalk,
  MdOutlineMarkEmailRead,
  MdOutlineMediation,
} from "react-icons/md";
import { GiOpenFolder } from "react-icons/gi";
import { FaCircleCheck, FaXTwitter } from "react-icons/fa6";
import { IoFolder } from "react-icons/io5";

// components
import Header from "../components/Header";
import FinalHeader from "../components/FinalHeader";
// main
const FinalHome = () => {
  return (
    <div className="w-screen h-screen overflow-y-auto pt-[1vh] font-workSans relative">
      {/* <Header /> */}
      <FinalHeader />

      {/* first order container */}
      <div className="w-full px-[3%] pt-[3%] sm:pt-[5%] sm:px-[12%] bg-gradient-to-r from-white to-orange-100 pb-12 sm:pb-[100px] relative shadow-md">
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
          <div className="w-full sm:w-[50%]  h-full">
            {/* content container */}
            <div className="w-full h-full relative flex">
              {/* image */}
              <div className="relative z-10 w-full h-full px-[15%] flex mt-[-24px]">
                <div className="w-full h-full relative flex justify-center after:absolute after:left-0 after:bottom-0 after:w-[100%] md:after:w-[85%] after:h-[75%] after:bg-green-400 after:z-0 after:rounded-l-[15%]">
                  <img
                    className="h-[450px] relative z-10"
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

      {/* footer container */}
      <div className="bg-black text-gray-300">
        {/* footer top */}
        <div className="px-[1%] sm:px-[5%] py-3 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          {/* top right */}
          <div className="w-[100%] md:w-[70%]">
            {/* menu list */}
            <div className="py-1 md:py-[7%] flex items-center justify-between text-[1rem]">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index}>
                  <ul className="[&>li]:my-2">
                    <li>Desktop App</li>
                    <li>Mobile Apps</li>
                    <li>Plans</li>
                    <li>Security</li>
                    <li>Features</li>
                  </ul>
                </div>
              ))}
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
            <header className="flex items-center gap-[15%] px-[5%] py-2 text-white rounded-sm bg-pink-600">
              <div className="p-2 rounded-full bg-white text-xl text-pink-600">
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
                <button className="px-5 rounded-full bg-pink-600 h-full text-white py-[.5rem]">
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
      </div>
    </div>
  );
};

export default FinalHome;
