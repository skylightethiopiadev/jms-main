import { useState, useRef } from 'react'
// icons
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const CorporateTrademark = () => {
  // states
  const [isService, setIsService] = useState(-1)
  const [isMore, setIsMore] = useState(false)

  // reference
  let readMoreRef = useRef(null)

  // local data
  const services = {
    title: 'Legal services we offer include',
    items: [
      {
        title: 'Trademark Search and Clearance',
        text: 'Conducting comprehensive searches to determine the availability of a proposed trademark and assessing the risk of potential conflicts with existing trademarks.'
      },
      {
        title: 'Trademark Registration',
        text: 'Assisting clients with the preparation, filing, and prosecution of trademark applications before the relevant intellectual property offices, including responding to office actions and objections.'
      },
      {
        title: 'Trademark Portfolio Management',
        text: 'Managing and maintaining a client\'s portfolio of trademarks, including monitoring deadlines for renewals and filing additional applications as needed to protect new trademarks.'
      },
      {
        title: 'Trademark Enforcement and Litigation',
        text: 'Representing clients in trademark disputes, including infringement actions, opposition proceedings, and cancellation actions before administrative bodies or courts.'
      },
      {
        title: 'Trademark Licensing and Assignments',
        text: 'Drafting and negotiating agreements for the licensing, assignment, or transfer of trademark rights, as well as advising on the implications of such transactions.'
      },
      {
        title: 'Trademark Counseling and Strategy',
        text: 'Providing strategic advice on trademark selection, protection, and enforcement, tailored to the client\'s business objectives and industry- specific considerations.'
      },
      {
        title: 'Trademark Watching and Monitoring',
        text: 'Monitoring trademark databases and other sources for potential infringement or unauthorized use of a client\'s trademarks and taking appropriate enforcement actions.'
      },
      {
        title: 'Trademark Due Diligence',
        text: 'Conducting due diligence reviews of trademark portfolios in corporate transactions, such as mergers, acquisitions, or licensing deals, to assess the strength and value of the trademarks involved.'
      },
      {
        title: 'Domain Name Disputes',
        text: 'Representing clients in disputes related to domain names that infringe their trademarks, including filing complaints or pursuing litigation.'
      },
      {
        title: 'Customs Recordation',
        text: 'Assisting clients with the recordation of their trademarks with customs authorities to facilitate the detection and seizure of counterfeit goods at the border.'
      },
    ]
  }

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
              <img className='w-full h-full object-center object-cover' src="https://investip.vn/wp-content/uploads/2023/01/legal-proceeding-certificate.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <div>
            <div className='w-[95%] sm:[85%] md:w-[65%] py-16'>
              {/* title */}
              <div>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Trademarks, Brand Recognition</h1>
              </div>
              {/* intro text */}
              <div className='my-2'>
                <p>
                  A trademark acts as a unique identifier, distinguishing a company’s goods or services from those of others. It serves several key purposes: it promotes brand recognition, helping customers to easily spot and tell apart the offerings of a business.
                </p>
              </div>
              {/* read more btn */}
              <div className='my-4'>
                <button className='border-2 border-yellow-400 rounded-full px-10 py-2 transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white' onClick={() => {
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
                <img className='w-full h-full object-center object-cover' src="https://alvarez.legal/wp-content/uploads/2022/08/Trademark.png" alt="" />
              </div>

              <div className='absolute top-[-58px] z-10 right-0 lg:right-[-50px] w-[65%] h-max bg-white shadow-2xl p-5 cursor-pointer'>
                <header>
                  <h4 className='font-bold'>Right to use</h4>
                </header>
                <div>
                  <p>
                    The owner of a registered trademark shall have the right to use trademark in relation to any goods or services for which it has been registered.
                  </p>
                </div>
              </div>
            </div>

            <div className='w-[100%] lg:w-[50%] py-5'>
              <header>
                <h4 className='header-level-3'>Trademark registration in Ethiopia</h4>
              </header>
              <div>
                <p>
                  Securing a trademark registration in Ethiopia is a critical measure for safeguarding your brand’s distinctiveness. Prior to filing a registration application, it is crucial to conduct a comprehensive trademark search to verify that the intended trademark is not previously registered or utilized by another entity within Ethiopia. Engaging a specialized trademark lawyer is advisable for this process.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* steps container */}
      <div className='mb-28'>
        {/* content */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <header className='mb-5 w-[75%]'>
            <h1 className='header-level-3'>Professionally articulated guide on the procedural steps to register a trademark in Ethiopia</h1>
          </header>
          <div className='px-10'>
            <div className='border border-yellow-500 py-3 rounded-md'>

              <div className='my-5'>
                <header className='px-3 py-2 flex items-center relative'>
                  <div className='w-[24px] aspect-square rounded-full bg-yellow-500 absolute left-[-12px] flex items-center justify-center font-bold text-white'><span>1</span></div>
                  <h4 className='font-bold ml-2'>Complete the Application Form</h4>
                </header>
                <div className='px-5'>
                  <p>
                    Initiate the process by completing the designated application form in accordance with the regulations set forth by the Ethiopian Intellectual Property Office (EIPO). It is important to note that each application is specific to a single trademark; therefore, select the trademark that most accurately reflects your company’s brand and identity.
                  </p>
                </div>
              </div>

              <div className='my-5'>
                <header className='px-3 py-2 flex items-center relative'>
                  <div className='w-[24px] aspect-square rounded-full bg-yellow-500 absolute left-[-12px] flex items-center justify-center font-bold text-white'><span>2</span></div>
                  <h4 className='font-bold ml-2'>Submit Required Documents</h4>
                </header>
                <div className='px-5'>

                  <p>
                    Along with the application form, the following documents must be submitted to the EIPO:
                  </p>
                  <ul className='ml-5'>
                    <li className='flex gap-1 my-1'>
                      <div className='flex items-center'>
                        <div className='w-[6px] aspect-square rounded-full bg-gray-700'></div>
                      </div>
                      <p>Three copies of a reproduction of the trademark.</p>
                    </li>
                    <li className='flex gap-1 my-1'>
                      <div className='flex items-center'>
                        <div className='w-[6px] aspect-square rounded-full bg-gray-700'></div>
                      </div>
                      <p>A list of goods and services classified according to the international classification system.</p>
                    </li>
                    <li className='flex gap-1 my-1'>
                      <div className='flex items-center'>
                        <div className='w-[6px] aspect-square rounded-full bg-gray-700'></div>
                      </div>
                      <p>A duly authenticated power of attorney if filed through an agent.</p>
                    </li>
                    <li className='flex gap-1 my-1'>
                      <div className='flex items-center'>
                        <div className='w-[6px] aspect-square rounded-full bg-gray-700'></div>
                      </div>
                      <p>A document certifying payment of the application fee.</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='my-5'>
                <header className='px-3 py-2 flex items-center relative'>
                  <div className='w-[24px] aspect-square rounded-full bg-yellow-500 absolute left-[-12px] flex items-center justify-center font-bold text-white'><span>3</span></div>
                  <h4 className='font-bold ml-2'>Foreign Applicants</h4>
                </header>
                <div className='px-5'>
                  <p>
                    If you’re a foreign applicant, appointing an agent domiciled in Ethiopia is mandatory.
                  </p>
                  <p>
                    The agent will represent you throughout the trademark registration process and serve as the point of contact with the EIPO.
                  </p>
                </div>
              </div>

              <div className='my-5'>
                <header className='px-3 py-2 flex items-center relative'>
                  <div className='w-[24px] aspect-square rounded-full bg-yellow-500 absolute left-[-12px] flex items-center justify-center font-bold text-white'><span>4</span></div>
                  <h4 className='font-bold ml-2'>Examination</h4>
                </header>
                <div className='px-5'>
                  <p>
                    After receiving the application, the EIPO will conduct an examination to ensure that it complies with the requirements for registration. This includes assessing the distinctiveness of the trademark and checking for any conflicts with existing trademarks.
                  </p>
                </div>
              </div>

              <div className='my-5'>
                <header className='px-3 py-2 flex items-center relative'>
                  <div className='w-[24px] aspect-square rounded-full bg-yellow-500 absolute left-[-12px] flex items-center justify-center font-bold text-white'><span>5</span></div>
                  <h4 className='font-bold ml-2'>Publication</h4>
                </header>
                <div className='px-5'>
                  <p>
                    If the trademark application meets all requirements, it will be published in the Official Gazette to allow for any oppositions to be filed by third parties within a specified period (usually 60 days).
                  </p>
                </div>
              </div>

              <div className='my-5'>
                <header className='px-3 py-2 flex items-center relative'>
                  <div className='w-[24px] aspect-square rounded-full bg-yellow-500 absolute left-[-12px] flex items-center justify-center font-bold text-white'><span>6</span></div>
                  <h4 className='font-bold ml-2'>Registration</h4>
                </header>
                <div className='px-5'>
                  <p>
                    If there are no oppositions or if any oppositions are resolved in favor of the applicant, the trademark will be registered, and a registration certificate will be issued by the EIPO.
                  </p>
                </div>
              </div>

              <div className='my-5'>
                <header className='px-3 py-2 flex items-center relative'>
                  <div className='w-[24px] aspect-square rounded-full bg-yellow-500 absolute left-[-12px] flex items-center justify-center font-bold text-white'><span>7</span></div>
                  <h4 className='font-bold ml-2'>Renewal</h4>
                </header>
                <div className='px-5'>
                  <p>
                    Trademarks in Ethiopia are initially valid for a period of seven years from the filing date and can be renewed indefinitely for subsequent periods of ten years each
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* flex container */}
      <div className='mb-28'>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <div className='flex flex-col lg:flex-row gap-12 lg:gap-24'>

            <div className='w-[100%] lg:w-[50%] py-5'>
              <header>
                <h4 className='header-level-3'>Remedies for trademark infringement</h4>
              </header>
              <div>
                <p>
                  In Ethiopia, trademark infringement is regarded as a grave legal violation. It arises when a trademark, or a mark substantially indistinguishable from it, is utilized without the consent of the trademark holder. Such unauthorized employment of the trademark can deceive consumers and tarnish the reputation of the owner. In line with other intellectual property rights, there exist specific legal remedies to address violations of trademark rights.
                </p>
              </div>
            </div>

            <div className='w-[100%] lg:w-[50%] bg-yellow-400 relative'>
              <div className='w-full h-full overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://www.realbusinessrescue.co.uk/images/1200x630/0x0-0x0/images/articles/when-might-a-trade-sale-happen.png?1652447904" alt="" />
              </div>

              <div className='absolute top-[-52px] z-10 left-0 lg:left-[-50px] w-[70%] h-max bg-white shadow-2xl p-5 cursor-pointer'>
                <header>
                  <h4 className='font-bold'>Authorize others to use</h4>
                </header>
                <div>
                  <p>
                    The owner of a registered trademark will have a right to authorize others to use the trademark for any goods or services it is registered for.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* more section container */}
      <div ref={readMoreRef} />
      <div className='mb-28'>
        {/* content container */}
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
          <header className='md:w-[75%] mb-5'>
            <h1 className='header-level-3'>
              Protecting the brand from potential imitations
            </h1>
          </header>
          <div>
            <div>
              <p>
                A trademark acts as a unique identifier, distinguishing a company’s goods or services from those of others. It serves several key purposes: it promotes brand recognition, helping customers to easily spot and tell apart the offerings of a business; it offers legal defense against unauthorized usage, protecting the brand from potential imitations; and it stands as a significant asset, contributing to the enhancement of a company’s reputation and value. Trademarks play a crucial role in promoting honest competition by protecting a brand’s identity and its investments. They also aid in the expansion of international trade by allowing brands to gain recognition across borders. In essence, trademarks are essential in building and maintaining consumer confidence and allegiance, which in turn propels business development and encourages innovation.
              </p>
              <div className={`overflow-hidden ${isMore ? 'h-auto' : 'h-0'}`}>
                <div>
                  <p>
                    The Constitution of the Federal Democratic Republic of Ethiopia underscores the significance of safeguarding intellectual property rights, stimulating creative endeavors, and advancing innovative activities. Complementing this, specific statutes such as the Trademarks Registration and Protection Proclamation No. 501/2006, along with the EIPO Trademark Regulation No. 273/2012, delineate the comprehensive framework governing the registration, protection, and enforcement of trademarks. These legal instruments articulate the criteria for trademark eligibility, delineate the procedural steps for application, and establish the timeframe for lodging objections, thereby ensuring a robust system for trademark management.
                    Legally, trademarks are characterized as any discernible sign that can differentiate the products or services of one entity from those of another. These signs might include words, design, letters, numerals, colors or the shape of goods or their packaging or combinations thereof. The enumeration of these signs is not comprehensive, permitting proprietors to employ any conspicuous sign as a trademark, provided it effectively distinguishes their goods and services from those of other businesses.
                    To avail the advantages of trademark ownership, legal protection, and to legally obligate third parties, it is imperative to register the trademark and obtain a registration certificate. Any entrepreneur can register their trademark if it meets the statutory criteria. Furthermore, Ethiopian legislation permits the registration of collective trademarks, which are used to identify the products or services of a member organization, thereby extending protection to associations in addition to individual businesses.
                  </p>
                </div>
              </div>
              <button className='text-blue-700 flex items-center gap-3' onClick={() => {
                setIsMore(!isMore)
              }}>
                {
                  isMore
                    ?
                    <span>show less</span>
                    :
                    <span>show more</span>
                }
                <MdKeyboardArrowDown className={`transition-transform ease-in-out duration-300 ${isMore ? '-rotate-180' : 'rotate-0'}`} />
              </button>
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
                          if (isService === index) {
                            setIsService(-1)
                          } else {
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

export default CorporateTrademark
