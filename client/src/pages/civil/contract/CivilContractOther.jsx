import React, { useState } from 'react'

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const CivilContractOther = () => {

    const [services, setServices] = useState({
        servicesList: [
            {
                title: 'Ensure full compliance with all legal prerequisites',
                text: '',
            },
            {
                title: 'Review and refine draft agency contract',
                text: '',
            },
            {
                title: 'Draft contracts strictly delineating the agent principal relationship.',
                text: '',
            },
            {
                title: 'Facilitate the authentication and registration of contracts.',
                text: '',
            },
            {
                title: 'Provide counsel and representation to ensure the seamless agent, principal and third-party relationship.',
                text: '',
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
                                  Enhance Your Business Reach: The Strategic Benefits of Agency Contracts
                              </p>
                          </div>

                          {/* normal text */}
                          <div className='my-5'>
                              <p>
                                  In the dynamic landscape of modern commerce, agency contracts serve as the cornerstone, forging a legal link that empowers an agent to act on behalf of a principal, particularly when direct involvement isn’t feasible. These agreements capitalize on the agent’s niche expertise to enhance operational efficiency and efficacy, while concurrently navigating risks and fortifying legal defenses. Tailored to suit diverse commercial ventures, they cultivate trust and enforce accountability, with agents entrusted to act in the principal’s paramount interest. Moreover, they enable businesses to venture into new markets sans physical presence, presenting a financially savvy solution over traditional full-time staffing for specialized or interim tasks.
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
                                  Protect Your Interests: Navigating Agency Contracts in Ethiopia with Expert Legal Guidance
                              </p>
                          </div>
                          {/* normal text */}
                          <div className='my-5'>
                              <p>
                                  Within the Ethiopian legal system, agency relationships are there to regulate two pivotal conditions. The first governs routine principal activities, which might be economic-related or otherwise. The second pertains to business-centric interactions, where agents embody a trader’s interests. Predominantly steered by the Ethiopian Civil Code, particularly Article 2179, these relationships either arise from legal stipulations or contracts.
                              </p>
                          </div>
                      </div>


                  </div>
              </div>
          </div>

          {/* post-second order container */}
          <div className='my-12 md:my-36 bg-neutral-200'>
              {/* content container */}
              <div className='static-padding-x py-20'>
                  <div >

                      <div className=''>
                          {/* normal text */}
                          <div className='my-5'>
                              <p>
                                  Under Ethiopian legal system, Contracts emerge as the linchpin of agency bonds, with formalities meticulously outlined by law to validate the agent’s representation. The extent of agency is bifurcated into general and specific mandates, delineating the agent’s permissible actions.
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
                                  Complementing the civil code, Ethiopia’s contemporary commercial code integrates additional facets of agency relationships, enabling traders to amplify their commercial footprint through agreements with commercial agents, brokers, and commission agents. However, the practical deployment of agency relationships in Ethiopia encounters multifaceted challenges and disarray, often stemming from authority ambiguities, conflicts of interest, contractual discrepancies, and agents overstepping bounds.
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
                                  Given that agency ties originate from contractual agreements, and Ethiopian contract and commercial law prescribe stringent formalities for these agreements, it’s imperative to seek seasoned legal counsel prior to granting power of attorney, ensuring every step is taken with informed precision and professional oversight.
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

export default CivilContractOther
