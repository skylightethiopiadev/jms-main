import React from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { HiArrowLongRight } from "react-icons/hi2";
import { LiaUserClockSolid } from "react-icons/lia";
import { MdOutlineAddHome } from "react-icons/md";
import { CgDisplayFlex } from "react-icons/cg";


const CivilContractConstruction = () => {

  const services = [
    {
      title: 'Due Diligence Services',
      text: 'Conducting legal due diligence on financial records and other relevant documents to evaluate risk and compliance',
    },
    {
      title: 'Contract Drafting and Review',
      text: 'Our team is dedicated to carefully crafting, evaluating, and negotiating the specifics of construction contracts. We ensure that every aspect of the contract, including rights and duties, is defined with legal accuracy and transparency, safeguarding your interests',
    },
    {
      title: 'Legal Representation',
      text: 'In the event of disagreements in construction projects, we advocate for our clients, addressing intricate matters such as quality of work, structural issues, contract changes, and financial disagreements',
    },
    {
      title: 'Regulatory Compliance',
      text: 'We guide your construction project through the complex web of legal standards, ensuring every aspect complies with the necessary legal provisions',
    },
  ]
  return (
    <div>
      {/* first order container */}
      <div className='relative'>
        {/* bg */}
        <div className='absolute inset-0 z-0 flex'>
          <div className='absolute inset-0 z-10 bg-yellow-400 bg-opacity-90 md:bg-opacity-100 md:[clip-path:polygon(0%_0%,75%_0%,60%_100%,0%_100%)]'></div>
          <div className='absolute inset-0 z-0 bg-yellow-400  md:[clip-path:polygon(75%_0%,100%_0%,100%_100%,60%_100%)] overflow-hidden flex'>
            <div className='w-0 md:w-[50%]'></div>
            <div className='w-full md:w-[50%] h-full overflow-hidden'>
              <img className='w-full h-full object-center object-cover' src="https://montague.law/wp-content/uploads/2024/02/6a2581cd-1114-40e6-9026-9c341fa8914e.png" alt="" />
            </div>
          </div>
        </div>
        {/* content container */}
        <div className='static-padding-x py-16 relative z-30 text-white'>
          {/* text */}
          <div className='w-[100%] md:w-[60%]'>
            {/* bold text */}
            <div className='text-4xl font-semibold'>
              <p>
                Construction Contracts
              </p>
            </div>
            {/* normal text */}
            <div className='mt-3'>
              <p>
                Construction contracts for the performance of services are crucial in Ethiopia as they play a pivotal role in the success of construction projects
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second order container */}
      <div>
        <div className='flex items-center justify-center'>
          <div className='w-max px-3 md:px-12 py-5 rounded-md bg-white shadow-2xl relative z-30 mt-[-32px] flex items-center justify-between gap-3 sm:gap-5 md:gap-16'>
            <div>
              <NavLink className={'font-medium text-gray-700 transition-colors ease-in-out duration-300 hover:text-yellow-400'}>PCLAW</NavLink>
            </div>
            <div>
              <NavLink className={'font-medium text-gray-700 transition-colors ease-in-out duration-300 hover:text-yellow-400'}>TIMES MATTER</NavLink>
            </div>
            <div>
              <NavLink className={'font-medium text-gray-700 transition-colors ease-in-out duration-300 hover:text-yellow-400'}>LEAP</NavLink>
            </div>
            <div>
              <NavLink className={'font-medium text-gray-700 transition-colors ease-in-out duration-300 hover:text-yellow-400'}>BENEFITS</NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* third order container */}
      <div className='my-28'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-[100%] md:w-[50%] relative'>
              <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://vteamlaw.com/wp-content/uploads/2022/09/Construction-Law.jpg" alt="" />
              </div>
            </div>

            <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-b-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
              {/* bold text */}
              <div className='header-level-3'>
                <p>
                  Agreements form the backbone of interactions
                </p>
              </div>
              {/* normal text */}
              <div className='my-5'>
                <p>
                  To navigate your daily business dealings securely and avoid exploitation, it’s advisable to cement your relationships with legally enforceable contracts.
                </p>
              </div>
              <div>
                <p>
                  Under Ethiopian law, contracts are subject to specific conditions such as the object, form, the capacity of parties, and mutual consent; without these, a contract may be considered void or rendered voidable.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* fourth order container */}
      <div className='text-white bg-neutral-800 my-20 md:my-32'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-[85%] sm:w-[65%] mx-auto md:w-[40%] lg:w-[30%] relative '>
              <div className='relative md:absolute w-full h-max z-30 left-0 top-0 mt-[-60px] bg-neutral-800 border-8 border-white rounded-b-3xl'>
                <div className='flex items-center justify-center py-3'>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                      <img className='w-full h-full object-center object-cover' src="https://blog.tkelevator.com/wp/wp-content/uploads/2018/06/shutterstock_464879318-scaled.jpg" alt="" />
                    </div>
                    <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                      <img className='w-full h-full object-center object-cover' src="https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?cs=srgb&dl=pexels-pixabay-302769.jpg&fm=jpg" alt="" />
                    </div>
                    <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                      <img className='w-full h-full object-center object-cover' src="https://www.burohappold.com/wp-content/uploads/2020/02/experts-in-tall-buildings-burohappold_getty.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className='p-3'>
                  <p>
                    categorizes special movables into tangible assets (such as motor vehicles, ships, and capital goods) and intangible assets (including patents, businesses, and copyrights)
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[100%] md:w-[60%] lg:w-[70%] p-7 pr-0'>
              {/* bold */}
              <div className='header-level-3'>
                <p>
                  Ethiopian legal framework
                </p>
              </div>
              {/* normal text */}
              <div className='my-2'>
                <p>
                  At Makuta Law Firm, our dedicated team of legal professionals is committed to meticulously creating and examining a variety of contracts, ensuring compliance with Ethiopian regulations while placing your priorities at the forefront
                </p>
              </div>
              {/* button */}
              <div className='mt-5'>
                <button className='flex items-center justify-center gap-3 px-7 py-2 border-2 border-yellow-500 bg-yellow-500 text-white transition-colors ease-in-out duration-300 hover:bg-transparent'>
                  <span>Contact Our Legal Team</span>
                  <HiArrowLongRight className='text-xl' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth order container */}
      <div className='mt-20'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-b-transparent md:border-b-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
              {/* bold text */}
              <div className='header-level-3'>
                <p>
                  Agreements form the backbone of interactions
                </p>
              </div>
              {/* normal text */}
              <div className='my-5'>
                <p>
                  To navigate your daily business dealings securely and avoid exploitation, it’s advisable to cement your relationships with legally enforceable contracts.
                </p>
              </div>
              <div>
                <p>
                  Under Ethiopian law, contracts are subject to specific conditions such as the object, form, the capacity of parties, and mutual consent; without these, a contract may be considered void or rendered voidable.
                </p>
              </div>
            </div>
            <div className='w-[100%] md:w-[50%] relative'>
              <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://lawcirca.com/wp-content/uploads/2020/12/contract.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sixth order container */}
      <div>
        {/* content container */}
        <div className='static-padding-x py-24'>
          <div className='flex flex-col md:flex-row gap-5'>
            <div className='w-[100%] md:w-[50%]'>
              {/* bold text */}
              <div className='header-level-3'>
                <p>
                  Ethiopian property legislation delineates distinct classifications for properties
                </p>
              </div>
              {/* normal text */}
              <div>
                <p>
                  If you are in the market to conduct a business towards the capital of a business organization, purchase, sell, Hire, or mortgage business, ship, motor vehicle, construction machinery, aircraft, non-negotiable instruments, patents, or trademarks, it is prudent to consult with our legal experts
                </p>
              </div>
            </div>
            <div className='w-[100%] md:w-[50%] border-l-8 border-blue-900 flex items-center'>
              <div className='pl-5 font-medium text-blue-900'>
                <p>
                  In today’s business environment, agreements form the backbone of interactions between individuals and companies, setting the stage for long-term relationships, delineating rights and duties, enhancing operational efficiency, and fostering trust
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* seventh order container */}
      <div className='bg-black bg-opacity-10'>
        {/* content container */}
        <div className='static-padding-x py-10'>
          <div className='flex items-center justify-center'>
            <div className='grid grid-cols-3 gap-3 md:gap-10'>
              <div>
                <div>
                  <LiaUserClockSolid className='text-5xl' />
                </div>
                <div className='font-black my-2'>
                  <p>
                    Maximize billable hours
                  </p>
                </div>
                <div>
                  <p>
                    Easily track billable time against clients and cases with our mobile apps.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <MdOutlineAddHome className='text-5xl' />
                </div>
                <div className='font-black my-2'>
                  <p>
                    Work from anywhere
                  </p>
                </div>
                <div>
                  <p>
                    Get anywhere anytime access to your firm with cloud-based solutions.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <CgDisplayFlex className='text-5xl' />
                </div>
                <div className='font-black my-2'>
                  <p>
                    Be more flexible
                  </p>
                </div>
                <div>
                  <p>
                    Building on top of Microsoft Office 365 means full integration with your email and calendar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fifth order container */}
      <div className='my-28'>
        {/* content container */}
        <div className='static-padding-x'>
          {/* bold container */}
          <div className='header-level-3 mb-5 pb-3 border-b-4 border-yellow-500'>
            <p>
              Our Legal Services
            </p>
          </div>
          <div>
            <div>
              {
                services.map((item, index) => {
                  return (
                    <div key={index} className='mb-3 border-b border-yellow-500 pb-3'>
                      <header className='py-2'>
                        <h3 className='font-bold'>{item.title}</h3>
                      </header>
                      <div className='px-10'>
                        <p>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CivilContractConstruction
