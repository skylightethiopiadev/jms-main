import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";

import Slider from "react-slick";

// icons
import {
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
  IoMdRepeat
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
import { MdFamilyRestroom } from "react-icons/md";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { FaGun } from "react-icons/fa6";
import { PiBriefcaseMetal } from "react-icons/pi";
import { MdNextPlan } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { GrShieldSecurity } from "react-icons/gr";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { RiBankLine } from "react-icons/ri";
import { AiFillPropertySafety } from "react-icons/ai";
import { FaScaleBalanced } from "react-icons/fa6";
import { MdInsertLink } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { PiVanLight } from "react-icons/pi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FaBuilding } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineElderlyWoman } from "react-icons/md";
import { RiContactsBookLine } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineGlobal } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";
import { FaGlobeAfrica } from "react-icons/fa";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const HomeIndex = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // local states
  const [isOtherService, setIsOtherService] = useState(false);
  // local date
  const ourServices = [
    "Advise on investment including merger and acquisition",
    "Advise on capital market",
    "Advise on bankruptcy and financial frameworks",
    "Advise on syndicated loan or finance",
    "Advise on project finance",
    "Advise on secured lending, sovereign loans and debt restructuring"
  ];
  const ourServicesTwo = [
    "IP due diligence ",
    "Technology transactions",
    "Strategic IP counselling",
    "Trademark, copyright and patent registration and renewal",
    "Represent clients before tribunal all the way to the Federal Supreme Court"
  ];

  // lawyers
  const ourLawyers = [
    {
      first_name: "Betlhem",
      middle_name: "Melese",
      last_name: "Eshetu",
      profession: "Lawyer",
      profile_path: "/images/lawyers/betlhem.jpg"
    },
    {
      first_name: "Shoangizaw",
      middle_name: "Fanta",
      last_name: "Gebreyesus",
      profession: "Lawyer",
      profile_path: "/images/lawyers/lawyer-one.jpg"
    },
    {
      first_name: "Rodas",
      middle_name: "Girma",
      last_name: "W/Gebreal",
      profession: "Lawyer",
      profile_path: "/images/lawyers/rodas.jpg"
    },
    {
      first_name: "Gedeon",
      middle_name: "Agmas",
      last_name: "W/Gebreal",
      profession: "Lawyer",
      profile_path: "/images/lawyers/lawyer-two.jpg"
    },
    {
      first_name: "Andualem",
      middle_name: "Chane",
      last_name: "W/Gebreal",
      profession: "Lawyer",
      profile_path: "/images/lawyers/lawyer-three.jpg"
    },
    {
      first_name: "Betlhem",
      middle_name: "Melese",
      last_name: "Eshetu",
      profession: "Lawyer",
      profile_path: "/images/lawyers/betlhem.jpg"
    },
    {
      first_name: "Haddis",
      middle_name: "Fanta",
      last_name: "Shiferaw",
      profession: "Lawyer",
      profile_path: "/images/lawyers/lawyer-one.jpg"
    },
    {
      first_name: "Rodas",
      middle_name: "Girma",
      last_name: "W/Gebreal",
      profession: "Lawyer",
      profile_path: "/images/lawyers/rodas.jpg"
    },
    {
      first_name: "Gedeon",
      middle_name: "Agmas",
      last_name: "W/Gebreal",
      profession: "Lawyer",
      profile_path: "/images/lawyers/lawyer-two.jpg"
    },
    {
      first_name: "Andualem",
      middle_name: "Chane",
      last_name: "W/Gebreal",
      profession: "Lawyer",
      profile_path: "/images/lawyers/lawyer-three.jpg"
    }
  ];
  // case categories
  const caseTypes = [
    // business
    {
      icon: FaBusinessTime,
      title: "Business",
      subList: [
        {
          text: "Corporate",
          path: "#"
        },
        {
          text: "Contracts",
          path: "#"
        },
        {
          text: "Tax Issues",
          path: "#"
        },
      ]
    },
    // real estate
    {
      icon: MdOutlineRealEstateAgent,
      title: "Real Estate",
      subList: [
        {
          text: "Development",
          path: "#"
        },
        {
          text: "Sales and Rental",
          path: "#"
        },
        {
          text: "Landlord and Tenant",
          path: "#"
        },
        {
          text: "Agreements",
          path: "#"
        },
      ]
    },
    // mining and energy
    {
      icon: GrShieldSecurity,
      title: "Mining & Energy",
      subList: [
        {
          text: "Mining",
          path: "#"
        },
        {
          text: "Energy",
          path: "#"
        },
        {
          text: "Gas and Oil",
          path: "#"
        },
      ]
    },

    // construction
    {
      icon: PiBriefcaseMetal,
      title: "Construction",
      subList: [
        {
          text: "Development",
          path: "#"
        },
        {
          text: "Building",
          path: "#"
        },
        {
          text: "Contracts",
          path: "#"
        },
        {
          text: "Agreements",
          path: "#"
        },
      ]
    },

    // employment
    {
      icon: PiBriefcaseMetal,
      title: "Employment",
      subList: [
        {
          text: "Contracts",
          path: "#"
        },
        {
          text: "Discrimination",
          path: "#"
        },
        {
          text: "Compensation",
          path: "#"
        },
        {
          text: "Wrongful Termination",
          path: "#"
        }
      ]
    },

    // immigration
    {
      icon: FaPersonWalkingLuggage,
      title: "Immigration",
      subList: [
        {
          text: "Citizenship",
          path: "#"
        },
        {
          text: "Employment Visa ",
          path: "#"
        },
        {
          text: "Investment Permit",
          path: "#"
        }
      ]
    },

    // intellectual property
    {
      icon: AiFillPropertySafety,
      title: "Intellectual Property",
      subList: [
        {
          text: "Patents",
          path: "#"
        },
        {
          text: "Copyright",
          path: "#"
        },
        {
          text: "Trademark",
          path: "#"
        },
      ]
    },

    // estate planning
    {
      icon: MdNextPlan,
      title: "Estate Planning",
      subList: [
        {
          text: "Probate",
          path: "#"
        },
        {
          text: "Trusts",
          path: "#"
        },
        {
          text: "Wills",
          path: "#"
        },
      ]
    },
    
    // family
    {
      icon: MdFamilyRestroom,
      title: "Family",
      subList: [
        {
          text: "Divorce",
          path: "#"
        },
        {
          text: "Child Custody",
          path: "#"
        },
        {
          text: "Child Support",
          path: "#"
        }
      ]
    },
    // personal injury
    {
      icon: MdOutlinePersonalInjury,
      title: "Personal Injury",
      subList: [
        {
          text: "Car Accident",
          path: "#"
        },
        {
          text: "Medical Malpractice",
          path: "#"
        },
        {
          text: "Wrongful Death",
          path: "#"
        }
      ]
    },
    // criminal defense
    {
      icon: FaGun,
      title: "Criminal Defense",
      subList: [
        {
          text: "DUI and DWI",
          path: "#"
        },
        {
          text: "Traffic Violations",
          path: "#"
        },
        {
          text: "Domestic Violence",
          path: "#"
        }
      ]
    },
    
    
    // bankruptcy
    {
      icon: RiBankLine,
      title: "Bankruptcy",
      subList: [
        {
          text: "Foreclosures",
          path: "#"
        },
        {
          text: "Personal",
          path: "#"
        },
        {
          text: "Business",
          path: "#"
        },
      ]
    },
    
  ];
  // legal articles
  const legalArticles = [
    // business
    {
      icon: GrUserManager,
      title: "Business & Corporate",
      path: "#"
    },

    // employment
    {
      icon: MdEngineering,
      title: "Employment & Labor",
      path: "#"
    },
    // construction

    {
      icon: MdOutlineRealEstateAgent,
      title: "Construction",
      path: "#"
    },

    

    // mining
    {
      icon: MdOutlineRealEstateAgent,
      title: "Mining & Energy",
      path: "#"
    },

    // real state
    {
      icon: MdOutlineRealEstateAgent,
      title: "Real Estate",
      path: "#"
    },

    // family
    {
      icon: FaPeopleGroup,
      title: "Family Law",
      path: "#"
    },
    // criminal defense
    {
      icon: AiOutlineFileSearch,
      title: "Criminal Defense",
      path: "#"
    },

    // personal injury

    {
      icon: PiVanLight,
      title: "Personal Injury",
      path: "#"
    },
    
    
    
  ];
  // business lawyers
  const businessLawyers = [
    "/images/personnels/lawyer-two.jpg",
    "/images/lawyers/betlhem.jpg",
    "/images/lawyers/lawyer-two.jpg",
    "/images/lawyers/rodas.jpg"
  ];

  return (
    <>
      {/* first order container */}
      <div className="w-full px-[3%] text-[1.25rem] text-black pt-[3%] sm:pt-[0%] sm:px-[12%] bg-gradient-to-r from-white to-orange-50 sm:pb-[100px] relative shadow-md">
        <div className="relative z-20 w-full h-full sm:py-[1%] md:pb-[5%] flex flex-col-reverse sm:flex-row sm:items-end justify-between gap-[3%]">
          {/* top left */}
          <div className="w-full mt-12 sm:mt-3  sm:w-[45%]">
            {/* first button */}
            <div className="sm:mt-10">
              <button className="px-[7%] py-1 border border-sky-100 bg-sky-50 rounded-full self-center font-semibold uppercase text-[1.3rem]">
                Safeguard, Hope, <span className="lowercase">and</span> Promise
              </button>
            </div>
            {/* bold paragraph */}
            <div className="my-5">
              <p className="text-[1.23rem] track md:text-[2.875rem] leading-7 md:leading-[50px] font-[700] my-[1%]">
                Professional Legal Service in Ethiopia
              </p>
            </div>
            {/* normal paragraph */}
            <div>
              <p className="my-[5%] normal-text">
                Get qualified and efficient legal help from lawyers who are the
                highest professionals in their field, in every area of law. We
                have you covered.
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
                  <div className="relative flex items-center justify-center py-2">
                    <div className="absolute w-[75%] h-[2px] bg-yellow-500 flex items-center justify-center">
                      <div className="absolute w-[50%] h-[7px] rounded-full bg-inherit"></div>
                    </div>
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
                  <div className="relative flex items-center justify-center py-2">
                    <div className="absolute w-[75%] h-[2px] bg-yellow-500 flex items-center justify-center">
                      <div className="absolute w-[50%] h-[7px] rounded-full bg-inherit"></div>
                    </div>
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
                {/* here other stuff */}
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

      {/* post-first order container */}
      <div className="w-full flex items-center px-[3%] text-[1.25rem] text-black  sm:px-[12%]  py-12 relative mt-[-150px]">
        <div className="relative z-20 w-full h-full sm:py-[1%]">
          {/* left icon */}
          <div className="absolute left-[-50px] top-1/2 -translate-y-1/2">
            <div>
              <div
                className="w-[32px] cursor-pointer aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-200 text-3xl text-gray-500 transition-colors ease-in-out duration-150 hover:bg-gray-300 hover:text-gray-900"
                onClick={previous}
              >
                <MdOutlineKeyboardArrowLeft />
              </div>
            </div>
          </div>
          {/* right icon */}
          <div className="absolute right-[-50px] top-1/2 -translate-y-1/2">
            <div>
              <div
                className="w-[32px] cursor-pointer aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-200 text-3xl text-gray-500 transition-colors ease-in-out duration-150 hover:bg-gray-300 hover:text-gray-900"
                onClick={next}
              >
                <MdOutlineKeyboardArrowLeft className="rotate-180" />
              </div>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-md">
            <Slider
              ref={slider => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {ourLawyers?.map((item, index) => {
                return (
                  <div>
                    <div className="flex flex-col items-center py-5">
                      {/* image */}
                      <div>
                        <div className="w-[80px] aspect-square rounded-full overflow-hidden">
                          <img
                            className="w-full h-full object-center object-cover"
                            src={item?.profile_path}
                            alt=""
                          />
                        </div>
                      </div>
                      {/* name */}
                      <div className="flex flex-coll justify-center items-center gap-1">
                        {item?.first_name.length + item?.first_name.length >
                        18 ? (
                          <>
                            <div className="font-bold text-[.83rem] ">
                              <span>{item?.first_name}</span>
                            </div>
                            <div className="font-bold text-[.83rem]  mlt-[-10px]">
                              <span>{item?.last_name[0]}.</span>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="font-bold text-[.83rem] ">
                              <span>{item?.first_name}</span>
                            </div>
                            <div className="font-bold text-[.83rem]  mlt-[-10px]">
                              <span>{item?.last_name}</span>
                            </div>
                          </>
                        )}
                      </div>
                      {/* profession */}
                      <div className="text-sm text-gray-700">
                        <span>{item?.profession}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className="px-[3%] sm:px-[12%] py-[5%]">
        <div className="w-full flex items-center gap-0">
          {/* text container */}
          <div className="w-[100%] lg:w-[50%] border-b-[7px] pb-[2%] border-black">
            <div className="my-3">
              <h2 className="header-level-2">Why Choose Us?</h2>
            </div>
            {/* sub texts */}
            <div className="mb-7">
              <div className="my-2">
                <h3 className="header-level-3">Network</h3>
              </div>
              <div className="normal-text">
                <p>
                  Our Network of experienced lawyers number in the hundreds
                  throughout Africa and the world, ensuring your legal needs are
                  met where you are.
                </p>
              </div>
            </div>

            <div className="mb-7">
              <div className="my-2">
                <h3 className="header-level-3">Professionalism</h3>
              </div>
              <div className="normal-text">
                <p>
                  Our teams of lawyers have superior local and international
                  experience to meet your needs.
                </p>
              </div>
            </div>

            <div>
              <div className="my-2">
                <h3 className="header-level-3">Client-Centered Focus</h3>
              </div>
              <div className="normal-text">
                <p>
                  Your satisfaction is our top priority, and we strive to go
                  above and beyond your expectations to deliver superlative
                  legal services.
                </p>
              </div>
            </div>
          </div>
          {/* image container */}
          <div className="w-[50%] hidden h-full lg:flex items-center justify-center">
            {/* image container */}
            <div className="flex items-center justify-center">
              <div>
                <img src="/LAW.jpg" alt="" />
                {/* <img src="/images/bg/site-image.jpg" alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third order container */}
      <div className="px-[3%] sm:px-[12%] py-[5%]">
        {/* first container for bold text */}
        <div className="flex items-center justify-center text-[1.5rem] sm:text-[1.85rem] lg:text-[2.5rem] font-bold text-center px-[15%]">
          <p>Comprehensive Legal Assistance For Every Need</p>
        </div>
        {/* second container */}
        <div className="flex flex-col lg:flex-row items-end mt-10">
          {/* left */}
          <div className="w-[100%] lg:w-[50%] relative flex">
            {/* image container */}
            <div className="w-full h-full overflow-hidden">
              <img
                className="h-full w-full object-center object-cover"
                src="https://www.austinchronicle.com/binary/fa07/pols_feature27.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 right-0 bg-white w-[250px] h-[150px] shadow-xl p-5">
              <div className="my-3">
                <GoLightBulb className="text-[2.5rem]" />
              </div>
              <div className="font-semibold text-[.875rem] ">
                <p>We will make your business dreams reality.</p>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-[100%] lg:w-[50%] p-5  md:p-10 pb-0">
            {/* bold paragraph */}
            <div className="mb-1">
              <h2 className="header-level-2">For Your Business</h2>
            </div>
            {/* normal paragraph */}
            <div className="normal-text">
              <p>
                Whether you need to establish a company, apply for licenses and
                permits, or obtain a tax ID, we will help set your business up
                for success.
              </p>
            </div>
            {/* first button */}
            <div className="my-7">
              <button className="rounded-full px-12 py-[.5rem] bg-yellow-500 text-[1.15rem] font-semibold text-white transition-all ease-in-out duration-150 hover:bg-yellow-400 capitalize">
                start my business
              </button>
            </div>
            {/* second buttons */}
            <div className="flex items-center gap-5 text-[1.05rem] font-semibold mb-3">
              <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                PLC
              </button>
              <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                Share Company
              </button>
            </div>
            {/* third buttons */}
            <div className="flex items-center gap-5 text-[1.05rem] font-semibold mt-5">
              <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                NGO
              </button>
              <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                Get Legal Help
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* banner container */}
      <div className="h-[350px] flex bg-yellow-400 relative">
        {/* left */}
        <div className="w-[60%] flex-grow bg-white [clip-path:polygon(-1%_-1%,100%_-1%,75%_85%,0%_85%)] flex flex-col">
          <div className="h-[50%] w-full bg-white flex-grow"></div>
          <div className="h-[50%] w-full flex-grow bg-yellow-300 [clip-path:polygon(0%_60%,70%_60%,78%_0%,100%_0%,100%_100%,0%_100%)]"></div>
        </div>
        {/* right */}
        <div className="w-[40%] flex-grow bg-black flex relative [clip-path:polygon(33%_15%,100%_15%,101%_101%,0%_101%)] ml-[-10%]">
          <div className="w-full h-full overflow-hidden">
            <img
              className="w-full h-full object-center object-cover opacity-55"
              src="https://www.shutterstock.com/image-photo/statue-justice-symbol-legal-law-600nw-681265648.jpg"
              alt=""
            />
          </div>
          <div className="absolute left-0 top-0 w-full h-full z-10 bg-yellow-400 opacity-15 [clip-path:polygon(0%_0%,100%_0%,100%_25%,45%_25%,15%_100%,0%_100%)]"></div>
        </div>
        <div className="absolute z-30 left-0 top-0 w-full h-full px-[3%] sm:px-[12%] py-[1%] flex">
          {/* left */}
          <div className="w-[100%] lg:w-[65%] flex-grow">
            <div>
              <h2 className="header-level-2">
                <span className="text-blue-900">Makuta</span> Call Center
              </h2>
            </div>
            <div className="normal-text my-2 font-medium w-[100%] lg:w-[75%]">
              <p>
                If any legal or technical difficulties, please contact the call
                center
              </p>
            </div>
            <div className="flex items-center gap-5 mt-3">
              <div className="flex flex-col items-center justify-center">
                <div>
                  <div className="aspect-square p-2 rounded-full bg-yellow-400 text-white text-xl">
                    <LuPhoneCall />
                  </div>
                </div>
                <div className="my-1 font-bold normal-text">
                  <span>Local Call Center</span>
                </div>
                <div className="font-bold text-blue-900 text-2xl">
                  <span>8383</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div>
                  <div className="aspect-square p-1 rounded-full bg-yellow-400 text-white text-3xl">
                    <FaGlobeAfrica />
                  </div>
                </div>
                <div className="my-1 font-bold normal-text">
                  <span>International Call Center</span>
                </div>
                <div className="font-bold text-blue-900 text-2xl">
                  <span>(+251) 985 228 888</span>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-[0%] lg:w-[35%] lg:flex-grow"></div>
        </div>
      </div>

      {/* fourth order container */}
      <div className="px-[3%] sm:px-[12%] py-[3%]">
        {/* content container container */}
        <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row items-end">
          {/* left */}
          <div className="w-[100%] lg:w-[50%] p-5  md:p-10 pb-0">
            {/* bold paragraph */}
            <div className="mb-4">
              <h2 className="header-level-2 whitespace-nowrap">
                Mining, Energy, Gas and Oil
              </h2>
            </div>
            {/* normal paragraph */}
            <div className="normal-text">
              <p>
                From wills to powers of attorney, the right estate planning
                documents can safeguard you and your loved ones—both now, and
                later.
              </p>
            </div>
            {/* first button */}
            <div className="my-7">
              <button className="rounded-full px-12 py-[.5rem] bg-yellow-500 text-[1.15rem] font-semibold text-white transition-all ease-in-out duration-150 hover:bg-yellow-400">
                start my Estate Plan
              </button>
            </div>
            {/* second buttons */}
            <div className="flex items-center gap-5 text-[1.05rem] font-semibold mb-3">
              <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                Last will
              </button>
              <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                Living trust
              </button>
            </div>
            {/* third buttons */}
            <div className="flex gap-3 text-[1.05rem] font-semibold mt-5">
              <button className="rounded-full px-1 md:px-5 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                Power of attorney
              </button>
              <button className="rounded-full px-1 md:px-5 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                Get Legal Help
              </button>
            </div>
          </div>

          {/* right */}
          <div className="w-[100%] lg:w-[50%] relative flex">
            {/* image container */}
            <div className="w-full h-full overflow-hidden">
              <img
                className="h-full w-full object-center object-cover"
                src="https://energyintel.brightspotcdn.com/dims4/default/8a9b403/2147483647/strip/true/crop/3900x2595+0+0/resize/1920x1278!/quality/90/?url=http%3A%2F%2Fenergy-intelligence-brightspot.s3.us-east-2.amazonaws.com%2F66%2F5d%2F447bdc744898bf4cd275dc794375%2Fss102708536-rigs-drilling.jpg"
                alt=""
              />
            </div>
            <div className="absolute top-0 left-0 bg-white w-[250px] h-[190px] shadow-xl p-5">
              <div className="my-3">
                <RiContactsBookLine className="text-[2.5rem]" />
              </div>
              <div className="font-semibold text-[.875rem] ">
                <p>
                  Every 2 minutes someone created an estate plan document with
                  us to protect their family’s future.*
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth order container */}
      <div className="w-full py-[3%] px-[3%] sm:px-[12%]">
        {/* text container */}
        <div>
          {/* bold paragraph */}
          <div className="flex items-center justify-center text-[1.5rem] sm:text-[1.85rem] lg:text-[2.5rem] font-bold text-center px-[15%]">
            <p>FIND A LAWYER BY PRACTICE AREA</p>
          </div>
          {/* normal paragraph */}
          <div className="flex items-center justify-center my-3 normal-text">
            <p className="font-semibold">
              Our directory of lawyers covers over{" "}
              <span className="font-bold text-2xl text-blue-800">70</span>{" "}
              practice areas in Ethiopia
            </p>
          </div>
          {/* grid container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-7 py-[3%]">
            {/* list */}
            {caseTypes.map((item, index) => (
              <div
                key={index}
                className="p-3 rounded-md bg-yellow-50 shadow-md relative"
              >
                <div className="absolute top-[-19px] left-1/2 -translate-x-1/2 rounded-full bg-white w-[38px] flex items-center justify-center aspect-square">
                  <item.icon className="text-[1.5rem] text-yellow-700" />
                </div>
                <h3 className="mt-3 font-bold normal-text uppercase">
                  {item.title}
                </h3>
                <ul className="normal-text  ">
                  {item?.subList.map((subList, index) => (
                    <li key={index}>
                      <NavLink className={"text-center"}>
                        {subList.text}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center my-5">
          <button className="rounded-full px-12 py-[.5rem] bg-yellow-500 text-[1.15rem] font-semibold text-white transition-all ease-in-out duration-150 hover:bg-yellow-400">
            View All Legal Issues
          </button>
        </div>
      </div>

      {/* sixth order container */}
      <div className="w-full py-[3%] px-[3%] sm:px-[12%] bg-white relative h-max">
        <div className="relative z-50">
          {/* content container */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-[7%] py-[0%]">
            {/* left container */}
            <div className="w-[100%] lg:w-[50%] p-5  md:p-10 pb-0">
              {/* bold paragraph */}
              <div className="mb-4">
                <h2 className="header-level-2">
                  Real Estate, Property and Conveyance
                </h2>
              </div>
              {/* normal paragraph */}
              <div className="normal-text">
                <p>
                  Need to trademark your logo, copyright a creative work, or
                  patent an invention? Protect yourself against copycats.
                </p>
              </div>
              {/* first button */}
              <div className="my-7">
                <button className="rounded-full px-12 py-[.5rem] bg-yellow-500 text-[1.15rem] font-semibold text-white transition-all ease-in-out duration-150 hover:bg-yellow-400">
                  View all options
                </button>
              </div>
              {/* second buttons */}
              <div className="flex items-center gap-5 text-[1.05rem] font-semibold mb-3">
                <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                  Trademarks
                </button>
                <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                  Copyrights
                </button>
              </div>
              {/* third buttons */}
              <div className="flex items-center gap-5 text-[1.05rem] font-semibold mt-5">
                <button className="rounded-full px-5 md:px-10 py-2 border-[2px] border-gray-200  transition-all ease-in-out duration-300 hover:bg-gray-200">
                  Patents
                </button>
              </div>
            </div>
            {/* right container */}
            <div className="w-full mb-14 lg:mb-auto lg:w-[50%] relative flex items-center justify-center">
              {/* background image */}
              <div className="px-[10%] flex-grow flex">
                <div className="h-[370px] w-full flex relative z-10 after:absolute after:left-0 after:bottom-0 after:w-[85%] after:h-[85%] after:bg-yellow-500 after:rounded-l-full after:z-0">
                  <img
                    className="relative z-10 h-full"
                    src="https://www.gorebet.com/wp-content/uploads/2021/04/Tsay-Real-Estate-in-Ethiopia-1024x899.jpg"
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
                          <h3 className="font-semibold">Business lawyers</h3>
                        </div>
                      </header>
                      <div className="flex items-center justify-between gap-2">
                        {businessLawyers.map((item, index) => (
                          <div
                            key={index}
                            className="w-[32px] border-[2px] border-white shadow-md aspect-square overflow-hidden rounded-full"
                          >
                            <img
                              className="h-full object-cover"
                              src={item}
                              alt=""
                            />
                          </div>
                        ))}
                      </div>
                      <footer>
                        <div>
                          <span className="text-gray-500 text-[.65rem]">
                            makuta
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
                          <span>Lawyers</span>
                          <h3 className="font-bold text-[1.3rem]">23.7k</h3>
                        </div>
                        <div>
                          <span>Customers</span>
                          <h3 className="font-bold text-[1.3rem]">23.7k</h3>
                        </div>
                      </div>
                    </div>
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
              className="w-full object-cover opacity-[0.015]"
              src="/images/bg/bg-one.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* seventh order container */}
      <div className="px-[3%] sm:px-[12%] bg-gradient-to-r from-gray-100 to-orange-50 py-[3%] flex items-center justify-between gap-[5%] relative">
        <div>
          <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-y-5 lg:gap-y-0 lg:gap-[5%] relative z-30">
            {/* top left container */}
            <div className="w-full lg:w-[50%] flex relative">
              {/* background image */}
              <div className="w-full h-full flex px-[10%]">
                <div className="flex-grow relative after:absolute after:left-0 after:bottom-0 after:w-[95%] after:h-[80%] after:rounded-tr-[35%] after:bg-orange-400 z-0 flex items-end justify-end">
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
                    width={"75%"}
                    height={155}
                    type="line"
                    series={[
                      {
                        name: "active",
                        data: [
                          0,
                          12,
                          50,
                          23,
                          145,
                          170,
                          100,
                          200,
                          125,
                          12,
                          75,
                          23,
                          190
                        ]
                      },
                      {
                        name: "pending",
                        data: [
                          100,
                          10,
                          50,
                          73,
                          45,
                          170,
                          120,
                          230,
                          105,
                          120,
                          5,
                          23,
                          10
                        ]
                      },
                      {
                        name: "closed",
                        data: [
                          250,
                          34,
                          40,
                          230,
                          15,
                          17,
                          100,
                          50,
                          35,
                          20,
                          200,
                          23,
                          100
                        ]
                      }
                    ]}
                    options={{
                      chart: {
                        toolbar: {
                          show: false
                        },
                        zoom: {
                          enabled: false
                        }
                      },
                      legend: {
                        show: false
                      },
                      dataLabels: {
                        show: false,
                        formatter: val => ``
                      },
                      tooltip: {
                        fillSeriesColor: true
                      },
                      colors: ["#03a811", "#edce07", "#ed072a"],
                      stroke: {
                        width: 1,
                        curve: "smooth"
                      },
                      subtitle: {
                        text: "our services",
                        style: {
                          fontSize: 16,
                          fontWeight: "bold"
                        }
                      },
                      xaxis: {
                        axisBorder: {
                          show: false
                        },
                        axisTicks: {
                          show: false
                        },
                        categories: [
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr"
                        ],
                        labels: {
                          show: false
                        },
                        tickPlacement: "off"
                      },
                      yaxis: {
                        labels: {
                          show: false
                        }
                      },
                      grid: {
                        show: false
                      },
                      plotOptions: {
                        bar: {
                          distributed: true
                          // colors: ["#00B136", "#B23601", "#011CB2", "#A001B2"],
                        }
                      }
                    }}
                  ></Chart>
                </div>
              </div>
            </div>
            {/* bottom right container */}
            <div className="w-full lg:w-[50%]">
              {/* bold paragraph */}
              <div className="my-5">
                <h2 className="header-level-2 capitalize">
                  Are you facing a court or arbitration case?
                </h2>
              </div>
              {/* normal paragraph */}
              <div className="normal-text">
                <p>
                  Don’t worry! Makuta Law Firm is right behind you. Risk
                  management and compliance are keys to avoid disruptive large
                  scale litigation.
                </p>
              </div>
              {/* text with icon */}
              <div className="flex flex-col gap-y-5 mt-5 normal-text">
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-pink-100 border border-pink-400 text-pink-600 text-[1.15rem] rounded-full">
                    <MdOutlineFireplace />
                  </div>
                  <div>
                    <p>Represent clients at all levels of court</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-blue-100 border border-blue-400 text-blue-600 text-[1.15rem] rounded-full">
                    <IoMdRepeat />
                  </div>
                  <div>
                    <p>Represent clients before any administrative tribunal</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-1 bg-green-100 border border-green-400 text-green-600 text-[1.15rem] rounded-full">
                    <IoFolder />
                  </div>
                  <div>
                    <p>
                      Represent clients before international and local
                      arbitrations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* background image */}
          <div className="absolute left-0 bottom-0 w-full h-full flex overflow-hidden">
            <div className="flex-grow w-full h-full overflow-hidden">
              <img
                className="h-full w-full object-cover opacity-5"
                src="/images/bg/bg-two.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* eighth order container */}
      <div className="px-[3%] sm:px-[12%] py-[3%]">
        {/* top text container */}
        <div>
          {/* bold paragraph */}
          <div className="text-[1.15rem] leading-6 md:text-[1.75rem] my-3 font-[700] flex items-center justify-center capitalize">
            <p>Explore our legal article resources</p>
          </div>
          {/* normal paragraph */}
          <div className="flex items-center justify-center my-3 normal-text">
            <p>
              Learn more about your issue by reading helpful articles on a
              variety of legal topics.
            </p>
          </div>
        </div>
        {/* grids */}
        <div className="grid grid-cols-2  md:grid-cols-4 gap-5 py-5">
          {legalArticles.map((legalArticle, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="p-1 rounded-full border border-yellow-100 w-[42px] aspect-square flex items-center justify-center">
                <legalArticle.icon className="text-[1.875rem] text-gray-500" />
              </div>
              <div className="flex items-center gap-1">
                <div>
                  <span className="font-[600] text-[1.1rem]">
                    {legalArticle?.title}
                  </span>
                  <MdInsertLink className="text-gray-600 rotate-[-45deg] inline-block text-[1.25rem]" />
                </div>
                <div></div>
              </div>
            </div>
          ))}
        </div>
        {/* button container */}
        <div className="flex items-center justify-center my-5">
          <button className="rounded-full px-12 py-[.5rem] bg-yellow-500 text-[1.15rem] font-semibold text-white transition-all ease-in-out duration-150 hover:bg-yellow-400">
            View All Legal Topics
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeIndex;
