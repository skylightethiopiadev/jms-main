import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CivilFamilyIrregularUnion = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Legal consultancy ",
        text:
          "Informed counsel on the nuances of an irregular union, detailing the involved parties’ legal rights and duties. We provide direction on legal procedures, whether the couple intends to formalize their relationship or part ways."
      },
      {
        title: "Verification of Irregular Union",
        text:
          "To confirm an irregular union, evidence is key. We aid in collecting and presenting such proof in a legal setting. As per Article 106 of the RFC, the acknowledged status of the union is crucial for verification. Our legal experts can assist in substantiating this status with appropriate proof."
      },
      {
        title: "Asset and Economic Consultation",
        text:
          "our team offer guidance on the division of assets and economic considerations within an irregular union. Should the union persist for a minimum of three years, shared property is presumed and our experts can advise on the entitlements and responsibilities concerning assets accumulated during the union."
      },
      {
        title: "Dissolution and Legal Outcomes",
        text:
          "We can facilitate the dissolution process for those opting to terminate their irregular union. They clarify the legal ramifications of the union, including any marital resemblances."
      },
      {
        title: "Preparation of Legal Documents",
        text:
          "Our team draft agreements pertinent to the irregular union, like separation agreements or asset distribution contracts. We ensure these documents are in line with Ethiopian family law and safeguard the rights of all involved parties."
      },
      {
        title: "Legal Representation",
        text:
          "In the event of disputes, our team act as representatives in legal proceedings concerning the irregular union. They provide representation for matters such as recognition, asset division, or conflict resolution in court."
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
                  src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/Passenger-Vehicle-desktop.jpg"
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
                  Legal Protections for Cohabitating Couples: Exploring
                  Irregular Unions in Ethiopia
                </p>
              </div>

              {/* normal text */}
              <div className="my-5">
                <p>
                  Besides marriage relationships, those couples who are living
                  as a married couples will receive legal protection under the
                  Ethiopian family laws being considered to have an irregular
                  union. In Ethiopia, a man and a woman cohabitating as a couple
                  without formalizing their relationship through marriage are
                  engaged in what’s known as an irregular union. While not
                  officially recognized by law as a marriage, this arrangement
                  nonetheless carries certain legal ramifications akin to those
                  of a legally married couple. Essentially, it’s a
                  non-formalized domestic partnership that is treated in some
                  ways like a marriage in terms of legal outcomes.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="w-0 lg:w-[50%] bg-transparent"></div>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className="my-12 md:my-36 bg-neutral-200 py-10">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-[100%] ">
              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  Under the revised family code of the Federal Democratic
                  Republic of Ethiopia, along with other regional codes, the
                  concept of an irregular union is established. This includes
                  the criteria that must be met, the evidence required to
                  demonstrate such a union, and the legal implications it
                  carries. Thus, for couples who have cohabitated and committed
                  themselves as if they were married for nearly three years, the
                  law acknowledges this as an irregular union and affords them
                  legal safeguards.
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

            <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
              {/* normal text */}
              <div className="my-5">
                <p>
                  If you find yourself navigating through separation but no
                  marriage, it’s crucial to address the complexities surrounding
                  property settlements, child custody, and family debts. Amidst
                  the myriad of legal considerations that arise, securing legal
                  counsel and representation is an essential step you shouldn’t
                  overlook.
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
              <div className="text-justify md:text-left text-[.85rem] md:text-[1.5rem] font-semibold">
                <p>
                  The family law specialists in Mankuta Law firm are equipped to
                  offer comprehensive legal services tailored to these needs.
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

export default CivilFamilyIrregularUnion;
