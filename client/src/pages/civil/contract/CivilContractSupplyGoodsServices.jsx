import React, { useState } from 'react'

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


const CivilContractSupplyGoodsServices = () => {

  const [services, setServices] = useState({
    servicesList: [
      {
        title: 'Drafting and reviewing Service contracts',
        text: 'We assist our clients in formulating customized agreements for supply of goods and service, ensuring all critical details such price, type and quality of product, place of delivery, consequence of non-performance and other issues are clearly outlined. We also meticulously evaluate and refine existing contracts to rectify any deficiencies, unclear terms, or detrimental conditions, recommending modifications to safeguard the interests of all involved entities.',
      },
      {
        title: 'Due diligence Services',
        text: 'We assist clients investigating and assessing various legal aspect.',
      },
      {
        title: 'Risk Mitigation',
        text: 'We advise on risk management strategies related to supply contracts. We help identify potential risks (non-performance, quality issues, force majeure events) and recommend protective clauses.',
      },
      {
        title: 'Legal Representation',
        text: 'In the event of any dispute related to rental contracts our legal team is prepared to represent you in any court action or arbitration.',
      },
      {
        title: 'Legal Consultation',
        text: 'We provide a detailed consultation on supply contracts and advise our clients on the best possible options to proceed with.',
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
                <img className='w-full h-full object-center object-cover' src="https://roysville.group/wp-content/uploads/2020/09/about-1024x819.png" alt="" />
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
                  Secure Your Personal deals: The Importance of Legally Binding Agreements
                </p>
              </div>

              {/* normal text */}
              <div className='my-5'>
                <p>
                  The contract of supply of goods and services is a fundamental element in the commercial world, where a supplier agrees to provide a specific service or product either on a regular basis, continuously, or as a one-time transaction. To prevent disputes and ensure clarity, certain key aspects must be included in a supply contract. These include defining the object, quality, and quantity of the goods or services to be supplied, establishing the price, determining the time and amount of payment, outlining the terms of the agreement, and specifying liabilities in case of non-performance.
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
              {/* bold text */}
              <div className='header-level-3 uppercase'>
                <p>
                  Your Guide to Secure Transactions: Understanding Supply Contracts under Ethiopia's Legal system
                </p>
              </div>
              {/* normal text */}
              <div className='my-5'>
                <p>
                  In Ethiopia the primary legislation governing supply contract is the civil code. The law provides a complete freedom of contract for contracting parties to govern their legal relationship. However, if parties fail to clearly regulate their legal relationship the law primarily serves as a gap filling provisions. 
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
              {/* normal text */}
              <div className='my-5'>
                <p>
                  The predominant legal challenges in supply contracts pertain to the quality and quantity of goods, timeliness of delivery, responsibility for non-fulfillment, location of delivery, among other pertinent matters. Therefore, it is crucial for parties to delineate their legal obligations and rights. In instances where these rights are not actively exercised, legal intervention becomes inevitable.
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
              <div className='my-5'>
                <p>
                  Inadequate articulation of contractual terms can lead to reliance on statutory provisions as default solutions during disputes. However, these statutory defaults may not necessarily serve the best interests of your enterprise. Thus, it is imperative to integrate fundamental components and comply with the Ethiopian Civil Code’s legal mandates when formulating supply contracts. This approach ensures the establishment of explicit mutual expectations, diminishes the risk of contention, and fortifies the protection of the parties’ rights and interests over the contract’s lifespan.
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
              <div className='text-justify md:text-left text-[.85rem] md:text-[1.5rem] font-semibold'>
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

export default CivilContractSupplyGoodsServices
