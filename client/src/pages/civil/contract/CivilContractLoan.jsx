import React from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { HiArrowLongRight } from "react-icons/hi2";
import { LiaUserClockSolid } from "react-icons/lia";
import { MdOutlineAddHome } from "react-icons/md";
import { CgDisplayFlex } from "react-icons/cg";



const CivilContractLoan = () => {

  const services = [
    {
      title: 'Drafting and reviewing loan contracts',
      text: 'We assist our clients in formulating customized Loan contracts, ensuring all critical details like amount of loan, time of payment, interest rate, collateral, non-performance and other related issues are clearly outlined. We also meticulously evaluate and refine existing contracts to rectify any deficiencies, unclear terms, or detrimental conditions, recommending modifications to safeguard the interests of all involved entities.',
    },
    {
      title: 'Due diligence Services',
      text: 'We assist clients investigating and assessing various legal aspects before entering into a loan Contract.',
    },
    {
      title: 'Legal Representation',
      text: 'In the event of dispute related to loan contracts our legal team is prepared to represent you in any court action or arbitration.',
    },
    {
      title: 'Consultation',
      text: 'We provide a detailed consultation on loan contracts on issues like collaterals, interest rates, non-performance of contract, repayment rime and advise our clients on the best possible options to proceed with.',
    },
  ]

  return (
    <div>
      {/* first order container */}
      <div className='relative'>
        {/* bg */}
        <div className='absolute inset-0 z-0 flex'>
          <div className='absolute inset-0 z-10 bg-blue-900 bg-opacity-90 md:bg-opacity-100 md:[clip-path:polygon(0%_0%,75%_0%,60%_100%,0%_100%)]'></div>
          <div className='absolute inset-0 z-0 bg-blue-900 md:[clip-path:polygon(75%_0%,100%_0%,100%_100%,60%_100%)] overflow-hidden flex'>
            <div className='w-0 md:w-[50%]'></div>
            <div className='w-full md:w-[50%] h-full overflow-hidden'>
              <img className='w-full h-full object-center object-cover' src="https://www.bankrate.com/2022/05/09105046/how-to-get-a-personal-loan-in-8-steps.jpg?auto=webp&optimize=high" alt="" />
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
                Loan Contracts
              </p>
            </div>
            {/* normal text */}
            <div className='mt-3'>
              <p>
                In Ethiopia, loan contracts serve as a vital mechanism for securing financial support for both individuals and businesses.
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
              <NavLink className={'font-medium text-gray-700 transition-colors ease-in-out duration-300 hover:text-blue-900'}>PCLAW</NavLink>
            </div>
            <div>
              <NavLink className={'font-medium text-gray-700 transition-colors ease-in-out duration-300 hover:text-blue-900'}>TIMES MATTER</NavLink>
            </div>
            <div>
              <NavLink className={'font-medium text-gray-700 transition-colors ease-in-out duration-300 hover:text-blue-900'}>LEAP</NavLink>
            </div>
            <div>
              <NavLink className={'font-medium text-gray-700 transition-colors ease-in-out duration-300 hover:text-blue-900'}>BENEFITS</NavLink>
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
                <img className='w-full h-full object-center object-cover' src="https://www.jkcement.com/wp-content/uploads/2023/12/front-view-house-investments-elements-composition-1024x683-jpg.webp" alt="" />
              </div>
            </div>

            <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-b-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
              {/* bold text */}
              <div className='header-level-3'>
                <p>
                  Ethiopia’s legal landscape provides a detailed structure for the execution of loan contracts
                </p>
              </div>
              {/* normal text */}
              <div className='my-5'>
                <p>
                  This structure specifies the responsibilities and entitlements of the parties involved, prescribes regulations for interest rates, collateral, and guarantees, establishes terms for repayment, outlines liabilities in case of damages, and tackles various other legal considerations
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
                      <img className='w-full h-full object-center object-cover' src="https://phantom-marca.unidadeditorial.es/6f25bb86bc4c3f524ed9512dcea8c01a/resize/828/f/jpg/assets/multimedia/imagenes/2022/06/06/16545282919929.jpg" alt="" />
                    </div>
                    <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                      <img className='w-full h-full object-center object-cover' src="https://www.federalbank.co.in/documents/10180/85638912/OtherLoanProducts.jpg/24b0c10a-52bf-3228-8cf7-ae8e70266900?t=1648033781966" alt="" />
                    </div>
                    <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                      <img className='w-full h-full object-center object-cover' src="https://images.cnbctv18.com/wp-content/uploads/2021/04/RBI-rupee.jpg?impolicy=website&width=345&height=264" alt="" />
                    </div>
                  </div>
                </div>
                <div className='p-3'>
                  <p>
                    The law permits considerable autonomy to the parties in crafting loan agreements, albeit within the bounds of certain exceptional legal constraints.
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
                  Loan contracts play a crucial role in facilitating financial transactions, and it is imperative to adhere to the legal requirements outlined in loan related legislations of the country. 
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
                  Loan Agreements 
                </p>
              </div>
              {/* normal text */}
              <div className='my-5'>
                <p>
                  Loan agreements are often laden with detailed provisions and stipulations that dictate the terms of the deal and the responsibilities of each party involved. The intricacy of these contracts stems from the necessity to customize them according to the unique details of the loan, incorporating a range of stipulations, exceptions, and allowances that, while offering adaptability, also make the document legally complex.
                </p>
              </div>
              <div>
                <p>
                  Additionally, the complexity is further compounded by legislative requirements. Therefore, it is essential for both lenders and borrowers to seek legal counsel to help demystify the contract’s content, safeguard their interests, and ensure a clear understanding of their contractual commitments.
                </p>
              </div>
            </div>
            <div className='w-[100%] md:w-[50%] relative'>
              <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://s17189.pcdn.co/blog/wp-content/uploads/2022/08/refinance-law-school-loans-1060x540.jpg" alt="" />
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
              <div className='header-level-3 font-medium'>
                <p>
                  At Makuta Law Firm, our dedicated team of legal professionals is committed to meticulously creating and examining contracts, ensuring compliance with Ethiopian regulations while placing your priorities at the forefront.
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

export default CivilContractLoan
