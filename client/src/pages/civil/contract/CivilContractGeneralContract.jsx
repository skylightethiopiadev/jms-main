import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CivilContractGeneralContract = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Draft contract",
        text:
          "Our company offers comprehensive contract drafting services to meet various business needs. We create fixed-price contracts, which specify total payment for clearly defined supplies or services and place full responsibility on the contractor. We also draft partnership agreements for business collaborations and joint ventures involving multiple parties. Additionally, we prepare provisional agreements, including nondisclosure, indemnification, and non-competition clauses. For employment relationships, we develop detailed employment contracts that ensure fair compensation and protection for both businesses and employees, including non-compete and confidentiality agreements. We also craft conditional contracts, dependent on specific conditions being met, and joint contracts, which regulate business or property relationships between multiple parties."
      },
      {
        title: "Compliance Checks",
        text:
          "Ensuring that contracts comply with local, national, and international laws."
      },
      {
        title: "Contract Negotiation",
        text:
          "Assisting clients in negotiating terms and conditions to reach a mutually beneficial agreement."
      },
      {
        title: "Legal Consultation",
        text:
          "Advice clients to ensure the seamless transfer of ownership or the acquisition of unencumbered title and enter into legally secured contractual relationship."
      },
      {
        title: "Legal representation",
        text:
          "In case of any disagreements related to contracts, our experienced attorneys are available to represent and support clients through arbitration and legal proceedings. "
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
                  src="https://worldref.co/wp-content/uploads/2020/10/Contract-Management-Consultants-Two-confident-business-man-shaking-hands-during-a-meeting-in-the-office-success-dealing-greeting-and-partner.jpg"
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
                  src="https://img.freepik.com/premium-photo/male-lawyer-discussing-negotiation-legal-case-with-client-meeting-with-document-contract-office-law-justice-attorney-lawsuit-concept_229060-322.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
              {/* bold text */}
              <div className="header-level-3 uppercase">
                <p>
                  Navigate Ethiopia's Legal Landscape: Ensure Your Contracts
                  Meet All Requirements
                </p>
              </div>
              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  Ethiopia’s legal landscape is rich with laws that govern
                  contractual relationships, each with its own set of formality
                  requirements. To navigate your daily business dealings
                  securely and avoid exploitation, it’s advisable to cement your
                  relationships with legally enforceable contracts. Under
                  Ethiopian law, contracts are subject to specific conditions
                  such as the object, form, the capacity of parties, and mutual
                  consent; without these, a contract may be considered void or
                  rendered voidable.
                </p>
              </div>
              <div className="text-justify">
                <p>
                  Whether you are a merchant selling goods or services, a
                  contractor undertaking construction projects, someone granting
                  agency, or a consumer purchasing goods and services, it’s
                  prudent to rely on contracts that are legally sound to shield
                  yourself from potential disputes or to assert your rights.
                </p>
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
              <div className="text-justify text-[0.985rem] md:text-[1.5rem] flrc items-center justify-center font-semibold">
                <p className="flex items-center justify-center text-center">
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
                    <div className="pt-3 text-justify border-t border-gray-200">
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

export default CivilContractGeneralContract;
