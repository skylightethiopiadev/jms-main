import { useState, useEffect, useRef } from "react";

import { NavLink } from "react-router-dom";

// icons
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown, IoIosExit } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineClose,
  MdMenu,
  MdDashboard,
  MdKeyboardArrowRight
} from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiUserShared2Fill, RiArrowRightLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const FinalHeader = ({ scrollToHomeTopRef }) => {
  // states
  const [isPhone, setIsPhone] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNav, setIsNav] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [menuIconToggler, setMenuIconToggler] = useState(false);
  const [isUserDropDown, setIsUserDropDown] = useState(false);
  const [languageOption, setLanguageOption] = useState(false);

  // nav
  const nav = [
    {
      navText: "Civil"
    },
    {
      navText: "Criminal"
    },
    {
      navText: "Corporate"
    },
    {
      navText: "Other Services"
    }
  ];

  // civil sub list
  const civilSubNav = [
    {
      groupOne: [
        {
          navHeaderText: "Contract",
          path: '/civil/contract',
          subNavList: [
            {
              navHeaderText: "General contracts",
              path: "/civil/contract"
            },
            {
              navHeaderText: "Contract of special movables",
              path: "/civil/contract/special-movables"
            },
            {
              navHeaderText: "Sale or lease of buildings",
              path: "/civil/contract/sale-lease-buildings"
            },
            {
              navHeaderText: "Construction",
              path: "/civil/contract/construction"
            },
            {
              navHeaderText: "Supply of goods and services",
              path: "/civil/contract/supply-goods-services"
            },
            {
              navHeaderText: "Rental of machineries and vehicles",
              path: "/civil/contract/rental-machineries-vehicles"
            },
            {
              navHeaderText: "Loan",
              path: "/civil/contract/loan"
            },
            // {
            //   navHeaderText: "Others",
            //   navHeaderText: "Others(suretyship, mortgage, pledge, and agency and sale contracts)",
            //   path: "#"
            // },
          ]
        },
        {
          navHeaderText: "Family",
          path: '/family',
          subNavList: [
            {
              navHeaderText: "Maintenances",
              path: "/family"
            },
            {
              navHeaderText: "Adoption",
              path: "/family/adoption"
            },
            {
              navHeaderText: "Divorce",
              path: "/family/divorce"
            },
            {
              navHeaderText: "Irregular Union",
              path: "/family/irregular-union"
            },
            {
              navHeaderText: "Others",
              path: "/family/others"
            },
          ]
        }
      ]
    },
    {
      groupTwo: [
        {
          navHeaderText: "Succession",
          path: "/succession"
        },
        {
          navHeaderText: "Employment",
          path: "/employment"
        },
        {
          navHeaderText: "Property",
          path: "/property"
        },
        {
          navHeaderText: "Torts",
          path: "/torts"
        },
      ]
    }
  ];
  // criminal sub list
  const criminalSubNav = [
    {
      navHeaderText: "Ordinary crime",
      path: "/criminal/ordinary-crime"
    },
    {
      navHeaderText: "Corruption",
      path: "/criminal/corruption"
    },
    {
      navHeaderText: "Money laundering (Financial fraud)",
      path: "/criminal/money-laundering"
    },
    {
      navHeaderText: "Tax and customs related crimes",
      path: "/criminal/tax-custom-crimes"
    }
  ];
  // commercial sub list
  const commercialSubNav = [
    {
      groupOne: [
        {
          navHeaderText: "Contract",
          subNavList: [
            {
              navHeaderText: "Contract of special movables (vehicles)",
              path: "#"
            },
            {
              navHeaderText: "Sale or lease of buildings",
              path: "#"
            },
            {
              navHeaderText: "Construction",
              path: "#"
            },
            {
              navHeaderText: "Supply of goods and services",
              path: "#"
            },
            {
              navHeaderText: "Rental of machineries and vehicles",
              path: "#"
            },
            {
              navHeaderText: "Loan",
              path: "#"
            },
            {
              navHeaderText: "Others",
              path: "#"
            },
          ]
        },
        {
          navHeaderText: "Intellectual property",
          path: "/corporate/intellectual-property",
          subNavList: [
            {
              navHeaderText: "Copyright",
              path: "/corporate/intellectual-property",
            },
            {
              navHeaderText: "Patent",
              path: "/corporate/intellectual-property/patent",
            },
            {
              navHeaderText: "Trademark",
              path: "/corporate/intellectual-property/trademark",
            },
            {
              navHeaderText: "Utilities",
              path: "/corporate/intellectual-property/utilities",
            },
            {
              navHeaderText: "Geographical indications",
              path: "/corporate/intellectual-property/geographical-indications",
            },
            {
              navHeaderText: "Varieties and plant breeders' right",
              path: "/corporate/intellectual-property/varieties-plant-breeds-right",
            },
          ]
        },
        {
          navHeaderText: "Financial sector",
          subNavList: [
            {
              navHeaderText: "Banking",
              path: "#"
            },
            {
              navHeaderText: "Insurance",
              path: "#"
            },
            {
              navHeaderText: "Capital market",
              path: "#"
            },
            {
              navHeaderText: "Payment instrument issuers",
              path: "#"
            },
            {
              navHeaderText: "Others",
              path: "#"
            },
          ]
        },
        {
          navHeaderText: "Trade and investment",
          path: '/corporate/trade-investment',
          subNavList: [
            {
              navHeaderText: "Incorporation (Business formation)",
              path: "/corporate/trade-investment"
            },
            {
              navHeaderText:
                "Merger",
              path: "/corporate/trade-investment/merger"
            },
            {
              navHeaderText: "Acquisition",
              path: "#"
            },
            {
              navHeaderText: "Reorganization",
              path: "#"
            },
            {
              navHeaderText: "Conversion of business organization",
              path: "/corporate/trade-investment/conversion"
            },
            {
              navHeaderText: "Bankruptcy (Scheme of arrangement or dissolution)",
              path: "/corporate/trade-investment/bankruptcy"
            },
            {
              navHeaderText: "Investment (FDI)",
              path: "/corporate/trade-investment/investment"
            },
            {
              navHeaderText: "Others(international business transactions)",
              path: "/corporate/trade-investment/others"
            },
          ]
        }
      ]
    },
    {
      groupTwo: [
        {
          navHeaderText: "Tax & customs",
          path: "#"
        },
        {
          navHeaderText: "Real estate, land and  property",
          path: "#"
        },
        {
          navHeaderText: "Others",
          path: "#"
        },
      ]
    }
  ];
  // other services
  const otherServicesSubNavList = [
    {
      navHeaderText: "Training",
      path: "/training"
    },
    {
      navHeaderText: "Consulting",
      path: "/consulting"
    },
    {
      navHeaderText: "Research",
      path: "/researches"
    },
    {
      navHeaderText: "Serve as member of the board of directors",
      path: "/researches"
    },
    {
      navHeaderText: "Pro bono services",
      path: "/researches"
    },
    {
      navHeaderText: "Risk Management and Crisis Intervention",
      path: "/researches"
    },
    {
      navHeaderText: "Public Policy and Government Relations",
      path: "/researches"
    },
  ];

  // languages
  const [languages, setLanguages] = useState([
    {
      language: 'Amharic',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg',
    },
    {
      language: 'Arabic',
      flag: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3dfU5w05oiEfg2RHI3Ej8pWfLdYq6bb6BOVpkV9ezA&s',
    },
    {
      language: 'Chinese',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png',
    },
    {
      language: 'Eng(US)',
      flag: 'https://static.vecteezy.com/system/resources/thumbnails/002/816/608/small/american-national-flag-free-vector.jpg',
    },
    {
      language: 'Swahili',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png',
    },
  ])

  // effects
  useEffect(() => {
    let element = document.getElementById("main-nav-container");
    if (element?.classList.contains("right-[-100vw] fixed")) {
      setMenuIconToggler(true);
    } else {
      setMenuIconToggler(false);
    }
  }, []);

  // nav drawer
  const mainNavDrawer = () => {
    const mainNav = document.getElementById("main-nav-container");
    if (mainNav?.classList.contains("right-[-100vw]")) {
      mainNav?.classList.remove("right-[-100vw]");
      mainNav?.classList.add("right-0");
    } else {
      mainNav?.classList.add("right-[-100vw]");
      mainNav?.classList.remove("right-0");
    }
  };

  // scroll into top handler
  const scrollIntoHomeTopHandler = () => {
    scrollToHomeTopRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }




  return (
    <header className="shadow-bottomShadow fixed left-0 top-0 z-[1000] text-[.975rem] w-full bg-white text-black">

      <div className="px-[1%] sm:px-[2%] md:px-[2%] lg:px-[3%] xl:px-[5%] flex items-center justify-between">
        {/* logo container */}
        <div
          className="
        relative"
        >
          <div className="absolute z-50 left-0 p-1 shadow-lg bg-white mt-[-36px]">
            <NavLink className={"cursor-pointer"} to={"/"} onClick={() => {
              setIsNav(null)
              scrollIntoHomeTopHandler()
            }}>
              <div className="w-[110px] h-[90px] overflow-hidden cursor-pointer">
                <img
                  className="h-full w-full"
                  src="/images/site-logo/final-logo.png"
                  alt=""
                />
              </div>
            </NavLink>
          </div>
        </div>
        {/* header content */}
        <div className="flex-grow flex items-center justify-between relative">
          {/* nav container */}
          <div className="flex-grow flex items-center justify-center">
            <div
              className="fixed w-full sm:w-[75%] md:w-[50%] h-[calc(100vh-9vh)] bg-white shadow-lg lg:shadow-none  right-[-100vw] transition-all ease-in-out duration-300 top-[9vh] lg:relative lg:bg-transparent lg:right-auto lg:top-auto lg:w-auto lg:h-auto"
              id="main-nav-container"
            >
              <div className="w-full md:hidden flex items-center py-3 px-[5%]">
                <div className="flex-grow flex items-center">
                  <div className="flex-grow flex items-center bg-white rounded-full sm:py-1 border-2 border-black ">
                    <FiSearch className="mx-2 text-[1.35rem]" />
                    <input
                      type="text"
                      placeholder="search"
                      className="w-full focus:ring-0 focus:outline-none border-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
              <ul className="sm:pl-[30%] w-[90%] sm:w-[75%] mx-[5%] lg:mx-auto lg:w-full lg:flex lg:items-center lg:justify-center lg:gap-[10%]">
                {nav.map((item, index) => (
                  <li key={index} className="relative">
                    <NavLink
                      className={`flex items-center justify-between gap-1 py-2 md:py-[1.75rem] font-[600] text-[.975rem] transition-colors ease-in-out duration-300 hover:text-gray-500 relative after:absolute after:left-0 after:bottom-0 after:h-[6px] after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full whitespace-nowrap ${isNav?.navText === item.navText
                        ? "after:w-full"
                        : "after:w-0"
                        }`}
                      onClick={() => {
                        setIsPhone(false);
                        if (isNav?.navText === item.navText) {
                          setIsNav(null);
                        } else {
                          setIsNav(item);
                        }
                      }}
                    >
                      <span>{item.navText}</span>
                      <IoIosArrowDown
                        className={`text-xl transition-transform ease-in-out duration-300 ${isNav?.navText === item.navText
                          ? "rotate-[-180deg]"
                          : "rotate-0"
                          }`}
                      />
                    </NavLink>
                    {/* sub list pop up */}
                    <div
                      className={`bg-white transition-all ease-in-out duration-300 ${isNav?.navText === item.navText
                        ? " scale-100 opacity-100 "
                        : "scale-0 opacity-0"
                        } ${isNav?.navText === "Civil" ||
                          isNav?.navText === "Corporate"
                          ? "absolute left-0 top-[100%] z-[1000] lg:fixed lg:left-0 w-full pb-[100px] lg:pb-0 lg:top-[12.25vh] lg:w-screen h-[calc(100vh-9.5vh)] bg-white"
                          : "absolute left-0 top-[100%] z-[1000] w-[360px] whitespace-nowrap "
                        }`}
                    >
                      {isNav?.navText === "Civil" ? (
                        <div className="w-full h-full flex">
                          <div className="flex-grow py-[3%] lg:px-[20%] h-full w-[350px] my-1 lg:my-auto overflow-y-auto flex flex-col lg:flex-row gap-y-0 lg:justify-between">
                            {/* contract list */}
                            <div className="flex flex-col h-[350px] lg:h-auto">
                              <div>
                                <NavLink to={civilSubNav[0].groupOne[0].path} className="font-semibold mb-3 text-[1.35rem] hover:underline" onClick={() => {
                                  setIsNav(null)
                                  scrollIntoHomeTopHandler()
                                }}>
                                  {civilSubNav[0].groupOne[0].navHeaderText}
                                </NavLink>
                                <ul>
                                  {civilSubNav[0].groupOne[0].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink
                                          to={`${item.path}`}
                                          className={"hover:underline"}
                                          onClick={() => {
                                            setIsNav(null);
                                            scrollIntoHomeTopHandler();
                                          }}
                                        >
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="flex-grow h-full flex items-end pb-[120px]">
                                <div className="flex items-center justify-center gap-3 border-[4px] border-black rounded-full py-2 px-[7%] cursor-pointer hover:bg-black hover:text-white">
                                  <div>
                                    <span className="font-[600] text-[1.3rem]">
                                      Explore more
                                    </span>
                                  </div>
                                  <div>
                                    <RiArrowRightLine className="text-[1.5rem]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* family list */}
                            <div className="flex flex-col h-[200px] lg:h-auto">
                              <div>
                                <NavLink className="font-semibold mb-3 text-[1.35rem] hover:underline" to={civilSubNav[0].groupOne[1].path} onClick={() => {
                                  setIsNav(null);
                                  scrollIntoHomeTopHandler();
                                }}>
                                  {civilSubNav[0].groupOne[1].navHeaderText}
                                </NavLink>
                                <ul>
                                  {civilSubNav[0].groupOne[1].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink className={"hover:underline"} to={item.path} onClick={() => {
                                          setIsNav(null);
                                          scrollIntoHomeTopHandler();
                                        }}>
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="h-full flex-grow flex pb-[150px]">
                                <h3 className="font-[500] underline transition-colors ease-in-out duration-300 hover:opacity-75 cursor-pointer text-[1.25rem]">
                                  view all
                                </h3>
                              </div>
                            </div>
                            {/* list without sub list */}
                            <div>
                              <ul>
                                {civilSubNav[1].groupTwo.map((item, index) => (
                                  <li
                                    key={index}
                                    className="my-[.25rem] font-semibold text-[1.35rem]"
                                  >
                                    <NavLink
                                      to={`${item?.path}`}
                                      className={"hover:underline"}
                                      onClick={() => {
                                        setIsNav(null);
                                        scrollIntoHomeTopHandler();
                                      }}
                                    >
                                      {item.navHeaderText}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* see all button */}
                            <div className="hidden lg:flex absolute right-20 bottom-20">
                              <div className="flex items-center gap-1 font-[500] text-[1.35rem] cursor-pointer underline transition-colors ease-in-out duration-300 hover:opacity-75">
                                <div>See all civil services</div>
                                <div>
                                  <MdKeyboardArrowRight className="text-[2rem]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : isNav?.navText === "Criminal" ? (
                        <div>
                          <div className="p-[5%] bg-white shadow-2xl">
                            <ul>
                              {criminalSubNav.map((item, index) => (
                                <li
                                  key={index}
                                  className="my-[.45rem] text-[1.125rem]"
                                >
                                  <NavLink className={"hover:underline"} to={item.path} onClick={()=>{
                                    setIsNav(null)
                                    scrollIntoHomeTopHandler()
                                  }}>
                                    {item.navHeaderText}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : isNav?.navText === "Corporate" ? (
                        <div className="w-full h-full flex">
                          <div className="flex-grow py-[3%] px-[2%] flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden pb-[100px] my-1 lg:my-auto lg:pb-0 justify-between gap-5">
                            {/* contract list */}
                            <div className="flex flex-col">
                              <div>
                                <h3 className="font-semibold mb-3 text-[1.35rem]">
                                  {
                                    commercialSubNav[0].groupOne[0]
                                      .navHeaderText
                                  }
                                </h3>
                                <ul>
                                  {commercialSubNav[0].groupOne[0].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink className={"hover:underline"}>
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="flex-grow h-full flex">
                                <h3 className="font-[500] underline transition-colors ease-in-out duration-300 hover:opacity-75 cursor-pointer text-[1.25rem]">
                                  view all
                                </h3>
                              </div>
                            </div>

                            {/* intellectual property list */}
                            <div className="flex flex-col">
                              <div>
                                <NavLink className="font-semibold text-[1.35rem] mb-3 hover:underline" to={commercialSubNav[0].groupOne[1].path} onClick={() => {
                                  setIsNav(null);
                                  scrollIntoHomeTopHandler();
                                }}>
                                  {
                                    commercialSubNav[0].groupOne[1]
                                      .navHeaderText
                                  }
                                </NavLink>
                                <ul>
                                  {commercialSubNav[0].groupOne[1].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink className={"hover:underline"} to={{ pathname: item.path }} onClick={() => {
                                          setIsNav(null);
                                          scrollIntoHomeTopHandler();
                                        }}>
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="h-full">
                                <h3 className="font-[500] underline transition-colors ease-in-out duration-300 hover:opacity-75 cursor-pointer text-[1.25rem]">
                                  view all
                                </h3>
                              </div>
                            </div>

                            {/* international trade and investment list */}

                            <div>
                              <div>
                                <NavLink to={commercialSubNav[0].groupOne[3].path} className="font-semibold mb-3 text-[1.35rem] hover:underline" onClick={() => {
                                  setIsNav(null)
                                  scrollIntoHomeTopHandler()
                                }}>
                                  {
                                    commercialSubNav[0].groupOne[3]
                                      .navHeaderText
                                  }
                                </NavLink>
                                <ul>
                                  {commercialSubNav[0].groupOne[3].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink to={item.path} className={"hover:underline"} onClick={() => {
                                          setIsNav(null)
                                          scrollIntoHomeTopHandler()
                                        }}>
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="h-full pt-[60px]">
                                <div>
                                  <div className="flex items-center justify-center gap-3 border-[4px] border-black rounded-full py-2 px-[3%] cursor-pointer hover:bg-black hover:text-white">
                                    <div>
                                      <span className="font-[600] text-[1.3rem]">
                                        Explore more
                                      </span>
                                    </div>
                                    <div>
                                      <RiArrowRightLine className="text-[1.5rem]" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-semibold mb-3 text-[1.35rem]">
                                {commercialSubNav[0].groupOne[2].navHeaderText}
                              </h3>
                              <ul>
                                {commercialSubNav[0].groupOne[2].subNavList.map(
                                  (item, index) => (
                                    <li
                                      key={index}
                                      className="my-[.3rem] text-[1.125rem]"
                                    >
                                      <NavLink className={"hover:underline"}>
                                        {item.navHeaderText}
                                      </NavLink>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div>
                              <ul>
                                {commercialSubNav[1].groupTwo.map(
                                  (item, index) => (
                                    <li
                                      key={index}
                                      className="my-[.25rem] font-semibold text-[1.35rem]"
                                    >
                                      <NavLink className={"hover:underline"}>
                                        {item.navHeaderText}
                                      </NavLink>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            {/* see all button */}
                            <div className="absolute right-20 bottom-20">
                              <div className="flex items-center gap-1 font-[500] text-[1.35rem] cursor-pointer underline transition-colors ease-in-out duration-300 hover:opacity-75">
                                <div>See all corporate services</div>
                                <div>
                                  <MdKeyboardArrowRight className="text-[2rem]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : isNav?.navText === "Other Services" ? (
                        <div>
                          <div className="p-[5%] bg-white shadow-2xl w-[430px]">
                            <ul>
                              {otherServicesSubNavList.map((item, index) => (
                                <li
                                  key={index}
                                  className="my-[.3rem]  text-[1.125rem]"
                                >
                                  <NavLink
                                    to={`${item?.path}`}
                                    className={"hover:underline"}
                                    onClick={() => {
                                      setIsNav(null);
                                      scrollIntoHomeTopHandler();
                                    }}
                                  >
                                    {item.navHeaderText}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* action container */}
          <div className="flex items-center justify-between gap-3">
            {/* phone */}
            <div className="relative py-[.975rem]">
              {/* button */}
              <div
                className={`flex items-center justify-center gap-1 p-[.35rem] md:py-[.5rem]  border-[.195rem] border-black rounded-full md:px-7 cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white`}
                onClick={() => {
                  if (!isPhone) {
                    setIsNav(null);
                  }
                  setIsPhone(!isPhone);
                }}
              >
                <FiPhone className="text-[1.5rem]" />
                <IoIosArrowDown
                  className={`hidden md:flex text-lg transition-transform text-[1.35rem] ease-in-out duration-300 ${isPhone ? "rotate-[-180deg]" : "rotate-0"
                    }`}
                />
              </div>
              {/* pop-up */}
              <div
                className={`fixed bottom-0 left-0 w-full md:absolute md:left-0 md:top-[100%] bg-white md:w-max md:h-max whitespace-nowrap text-[.975rem] shadow-lg p-5 overflow-hidden transition-all ease-in-out duration-300 ${isPhone ? "scale-100 opacity-100" : "scale-0 opacity-0"
                  }`}
              >
                {/* close btn */}
                <div className="absolute top-1 right-1 md:hidden">
                  <button
                    onClick={() => {
                      setIsPhone(false);
                    }}
                  >
                    <MdOutlineClose className="text-3xl" />
                  </button>
                </div>
                <div className="font-medium">
                  <h3 className="font-bold text-[1.15rem]">Talk to Makuta</h3>

                  <h3 className="mt-3 font-bold">Local call center</h3>

                  <h3>Dial: 8383</h3>
                  <h3 className="mt-3 font-bold">International call center</h3>
                  <h3>Dial: (+251) 985 228 888 </h3>
                </div>
                <div className="mt-3 font-bold flex items-center justify-center">
                  <h3>Customer care hours</h3>
                </div>
                <div>
                  <div className="w-full flex items-center justify-center">
                    <div className="p-2 w-[70px] aspect-square overflow-hidden rounded-full bg-black bg-opacity-5 flex items-center justify-center">
                      <span className="text-[1.35rem] font-black">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* search */}
            <div className=" hidden md:flex">
              <div
                className="border-[.195rem] border-black rounded-full p-[.35rem] md:p-[.5rem] text-xl cursor-pointer transition-all ease-in-out duration-300 hover:border-gray-500 hover:bg-gray-500 hover:text-white"
                onClick={() => {
                  setIsSearch(true);
                }}
              >
                <FiSearch />
              </div>
            </div>

            {/* sign in or user */}
            {!true ? (
              <div>
                <NavLink
                  to="/login"
                  className="md:px-5 p-[.35rem] md:py-[.5rem] bg-black rounded-full text-white transition-all ease-in-out duration-300 hover:bg-gray-500 cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  {/* text */}
                  <div className="hidden md:flex">
                    <span className="font-semibold">sign in</span>
                  </div>
                  {/* icon for small screen */}
                  <RiUserShared2Fill className="md:hidden text-[1.75rem]" />
                </NavLink>
              </div>
            ) : (
              <div className="relative">
                {/* image */}
                <div
                  className="flex items-center gap-1 p-[.1rem] rounded-sm border border-black border-opacity-0 transition-all ease-in-out duration-300 hover:border-opacity-5 cursor-pointer"
                  onClick={() => {
                    setIsUserDropDown(!isUserDropDown);
                  }}
                >
                  <div className="w-[36px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-center object-cover"
                      src="/images/personnels/lawyer-two.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-[.875rem] flex items-center gap-1">
                    <span>Haddis</span>
                    <span className="hidden md:inline-block">Fanta</span>
                  </div>
                  <div>
                    <IoIosArrowDown
                      className={`text-xs transition-all ease-in-out duration-300 ${isUserDropDown ? "rotate-[-180deg]" : "rotate-0"
                        }`}
                    />
                  </div>
                </div>
                {/* user drop down */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-[120%] overflow-hidden transition-all ease-in-out duration-300 ${isUserDropDown ? "max-h-[100vh]  shadow-xl" : "max-h-0"
                    }`}
                >
                  <div className="py-3 px-5 bg-white rounded-md">
                    {/* image container */}
                    <div className="w-full flex items-center justify-center border-b border-black border-opacity-10 px-10">
                      <div className="flex flex-col items-center">
                        <div className="w-[72px] aspect-square rounded-full overflow-hidden">
                          <img
                            className="w-full h-full object-center object-cover"
                            src="/images/personnels/lawyer-two.jpg"
                            alt=""
                          />
                        </div>
                        <div className="flex items-center justify-center my-1 gap-1 font-[500]">
                          <span>Haddis</span>
                          <span>Fanta</span>
                        </div>
                      </div>
                    </div>
                    {/* nav */}
                    <div>
                      <ul>
                        <li>
                          <NavLink className="flex items-center gap-2 py-1 transition-all ease-in-out duration-300 hover:opacity-75">
                            {/* icon */}
                            <div>
                              <MdDashboard className="text-[1.15rem]" />
                            </div>
                            {/* text */}
                            <div>
                              <span>Dashboard</span>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="flex items-center gap-2 py-1 transition-all ease-in-out duration-300 hover:opacity-75">
                            {/* icon */}
                            <div>
                              <CgProfile className="text-[1.25rem]" />
                            </div>
                            {/* text */}
                            <div>
                              <span>Profile</span>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="flex items-center gap-2 py-1 transition-all ease-in-out duration-300 hover:opacity-75">
                            {/* icon */}
                            <div>
                              <IoIosExit className="text-[1.35rem]" />
                            </div>
                            {/* text */}
                            <div>
                              <span>Logout</span>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* language */}
            <div className="relative">
              <div className="flex items-center gap-1 cursor-pointer" onClick={() => {
                setLanguageOption(!languageOption)
              }}>
                <div className="w-[20px] aspect-square rounded-full overflow-hidden">
                  <img className="w-full h-full object-center object-cover" src="data:image/png;base64,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" alt="" />
                </div>
                <div>
                  <span className="text-black text-[1.125rem]">Eng(US)</span>
                </div>
                <div>
                  <MdKeyboardArrowDown className={`transition-transform ease-in-out duration-300 ${languageOption ? 'rotate-[-180deg]' : 'rotate-0'}`} />
                </div>
              </div>
              {/* language list */}
              <div className={`absolute right-0 top-[50px] bg-transparent z-50 transition-all ease-in-out duration-300 overflow-hidden ${languageOption ? 'h-[64vh]' : 'h-0'}`}>
                <div className="w-[10ww0px] whitespace-nowrap bg-white shadow-md py-1 px-3">
                  <ul>
                    {
                      languages?.map((item, index) => {
                        return (
                          <li key={index} className="text-[1.125rem]">
                            <div className="w-full cursor-pointer py-1 px-3 flex items-center gap-2 my-1 bg-transparent transition-colors ease-in-out duration-300 hover:bg-gray-100">
                              <div className="w-[20px] aspect-square rounded-full overflow-hidden">
                                <img
                                  className="w-full h-full object-center object-cover"
                                  src={item.flag}
                                  alt="" />
                              </div>
                              <div className="flex items-center"><span className="text-black">{item.language}</span></div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>

            {/* menu drawer */}
            <div className="lg:hidden">
              <div
                className="mx-2 text-[2.75rem] cursor-pointer"
                onClick={() => {
                  mainNavDrawer();
                  setMenuIconToggler(!menuIconToggler);
                }}
              >
                {menuIconToggler ? <MdOutlineClose /> : <MdMenu />}
              </div>
            </div>
          </div>
          {/* search bar */}
          {isSearch ? (
            <div className="absolute right-0 top-0 h-full w-full overflow-hidden  bg-white z-50 pr-[5%] pl-[15%] flex items-center">
              <div className="flex-grow flex items-center gap-3">
                {/* input */}
                <div className="flex-grow flex items-center px-3  border-2 border-black rounded-full">
                  <FiSearch className="text-xl mr-1" />
                  <input
                    type="text"
                    placeholder="search"
                    className="w-full focus:outline-none focus:ring-0 border-none bg-transparent"
                  />
                </div>
                {/* close btn */}
                <div>
                  <button
                    onClick={() => {
                      setIsSearch(!isSearch);
                    }}
                  >
                    <MdOutlineClose className="text-[2.35rem]" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header >
  );
};

export default FinalHeader;
