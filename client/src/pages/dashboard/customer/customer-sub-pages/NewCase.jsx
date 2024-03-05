import { useState } from "react";
import { NavLink } from "react-router-dom";
// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineShareLocation } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
// main
// NewCase
const NewCase = () => {
  // local states
  const [isAllTypeOpen, setIsAllTypeOpen] = useState(false);
  const [allTypeHeaderText, setAllTypeHeaderText] = useState("All Types");
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [allCityHeaderText, setAllCityHeaderText] = useState("All Cities");
  const [isAge, setIsAge] = useState(false);
  const [ageHeaderText, setAgeHeaderText] = useState("35+");
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [genderHeaderText, setGenderHeaderText] = useState("All");

  // handle all type
  const handleAllTypeSelection = (text) => {
    // filtere here
    setAllTypeHeaderText(text);
  };
  // handle all type
  const handleCitySelection = (text) => {
    // filtere here
    setAllCityHeaderText(text);
  };
  // handle all type
  const handleAgeSelection = (text) => {
    // filtere here
    setAgeHeaderText(text);
  };
  // handle all type
  const handleGenderSelection = (text) => {
    // filtere here
    setGenderHeaderText(text);
  };

  return (
    <div className="bg-gray-100 h-full">
      <header className="h-[130px] bg-sky-100">header</header>
      {/* content */}
      <div className="bg-white m-2 rounded-sm">
        <header className="flex items-center justify-between gap-3 py-2 px-[5%] border-b border-gray-200 rounded-sm">
          {/* all type */}
          <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
            <span className="text-gray-500">Type of counceling</span>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{allTypeHeaderText}</h3>
              <button
                className="text-lg"
                onClick={() => {
                  setIsAllTypeOpen(!isAllTypeOpen);
                }}
              >
                {isAllTypeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {isAllTypeOpen ? (
              <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                <ul>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsAllTypeOpen(false);
                      handleAllTypeSelection("All Types");
                    }}
                  >
                    <NavLink>All Types</NavLink>
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsAllTypeOpen(false);
                      handleAllTypeSelection("Option One");
                    }}
                  >
                    <NavLink>Option One</NavLink>
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsAllTypeOpen(false);
                      handleAllTypeSelection("Option Two");
                    }}
                  >
                    <NavLink>Option Two</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* cities */}
          <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
            <span className="text-gray-500">City</span>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{allCityHeaderText}</h3>
              <button
                className="text-lg"
                onClick={() => {
                  setIsCityOpen(!isCityOpen);
                }}
              >
                {isCityOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {isCityOpen ? (
              <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                <ul>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsCityOpen(false);
                      handleCitySelection("All Cities");
                    }}
                  >
                    <NavLink>All Cities</NavLink>
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsCityOpen(false);
                      handleCitySelection("City One");
                    }}
                  >
                    <NavLink>City One</NavLink>
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsCityOpen(false);
                      handleCitySelection("City Two");
                    }}
                  >
                    <NavLink>City Two</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* age */}
          <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
            <span className="text-gray-500">Age</span>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{ageHeaderText}</h3>
              <button
                className="text-lg"
                onClick={() => {
                  setIsAge(!isAge);
                }}
              >
                {isAge ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {isAge ? (
              <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                <ul>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsAge(false);
                      handleAgeSelection("35+");
                    }}
                  >
                    <NavLink>35+</NavLink>
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsAge(false);
                      handleAgeSelection("25+");
                    }}
                  >
                    <NavLink>25+</NavLink>
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsAge(false);
                      handleAgeSelection("45+");
                    }}
                  >
                    <NavLink>45+</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* gender */}
          <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
            <span className="text-gray-500">Gender</span>
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{genderHeaderText}</h3>
              <button
                className="text-lg"
                onClick={() => {
                  setIsGenderOpen(!isGenderOpen);
                }}
              >
                {isGenderOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </button>
            </div>
            {isGenderOpen ? (
              <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                <ul>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsGenderOpen(false);
                      handleGenderSelection("All");
                    }}
                  >
                    <NavLink>All</NavLink>
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsGenderOpen(false);
                      handleGenderSelection("Male");
                    }}
                  >
                    <NavLink>Male</NavLink>
                  </li>
                  <li
                    className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                    onClick={(e) => {
                      setIsGenderOpen(false);
                      handleGenderSelection("Female");
                    }}
                  >
                    <NavLink>Female</NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
        </header>
        {/* 
        ///////////////////////////////////////////
        content 
        //////////////////////////////////////////
        */}

        <div className="bg-gray-100 h-[52vh] overflow-y-auto p-2 grid grid-cols-3 gap-3">
          {/* cards */}
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-3 h-max">
            {/* profile */}
            <div className="flex items-center justify-center gap-x-3 my-2">
              {/* image */}
              <div>
                <img
                  src="https://th.bing.com/th/id/R.b37449e1b72e11ff5dd8107308207fd3?rik=vb9G3NWALO1Hdw&pid=ImgRaw&r=0"
                  alt=""
                  className="w-[32] h-[32px] rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Haddis Fanta</span>
                <span className="text-gray-500">web developer</span>
              </div>
            </div>
            {/* rating and address */}
            <div className="flex items-center justify-center gap-x-3">
              {/* rating btn */}
              <button className="px-3 py-[.13rem] rounded-full text-gray-100 bg-emerald-500 flex items-center justify-between">
                <FaStar className="mr-1 text-lg" /> 4.5
              </button>
              {/* address */}
              <div className="flex items-center text-gray-500">
                <MdOutlineShareLocation className="text-xl mr-1" />
                <span>A.A,Ethiopia</span>
              </div>
            </div>
            {/* expereience */}
            <div className="flex flex-col items-center text-gray-500 my-3">
              <span>4 years of experience</span>
              <span>400+ consultaions</span>
            </div>
            {/* btn container */}
            <div className="flex items-center justify-center gap-x-3">
              <div>
                <h3 className="font-semibold">$50/h</h3>
                <span className="text-gray-500">Online</span>
              </div>
              <button className="px-5 py-2 rounded-full bg-blue-600 text-white">
                Book Consultaion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCase;
