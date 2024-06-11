
const Training = () => {
  return (
    <div className="w-full text-[1rem] text-justify">
      {/* first order container */}
      <div className='relative flex flex-col'>
        {/* header-bg */}
        <div className='relative h-[200px] lg:h-auto lg:absolute lg:inset-0 z-0 flex'>
          {/* left */}
          <div className='w-0 lg:w-[50%]'></div>
          {/* right */}
          <div className='w-[100%] lg:w-[50%] flex relative'>
            <div className='absolute inset-0 z-0'>
              {/* image-container */}
              <div className='w-full h-full overflow-hidden'>
                <img
                  className='w-full h-full object-center object-cover'
                  src="https://servicestrategies.com/wp-content/uploads/Training_2.jpg" alt="" />
              </div>
            </div>
            {/* left */}
            <div className='w-0 lg:w-[15%] bg-white relative z-10'></div>
            {/* right */}
            <div className='w-0 lg:w-[85%] relative z-10 bg-gradient-to-r from-white to-transparent'></div>
          </div>
        </div>
        {/* content container */}
        <div className='static-padding-x flex flex-col-reverse md:flex-row relative z-10'>
          <div className='lg:w-[50%] md:py-12'>
            <div className='text-5xl font-bold  mt-3 md:mt-0 md:mb-3 text-left'>
              <h3>Training Services by Makuta Law Firm</h3>
            </div>
            <div>
              <p>
                In the dynamic and ever-changing business environment, legal training plays a pivotal role for both individuals and businesses. For individuals, a solid grasp of legal principles ensures compliance with regulations, informs decision-making, and empowers them to navigate legal complexities effectively. Meanwhile, businesses benefit from legal training as a strategic investment that minimizes risks, strengthens corporate governance, and promotes ethical conduct. Whether addressing contract law, taxation, intellectual property, employment relations, real estate transactions, or data privacy and protection, maintaining proficiency in legal matters is essential for sustained success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className="my-20">
        {/* content container */}
        <div className="static-padding-x">
          <h3 className="text-4xl font-bold my-10 text-left">Types of Training Programs</h3>

          {/* first content */}
          <div className="flex flex-col md:flex-row gap-16 mb-28">
            {/* left */}
            <div className="w-full md:w-[50%] h-[250px] md:h-auto flex ">
              <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://cdn.elearningindustry.com/wp-content/uploads/2018/08/4-essential-elements-of-a-corporate-compliance-training-program-1024x574.jpg" alt="" />
              </div>
            </div>
            {/* right */}
            <div className="w-full md:w-[50%]">
              <div>
                <h3 className="header-level-3 text-left">Corporate Compliance Training</h3>
              </div>
              <div>
                <p>
                  Corporate compliance training is a structured training program designed to ensure that employees and stakeholders understand and adhere to legal regulations, industry standards, and internal policies within an organization. It covers a range of topics, including anti-corruption, data privacy, conflict of interest, anti-money laundering, workplace safety, and ethical conduct. Through interactive sessions, case studies, and practical examples, participants learn how to recognize potential risks, report violations, and maintain a culture of compliance.
                </p>
              </div>
            </div>
          </div>

          {/* second content */}
          <div className="flex flex-col-reverse md:flex-row gap-16">
            {/* left */}
            <div className="w-full md:w-[50%]">
              <div>
                <h3 className="header-level-3 text-left">Contract Law and Negotiation Training</h3>
              </div>
              <div>
                <p>
                  The Contract Law and Negotiation Training program is meticulously crafted to furnish participants with extensive expertise and hands-on capabilities pertaining to contract creation, assessment, and negotiation. This specialized initiative empowers attendees with profound understanding in crafting contracts that are precise, coherent, and legally robust.
                </p>
              </div>
            </div>

            {/* right */}
            <div className="w-full md:w-[50%] h-[250px] md:h-auto flex ">
              <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://skyprep.com/wp-content/uploads/2022/05/Blog-Image-size-2022-05-11T164303.094.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Training;
