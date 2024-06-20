import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CorporateFinancialSectorCapitalMarket = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Document Preparation and Review",
        text:
          "Drafting and reviewing legal documents such as prospectuses, offer documents, and contracts related to capital market activities."
      },
      {
        title: "Licensing",
        text:
          "Engagement in the capital market as a service provider mandate obtaining a license from the regulatory authority. Therefore, we are committed to assisting you in establishing your organization or services to meet all legal prerequisites."
      },
      {
        title: "Regulatory Compliance",
        text:
          "Navigating the intricate regulatory landscape and legal frameworks is essential for capital market participants to maintain adherence to the law and prevent any legal repercussions. We provide guidance to facilitate this process."
      },
      {
        title: "Initial Public Offerings (IPOs)",
        text:
          "We support firms in their transition to public entities by providing guidance on regulatory adherence, preparing prospectuses, and confirming observance of securities regulations. Initial Public Offerings (IPOs) entail the distribution of shares to the general populace."
      },
      {
        title: "Legal Due Diligence",
        text:
          "Conducting thorough legal due diligence on target companies or projects to identify legal risks and liabilities. This involves reviewing contracts, agreements, corporate documents, and other relevant materials."
      },
      {
        title: "Litigation and Dispute Resolution",
        text:
          "Representing clients in disputes related to capital market transactions and advising on litigation risk management."
      }
    ],
    servicesIndex: 0,
    subServicesIndex: -1
  });

  const [successionWays, setSuccessionWays] = useState("Testate succession");

  return (
    <div className="text-[1.05rem]">
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
                  <p>Commencement of the capital market</p>
                </div>

                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Ethiopia is actively working towards the establishment of a
                    capital market. The country has set up the Ethiopian Capital
                    Market Authority, which holds the overarching regulatory
                    responsibility for the capital market. Additionally,
                    Ethiopia has formed the Ethiopian Securities Exchange (ESX),
                    the first and only organized securities exchange in the
                    nation, designed to function as a financial platform for
                    businesses and the government to obtain long-term financing.
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
              <div className="text-justify p-5 bg-white rounded-md shadow-2xl mx-24">
                <p>
                  The capital market is anticipated to be a venue where the
                  government, businesses, and individuals can acquire funding
                  and make investments. In this evolving landscape, if one seeks
                  to raise funds and engage in trading within the primary and
                  secondary markets, it is essential to comply with various
                  formal requirements and legal procedures. Therefore, obtaining
                  legal advice is imperative.
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
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>
                    Activities Regulated by the Ethiopian Capital Market
                    Authority
                  </p>
                </div>
                {/* normal text */}
                <div className="text-justify">
                  <p>
                    In the rapidly developing capital markets of Ethiopia,
                    legislation stipulates that all activities associated with
                    the capital market, as listed below, will fall under the
                    regulatory purview of the Capital Market Authority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* fourth order container */}
        <div className="my-12 md:my-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-center">
                  <p>
                    These activities includes buying, selling and dealing in
                    securities, investment advice, underwriting, fund
                    management, corporate finance advice relating to
                    acquisitions, mergers, divestures, combinations and other
                    activities that involve buying, selling, and exchanging
                    securities, custodial services, collective investment
                    schemes, credit rating services, and any other activity
                    deemed by the Authority as a regulated activity. Therefore,
                    individuals engaged or desiring to engage in these
                    activities are required to obtain a license from the CMA and
                    operate in accordance with the established legal frameworks.
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
                    Authorized Service Providers in Ethiopia's Capital Market
                  </p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Ethiopia’s capital market framework has authorized a diverse
                    group of 15 service providers, including stock brokers,
                    securities dealers, digital securities brokers, investment
                    banks, sharia-compliant securities advisors, investment
                    advisors, operators of collective investment schemes,
                    crowdfunding brokers, market makers, custodians, portfolio
                    managers, management firms, appraisal and valuation
                    agencies, and designated representatives. The legislation
                    also outlines specific procedural requirements that must be
                    met by individuals or organizations wishing to operate
                    within the capital market in any of these roles. Therefore,
                    it is essential for anyone looking to become a service
                    provider in this sector to seek legal guidance to properly
                    fulfill their designated duties.
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
                    At Makuta Law Firm, our seasoned experts on capital market
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

        {/* seventh order container */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>
                    Legal Guidance for Organizations, Investors, and Financial
                    Institutions
                  </p>
                </div>
                {/* normal text */}
                <div className="text-justify">
                  <p>
                    Securing legal advice is fundamental in the financial
                    markets. It’s vital for organizations, investors, and
                    financial institutions to obtain professional guidance.
                    Organizations depend on such advice for adhering to
                    regulations, making precise disclosures, and managing risks
                    effectively. Moreover, expertise in regulatory compliance
                    and risk reduction is crucial. Engaging with legal
                    professionals is a key step towards ensuring the success of
                    financial transactions. Investors also gain from legal
                    advice, which helps them understand their rights and
                    identify potential investment opportunities.
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
        {/* 12 order container */}
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

export default CorporateFinancialSectorCapitalMarket;
