import { useState, useEffect } from "react";

import { NavLink } from "react-router-dom";

// icons
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { MdOutlineClose, MdMenu } from "react-icons/md";
import { RiUserShared2Fill } from "react-icons/ri";


const FinalHeader = () => {
  // states
  const [isPhone, setIsPhone] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNav, setIsNav] = useState(null);
  const [menuIconToggler, setMenuIconToggler] = useState(false);

  // nav
  const nav = [
    {
      navText: "Civil",
    },
    {
      navText: "Criminal",
    },
    {
      navText: "Commercial",
    },
    {
      navText: "Other Services",
    },
  ];

  // criminal sub list
  const civilSubNav = [
    {
      groupOne: [
        {
          navHeaderText: "Contract",
          subNavList: [
            {
              navHeaderText: "Contract of special movables",
              path: "#",
            },
            {
              navHeaderText: "Sale or lease of buildings",
              path: "#",
            },
            {
              navHeaderText: "Construction",
              path: "#",
            },
            {
              navHeaderText: "Supply of goods and services",
              path: "#",
            },
            {
              navHeaderText: "Rental of machineries",
              path: "#",
            },
            {
              navHeaderText: "Loan",
              path: "#",
            },
          ],
        },
        {
          navHeaderText: "Family",
          subNavList: [
            {
              navHeaderText: "Maintenance",
              path: "#",
            },
            {
              navHeaderText: "Adoption",
              path: "#",
            },
            {
              navHeaderText: "Divorce",
              path: "#",
            },
          ],
        },
      ],
    },
    {
      groupTwo: [
        {
          navHeaderText: "Succession",
          path: "#",
        },
        {
          navHeaderText: "Employment",
          path: "#",
        },
        {
          navHeaderText: "Property",
          path: "#",
        },
      ],
    },
  ];
  // criminal sub list
  const criminalSubNav = [
    {
      navHeaderText: "Ordinary crime",
      path: "#",
    },
    {
      navHeaderText: "Corruption",
      path: "#",
    },
    {
      navHeaderText: "Money laundering",
      path: "#",
    },
    {
      navHeaderText: "Tax and custom related crimes",
      path: "#",
    },
  ];
  // commercial sub list
  const commercialSubNav = [
    {
      groupOne: [
        {
          navHeaderText: "Contract",
          subNavList: [
            {
              navHeaderText: "Contract of special movables",
              path: "#",
            },
            {
              navHeaderText: "Sale or lease of buildings",
              path: "#",
            },
            {
              navHeaderText: "Construction",
              path: "#",
            },
            {
              navHeaderText: "Supply of goods and services",
              path: "#",
            },
            {
              navHeaderText: "Rental of machineries",
              path: "#",
            },
            {
              navHeaderText: "Loan",
              path: "#",
            },
          ],
        },
        {
          navHeaderText: "Intellectual property",
          subNavList: [
            {
              navHeaderText: "Copyright",
              path: "#",
            },
            {
              navHeaderText: "Patent",
              path: "#",
            },
            {
              navHeaderText: "Trade mark",
              path: "#",
            },
            {
              navHeaderText: "Utilities",
              path: "#",
            },
            {
              navHeaderText: "Geographical indications",
              path: "#",
            },
          ],
        },
        {
          navHeaderText: "Financial sector",
          subNavList: [
            {
              navHeaderText: "Banking",
              path: "#",
            },
            {
              navHeaderText: "Insurance",
              path: "#",
            },
            {
              navHeaderText: "Capital",
              path: "#",
            },
          ],
        },
        {
          navHeaderText: "Corporate",
          subNavList: [
            {
              navHeaderText: "Incorporation",
              path: "#",
            },
            {
              navHeaderText: "Bankruptcy",
              path: "#",
            },
            {
              navHeaderText: "Merger",
              path: "#",
            },
          ],
        },
      ],
    },
    {
      groupTwo: [
        {
          navHeaderText: "International trade and investment",
          path: "#",
        },
        {
          navHeaderText: "Tax",
          path: "#",
        },
        {
          navHeaderText: "Customs",
          path: "#",
        },
        {
          navHeaderText: "Real estate, property and conveyance",
          path: "#",
        },
        {
          navHeaderText: "Joint venture",
          path: "#",
        },
        {
          navHeaderText: "Torts",
          path: "#",
        },
      ],
    },
  ];
  // other services
  const otherServicesSubNavList = [
    {
      navHeaderText: "Training",
      path: "#",
    },
    {
      navHeaderText: "Consulting",
      path: "#",
    },
    {
      navHeaderText: "Researches",
      path: "#",
    },
  ];

  // effects
  useEffect(()=>{
    let element = document.getElementById('main-nav-container')
    if(element?.classList.contains('right-[-100vw] fixed')){
      setMenuIconToggler(true)
    }else{
      setMenuIconToggler(false)
    }
  },[])

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

  return (
    <header className="shadow-bottomShadow fixed left-0 top-0 z-[1000] text-[.975rem] w-full bg-white text-black">
      <div className="px-[12%] flex items-center justify-between">
        {/* logo container */}
        <div
          className="
        relative"
        >
          <div className="absolute left-0 p-1 shadow-lg bg-white mt-[-36px]">
            <NavLink>
              <div className="w-[110px] aspect-square overflow-hidden">
                <img
                  className="h-[90px] w-full"
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
              <ul className="sm:pl-[20%] w-[90%] sm:w-[75%] mx-[5%] lg:mx-auto lg:w-full lg:flex lg:items-center lg:justify-center lg:gap-[10%]">
                {nav.map((item, index) => (
                  <li key={index} className="relative">
                    <NavLink
                      className={`flex items-center justify-between gap-3 py-2 md:py-[1.75rem] font-[600] text-[.975rem] transition-colors ease-in-out duration-300 hover:text-gray-500 relative after:absolute after:left-0 after:bottom-0 after:h-[6px] after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full whitespace-nowrap ${
                        isNav?.navText === item.navText
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
                        className={`text-xl transition-transform ease-in-out duration-300 ${
                          isNav?.navText === item.navText
                            ? "rotate-[-180deg]"
                            : "rotate-0"
                        }`}
                      />
                    </NavLink>
                    {/* sub list pop up */}
                    <div
                      className={`bg-white transition-all ease-in-out duration-300 ${
                        isNav?.navText === item.navText
                          ? " scale-100 opacity-100 "
                          : "scale-0 opacity-0"
                      } ${
                        isNav?.navText === "Civil" ||
                        isNav?.navText === "Commercial"
                          ? "fixed left-0 top-[12.25vh] w-screen h-[calc(100vh-9.5vh)]"
                          : "absolute left-0 top-[100%] w-[300px] whitespace-nowrap "
                      }`}
                    >
                      {isNav?.navText === "Civil" ? (
                        <div className="w-full h-full flex">
                          <div className="flex-grow py-[3%] px-[20%] flex justify-between">
                            <div>
                              <h3 className="font-semibold mb-3 text-[1.35rem]">
                                {civilSubNav[0].groupOne[0].navHeaderText}
                              </h3>
                              <ul>
                                {civilSubNav[0].groupOne[0].subNavList.map(
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
                              <h3 className="font-semibold mb-3 text-[1.35rem]">
                                {civilSubNav[0].groupOne[1].navHeaderText}
                              </h3>
                              <ul>
                                {civilSubNav[0].groupOne[1].subNavList.map(
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
                                {civilSubNav[1].groupTwo.map((item, index) => (
                                  <li
                                    key={index}
                                    className="my-[.3rem] text-[1.125rem]"
                                  >
                                    <NavLink className={"hover:underline"}>
                                      {item.navHeaderText}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ) : isNav?.navText === "Criminal" ? (
                        <div>
                          <div className="p-[5%]">
                            <ul>
                              {criminalSubNav.map((item, index) => (
                                <li
                                  key={index}
                                  className="my-[.45rem] text-[1.125rem]"
                                >
                                  <NavLink className={"hover:underline"}>
                                    {item.navHeaderText}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : isNav?.navText === "Commercial" ? (
                        <div className="w-full h-full flex">
                          <div className="flex-grow py-[3%] px-[2%] flex justify-between">
                            <div>
                              <h3 className="font-semibold mb-3 text-[1.35rem]">
                                {commercialSubNav[0].groupOne[0].navHeaderText}
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
                            <div>
                              <h3 className="font-semibold text-[1.35rem] mb-3">
                                {commercialSubNav[0].groupOne[1].navHeaderText}
                              </h3>
                              <ul>
                                {commercialSubNav[0].groupOne[1].subNavList.map(
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
                              <h3 className="font-semibold mb-3 text-[1.35rem]">
                                {commercialSubNav[0].groupOne[3].navHeaderText}
                              </h3>
                              <ul>
                                {commercialSubNav[0].groupOne[3].subNavList.map(
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
                          </div>
                        </div>
                      ) : isNav?.navText === "Other Services" ? (
                        <div>
                          <div className="p-[5%]">
                            <ul>
                              {otherServicesSubNavList.map((item, index) => (
                                <li
                                  key={index}
                                  className="my-[.3rem]  text-[1.125rem]"
                                >
                                  <NavLink className={"hover:underline"}>
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
                  className={`hidden md:flex text-lg transition-transform text-[1.35rem] ease-in-out duration-300 ${
                    isPhone ? "rotate-[-180deg]" : "rotate-0"
                  }`}
                />
              </div>
              {/* pop-up */}
              <div
                className={`fixed bottom-0 left-0 w-full md:absolute md:left-0 md:top-[100%] bg-white md:w-max md:h-max whitespace-nowrap text-[.975rem] shadow-lg p-5 overflow-hidden transition-all ease-in-out duration-300 ${
                  isPhone ? "scale-100 opacity-100" : "scale-0 opacity-0"
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
                  <h3>Talk to Makutta</h3>
                  <h3>(+2519) 239-96736</h3>
                </div>
                <div className="my-3 font-medium">
                  <h3>Customer Care hours</h3>
                </div>
                <div>
                  <p>Mon-Fri 5 a.m. - 7 p.m. PT</p>
                  <p>Weekends 7 a.m. - 4 p.m. PT</p>
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
            {/* sign in */}
            <div>
              <NavLink className="md:px-5 p-[.35rem] md:py-[.5rem] bg-black rounded-full text-white transition-all ease-in-out duration-300 hover:bg-gray-500 cursor-pointer flex items-center justify-center whitespace-nowrap">
                {/* text */}
                <div className="hidden md:flex">
                  <span className="font-semibold">sign in</span>
                </div>
                {/* icon for small screen */}
                <RiUserShared2Fill className="md:hidden text-[1.75rem]" />
              </NavLink>
            </div>
            {/* menu drawer */}
            <div className="lg:hidden">
              <div
                className="mx-2 text-[2.75rem] cursor-pointer"
                onClick={() => {
                  mainNavDrawer();
                  setMenuIconToggler(!menuIconToggler)
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
    </header>
  );
};

export default FinalHeader;
