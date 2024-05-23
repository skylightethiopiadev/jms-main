import React from 'react'

// icons
import { GoArrowRight } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";


const CivilContractSupplyGoodsServices = () => {
  const services = [
    {
      title: 'Drafting and reviewing Service contracts',
      text: 'We assist our clients in formulating customized agreements for supply of goods and service, ensuring all critical details such price, type and quality of product, place of delivery, consequence of non-performance and other issues are clearly outlined. We also meticulously evaluate and refine existing contracts to rectify any deficiencies, unclear terms, or detrimental conditions, recommending modifications to safeguard the interests of all involved entities.'
    },
    {
      title: 'Due diligence Services',
      text: 'We assist clients investigating and assessing various legal aspects before entering into a supply agreement.',
    },
    {
      title: 'Legal Representation',
      text: 'In the event of any dispute related to rental contracts our legal team is prepared to represent you in any court action or arbitration.',
    },
    {
      title: 'Consultation',
      text: 'We provide a detailed consultation on supply contracts and advise our clients on the best possible options to proceed with.',
    },
  ]
  return (
    <div>
      {/* first order container */}
      <div className='relative'>
        {/* bg-image */}
        <div className='absolute inset-0 z-0'>
          <div className='w-full h-full overflow-hidden'>
            <img className='w-full h-full object-center object-cover' src="https://www.legalrights.co.za/wp-content/uploads/2019/11/legal-rights-banners-05.jpg" alt="" />
          </div>
        </div>
        {/* content container */}
        <div className='static-padding-x relative z-10'>
          <div className='py-10 flex items-center justify-center'>
            <div className='mx-auto w-[95%] md:w-[75%] flex flex-col items-center p-5 md:px-10 md:py-10 bg-white bg-opacity-85 rounded-md shadow-md'>
              {/* bold text */}
              <div className='text-center text-5xl font-bold capitalize'>
                <p>
                  Supply of Goods and Services
                </p>
              </div>
              {/* normal text */}
              <div className='text-center my-3'>
                <p>
                  Contract of supply of goods and services, supplier agrees to provide a specific service or product either on a regular basis, continuously, or as a one-time transaction.
                </p>
              </div>
              {/* button text */}
              <div>
                <button className='flex items-center justify-center bg-transparent rounded-md transition-colors ease-in-out duration-300 hover:bg-yellow-500 text-white '>
                  <div className='w-full h-full bg-yellow-500 px-10 py-3 rounded-full'>
                    <span>Learn More</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second order container */}
      <div className='my-20'>
        {/* content container */}
        <div className='static-padding-x'>
          <div>
            {/* bold text */}
            <div className='header-level-3'>
              <p>Our Dedicated Team of Legal Professionals</p>
            </div>
            <div className='my-5'>
              <p>
                At Makuta Law Firm, our dedicated team of legal professionals is committed to meticulously creating and examining contracts, ensuring compliance with Ethiopian regulations while placing your priorities at the forefront
              </p>
            </div>
            {/* expert grids */}
            <div className='flex items-center justify-center my-5'>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {
                  [...Array(4)].map((item, index) => {
                    return (
                      <div key={index} className='bg-black bg-opacity-5 rounded-md p-3'>
                        {/* image */}
                        <div className='w-[64px] aspect-square rounded-full overflow-hidden'>
                          <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                        </div>
                        <div className='font-bold mt-2'>
                          <h3>Haddis Fanta</h3>
                        </div>
                        <div>
                          <p>
                            Sequi laudantium explicabo molestiae tenetur alias dolores velit in totam inventore
                          </p>
                        </div>
                        <div className='mt-3'>
                          <button className='flex items-center justify-center gap-1 px-5 py-1 rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors ease-in-out duration-300 bg-transparent text-yellow-500'>
                            <span>Contact</span>
                            <GoArrowRight />
                          </button>
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

      {/* third order container */}
      <div className='my-28'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-b-transparent md:border-b-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
              {/* bold text */}
              <div className='header-level-3 capitalize'>
                <p>
                  key aspects must be included in a supply contract
                </p>
              </div>
              {/* normal text */}
              <div className='my-5'>
                <p>
                  To prevent disputes and ensure clarity, certain key aspects must be included in a supply contract. These include defining the object, quality, and quantity of the goods or services to be supplied, establishing the price, determining the time and amount of payment, outlining the terms of the agreement, and specifying liabilities in case of non-performance.

                </p>
              </div>
            </div>
            <div className='w-[100%] md:w-[50%] relative'>
              <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://roysville.group/wp-content/uploads/2020/09/about-1024x819.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth order container */}
      <div className='text-white bg-neutral-800'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row'>
            <div className='w-[85%] sm:w-[65%] mx-auto md:w-[40%] lg:w-[30%] relative '>
              <div className='relative md:absolute w-full h-max z-30 left-0 top-0 mt-[-60px] bg-neutral-800 border-8 border-white rounded-b-3xl'>
                <div className='flex items-center justify-center py-3'>
                  <div className='grid grid-cols-3 gap-3'>
                    <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                      <img className='w-full h-full object-center object-cover' src="https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/143/2017/02/28205425/1024px-Modern_warehouse_with_pallet_rack_storage_system.jpg" alt="" />
                    </div>
                    <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                      <img className='w-full h-full object-center object-cover' src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEic1zkyPYsThBcUVMtJyAC3NihWpdv0Z6NnOzTSnxyfUzy87LSdc4unyIVdz25GbN39n6I5JB-eOpYyqRhTA28qJdcBHdr8CCFlaN_M1QkCmaqI9Ydxd3e2l0JaUzlckAOxNpr1wmYzRR8/s1600/Supply-Banner-704x286.jpg" alt="" />
                    </div>
                    <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                      <img className='w-full h-full object-center object-cover' src="https://img.foodlogistics.com/files/base/acbm/scn/image/2022/09/Stock_end_to_end_visibility.631fe9e39d9df.png?auto=format%2Ccompress&q=70" alt="" />
                    </div>
                  </div>
                </div>
                <div className='p-3'>
                  <p>
                    The law provides a complete freedom of contract for contracting parties to govern their legal relationship.
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
                  In Ethiopia the primary legislation governing supply contract is the civil code. The law provides a complete freedom of contract for contracting parties to govern their legal relationship. However, if parties fail to clearly regulate their legal relationship the law primarily serves as a gap filling provisions. 
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
      <div className='relative'>
        {/* bg */}
        <div className='absolute inset-0 flex'>
          <div className='w-full lg:w-[60%] absolute left-0 top-0 h-full z-10 bg-white bg-opacity-75 lg:relative'></div>
          <div className='w-full lg:w-[40%] absolute left-0 top-0 h-full z-0 lg:relative'>
            <div className='w-full h-full overflow-hidden'>
              <img className='w-full h-full object-center object-cover' src="https://corlettexpress.com/storage/2021/01/What-the-World-Would-Be-Like-If-Distribution-Services-Didnt-Exist.webp" alt="" />
            </div>
          </div>
        </div>
        {/* content container */}
        <div className='relative z-30 static-padding-x pt-14 pb-32'>
          {/* content */}
          <div className='lg:w-[50%]'>
            {/* bold text */}
            <div className='text-3xl sm:text-4xl md:text-5xl font-bold capitalize'>
              <p>
                creating and examining contracts
              </p>
            </div>
            {/* normal texts */}
            <div className='my-5'>
              <p>
                The predominant legal challenges in supply contracts pertain to the quality and quantity of goods, timeliness of delivery, responsibility for non-fulfillment, location of delivery, among other pertinent matters.
              </p>
            </div>
            <div className='my-3'>
              <p>
                Therefore, it is crucial for parties to delineate their legal obligations and rights. In instances where these rights are not actively exercised, legal intervention becomes inevitable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* sixth order container */}
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

export default CivilContractSupplyGoodsServices
