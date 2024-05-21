import React, {useState} from 'react'

// icons
import { LuMoveRight } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const CivilContractGeneralContract = () => {
  const [isService,setIsService] = useState(1) 
  return (
    <div>
      {/* first order container */}
      <div className='relative'>
        {/* content container */}
        <div className='static-padding-x py-20 relative z-30'>
          <div className='w-[95%] sm:w-[85%] md:w-[75%] lg:w-[65%]'>
            {/* bold text */}
            <div className='text-3xl md:text-4xl lg:text-5xl font-bold'>
              <p>
                Setting The Stage For Long-Term Relationships
              </p>
            </div>
            {/* normal text */}
            <div className='my-5'>
              <p>
                Agreements form the backbone of interactions between individuals and companies, setting the stage for long-term relationships, delineating rights and duties, enhancing operational efficiency, and fostering trust
              </p>
            </div>
            {/* buttons */}
            <div className='my-5 mt-10'>
              <div className='flex items-center gap-10'>
                <button className='px-5 py-2 rounded-full border-2 border-blue-900 font-semibold text-white bg-blue-900 transition-colors ease-in-out duration-300 hover:bg-white hover:text-blue-900'>Start Now</button>
                <button className='px-5 py-2 rounded-full border-2 border-yellow-500 font-semibold text-white bg-yellow-500 transition-colors ease-in-out duration-300 hover:bg-white hover:text-yellow-500'>Get Legal Help</button>
              </div>
            </div>
            {/* statics */}
            <div className='w-[75%] md:w-[65%] mt-10'>
              <div className='flex items-center justify-between'>
                <div>
                  <div>
                    <h3 className='text-[1.1rem] font-black text-yellow-500'>12.23k</h3>
                  </div>
                  <div>
                    <span>Customers</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className='text-[1.1rem] font-black text-yellow-500'>17.1k</h3>
                  </div>
                  <div>
                    <span>Lawyers</span>
                  </div>
                </div>
                <div>
                  <div>
                    <h3 className='text-[1.1rem] font-black text-yellow-500'>40.37k</h3>
                  </div>
                  <div>
                    <span>Users</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* bg-content */}
        <div className='absolute z-0 inset-0 flex'>
          <div className='w-[75%] md:w-[65%] bg-white'></div>
          <div className='w-[25%] md:w-[35%] relative'>
            {/* image */}
            <div className='w-full h-full overflow-hidden relative z-0'>
              <img className='w-full h-full object-center object-cover' src="https://freerangestock.com/sample/119395/handshake--agreement--business-contract.jpg" alt="" />
            </div>
            <div className='absolute inset-0 z-10 w-[85%] sm:w-[55%] md:w-[35%] bg-gradient-to-r from-white to-transparent'></div>
          </div>
        </div>
      </div>
      {/* second order container */}
      <div className='py-16 bg-black bg-opacity-5'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='text-center'>
            {/* bold text */}
            <div className='text-2xl sm:text-3xl md:text-4xl font-medium w-[85%] md:w-[65%] mx-auto my-3'>
              <p>
                Reassess your agreements to ensure they hold legal weight
              </p>
            </div>
            {/* normal text */}
            <div>
              <p>
                Yet, it’s crucial to recognize that not every agreement meets the legal criteria to be deemed a contract. Various jurisdictions impose distinct formalities that an agreement must satisfy to be legally binding.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* third order container */}
      <div className='my-20'>
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
      {/* fourth order container */}
      <div className='mb-20'>
        {/* content container */}
        <div className='bg-black bg-opacity-70 py-10 text-white'>
          <div className='static-padding-x text-center'>
            {/* bold text */}
            <div className='header-level-3 uppercase'>
              <p>
                No matter your needs - MAKUTA LAW FIRM solutions have you covered!
              </p>
            </div>
            {/* normal text */}
            <div className='my-5'>
              <p>
                At Makuta Law Firm, our dedicated team of legal professionals is committed to meticulously creating and examining a variety of contracts, ensuring compliance with Ethiopian regulations while placing your priorities at the forefront
              </p>
            </div>
            {/* buttons */}
            <div className='flex items-center justify-center'>
              <button className='px-7 py-2 border-2 border-yellow-500 text-white bg-yellow-500 flex items-center gap-1 transition-colors hover:bg-yellow-400 ease-in-out duration-300 hover:border-yellow-400'>
                <span>Contact Us For A Consultation</span>
                <LuMoveRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* fifth order container */}
      <div className='mb-20'>
        {/* content container */}
        <div className='static-padding-x'>
          {/* bold text */}
          <div>
            <h3 className='header-level-3'>Our Legal Services</h3>
          </div>
          {/* services */}
          <div>
            {/* first service */}
            <div className='border-b border-yellow-500'>
              <header className='flex items-center justify-between py-5'>
                <div>
                  <h2 className='font-bold hover:underline cursor-pointer' onClick={() => {
                    setIsService(1)
                  }}>Draft contract</h2>
                </div>
                <div>
                  <div>
                    <div className='w-[28px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-3xl cursor-pointer' onClick={() => {
                      setIsService(1)
                    }}>
                      <MdOutlineKeyboardArrowDown className={`transition-transform ease-in-out duration-150 ${isService === 1 ? '-rotate-180' : 'rotate-0'}`} />
                    </div>
                  </div>
                </div>
              </header>

              <div className={`overflow-hidden ${isService === 1 ? 'h-auto' : 'h-0'}`}>
                <div className='mb-5'>
                  <p>
                    Our extensive group of attorneys stands prepared to compose the following contracts:
                  </p>
                  <div className='ml-10'>
                    {/* sub lists */}
                    {/* first */}
                    <div>
                      <header className='flex items-center gap-3 py-2'>
                        <div className='w-[8px] aspect-square rounded-full bg-gray-700'></div>
                        <h3 className='font-medium'>Fixed-Price Contracts</h3>
                      </header>
                      <div className='ml-5'>
                        <p>
                          These contracts define a total payment for supplies or services provided. They are used when specifications are clearly defined, and the contractor is required to deliver a product that conforms to those specifications. Fixed-price contracts place maximum responsibility on the contractor to accomplish the work stipulated in the contract1
                        </p>
                      </div>
                    </div>
                    {/* second */}
                    <div>
                      <header className='flex items-center gap-3 py-2'>
                        <div className='w-[8px] aspect-square rounded-full bg-gray-700'></div>
                        <h3 className='font-medium'>Partnership Agreements</h3>
                      </header>
                      <div className='ml-5'>
                        <p>
                          Establish agreements for business partnerships
                        </p>
                      </div>
                    </div>
                    {/* third */}
                    <div>
                      <header className='flex items-center gap-3 py-2'>
                        <div className='w-[8px] aspect-square rounded-full bg-gray-700'></div>
                        <h3 className='font-medium'>Joint Ventures</h3>
                      </header>
                      <div className='ml-5'>
                        <p>
                          Define collaboration between multiple parties
                        </p>
                      </div>
                    </div>
                    {/* fourth */}
                    <div>
                      <header className='flex items-center gap-3 py-2'>
                        <div className='w-[8px] aspect-square rounded-full bg-gray-700'></div>
                        <h3 className='font-medium'>Consulting Agreements</h3>
                      </header>
                      <div className='ml-5'>
                        <p>
                          Specify terms for consulting services
                        </p>
                      </div>
                    </div>
                    {/* fifth */}
                    <div>
                      <header className='flex items-center gap-3 py-2'>
                        <div className='w-[8px] aspect-square rounded-full bg-gray-700'></div>
                        <h3 className='font-medium'>Provisional Agreements</h3>
                      </header>
                      <div className='ml-5'>
                        <p>
                          These include nondisclosure agreements, indemnification clauses, and non-competition agreements
                        </p>
                      </div>
                    </div>
                    {/* sixth */}
                    <div>
                      <header className='flex items-center gap-3 py-2'>
                        <div className='w-[8px] aspect-square rounded-full bg-gray-700'></div>
                        <h3 className='font-medium'>Employment Contracts</h3>
                      </header>
                      <div className='ml-5'>
                        <p>
                          These contracts outline the terms of employment for workers. They ensure fair compensation and protect both businesses and employees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second service */}
            <div className='border-b border-yellow-500'>
              <header className='flex items-center justify-between py-5'>
                <div>
                  <h2 className='font-bold hover:underline cursor-pointer' onClick={() => {
                    setIsService(2)
                  }}>Compliance Checks</h2>
                </div>
                <div>
                  <div>
                    <div className='w-[28px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-3xl cursor-pointer' onClick={() => {
                      setIsService(2)
                    }}>
                      <MdOutlineKeyboardArrowDown className={`transition-transform ease-in-out duration-150 ${isService === 2 ? '-rotate-180' : 'rotate-0'}`} />
                    </div>
                  </div>
                </div>
              </header>

              <div className={`overflow-hidden ${isService === 2 ? 'h-auto' : 'h-0'}`}>
                <div className='mb-5'>
                  <p>
                    Ensuring that contracts comply with local, national, and international laws
                  </p>
                </div>
              </div>
            </div>

            {/* third service */}
            <div className='border-b border-yellow-500'>
              <header className='flex items-center justify-between py-5'>
                <div>
                  <h2 className='font-bold hover:underline cursor-pointer' onClick={() => {
                    setIsService(3)
                  }}>Contract Negotiation</h2>
                </div>
                <div>
                  <div>
                    <div className='w-[28px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-3xl cursor-pointer' onClick={() => {
                      setIsService(3)
                    }}>
                      <MdOutlineKeyboardArrowDown className={`transition-transform ease-in-out duration-150 ${isService === 3 ? '-rotate-180' : 'rotate-0'}`} />
                    </div>
                  </div>
                </div>
              </header>

              <div className={`overflow-hidden ${isService === 3 ? 'h-auto' : 'h-0'}`}>
                <div className='mb-5'>
                  <p>
                    Assisting clients in negotiating terms and conditions to reach a mutually beneficial agreement
                  </p>
                </div>
              </div>
            </div>

            {/* fourth service */}
            <div className='border-b border-yellow-500'>
              <header className='flex items-center justify-between py-5'>
                <div>
                  <h2 className='font-bold hover:underline cursor-pointer' onClick={() => {
                    setIsService(4)
                  }}>Consultation</h2>
                </div>
                <div>
                  <div>
                    <div className='w-[28px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-3xl cursor-pointer' onClick={() => {
                      setIsService(4)
                    }}>
                      <MdOutlineKeyboardArrowDown className={`transition-transform ease-in-out duration-150 ${isService === 4 ? '-rotate-180' : 'rotate-0'}`} />
                    </div>
                  </div>
                </div>
              </header>

              <div className={`overflow-hidden ${isService === 4 ? 'h-auto' : 'h-0'}`}>
                <div className='mb-5'>
                  <p>
                    Provide counsel and representation to ensure the seamless transfer of ownership or the acquisition of unencumbered title
                  </p>
                </div>
              </div>
            </div>

            {/* fifth service */}
            <div className='border-b border-yellow-500'>
              <header className='flex items-center justify-between py-5'>
                <div>
                  <h2 className='font-bold hover:underline cursor-pointer' onClick={() => {
                    setIsService(5)
                  }}>Legal representation</h2>
                </div>
                <div>
                  <div>
                    <div className='w-[28px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-3xl cursor-pointer' onClick={()=>{
                      setIsService(5)
                    }}>
                      <MdOutlineKeyboardArrowDown className={`transition-transform ease-in-out duration-150 ${isService === 5 ? '-rotate-180' : 'rotate-0'}`}/>
                    </div>
                  </div>
                </div>
              </header>

              <div className={`overflow-hidden ${isService === 5 ? 'h-auto' : 'h-0'}`}>
                <div className='mb-5'>
                  <p>
                    In case of any disagreements related to contracts, our experienced attorneys are available to represent and support you through arbitration and legal proceedings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CivilContractGeneralContract
