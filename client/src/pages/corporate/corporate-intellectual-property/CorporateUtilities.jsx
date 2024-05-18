import { useState } from 'react'
// icons
import { FaChevronDown } from "react-icons/fa";
import { PiShapes } from "react-icons/pi";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCardOutline } from "react-icons/io5";
import { MdPublicOff } from "react-icons/md";


const CorporateUtilities = () => {
  // states
  const [isService, setIsService] = useState(-1)

  // local data
  const services = {
    title: 'Legal services we offer include',
    items: [
      {
        title: 'Utility Model Registration and Filing',
        text: 'Assist inventors and businesses in preparing and filing utility model applications with the relevant authorities. Ensure that the application meets the necessary requirements, including novelty and industrial applicability.'
      },
      {
        title: 'Prior Art Search and Analysis',
        text: 'Conduct thorough searches to identify existing patents, publications, and other relevant information (prior art) related to the proposed utility model. Analyzing prior art helps determine the novelty and patentability of the invention.'
      },
      {
        title: 'Legal Consultation and Advice',
        text: 'Provide legal advice on various aspects of utility models, including eligibility, protection, and enforcement. Guide clients through the legal process, explaining their rights and obligations.'
      },
      {
        title: 'Prosecution and Examination',
        text: 'During the examination process, respond to queries from patent offices, address objections, and ensure compliance with formalities.'
      },
      {
        title: 'Maintenance and Renewals',
        text: 'Monitor utility model certificates validity periods and assist clients in renewing them. Renewals are essential to maintain protection beyond the initial grant period.'
      },
      {
        title: 'Enforcement and Litigation',
        text: 'Represent clients in enforcing their rights against infringers. Handle legal disputes, infringement cases, and negotiations.'
      },
      {
        title: 'Licensing and Commercialization',
        text: 'Assist in licensing utility models to third parties, negotiating terms, and drafting licensing agreements. Help inventors monetize their inventions through commercialization.'
      },
      {
        title: 'Portfolio Management',
        text: 'Manage clients’ intellectual property portfolios, ensuring timely renewals, monitoring competitors, and advising on strategic decisions.'
      },
      {
        title: 'Training and Education',
        text: 'Conduct workshops, seminars, and training sessions to educate inventors, businesses, and legal professionals about utility models and intellectual property rights.'
      },
      {
        title: 'Due Diligence and Valuation',
        text: 'Assess the value of utility models during mergers, acquisitions, or investment transactions. Due diligence involves evaluating the strength, scope, and enforceability of utility model rights.'
      },
    ]
  }



  return (
    <div>

      {/* first order container */}
      <div className='mb-20'>
        {/* content Container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <div className='flex gap-10 py-14'>
            <div className='w-[50%]'>
              {/* bold text */}
              <div>
                <h3 className='text-4xl font-bold'>Get help running your business your way</h3>
              </div>
              {/* normal text */}
              <div className='mt-5'>
                <p>
                  A sole proprietorship is all yours, but guarding and growing it aren't all on you. We can help you file a DBA, get permits, find legal help, and even convert to an LLC.
                </p>
              </div>
              {/* btn */}
              <div className='mt-10'>
                <button className='px-5 py-3 rounded-full bg-yellow-400 text-white transition-opacity ease-in-out duration-300 hover:opacity-75'>Learn More</button>
              </div>
            </div>
            <div className='w-[50%] relative'>
              <div className='w-full h-full max-h-[300px] overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://www.ktpatent.com/wp-content/uploads/2019/06/Legal-protection-for-Utility-Model-in-Bulgaria-1024x780.jpg" alt="" />
              </div>
              <div className='absolute left-0 bottom-0 w-[50%] h-max p-5 bg-white shadow-lg font-medium'>
                <p>Over half of our DBA customers are sole proprietors.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className='mb-20'>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>

          <header>
            <h3 className='header-level-3'>Things not protected by utility model</h3>
          </header>
          <div className='flex items-center justify-center px-12'>
            <div className='grid grid-cols-3 gap-10'>
              <div>
                <div className='my-3 flex items-center justify-center'>
                  <PiShapes className='text-7xl' />
                </div>
                <div>
                  <p className='text-justify'>
                    Changes in the shape, proportions or material of a patented object or of one that is public property, except where such a change alters the qualities or functions of the object thereby producing an improvement in its use or the effects of its intended functions
                  </p>
                </div>
              </div>

              <div>
                <div className='my-3 flex items-center justify-center'>
                  <IoCardOutline className='text-7xl' />
                </div>
                <div>
                  <p className='text-justify'>
                    The mere replacement of elements in a known combination by other known elements having an equivalent function, which does not thereby produce an improvement in its use or the effect of its intended functions
                  </p>
                </div>
              </div>

              <div>
                <div className='my-3 flex items-center justify-center'>
                  <MdPublicOff className='text-7xl' />
                </div>
                <div>
                  <p className='text-justify'>
                    Minor inventions that are contrary to public order or morality.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* third order container */}
      <div className='mb-20'>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <header className='my-5'>
            <h3 className='header-level-3'>How you can build your business</h3>
          </header>
          <div className='grid grid-cols-2 gap-10'>

            <div>
              <header>
                <h4 className='font-bold text-[1.25rem]'>DBA (doing business as)</h4>
              </header>
              <div className='my-5'>
                <p>
                  Use a name other than your own to do business, open a bank account, and build a brand.
                </p>
              </div>
              <div>
                <button className='border-4 border-yellow-400 px-10 py-3 text-yellow-500 rounded-full transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white font-bold'>Learn about DBA</button>
              </div>
            </div>

            <div>
              <header>
                <h4 className='font-bold text-[1.25rem]'>Business licenses</h4>
              </header>
              <div className='my-5'>
                <p>
                  Make sure you have all required permits and licenses to run your business legally.
                </p>
              </div>
              <div>
                <button className='border-4 border-yellow-400 px-10 py-3 text-yellow-500 rounded-full transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white font-bold'>Learn about DBA</button>
              </div>
            </div>

            <div>
              <header>
                <h4 className='font-bold text-[1.25rem]'>Liability protection</h4>
              </header>
              <div className='my-5'>
                <p>
                  Operate as an LLC to protect your personal assets if your business ever gets sued or incurs debts.
                </p>
              </div>
              <div>
                <button className='border-4 border-yellow-400 px-10 py-3 text-yellow-500 rounded-full transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white font-bold'>Learn about DBA</button>
              </div>
            </div>

            <div>
              <header>
                <h4 className='font-bold text-[1.25rem]'>Legal advice</h4>
              </header>
              <div className='my-5'>
                <p>
                  Use a name other than your own to do business, open a bank account, and build a brand.
                </p>
              </div>
              <div>
                <button className='border-4 border-yellow-400 px-10 py-3 text-yellow-500 rounded-full transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white font-bold'>Learn about DBA</button>
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
                        <div className="w-[28px] aspect-square rounded-full overflow-hidden  flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-200 bg-gray-100" onClick={() => {
                          if (isService === index) {
                            setIsService(-1)
                          } else {
                            setIsService(index)
                          }
                        }}>
                          <FaChevronDown className={`text-xl transition-transform ease-in-out duration-300 ${isService === index ? '-rotate-180' : 'rotate-0'}`} />
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

export default CorporateUtilities
