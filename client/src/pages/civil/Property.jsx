// icons
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Property = () => {
  return <div className="text-[1.05rem]">
    <div className="px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]">

      {/* first order container */}
      <div className="mt-1 relative">
        {/* content container */}
        <div className="relative z-10">
          <div className="w-[95%] sm:w-[85%] md:[75%] lg:w-[50%] py-16">
            <div>
              <h1 className="text-4xl font-bold">Law of succession or Inheritance law</h1>
            </div>
            <div className="my-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam, cum praesentium consequuntur blanditiis dolor minus incidunt animi, cupiditate repudiandae assumenda iure ea enim.
              </p>
            </div>
          </div>
        </div>
        {/* background image */}
        <div className="absolute left-0 top-0 w-full h-full -z-10">
          <div className="w-full h-full overflow-hidden">
            <img className="w-full h-full object-center object-cover" src="https://imageio.forbes.com/specials-images/imageserve/658c17b97890eb979da92686/It-s-great-to-finally-meet-you/960x0.jpg?format=jpg&width=960" alt="" />
          </div>
        </div>
        {/* background gradient */}
        <div className="absolute left-0 top-0 w-full h-full z-0 flex bg-gradient-to-r from-white to-transparent">
          <div className="w-[100%] sm:w-[85%] md:[75%] lg:w-[50%] bg-gradient-to-r from-white to-transparent"></div>
        </div>
      </div>

      {/* second order container */}
      <div className="mt-3">
        <div className="flex items-center justify-center px-[1%] sm:px-[3%] md:px-[7%] lg:px-[15%]">
          <div className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-7 lg:gap-10 mt-[-50px] relative z-20">

            <div className="flex flex-col items-center p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-md bg-white shadow-xl">
              <header>
                <h3 className="header-level-4 w-min border-b border-gray-200 whitespace-nowrap">Public</h3>
              </header>
              <div>
                <p className="text-center">
                  Ducimus possimus dignissimos facilis et. Accusamus dolores optio perferendis porro non.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-md bg-white shadow-xl">
              <header>
                <h3 className="header-level-4 w-min border-b border-gray-200 whitespace-nowrap">Holographic</h3>
              </header>
              <div>
                <p className="text-center">
                  Ducimus possimus dignissimos facilis et. Accusamus dolores optio perferendis porro non.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-md bg-white shadow-xl">
              <header>
                <h3 className="header-level-4 w-min border-b border-gray-200 whitespace-nowrap">Oral</h3>
              </header>
              <div>
                <p className="text-center">
                  Ducimus possimus dignissimos facilis et. Accusamus dolores optio perferendis porro non.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* third order container */}
      <div className="mt-20">
        <div className="flex gap-10">
          <div className="w-[50%] relative">
            <div className="absolute left-0 top-0 w-full h-full bg-yellow-500">
              <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://www.onboardmeetings.com/wp-content/uploads/2022/04/What-Is-a-Nonprofit-Advisory-Board-2-1024x536.jpeg" alt="" />
              </div>
              <div className="absolute left-0 top-0 w-[45%] aspect-[3/2] mt-[-32px] ml-[-24px] bg-white shadow-xl p-3">
                <header className="flex items-center gap-1">
                  <div>
                    <MdOutlineAccountBalanceWallet className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Succession</h4>
                  </div>
                </header>
                <div className="text-[.985rem]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio vitae sint!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] py-7">
            <header>
              <h3 className="header-level-3 capitalize">legal framework</h3>
            </header>
            <div>
              <p>
                Debitis distinctio doloremque vel quibusdam repudiandae. Minus autem, vel facere culpa enim aliquam est ea eaque hic fugit. Itaque aliquam voluptate odio quod est, aliquid rerum delectus ducimus amet nostrum, officiis dolorum, velit porro.
              </p>
            </div>
            <div className="my-3">
              <button className="px-10 py-2 border-2 border-yellow-500 bg-yellow-500 text-white rounded-full transition-colors ease-in-out duration-300 hover:text-yellow-500 hover:bg-white">Get Legal Help</button>
            </div>
          </div>
        </div>
      </div>

      {/* fourth order container */}
      <div className="mt-20">
        <header className="py-2">
          <h3 className="header-level-3">Legal services we offer</h3>
        </header>
        <div className='grid grid-cols-2 gap-7'>
          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Assisting the creation of Wills</h3>
            </header>
            <div>
              <p>
                Assist individuals in formulating wills that are legally sound and reflect their desires for asset distribution post-mortem. We ensure these documents adhere to legal standards and address all pertinent details.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Securing Legal Documentation</h3>
            </header>
            <div>
              <p>
                Navigate the process of acquiring essential documents like succession certificates or letters of administration, crucial for their asset transfer.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Court Representation</h3>
            </header>
            <div>
              <p>
                Act on behalf of clients in court, advocating for asset distribution in alignment with the deceased’s intentions or the law, while providing ongoing legal counsel.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>International Succession Consultation</h3>
            </header>
            <div>
              <p>
                Offer guidance on the implications of international wills and manage the intricacies of cross-border inheritance for clients with global assets.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* fourth order container */}
      <div className="my-20">
        <div className="flex gap-10">

          <div className="w-[50%] py-7">
            <header>
              <h3 className="header-level-3 capitalize">legal framework</h3>
            </header>
            <div>
              <p>
                Debitis distinctio doloremque vel quibusdam repudiandae. Minus autem, vel facere culpa enim aliquam est ea eaque hic fugit. Itaque aliquam voluptate odio quod est, aliquid rerum delectus ducimus amet nostrum, officiis dolorum, velit porro.
              </p>
            </div>
            <div className="my-3">
              <button className="px-10 py-2 border-2 border-yellow-500 bg-yellow-500 text-white rounded-full transition-colors ease-in-out duration-300 hover:text-yellow-500 hover:bg-white">Get Legal Help</button>
            </div>
          </div>

          <div className="w-[50%] relative">
            <div className="absolute left-0 top-0 w-full h-full bg-yellow-500">
              <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://www.onboardmeetings.com/wp-content/uploads/2022/04/What-Is-a-Nonprofit-Advisory-Board-2-1024x536.jpeg" alt="" />
              </div>
              <div className="absolute left-0 top-0 w-[45%] aspect-[3/2] mt-[-32px] ml-[-24px] bg-white shadow-xl p-3">
                <header className="flex items-center gap-1">
                  <div>
                    <MdOutlineAccountBalanceWallet className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Succession</h4>
                  </div>
                </header>
                <div className="text-[.985rem]">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio vitae sint!
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>;
};

export default Property;
