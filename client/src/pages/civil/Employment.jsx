import React, { useState, useMemo } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Employment = () => {
  const [services, setServices] = useState({
    servicesList: [
      {
        title: "Assisting the creation of Wills",
        text:
          "Assist individuals in formulating wills that are legally sound and reflect their desires for asset distribution post-mortem. We ensure these documents adhere to legal standards and address all pertinent details."
      },
      {
        title: "Securing Legal Documentation",
        text:
          "Navigate the process of acquiring essential documents like succession certificates or letters of administration, crucial for their asset transfer."
      },
      {
        title: "Property Division",
        text:
          "Manage the partitioning of assets bequeathed by ancestors, aiding in the resolution of familial disputes over inheritance claims and asset allocation."
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
          "Employ dispute resolution alternatives to circumvent protracted legal proceedings, orchestrating negotiations and mediations to achieve equitable settlements."
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

  const employmentPeriod = useMemo(
    () => [
      {
        text: "The performance of specified piece work for which the employee is employed."
      },
      {
        text:
          "The replacement of a worker who is temporarily absent due to leave or sickness or other causes."
      },
      {
        text: "The performance of work in the event of abnormal pressure of work"
      },
      {
        text: "The performance of urgent work to prevent damage or disaster to life or property, to repair defects or breakdowns in works, materials, buildings or plants of an undertaking."
      },
      {
        text: "An irregular work which relates to permanent part of the work of an employer but performed on irregular intervals."
      },
      {
        text: "Seasonal works which relate to the permanent part of the works of an employer but performed only for a specified period of the year but which are regularly repeated in the course of the years."
      },
      {
        text: "An occasional work which does not form part of the permanent activity of the employer but which is done intermittently."
      },
      {
        text: "The temporary placement of a worker who has suddenly and permanently vacated from a post having a contract of an indefinite period."
      },
      {
        text: "An occasional work which does not form part of the permanent activity of the employer but which is done intermittently."
      },
      {
        text: "The temporary placement of a worker to fill a vacant position in the period between the preparation of an organizational structure and its implementation."
      },
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
                    Defining Rights and Responsibilities: Navigating Labor and
                    Employment Law
                  </p>
                </div>

                {/* normal text */}
                <div className="my-5">
                  <p>
                    Labour law is a specialized field of legal practice focusing
                    on the dynamics between employers, employees, and unions. It
                    advocates for workers’ rights to collectively organize and
                    bargain for fair working conditions and acknowledges their
                    right to abstain from union activities.
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
                  On the other hand, employment law covers a wider spectrum of
                  workplace issues beyond union relations. It sets standards for
                  work hours, wages, and equitable hiring practices, and strives
                  to eliminate workplace discrimination and retaliation. This
                  area of law plays a crucial role in fostering a fair and just
                  relationship between employers and employees, safeguarding the
                  rights of all parties involved. Labor and employment laws
                  provide a vital legal framework that helps both employers and
                  employees navigate the complexities of workplace rights and
                  duties.
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

        {/* fourth order container */}
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

        {/* fifth order container */}
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

        {/* pre-six */}
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

        {/* pre-pre-six */}
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
        {/* post-pre-pre-six */}
        <div className="mb-12 md:mb-36 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* bold text */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">
                  <p>
                    Defining Rights and Responsibilities: Navigating Labor and
                    Employment Law
                  </p>
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
                <div className="text-justify md:text-left text-[.85rem] md:text-[1.5rem] font-semibold">
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

        {/* seventh order container */}
        <div className="my-12 md:my-36">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md">
                {/* normal text */}
                <div className="">
                  <p>
                    In the context of testate succession, Ethiopian law
                    recognizes three distinct types of wills, each with specific
                    formalities that must be strictly adhered to. This stringent
                    approach is due to the deeply personal nature of a will and
                    the fact that it only takes effect after the testator’s
                    death, leaving no opportunity for the testator to contest
                    any fraudulent challenges. The law’s rigorous formality
                    requirements are intended to minimize the risk of fraud.
                    Courts are diligent in enforcing these legal standards and
                    often do not uphold a will that fails to meet critical
                    formalities.
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
        <div className="my-12 md:my-36 bg-neutral-50 py-10">
          {/* content container */}
          <div className="static-padding-x">
            <div className="flex flex-col-reverse md:flex-row">
              <div className="w-[100%] ">
                {/* normal text */}
                <div className="my-5 text-justify font-bold text-xl">
                  <p>
                    The three types of will and their formality requirements are
                  </p>
                </div>

                {/* grid */}
                <div className="grid grid-cols-1 gap-10">
                  <div className="p-3 rounded-sm bg-white shadow-md">
                    <header className="py-2">
                      <h3 className="font-bold">Public will </h3>
                    </header>
                    <div>
                      <p>
                        In Ethiopia, the creation of a public will necessitate
                        its oral presentation in the presence of the testator
                        and a minimum of four witnesses. The testator can
                        prepare the will with or without the witnesses present.
                        However, it is essential for the will to be declared
                        audibly in the presence of both the testator and the
                        witnesses, and this requirement must be clearly stated
                        within the will. Following the reading, it is crucial
                        for the testator and all witnesses to sign the document
                        immediately. In certain cases, the law permits the
                        presence of only two witnesses to maintain the will’s
                        validity.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-sm bg-white shadow-md">
                    <header className="py-2">
                      <h3 className="font-bold">Holographic will</h3>
                    </header>
                    <div>
                      <p>
                        This type of will, known as a holographic will, is one
                        that the testator personally drafts without the presence
                        of any witnesses. It must be unambiguously identified as
                        a will, and any alterations or revocations can render it
                        void. The will should be in the testator’s own
                        handwriting; if produced mechanically, it must include a
                        handwritten note on each page confirming the testator’s
                        authorship.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-sm bg-white shadow-md">
                    <header className="py-2">
                      <h3 className="font-bold">Oral will</h3>
                    </header>
                    <div>
                      <p>
                        This type of will, often created under extraordinary
                        circumstances, is typically drafted when the testator
                        anticipates imminent death. It permits only a restricted
                        scope of testamentary instructions. Not all of the
                        testator’s assets may be allocated through this will. It
                        is limited to funeral arrangements, bequeathing a
                        specific individual no more than 500 birr, and
                        appointing guardians or tutors for the testator’s minor
                        children.
                      </p>
                    </div>
                  </div>
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
                    Understanding Testamentary Freedom: The Dynamics of
                    Ethiopian Will Revocation and Nullification
                  </p>
                </div>
                {/* normal text */}
                <div className=" text-justify">
                  <p>
                    Under Ethiopian law, the existence of a will does not
                    obligate the testator to its terms during their lifetime,
                    nor does it guarantee the will’s automatic enactment upon
                    their death. A testator retains the right to revoke their
                    will at any time while alive, whether by drafting a new
                    will, physically destroying the existing one, or
                    transferring ownership of the bequeathed property. This
                    ensures that the testator has complete control over their
                    will’s provisions throughout their life.
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
                <div className="my-5">
                  <p>
                    When a person passes away intestate, meaning without a will,
                    Ethiopian succession law dictates that their estate is
                    distributed according to statutory guidelines rather than
                    personal wishes. The law assumes the likely intentions of
                    the deceased and allocates the estate based on familial
                    proximity. In such cases, the order of inheritance begins
                    with the deceased’s children or their descendants, who are
                    entitled to equal shares of the estate. If there are no
                    children or descendants, the parents inherit next. Should
                    the parents be deceased, their share passes to their own
                    descendants. In the absence of parents or their descendants,
                    the grandparents are next in line. If there are no living
                    relatives up to the fourth degree of kinship which is the
                    great grandparents, the state inherits the estate as
                    ‘Escheat’. This legal structure ensures a systematic and
                    fair distribution of assets among the deceased’s next of
                    kin.
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
                <div className="">
                  <p>
                    Following the demise of a testator or an individual who dies
                    intestate (without a will), the process of succession
                    commences, leading to the estate’s liquidation. This
                    involves the steps of pinpointing and summoning the heirs,
                    cataloging the estate’s components, collecting owed amounts,
                    settling the estate’s liabilities—including the decedent’s
                    debts, obligations linked to the estate, and support
                    payments—disbursing specific bequests, providing a financial
                    summary, and distributing the assets.
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
                    Once liquidation is complete, the executor compiles a report
                    for both the heirs and the court. Subsequently, the
                    identified heirs may petition the court for a certificate of
                    succession. Liquidation is a demanding process that often
                    requires the expertise of professionals, particularly when
                    the deceased has left behind substantial assets. It is a
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
                      <h3 className="font-bold">Period of limitation </h3>
                    </header>
                    <div>
                      <p>
                        In Ethiopian succession law, there are time constraints
                        known as periods of limitation. If successors do not act
                        within these timeframes to claim their inheritance, they
                        may forfeit their rights as heirs. Different limitations
                        apply to various claims on the deceased’s assets. It’s
                        crucial for individuals to assert their legal rights
                        promptly and seek legal counsel if there’s any delay to
                        determine if their rights are still valid.
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
                        legal advice.
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
                <div className="text-justify md:text-left text-[.85rem] md:text-[1.5rem] font-semibold">
                  <p>
                    If you found yourself in succession issues, it’s crucial to
                    address the complexities surrounding liquidation, period of
                    limitation, and entitlements. Amidst the myriad of legal
                    considerations that arise, securing legal counsel and
                    representation is an essential step you shouldn’t overlook.
                    The succession law specialists within makuta’s network are
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

export default Employment;
