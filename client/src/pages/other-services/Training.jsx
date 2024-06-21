import React, { useState, useMemo } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Training = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "In-Person Workshops",
        text:
          "In-Person Workshops provide interactive sessions either at our office, the client’s premises or any other places. These workshops allow for hands-on learning and direct interaction with legal experts. Participants benefit from personalized attention, immediate feedback, and practical exercises. Whether it’s discussing legal concepts, case studies, or role-playing scenarios, these workshops enhance understanding and application of legal principles."
      },
      {
        title: "Online Training",
        text:
          "Online Training offer live or pre-recorded sessions accessible via our online platform. These programs are designed for flexibility and convenience, allowing participants to engage from anywhere with an internet connection."
      },
    ],
    servicesIndex: 0,
    subServicesIndex: -1
  });

  const [successionWays, setSuccessionWays] = useState(0);

  const employmentContractElement = useMemo(
    () => [
      {
        text: "The name and address of the employer."
      },
      {
        text:
          "The name, age, addresses and work card number, if any, of the worker."
      },
      {
        text: "The type of employment and place of work."
      },
      {
        text: "The rate of wages, method of calculation thereof."
      },
      {
        text: "Manner and interval of payment."
      },
      {
        text: "Duration of the contract."
      },
      {
        text: "The signature of the contracting parties."
      }
    ],
    []
  );

  const employmentContractReasons = useMemo(
    () => [
      {
        text: "Termination by the initiation by the employer or worker"
      },
      {
        text: "Termination in accordance with the provisions of the law"
      },
      {
        text:
          "Termination by the collective agreement or by the agreement of the two parties"
      }
    ],
    []
  );

  const unlawfulConsequences = useMemo(
    () => [
      {
        text: "Reinstatement or compensation"
      },
      {
        text: "Severance payment"
      },
      {
        text: "Payment for unused annual leave"
      },
      {
        text: "Payment for delay of payment"
      },
      {
        text: "Payment for unpaid salary"
      },
      {
        text: "Payment for overtime"
      }
    ],
    []
  );

  const employmentPeriod = useMemo(
    () => [
      {
        text:
          "The performance of specified piece work for which the employee is employed."
      },
      {
        text:
          "The replacement of a worker who is temporarily absent due to leave or sickness or other causes."
      },
      {
        text:
          "The performance of work in the event of abnormal pressure of work"
      },
      {
        text:
          "The performance of urgent work to prevent damage or disaster to life or property, to repair defects or breakdowns in works, materials, buildings or plants of an undertaking."
      },
      {
        text:
          "An irregular work which relates to permanent part of the work of an employer but performed on irregular intervals."
      },
      {
        text:
          "Seasonal works which relate to the permanent part of the works of an employer but performed only for a specified period of the year but which are regularly repeated in the course of the years."
      },
      {
        text:
          "An occasional work which does not form part of the permanent activity of the employer but which is done intermittently."
      },
      {
        text:
          "The temporary placement of a worker who has suddenly and permanently vacated from a post having a contract of an indefinite period."
      },
      {
        text:
          "An occasional work which does not form part of the permanent activity of the employer but which is done intermittently."
      },
      {
        text:
          "The temporary placement of a worker to fill a vacant position in the period between the preparation of an organizational structure and its implementation."
      }
    ],
    []
  );

  const acquisitionPeriod = useMemo(
    () => [
      {
        text: "An application for a work permit submitted by an employer."
      },
      {
        text:
          "A form filled with the personal history of the employed foreigner."
      },
      {
        text:
          "The foreigner's education certificate and work experience certificate certified by the appropriate body / original and copy."
      },
      {
        text:
          "The foreigner's valid travel passport that is not less than three months old."
      },
      {
        text: "Four passport-sized photographs of the foreigner."
      },
      {
        text:
          "Unexpired Business Visa (BV), Work Visa (WV), Government Visa (GV) or Non-Government Visa (NV), as applicable."
      },
      {
        text:
          "The employment contract entered into by the foreigner with the employer, as appropriate."
      },
      {
        text: "Receipt of payment of service fee specified by law."
      },
      {
        text:
          "An occasional work which does not form part of the permanent activity of the employer but which is done intermittently."
      },
      {
        text:
          "The temporary placement of a worker to fill a vacant position in the period between the preparation of an organizational structure and its implementation."
      }
    ],
    []
  );

  const adoptionCriteria = useMemo(
    () => [
      {
        text:
          "A contract of employment should clearly stipulate the parties’ rights and obligation."
      },
      {
        text:
          "A contract of employment shall specify the type of employment and place of work, the rate of wages, method of calculation thereof, manner and interval of payment and duration of the contract."
      },
      {
        text:
          "A contract of employment shall not be concluded for the performance of unlawful or immoral acts."
      },
      {
        text:
          "The contract of employment shall not laydown less favorable conditions forth employee than those provided for by law, collective agreement or work rules."
      },
      {
        text:
          "Relationships with the adopter’s ascendants and collaterals are maintained unless there is explicit opposition to the adoption."
      }
    ],
    []
  );

  const [renewWorkPermit, setRenewWorkPermit] = useState({
    renewWorkPermitList: [
      {
        text: "The foreigner's work permit renewal application."
      },
      {
        text: "The foreigner's passport that is not less than three months old."
      },
      {
        text: "Work permit book issued by the Ministry."
      },
      {
        text: "residence permit."
      },
      {
        text:
          "A letter of support issued by the relevant government body, especially if the foreigner is engaged in the health or education sector, a letter of support issued by the health or education institutions as appropriate."
      },
      {
        text:
          "The employment contract entered into by the foreigner with the employer."
      },
      {
        text:
          "A report describing the state of transfer of knowledge of successor Ethiopians."
      },
      {
        text: "Receipt of payment of service fee specified by law."
      }
    ],
    selectedIndex: 0
  });

  const [commissionKeys, setCommissionKeys] = useState({
    commissionKeysList: [
      {
        title: "Scope of  Application",
        text:
          "It specifically targets expatriates in foreign investment entities regulated by the EIC, including refugees with proper ID working in paid roles. It excludes expatriates in sectors such as air transport, power generation, and communications, who remain subject to the MoLSA Directive."
      },
      {
        title: "Facilitating Top Management Employment",
        text:
          "The directive eases the hiring process for top management expatriates throughout the construction and operational stages of a project, detailing the roles and conditions for obtaining and renewing work permits annually without the rigorous requirements applied to other expatriate positions."
      },
      {
        title: "Regulating Non-Top Management Employment",
        text:
          "It permits foreign investors to hire expats for up to 10% of their total workforce during the project phase, with a potential increase to 15%. In the operational phase, the limit is 10%, potentially rising to 12% at the EIC’s discretion. Exceptions are made for sectors needing specialized skills like high-tech, consultancy, and advanced agriculture."
      },
      {
        title: "Streamlined Application Process",
        text:
          "The directive reduces the work permit application window to 30 days post-arrival in Ethiopia. Work permits have a three-year validity with annual renewals, and the directive specifies the necessary documentation for applications and renewals, underscoring the need to demonstrate the expatriate’s role relevance, job continuity, and effective training of Ethiopian replacements."
      }
    ],
    selectedIndex: 0
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
                  <p>Training Services by Makuta Law firm</p>
                </div>

                {/* normal text */}
                <div className="my-5">
                  <p>
                    In the dynamic and ever-changing business environment, legal
                    training plays a pivotal role for both individuals and
                    businesses. For individuals, a solid grasp of legal
                    principles ensures compliance with regulations, informs
                    decision-making, and empowers them to navigate legal
                    complexities effectively.
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
                  Meanwhile, businesses benefit from legal training as a
                  strategic investment that minimizes risks, strengthens
                  corporate governance, and promotes ethical conduct. Whether
                  addressing contract law, taxation, intellectual property,
                  employment relations, real estate transactions, or data
                  privacy and protection, maintaining proficiency in legal
                  matters is essential for sustained success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div className="relative mt-12 md:mt-36 mb-7">
          {/* content container */}
          <div className="static-padding-x mt-10 relative z-30">
            {/* content */}
            <div>
              {/* left */}
              <div className="w-full">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Types of Training Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div className="mb-12 md:mb-36">
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
                <div className="header-level-3 uppercase">
                  <p>Corporate Compliance Training</p>
                </div>
                {/* normal text */}
                <div className="">
                  <p>
                    Corporate compliance training is a structured training
                    program designed to ensure that employees and stakeholders
                    understand and adhere to legal regulations, industry
                    standards, and internal policies within an organization. It
                    covers a range of topics, including anti-corruption, data
                    privacy, conflict of interest, anti-money laundering,
                    workplace safety, and ethical conduct. Through interactive
                    sessions, case studies, and practical examples, participants
                    learn how to recognize potential risks, report violations,
                    and maintain a culture of compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="my-12 md:my-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>Contract Law and Negotiation Training</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    The Contract Law and Negotiation Training program is
                    meticulously crafted to furnish participants with extensive
                    expertise and hands-on capabilities pertaining to contract
                    creation, assessment, and negotiation. This specialized
                    initiative empowers attendees with profound understanding in
                    crafting contracts that are precise, coherent, and legally
                    robust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>Employment Law Training</p>
                </div>
                {/* normal text */}
                <div className="my-5">
                  <p>
                    Employment Law training is a comprehensive program tailored
                    for HR professionals, managers, and small business owners.
                    It covers critical aspects of employment law, including
                    hiring practices, workplace policies, employee rights, and
                    termination procedures.
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

        {/* 7 */}
        <div className="mb-12 md:mb-36">
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
                <div className="header-level-3 uppercase">
                  <p>Litigation and Dispute Resolution Training</p>
                </div>
                {/* normal text */}
                <div className="">
                  <p>
                    This training provides valuable insights into both
                    litigation processes and alternative dispute resolution
                    methods. Legal professionals, corporate legal teams, and
                    individuals dealing with disputes benefit from this
                    comprehensive program. Target groups learn effective
                    strategies for managing conflicts, whether through court
                    proceedings or negotiation and mediation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 */}
        <div className="my-12 md:my-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>Real Estate Law Training</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Real Estate Law Training is a comprehensive program tailored
                    for real estate agents, property managers, and investors. It
                    covers essential aspects related to real estate
                    transactions, property rights, and landlord-tenant laws.
                    Participants gain insights into legal frameworks governing
                    property ownership, lease agreements, property transfers,
                    and dispute resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 9 */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>Cybersecurity and Data Protection Training</p>
                </div>
                {/* normal text */}
                <div className="my-5">
                  <p>
                    Cybersecurity and Data Protection Training is a
                    comprehensive program designed to educate IT professionals,
                    compliance officers, and business leaders on the legal
                    aspects of cybersecurity and data protection. This training
                    covers essential topics related to safeguarding information,
                    including data protection regulations, privacy laws, and
                    best practices for securing sensitive data. Participants
                    learn about risk assessment, incident response, encryption,
                    and compliance with industry standards.
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

        {/* 10 */}
        <div className="py-5 md:py-16 bg-neutral-800 text-white">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
              {/* right */}
              <div className="flex-grow">
                <div className="text-center text-[.85rem] md:text-[1.5rem] font-semibold">
                  <p>
                    At Makuta law firm, we are dedicated to enhancing the legal
                    knowledge of our clients through specialized training
                    programs. This service is designed to deepen your
                    understanding of legal principles, ensure compliance, and
                    equip you with the tools needed to handle legal challenges
                    effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 11 */}
        <div className="my-10 md:my-36 bg-neutral-100 ">
          {/* content container */}
          <div className="static-padding-x py-16">
            {/* header */}
            <div>
              {/* bold */}
              <div className="header-level-3 mb-2 uppercase">
                <p>Delivery Mechanisms</p>
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

export default Training;
