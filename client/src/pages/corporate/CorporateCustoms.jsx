import React, { useState, useMemo } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const CorporateCustoms = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Documentation Preparation",
        text:
          "Drafting and scrutinizing all vital documents needed for the import and export of commodities, which encompasses items like invoices, bills of lading, packing lists, and certificates of origin."
      },
      {
        title: "License and Permit Acquisition",
        text:
          "Assisting in obtaining necessary licenses and permits for restricted goods."
      },
      {
        title: "Import export compliance",
        text:
          "In the realm of import and export compliance, we provide guidance on adherence to the laws governing the international trade of goods. This encompasses a grasp of the customs tariffs, the necessary paperwork, and any limitations on trade."
      },
      {
        title: "Legal Representation",
        text:
          "We will handle contentious issues related to customs laws, including litigation and arbitration."
      },
      {
        title: "Administrative decision contest",
        text:
          "In situations where disagreements occur with customs officials, we offer support by contesting these decisions via administrative rulings and filing protests."
      },
      {
        title: "Legal Advice",
        text:
          "We offer a comprehensive legal advice regarding customs laws, procedures, duty free incentives and tax responsibilities."
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
                    Responsibilities and Challenges in Global Trade Compliance
                  </p>
                </div>

                {/* normal text */}
                <div className="my-5">
                  <p>
                    In the intricate world of international business
                    transactions, customs legislation serves as a critical
                    framework that governs the movement of goods across borders.
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
                  The complexity of these laws, which encompass tariffs, trade
                  agreements, and regulatory compliance, presents significant
                  challenges for businesses operating on a global scale.
                  Moreover, besides the challenges they pose Breaches or
                  attempted breaches of customs rules are generally considered
                  as an offence in Ethiopia, as elsewhere. Traders should
                  therefore know their responsibilities as well as the
                  implications of violations.
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
                  <p>Overview of Ethiopia's Customs Legal Framework</p>
                </div>
                {/* normal text */}
                <div className="">
                  <p>
                    Customs legal framework encompasses regulations governing
                    the import, export, transit, or storage of items, as well as
                    the levying of tariffs and taxes. Ethiopia has enacted a
                    variety of customs laws pertinent to its import and export
                    activities. These laws related to customs are dispersed
                    among various statutes, mainly those that specifically
                    govern customs, taxation, and investment. Therefore, without
                    the assistance of legal experts, it would be challenging to
                    navigate through these complex regulations.
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
                    Ethiopian customs regulations delineate the types of goods
                    and services permitted for import and export. There are
                    three classifications of goods which includes, those that
                    can be traded freely without restrictions, and those that
                    fall under the categories of prohibited and restricted
                    goods. Prohibited goods and services are entirely banned
                    from entry into the country, whereas restricted goods and
                    services require adherence to certain conditions upon
                    import.
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
                  <p>Import export procedure</p>
                </div>
                {/* normal text */}
                <div className="my-5">
                  <p>
                    Ethiopian customs regulations stipulate particular legal
                    mandates and processes for the importing or exporting of
                    goods. Consequently, importers and exporters are obligated
                    to adhere to these established legal steps to facilitate the
                    trade of goods to or from the nation. The legal stipulations
                    encompass:
                  </p>
                </div>

                {/* lists */}
                <div>
                  <div className="my-3 flex gap-3">
                    <div>
                      <div className="w-[20px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                        <FaCheck className="text-green-400 text-[.65rem]" />
                      </div>
                    </div>
                    <div>
                      <p>Having import or investment license</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="my-3 flex gap-3">
                    <div>
                      <div className="w-[20px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                        <FaCheck className="text-green-400 text-[.65rem]" />
                      </div>
                    </div>
                    <div>
                      <p>Arranging payment issues</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="my-3 flex gap-3">
                    <div>
                      <div className="w-[20px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                        <FaCheck className="text-green-400 text-[.65rem]" />
                      </div>
                    </div>
                    <div>
                      <p>Preparation and submission of declaration</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="my-3 flex gap-3">
                    <div>
                      <div className="w-[20px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                        <FaCheck className="text-green-400 text-[.65rem]" />
                      </div>
                    </div>
                    <div>
                      <p>
                        Obtaining import customs clearance and goods release
                        note
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="my-3 flex gap-3">
                    <div>
                      <div className="w-[20px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                        <FaCheck className="text-green-400 text-[.65rem]" />
                      </div>
                    </div>
                    <div>
                      <p>
                        Paying service charges and taxes (taxes applicable
                        includes VAT, Customs duties, sur tax, excise tax and
                        withholding tax)
                      </p>
                    </div>
                  </div>
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
                    Importance of Legal Expertise in Navigating Ethiopia's
                    Customs Laws
                  </p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <div>
                    <p>
                      Ethiopia’s regulatory framework for customs poses
                      considerable challenges for import export, attributed to
                      the dispersal of its laws across various statutes.
                      Additionally, the intricate clearance process, which
                      encompasses cargo declaration, storage, goods declaration,
                      validation, risk assessment, optional inspections, duty
                      payment, release, and auditing also complicates the import
                      export procedure. Moreover, The legal framework governing
                      import export mandates adherence to specific principles
                      and regulation. The complexity of this system often
                      necessitates the assistance of legal experts in
                      international trade law to navigate compliance,
                      classification, valuation, and risk management.
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
                  At Makuta Law Firm, our seasoned experts on customs procedure and law  are dedicated to delivering customized legal solutions that prioritize your business or personal goals. We ensure that our services are aligned with your unique needs and aspirations.
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

export default CorporateCustoms;
