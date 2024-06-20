import React, { useState, useMemo } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Property = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Drafting and Reviewing Employment Contracts",
        text:
          "Assist in creating legally sound employment contracts that outline the rights and obligations of both employers and employees. Review existing contracts to ensure compliance with labor laws and address any potential issues."
      },
      {
        title: "Termination and Severance Advice",
        text:
          "Advise on lawful termination procedures, including notice periods and severance pay. Help resolve disputes related to wrongful termination or unfair dismissal."
      },
      {
        title: "Collective Bargaining and Labor Relations",
        text:
          "Represent employers or employee unions during collective bargaining negotiations. Draft collective agreements and handle labor disputes."
      },
      {
        title: "Workplace Policies and Manuals",
        text:
          "Assist in creating workplace policies, including employee handbooks and codes of conduct. Ensure compliance with labor laws and address issues like discrimination, harassment, and safety."
      },
      {
        title: "Labor Litigation and Dispute Resolution",
        text:
          "Represent clients in labor-related lawsuits. Handle cases involving wage disputes, discrimination claims, workplace injuries, and more."
      },
      {
        title: "Intellectual Property (IP) and Technology",
        text:
          "Advise on IP matters related to inventions, trademarks, copyrights, and trade secrets. Help protect and enforce IP rights in the workplace."
      },
      {
        title: "Immigration and Work Visas",
        text:
          "Assist foreign workers with obtaining work visas and residence permits. Navigate immigration laws and requirements."
      },
      {
        title: "Tax Compliance and Obligations",
        text:
          "Provide guidance on tax matters, including incentives for investors and tax obligations. Handle tax litigation if disputes arise."
      },
      {
        title: "Labor Relations and Workplace Safety",
        text:
          "Counsel on workplace safety regulations and compliance. Address issues related to occupational health and safety."
      }
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
                  <p>
                    Understanding Property Rights: Ethiopian Legal Framework and
                    Regulation
                  </p>
                </div>

                {/* normal text */}
                <div className="my-5">
                  <p>
                    Property law is a complex field that encompasses various
                    aspects of ownership and other rights over tangible and
                    intangible assets. It includes the principles, policies, and
                    rules by which property disputes are resolved and property
                    transactions are structured. The law governs the
                    relationships between individuals and property, as well as
                    the allocation, use, and transfer of assets. Property law
                    also reflects the economic, family, and political structures
                    of the society in which it operates. It deals with control
                    and transfer of wealth, including the management of property
                    between spouses and across generations.
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
                  In Ethiopian property related issues are governed by diverse
                  legislation ranging from the FDRE constitution, regional
                  constitutions, the civil code, divers proclamations and
                  federal supreme court cassation decisions. The primary
                  legislation that governs property related issues is the civil
                  code of Ethiopia, The Civil Code provides the general
                  framework for property law, including the classification of
                  property, the rights of property holders, and the mechanisms
                  for acquiring, transferring, and protecting property rights1.
                  It also outlines the remedies available when property rights
                  are infringed, such as possessory actions, restitution, and
                  self-help. Supplementing the Civil Code, there are laws that
                  regulate land use rights, expropriation, intellectual
                  property, share purchases, and the transfer of business
                  premises. These laws aim to provide clear and comprehensive
                  legal specifications of property rights, which are essential
                  for stimulating private investment and facilitating equitable
                  exchanges.
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
                    Navigating Ethiopia's Complex Employment Legal Framework: A
                    Guide for Employers and Workers
                  </p>
                </div>
                {/* normal text */}
                <div className="">
                  <p>
                    In Ethiopia, employment is regulated by several legal
                    frameworks, including the Federal Democratic Republic of
                    Ethiopia constitution, Labor Proclamation No. 1156/2019, the
                    Civil Code, and the Private Enterprise Employees Social
                    Security Proclamation No. 715/2011. Additionally,
                    international treaties ratified by Ethiopia, directives,
                    regulations, and federal cassation court decisions
                    contribute to the legal landscape. The employment contract
                    itself serves as a crucial document governing the
                    relationship between the parties. Labor Proclamation No.
                    1156/2019 generally applies to employment contracts,
                    encompassing the recruitment process, but excludes personal
                    service contracts, managerial roles, educational or training
                    contracts, agent-principal relationships, and employees
                    governed by specific laws. Government-private individual
                    employment relationships are subject to federal and regional
                    civil service laws.
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
                <div className="my-5 text-justify font-medium">
                  <p>
                    Labour law in Ethiopia encompasses all employment
                    relationships, including those between investors and foreign
                    workers (expats). However, distinguishing between an
                    employer-employee relationship and a client-independent
                    contractor relationship can be complex. Courts have
                    established criteria to clarify these distinctions, which is
                    a common challenge globally. Factors such as the duration of
                    the relationship, the degree of control exercised, the
                    economic dependence of the parties, tax responsibilities,
                    the ability to work with multiple clients, and the provision
                    of work tools are used to differentiate between the two
                    types of relationships. Consequently, Ethiopian labor laws
                    apply specifically to employer-employee relationships rather
                    than to independent contractor arrangements.
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
                  <p>Employment Contract</p>
                </div>
                {/* normal text */}
                <div className="my-5">
                  <p>
                    Under Ethiopian labour law, employment relationships are
                    established through contracts between the parties involved.
                    The law specifies that there is no mandatory format for an
                    employment contract unless stated otherwise by specific
                    legal provisions. Therefore, as long as the agreement
                    between an employer and an employee meets the criteria of
                    offer and acceptance, and the terms of the employment
                    contract are lawful and ethical, the contract is valid
                    regardless of whether it is written or verbal. In legal
                    proceedings, any pertinent evidence may be presented to
                    substantiate the existence of an employment relationship.
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

        {/* 6 */}
        <div className="my-12 md:my-36 bg-neutral-white py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase">
                  <p>
                    In Ethiopia, employment contracts, whether written or oral,
                    must adhere to certain statutory requirements. These
                    includes:
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

        {/* 7 */}
        <div className="mb-12 md:mb-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-justify font-semibold">
                  <p>
                    For written employment contracts in Ethiopia, the law
                    mandates the inclusion of several key elements to ensure
                    clarity and legal compliance. These elements are:
                  </p>
                </div>

                <div className="pl-[5%]">
                  {employmentContractElement.map((item, index) => {
                    return (
                      <div>
                        <div className="flex gap-2 my-3">
                          <div>
                            <div className="w-[8px] mt-1.5 aspect-square rounded-full bg-yellow-400"></div>
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

        {/* 8 */}
        <div className="mb-12 md:mb-36 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Duration of employment contract</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Regarding the duration of employment contract, Ethiopian law
                    has stated that any employment contracts except those
                    mentioned below will be considered as made for indefinite
                    period of time. A contract of employment may be concluded
                    for a definite period or for piece work in the case of:-
                  </p>
                </div>

                <div className="pl-[5%]">
                  {employmentPeriod.map((item, index) => {
                    return (
                      <div>
                        <div className="flex gap-2 my-3">
                          <div>
                            <div className="w-[8px] mt-1.5 aspect-square rounded-full bg-blue-400"></div>
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

        {/* 9 */}
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
                  <p>Probationary period</p>
                </div>
                {/* normal text */}
                <div className="text-justify mt-3">
                  <p>
                    Ethiopian labor law permits employers to place new hires on
                    a probationary period to evaluate their fitness for the
                    role. However, there are certain limitations to this right.
                    For instance, employees who are rehired by the same employer
                    are not subject to another probationary period, and any
                    probation agreement must be in writing, not exceeding 60
                    days. The law also outlines specific rights for both
                    employers and employees during this period. Employers can
                    end the employment without notice and are not required to
                    provide severance or compensation. Similarly, employees have
                    the right to resign immediately without notice. As such,
                    employment contracts should be drafted with care, adhering
                    to labor laws and collective workplace agreements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 10 */}
        <div className="my-12 md:my-36 bg-neutral-50 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Minimum conditions of work</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    The minimum working conditions serve as a standard that
                    employment contracts, collective agreements, or workplace
                    rules cannot fall below. Should these documents offer less
                    protection than the minimum standard, they would be
                    nullified and superseded by the legal provisions. The law’s
                    minimum working conditions encompass aspects such as job
                    security and stability, working hours, leave entitlements,
                    as well as safety and health regulations.
                  </p>
                </div>

                <div>
                  <div>
                    <h3 className="font-bold">Leave</h3>
                  </div>
                  <div className="my-5">
                    <p>
                      Ethiopian labor law stipulates various types of leave
                      entitlements for employees. These include:
                    </p>
                  </div>
                </div>

                {/* first  */}
                <div className="bg-white shadow-md p-3 mb-10">
                  <header className="flex items-center justify-between py-1">
                    <div>
                      <h3 className="font-semibold">Annual Leave</h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-300 cursor-pointer"
                        onClick={() => {
                          setSuccessionWays(0);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`text-2xl cursor-pointer transition-transform ease-in-out duration-300 ${
                            successionWays === 0 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>
                  <div
                    className={`overflow-hidden ${
                      successionWays === 0 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="mt-1 py-1 border-t border-gray-300">
                      <p>
                        Under Ethiopian labor law, any agreement to forfeit
                        annual leave is considered invalid. Employees are
                        entitled to a minimum of 16 consecutive days of annual
                        leave, with an additional day added for every two years
                        of service.
                      </p>
                    </div>
                  </div>
                </div>

                {/* second  */}
                <div className="bg-white shadow-md p-3 mb-10">
                  <header className="flex items-center justify-between py-1">
                    <div>
                      <h3 className="font-semibold">Sick Leave</h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-400 cursor-pointer"
                        onClick={() => {
                          setSuccessionWays(1);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`text-2xl cursor-pointer transition-transform ease-in-out duration-300 ${
                            successionWays === 1 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>
                  <div
                    className={`overflow-hidden ${
                      successionWays === 1 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="mt-1 py-1 border-t border-gray-300">
                      <p>
                        Any employee who have completed his prohibition period
                        is entitled for a sick leave. The sick leave could not
                        be more than 6 months within a year be it consecutive or
                        separately. The sick leave to be granted will be with
                        full payment for the first months, the next two months
                        only 50% of the salary and the next three months should
                        be without payment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* third  */}
                <div className="bg-white shadow-md p-3 mb-10">
                  <header className="flex items-center justify-between py-1">
                    <div>
                      <h3 className="font-semibold">Maternity Leave</h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-400 cursor-pointer"
                        onClick={() => {
                          setSuccessionWays(2);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`text-2xl cursor-pointer transition-transform ease-in-out duration-300 ${
                            successionWays === 2 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>
                  <div
                    className={`overflow-hidden ${
                      successionWays === 2 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="mt-1 py-1 border-t border-gray-300">
                      <p>
                        A woman is entitled to ninety days' paid maternity
                        leave. This leave consists of a period of 30 consecutive
                        days of leave with pay preceding the presumed date of
                        her confinement and a period of 90 consecutive days'
                        leave after her confinement.
                      </p>
                    </div>
                  </div>
                </div>

                {/* fourth  */}
                <div className="bg-white shadow-md p-3 mb-5">
                  <header className="flex items-center justify-between py-1">
                    <div>
                      <h3 className="font-semibold">Leave for Family Events</h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-400 cursor-pointer"
                        onClick={() => {
                          setSuccessionWays(3);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`text-2xl cursor-pointer transition-transform ease-in-out duration-300 ${
                            successionWays === 3 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>
                  <div
                    className={`overflow-hidden ${
                      successionWays === 3 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="mt-1 py-1 border-t border-gray-300">
                      <p>
                        A worker shall been titled to leave with pay for three
                        working days where;
                      </p>
                      <div className="pl-5">
                        <p>a. He/Her concludes marriage; or</p>
                        <p>
                          b. His/Her spouse, descendants, ascendants, brother,
                          sister, uncle, aunt relative whether by consanguinity
                          or affinity dies entitled 3 working days leave with
                          pay.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p>
                    Moreover, a male employee shall be entitled to three
                    consecutive days paternity leave with full pay and a worker
                    shall also be entitled to leave without pay for up to five
                    consecutive days in the case of exceptional and serious
                    events. However, such leave may be granted only twice in a
                    budget year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 11 */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>Union leave and leave for special purpose</p>
                </div>
                {/* normal text */}
                <div className="my-5">
                  <p>
                    these leaves applies to a trade union leaders and a worker
                    in cases of hearing before the court, negotiating collective
                    agreements, attending union meetings, participating in
                    seminar and training courses, exercising voting right and
                    discharge his responsibility as witness respectively.
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

        {/* 12 */}
        <div className="my-12 md:my-36 bg-neutral-50 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Working hour, weekly rests and public holidays</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Ethiopian labor regulations stipulate that the standard work
                    schedule should not surpass 8 hours per day or 48 hours per
                    week. The work hours should be evenly distributed across the
                    week. However, if the job’s nature necessitates it, the work
                    hours for any given day can be reduced, and the shortfall
                    can be compensated on the other days of the week. This
                    adjustment must not extend a workday beyond 10 hours. Any
                    work performed beyond the normal daily hours is considered
                    overtime. Additionally, employees are entitled to a
                    continuous 24-hour rest period each week and time off on
                    public holidays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 13 */}
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
                  <p>Special employees</p>
                </div>
                {/* normal text */}
                <div className="">
                  <p>
                    Ethiopian labor laws recognize the distinct situations of
                    certain workers, grouping them as "special employees." This
                    classification includes probationary employees, apprentices,
                    young workers, women, individuals with disabilities, and
                    foreign workers. Specific regulations are outlined for each
                    group, covering areas like contract termination, working
                    hours, recruitment procedures, and suitable job assignments.
                    Employers are obligated to follow these legal provisions
                    meticulously to ensure equitable treatment and compliance
                    with the law when dealing with special employee categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 14  */}
        <div className="my-12 md:my-36 bg-neutral-50 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Foreign employees</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Foreign employees in Ethiopia are subject to distinct
                    regulations, not as a form of preferential treatment, but
                    rather as a separate category from other workers. According
                    to labor laws, foreign individuals seeking employment in
                    Ethiopia, as well as employers wishing to hire expatriates,
                    must obtain a work permit. This permit is issued by either
                    the Ministry of Labour and Social Affairs (MOLSA) or the
                    Ethiopian Investment Commission, depending on the specific
                    sector of employment. The oversight of expatriate workers in
                    Ethiopia is divided between two entities: the Ethiopian
                    Investment Commission and MOLSA. MOLSA's Expat Work Permit
                    Directive (Directive No. 23/2018) governs the employment of
                    expatriates across various sectors, with a broad scope.
                    Conversely, Directive No. 772/2021 specifically addresses
                    expatriate employment in enterprises entirely foreign-owned,
                    joint ventures between local and foreign investors,
                    investments by foreign nationals classified as domestic
                    investors, and domestic investments qualifying for
                    incentives. Expatriates under the Ethiopian Investment
                    Commission's jurisdiction must adhere to its regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 15 */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* normal text */}
                <div className="text-justify">
                  <p>
                    Regarding the issuance of work permits by MOLSA, the
                    directive outlines specific categories of individuals exempt
                    from this requirement, such as members of international
                    organizations and diplomatic councils. It also delineates
                    the criteria and documentation necessary for other employees
                    to obtain a work permit from the ministry, as well as the
                    paperwork required for initial acquisition and subsequent
                    renewal of these permits.
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

        {/* 16 */}
        <div className="mb-12 md:mb-36 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>
                    For the acquisition of new work permit the employer and the
                    expat must provide:-
                  </p>
                </div>

                <div className="pl-[5%]">
                  {acquisitionPeriod.map((item, index) => {
                    return (
                      <div>
                        <div className="flex gap-2 my-3">
                          <div>
                            <div className="w-[8px] mt-1.5 aspect-square rounded-full bg-blue-400"></div>
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

        {/* 17 */}
        <div className="my-12 md:my-36 bg-neutral-white py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-medium uppercase">
                  <p>Requirements to be met to renew work permit</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  {renewWorkPermit?.renewWorkPermitList.map((item, index) => {
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

        {/* 18 */}
        <div className="my-12 md:my-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-center">
                  <p>
                    Directive No. 772/2021 by the Ethiopian Investment
                    Commission, was established to enhance the work permit
                    issuance process for expatriates in foreign investment roles
                    and to facilitate skill and knowledge transfer to local
                    Ethiopians. This directive, which took effect on April 14,
                    2021, complements the Investment Proclamation No. 1180/2020
                    and Investment Regulation No. 474/2020, marking a
                    significant step in foreign investment reforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 19 */}
        <div className="my-12 md:my-36 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-4xl font-bold uppercase mb-5">
                  <p>
                    Key Aspects of Ethiopian investment commission Directive
                  </p>
                </div>
                {/* normal text */}

                {/* first  */}
                <div>
                  {commissionKeys?.commissionKeysList.map((item, index) => {
                    return (
                      <div className="border border-gray-200 bg-white rounded-md p-3 mb-10">
                        <header className="flex items-center justify-between py-1">
                          <div>
                            <h3 className="font-semibold">{item?.title}</h3>
                          </div>
                          <div>
                            <div
                              className="w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-50 transition-colors ease-in-out duration-300  cursor-pointer"
                              onClick={() => {
                                setCommissionKeys(prev => {
                                  return {
                                    ...prev,
                                    selectedIndex: index
                                  };
                                });
                              }}
                            >
                              <MdKeyboardArrowDown
                                className={`text-2xl cursor-pointer transition-transform ease-in-out duration-300 ${
                                  commissionKeys?.selectedIndex === index
                                    ? "-rotate-180"
                                    : "rotate-0"
                                }`}
                              />
                            </div>
                          </div>
                        </header>
                        <div
                          className={`overflow-hidden ${
                            commissionKeys?.selectedIndex === index
                              ? "h-max"
                              : "h-0"
                          }`}
                        >
                          <div className="mt-1 py-1 border-t border-gray-300">
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

        {/* 20 */}
        <div className="mb-12 md:mb-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Termination of Employment Contract</p>
                </div>

                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    According to Ethiopian labour law contract of employment may
                    be terminated by the following different reasons.
                  </p>
                </div>

                <div className="pl-[5%]">
                  {employmentContractReasons.map((item, index) => {
                    return (
                      <div>
                        <div className="flex gap-2 my-3">
                          <div>
                            <div className="w-[8px] mt-1.5 aspect-square rounded-full bg-yellow-400"></div>
                          </div>
                          <div>
                            <p>{item?.text}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <p>
                    In relation to termination of the contract by the parties,
                    the law has set conditions under which the employment
                    contract could be terminated both by the employer and
                    employee and the details of notice requirement.
                  </p>
                </div>

                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase my-5">
                  <p>The consequences of unlawful termination includes</p>
                </div>

                <div className="pl-[5%]">
                  {unlawfulConsequences.map((item, index) => {
                    return (
                      <div>
                        <div className="flex gap-2 my-3">
                          <div>
                            <div className="w-[8px] mt-1.5 aspect-square rounded-full bg-blue-600"></div>
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

        {/* 21 */}
        <div className="py-5 md:py-16 bg-neutral-800 text-white">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
              {/* right */}
              <div className="flex-grow">
                <div className="text-center text-[.85rem] md:text-[1.5rem] font-semibold">
                  <p>
                    Ethiopian labor law encompasses a range of topics including
                    occupational injuries, employee transfers, suspensions,
                    pensions, workforce reductions, trade unions, employment
                    associations, collective agreements, and labor disputes.
                    Given the complexity of these issues and their impact on
                    employment relationships, it is crucial for both employers
                    and employees to seek legal advice to prevent potential
                    legal issues. If you found yourself entangled with
                    employment issues experts within Makuta's network are
                    proficient in providing comprehensive legal services
                    customized to address these exigencies.
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

export default Property;
