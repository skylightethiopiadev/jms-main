import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CivilContractSaleLeaseBuildings = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Contract Negotiation",
        text: "Advocating on your behalf during negotiation of real property related contracts."
      },
      {
        title: "Contract Review",
        text: "Scrutinizing agreements for the fulfillment of formality requirements of the law and making sure interest of clients are secured."
      },
      {
        title: "Due Diligence",
        text: "Thoroughly investigating property credentials and legal requirements for defect free transfer of property title."
      },
      {
        title: "Authentication and Registration Assistance",
        text:
          "Facilitating the authentication of contracts and registration of titles."
      },
      {
        title: "Legal Representation",
        text:
          "Acting on behalf of clients in judicial or arbitral proceedings."
      },
      {
        title: "Contract Preparation",
        text:
          "Developing agreements for sale, lease, servitude and mortgage of real properties."
      },
      {
        title: "Tax Guidance",
        text:
          "Offering assistance with the financial aspects of acquiring and transacting real properties."
      }
    ],
    servicesIndex: 0,
    subServicesIndex: -1
  });

  return (
    <div>
      {/* first order container */}
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
                  src="https://c7.uihere.com/files/939/1016/1000/spain-madrid-buildings-atocha.jpg"
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
                  Secure Your Personal deals: The Importance of Legally Binding
                  Agreements
                </p>
              </div>

              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  In today’s business environment, agreements form the backbone
                  of interactions between individuals and companies, setting the
                  stage for long-term relationships, delineating rights and
                  duties, enhancing operational efficiency, and fostering trust.
                  Yet, it’s crucial to recognize that not every agreement meets
                  the legal criteria to be deemed a contract. Various
                  jurisdictions impose distinct formalities that an agreement
                  must satisfy to be legally binding. Therefore, it’s essential
                  to reassess your agreements to ensure they hold legal weight.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="w-0 lg:w-[50%] bg-transparent"></div>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className="my-12 md:my-36">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%] relative">
              <div className="md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-center object-cover"
                  src="https://www.courier-journal.com/gcdn/-mm-/f8690108b6e1d34b0c1e3420c29a5e0b90945374/c=0-0-2118-1197/local/-/media/2017/02/13/Louisville/Louisville/636225746762404646-GettyImages-155353328.jpg?width=660&height=374&fit=crop&format=pjpg&auto=webp"
                  alt=""
                />
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
              {/* bold text */}
              <div className="header-level-3 uppercase">
                <p>
                  Secure Your Real Estate Investments: Navigating Ethiopia's
                  Complex Property Transfer Process
                </p>
              </div>
              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  Real properties encompass land and everything attached to it
                  including buildings. The considerable economic value of real
                  properties leads to the imposition of rigorous regulations by
                  states, which complicates the processes of purchase, sale,
                  lease, mortgage, and servitude for parties involved. The
                  complexity of these transactions arises from the legal
                  safeguards in place for third-party interests, the stringent
                  formalities requirements of the law for contract formation,
                  and the intricate steps required for the registration and
                  title transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* post-second order container */}
      <div className="my-12 md:my-36">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  In Ethiopia, the transfer of buildings minimally encompasses a
                  tripartite process. Initially, the contractual phase mandates
                  adherence to the formalities prescribed by the civil code and
                  supplementary legislation. Subsequently, the authentication
                  phase ensures verification of property ownership and the
                  disclosure of any encumbrances. The final phase, registration,
                  necessitates the official recording of the property under the
                  purchaser’s name. Throughout these stages, numerous legal
                  issues may arise, which, if not professionally addressed,
                  could impinge upon the contract’s legitimacy and contracting
                  party's interest. Therefore, it is imperative that contracts
                  concerning buildings are meticulously drafted and that the
                  entirety of the transfer procedure is diligently supervised by
                  a legal expert to ensure due diligence and legal compliance.
                </p>
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] relative">
              <div className="md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-center object-cover"
                  src="https://content.jdmagicbox.com/comp/latur/h2/9999p2382.2382.201212162953.h6h2/catalogue/balaji-group-of-construction-latur-city-latur-civil-contractors-3622jhicc8.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third order container */}
      <div className="py-5 md:py-16 bg-neutral-800 text-white">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
            {/* left */}
            <div>
              <div className="w-[150px] aspect-square overflow-hidden">
                <img
                  className="w-full object-center object-cover"
                  src="/final-logo.png"
                  alt=""
                />
              </div>
            </div>
            {/* right */}
            <div className="flex-grow">
              <div className="text-center  text-[.85rem] md:text-[1.5rem] font-semibold">
                <p>
                  At Makuta Law Firm, our dedicated team of legal professionals
                  are committed to meticulously creating and examining a variety
                  of contracts, ensuring compliance with Ethiopian regulations
                  while placing your priorities at the forefront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth order container */}
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
  );
};

export default CivilContractSaleLeaseBuildings;
