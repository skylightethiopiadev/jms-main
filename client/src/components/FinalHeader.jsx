import { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { IoChevronDown } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";

const FinalHeader = () => {
  // local states
  const [isPhone, setIsPhone] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [nav, setNav] = useState(null);

  // nav list
  const mainNavList = [
    {
      id: "civil",
      headerText: "CIVIL",
      subNavList: [
        {
          subId: "contract",
          subHeaderText: "CONTRACT",
          subSubNavList: [
            {
              subSubHeaderText: "CONTRACT OF SPECIAL MOVABLES (VEHICLES)",
              path: "#",
            },
            {
              subSubHeaderText: "CONTRACT OF SPECIAL MOVABLES (VEHICLES)",
              path: "#",
            },
            {
              subSubHeaderText: "SALE OR LEASE OF BUILDINGS",
              path: "#",
            },
            {
              subSubHeaderText: "CONSTRUCTIONS",
              path: "#",
            },
            {
              subSubHeaderText: "SUPPLY OF GOODS AND SERVICES",
              path: "#",
            },
            {
              subSubHeaderText: "RENTAL OF MACHINERIES AND VEHICLES",
              path: "#",
            },
            {
              subSubHeaderText: "LOAN",
              path: "#",
            },
          ],
        },
        {
          subId: "succession",
          subHeaderText: "SUCCESSION",
          path: "#",
        },
        {
          subId: "family",
          subHeaderText: "FAMILY",
          subSubNavList: [
            {
              subSubHeaderText: "MAINTENANCE",
              path: "#",
            },
            {
              subSubHeaderText: "ADOPTION",
              path: "#",
            },
            {
              subSubHeaderText: "DIVORCE",
              path: "#",
            },
          ],
        },
        {
          subId: "employment",
          subHeaderText: "EMPLOYMENT",
          path: "#",
        },
        {
          subId: "property",
          subHeaderText: "PROPERTY",
          path: "#",
        },
      ],
    },
    {
      id: "criminal",
      headerText: "CRIMINAL",
      subNavList: [
        {
          subId: "ordinary crime",
          subHeaderText: "ORDINARY CRIME",
          path: "#",
        },
        {
          subId: "corruption",
          subHeaderText: "CORRUPTION",
          path: "#",
        },
        {
          subId: "money laundering (financial fraud)",
          subHeaderText: "MONEY LAUNDERING (FINANCIAL FRAUD)",
          path: "#",
        },
        {
          subId: "tax and customs related crimes",
          subHeaderText: "TAX AND CUSTOMS RELATED CRIMES",
          path: "#",
        },
      ],
    },
    {
      id: "commercial / corporate",
      headerText: "COMMERCIAL / CORPORATE",
      subNavList: [
        {
          subId: "international trade and investment",
          subHeaderText: "INTERNATIONAL TRADE AND INVESTMENT",
          path: "#",
        },
        {
          subId: "tax",
          subHeaderText: "TAX",
          path: "#",
        },
        {
          subId: "customs",
          subHeaderText: "CUSTOMS",
          path: "#",
        },
        {
          subId: "contract",
          subHeaderText: "CONTRACT",
          subSubNavList: [
            {
              subSubHeaderText: "CONTRACT OF SPECIAL MOVABLES (VEHICLES)",
              path: "#",
            },
            {
              subSubHeaderText: "CONTRACT OF SPECIAL MOVABLES (VEHICLES)",
              path: "#",
            },
            {
              subSubHeaderText: "SALE OR LEASE OF BUILDINGS",
              path: "#",
            },
            {
              subSubHeaderText: "CONSTRUCTIONS",
              path: "#",
            },
            {
              subSubHeaderText: "SUPPLY OF GOODS AND SERVICES",
              path: "#",
            },
            {
              subSubHeaderText: "RENTAL OF MACHINERIES AND VEHICLES",
              path: "#",
            },
            {
              subSubHeaderText: "LOAN",
              path: "#",
            },
          ],
        },
        {
          subId: "intellectual property",
          subHeaderText: "INTELLECTUAL PROPERTY",
          subSubNavList: [
            {
              subSubHeaderText: "COPYRIGHT",
              path: "#",
            },
            {
              subSubHeaderText: "PATENT",
              path: "#",
            },
            {
              subSubHeaderText: "TRADE MARK",
              path: "#",
            },
            {
              subSubHeaderText: "UTILITIES",
              path: "#",
            },
            {
              subSubHeaderText: "GEOGRAPHICAL INDICATIONS",
              path: "#",
            },
            {
              subSubHeaderText: "VARIETIES AND PLANT BREEDS",
              path: "#",
            },
          ],
        },
        {
          subId: "financial sector",
          subHeaderText: " FINANCIAL SECTOR",
          subSubNavList: [
            {
              subSubHeaderText: "BANKING",
              path: "#",
            },
            {
              subSubHeaderText: "INSURANCE",
              path: "#",
            },
            {
              subSubHeaderText: "CAPITAL",
              path: "#",
            },
          ],
        },
        {
          subId: "corporate",
          subHeaderText: " CORPORATE",
          subSubNavList: [
            {
              subSubHeaderText: "INCORPORATION",
              path: "#",
            },
            {
              subSubHeaderText:
                "BANKRUPTCY (SCHEME OF ARRANGEMENT OR DISSOLUTION",
              path: "#",
            },
            {
              subSubHeaderText: "MERGER",
              path: "#",
            },
            {
              subSubHeaderText: "ACQUISITION",
              path: "#",
            },
            {
              subSubHeaderText: "REORGANIZATION",
              path: "#",
            },
          ],
        },
        {
          subId: "real estate, property and conveyance",
          subHeaderText: "REAL ESTATE, PROPERTY AND CONVEYANCE",
          path: "#",
        },
        {
          subId: "joint venture",
          subHeaderText: "JOINT VENTURE",
          path: "#",
        },
        {
          subId: "torts",
          subHeaderText: "TORTS",
          path: "#",
        },
      ],
    },
    {
      id: "other services",
      headerText: "OTHER SERVICES",
      subNavList: [
        {
          subId: "service one",
          subHeaderText: "SERVICE ONE",
          path: "#",
        },
        {
          subId: "service two",
          subHeaderText: "SERVICE TWO",
          path: "#",
        },
        {
          subId: "service three",
          subHeaderText: "SERVICE THREE",
          path: "#",
        },
        {
          subId: "service four",
          subHeaderText: "SERVICE FOUR",
          path: "#",
        },
      ],
    },
  ];

  return (
    <header className="fixed left-0 top-0 w-full shadow-md z-[1000] bg-white">
      <div className=" px-[5%] flex h-full items-center justify-between gap-[5%]">
        <div>
          <h3 className="text-2xl font-bold uppercase cursor-pointer">
            Makutta
          </h3>
        </div>
        {/* right container */}
        <div className="flex items-center justify-center flex-grow relative">
          {/* nav container */}
          <div className="h-full flex-grow w-full">
            <ul className="flex items-center justify-center gap-1 h-full">
              {mainNavList.map((mainNav, index) => (
                <li
                  key={index}
                  className="h-full flex items-center justify-center relative"
                >
                  <NavLink
                    className={`py-7 px-3 h-full relative text-[.875rem] font-[600] flex items-center justify-between gap-3 after:absolute after:left-0 after:bottom-0 after:h-[7px] after:bg-gray-700 after:transition-all after:ease-in-out after:duration-300 hover:after:w-full transition-all ease-in-out duration-300 hover:text-gray-500 whitespace-nowrap  ${
                      mainNav.id === nav?.id ? "after:w-full" : "after:w-0"
                    }`}
                    onClick={() => {
                      if (mainNav.id === nav?.id) {
                        setNav(null);
                      } else {
                        setNav(mainNav);
                      }
                    }}
                  >
                    <span>{mainNav.headerText.split("/")[0]}</span>
                    <IoChevronDown
                      className={`text-xl transition-all ease-in-out duration-300 ${
                        mainNav.id === nav?.id ? "rotate-[-180deg]" : "rotate-0"
                      }`}
                    />
                  </NavLink>
                  {nav?.id === "civil" ||
                  nav?.id === "commercial / corporate" ? (
                    <div
                      className={`fixed top-[12.5vh] right-0 w-full overflow-y-auto h-[500px] bg-white px-[100px] py-[24px] shadow-lg z-[90] transition-all ease-in-out duration-300 ${
                        nav?.id === mainNav.id
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }`}
                      onClick={() => {
                        // console.log(nav);
                      }}
                    >
                      <div className="grid grid-cols-1">
                        {nav?.subNavList.map((subNav, index) => (
                          <div key={index}>
                            {subNav.subSubNavList ? (
                              <div className="my-1">
                                <h3 className="font-semibold">{subNav.subHeaderText}</h3>
                                <ul className="ml-[10%]">
                                  {
                                    subNav.subSubNavList.map((item,index)=>(

                                  <li key={index}>
                                    <NavLink onClick={()=>{
                                      console.log(item)
                                    }}>{item.subSubHeaderText}</NavLink>
                                  </li>
                                    ))
                                  }
                                </ul>
                              </div>
                            ) : (
                              <div className="my-1">
                                <NavLink>{subNav.subHeaderText}</NavLink>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : nav?.id === mainNav.id ? (
                    <div
                      className={`absolute left-0 top-[100%] bg-white z-[90] rounded-sm shadow-lg transition-all ease-in-out duration-300  w-max p-[24px] px-[42px] ${
                        nav?.id === mainNav.id
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-00"
                      }`}
                    >
                      <ul>
                        {nav?.subNavList.map((subNav, index) => (
                          <li
                            key={index}
                            className="font-normal my-2 text-[.85rem]"
                          >
                            <NavLink>{subNav.subHeaderText}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full flex items-center justify-end gap-[3%]">
            <div
              className={`relative h-full py-5 after:absolute after:left-0 after:bottom-0 after:h-[7px] after:bg-gray-700 after:transition-all after:ease-in-out after:duration-300 ${
                isPhone ? "after:w-full" : "after:w-0"
              }`}
            >
              <div
                className="flex items-center justify-center gap-1 text-xl rounded-full border-2 border-black px-5 py-2 cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white"
                onClick={() => {
                  setIsPhone(!isPhone);
                }}
              >
                <LuPhone />
                <IoChevronDown
                  className={`transition-rotate ease-in-out duration-300 ${
                    isPhone ? "rotate-[-180deg]" : "rotate-0"
                  }`}
                />
              </div>
              <div
                className={`absolute left-0 top-[100%] p-[20px] w-max bg-white shadow-lg z-[150] text-[.95rem] transition-all ease-in-out duration-300 ${
                  isPhone ? "scale-1 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                <div className="font-bold">
                  <p>Talk to LegalZoom</p>
                  <p>(855) 787-1922</p>
                </div>
                <div>
                  <h3 className="my-3 font-bold">Customer Care Hours</h3>
                </div>
                <div>
                  <div>Mon-Fri 5 a.m. - 7 p.m. PT</div>
                  <div>Weekends 7 a.m. -4 p.m. PT</div>
                </div>
              </div>
            </div>
            <div
              className="p-[.4rem] rounded-full border-2 border-black cursor-pointer transition-all ease-in-out duration-300 hover:border-gray-500 hover:bg-gray-500 hover:text-white"
              onClick={() => {
                setIsSearch(!isSearch);
              }}
            >
              <RiSearch2Line className="text-2xl" />
            </div>
            <div className="flex items-center justify-center rounded-full px-7 py-[.575rem] bg-black text-white cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-500">
              <span className="font-semibold">sign up</span>
            </div>
          </div>
          {/* search bar */}
          {isSearch ? (
            <div className="absolute left-0 top-0 w-full h-full bg-white px-[10%] flex items-center justify-center">
              <div className="flex-grow flex items-center justify-center">
                <div className="flex-grow flex items-center bg-white rounded-full border-2 border-black px-1">
                  <RiSearch2Line className="text-3xl mr-1" />
                  <input
                    type="text"
                    placeholder="search"
                    className="w-full focus:outline-none focus:ring-0 bg-transparent border-none"
                  />
                </div>
                <div>
                  <button
                    className="text-3xl mx-2"
                    onClick={() => {
                      setIsSearch(false);
                    }}
                  >
                    <MdOutlineClose />
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
