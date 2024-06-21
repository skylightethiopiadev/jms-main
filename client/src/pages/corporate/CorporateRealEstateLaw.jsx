import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CorporateRealEstateLaw = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Drafting and Reviewing Contracts",
        text:
          "Real estate contracts encompass a variety of matters, including construction, employment, and the transfer of property rights. Therefore, we assist our clients by meticulously reviewing and drafting construction agreements to ensure their interests are safeguarded and legal standards are met."
      },
      {
        title: "Legal Consultation",
        text:
          "Our services encompass a full spectrum of legal counsel covering the purchase, development, leasing, financing, regulatory adherence, rights allocation, and sale of real estate properties. We ensure our clients receive thorough guidance at every stage of their real estate endeavors."
      },
      {
        title: "Due Diligence",
        text:
          "Represent employers or employee unions during collective bargaining negotiations. Draft collective agreements and handle labor disputes."
      },
      {
        title: "Workplace Policies and Manuals",
        text:
          "We undertake meticulous legal reviews to evaluate potential risks tied to a property. This includes scrutinizing property histories, local zoning laws, and environmental considerations to ensure a comprehensive risk assessment."
      },
      {
        title: "Legal Representation",
        text:
          "We engage in the resolution of conflicts pertaining to property boundary, usage rights, or claims of ownership. Additionally, we advocate for our clients in judicial proceedings concerning real estate disputes."
      },
      {
        title: "Investment Guidance",
        text:
          "Providing counsel to real estate investors. "
      },
    ],
    servicesIndex: 0,
    subServicesIndex: -1
  });

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
                  <p>
                    Rapid Urbanization and Growth in Ethiopia's Real Estate
                    Sector
                  </p>
                </div>

                {/* normal text */}
                <div className="my-5">
                  <p>
                    As urbanization continues to increase and cities become more
                    modernized, the real estate sector in Ethiopia has
                    experienced significant growth.
                  </p>
                </div>
              </div>
              {/* right */}
              <div className="w-0 lg:w-[50%] bg-transparent"></div>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="relative">
          {/* content container */}
          <div className="static-padding-x py-10 md:py-16 relative z-30">
            {/* content */}
            <div>
              <div className="text-justify p-5 bg-white rounded-md shadow-2xl mx-24">
                <p>
                  With the rapid population growth, it has become essential to
                  turn to real estate for the proper utilization of urban land
                  and the construction of housing to accommodate a large number
                  of people in limited spaces. Despite the sector's substantial
                  growth over the past decade, it remains one of the most
                  under-regulated sectors, leading to various disputes.
                </p>
              </div>
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
                  <p>
                    Regulating Land Use Rights: Leasehold Agreements and
                    Responsibilities in Ethiopia
                  </p>
                </div>
                {/* normal text */}
                <div className="">
                  <p>
                    One of the key legal framework of real estate in Ethiopia is
                    the Land Proclamations which governs land ownership and
                    tenure systems in the country. According to this laws, all
                    land in Ethiopia is owned by the state, and individuals and
                    entities can only obtain land use rights through leasehold
                    agreements or government allotment. The Land Proclamations
                    also outlines the rights and responsibilities of
                    landholders, including the right to transfer, mortgage, or
                    develop the land within the confines of the law.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="my-12 md:my-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Specifically, the Urban Land Lease Proclamation regulates
                    urban land leasing arrangements in Ethiopia, providing
                    guidelines for lease agreements, rent determination, and
                    mechanisms for resolving disputes. This law aims to promote
                    sustainable urban development and efficient land use by
                    regulating the leasing of urban land for residential,
                    commercial, and industrial purposes. Real-estate law in
                    Ethiopia also faces issues related to property rights, land
                    registration, and land use planning. The Federal Land
                    Administration Proclamation establishes a framework for land
                    registration and administration, ensuring transparency and
                    security of land tenure rights. Zoning laws and regulations
                    further govern land use planning and development control,
                    guiding the allocation of land for different purposes and
                    regulating construction activities in both urban and rural
                    areas.
                  </p>
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
                  <p>Ensuring Legal Compliance: The Role of Legal Professionals in Ethiopian Real Estate Transactions</p>
                </div>
                {/* normal text */}
                <div className="my-5">
                  <p>
                  In Ethiopia, the legal framework governing real estate is comprehensive and includes various regulations that require the expertise of legal professionals at every step. This includes obtaining necessary licenses such as investment licenses, adhering to construction procedures, managing employment relationships, drafting and executing construction contracts, and overseeing the transfer of property ownership. The complexity of these regulations underscores the importance of legal guidance to ensure compliance and protect the interests of all parties involved in real estate transactions.
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

        {/* 21 */}
        <div className="py-5 md:py-16 bg-neutral-800 text-white">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
              {/* right */}
              <div className="flex-grow">
                <div className="text-center text-[.85rem] md:text-[1.5rem] font-semibold">
                  <p>
                    At Makuta Law Firm, our seasoned experts on real estate laws and transaction are dedicated to delivering customized legal solutions that prioritize your business or personal goals. We ensure that our services are aligned with your unique needs and aspirations.
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

export default CorporateRealEstateLaw;
