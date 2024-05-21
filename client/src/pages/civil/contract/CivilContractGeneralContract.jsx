import React from 'react'

const CivilContractGeneralContract = () => {
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
            <div className='w-[65%] mt-10'>
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
    </div>
  )
}

export default CivilContractGeneralContract
