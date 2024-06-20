import React, { useState, useMemo } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const CivilFamilyOthers = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Proof of Filiation",
        text:
          "Assist in compiling evidence to legally confirm the relationship between a parent and a child. Facilitate the procurement and submission of vital documents like birth certificates, the primary proof of filiation."
      },
      {
        title: "Contesting Filiation",
        text:
          "Support parties interested in questioning recognized filiation. We also guide through the legal channels to dispute both maternal and paternal filiation."
      },
      {
        title: "Paternity Disowning",
        text: "We act on behalf of those seeking to renounce paternity."
      },
      {
        title: "Legal Consultancy",
        text:
          "We represent clients in legal proceedings, arguing to affirm or challenge filiation. In addition we ensure adherence to legal standards and defend the interests of all involved parties."
      },
      {
        title: "Others legal support include on legal scenarios involving",
        text:
          "Change of name, Tutorship and guardianship, and Declaration of absence "
      },
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
                <p>Proof Of Marriage</p>
              </div>

              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  Establishing proof of marriage is a critical legal process
                  that involves demonstrating the existence of a marital union.
                  Under Ethiopian law, certain presumptions and admissible
                  evidence are established to confirm the marital relationship
                  between two individuals. The primary form of evidence required
                  is the marriage certificate. In cases where this document is
                  unavailable, the law permits individuals to establish proof of
                  marriage by demonstrating cohabitation or presenting
                  themselves publicly as a married couple. Therefore, a claimant
                  must provide either the marriage certificate or evidence
                  possession of status.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="w-0 lg:w-[50%] bg-transparent"></div>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className="py-5 md:py-16 bg-neutral-800 text-white mt-28">
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
                  Our legal team is equipped to offer a comprehensive suite of
                  legal services, including advice on marital law, preparation
                  of necessary legal documents, and representation in court to
                  establish the existence of a marriage.
                </p>
              </div>
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

            <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md text-justify">
              {/* bold text */}
              <div className="text-3xl md:text-3xl lg:text-3xl font-bold uppercase text-left">
                <p>
                  Proof and challenging filiation(the fact of being the child of
                  a particular parent):
                </p>
              </div>
              {/* normal text */}
              <div className="my-5">
                <p>
                  Proof of filiation, which establishes the legal parent-child
                  relationship, is a common legal matter. Filiation includes
                  both parental and maternal filiation. Individuals entitled to
                  file a filiation claim include the child against the presumed
                  parents or the parents against the alleged child. Thus, a
                  person may initiate legal proceedings against an individual
                  claiming them as their parent. Ethiopian law prescribes
                  specific requirements such as the timing of the claim, the
                  appropriate court for filing, and the eligible parties to
                  initiate the claim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third order container */}
      <div className="my-12 md:my-36 bg-neutral-200 py-10">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-[100%] ">
              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  Additionally, Ethiopian law outlines procedures for
                  challenging filiation by the mother and Disowning by the
                  father. Any party with a vested interest is permitted to
                  dispute a person’s maternal filiation, either against the
                  individual in question or their descendants. Furthermore,
                  paternity disowning is permissible, allowing an individual
                  presumed to be a child’s father to legally refute this claim.
                  Such a challenge can be directed against the child or, if
                  deceased, against their heirs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* seventh order container */}
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

export default CivilFamilyOthers;
