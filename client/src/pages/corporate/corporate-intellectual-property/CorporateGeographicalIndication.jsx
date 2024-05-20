import { useState, useRef } from 'react'
// icons
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


const CorporateGeographicalIndication = () => {
  // states
  const [isService, setIsService] = useState(0)
  const [isMore, setIsMore] = useState(false)


  // local data
  const services = {
    title: 'Legal services we offer include',
    items: [
      {
        title: 'GI Registration and Prosecution',
        text: 'Assist clients in filing and prosecuting GI applications. Guide applicants through the registration process, ensuring compliance with legal requirements.'
      },
      {
        title: 'Due Diligence and Search',
        text: 'Conduct due diligence searches to assess the availability and uniqueness of proposed GIs. Analyze existing registrations and potential conflicts.'
      },
      {
        title: 'Infringement and Enforcement',
        text: 'Represent clients in enforcing their GI rights. Take legal action against unauthorized use or infringement of registered GIs.'
      },
      {
        title: 'Licensing and Assignment',
        text: 'Negotiate licensing agreements and assignments related to GIs. Help clients protect and monetize their GI assets.'
      },
      {
        title: 'Quality Control and Compliance',
        text: 'Advise on maintaining quality standards associated with GIs. Ensure compliance with regulations governing GI products.'
      },
    ]
  }



  return (
    <div>
      {/* first order container */}
      <div>
        <div className='relative'>
          {/* content */}
          <div className='relative z-10 px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%] py-20 '>
            {/* text */}
            <div className='w-[75%]'>
              {/* bold */}
              <div>
                <p className='text-5xl font-bold capitalize'>
                  geographical indication
                </p>
              </div>
              {/* normal */}
              <div className='my-3'>
                <p>
                  Enables those who have the right to use the indication to prevent its use by a third party whose product does not conform to the applicable standards.
                </p>
              </div>
            </div>
            {/* image */}
            <div className='flex items-center justify-center'>
              <div className='grid grid-cols-3 gap-10'>

                <div className='w-[120px] aspect-square overflow-hidden rounded-md'>
                  <img className='w-full h-full object-center object-cover' src="https://dailycoffeenews.com/wp-content/uploads/2022/03/Ethiopia-Coffee.jpg" alt="" />
                </div>
                <div className='w-[120px] aspect-square overflow-hidden rounded-md'>
                  <img className='w-full h-full object-center object-cover' src="https://www.webuildgroup.com/_next/image/?url=https%3A%2F%2Fadmin.webuildgroup.com%2Fsites%2Fdefault%2Ffiles%2F2023-05%2FGrand%252520Ethiopian%252520Renaissance%252520Dam%252520-%252520Webuild_DJI_008_edited.jpg&w=3840&q=75" alt="" />
                </div>
                <div className='w-[120px] aspect-square overflow-hidden rounded-md'>
                  <img className='w-full h-full object-center object-cover' src="https://scenicethiopiatravel.com/wp-content/uploads/2018/12/Axum-Stelae-Ethiopia-1-1024x768.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* bg */}
          <div className='absolute z-0 inset-2 rounded-md overflow-hidden flex'>
            <div className='w-[50%] bg-white'></div>
            <div className='w-[50%] relative' >
              <div className='absolute inset-0 -z-10 flex'>
                <div className='w-[50%] bg-gradient-to-r from-white to-transparent'></div>
                <div className='w-[50%]'></div>
              </div>
              <div className='w-full h-full overflow-hidden relative -z-30'>
                <img className='w-full h-full object-center object-cover' src="https://ejustice.lk/wp-content/uploads/2018/01/courts_ready-1.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className='mt-20'>
        {/* content container */}
        <div>
          {/* content container */}
          <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
            <div>
              <p className='header-level-3'>
                Geographic indication protection
              </p>
            </div>
            <div className='my-3'>
              <p>
                A Geographical Indication (GI) is a label applied to goods that originate from a particular location, which bestows upon them distinct qualities or a standing that is inherently linked to that geographical area. For a sign to be recognized as a GI, it must clearly denote that a product hails from a specific locale.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third order container */}
      <div className='mt-20'>
        <div className='relative'>
          {/* content */}
          <div className='relative z-20'>
            <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%] py-10'>
              <div className='w-[55%]'>
                <div className='header-level-3'>
                  <p>Protection under the trademarks proclamation</p>
                </div>
                <div className='my-3'>
                  <p>
                    Currently, Ethiopia does not have specific legislation dedicated exclusively to the protection of GIs. Nevertheless, this does not imply a lack of legal protection for GIs, as they are covered under various existing laws. Due to their resemblance to trademarks, GIs are primarily governed by the Trademarks Registration and Protection Proclamation No. 501/2006.
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

      {/* fourth order container */}
      <div className='mt-20'>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <div className='flex gap-10'>
            <div className='w-[50%] bg-yellow-400'>
              <div className='w-full h-full overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://www.mad-hr.co.uk/wp-content/uploads/Law-Gavel-2.png" alt="" />
              </div>
            </div>
            <div className='w-[50%] py-10'>
              <div>
                <p className='header-level-3'>Protection under the trade competition and consumer protection law</p>
              </div>
              <div className='my-3'>
                <p>
                  Another legal framework that may be invoked for the protection of GIs in Ethiopia is the Trade Competition and Consumer Protection Proclamation No. 813/2013. This law primarily addresses issues related to anti-competitive behavior, market dominance abuse, and various forms of misconduct deemed as unfair trade practices, alongside consumer protection measures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth order container */}
      <div className='my-20'>
        {/* content */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <div className='mb-3'>
            <p className='header-level-3'>Legal services we offer</p>
          </div>
          {/* services */}
          <div>
            {
              services?.items.map((item, index) => {
                return (
                  <div key={index} className='p-3 bg-white shadow-md mb-12'>
                    <header className='flex items-center justify-between py-3'>
                      <div>
                        <h4 className='font-bold hover:underline cursor-pointer' onClick={() => {
                          setIsService(index)
                        }}>{item.title}</h4>
                      </div>
                      <div>
                        <div>
                          <div className='w-[28px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-100 cursor-pointer hover:bg-gray-200' onClick={() => {
                            setIsService(index)
                          }}>
                            <MdKeyboardArrowDown className={`text-3xl transition-transform ease-in-out duration-300 ${isService === index ? '-rotate-180' : 'rotate-0'}`} />
                          </div>
                        </div>
                      </div>
                    </header>
                    <div className={`overflow-hidden ${isService === index ? 'h-auto' : 'h-0'}`}>
                      <div className='mb-4'>
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

export default CorporateGeographicalIndication
