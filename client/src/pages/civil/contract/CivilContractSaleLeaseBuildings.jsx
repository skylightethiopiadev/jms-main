import React from 'react'

// icons
import { GoArrowRight } from "react-icons/go";
import { HiArrowLongRight } from "react-icons/hi2";

const CivilContractSaleLeaseBuildings = () => {
  const services = [
    {
      title: 'Contract Negotiation',
      text: 'Advocating on your behalf during discussions',
    },
    {
      title: 'Contract Review',
      text: 'Scrutinizing agreements for legal soundness',
    },
    {
      title: 'Due Diligence',
      text: 'Thoroughly investigating property credentials',
    },
    {
      title: 'Authentication and Registration Assistance',
      text: 'Facilitating the official recognition and recording of property ownership',
    },
    {
      title: 'Representation',
      text: 'Acting on your behalf in judicial or arbitral proceedings, and drafting powers of attorney',
    },
    {
      title: 'Contract Preparation',
      text: 'Developing agreements for sale, lease, servitude and mortgage of real properties',
    },
    {
      title: 'Tax Guidance',
      text: 'Offering assistance with the financial aspects of acquiring and transacting real properties',
    },
  ]
  return (
    <div>
      {/* first order container */}
      <div className='relative'>
        {/* bg-image */}
        <div className='absolute inset-0 z-0'>
          <div className='w-full h-full overflow-hidden'>
            <img className='w-full h-full object-center object-cover' src="https://t3.ftcdn.net/jpg/06/49/67/00/360_F_649670028_WC2pRsnnEXODunYdRBX7UUHdBFkHwUR7.jpg" alt="" />
          </div>
        </div>
        {/* content container */}
        <div className='static-padding-x relative z-10'>
          <div className='py-10 flex items-center justify-center'>
            <div className='mx-auto w-[95%] md:w-[75%] flex flex-col items-center p-5 md:px-10 md:py-10 bg-white bg-opacity-85 rounded-md shadow-md'>
              {/* bold text */}
              <div className='text-center text-5xl font-bold capitalize'>
                <p>
                  Sale or leasing of buildings
                </p>
              </div>
              {/* normal text */}
              <div className='text-center my-3'>
                <p>
                  The considerable economic value of real properties leads to the imposition of rigorous regulations by states, which complicates the processes of purchase, sale, lease, mortgage, and servitude for the parties involved
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
              <div className='header-level-3'>
                <p>
                  Agreements form the backbone of interactions
                </p>
              </div>
              {/* normal text */}
              <div className='my-5'>
                <p>
                  In today’s business environment, agreements form the backbone of interactions between individuals and companies, setting the stage for long-term relationships, delineating rights and duties, enhancing operational efficiency, and fostering trust.
                </p>
              </div>
              <div>
                <p>
                  Yet, it’s crucial to recognize that not every agreement meets the legal criteria to be deemed a contract.
                </p>
              </div>
            </div>
            <div className='w-[100%] md:w-[50%] relative'>
              <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/Futuristic-Construction-Hero-image-1.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* fourth order container */}
      <div className='text-white bg-neutral-800 mb-28'>
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
      <div className='mb-28'>
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

export default CivilContractSaleLeaseBuildings
