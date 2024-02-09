import {
  ArrowForward,
  ArrowForwardIos,
  Email,
  Facebook,
  FamilyRestroom,
  Gavel,
  KeyboardDoubleArrowRight,
  Phone,
  Star,
} from "@mui/icons-material";
import Search from "@mui/icons-material/Search";
import React from "react";
import SidebarItems from "../components/SidebarItems";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-[14px] tracking-widest text-[#1c243c] px-32 w-full h-auto">
      {/* header */}
      <div className="fixed px-20 bg-white top-0 z-20 left-0 flex w-full py-2 items-center justify-between">
        {/* logo */}
        <div className="flex items-center justify-center text-main gap-4">
          <img
            src="./logo1.PNG"
            alt=""
            className="w-12 object-fill object-center h-12 rounded-sm"
          />
        </div>

        {/* menus */}
        <div className="flex items-center justify-center text-[#1c243c] gap-5">
          <div className="relative">
            <div className="flex gap-4 items-center justify-center">
              <p className="">Services</p>
              <ArrowForwardIos sx={{ width: 20, height: 20 }} />
            </div>

            <div className="absolute top-0 left-0 flex flex-col items-center justify-center p-5 rounded-sm bg-white shadow-lg shadow-gray-300">
              <ul>
                <li>Family</li>
                <li>Family</li>
                <li>Family</li>
              </ul>
            </div>
          </div>

          <p className="">Consulting</p>
          <p className="">Researches</p>
          <p className="">About us</p>
          <p className="">Contact us</p>
        </div>

        {/* menus */}
        <div className="flex items-center justify-center text-[#1c243c] gap-4">
          <Link to="/login" className=" px-4 py-2 rounded-sm ">
            Login
          </Link>
          <Link
            to="/signUp"
            className=" px-4 py-2 rounded-sm bg-main text-white"
          >
            Register now{" "}
            <ArrowForward sx={{ width: 16, height: 16 }} className="ml-2" />
          </Link>
        </div>
      </div>

      {/* hero page */}
      <div className="flex  w-full h-[90vh] items-center mt-16">
        <div className="items-start w-full justify-start flex flex-col gap-1">
          <div className="text-main flex items-center gap-1 justify-center">
            <div className="h-[2px] w-5 bg-main"></div>
            <p className="">best firm service</p>
          </div>
          <p className="text-5xl tracking-widest mt-10 font-extrabold">
            Perfect <span className="text-main">solution</span>
          </p>
          <p className="text-5xl mt-2 tracking-widest font-extrabold">
            for every law firm
          </p>

          <p className="medium tracking-widest max-w-[500px] mt-10 ">
            A law firm advises clients of their legal rights, drafts documents,
            and represents clients in legal matters like personal injury
            lawsuits.
          </p>

          <div className="mt-10 flex items-center gap-10 w-full justify-start">
            <button className="title border border-main font-bold px-6 py-3 bg-main text-white rounded-sm">
              Get started{" "}
              <ArrowForward sx={{ width: 16, height: 16 }} className="ml-2" />
            </button>
            <button className="title font-bold px-6 py-3 border border-gray-300 rounded-sm">
              More about us
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center h-full">
          <img src="./judge-2.PNG" alt="" className="w-full h-[80vh]" />
        </div>
      </div>

      {/* impressions */}
      <div className="grid gap-14  items-center justify-center w-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex gap-2 border w-full h-auto text-[#1c243c] bg-white flex-col py-5 px-5 items-start justify-start rounded-lg border-gray-200 shadow-md  shadow-gray-400">
          <p className="text-2xl font-extrabold">+ 2100</p>
          <p className="title font-bold uppercase">Succeed Cases</p>
          <p className="small">
            we have more than 2100 succeed cases with pleasure...
          </p>
          <p className="self-end text-[#eb9604]">
            More <ArrowForward sx={{ width: 16, height: 16 }} />
          </p>
        </div>

        <div className="flex gap-2 border w-full h-auto text-[#1c243c] bg-white flex-col py-5 px-5 items-start justify-start rounded-lg border-gray-200 shadow-md  shadow-gray-400">
          <p className="text-2xl font-extrabold">+ 1500</p>
          <p className="title font-bold uppercase">Active clients</p>
          <p className="small">
            we have more than 2100 succeed cases with pleasure...
          </p>
          <p className="self-end text-[#eb9604]">
            More <ArrowForward sx={{ width: 16, height: 16 }} />
          </p>
        </div>

        <div className="flex gap-2 border w-full h-auto text-[#1c243c] bg-white flex-col py-5 px-5 items-start justify-start rounded-lg border-gray-200 shadow-md  shadow-gray-400">
          <p className="text-2xl font-extrabold">+ 520</p>
          <p className="title font-bold uppercase">Eligible lawyers</p>
          <p className="small">
            we have more than 2100 succeed cases with pleasure...
          </p>
          <p className="self-end text-[#eb9604]">
            More <ArrowForward sx={{ width: 16, height: 16 }} />
          </p>
        </div>

        <div className="flex gap-2 border w-full h-auto text-[#1c243c] bg-white flex-col py-5 px-5 items-start justify-start rounded-lg border-gray-200 shadow-md  shadow-gray-400">
          <p className="text-2xl font-extrabold">+ 200</p>
          <p className="title font-bold uppercase">Foreign customer</p>
          <p className="small">
            we have more than 2100 succeed cases with pleasure...
          </p>
          <p className="self-end text-[#eb9604]">
            More <ArrowForward sx={{ width: 16, height: 16 }} />
          </p>
        </div>
      </div>

      {/* services */}
      <div className="mt-32 gap-3 flex items-center justify-center flex-col">
        <p className="text-white bg-main medium self-start  rounded-full px-2 py-1">
          Why choose us?
        </p>
        <p className="text-2xl self-start font-bold">Our services</p>
        <div className="flex gap-20 relative w-full items-center justify-between">
          <div className="w-full relative flex flex-[50%]">
            <img
              src="./service-1.PNG"
              alt=""
              className="w-full object-scale-down h-[300px]"
            />
          </div>
          <div className="flex flex-col flex-[50%] gap-2 justify-start items-start">
            <div className="w-full flex items-center justify-between">
              <p className="text-xl font-bold">Law firm</p>
              {/* <ArrowForward sx={{ width: 20, height: 20 }} /> */}
            </div>
            <p className="medium font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium deserunt officia iste eveniet minima tempora, earum
              neque consectetur? Hic doloribus illo.
            </p>
            <p className="medium mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium deserunt officia iste eveniet minima tempora, earum
              neque consectetur.
            </p>
            <div className="flex w-full mt-2 items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +200
                </p>
                <p className="medium font-bold mt-1">Categories</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +600
                </p>
                <p className="medium font-bold mt-1">Cases</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +350
                </p>
                <p className="medium font-bold mt-1">Lawyers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +200
                </p>
                <p className="medium font-bold mt-1">Succeed cases</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-12 gap-20 relative w-full items-center justify-between">
          <div className="flex flex-col flex-[50%] gap-2 justify-start items-start">
            <div className="w-full flex items-center justify-between">
              <p className="text-xl font-bold">Consulting</p>
              {/* <ArrowForward sx={{ width: 20, height: 20 }} /> */}
            </div>
            <p className="medium font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium deserunt officia iste eveniet minima tempora, earum
              neque consectetur? Hic doloribus illo.
            </p>
            <p className="medium mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium deserunt officia iste eveniet minima tempora, earum
              neque consectetur.
            </p>
            <div className="flex w-full mt-2 items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +200
                </p>
                <p className="medium font-bold mt-1">Categories</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +600
                </p>
                <p className="medium font-bold mt-1">Cases</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +350
                </p>
                <p className="medium font-bold mt-1">Lawyers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +200
                </p>
                <p className="medium font-bold mt-1">Succeed cases</p>
              </div>
            </div>
          </div>
          <div className="w-full relative flex flex-[50%]">
            <img
              src="./service-1.PNG"
              alt=""
              className="w-full object-scale-down h-[300px]"
            />
          </div>
        </div>

        <div className="flex mt-12 gap-20 relative w-full items-center justify-between">
          <div className="w-full relative flex flex-[50%]">
            <img
              src="./service-1.PNG"
              alt=""
              className="w-full object-scale-down h-[300px]"
            />
          </div>
          <div className="flex flex-col flex-[50%] gap-2 justify-start items-start">
            <div className="w-full flex items-center justify-between">
              <p className="text-xl font-bold">Researches</p>
              {/* <ArrowForward sx={{ width: 20, height: 20 }} /> */}
            </div>
            <p className="medium font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium deserunt officia iste eveniet minima tempora, earum
              neque consectetur? Hic doloribus illo.
            </p>
            <p className="medium mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium deserunt officia iste eveniet minima tempora, earum
              neque consectetur.
            </p>
            <div className="flex w-full mt-2 items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +200
                </p>
                <p className="medium font-bold mt-1">Categories</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +600
                </p>
                <p className="medium font-bold mt-1">Cases</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +350
                </p>
                <p className="medium font-bold mt-1">Lawyers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +200
                </p>
                <p className="medium font-bold mt-1">Succeed cases</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-12 gap-20 relative w-full items-center justify-between">
          <div className="flex flex-col flex-[50%] gap-2 justify-start items-start">
            <div className="w-full flex items-center justify-between">
              <p className="text-xl font-bold">Tutorial</p>
              {/* <ArrowForward sx={{ width: 20, height: 20 }} /> */}
            </div>
            <p className="medium font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium deserunt officia iste eveniet minima tempora, earum
              neque consectetur? Hic doloribus illo.
            </p>
            <p className="medium mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              praesentium deserunt officia iste eveniet minima tempora, earum
              neque consectetur.
            </p>
            <div className="flex w-full mt-2 items-center justify-between">
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +200
                </p>
                <p className="medium font-bold mt-1">Categories</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +600
                </p>
                <p className="medium font-bold mt-1">Cases</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +350
                </p>
                <p className="medium font-bold mt-1">Lawyers</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="h-14 w-14 rounded-full border border-main p-2 flex flex-col items-center justify-center">
                  +200
                </p>
                <p className="medium font-bold mt-1">Succeed cases</p>
              </div>
            </div>
          </div>
          <div className="w-full relative flex flex-[50%]">
            <img
              src="./service-1.PNG"
              alt=""
              className="w-full object-scale-down h-[300px]"
            />
          </div>
        </div>
      </div>

      {/* lawyers */}
      <div className="mt-24 flex w-full gap-3 items-start justify-start flex-col">
        <p className="text-white bg-main medium self-start  rounded-full px-2 py-1">
          Our lawyers
        </p>
        <p className="text-2xl self-start font-bold">Our top rated lawyers</p>
        <div className="grid gap-14 items-center justify-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5s mt-4">
          <div className="flex text-[13px] text-lg border w-full h-auto text-[#1c243c] bg-white flex-col py-5 px-5 items-start justify-start rounded-lg border-gray-200 shadow-md  shadow-gray-400">
            <div className="flex items-center gap-2 justify-center">
              <img
                src="./gedi.jpg"
                alt=""
                className="w-12 h-12 rounded-full border border-main"
              />
              <div className="flex medium flex-col">
                <p className="">Gedeon agmas</p>
                <p className="text-gray-500 -mt-2">Masters in law</p>
              </div>
            </div>
            <p className=" text-[16px] mt-2 font-bold">Family case expert</p>
            <div className="text-xs font-normal mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              porro officiis.
            </div>

            <p className=" text-[16px] mt-2 text-gray-500">520 total review</p>
            <div className=" flex items-center justify-center font-bold">
              <Star className="text-main" />
              <Star className="text-main" />
              <Star className="text-main" />
              <Star className="text-main" />
              <p className="text-[16px] text-gray-500 ml-4">4.5/5</p>
            </div>

            <div className="flex gap-4 mt-4 items-center justify-start">
              <Facebook />
              <Email />
              <Phone />
            </div>
          </div>

          <div className="flex text-[13px] text-lg border w-full h-auto text-[#1c243c] bg-white flex-col py-5 px-5 items-start justify-start rounded-lg border-gray-200 shadow-md  shadow-gray-400">
            <div className="flex items-center gap-2 justify-center">
              <img
                src="./gedi.jpg"
                alt=""
                className="w-12 h-12 rounded-full border border-main"
              />
              <div className="flex medium flex-col">
                <p className="">Gedeon agmas</p>
                <p className="text-gray-500 -mt-2">Masters in law</p>
              </div>
            </div>
            <p className=" text-[16px] mt-2 font-bold">Family case expert</p>
            <div className="text-xs font-normal mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              porro officiis.
            </div>

            <p className=" text-[16px] mt-2 text-gray-500">520 total review</p>
            <div className=" flex items-center justify-center font-bold">
              <Star className="text-main" />
              <Star className="text-main" />
              <Star className="text-main" />
              <Star className="text-main" />
              <p className="text-[16px] text-gray-500 ml-4">4.5/5</p>
            </div>

            <div className="flex gap-4 mt-4 items-center justify-start">
              <Facebook />
              <Email />
              <Phone />
            </div>
          </div>

          <div className="flex text-[13px] text-lg border w-full h-auto text-[#1c243c] bg-white flex-col py-5 px-5 items-start justify-start rounded-lg border-gray-200 shadow-md  shadow-gray-400">
            <div className="flex items-center gap-2 justify-center">
              <img
                src="./gedi.jpg"
                alt=""
                className="w-12 h-12 rounded-full border border-main"
              />
              <div className="flex medium flex-col">
                <p className="">Gedeon agmas</p>
                <p className="text-gray-500 -mt-2">Masters in law</p>
              </div>
            </div>
            <p className=" text-[16px] mt-2 font-bold">Family case expert</p>
            <div className="text-xs font-normal mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              porro officiis.
            </div>

            <p className=" text-[16px] mt-2 text-gray-500">520 total review</p>
            <div className=" flex items-center justify-center font-bold">
              <Star className="text-main" />
              <Star className="text-main" />
              <Star className="text-main" />
              <Star className="text-main" />
              <p className="text-[16px] text-gray-500 ml-4">4.5/5</p>
            </div>

            <div className="flex gap-4 mt-4 items-center justify-start">
              <Facebook />
              <Email />
              <Phone />
            </div>
          </div>

          <div className="flex text-[13px] text-lg border w-full h-auto text-[#1c243c] bg-white flex-col py-5 px-5 items-start justify-start rounded-lg border-gray-200 shadow-md  shadow-gray-400">
            <div className="flex items-center gap-2 justify-center">
              <img
                src="./gedi.jpg"
                alt=""
                className="w-12 h-12 rounded-full border border-main"
              />
              <div className="flex medium flex-col">
                <p className="">Gedeon agmas</p>
                <p className="text-gray-500 -mt-2">Masters in law</p>
              </div>
            </div>
            <p className=" text-[16px] mt-2 font-bold">Family case expert</p>
            <div className="text-xs font-normal mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              porro officiis.
            </div>

            <p className=" text-[16px] mt-2 text-gray-500">520 total review</p>
            <div className=" flex items-center justify-center font-bold">
              <Star className="text-main" />
              <Star className="text-main" />
              <Star className="text-main" />
              <Star className="text-main" />
              <p className="text-[16px] text-gray-500 ml-4">4.5/5</p>
            </div>

            <div className="flex gap-4 mt-4 items-center justify-start">
              <Facebook />
              <Email />
              <Phone />
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-32 flex w-full gap-3 items-start justify-start flex-col">
        <p className="text-white bg-main medium self-start  rounded-full px-2 py-1">
          Our categories
        </p>
        <p className="text-2xl self-start font-bold">
          Our most demand categories
        </p>
        <div className="grid gap-14 items-center justify-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5s mt-4">
          <div className="flex flex-col gap-2  px-4 py-2 items-center justify-center w-full h-[200px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <div className="flex items-center justify-center p-2 rounded-full bg-red-200 text-red-500">
              <FamilyRestroom sx={{ width: 56, height: 56 }} />
            </div>
            <p className="title font-bold">Family</p>
            <p className="medium">32 cases</p>
          </div>

          <div className="flex flex-col gap-2  px-4 py-2 items-center justify-center w-full h-[200px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <div className="flex items-center justify-center p-2 rounded-full bg-blue-200 text-blue-500">
              <FamilyRestroom sx={{ width: 56, height: 56 }} />
            </div>
            <p className="title font-bold">Family</p>
            <p className="medium">32 cases</p>
          </div>

          <div className="flex flex-col gap-2  px-4 py-2 items-center justify-center w-full h-[200px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <div className="flex items-center justify-center p-2 rounded-full bg-yellow-200 text-yellow-500">
              <FamilyRestroom sx={{ width: 56, height: 56 }} />
            </div>
            <p className="title font-bold">Family</p>
            <p className="medium">32 cases</p>
          </div>

          <div className="flex flex-col gap-2  px-4 py-2 items-center justify-center w-full h-[200px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <div className="flex items-center justify-center p-2 rounded-full bg-green-200 text-green-500">
              <FamilyRestroom sx={{ width: 56, height: 56 }} />
            </div>
            <p className="title font-bold">Family</p>
            <p className="medium">32 cases</p>
          </div>
        </div>
      </div>

      {/* Cases */}
      <div className="mt-32 flex w-full gap-3 items-start justify-start flex-col">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-white bg-main medium self-start  rounded-full px-2 py-1">
              Our cases
            </p>
            <p className="text-2xl self-start font-bold">Our popular cases</p>
          </div>
          <p className="text-black bg-[#eecc6e] medium self-start  rounded-full px-2 py-1">
            view all cases
          </p>
        </div>

        <div className="grid gap-14 items-center justify-center w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5s mt-4">
          <div className="flex flex-col relative px-4 py-2 items-start justify-start w-full h-[260px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <img
              src="./judge-2.PNG"
              alt=""
              className="w-full h-[50%] object-fill object-center"
            />
            <div className="absolute bg-gray-100 top-2 left-0 bg-transparent px-2 flex justify-between w-full text-[10px] items-center z-10">
              <p className="title">Divorce</p>
              <p className="">Family</p>
            </div>
            <p className="mt-2 font-bold">This case is perfect for divorce</p>
            <p className="mt-2 ">$250(72,500 birr)</p>
            <div className="flex mt-2 w-full items-center justify-between">
              <p className="text-[10px] ">120 customers had win</p>{" "}
              <ArrowForward sx={{ width: 20, height: 20 }} />
            </div>
          </div>

          <div className="flex flex-col gap-2  px-4 py-2 items-center justify-center w-full h-[200px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <div className="flex items-center justify-center p-2 rounded-full bg-red-200 text-red-500">
              <FamilyRestroom sx={{ width: 56, height: 56 }} />
            </div>
            <p className="title font-bold">Family</p>
            <p className="medium">32 cases</p>
          </div>

          <div className="flex flex-col gap-2  px-4 py-2 items-center justify-center w-full h-[200px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <div className="flex items-center justify-center p-2 rounded-full bg-red-200 text-red-500">
              <FamilyRestroom sx={{ width: 56, height: 56 }} />
            </div>
            <p className="title font-bold">Family</p>
            <p className="medium">32 cases</p>
          </div>

          <div className="flex flex-col gap-2  px-4 py-2 items-center justify-center w-full h-[200px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <div className="flex items-center justify-center p-2 rounded-full bg-red-200 text-red-500">
              <FamilyRestroom sx={{ width: 56, height: 56 }} />
            </div>
            <p className="title font-bold">Family</p>
            <p className="medium">32 cases</p>
          </div>

          <div className="flex flex-col gap-2  px-4 py-2 items-center justify-center w-full h-[200px] rounded-lg border border-gray-200 shadow-sm shadow-gray-300">
            <div className="flex items-center justify-center p-2 rounded-full bg-red-200 text-red-500">
              <FamilyRestroom sx={{ width: 56, height: 56 }} />
            </div>
            <p className="title font-bold">Family</p>
            <p className="medium">32 cases</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
