import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CorporateFinancialSectorInsurance = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Legal consultancy",
        text:
          "We render legal advice both for policyholders and insurers in navigating complex legal issues, ensuring clarity, compliance, and protection within the insurance industry."
      },
      {
        title: "Policy Drafting and Review",
        text:
          "Assistance in crafting insurance policies that are clear, compliant with regulations, and tailored to meet the specific needs of individuals. Additionally, we offer services to evaluate current insurance policies to uncover any deficiencies or areas of concern."
      },
      {
        title: "Regulatory Compliance",
        text:
          "Assist insurers in adhering to the full spectrum of legal and regulatory mandates. This service ensures that insurers secure the appropriate licenses, uphold solvency criteria, and conform to the protocols set forth by the industry’s governing bodies."
      },
      {
        title: "Litigation and Court Representation",
        text:
          "When disputes arise, we represent clients in court and arbitration tribunals. We handle lawsuits related to coverage disputes, liability claims, and other legal matters."
      },
      {
        title: "Risk Assessment and Mitigation",
        text:
          "Legal professionals conduct evaluations of potential risks tied to insurance offerings and provide counsel on strategies for managing those risks. Their expertise is crucial in guiding insurers to sidestep legal complications."
      },
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
                  <p>
                    The Vital Role of the Insurance Sector in Economic
                    Development
                  </p>
                </div>

                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Beyond the realms of banking and microfinance, the insurance
                    sector is a cornerstone of a country’s financial framework.
                    It plays a pivotal role in bolstering economic progress
                    through its involvement in business dealings and commercial
                    agreements. A robust insurance market is instrumental in the
                    efficient allocation of national capital and steering
                    resources towards productive investments. Furthermore,
                    insurance acts as a crucial shield for both businesses and
                    individuals, managing risks and offering financial defense
                    against unpredictable events.
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
                  For business It ensures the protection of business assets,
                  manages liabilities, and guarantees operational continuity
                  amid disruptions, which is vital for sustained growth. For
                  individuals also, it provides a safeguard offering financial
                  coverage for losses stemming from accidents, health issues, or
                  property damage enabling a bounce-back without crippling
                  financial distress. Fundamentally, insurance fortifies
                  economic steadiness, cultivates community resilience, and
                  propels forward-looking business initiatives by reducing the
                  dread of overwhelming losses.
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
                    The Vital Role of the Insurance Sector in Economic
                    Development
                  </p>
                </div>
                {/* normal text */}
                <div className=" mt-5 text-justify">
                  <p>
                    In Ethiopia, the National Bank of Ethiopia holds the mandate
                    for comprehensive oversight of the insurance market,
                    ensuring adherence to both prudential and market conduct
                    regulations. The nation’s legal system, inclusive of a
                    diverse range of laws from the commercial code to specific
                    regulations and directive, shapes the regulatory environment
                    for the insurance industry.
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
                    This framework addresses key aspects such as the details of
                    insurance policy conditions, adherence to regulatory norms,
                    safeguarding consumer interests, and the mechanisms for
                    dispute resolution. Moreover, Ethiopian insurance
                    regulations establish the procedures for setting up and
                    managing insurance companies, with a focus on licensing and
                    solvency standards to maintain the financial integrity of
                    the insurers.
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
                    Mutual Disclosure Requirements Between Insurers and
                    Policyholders
                  </p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Under insurance regulations, policyholders are entitled to
                    clear and accurate information regarding their insurance
                    contracts, which includes details on coverage limits,
                    premium obligations, and the procedures for filing claims.
                    Simultaneously, policyholders are obligated to disclose all
                    relevant facts to the insurer to ensure an accurate
                    evaluation of the risk and the determination of the
                    appropriate premium. This mutual exchange of information is
                    fundamental to the legality, integrity, and efficacy of the
                    insurance agreement.
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
                    At Makuta Law Firm, our seasoned experts on corporate law
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
                    Role of Legal Counsel in Ensuring Regulatory Adherence and
                    Protection
                  </p>
                </div>
                {/* normal text */}
                <div className="mt-5 text-justify">
                  <p>
                    The insurance industry is multifaceted and ever-evolving,
                    offering a safeguard against various risks to both private
                    individuals and business. It spans an array of offerings
                    from personal life and health policies to business-related
                    property and liability insurances, along with niche coverage
                    options.
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

        {/* eight order container */}
        <div className="my-12 md:my-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-center text-xl">
                  <p>
                    Individuals face the task of choosing appropriate policies,
                    navigating the claims process, and asserting their legal
                    rights, while legal expertise is vital for policy
                    interpretation, equitable advocacy, and dispute resolution.
                    For businesses, these challenges include conducting risk
                    assessments, adhering to contractual and regulatory
                    mandates, and managing claims, with legal counsel being
                    indispensable for ensuring transparency, regulatory
                    adherence, and overall protection in this complex field.
                  </p>
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

export default CorporateFinancialSectorInsurance;
