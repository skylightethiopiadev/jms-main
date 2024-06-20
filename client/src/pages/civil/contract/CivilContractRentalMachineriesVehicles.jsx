import React, { useState } from 'react'

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


const CivilContractRentalMachineriesVehicles = () => {

  const [services, setServices] = useState({
    servicesList: [
      {
        title: 'Compliance with Legal Frameworks',
        text: 'Ensure that rental contracts comply with relevant laws and regulations applicable to machineries in Ethiopia.',
      },
      {
        title: 'Drafting and Reviewing Rental aAgreements',
        text: 'Assist our clients in formulating customized agreements for renting machinery, ensuring all critical details such as equipment specifics, schedules for payments, liability, indemnification and party obligations are clearly outlined. We also meticulously evaluate and refine existing contracts to rectify any deficiencies, unclear terms, or detrimental conditions, recommending modifications to safeguard the interests of all involved entities.',
      },
      {
        title: 'Due Diligence Services',
        text: 'Assist clients investigating and assessing various legal aspects before entering into a rental agreement.',
      },
      {
        title: 'Legal Representation',
        text: 'In the event of any dispute related to rental contracts our legal team is prepared to represent clients in any court action or arbitration.',
      },
      {
        title: 'Legal Consultation',
        text: 'Our expert group is equipped to provide thorough advice and address any legal queries. We will assist clients with resolving disputes and provide clear explanations regarding the termination and renewal aspects of contracts.',
      },
    ],
    servicesIndex: 0,
    subServicesIndex: -1,

  })

  return (
    <div>

      {/* first order container */}
      <div className='relative'>

        {/* bg container */}
        <div className='relative lg:absolute lg:inset-0 -z-30 flex'>
          {/* left */}
          <div className='w-0 lg:w-[50%] bg-white'></div>
          {/* right */}
          <div className='w-full lg:w-[50%] flex relative'>
            {/* right-left */}
            <div className='absolute left-0 top-0 h-full z-10 w-0 lg:w-[65%] bg-gradient-to-r from-white to-transparent'></div>
            {/* right-right */}
            <div className='w-[100%] overflow-hidden relative z-0'>
              <div className='w-full h-[150px] sm:h-[210px] lg:h-full overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://www.tatamotors.com/wp-content/themes/TataMotors/images/Passenger-Vehicle-desktop.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* content container */}
        <div className='static-padding-x py-10 md:py-16 relative z-30'>
          {/* content */}
          <div className='flex'>
            {/* left */}
            <div className='w-full lg:w-[50%]'>
              {/* bold text */}
              <div className='text-3xl md:text-4xl lg:text-5xl font-bold uppercase'>
                <p>
                  Protect Yourself: Understanding the Legal Complexities of Machinery Rental Agreements
                </p>
              </div>

              {/* normal text */}
              <div className='my-5 text-justify'>
                <p>
                  In the routine conduct of both commercial and personal affairs, the necessity for various types of machinery is a given. Yet, individual access to such equipment may not always be straightforward, making rental services a viable alternative. The contractual agreements governing machinery rental are complex, subject to stringent legal stipulations and a myriad of legal implications that accompany these agreements. This complexity underscores the need for careful navigation through the contractual landscape to ensure compliance and mitigate potential legal challenges.
                </p>
              </div>

            </div>
            {/* right */}
            <div className='w-0 lg:w-[50%] bg-transparent'></div>
          </div>
        </div>

      </div>


      {/* second order container */}
      <div className='my-12 md:my-36'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row'>

            <div className='w-[100%] md:w-[50%] relative'>
              <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://www.shutterstock.com/image-photo/law-theme-mallet-judge-enforcement-600nw-1938588952.jpg" alt="" />
              </div>
            </div>

            <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
              {/* normal text */}
              <div className='my-5 text-justify'>
                <p>
                  Rental of machinery is frequently utilized in industries like construction, agriculture, manufacturing, and entertainment, where legal complexities are a given. These areas often entail intricate legal situations, making it imperative that rental agreements are crafted with great attention to detail to address the specific needs and legal requirements of each sector. Significant legal concerns in machinery rental contracts encompass aspects such as rental fee and payment terms, maintenance and repair, liability and indemnification. Therefore, it’s crucial for these contracts to explicitly address these issues if not disputes are inevitable.

                </p>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* post-second order container */}
      <div className='my-12 md:my-36'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col-reverse md:flex-row'>

            <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
              {/* bold text */}
              <div className='header-level-3 uppercase'>
                <p>
                  Safeguard Your Interest: Understanding Machinery Rental Agreements in Ethiopia
                </p>
              </div>
              {/* normal text */}
              <div className='my-5 text-justify'>
                <p>
                In Ethiopia, the legal system aiming to foster a supportive environment for alternative financing options for investors and individuals eager to engage in machinery rental investment activities has come up with Specific legislation such as the Capital Goods Leasing Business Proclamation, Investment Proclamation, and the Proclamation on Registration and Control of Construction Machinery, along with the Civil Code to regulate rental agreements and investment in rental of machinery business. Consequently, machinery rental agreements and investment in Ethiopia must adhere strictly to these laws to ensure legal compliance and avoid disputes. 
                </p>
              </div>
            </div>

            <div className='w-[100%] md:w-[50%] relative'>
              <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://onecms-res.cloudinary.com/image/upload/s--uuxrzmSO--/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/singapore-court-hearings-safe-distancing_0.jpg?itok=bN5ksaZq" alt="" />
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* pre-third order container */}
      <div className='my-12 md:my-36'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row'>

            <div className='w-[100%] md:w-[50%] relative'>
              <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://info.serpac.it/hubfs/5%20way%20to%20transport.jpg" alt="" />
              </div>
            </div>

            <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>

              {/* normal text */}
              <div className='text-justify'>
                <p>
                  The procurement of machinery on a rental basis entails intricate legal stipulations, encompassing the formulation of lease contracts to the detailed provisions of accountability, maintenance, and indemnification. These contracts delineate not merely the lessee and duration, but also assign responsibility for maintenance, apportion risk for injuries incurred during operation, and detail the conditions of remuneration and operational terms. The propensity for contention arising from the contracts and legislative requirements necessitates the engagement of legal counsel. An attorney’s expertise is crucial in ensuring that contractual terms are transparent, equitable, and legally binding, thereby safeguarding all involved entities against unexpected legal and financial liabilities.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* third order container */}
      <div className='py-5 md:py-16 bg-neutral-800 text-white'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row items-center gap-5 md:gap-10'>
            {/* left */}
            <div>
              <div className='w-[150px] aspect-square overflow-hidden'>
                <img className='w-full object-center object-cover' src="/final-logo.png" alt="" />
              </div>
            </div>
            {/* right */}
            <div className='flex-grow'>
              <div className='text-center text-[.85rem] md:text-[1.5rem] font-semibold'>
                <p>
                  At Makuta Law Firm, our dedicated team of legal professionals are committed to meticulously creating and examining a variety of contracts, ensuring compliance with Ethiopian regulations while placing your priorities at the forefront.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* fourth order container */}
      <div className='my-10 md:my-36'>
        {/* content container */}
        <div className='static-padding-x'>
          {/* header */}
          <div>
            {/* bold */}
            <div className='header-level-3 mb-2 uppercase'>
              <p>Our legal services</p>
            </div>
          </div>
          {/* accordion */}
          <div>
            {/* first accordion */}
            {
              services?.servicesList.map((item, index) => {
                return (
                  <div key={index} className='p-1 md:p-5 rounded-sm bg-white shadow-md mt-5 text-[.85rem] md:text-[1.05rem]'>
                    <header className='flex items-center justify-between py-2'>
                      <div>
                        <p className='font-bold w-max cursor-pointer hover:underline' onClick={() => {
                          setServices(prev => {
                            return {
                              ...prev,
                              servicesIndex: index,
                            }
                          })
                        }}>{item.title}</p>
                      </div>
                      <div>
                        <div className='w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center transition-colors ease-in-out duration-300 hover:bg-gray-200 cursor-pointer' onClick={() => {
                          setServices(prev => {
                            return {
                              ...prev,
                              servicesIndex: index,
                            }
                          })
                        }}>
                          <MdKeyboardArrowDown className={`text-2xl transition-transform ease-in-out duration-300 ${services?.servicesIndex === index ? '-rotate-180' : 'rotate-0'}`} />
                        </div>
                      </div>
                    </header>

                    <div className={`overflow-hidden ${services?.servicesIndex === index ? 'h-auto' : 'h-0'}`}>
                      <div className='pt-3 border-t border-gray-200'>
                        <div>
                          <p>
                            {item.text}
                          </p>
                        </div>

                        {
                          item?.subList?.length > 0
                            ?
                            <div className='mx-5'>

                              {
                                item?.subList?.map((subItem, subIndex) => {
                                  return (
                                    <div className='my-1.5'>
                                      <header className='flex items-center justify-between'>
                                        <div className='font-bold text-sm text-gray-800'>
                                          <span>{subItem?.title}</span>
                                        </div>
                                        <div>
                                          <div className='w-[24px] aspect-square rounded-full overflow-hidden flex items-center justify-center text-lg bg-gray-100 cursor-pointer hover:bg-gray-200' onClick={() => {
                                            console.log(subIndex)
                                            setServices(prev => {
                                              return {
                                                ...prev,
                                                subServicesIndex: prev?.subServicesIndex === subIndex ? -1 : subIndex
                                              }
                                            })
                                          }}>
                                            <IoMdAdd className={`transition-transform ease-in-out duration-300 ${services?.subServicesIndex === subIndex ? 'rotate-45' : 'rotate-0'}`} />
                                          </div>
                                        </div>
                                      </header>
                                      <div>
                                        <div className={`text-sm italic text-gray-700 py-1 border-b border-gray-100 overflow-hidden ${services?.subServicesIndex === subIndex ? 'h-max' : 'h-0'}`}>
                                          <p>
                                            {subItem?.text}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                })
                              }

                            </div>
                            :
                            <></>
                        }
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>


    </div>
  )
}

export default CivilContractRentalMachineriesVehicles
