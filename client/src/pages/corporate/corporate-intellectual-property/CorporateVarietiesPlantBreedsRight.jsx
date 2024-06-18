import { useState, useRef } from 'react'
// icons
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


const CorporateVarietiesPlantBreedsRight = () => {
  // states
  const [isService, setIsService] = useState(-1)
  const [isMore, setIsMore] = useState(false)
  const [isEligibility, setIsEligibility] = useState(0)

  // reference
  let readMoreRef = useRef(null)

  // local data
  const services = {
    title: 'Legal services we offer include',
    items: [
      {
        title: 'Application and Registration',
        text: 'Assisting breeders in preparing and filing PBR applications with the relevant authorities. And Ensuring compliance with legal requirements and deadlines during the registration process.'
      },
      {
        title: 'Due Diligence and Clearance',
        text: 'Conducting searches to assess the novelty and distinctiveness of a plant variety before applying for PBRs And Identifying potential conflicts with existing varieties or patents.'
      },
      {
        title: 'Prosecution and Defense',
        text: 'Representing clients in PBR-related disputes, including opposition proceedings and Defending breeders’ rights against infringement claims.'
      },
      {
        title: 'Licensing and Commercialization',
        text: 'Drafting licensing agreements for the use of protected varieties. Negotiating terms and conditions with licensees.'
      },
      {
        title: 'Enforcement and Litigation',
        text: 'Taking legal action against unauthorized use or infringement of PBRs. Handling litigation, including seeking injunctions and damages.'
      },
      {
        title: 'Farmers’ Rights and Community Engagement',
        text: 'Advising on farmers’ rights and exemptions related to farm-saved seed. Educating communities about PBRs and their benefits.'
      },
      {
        title: 'International Protection',
        text: 'Providing guidance on PBR systems in different countries. Assisting with international applications and coordination.'
      },
    ]
  }

  // eligibility 
  const eligibility = [
    {
      title: 'Any plant breeder',
      text: 'Plant breeders, irrespective of their nationality or residency, are entitled to apply for plant breeders’ rights for new varieties cultivated either within Ethiopia or internationally.',
    },
    {
      title: 'Representative of a community',
      text: 'In case of farmers or pastoralist community, any person representing a community that developed the variety may apply for plant breeders right.',
    },
    {
      title: 'Joint breeders',
      text: 'When two or more persons breeder a variety together they are allowed to obtain joint holders right. However, they can agree to the contrary. ',
    },
    {
      title: 'Public or private institution',
      text: 'If the variety breeder is a public or private institution, the plant breeders right will be granted to the institution',
    },
  ]

  // read more ref
  const readMoreReferenceHandler = () => {
    readMoreRef?.current.scrollIntoView({ behavior: 'smooth' })
  }


  return (
    <div>
      {/* first order container */}
      <div className='mt-1 mb-28 relative'>
        {/* bg-image */}
        <div className='absolute left-0 top-0 w-full h-full -z-30 flex'>
          <div className='w-[50%] bg-white'></div>
          <div className='absolute z-10 top-0 left-1/2 h-full w-[75%] sm:w-[50%] md:w-[35%] bg-gradient-to-r from-white to-transparent'></div>
          <div className='w-[50%]'>
            <div className='w-full h-full overflow-hidden bg-yellow-400'>
              <img className='w-full h-full object-center object-cover' src="https://www.corporatecomplianceinsights.com/wp-content/uploads/2020/04/plant-book.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <div>
            <div className='w-[95%] sm:[85%] md:w-[65%] py-16'>
              {/* title */}
              <div>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Verities and Plant Breeders Rights</h1>
              </div>
              {/* intro text */}
              <div className='my-5'>
                <p>
                  Plant Breeders’ Rights (PBRs) represent a distinct category of intellectual property rights specifically established to safeguard novel plant varieties.
                </p>
              </div>
              {/* read more btn */}
              <div className='my-4'>
                <button className='border-2 border-yellow-400 rounded-full px-10 py-2 transition-colors ease-in-out duration-300 bg-yellow-400 text-white hover:text-yellow-500 hover:bg-white' onClick={() => {
                  readMoreReferenceHandler()
                }}>read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second order container */}
      <div className='mb-28'>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <div className='flex flex-col-reverse lg:flex-row gap-12 lg:gap-24'>

            <div className='w-[100%] lg:w-[50%] bg-yellow-400 relative'>
              <div className='w-full h-full overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://www.greenhousegrower.com/wp-content/uploads/2016/06/GG-June-Cover-image.jpg" alt="" />
              </div>

              <div className='absolute top-[-58px] z-10 right-0 lg:right-[-50px] w-[50%] h-max bg-white shadow-2xl p-5 cursor-pointer'>
                <header>
                  <h4 className='font-bold'>Distinctiveness</h4>
                </header>
                <div>
                  <p>
                    Plant variety must be distinct in one or more identifiable characteristics from any other variety
                  </p>
                </div>
              </div>
            </div>

            <div className='w-[100%] lg:w-[50%] py-5'>
              <header>
                <h4 className='header-level-3'>Scope of PBR</h4>
              </header>
              <div>
                <p>
                  An individual awarded plant breeders’ rights will possess exclusive rights concerning the protected seed or propagating material of the registered variety, as well as any other varieties derived from the protected variety.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* third order container */}
      <div className='mb-20'>
        {/* content */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          {/* bold */}
          <div>
            <p className='header-level-3 py-3'>
              Eligibility for Verities and Plant Breeders Rights
            </p>
          </div>
          <div>
            {
              eligibility.map((item, index) => {
                return (
                  <div key={index} className='p-2 bg-white shadow-md mb-7'>
                    <header className='flex items-center justify-between py-3'>
                      <div>
                        <h3 className='header-level-4 cursor-pointer hover:underline' onClick={() => {
                          setIsEligibility(index)
                        }}>{item.title}</h3>
                      </div>
                      <div>
                        <div>
                          <div className='w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200' onClick={() => {
                            setIsEligibility(index)
                          }}>
                            <MdKeyboardArrowDown className={`text-2xl transition-transform ease-in-out duration-300 ${isEligibility === index ? '-rotate-180' : 'rotate-0'}`} />
                          </div>
                        </div>
                      </div>
                    </header>
                    <div className={`overflow-hidden ${isEligibility === index ? 'h-auto' : 'h-0'}`}>
                      <div className='pb-3'>
                        <p>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      {/* fourth order container */}
      <div className='mb-20'>
        <div className='relative'>
          {/* content */}
          <div className='relative z-20'>
            <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%] py-10'>
              <div className='w-[55%]'>
                <div className='header-level-3'>
                  <p>Criteria’s for Protection</p>
                </div>
                <div className='my-3'>
                  <p>
                    To secure PBR for a particular plant variety, a breeder must satisfy specific conditions. These prerequisites are essential to obtain the exclusive rights granted for new plant varieties.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* bg */}
          <div className='absolute inset-0'>
            {/* gradient */}
            <div className='absolute inset-0 z-10 flex'>
              <div className='w-[50%] bg-white'></div>
              <div className='w-[50%] bg-gradient-to-r from-white to-transparent'></div>
            </div>
            {/* image */}
            <div className='absolute inset-0 z-0 flex'>
              <div className='w-[50%]'></div>
              <div className='w-[50%] h-full overflow-hidden flex'>
                <div className='w-full h-full overflow-hidden bg-yellow-400'>
                  <img className='w-full h-full object-center object-cover' src="https://www.wicourts.gov/images/muni.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our service container */}
      <div className='mb-28'>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <header className='py-7 border-b-4 border-yellow-400'>
            <h1 className='header-level-3'>{services?.title}</h1>
          </header>
          <div>

            {
              services?.items.map((item, index) => {
                return (
                  <div key={index} className='py-2 border-b border-yellow-400'>
                    <header className='flex items-center justify-between py-5'>
                      <div>
                        <h4 className="header-level-4 hover:underline cursor-pointer" onClick={() => {
                          if (isService === index) {
                            setIsService(-1)
                          } else {
                            setIsService(index)
                          }
                        }}>{item.title}</h4>
                      </div>
                      <div>
                        <div className='w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200' onClick={() => {
                          if(isService === index){
                            setIsService(-1)
                          }else{
                            setIsService(index)
                          }
                        }}>
                          <MdKeyboardArrowDown className={`text-2xl transition-transform ease-in-out duration-300 ${isService === index ? '-rotate-180' : 'rotate-0'}`} />
                        </div>
                      </div>
                    </header>
                    <div className={`overflow-hidden ${isService === index ? 'h-auto' : 'h-0'}`}>
                      <div className="px-5 sm:px-10 md:px-16 lg:px-20 pb-5">
                        <p>
                          {item.text}
                        </p>
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

export default CorporateVarietiesPlantBreedsRight
