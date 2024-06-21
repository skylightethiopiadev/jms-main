import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CorporateLand = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Land Acquisition ",
        text:
          "We provide extensive legal assistance to streamline land acquisition processes in urban, rural, or industrial areas. Our services guide clients through the complex procedures involved in acquiring land."
      },
      {
        title: "Preparation of Legal Documents",
        text:
          "We support clients seeking to acquire land in Ethiopia by preparing all the legal documents necessary for the process."
      },
      {
        title: "Legal Due Diligence",
        text:
          "We conduct comprehensive due diligence for clients engaged in land accusation or transfer. This involves examining property titles, conducting surveys, and assessing zoning and land use regulations to ensure compliance and minimize risks."
      },
      {
        title: "Government Relations and Advocacy",
        text:
          "We advocate for clients' interests before government agencies, regulatory authorities involved in land-related matters."
      },
      {
        title: "Drafting and Reviewing Contracts",
        text:
          "We offer a comprehensive legal support in drafting and reviewing contracts such as lease agreements and ensure that contracts accurately reflect the parties' intentions, protect their interests, and comply with legal requirements."
      },
      {
        title: "Legal Consultation",
        text:
          "We offer a comprehensive legal consultation in relation to land and land related issues focusing both on the federal and regional government legislation."
      },
      {
        title: "Regulatory Compliance",
        text:
          "We offer support for clients navigate complex regulatory frameworks governing land use, acquisition, transfer, including environmental regulations, building codes, and land development ordinances. We ensure compliance with legal requirements to avoid costly penalties and delays."
      },
      {
        title: "Legal Representation",
        text:
          "In case of legal disputes, we represent clients in negotiations, mediation, arbitration, or litigation proceedings."
      },
    ],
    servicesIndex: 0,
    subServicesIndex: -1
  });

  const [successionWays, setSuccessionWays] = useState(0);

  

  return (
    <div className="text-[1.05rem]">
      <div>
        {/* 1 */}
        <div className="relative">
          {/* bg container */}
          <div className="relative lg:absolute lg:inset-0 -z-30 flex">
            {/* left */}
            <div className="w-0 lg:w-[50%] bg-white"></div>
            {/* right */}
            <div className="w-full lg:w-[50%] flex relative">
              {/* right-left */}
              <div className="absolute left-0 top-0 h-full z-10 w-0 lg:w-[65%] bg-gradient-to-r from-white to-transparent"></div>
              {/* right-right */}
              <div className="w-[100%] overflow-hidden relative z-0">
                <div className="w-full h-[150px] sm:h-[210px] lg:h-full overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://roysville.group/wp-content/uploads/2020/09/about-1024x819.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* content container */}
          <div className="static-padding-x py-10 md:py-16 relative z-30">
            {/* content */}
            <div className="flex">
              {/* left */}
              <div className="w-full lg:w-[50%]">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Land ownership</p>
                </div>

                {/* normal text */}
                <div className="my-5">
                  <p>
                    According to the Ethiopian Constitution, all natural
                    resources, including land, are collectively owned by the
                    state and its citizens. As a result, private land ownership
                    does not exist in Ethiopia. However, legal provisions allow
                    for land acquisition specifically for investment purposes.
                  </p>
                </div>
              </div>
              {/* right */}
              <div className="w-0 lg:w-[50%] bg-transparent"></div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col md:flex-row">
              <div className="w-[100%] md:w-[50%] relative">
                <div className="md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://www.shutterstock.com/image-photo/law-theme-mallet-judge-enforcement-600nw-1938588952.jpg"
                    alt=""
                  />
                </div>
              </div>

              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Modalities of Land Acquisition</p>
                </div>
                {/* normal text */}
                <div className="">
                  <p>
                    Acquiring land in Ethiopia, whether for investment or other
                    purposes, is a complex process due to varying procedures
                    based on land type (urban land, rural land, or land in
                    industrial parks). Therefore, investors must navigate
                    changing government regulations, administrative decisions,
                    and interactions with different authorities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 333 */}
        {/* 10 */}
        <div className="my-12 md:my-36 bg-neutral-50 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase py-3">
                  <p>Land acquisition mechanisms includes:</p>
                </div>

                {/* first  */}
                <div className="bg-white shadow-md p-3 mb-10">
                  <header className="flex items-center justify-between py-1">
                    <div>
                      <h3 className="font-semibold">
                        Acquiring Land through Public Auction: Lease Tender
                      </h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-300 cursor-pointer"
                        onClick={() => {
                          setSuccessionWays(0);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`text-2xl cursor-pointer transition-transform ease-in-out duration-300 ${
                            successionWays === 0 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>
                  <div
                    className={`overflow-hidden ${
                      successionWays === 0 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="mt-1 py-1 border-t border-gray-300">
                      <p>
                        The Urban Land Lease Proclamation outlines a structured
                        system for acquiring urban land through public auctions.
                        This mechanism ensures equitable access for private
                        investors, who secure land rights through competitive
                        lease bidding, thereby contributing to the dynamism of
                        urban development initiatives.
                      </p>
                    </div>
                  </div>
                </div>

                {/* second  */}
                <div className="bg-white shadow-md p-3 mb-10">
                  <header className="flex items-center justify-between py-1">
                    <div>
                      <h3 className="font-semibold">
                        Acquiring Land through Government Allotment
                      </h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-400 cursor-pointer"
                        onClick={() => {
                          setSuccessionWays(1);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`text-2xl cursor-pointer transition-transform ease-in-out duration-300 ${
                            successionWays === 1 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>
                  <div
                    className={`overflow-hidden ${
                      successionWays === 1 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="mt-1 py-1 border-t border-gray-300">
                      <p>
                        In instances where special projects demand expedited
                        access to urban land, the government may allocate
                        parcels through a process known as government allotment.
                        This mechanism, subject to regional cabinet decisions,
                        facilitates strategic investments in vital sectors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* third  */}
                <div className="bg-white shadow-md p-3 mb-10">
                  <header className="flex items-center justify-between py-1">
                    <div>
                      <h3 className="font-semibold">
                        Acquiring Investment Land through Rental System
                      </h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-400 cursor-pointer"
                        onClick={() => {
                          setSuccessionWays(2);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`text-2xl cursor-pointer transition-transform ease-in-out duration-300 ${
                            successionWays === 2 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>
                  <div
                    className={`overflow-hidden ${
                      successionWays === 2 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="mt-1 py-1 border-t border-gray-300">
                      <p>
                        Venturing into rural landscapes necessitates engaging
                        with the Rural Land Administration Proclamation. This
                        legislation accommodates various land-use arrangements,
                        including rental agreements with private landholders.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>Facilitating Land Use Rights for Foreign Investors</p>
                </div>
                {/* normal text */}
                <div className="my-5">
                  <p>
                    Foreign investors aiming to benefit from Ethiopia’s
                    investment prospects must navigate the regulatory landscape
                    overseen by various government bodies, including federal and
                    regional investment commissions. The Ethiopian Investment
                    Commission plays a central role in land acquisition for
                    investors, while different regional governments and
                    stakeholders are also involved. Procedures and responsible
                    authorities differ across regions.
                  </p>
                </div>
              </div>

              <div className="w-[100%] md:w-[50%] relative">
                <div className="md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden">
                  <img
                    className="w-full h-full object-center object-cover"
                    src="https://onecms-res.cloudinary.com/image/upload/s--uuxrzmSO--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/singapore-court-hearings-safe-distancing_0.jpg?itok=bN5ksaZq"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="my-12 md:my-36 bg-neutral-white py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase">
                  <p>
                    Overcoming Administrative Complexities: professional
                    Guidance for Investors Securing Land in Ethiopia
                  </p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <div>
                    <p>
                      Investors face challenges when securing land in Ethiopia
                      due to unique legal frameworks, bureaucratic decisions,
                      administrative complexities, compensation issues, and
                      legal disputes. The acquisition process involves
                      navigating bureaucracy, understanding local laws, and
                      obtaining community consent. Transparency concerns and
                      competition for available land further complicate matters.
                      To succeed, investors should seek legal guidance, conduct
                      thorough due diligence, and engage patiently with local
                      authorities and communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 21 */}
        <div className="py-5 md:py-16 bg-neutral-800 text-white">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
              {/* right */}
              <div className="flex-grow">
                <div className="text-center text-[.85rem] md:text-[1.5rem] font-semibold">
                  <p>
                  At Makuta Law Firm, our seasoned experts on land laws are dedicated to delivering customized legal solutions that prioritize your business or personal goals. We ensure that our services are aligned with your unique needs and aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 22 */}
        <div className="my-10 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            {/* header */}
            <div>
              {/* bold */}
              <div className="header-level-3 mb-2 uppercase">
                <p>Our legal services</p>
              </div>
            </div>
            {/* accordion */}
            <div>
              {/* first accordion */}
              {services?.servicesList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="p-1 md:p-5 rounded-sm bg-white shadow-md mt-5 text-[.85rem] md:text-[1.05rem]"
                  >
                    <header className="flex items-center justify-between py-2">
                      <div>
                        <p
                          className="font-bold w-max cursor-pointer hover:underline"
                          onClick={() => {
                            setServices(prev => {
                              return {
                                ...prev,
                                servicesIndex: index
                              };
                            });
                          }}
                        >
                          {item.title}
                        </p>
                      </div>
                      <div>
                        <div
                          className="w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center transition-colors ease-in-out duration-300 hover:bg-gray-200 cursor-pointer"
                          onClick={() => {
                            setServices(prev => {
                              return {
                                ...prev,
                                servicesIndex: index
                              };
                            });
                          }}
                        >
                          <MdKeyboardArrowDown
                            className={`text-2xl transition-transform ease-in-out duration-300 ${
                              services?.servicesIndex === index
                                ? "-rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </div>
                      </div>
                    </header>

                    <div
                      className={`overflow-hidden ${
                        services?.servicesIndex === index ? "h-auto" : "h-0"
                      }`}
                    >
                      <div className="pt-3 border-t border-gray-200">
                        <div>
                          <p>{item.text}</p>
                        </div>

                        {item?.subList?.length > 0 ? (
                          <div className="mx-5">
                            {item?.subList?.map((subItem, subIndex) => {
                              return (
                                <div className="my-1.5">
                                  <header className="flex items-center justify-between">
                                    <div className="font-bold text-sm text-gray-800">
                                      <span>{subItem?.title}</span>
                                    </div>
                                    <div>
                                      <div
                                        className="w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center text-lg bg-gray-100 cursor-pointer hover:bg-gray-200"
                                        onClick={() => {
                                          console.log(subIndex);
                                          setServices(prev => {
                                            return {
                                              ...prev,
                                              subServicesIndex:
                                                prev?.subServicesIndex ===
                                                subIndex
                                                  ? -1
                                                  : subIndex
                                            };
                                          });
                                        }}
                                      >
                                        <IoMdAdd
                                          className={`transition-transform ease-in-out duration-300 ${
                                            services?.subServicesIndex ===
                                            subIndex
                                              ? "rotate-45"
                                              : "rotate-0"
                                          }`}
                                        />
                                      </div>
                                    </div>
                                  </header>
                                  <div>
                                    <div
                                      className={`text-sm italic text-gray-700 py-1 border-b border-gray-100 overflow-hidden ${
                                        services?.subServicesIndex === subIndex
                                          ? "h-max"
                                          : "h-0"
                                      }`}
                                    >
                                      <p>{subItem?.text}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateLand;
