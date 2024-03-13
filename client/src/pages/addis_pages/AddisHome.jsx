import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
// customer main image
import customerMainImage from "../../assets/images/customers/customer-i.jpg";

// icons
import {
  FaGlobeAfrica,
  FaCarCrash,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaFacebookF,
  FaRegStar,
  FaYoutube,
} from "react-icons/fa";

import {
  MdPhoneInTalk,
  MdOutlineMediation,
  MdOutlineMarkEmailRead,
} from "react-icons/md";

// rating
// full star
import { ImStarFull } from "react-icons/im";
// half star
import { BsStarHalf } from "react-icons/bs";
// empty star
import {} from "react-icons/fa";

import { FaScaleBalanced, FaBlog, FaXTwitter } from "react-icons/fa6";
import { IoLogoCodepen } from "react-icons/io";

// components
import AddisHeader from "../../components/addis_components/AddisHeader";
// data files
import { judges } from "../../DataFile";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 11,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const AddisHome = () => {
  // local states
  // accoddion controllers
  const [firstAccordion, setFirstAccodion] = useState(false);
  const [secondAccordion, setSecondAccodion] = useState(true);
  const [thirdAccordion, setThirdAccodion] = useState(false);
  const [forthAccordion, setForthAccodion] = useState(false);

  return (
    <div>
      {/* header */}
      <AddisHeader />
      <div className="flex-grow bg-gray-100 h-[81vh] overflow-y-auto">
        {/* banner */}
        <div className="h-[250px] flex items-center justify-center relative">
          <div className="absolute left-0 bottom-0 z-10 w-full h-full bg-black">
            <img
              src="https://media.istockphoto.com/id/1139699594/photo/law-concept-themis-statue-judge-hammer-and-books.jpg?s=170667a&w=0&k=20&c=PGPkWvwrenf6qzJCnHef5MpSKeSzoum2TP45HpS6aZs="
              alt=""
              className="w-full h-full opacity-[.25]"
            />
          </div>
          <div className="relative z-40 flex flex-col items-center justify-center text-gray-100 max-w-[820px] mx-auto px-[1%] ">
            <h3 className="text-3xl my-1 font-bold">some text</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae explicabo qui laboriosam.
            </p>
          </div>
        </div>
        {/* first order container */}
        <div className="px-[3%] sm:px-[10%] flex flex-col items-end justify-between gap-x-5 sm:flex-row">
          {/* top-left container */}
          <div className="w-full sm:w-[30%] md:min-w-[250px] lg:min-w-[300px]">
            {/* card */}
            <div className="bg-teal-500 mb-5 sm:mb-0 relative text-white mt-[-38px] z-50 flex flex-col">
              {/* image */}
              <div className="self-end w-[50%] py-[1%] sm:py-[3%] overflow-hidden rounded-full">
                <img src={customerMainImage} alt="" />
              </div>
              {/* text */}
              <div className="self-start w-[85%] p-[5%] text-lg">
                <p className="text-left my-3">
                  Access
                  <span className="text-black font-bold"> 2500+</span> Online
                  Courses From 140 Institutions
                </p>
                <button className="my-3 text-[.95rem] font-semibold border-2 border-gray-300 px-5 py-2 rounded-sm">
                  Register Now
                </button>
              </div>
            </div>
          </div>
          {/* bottom-right container */}
          <div className="flex-grow flex flex-col gap-y-5">
            {/* top cards */}
            <div className="flex flex-col sm:flex-row items-center justify-evenly my-2 sm:gap-10 md:gap-16">
              {/* card - 1 */}
              <div className="w-[75%] flex items-center justify-evenly sm:justify-center gap-x-3 p-5 shadow-md rounded-md">
                {/* icon */}
                <div className="p-1 border-2 border-emerald-700 rounded-full bg-emerald-200">
                  <FaGlobeAfrica className="text-3xl text-emerald-700" />
                </div>
                {/* text */}
                <div>
                  <h3 className="font-black text-lg">23.7k</h3>
                  <span className="text-gray-500">followers</span>
                </div>
              </div>
              {/* card - 2 */}
              <div className="w-[75%] flex items-center justify-evenly sm:justify-center gap-x-3 p-5 shadow-md rounded-md">
                {/* icon */}
                <div className="p-1 border-2 border-blue-700 rounded-full bg-blue-200">
                  <FaShoppingCart className="text-3xl text-blue-700" />
                </div>
                {/* text */}
                <div>
                  <h3 className="font-black text-lg">64.5k</h3>
                  <span className="text-gray-500">Customers</span>
                </div>
              </div>
              {/* card - 3 */}
              <div className=" w-[75%] flex items-center justify-evenly sm:justify-center gap-x-3 p-5 shadow-md rounded-md">
                {/* icon */}
                <div className="p-1 border-2 border-orange-700 rounded-full bg-orange-200">
                  <FaCarCrash className="text-3xl text-orange-700" />
                </div>
                {/* text */}
                <div>
                  <h3 className="font-black text-lg">33.9k</h3>
                  <span className="text-gray-500">services</span>
                </div>
              </div>
            </div>
            {/* bottom cards */}
            <div className="flex items-center justify-between gap-x-5">
              {/* left card */}
              <div className="relative overflow-hidden rounded-md h-[190px] w-[50%]">
                {/* image */}
                <div className="w-full h-full bg-black">
                  <img
                    src="https://th.bing.com/th/id/OIP.elg7N6SE0nq42Qb4vBOVWwHaEK?rs=1&pid=ImgDetMain"
                    alt=""
                    className="opacity-[.5]"
                  />
                </div>
                {/* text-container */}
                <div className="absolute left-0 top-0 z-50 text-white h-full w-full flex flex-col justify-center gap-y-7 p-[5%]">
                  <div>
                    <button className="px-7 py-2 bg-orange-500 rounded-sm">
                      hello, world
                    </button>
                  </div>
                  <div>
                    <span className="text-gray-300">some text</span>
                    <h3 className="text-lg font-semibold">Web Programming</h3>
                  </div>
                </div>
              </div>
              {/* right card */}
              <div className="relative overflow-hidden rounded-md h-[190px] w-[50%]">
                {/* image */}
                <div className="w-full h-full bg-black">
                  <img
                    src="https://evizone.com/wp-content/uploads/2017/06/judges-gavel.jpg"
                    alt=""
                    className="opacity-[.5]"
                  />
                </div>
                {/* text-container */}
                <div className="absolute left-0 top-0 z-50 text-white h-full w-full flex flex-col justify-center gap-y-7 p-[5%]">
                  <div>
                    <button className="px-7 py-2 bg-orange-500 rounded-sm">
                      hello, world
                    </button>
                  </div>
                  <div>
                    <span className="text-gray-300">some text</span>
                    <h3 className="text-lg font-semibold">Web Programming</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second order container */}
        <div className="px-[10%] py-[2%] flex flex-col lg:flex-row items-center justify-between">
          {/* top-left container */}
          <div className="w-full lg:w-[50%]">
            {/* title container */}
            <div className="my-5">
              <span className="text-gray-500 text-lg">
                you have to write some text here
              </span>
              <h3 className="text-3xl font-black">Find Top Talents</h3>
            </div>
            {/* accordion */}
            {/* first accordion */}
            <div className="p-3 pl-0 flex flex-col items-start justify-start accordion-border-width-color mb-3 w-[95%] screen-5:w-[85%] screen-7:w-[100%]">
              <button
                className="flex-grow flex flex-reverse items-center justify-start w-full my-1 mb-2"
                onClick={() => setFirstAccodion(!firstAccordion)}
              >
                <div className="p-1 rounded-full border-gray-700 bg-gray-300">
                  {firstAccordion ? (
                    <FaMinus className="text-lg" />
                  ) : (
                    <FaPlus className="text-lg" />
                  )}
                </div>
                <span className="text-lg font-bold ml-3">
                  Create a positive work place
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
                  firstAccordion
                    ? `grid-rows-[1fr] opacity-100`
                    : `grid-rows-[0fr] opacity-0`
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-justify my-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique veniam corporis accusamus quisquam assumenda sit.
                    Corrupti fugiat unde, iste omnis fugit non ducimus qui ad
                    nisi tempore sint! Esse enim culpa aliquam hic, aut
                    voluptatem, odio officiis unde neque rem quas velit.
                  </p>
                </div>
              </div>
            </div>
            {/* second accordion */}
            <div className="p-3 pl-0 flex flex-col items-start justify-start accordion-border-width-color mb-3 w-[95%] screen-5:w-[85%] screen-7:w-[100%]">
              <button
                className="flex-grow flex flex-reverse items-center justify-start w-full my-1 mb-2"
                onClick={() => setSecondAccodion(!secondAccordion)}
              >
                <div className="p-1 rounded-full border-gray-700 bg-gray-300">
                  {secondAccordion ? (
                    <FaMinus className="text-lg" />
                  ) : (
                    <FaPlus className="text-lg" />
                  )}
                </div>
                <span className="text-lg font-bold ml-3">
                  Create a positive work place
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
                  secondAccordion
                    ? `grid-rows-[1fr] opacity-100`
                    : `grid-rows-[0fr] opacity-0`
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-justify my-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique veniam corporis accusamus quisquam assumenda sit.
                    Corrupti fugiat unde, iste omnis fugit non ducimus qui ad
                    nisi tempore sint! Esse enim culpa aliquam hic, aut
                    voluptatem, odio officiis unde neque rem quas velit.
                  </p>
                </div>
              </div>
            </div>
            {/* third accordion */}
            <div className="p-3 pl-0 flex flex-col items-start justify-start accordion-border-width-color mb-3 w-[95%] screen-5:w-[85%] screen-7:w-[100%]">
              <button
                className="flex-grow flex flex-reverse items-center justify-start w-full my-1 mb-2"
                onClick={() => setThirdAccodion(!thirdAccordion)}
              >
                <div className="p-1 rounded-full border-gray-700 bg-gray-300">
                  {thirdAccordion ? (
                    <FaMinus className="text-lg" />
                  ) : (
                    <FaPlus className="text-lg" />
                  )}
                </div>
                <span className="text-lg font-bold ml-3">
                  Create a positive work place
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
                  thirdAccordion
                    ? `grid-rows-[1fr] opacity-100`
                    : `grid-rows-[0fr] opacity-0`
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-justify my-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique veniam corporis accusamus quisquam assumenda sit.
                    Corrupti fugiat unde, iste omnis fugit non ducimus qui ad
                    nisi tempore sint! Esse enim culpa aliquam hic, aut
                    voluptatem, odio officiis unde neque rem quas velit.
                  </p>
                </div>
              </div>
            </div>
            {/* forth accordion */}
            <div className="p-3 pl-0 flex flex-col items-start justify-start accordion-border-width-color mb-3 w-[95%] screen-5:w-[85%] screen-7:w-[100%]">
              <button
                className="flex-grow flex flex-reverse items-center justify-start w-full my-1 mb-2"
                onClick={() => setForthAccodion(!forthAccordion)}
              >
                <div className="p-1 rounded-full border-gray-700 bg-gray-300">
                  {forthAccordion ? (
                    <FaMinus className="text-lg" />
                  ) : (
                    <FaPlus className="text-lg" />
                  )}
                </div>
                <span className="text-lg font-bold ml-3">
                  Create a positive work place
                </span>
              </button>
              <div
                className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
                  forthAccordion
                    ? `grid-rows-[1fr] opacity-100`
                    : `grid-rows-[0fr] opacity-0`
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-justify my-3">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Similique veniam corporis accusamus quisquam assumenda sit.
                    Corrupti fugiat unde, iste omnis fugit non ducimus qui ad
                    nisi tempore sint! Esse enim culpa aliquam hic, aut
                    voluptatem, odio officiis unde neque rem quas velit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* bottom right container */}
          <div className="p-2 gap-5 gap-y-10">
            {/* card 1 */}
            <div className="bg-green-200 flex items-center p-1 rounded-md overflow-hidden mb-7">
              {/* text - container */}
              <div className="w-[85%] sm:w-[50%] pr-1 pl-5">
                <h3 className="text-lg font-black mb-2">For Employers</h3>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
                <button className="px-5 py-1 rounded-sm bg-green-500 text-white my-2">
                  Hello,here
                </button>
              </div>
              {/* image - container */}
              <div className="w-[50%] relative">
                <img
                  src="https://th.bing.com/th/id/R.007dac57ec50e14f8d2655582b8341e9?rik=prNobX7WAqmf9A&riu=http%3a%2f%2fwww.pngplay.com%2fwp-content%2fuploads%2f1%2fWomen-In-Suit-Free-Commercial-Use-PNG-Image.png&ehk=8DtgoiFQWITVEa5tF%2f1%2fz12WQdBxclxpaV%2ffe6hZaX8%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  className=" object-contain h-[120px] w-[120px]  sm:h-[230px] sm:w-[230px] relative z-30 bottom-[-.53rem]"
                />
                <div className="w-[100px] h-[100px] sm:w-[210px] sm:h-[210px] bg-white absolute bottom-3 rounded-full z-10"></div>
              </div>
            </div>
            {/* card 2 */}
            <div className="bg-orange-200 flex items-center p-1 rounded-md overflow-hidden mb-2">
              {/* text - container */}
              <div className="w-[85%] sm:w-[50%] pr-1 pl-5">
                <h3 className="text-lg font-black mb-2">For Employers</h3>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
                <button className="px-5 py-1 rounded-sm bg-green-500 text-white my-2">
                  Hello,here
                </button>
              </div>
              {/* image - container */}
              <div className="w-[50%] relative">
                <img
                  src="https://medflightusa.com/wp-content/uploads/2020/06/image-insurancecoverage.png"
                  alt=""
                  className=" object-contain h-[120px] w-[120px]  sm:h-[230px] sm:w-[230px] relative z-30 bottom-[-.53rem]"
                />
                <div className="w-[100px] h-[100px] sm:w-[210px] sm:h-[210px] bg-white absolute bottom-3 rounded-full z-10"></div>
              </div>
            </div>
          </div>
        </div>
        {/*
        /////////////////////////////////////
        home third order container
        /////////////////////////////////////
         */}
        <div className="bg-gray-200 px-[5%]">
          {/* max width */}
          <div className="flex flex-col-reverse lg:flex-row gap-5 py-9">
            {/* cards container */}
            <div className="w-[100%]">
              {/* cards */}
              <div className="grid grid-cols-2  md:grid-cols-3 gap-7">
                {/* items */}
                {/* item - 1 */}
                <div className="p-3 secondary-cards-bg rounded-md shadow-secondary-card-shadow">
                  {/* icon text */}
                  <div className="flex items-center justify-center py-3 border-b-2 border-gray-300">
                    <FaScaleBalanced className="text-3xl text-blue-600 mr-3" />
                    <div className="flex flex-col gap-[-.3rem]">
                      <span className="font-bold">some text</span>
                      <span className="font-bold">some text</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly px-3 my-3">
                    <span>text-1</span>
                    <span>text-2</span>
                  </div>
                  <div className="font-bold text-center mb-3">some text</div>
                </div>
                {/* item - 2 */}
                <div className="p-3 secondary-cards-bg rounded-md shadow-secondary-card-shadow">
                  {/* icon text */}
                  <div className="flex items-center justify-center py-3 border-b-2 border-gray-300">
                    <IoLogoCodepen className="text-3xl text-orange-500 mr-3" />
                    <div className="flex flex-col gap-[-.3rem]">
                      <span className="font-bold">some text</span>
                      <span className="font-bold">some text</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly px-3 my-3">
                    <span>text-1</span>
                    <span>text-2</span>
                  </div>
                  <div className="font-bold text-center mb-3">some text</div>
                </div>
                {/* item - 3 */}
                <div className="p-3 secondary-cards-bg rounded-md shadow-secondary-card-shadow">
                  {/* icon text */}
                  <div className="flex items-center justify-center py-3 border-b-2 border-gray-300">
                    <FaBlog className="text-3xl text-green-500 mr-3" />
                    <div className="flex flex-col gap-[-.3rem]">
                      <span className="font-bold">some text</span>
                      <span className="font-bold">some text</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly px-3 my-3">
                    <span>text-1</span>
                    <span>text-2</span>
                  </div>
                  <div className="font-bold text-center mb-3">some text</div>
                </div>
                {/* item - 1 */}
                <div className="p-3 secondary-cards-bg rounded-md shadow-secondary-card-shadow">
                  {/* icon text */}
                  <div className="flex items-center justify-center py-3 border-b-2 border-gray-300">
                    <FaScaleBalanced className="text-3xl text-blue-600 mr-3" />
                    <div className="flex flex-col gap-[-.3rem]">
                      <span className="font-bold">some text</span>
                      <span className="font-bold">some text</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly px-3 my-3">
                    <span>text-1</span>
                    <span>text-2</span>
                  </div>
                  <div className="font-bold text-center mb-3">some text</div>
                </div>
                {/* item - 2 */}
                <div className="p-3 secondary-cards-bg rounded-md shadow-secondary-card-shadow">
                  {/* icon text */}
                  <div className="flex items-center justify-center py-3 border-b-2 border-gray-300">
                    <IoLogoCodepen className="text-3xl text-orange-500 mr-3" />
                    <div className="flex flex-col gap-[-.3rem]">
                      <span className="font-bold">some text</span>
                      <span className="font-bold">some text</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly px-3 my-3">
                    <span>text-1</span>
                    <span>text-2</span>
                  </div>
                  <div className="font-bold text-center mb-3">some text</div>
                </div>
                {/* item - 3 */}
                <div className="p-3 secondary-cards-bg rounded-md shadow-secondary-card-shadow">
                  {/* icon text */}
                  <div className="flex items-center justify-center py-3 border-b-2 border-gray-300">
                    <FaBlog className="text-3xl text-green-500 mr-3" />
                    <div className="flex flex-col gap-[-.3rem]">
                      <span className="font-bold">some text</span>
                      <span className="font-bold">some text</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-evenly px-3 my-3">
                    <span>text-1</span>
                    <span>text-2</span>
                  </div>
                  <div className="font-bold text-center mb-3">some text</div>
                </div>
              </div>
            </div>
            {/* texts - container */}
            <div className="p-5 text-left self-center w-[100%] lg:w-[65%] ">
              <span className="text-orange-700 text-xs font-serif">
                some little text
              </span>
              <h2 className="text-xl font-black">some large text</h2>
              <h2 className="text-xl font-black mb-2">some large text</h2>
              <p className="py-3 font-serif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis nihil ullam molestias ducimus aspernatur itaque
                tempora ex unde tempore, repellat accusamus ipsa necessitatibus
                sequi ea suscipit iusto distinctio commodi ratione at delectus.
              </p>
              <button className="px-5 py-1 rounded-sm text-white bg-orange-400 mt-3 shadow-secondary-btn-shadow">
                hello,ethiopia
              </button>
            </div>
          </div>
        </div>
        {/* 
      ////////////////////////////////
      home fourth order container 
      ///////////////////////////////
      */}
        <div className="bg-white pb-7">
          {/* top content with blue bg-element */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-1 font-semibold">
            {/* items */}
            <div className="bg-blue-900 text-white flex items-center justify-center">
              <div className="text-lg my-1">
                <div>Text - 1</div>
                <div>Text - 2</div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1">
              <div className="text-lg my-1 border-l border-gray-500 px-7 flex-grow">
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">start</span>
                  <span>2024</span>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">end</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1">
              <div className="text-lg my-1 border-l border-gray-500 px-7 flex-grow">
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">start</span>
                  <span>2024</span>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">end</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1">
              <div className="text-lg my-1 border-l border-gray-500 px-7 flex-grow">
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">start</span>
                  <span>2024</span>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">end</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1">
              <div className="text-lg my-1 border-l border-gray-500 px-7 flex-grow">
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">start</span>
                  <span>2024</span>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">end</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center p-1">
              <div className="text-lg my-1 border-l border-gray-500 px-7 flex-grow">
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">start</span>
                  <span>2024</span>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <span className="text-blue-900">end</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* nav-btn-container for users profiles */}
          <div className="py-5">
            {/* limit the width of the layout */}
            <div className="px-[3%] flex items-center justify-between">
              {/* left container */}
              <div className="flex items-center">
                <h3 className="mr-1 font-black text-lg">some text here</h3>{" "}
                <span className="text-sm">some text</span>
              </div>
              {/* right container */}
              <div className="flex items-center justify-end">
                <span className="text-sm font-bold mr-1">some text</span>
                {/* <button className="text-2xl mr-1">
                <TfiArrowCircleLeft />
              </button> */}
                {/* <button className="text-2xl opacity-[.45]">
                <TfiArrowCircleRight />
              </button> */}
              </div>
            </div>
          </div>
          {/* top rating judjes container */}
          <div className="px-[3%] bg-white">
            {judges?.length > 0 ? (
              <Carousel responsive={responsive}>
                {judges.map((judge, index) => (
                  <div
                    key={index}
                    className="mx-3 flex flex-col items-center justify-center"
                  >
                    <div className="flex-grow flex">
                      <img
                        src={judge.image}
                        alt=""
                        className="rounded-full w-[110px] h-[100px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center font-bold mt-[-.1rem]">
                      <span>{judge.first_name}</span>
                      <span className="mt-[-.35rem]">{judge.last_name}</span>
                    </div>
                    <div className="flex items-center gap-1 pl-5">
                      {judge.rating > 4 ? (
                        <div className="text-xs text-yellow-500 flex items-center">
                          <ImStarFull />
                          <ImStarFull />
                          <ImStarFull />
                          <ImStarFull />
                          <BsStarHalf />
                        </div>
                      ) : judge.rating > 3 ? (
                        <div className="text-xs text-yellow-500 flex items-center">
                          <ImStarFull />
                          <ImStarFull />
                          <ImStarFull />
                          <BsStarHalf />
                          <FaRegStar />
                        </div>
                      ) : judge.rating > 2 ? (
                        <div className="text-xs text-yellow-500 flex items-center">
                          <ImStarFull />
                          <ImStarFull />
                          <BsStarHalf />
                          <FaRegStar />
                          <FaRegStar />
                        </div>
                      ) : (
                        <div className="text-xs text-yellow-500 flex items-center">
                          <ImStarFull />
                          <BsStarHalf />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                        </div>
                      )}
                      <span>{judge.rating}</span>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <div>No Top Ratting Judges</div>
            )}
          </div>
        </div>

        {/* /////////////////////////////////////////////////////
                bottom footer container with black bg 
            /////////////////////////////////////////////////////
        */}

        <div className="bg-black py-7 text-gray-300">
          {/* limit the width of the layout */}
          <div className="px-[1%] flex flex-col-reverse md:flex-row items-center justify-evenly">
            {/* left-top container */}
            <div className="w-[100%] md:w-[55%]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mb-9  sm:gap-6">
                {/* linkes */}

                {/* first list */}
                <ul>
                  <li className="py-1">
                    <NavLink>Desktop app</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Mobile apps</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Plans</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Security</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Features</NavLink>
                  </li>
                </ul>
                {/* first list */}
                <ul>
                  <li className="py-1">
                    <NavLink>Pricing</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Blogs</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Case Studies</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Compliance</NavLink>
                  </li>
                </ul>
                {/* first list */}
                <ul>
                  <li className="py-1">
                    <NavLink>About</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>FAQs</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Press Release</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Media</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Events</NavLink>
                  </li>
                </ul>
                {/* first list */}
                <ul>
                  <li className="py-1">
                    <NavLink>Developers</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Referals</NavLink>
                  </li>
                  <li className="py-1">
                    <NavLink>Forum</NavLink>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between px-4 my-1 mt-2">
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://th.bing.com/th/id/R.ad3b75b18d747a0d400b7605a1023d3a?rik=AVPHfB7i7hLzJw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fAmerican-Flag-iphone-Background-Images.jpg&ehk=KUdla5Mg0djSGpHuwDYvWDJyzaDkbzx9efBxHWXF0uA%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <span className="font-medium my-1">USA</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://th.bing.com/th/id/R.b96f478b5512b142f25f67b863b8b2fa?rik=gXA08SKqGlmwdA&pid=ImgRaw&r=0"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <span className="font-medium my-1">Russia</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://th.bing.com/th/id/R.c2337b8c0772e5ebedca6970d7e019a2?rik=pLVXoUL2Gfni2Q&pid=ImgRaw&r=0"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <span className="font-medium my-1">China</span>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-center">
                    <img
                      src="https://th.bing.com/th/id/R.464367a25e478ca566d474d9c6472978?rik=7DTIeE%2b3s6WsKw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fsoKObwj.png&ehk=ME2fTlRSKvq3pP2ziKPPtHbgfhP823irznutsqCh6Ag%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <span className="font-medium my-1">Germany</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right-bottom */}
            <div className="w-[100%] md:w-[40%]">
              <div className="bg-pink-800 flex items-center justify-between px-3 py-[.05rem] mb-7">
                <div className="p-2 rounded-full bg-white mr-1">
                  <MdPhoneInTalk className="text-pink-700 text-xl" />
                </div>
                <div className="flex items-center justify-center flex-grow">
                  <h3 className="text-2xl font-semibold my-3">Let's Talk</h3>
                </div>
              </div>
              <div className="mb-9 flex items-center justify-start pl-5">
                {/* icon */}
                <div className="text-3xl text-blue-950 mr-5">
                  <MdOutlineMarkEmailRead />
                </div>
                {/* text */}
                <div className="flex flex-col text-gray-400">
                  <span className="font-medium">Bussiness Inquires</span>
                  <span>sales@company.com</span>
                </div>
              </div>
              <div className="mb-9 flex items-center justify-start pl-5">
                {/* icon */}
                <div className="text-3xl text-blue-950 mr-5">
                  <MdOutlineMediation />
                </div>
                {/* text */}
                <div className="flex flex-col text-gray-400">
                  <span className="font-medium">PR or Media</span>
                  <span>marketing@company.com</span>
                </div>
              </div>
              {/* text-input container */}
              <div className="flex items-center justify-start my-5 pl-5">
                <div className="bg-blue-950 rounded-full flex items-center border border-gray-500 pl-3">
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="focus:outline-none focus:ring-0 bg-transparent border-none focus:border-none rounded-full"
                  />
                  <button className="px-3 bg-pink-800 rounded-full py-1">
                    SIGNUP
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1050px] mx-auto px-1 flex flex-col-reverse screen-5:flex-row items-center justify-between mt-3 mb-1 text-gray-500">
            <div className="flex items-center justify-between">
              <div className="mr-1">2021 copyright</div>
              <NavLink>Terms and Conditions | Privacy Policy</NavLink>
            </div>
            <div className="flex items-center justify-between text-2xl gap-5 my-3">
              <NavLink>
                <FaFacebookF />
              </NavLink>
              <NavLink>
                <FaXTwitter />
              </NavLink>
              <NavLink>
                <FaYoutube />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddisHome;
