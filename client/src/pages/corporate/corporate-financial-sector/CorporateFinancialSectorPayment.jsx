import React, { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CorporateFinancialSectorPayment = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Assisting The Drafting of Will",
        text:
          "Assist individuals in formulating will that are legally sound and reflect their desire for estate distribution post-mortem. We ensure these documents adhere to legal standards and address all pertinent details."
      },
      {
        title: "Securing Legal Documentation",
        text:
          "Assisting individuals navigate the process of acquiring essential documents to secure rights."
      },
      {
        title: "Property Division",
        text:
          "MManage the partitioning of assets bequeathed by the deceased, aiding in the resolution of familial disputes over inheritance claims and estate allocation."
      },
      {
        title: "Court Representation",
        text:
          "Act on behalf of clients in court, advocating for asset distribution in alignment with the deceased’s intentions or the law, while providing ongoing legal counsel."
      },
      {
        title: "Will Disputes",
        text:
          "Assist those who feel unjustly omitted from a will, evaluating claim legitimacy and providing court representation as needed."
      },
      {
        title: "Dispute Resolution",
        text:
          "Employ dispute resolution alternatives to circumvent protracted legal proceedings, orchestrating negotiations and mediation to achieve equitable settlements."
      },
      {
        title: "International Succession Consultation",
        text:
          "Offer guidance on the implications of international wills and manage the intricacies of cross-border inheritance for clients with global assets."
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
                  <p>Development of Digital financial services in Ethiopia</p>
                </div>

                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    In the dynamic financial landscape of Ethiopia, the
                    emergence of digital financial services has blurred the
                    traditional boundaries between financial and non-financial
                    sectors. The National Bank of Ethiopia (NBE), as the
                    regulatory authority, has adapted to these changes by
                    extending its oversight to include non-traditional entities
                    providing financial services.
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
                  The Directive ONPS/01/2020 marks a significant shift, allowing
                  technology companies to offer digital financial services,
                  previously the domain of conventional financial institutions.
                  This directive is pivotal for tech companies venturing into
                  the financial service sector, subjecting them to the same
                  regulatory framework as traditional banks.
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
                  <p>Regulatory Authority</p>
                </div>
                {/* normal text */}
                <div className="text-justify">
                  <p>
                    The NBE holds the authority to regulate banking business,
                    which now includes digital financial services. The bank’s
                    mandate covers the prudential regulation of entities that
                    establish and operate payment systems and issue payment
                    instruments.
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
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Definition of Payment Instrument Issuers</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Payment instrument issuers encompass a broad range of
                    entities, both private and government-owned, that are
                    licensed by the NBE. These issuers provide instruments,
                    tangible or intangible, facilitating access to money, goods,
                    services, or enabling payments and money transfers.
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
                  <p>Payment system operator</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    These are entity’s that owns, operates, and administers a
                    payment system. This system is used to settle the transfer
                    of funds or financial transactions, which includes the
                    institutions, the people, the rules and procedures,
                    standards, and the technology that enable the financial
                    transaction to occur.
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
                  <p>Parties Involved</p>
                </div>
                {/* normal text */}
                <div className="text-justify">
                  <p>
                    A Payment Instrument Issuer in Ethiopia may be a corporate
                    entity, a state-run enterprise, or a banking or microfinance
                    institution that has received authorization from the NBE to
                    issue means of payment. On the other hand, a Payment System
                    Operator might be any licensed financial institution or
                    company that has been granted permission to set up and
                    manage a payment system.
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
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>Licensing Requirement</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    A license from the NBE is mandatory for any entity to issue
                    a payment instrument or serve as a payment instrument
                    operator. In general, the activities related to digital
                    financial services are subject to regulation and oversight
                    by the NBE.
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
                  <p>Scope of Regulation</p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Beyond banks and insurance companies, the NBE’s regulatory
                    scope includes other financial institutions such as postal
                    savings and money transfer entities. The NBE has the power
                    to define and regulate additional financial institutions as
                    necessary. Within this regulatory capacity and payment
                    instrument issuer or operators to be or already
                    participating in the market must aligned its objectives and
                    function with the NBEs regulatory measures.
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

        {/* 66666 order container */}
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
                    At Makuta Law Firm, our dedicated team of legal
                    professionals are committed to meticulously creating and
                    examining a variety of contracts, ensuring compliance with
                    Ethiopian regulations while placing your priorities at the
                    forefront.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ninth order container */}
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
                    Importance of Legal Professionals in Navigating Regulatory
                    Compliance
                  </p>
                </div>
                {/* normal text */}
                <div className=" text-justify">
                  <p>
                    In Ethiopia, issuing of payment instruments is classified as
                    a financial service, subject to rigorous regulatory
                    standards. Engaging in these activities demands compliance
                    with the strict regulatory requirements set forth by the
                    NBE. Consequently, the complexity of these regulations makes
                    the assistance of legal professionals essential to navigate
                    the legal landscape successfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tenth order container */}
        <div className="my-12 md:my-36 bg-neutral-50 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-justify font-medium">
                  <p>
                    Under the law, a will may become void not only through the
                    testator’s revocation but also under certain conditions
                    stipulated by law. One of such condition is the non-deposit
                    of a holographic will; it must be filed with a court
                    registry or notary within seven years of its creation. Other
                    circumstances that can nullify a will include the birth of a
                    child, the dissolution of marriage, and scenarios involving
                    the death, disqualification, or revocation of the
                    beneficiary named in the will.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* post-10 */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* bold text */}
                <div className="header-level-3 uppercase">
                  <p>
                    Inheritance Without a Will: Navigating Ethiopian Intestate
                    Succession Laws
                  </p>
                </div>
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    When a person passes away without a will, The law dictates
                    that the estate is distributed according to statutory
                    guidelines rather than personal wishes. The law assumes the
                    likely intentions of the deceased and allocates the estate
                    based on familial proximity. In such cases, the order of
                    inheritance begins with the deceased’s children or their
                    descendants, who are entitled to equal shares of the estate.
                    If there are no children or descendants, the parents inherit
                    next. Should the parents be deceased, their share passes to
                    their own descendants. In the absence of parents or their
                    descendants, the grandparents are next in line. If there are
                    no living relatives up to the fourth degree of kinship, the
                    state inherits the estate as an ‘Escheat’. This legal
                    structure ensures a systematic and fair distribution of
                    assets among the deceased’s next of kin.
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

        {/* pre-11 */}
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
                  <p>Liquidation</p>
                </div>
                {/* normal text */}
                <div className="text-justify">
                  <p>
                    Following the demise of a testator or an individual who dies
                    intestate (without a will), the process of succession
                    commences, leading to the estate’s liquidation. This
                    involves steps of pinpointing and summoning the heirs,
                    cataloging the estate’s components, collecting owed amounts,
                    settling the estate’s liabilities—including the decedent’s
                    debt and support payments, providing a financial summary,
                    and distributing the estates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* pre-pre-11 */}
        <div className="my-12 md:my-36 bg-neutral-50 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-justify">
                  <p>
                    Once liquidation is complete, the liquidator compiles a
                    report for both the heirs and the court. Subsequently, the
                    identified heirs may petition the court for a certificate of
                    succession. Liquidation is a demanding process that often
                    requires the expertise of professionals, particularly when
                    the deceased has left behind substantial estates. It is a
                    pivotal step that ultimately establishes the successors and
                    enables them to legally obtain their inheritance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* eleventh order container */}
        <div className="my-12 md:my-36 bg-neutral-50 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-justify font-bold text-xl">
                  <p>
                    Understanding Time Limits: Navigating Periods of Limitation
                    in Ethiopian Succession Law
                  </p>
                </div>

                {/* grid */}
                <div className="grid grid-cols-1 gap-10">
                  <div className="p-3 rounded-sm bg-white shadow-md">
                    <header className="py-2">
                      {/* <h3 className="font-bold">Period of limitation </h3> */}
                    </header>
                    <div>
                      <p>
                        In Ethiopia's succession law, there are time constraints
                        known as periods of limitation. If successors do not act
                        within these timeframe to claim their inheritance, they
                        may forfeit their rights as heirs. Different limitations
                        apply to various claims on the deceased’s estates.
                        Therefore, It is crucial for individuals to assert their
                        legal rights promptly and seek legal counsel.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-sm bg-white shadow-md">
                    <header className="py-2">
                      <h3 className="font-bold">
                        Resolving Succession Disputes in Ethiopia: The Role of
                        Legal Experts
                      </h3>
                    </header>
                    <div>
                      <p>
                        Succession matters in Ethiopia, whether involving a will
                        or not, often lead to legal disputes. Common issues
                        brought before the courts include the initiation of
                        succession, the court’s jurisdiction over such matters,
                        the liquidation of the estate, adherence to will
                        formalities, the debts of the estate, and the division
                        of the deceased’s estates. Given the contentious nature
                        of succession in Ethiopia, anyone looking to draft a
                        will or who is involved in an inheritance should seek
                        legal assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* pre-12 */}
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
                    If you find yourself in succession issues, it is crucial to
                    address the complexities surrounding liquidation, period of
                    limitation, and entitlements. Amidst the myriad of legal
                    considerations that arise, securing legal counsel and
                    representation is an essential step you should not overlook.
                    The succession law specialists within Makuta’s network are
                    equipped to offer comprehensive legal services tailored to
                    these needs.
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

export default CorporateFinancialSectorPayment;
