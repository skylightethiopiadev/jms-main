import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CivilFamilyMaintenance = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Drafting Agreements",
        text:
          "We draft maintenance agreements that outline the terms and conditions of support, ensuring they are clear, legally binding, and enforceable."
      },
      {
        title: "Guidance on Maintenance Obligations",
        text:
          "We offer counsel regarding maintenance responsibilities arising from marital and blood ties."
      },
      {
        title: "Court Representation",
        text:
          "Whether you are facing maintenance claim or need to file one, we will represent your interests in the legal arena."
      },
      {
        title: "Claim Negotiations",
        text:
          "To prevent court proceedings, we will represent clients during negotiation."
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
                  Supporting Those in Need: Exploring Family Maintenance Legal
                  Frameworks
                </p>
              </div>

              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  Family maintenance encompasses various legal and practical
                  aspects related to supporting family members. It is an order
                  of the law that requires one family member to provide
                  financial assistance to the other members of the family.
                  Having different objectives at hand states have issued
                  different family maintenance laws.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="w-0 lg:w-[50%] bg-transparent"></div>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className="relative">
        {/* content container */}
        <div className="static-padding-x py-10 md:py-16 relative z-30">
          {/* content */}
          <div>
            <div className="text-justify p-5 bg-white rounded-md shadow-xl mx-24">
              <p>
                These Family maintenance laws serve a dual purpose: they
                alleviate potential financial burdens on the state and uphold
                the integrity of family relationships. These laws are enacted to
                ensure that individuals who are unable to sustain themselves due
                to various vulnerabilities are not left destitute, thereby
                preventing them from becoming reliant on state resources.
                Simultaneously, such laws reinforce familial ties by mandating
                support during times of economic hardship, thereby fostering a
                sense of mutual reliance and emotional security within the
                family unit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third order container */}
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
              <div className="my-5 text-justify">
                <p>
                  This legal framework also plays a pivotal role in safeguarding
                  the welfare of children, ensuring that their fundamental needs
                  are met through enforced parental support. Collectively, these
                  measures reflect the state’s commitment to promoting fair
                  treatment and the well-being of its citizens, particularly the
                  most vulnerable members of society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth order container */}
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
              <div className="text-center text-[.85rem] md:text-[1.5rem] font-semibold">
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

      {/* fifth order container */}
      <div className="my-12 md:my-36">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
              {/* bold text */}
              <div className="header-level-3 uppercase">
                <p>
                  Ethiopian Family Maintenance Laws: Rights, Responsibilities,
                  and Resolutions
                </p>
              </div>
              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  In line with various international legal systems, Ethiopian
                  legal system also recognizes the obligation of family members
                  to support each other. This responsibility is detailed in the
                  revised federal family code, as well as in regional family
                  codes throughout Ethiopia. Under these laws, the scope of
                  maintenance includes providing necessities such as food,
                  shelter, clothing, and education. The law identifies the
                  provider of maintenance as the ‘Debtor’ and the recipient as
                  the ‘Creditor,’ establishing specific conditions that
                  determine when the Creditor is entitled to maintenance and
                  when the Debtor is obligated to provide it. This duty of
                  maintenance applies to family members connected by marriage
                  (affinal relationships) as well as blood relations
                  (consanguineal relationships).
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

      {/* post-fifth order container */}
      <div className="my-12 md:my-36 bg-neutral-200 py-10">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-[100%] ">
              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  In the context of maintenance, the legal landscape encompasses
                  a diverse array of cases that affect various individuals.
                  These cases often involve issues such as the determination of
                  maintenance amounts, methods of payment, locations where
                  payments should be effected, prioritization of claimants in
                  the event of multiple maintenance requests, and the
                  establishment of alternate payment solutions. If you’re
                  uncertain about your and your children’s entitlement to
                  maintenance, rest assured that our legal team is here to
                  provide comprehensive support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sixth order container */}
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

export default CivilFamilyMaintenance;
