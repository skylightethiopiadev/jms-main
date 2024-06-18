import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CivilFamilyDivorce = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Advocacy and Legal Representation",
        text:
          "In the realm of divorce, our attorneys acts as a staunch defender of your legal rights and interests. They provide representation during negotiations, legal hearings, and other procedural matters, ensuring that your perspectives and concerns are adequately represented."
      },
      {
        title: "Jurisdiction and applicable laws ascertainment",
        text:
          "Under the Ethiopian legal framework, each state possesses distinct family laws, and there is also a federal law. Therefore, it’s crucial to determine the applicable law and the appropriate venue for filing a divorce petition. Our nationwide network of legal experts will guide you in identifying the correct court for submitting your divorce application."
      },
      {
        title: "Legal drafting",
        text: "draft marriage contracts and divorce agreements."
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
                  Legal Pathways: Understanding Divorce Proceedings in Ethiopia
                </p>
              </div>

              {/* normal text */}
              <div className="my-5">
                <p>
                  Divorce signifies the formal end of a marriage and is a
                  procedure that can be emotionally challenging and legally
                  intricate. It requires adherence to numerous legal steps and
                  considerations, with the aim of safeguarding the rights of
                  both individuals involved and achieving a fair resolution.
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
                In Ethiopia, it’s a common belief that marriage can be
                terminated informally through an agreement witnessed by family
                elders or simply by separating (de facto divorce). Yet, for a
                divorce to be recognized by law, it necessitates formal
                proceedings beyond just an informal pact or a document prepared
                by family elders, mediators, or legal advisors. According to
                Ethiopian family law it is courts, not any ordinary courts but
                those with a valid jurisdiction, that could ultimately declare
                divorce. Moreover, because of the high-status marriage have in
                the society, getting a divorce could be easy as it might seem.
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
              <div className="my-5">
                <p>
                  In addition to the dissolution of marriage, divorce
                  proceedings also entail significant repercussions regarding
                  the division of assets, liabilities, and child custody
                  arrangements. The Ethiopian Family Code offers a mechanism to
                  mitigate disputes over asset distribution through marriage or
                  divorce agreements. Spouses are afforded the autonomy to
                  dictate their financial relations via marital contracts, which
                  can be established prior to or during the marriage.
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
                  Navigating Asset Division: Ethiopian Law and Divorce
                  Proceedings
                </p>
              </div>
              {/* normal text */}
              <div className="my-5">
                <p>
                  A prevalent issue faced by divorcing couples is the resolution
                  of asset division. To address this, Ethiopian law not only
                  permits spouses to manage their financial matters through
                  marriage contracts but also provides guidelines for
                  distinguishing between personal and joint assets. As per the
                  Ethiopian Revised Family Code, a spouse’s personal property
                  encompasses assets owned at the time of marriage or
                  subsequently obtained via inheritance or individual gifts.
                  Such property retains its personal status in the event of a
                  sale or exchange, provided it is acknowledged by the court.
                  Personal assets are exempt from division upon divorce.
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
                  Furthermore, Ethiopian law presumes that any property in
                  possession of a spouse at the time of divorce, regardless of
                  whose name it is registered under, is considered joint
                  property. Additionally, any income generated from joint or
                  personal assets, as well as from donations made to either
                  spouse, is deemed to be joint property.
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
              <div className=" text-justify">
                <p>
                  In the course of divorce proceedings, it’s common to encounter
                  legal disputes over assets such as houses, vehicles, and land
                  acquired before or during the marriage. These issues often
                  lead to court cases. Following this, in addition to the
                  existing laws, the Ethiopian Supreme Court, which has the
                  authority to issue binding judicial decisions on all
                  subordinate courts, has made various rulings regarding the
                  division of property. These rulings are authoritative and must
                  be adhered to by spouses involved in divorce proceedings. If
                  you find yourself navigating through a divorce, it’s crucial
                  to address the complexities surrounding property settlements,
                  child custody, and family debts. Amidst the myriad of legal
                  considerations that arise, securing legal counsel and
                  representation is an essential step you shouldn’t overlook.
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

export default CivilFamilyDivorce;
