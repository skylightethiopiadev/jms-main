import React, { useState, useMemo } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Consulting = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Corporate Consultancy",
        text:
          "Consulting businesses on corporate governance, compliance with company laws, mergers and acquisitions, corporate restructuring, and commercial contracts."
      },
      {
        title: "Commercial Law Consultancy",
        text:
          "Consulting clients with drafting and reviewing commercial contracts, negotiating deals, resolving commercial disputes, and ensuring compliance with commercial regulations."
      },
      {
        title: "Intellectual Property (IP) Consultancy",
        text:
          "Providing guidance on trademark registration, patent applications, copyright protection, licensing agreements, and enforcement of intellectual property rights."
      },
      {
        title: "Employment Law Consultancy",
        text:
          "Offering advice on employment contracts, workplace policies, employee rights, termination procedures, discrimination issues, and compliance with labor laws."
      },
      {
        title: "Real Estate Law Consultancy",
        text:
          "Consulting clients with property transactions, lease agreements, real estate development projects, zoning regulations, land use issues, and property disputes."
      },
      {
        title: "Family Law Consultancy",
        text:
          "Providing legal guidance on matters such as divorce, child custody, maintenance, adoption, and estate planning."
      },
      {
        title: "Immigration Law Consultancy",
        text:
          "Offering consultancy services to individuals and businesses regarding immigration concerns, encompassing visa applications, residency permit, work permits, citizenship applications, and adherence to immigration regulations. "
      },
      {
        title: "Tax Law Consultancy",
        text:
          "Advising clients on tax planning strategies, tax compliance, tax disputes, tax audits, international taxation, and tax implications of business transactions."
      },
      {
        title: "Environmental Law Consultancy",
        text:
          "Offering guidance on environmental regulations, permitting requirements, environmental impact assessments, pollution control measures, and compliance with environmental laws."
      },
      {
        title: "Regulatory Compliance Consultancy",
        text:
          "Consulting businesses comprehend and adhere to regulations specific to their industry, conducting audits for compliance, creating compliance initiatives, and addressing regulatory hurdles."
      },
      {
        title: "Litigation Risk Assessment Consultancy",
        text:
          "Evaluating potential legal risks and liabilities, providing recommendations to mitigate risks, and offering strategic advice on dispute resolution options."
      },
      {
        title: "Data Protection and Privacy Consultancy",
        text:
          "Consulting businesses on compliance with data protection laws, drafting privacy policies, conducting data protection impact assessments, and managing data breaches."
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
                    The Role of Legal Consulting in Navigating Complex Legal
                    Landscapes
                  </p>
                </div>

                {/* normal text */}
                <div className="my-5">
                  <p>
                    In a realm where legal intricacies can become intertwined
                    with daily affairs, turning to seasoned legal counsel
                    frequently emerges as a prudent initial action.
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
              <div className="text-justify p-5 bg-white rounded-md shadow-2xl mx-5 sm:mx-10 md:mx-16 lg:mx-24">
                <p>
                  Whether grappling with a persistent legal conflict, pondering
                  pivotal business choices, or seeking guidance on personal
                  legal affairs, engaging with a proficient legal expert can
                  furnish invaluable perspectives and guidance to individuals in
                  various situations.
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
                {/* normal text */}
                <div className="">
                  <p>
                    Legal consulting services provided by experienced legal
                    experts play a pivotal role for both businesses and
                    individuals. Experts offer expert advice on legal matters,
                    helping businesses make informed decisions, mitigate risks,
                    and navigate complex regulations.
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
                  They assist in contract drafting, ensure compliance, and prepare businesses for potential disputes. For individuals, legal consultations provide personal guidance on estate planning, family law, and property transactions. Moreover, Legal experts assess risks, guide decision-making, and offer peace of mind. In summary, legal consulting bridges the gap between complex laws and practical decision-making, benefiting all parties involved.
                  </p>
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
                  At Makuta law firm, we are dedicated to assist our clients through specialized consultancy services. This service is designed to provide expert advice and solutions on legal matters, ensuring compliance and facilitating informed decision-making for individuals and businesses.
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

export default Consulting;
