import React, { useState } from 'react'

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";


const CivilContractConstruction = () => {

  const [services, setServices] = useState({
    servicesList: [
      {
        title: 'Legal Due Diligence',
        text: 'Conducting legal due diligence on financial records and other relevant documents to evaluate risk and compliance.',
      },
      {
        title: 'Contract Drafting and Review',
        text: 'Our team is dedicated to carefully crafting, evaluating, and negotiating the specifics of construction contracts. We ensure that every aspect of the contract, including rights and duties, is defined with legal accuracy and transparency safeguarding your interests.',
      },
      {
        title: 'Legal Representation',
        text: 'In the event of disagreements in construction projects, we advocate for our clients, addressing intricate matters such as quality of work, structural issues, contract changes, and financial disagreements.',
      },
      {
        title: 'Regulatory Compliance',
        text: 'We guide your construction project through the complex web of legal standards, ensuring every aspect complies with the necessary legal provisions.',
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
                <img className='w-full h-full object-center object-cover' src="https://www.letsbuild.com/wp-content/uploads/2023/07/Depositphotos_89120612_s-2019.jpg" alt="" />
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
                  Your Guide to Construction Contracts: Navigating Ethiopia's Building Projects with Confidence
                </p>
              </div>

              {/* normal text */}
              <div className='my-5 text-justify'>
                <p>
                  Construction contracts falling under contracts for the performance of services are crucial in Ethiopia as they play a pivotal role in the success of construction projects. For a person engaging in a building project, construction contracts are essential as they establish the project’s framework, detailing the work to be done, the schedule, financial terms, and standards for materials and workmanship. These contracts act as a protective measure for individuals, guaranteeing that their stipulations are honored and the construction is finalized as specified. Therefore, Construction contract mostly require detailed terms to be clearly defined by the parties involved to prevent future disputes and delays in the construction process.
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
                <img className='w-full h-full object-center object-cover' src="https://www.courier-journal.com/gcdn/-mm-/f8690108b6e1d34b0c1e3420c29a5e0b90945374/c=0-0-2118-1197/local/-/media/2017/02/13/Louisville/Louisville/636225746762404646-GettyImages-155353328.jpg?width=660&height=374&fit=crop&format=pjpg&auto=webp" alt="" />
              </div>
            </div>

            <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-t-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
              {/* bold text */}
              <div className='header-level-3 uppercase'>
                <p>
                  Unlocking the Complexity: How Legal Experts Simplify Construction Contracts for You
                </p>
              </div>
              {/* normal text */}
              <div className='my-5 text-justify'>
                <p>
                  The intricate nature of construction contracts, filled with various detailed clauses and specialized terminology, typically requires the aid of legal professionals. Legal experts assist individuals in understanding their contractual duties, adhering to legal standards, and comprehending the implications of the contract’s terms. Such guidance is crucial for avoiding confusion, settling disagreements, and guaranteeing a legally compliant and seamless construction experience.
                </p>
              </div>
              <div className='my-5 text-justify'>
                <p>
                  Since, the effectiveness of construction projects heavily relies on the contractual contracts established between contractors and clients, it is essential for these agreements to be meticulously crafted to ensure clarity and understanding of the rights and obligations of each party.
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

export default CivilContractConstruction
