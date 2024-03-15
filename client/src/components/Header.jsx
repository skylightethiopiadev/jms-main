import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// site logo image
import mainSiteLogo from "../assets/images/site-logo/final-logo.png";

// icons
import { FiPhone } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  // local state
  const [isHome, setIsHome] = useState(true);
  const [isPhone, setIsPhone] = useState(false);
  const [isBlogging, setIsBlogging] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isServices, setIsServices] = useState(false);
  const [isTutorial, setIsTutorial] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isOurTeam, setIsOurTeam] = useState(false);
  const [isContactUs, setIsContactUs] = useState(false);

  const [isMainPopupNavOpen, setIsMainPopupNavOpen] = useState(false);

  return (
    <header className="p1-3">
      {/* top header */}
      <div className=" py-3 border-b border-gray-200 px-[1%] flex items-center justify-between relative">
        {/* left */}
        <div></div>
        {/* center */}
        <div className="flex items-center justify-center">
          {/* site logo */}
          <div>
            <NavLink to={"/"}>
              <img
                src={mainSiteLogo}
                alt="site logo"
                className="w-[64px] h-[64px]"
              />
            </NavLink>
          </div>
        </div>
        {/* right */}
        <div className="flex items-center justify-end gap-x-3">
          {/* call */}
          <div className="relative">
            <button
              className="flex items-center gap-x-1 border-4 border-gray-900 rounded-full py-1 px-4 transition-all ease-in-out duration-150 hover:bg-gray-600 hover:border-gray-600 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                setIsPhone(!isPhone);
              }}
            >
              <FiPhone className="text-2xl" />
              {isPhone ? (
                <IoIosArrowUp className="text-lg" />
              ) : (
                <IoIosArrowDown className="text-lg" />
              )}
            </button>
            {/* call detail */}
            {isPhone ? (
              <motion.div
                initial={{ scale: 0.5, opacity: 0.75 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="absolute left-0 top-[160%] z-[1400] bg-white w-max p-5 shadow-lg"
              >
                <div className="font-semibold">
                  <h3>Talk To Legal Zoom</h3>
                  <h3>(855) 787-1922</h3>
                </div>
                <h3 className="font-semibold my-3">Customer Care hours</h3>
                <div className="flex flex-col">
                  <span>Mon–Fri 5 a.m.–7 p.m. PT</span>
                  <span>Weekends 7 a.m.–4 p.m. PT</span>
                </div>
              </motion.div>
            ) : (
              <></>
            )}
          </div>
          {/* search */}
          <div
            className="border-4 rounded-full border-gray-900 p-1 cursor-pointer transition-all ease-in-out duration-150 hover:bg-gray-600 hover:border-gray-600 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsSearch(true);
              setIsPhone(false);
            }}
          >
            <FiSearch className="text-2xl" />
          </div>
          {/* singup */}
          <div>
            <NavLink
              to={"/login"}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className={
                "px-5 py-2 text-lg text-white bg-black rounded-full font-semibold transition-all ease-in-out duration-150 hover:bg-gray-600"
              }
            >
              sign in
            </NavLink>
          </div>
        </div>
        {/* search bar container */}
        {isSearch ? (
          <div className="absolute left-0 bottom-0 h-full z-30 bg-white w-full flex items-center justify-end pr-[10%]">
            <div className="flex items-center justify-center">
              {/* search bar */}
              <div className="flex items-center justify-center bg-white rounded-full border-4 py-2 border-gray-900">
                <FiSearch className="text-xl ml-1" />
                <input
                  type="text"
                  placeholder="search"
                  className="focus:outline-none focus:ring-0 bg-transparent border-none h-[20px] sm:w-[450px]"
                />
              </div>
              {/* search bar close */}
              <div>
                <button
                  className="mx-1 text-2xl"
                  onClick={() => {
                    setIsSearch(false);
                    setIsPhone(false);
                  }}
                >
                  <GrClose />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* bottom header */}
      <div className="py-3 border-b border-gray-200 px-[1%] flex items-center justify-between relative">
        {/* left */}
        <div>{/* left container */}</div>
        {/* actual nav */}
        <div>
          <ul className="hidden md:flex items-center justify-center gap-x-5 uppercase">
            <li>
              <NavLink
                className={`${isHome ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServices(false);
                  setIsTutorial(false);
                  setIsPortfolio(false);
                  setIsOurTeam(false);
                  setIsBlogging(false);
                  setIsContactUs(false);
                  setIsHome(true);
                }}
              >
                Home
              </NavLink>
            </li>
            <li
              className={`flex items-center cursor-pointer gap-x-1 relative ${
                isServices ? "font-bold" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsHome(false);
                setIsBlogging(false);
                setIsContactUs(false);
                setIsTutorial(false);
                setIsPortfolio(false);
                setIsOurTeam(false);
                setIsServices(!isServices);
              }}
            >
              <span>Services</span>
              {isServices ? (
                <IoIosArrowUp className="home-nav-list-item-icon" />
              ) : (
                <IoIosArrowDown className="home-nav-list-item-icon" />
              )}
              {/* pop nav */}
              {isServices ? (
                <motion.ul
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="home-submenu-popup-ul"
                >
                  <li className="home-nav-list-item">
                    <NavLink>ServiceSubMenu-1</NavLink>
                  </li>
                  <li className="home-nav-list-item">
                    <NavLink>ServiceSubMenu-2</NavLink>
                  </li>
                  <li className="home-nav-list-item">
                    <NavLink>ServiceSubMenu-3</NavLink>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
            <li>
              <NavLink
                className={`${isBlogging ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServices(false);
                  setIsTutorial(false);
                  setIsPortfolio(false);
                  setIsOurTeam(false);
                  setIsHome(false);
                  setIsContactUs(false);
                  setIsBlogging(true);
                }}
              >
                Blogging
              </NavLink>
            </li>
            <li
              className={`flex items-center cursor-pointer relative ${
                isTutorial ? "font-bold" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsHome(false);
                setIsBlogging(false);
                setIsContactUs(false);
                setIsServices(false);
                setIsPortfolio(false);
                setIsOurTeam(false);
                setIsTutorial(!isTutorial);
              }}
            >
              <span>Tutorial</span>
              {isTutorial ? (
                <IoIosArrowUp className="home-nav-list-item-icon" />
              ) : (
                <IoIosArrowDown className="home-nav-list-item-icon" />
              )}
              {/* pop nav */}
              {isTutorial ? (
                <motion.ul
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="home-submenu-popup-ul"
                >
                  <li className="home-nav-list-item">
                    <NavLink>TutorialSubMenu-1</NavLink>
                  </li>
                  <li className="home-nav-list-item">
                    <NavLink>TutorialSubMenu-2</NavLink>
                  </li>
                  <li className="home-nav-list-item">
                    <NavLink>TutorialSubMenu-3</NavLink>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
            <li
              className={`flex items-center cursor-pointer relative ${
                isPortfolio ? "font-bold" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsServices(false);
                setIsTutorial(false);
                setIsOurTeam(false);
                setIsHome(false);
                setIsBlogging(false);
                setIsContactUs(false);
                setIsPortfolio(!isPortfolio);
              }}
            >
              <span>Portfolio</span>
              {isPortfolio ? (
                <IoIosArrowUp className="home-nav-list-item-icon" />
              ) : (
                <IoIosArrowDown className="home-nav-list-item-icon" />
              )}
              {/* pop nav */}
              {isPortfolio ? (
                <motion.ul
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="home-submenu-popup-ul"
                >
                  <li className="home-nav-list-item">
                    <NavLink>PortfolioSubMenu-1</NavLink>
                  </li>
                  <li className="home-nav-list-item">
                    <NavLink>PortfolioSubMenu-2</NavLink>
                  </li>
                  <li className="home-nav-list-item">
                    <NavLink>PortfolioSubMenu-3</NavLink>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
            <li
              className={`flex items-center cursor-pointer relative ${
                isOurTeam ? "font-bold" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsServices(false);
                setIsTutorial(false);
                setIsPortfolio(false);
                setIsHome(false);
                setIsBlogging(false);
                setIsContactUs(false);
                setIsOurTeam(!isOurTeam);
              }}
            >
              <span>Our Team</span>
              {isOurTeam ? (
                <IoIosArrowUp className="home-nav-list-item-icon" />
              ) : (
                <IoIosArrowDown className="home-nav-list-item-icon" />
              )}
              {/* pop nav */}
              {isOurTeam ? (
                <motion.ul
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="home-submenu-popup-ul"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <li className="my-2">
                    <NavLink
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      OurTeamSubMenu-1
                    </NavLink>
                  </li>
                  <li className="home-nav-list-item">
                    <NavLink
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      OurTeamSubMenu-2
                    </NavLink>
                  </li>
                  <li className="home-nav-list-item">
                    <NavLink
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      OurTeamSubMenu-3
                    </NavLink>
                  </li>
                </motion.ul>
              ) : (
                <></>
              )}
            </li>
            <li>
              <NavLink
                className={`${isContactUs ? "font-bold" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsHome(false);
                  setIsBlogging(false);
                  setIsServices(false);
                  setIsTutorial(false);
                  setIsPortfolio(false);
                  setIsOurTeam(false);
                  setIsContactUs(true);
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* right */}
        <div>
          {/* main menu icon */}
          <button
            className="text-3xl md:hidden"
            onClick={() => {
              setIsMainPopupNavOpen(!isMainPopupNavOpen);
            }}
          >
            {isMainPopupNavOpen ? <IoMdClose /> : <AiOutlineMenu />}
          </button>
        </div>
        {/* pop up nav */}
        {isMainPopupNavOpen ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute bg-white z-[1300] h-[80vh] shadow-lg px-[3%] pt-1 right-0 top-[100%]"
          >
            <ul>
              <li className="main-nav-list-item">
                <NavLink
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServices(false);
                    setIsTutorial(false);
                    setIsPortfolio(false);
                    setIsOurTeam(false);
                    setIsBlogging(false);
                    setIsContactUs(false);
                    setIsHome(true);
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li className="main-nav-list-item">
                <div
                  className="main-nav-list-header"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsHome(false);
                    setIsBlogging(false);
                    setIsContactUs(false);
                    setIsTutorial(false);
                    setIsPortfolio(false);
                    setIsOurTeam(false);
                    setIsServices(!isServices);
                  }}
                >
                  <span>Services</span>
                  {isServices ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isServices ? (
                  <ul className="second-order-ul">
                    <li>
                      <NavLink>ss1</NavLink>
                    </li>
                    <li>
                      <NavLink>ss2</NavLink>
                    </li>
                    <li>
                      <NavLink>ss3</NavLink>
                    </li>
                    <li>
                      <NavLink>ss4</NavLink>
                    </li>
                    <li>
                      <NavLink>ss5</NavLink>
                    </li>
                  </ul>
                ) : (
                  <></>
                )}
              </li>
              <li className="main-nav-list-item">
                <NavLink
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServices(false);
                    setIsTutorial(false);
                    setIsPortfolio(false);
                    setIsOurTeam(false);
                    setIsHome(false);
                    setIsContactUs(false);
                    setIsBlogging(true);
                  }}
                >
                  Blogging
                </NavLink>
              </li>
              <li className="main-nav-list-item">
                <div
                  className="main-nav-list-header"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsHome(false);
                    setIsBlogging(false);
                    setIsContactUs(false);
                    setIsServices(false);
                    setIsPortfolio(false);
                    setIsOurTeam(false);
                    setIsTutorial(!isTutorial);
                  }}
                >
                  <span>Tutorial</span>
                  {isTutorial ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isTutorial ? (
                  <ul className="second-order-ul">
                    <li>
                      <NavLink>ts1</NavLink>
                    </li>
                    <li>
                      <NavLink>ts2</NavLink>
                    </li>
                    <li>
                      <NavLink>ts3</NavLink>
                    </li>
                  </ul>
                ) : (
                  <></>
                )}
              </li>
              <li className="main-nav-list-item">
                <div
                  className="main-nav-list-header"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServices(false);
                    setIsTutorial(false);
                    setIsOurTeam(false);
                    setIsHome(false);
                    setIsBlogging(false);
                    setIsContactUs(false);
                    setIsPortfolio(!isPortfolio);
                  }}
                >
                  <span>Portfolio</span>
                  {isPortfolio ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isPortfolio ? (
                  <ul className="second-order-ul">
                    <li>
                      <NavLink>ps1</NavLink>
                    </li>
                    <li>
                      <NavLink>ps2</NavLink>
                    </li>
                  </ul>
                ) : (
                  <></>
                )}
              </li>
              <li className="main-nav-list-item">
                <div
                  className="main-nav-list-header"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsServices(false);
                    setIsTutorial(false);
                    setIsPortfolio(false);
                    setIsHome(false);
                    setIsBlogging(false);
                    setIsContactUs(false);
                    setIsOurTeam(!isOurTeam);
                  }}
                >
                  <span>Our Team</span>
                  {isOurTeam ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                {isOurTeam ? (
                  <ul className="second-order-ul">
                    <li>
                      <NavLink>os1</NavLink>
                    </li>
                    <li>
                      <NavLink>os2</NavLink>
                    </li>
                    <li>
                      <NavLink>os3</NavLink>
                    </li>
                    <li>
                      <NavLink>os4</NavLink>
                    </li>
                    <li>
                      <NavLink>os5</NavLink>
                    </li>
                  </ul>
                ) : (
                  <></>
                )}
              </li>
              <li className="main-nav-list-item">
                <NavLink
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsHome(false);
                    setIsBlogging(false);
                    setIsServices(false);
                    setIsTutorial(false);
                    setIsPortfolio(false);
                    setIsOurTeam(false);
                    setIsContactUs(true);
                  }}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </motion.div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
