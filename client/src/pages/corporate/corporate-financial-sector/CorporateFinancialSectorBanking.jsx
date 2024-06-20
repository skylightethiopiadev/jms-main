import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CorporateFinancialSectorBanking = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Legal Consultation - Licensing and Permit",
        text:
          "The licensing and permit process involves providing consultation and support to investors or banks, whether domestic or foreign-owned, to obtain a business license for operating banking businesses in Ethiopia."
      },
      {
        title: "Legal Consultation - Fin-Tech, Digital Banking, E-Commerce",
        text:
          "In addition to ordinary banking activities, we offer a comprehensive legal consultation on regulatory framework concerning fin-tech, digital banking, e-commerce and related activities."
      },
      {
        title: "Due Diligence & Risk Management",
        text:
          "We assist our clients in conducting comprehensive due diligence assessments to pinpoint legal liabilities and craft effective risk reduction strategies. We meticulously evaluate potential hazard and devise plans to minimize their impact, ensuring a robust legal framework for our clients’ operations."
      },
      {
        title: "Legal Compliance",
        text:
          "We provide guidance to our clients to ensure their operations comply with the legal frameworks established for regulating banking activities. These banking legislation governs areas like foreign loans, credit facilitation, use of offshore bank accounts, negotiable instruments, security and collaterals, and, other banking activities. Our support helps navigate and adhere to the laws that govern the financial sector, maintaining lawful and ethical business practices."
      },
      {
        title: "Drafting and Review Contracts",
        text:
          "we provide Assistance in crafting banking services related contracts that are clear, compliant with regulations, and tailored to meet the specific needs of individuals. Additionally, we evaluate banking contracts to uncover any deficiencies or areas of concern."
      },
      {
        title: "Legal Representation",
        text:
          "We Represent banks, business or individuals in litigation before court or alternate resolution forums. This service includes Preparation of legal documents that are used to the litigation process."
      }
    ],
    servicesIndex: 0,
    subServicesIndex: -1
  });

  const [successionWays, setSuccessionWays] = useState("Testate succession");

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
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    The significance of the banking sector is immense for both
                    personal finances and the broader economy, serving as a
                    critical pillar for fiscal health and expansion. For people,
                    banks offer a secure place for their money, ease daily
                    financial activities, and provide credit options, which are
                    fundamental for managing finances and pursuing investments.
                    From an economic perspective, banks are instrumental in
                    mobilizing funds for investment, aiding businesses with
                    financial products, and facilitating economic activities.
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
                  They also play a vital role in the execution of monetary
                  policy, affecting both interest rates and the overall
                  financial liquidity. In essence, the effective operation of
                  the banking system is indispensable for the progression of the
                  economy, encouraging entrepreneurial ventures, and enhancing
                  collective wealth.
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
                    Legal Foundations of Ethiopia's Banking Sector: From
                    Licensing to Consumers Protection
                  </p>
                </div>
                {/* normal text */}
                <div className="text-justify">
                  <p>
                    In Ethiopia, the National Bank of Ethiopia (NBE) holds the
                    mandate for comprehensive oversight of the banking industry,
                    ensuring adherence to both prudential and conduct-related
                    regulations. The nation’s legal system, inclusive of a
                    diverse range of laws from the commercial code to specific
                    regulations and directive, shapes the regulatory environment
                    for the Banking industry. Ethiopian banking laws govern an
                    extensive range of financial activity including bank
                    operations and international transactions. These laws also
                    address legal issues like consumer protection, prudential
                    criteria for banking operations, bank licensing and
                    supervision, and the legal foundation for negotiable
                    instruments.
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
                <div className="my-5 text-center">
                  <p>
                    In Ethiopia, the banking legislation is essential for
                    maintaining the stability of the banking system,
                    safeguarding the money of depositors, and generating
                    financial stability. By being informed of their rights and
                    obligations under Ethiopian banking legislation, banks and
                    customers can preserve an open and secure financial
                    environment that supports the entire economy.
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
                  <p>
                    Legal Framework Governing Banking Services in Ethiopia:
                    Ensuring Compliance and Service Delivery
                  </p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    The NBE is empowered to enforce compliance in cases of
                    noncompliance with banking laws or regulations by imposing
                    penalty, revoking licenses, or pursuing legal action against
                    banks and those carrying banking activity. Penalties, fines,
                    or other disciplinary actions may be taken against banks
                    that violate regulatory standards in order to address
                    shortcomings and safeguard the interests of stakeholders and
                    depositors. Sustaining market discipline, encouraging
                    transparency, and protecting the integrity of the banking
                    industry are all made possible by efficient enforcement
                    systems.
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
                <div className="text-3xl md:text-3xl lg:text-3xl font-bold uppercase">
                  <p>
                    Comprehensive Financial Services Offered by Banks in
                    Ethiopia and importance of legal professionals
                  </p>
                </div>
                {/* normal text */}
                <div className="text-justify">
                  <p>
                    Banks cater to a wide array of financial needs for both
                    personal and corporate clients. Individuals have access to
                    services like checking and savings accounts, certificates of
                    deposit, personal loans, credit cards, and digital banking
                    solutions. Businesses benefit from specialized deposit
                    accounts, commercial and real estate loans, credit card
                    services, and financial advisory. The provision of these
                    services is governed by a complex set of legal requirements,
                    ensuring proper service delivery and acquisition.
                    Additionally, the multifaceted nature of financial
                    transactions often leads to disputes, underscoring the
                    necessity for the expertise of legal practitioners to
                    navigate these challenges and provide resolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 7 */}
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
                    At Makuta Law Firm, our seasoned experts in Financial laws
                    are dedicated to delivering customized legal solutions that
                    prioritize your business or personal goals. We ensure that
                    our services are aligned with your unique needs and
                    aspirations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 8 */}
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

export default CorporateFinancialSectorBanking;
