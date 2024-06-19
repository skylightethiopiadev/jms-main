import React, { useState, useMemo } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const CivilFamilyAdoption = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Clarifying Legal Criteria",
        text:
          "Our team elucidate the legal stipulations pertinent to adoption, such as those in the Domestic Adoption Directive and the Family Code. We can assist in comprehending the age limits for adoptive parents, necessary consents, and other vital legal details."
      },
      {
        title: "Handling Legal Documentation",
        text:
          "We can support in drafting and scrutinizing essential paperwork for adoption, including agreements, consent forms, and applications. Making sure all documents are correct and complete is vital for a successful adoption process."
      },
      {
        title: "Legal representation ",
        text:
          "We can act on your behalf in court to obtain adoption approval. Moreover, we can articulate your case, respond to legal inquiries, and champion the child’s best interests."
      },
      {
        title: "Resolving Legal Uncertainties ",
        text:
          "Resolve any unclear or complex legal issues that may arise during the adoption. We can offer guidance on matters like inheritance rights, familial connections, and obtaining consent."
      },
      {
        title: "Mediating Disputes",
        text:
          "In case of conflicts during the adoption, our team legal professional can intervene and negotiate for you. We can help settle any disagreements with biological parents, relatives, or government entities, ensuring a just outcome."
      },
      {
        title: "Ensuring Timely Compliance",
        text:
          "Adoption procedures are bound by specific time frames. A legal professional ensures adherence to these timelines to prevent any hold-ups or issues."
      }
    ],
    servicesIndex: 0,
    subServicesIndex: -1
  });

  const adoptionCriteria = useMemo(
    () => [
      {
        text: "The adoption agreement must be sanctioned by a court of law."
      },
      {
        text:
          "The adopter’s age must be at least 25 years old, with potential exceptions for married couples."
      },
      {
        text:
          "The adoption contract is formed between the adopter and the child’s guardians."
      },
      {
        text:
          "Once the adoption is validated, the adopted child is regarded as the offspring of the adopter for all intents and purposes, including inheritance rights."
      },
      {
        text:
          "Relationships with the adopter’s ascendants and collaterals are maintained unless there is explicit opposition to the adoption."
      }
    ],
    []
  );

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
                  Empowering Families: The Impact of Legal Adoption Regulations
                </p>
              </div>

              {/* normal text */}
              <div className="my-5">
                <p>
                  The enactment of laws governing adoption is essential to
                  ensure the safety and welfare of children, providing them with
                  secure homes and safeguarding their future. These laws also
                  offer clarity and protection for both adoptive and birth
                  parents by defining their rights and responsibilities, while
                  ensuring that all parties have access to unbiased information
                  to make informed decisions. Furthermore, legal regulation
                  brings uniformity to the adoption process across various
                  jurisdictions, contributing to a stable and predictable legal
                  environment that upholds the integrity of the adoption system.
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
                  src="https://www.shutterstock.com/image-photo/law-theme-mallet-judge-enforcement-600nw-1938588952.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
              {/* bold text */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                <p>
                  Navigating Adoption in Ethiopia: Understanding Legal Standards
                  and Procedures
                </p>
              </div>
              {/* normal text */}
              <div className="my-5">
                <p>
                  In Ethiopia, the adoption process is regulated by stringent
                  legal standards and conditions set forth by both federal and
                  regional authorities. The primary legal frameworks is the
                  Federal Revised Family Code and regional family laws, which
                  guide the adoption proceedings. The process involves various
                  parties, including the adoptive families, the adoptee, and the
                  biological families of the children.
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
                  This diversity of stakeholders leads to a range of legal
                  considerations, such as eligibility criteria for adopters and
                  adoptees, the nature of the relationships formed
                  post-adoption, the paramount interests that need safeguarding,
                  formalities for the validity of adoption agreements, and
                  inheritance matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth order container */}
      <div className="my-12 md:my-36 bg-neutral-white py-10">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-[100%] ">
              {/* bold text */}
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                <p>
                  For an adoption to be legally recognized in Ethiopia, it must
                  meet the following criteria
                </p>
              </div>
              {/* normal text */}
              <div className="my-5 text-justify">
                {adoptionCriteria.map((item, index) => {
                  return (
                    <div>
                      <div className="my-3 flex gap-3">
                        <div>
                          <div className="w-[20px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                            <FaCheck className="absolute left-1 bottom-1 text-green-400" />
                          </div>
                        </div>
                        <div>
                          <p>{item?.text}</p>
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
              <div className="text-justify md:text-left text-[.85rem] md:text-[1.5rem] font-semibold">
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
              {/* normal text */}
              <div className=" text-justify">
                <p>
                  The legal frameworks governing adoption in Ethiopia, including
                  the Federal Revised Family Code and Directive No. 48/2020,
                  establish a comprehensive process that demands careful
                  attention to detail. This ensures that the rights and
                  interests of everyone involved are honored. The complexity of
                  the adoption process encompasses a range of legal matters,
                  such as the qualifications for adopters and adoptees, the
                  legal ramifications of the adoption for all parties, and the
                  necessity for formal procedures. As a result, whether you are
                  part of the adopting family or a relative, it’s crucial to be
                  actively engaged and well-informed throughout the adoption
                  journey to understand its full legal impact.
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

      {/* sixth order container */}
      <div className="my-12 md:my-36 bg-neutral-200 py-10">
        {/* content container */}
        <div className="static-padding-x">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-[100%] ">
              {/* normal text */}
              <div className="my-5 text-justify">
                <p>
                  If you find yourself navigating through adoption process, it’s
                  crucial to address the complexities that surrounds it. Amidst
                  the myriad of legal considerations that arise, securing legal
                  counsel and representation is an essential step you shouldn’t
                  overlook. The family law specialists in Mankuta law firm are
                  equipped to offer comprehensive legal services tailored to
                  these needs.
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
                  The family law specialists in Mankuta law firm are equipped to
                  offer comprehensive legal services tailored to these needs.
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

export default CivilFamilyAdoption;
