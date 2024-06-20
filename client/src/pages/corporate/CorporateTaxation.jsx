import React, { useState, useMemo } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const CorporateTaxation = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Tax Compliance Support",
        text:
          "We offer legal support in preparing and submitting tax documents, guaranteeing compliance with the full spectrum of local, regional, and national tax laws. We ensure that our client meets their tax obligations accurately and efficiently. We also help clients understand their tax liabilities and obligations, advising on tax-efficient strategies for businesses and individuals."
      },
      {
        title: "Tax Optimization Strategy",
        text:
          "Our legal practice provides meticulous strategic guidance aimed at reducing tax obligations and enhancing financial savings. "
      },
      {
        title: "Legal representation",
        text:
          "We will offer a comprehensive legal support by representing clients in tax related disputes starting from tax investigation procedure to the level of representing clients in tax disputes at the tax authority to formal court litigation."
      },
      {
        title: "Corporate Transactions",
        text:
          "Handling all aspects of tax law in corporate transactions, such as mergers, acquisitions, and internal restructuring."
      },
      {
        title: "Tax Planning and Structuring",
        text:
          "Advising on the most tax-efficient way to structure a company, including international tax considerations and compliance with local tax laws."
      },
      {
        title: "Trainings",
        text:
          "Providing training sessions and updates to business organization and institutions on the latest tax laws and compliance requirements to ensure internal processes are according to the law."
      },
      {
        title: "Tax advisory services",
        text:
          "Delivering continuous counsel on taxation matters, encompassing the impact of newly enacted statutes and directives, to assist enterprises in making knowledgeable choices regarding their fiscal duties."
      },
    ],
    servicesIndex: 0,
    subServicesIndex: -1
  });

 

  const [taxAdmin, setTaxAdmin] = useState(0);

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
                  <p>Legislative Framework Governing Ethiopian Taxation</p>
                </div>

                {/* normal text */}
                <div className="my-5">
                  <p>
                    Starting from the time of Ethiopia’s transition to a federal
                    system, the tax law framework has been segmented between the
                    federal and regional authorities. The Federal Democratic
                    Republic of Ethiopia Constitution serves as the fundamental
                    legal document delineating the allocation of tax powers
                    among federal and regional entities. Constitutional
                    provisions from Articles 95 to 100 of the Constitution
                    distinctly allocate certain taxes exclusively to either
                    federal or regional jurisdiction, some concurrently, and
                    others remain as undesignated. The Constitution clearly
                    shows that individuals and business will be subject to the
                    tax jurisdictions of both federal and regional governments,
                    contingent on the income source.
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
                  Beyond the Constitution, the Ethiopian taxation legal
                  framework is further shaped by legislative enactments by both
                  the federal and regional legislators, and international
                  treaties. Additionally, international treaties endorsed by the
                  House of People’s Representatives are accorded equivalent
                  authority as legislative proclamations. Lastly, Directives,
                  circulars and advanced rulings issued by the government
                  authorities are also pivotal in the administration of the
                  nation’s taxation structure.
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
                {/* normal text */}
                <div className="">
                  <p>
                    Ethiopia’s tax regime is principally structured around a
                    schedular system, where the incomes of both individuals and
                    businesses are sorted into distinct brackets, each subject
                    to varying tax rates. Nonetheless, certain types of income
                    and taxpayers are assessed at a standard rate. The country’s
                    income tax jurisdiction on the other hand adheres to both
                    residency and source-based principles, meaning that any
                    individual earnings in Ethiopia, as well as Ethiopian
                    residents with their worldwide income, are encompassed by
                    Ethiopia’s tax jurisdiction.
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
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>Classification of tax</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    In accordance with Ethiopian tax legislation, akin to other
                    legal systems, taxes are categorized as either direct or
                    indirect based on the shiftability of the tax burden.
                  </p>
                </div>
                {/* grid */}
                <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-3 bg-white shadow-md rounded-sm">
                    <div>
                      <h3 className="font-semibold">Direct Taxes</h3>
                    </div>
                    <div className="my-2">
                      <p>
                        This tax classification applies to individuals who bear
                        both the tax burden and incidence, indicating that the
                        tax obligation cannot be shifted to another party. The
                        following income types fall under this category: -
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>Employment income tax</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>Business income tax</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>Rental income tax</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>
                            Other incomes taxes (Interests, income from games of
                            chance, casual rental income, royalty, Dividends and
                            windfall incomes.)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 bg-white shadow-md rounded-sm">
                    <div>
                      <h3 className="font-semibold">Indirect Taxes</h3>
                    </div>
                    <div className="my-2">
                      <p>
                        Under this tax classification the tax burden and
                        incidence fall under two different individuals which
                        shows there is shiftability of tax liability. Under
                        indirect taxes there exists various tax types that have
                        their own distinctive features which includes:
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>Value added taxes (VAT)</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>Excise taxes</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>Turnover taxes</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>Customs duties</p>
                        </div>
                      </div>

                      <div className="flex gap-1">
                        <div>
                          <div className="w-[7px] mt-2 aspect-square rounded-full bg-gray-700"></div>
                        </div>
                        <div>
                          <p>Sur tax</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3">Tax administration </h3>

                {/* right */}
                <div className="bg-white p-3">
                  <header className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-bold">Taxpayer Rights</h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center text-xl bg-gray-200 hover:bg-gray-300 cursor-pointer"
                        onClick={() => {
                          setTaxAdmin(0);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`transition-transform ease-in-out duration-300 ${
                            taxAdmin === 0 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>

                  <div
                    className={`overflow-hidden ${
                      taxAdmin === 0 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="border-t border-gray-300 py-2">
                      <div>
                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The right to appeal the authority’s decisions</p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The right to a refund for overpaid taxes</p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The right to revise tax assessments</p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The right to privacy of their tax information</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* duties */}
                <div className="bg-white p-3">
                  <header className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-bold">Taxpayer Duties</h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center text-xl bg-gray-200 hover:bg-gray-300 cursor-pointer"
                        onClick={() => {
                          setTaxAdmin(1);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`transition-transform ease-in-out duration-300 ${
                            taxAdmin === 1 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>

                  <div
                    className={`overflow-hidden ${
                      taxAdmin === 1 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="border-t border-gray-300 py-2">
                      <div>
                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The duty to provide truthful information</p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The duty to maintain records</p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The duty to pay taxes punctually</p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The duty to report any changes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* authority */}
                <div className="bg-white p-3">
                  <header className="flex items-center justify-between py-2">
                    <div>
                      <h3 className="font-bold">
                        Tax Authority Rights and Duties
                      </h3>
                    </div>
                    <div>
                      <div
                        className="w-[24px] aspect-square rounded-full flex items-center justify-center text-xl bg-gray-200 hover:bg-gray-300 cursor-pointer"
                        onClick={() => {
                          setTaxAdmin(2);
                        }}
                      >
                        <MdKeyboardArrowDown
                          className={`transition-transform ease-in-out duration-300 ${
                            taxAdmin === 2 ? "-rotate-180" : "rotate-0"
                          }`}
                        />
                      </div>
                    </div>
                  </header>

                  <div
                    className={`overflow-hidden ${
                      taxAdmin === 2 ? "h-max" : "h-0"
                    }`}
                  >
                    <div className="border-t border-gray-300 py-2">
                      <div>
                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>
                              The authority to prohibit tax defaulters from
                              leaving the country
                            </p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>
                              Immunity from lawsuits for enforcing or lifting
                              travel bans on taxpayers
                            </p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>
                              The power to shut down businesses that fail to pay
                              taxes
                            </p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The right to conduct searches on premises</p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>The responsibility to issue tax clearances</p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>
                              The authority to register or deregister taxpayers
                            </p>
                          </div>
                        </div>

                        <div className="my-3 flex gap-3">
                          <div>
                            <div className="w-[18px] mt-1 aspect-square rounded-full flex items-center justify-center border border-green-400 relative">
                              <FaCheck className="absolute left-1 text-[.5rem] bottom-1 text-green-400" />
                            </div>
                          </div>
                          <div>
                            <p>
                              The power to assign or revoke taxpayer
                              identification numbers
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <p>Consequences of Violating Ethiopian Tax Legislation</p>
                </div>
                {/* normal text */}
                <div className="my-5">
                  <p>
                    Beyond establishing a system for the oversight of diverse
                    taxpayer groups and specifying the rights and
                    responsibilities of stakeholders, the tax administration
                    legislation in Ethiopia also enacts legal sanctions for
                    individuals who fail to fulfill the mandated duties within
                    the tax legal framework. Hence violation of tax legislation
                    will result in the following legal consequences: -
                  </p>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <div className="px-3 py-0.5 bg-white rounded-sm shadow-md">
                    <span>Administrative measure</span>
                  </div>

                  <div className="px-3 py-0.5 bg-white rounded-sm shadow-md">
                    <span>Civil liabilities </span>
                  </div>

                  <div className="px-3 py-0.5 bg-white rounded-sm shadow-md">
                    <span>Criminal liabilities</span>
                  </div>
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
        <div className="mb-12 md:mb-36 bg-neutral-100 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-justify ">
                  <p>
                    In Ethiopia, tax responsibilities are a critical aspect of
                    financial diligence for both individuals and businesses.
                    They must ensure accurate income reporting, timely tax
                    payments, and adhere to the regulations set by federal and
                    regional authorities. These obligations are considered to be
                    crucial for promoting economic growth and equitable revenue
                    distribution. However, the intricate and dynamic nature of
                    Ethiopian tax legislation often necessitates expert legal
                    assistance.
                  </p>
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
                    Our team of Tax professionals offer invaluable support in
                    navigating the complex tax landscape, helping taxpayers
                    fulfill their duties, avoid penalties, and capitalize on
                    available tax benefits
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

export default CorporateTaxation;
