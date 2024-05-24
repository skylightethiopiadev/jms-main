import React from 'react'

const CorporateIncorporation = () => {

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
        {/* content container */}
        <div className='static-padding-x flex flex-col-reverse md:flex-row'>
          <div className='py-7 md:py-12 w-[100%] md:w-[50%]'>
            <div className='text-5xl font-bold'>
              <p>
                consectetur adip
              </p>
            </div>
            <div className='my-3'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae odio dolor.
              </p>
            </div>
            <div>
              <button className='px-10 py-2 rounded-sm bg-yellow-400 text-white font-medium transition-colors ease-in-out duration-300 hover:bg-yellow-300'>click me</button>
            </div>
          </div>
          <div className='w-[100%] md:w-[50%] bg-yellow-500 md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] h-[170px] md:h-auto'>
            <div className='w-full h-full overflow-hidden'>
              <img className='w-full h-full object-center object-cover' src="https://vision-associates.com/wp-content/uploads/2014/11/60-795x385.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* second order container */}
      <div>
        <div className='static-padding-x'>
          {/* content container */}
          <div className='max-w-[640px] mx-auto p-5 rounded-md bg-white shadow-2xl mt-[-16px] md:mt-[-50px] relative z-10 flex flex-col items-center gap-3'>
            <div className='header-level-3'>
              <p>Ethiopia The Land Of Wisdom</p>
            </div>
            <div className='text-center'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex repellat maiores minima non, asperiores eveniet beatae facere ea cupiditate! Corporis, sapiente provident iste quas molestiae velit.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third order container */}
      <div className='mt-20 mb-10 md:my-36'>
        {/* content container */}
        <div className='static-padding-x flex flex-col-reverse md:flex-row gap-5 md:gap-10'>
          <div className='w-[100%] md:w-[50%] py-5 md:py-10'>
            <div className='header-level-3'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod architecto perspiciatis sunt odio, eligendi dolorum excepturi rerum assumenda porro debitis nesciunt unde fuga ipsam saepe dolores magnam iste? Optio deleniti dicta vero fugit. Fugiat voluptatum dicta possimus magni pariatur accusantium, reiciendis omnis est. Impedit, esse vel autem atque itaque magni maxime!
              </p>
            </div>
          </div>
          <div className='w-[100%] md:w-[50%]'>
            <div className='w-full h-[210px] md:h-full overflow-hidden'>
              <img className='w-full h-full object-center object-cover' src="https://londoneconomics.co.uk/wp-content/uploads/2020/01/shutterstock_59286079_PINE-800x360.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* fourth order container */}
      <div className='md:my-36'>
        {/* content container */}
        <div className='static-padding-x flex flex-col md:flex-row gap-5 md:gap-10'>
          <div className='w-[100%] md:w-[50%]'>
            <div className='w-full h-[210px] md:h-full overflow-hidden'>
              <img className='w-full h-full object-center object-cover' src="https://londoneconomics.co.uk/wp-content/uploads/2020/01/shutterstock_59286079_PINE-800x360.jpg" alt="" />
            </div>
          </div>

          <div className='w-[100%] md:w-[50%] py-5 md:py-10'>
            <div className='header-level-3'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quod architecto perspiciatis sunt odio, eligendi dolorum excepturi rerum assumenda porro debitis nesciunt unde fuga ipsam saepe dolores magnam iste? Optio deleniti dicta vero fugit. Fugiat voluptatum dicta possimus magni pariatur accusantium, reiciendis omnis est. Impedit, esse vel autem atque itaque magni maxime!
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* fifth order container */}
      <div className='my-10 bg-neutral-700'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-white py-10'>
            <div>
              <div className='header-level-3'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, distinctio. Excepturi, pariatur?
                </p>
              </div>
            </div>
            <div>
              <button className='px-10 py-2 rounded-md bg-yellow-400 transition-colors ease-in-out duration-300 hover:bg-yellow-300 whitespace-nowrap'>click me</button>
            </div>
          </div>
        </div>
      </div>


      {/* sixth order container */}
      <div className='my-10 md:my-20'>
        {/* content container */}
        <div className='static-padding-x'>
          <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
            <div className='w-[100%] md:w-[50%]'>
              <div className='w-full h-[210px] md:h-full overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://njbmagazine.com/wp-content/uploads/2015/11/MAG-ForeignTrade-775x500.jpg" alt="" />
              </div>
            </div>

            <div className='w-[100%] md:w-[50%]'>
              <div className='header-level-3'>
                <p>
                  Lorem ipsum dolor
                </p>
              </div>
              <div className='my-3'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequatur similique, eum pariatur inventore quos.
                </p>
              </div>
              <div className='bg-white p-5 shadow-lg'>
                <div className='px-5 border-l-4 border-yellow-400'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel deserunt nisi laboriosam eligendi hic fugit reprehenderit quasi dolor corrupti. Doloremque, id illum.
                  </p>
                </div>
              </div>
              <div className='mt-7'>
                <button className='px-10 py-2 border-2 border-yellow-400 rounded-full text-yellow-500 transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white'>click me here</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* seventh order container */}
      <div className='my-20'>
        {/* content container */}
        <div className='static-padding-x flex flex-col md:flex-row gap-5 md:gap-10'>
          <div className='w-[100%] md:w-[50%] bg-black bg-opacity-10 rounded-md overflow-hidden flex items-center'>

            <div className='self-start h-full'>
              <div className='w-[90px] h-full overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://archive.mbda.gov/sites/mbda.gov/files/styles/scale_700w/public/media/images/2017/istock-5188714625012.jpg?itok=KHh3q0zT" alt="" />
              </div>
            </div>

            <div>
              <div className='p-3'>
                <div className='font-bold'>
                  <p>
                    Lorem, ipsum dolor.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className='w-[100%] md:w-[50%] bg-black bg-opacity-10 rounded-md overflow-hidden flex items-center'>

            <div className='self-start h-full'>
              <div className='w-[90px] h-full overflow-hidden'>
                <img className='w-full h-full object-center object-cover' src="https://archive.mbda.gov/sites/mbda.gov/files/styles/scale_700w/public/media/images/2017/istock-5188714625012.jpg?itok=KHh3q0zT" alt="" />
              </div>
            </div>

            <div>
              <div className='p-3'>
                <div className='font-bold'>
                  <p>
                    Lorem, ipsum dolor.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* eight order container */}
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

export default CorporateIncorporation
