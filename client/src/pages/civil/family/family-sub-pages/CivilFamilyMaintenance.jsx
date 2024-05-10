
// icons
import { IoMdStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { MdAccountBalanceWallet } from "react-icons/md";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { FaHandsHelping } from "react-icons/fa";

const CivilFamilyMaintenance = () => {
  return (
    <div className="pt-16">
      {/* first order container */}
      <div className="mb-16">
        <div className="flex gap-10">
          <div className="w-[50%] relative flex">
            {/* absolute */}
            <div className="absolute top-0 mt-[-24px] left-0 w-[60%] h-[75%] bg-yellow-500 z-30">
              <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://www.womenspodium.com/wp-content/uploads/2020/12/feature-img.jpg" alt="" />
              </div>
            </div>
            <div className="w-[30%] h-full"></div>
            <div className="w-[70%] h-full bg-blue-900 flex">
              <div className="h-full w-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://ipscommons.sg/wp-content/uploads/2015/09/ThinkstockPhotos-170081482.jpg" alt="" />
              </div>
            </div>
          </div>

          
          <div className="w-[50%]">
            <div>

              <div>
                <h1 className="header-level-3">Maintenance</h1>
              </div>

              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis nulla sunt cumque perspiciatis inventore rem animi officia nisi eligendi nesciunt saepe vel, nam quas autem velit quisquam odit harum quae quo.
                </p>
              </div>

              <div className="my-3">

                <div className="flex items-center gap-3">

                  <div className="w-[50%] flex items-center gap-3 p-3 bg-white shadow-xl">
                    <div className="flex flex-col items-center">

                      <div className="w-[40px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img className="w-full h-full object-center object-cover" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715299200&semt=sph" alt="" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center text-xs text-yellow-500">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-start">
                      <div>
                        <h3 className="font-medium">Haddis Fanta</h3>
                      </div>
                      <div>
                        <p>
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%] flex items-center gap-3 p-3 bg-white shadow-xl">
                    <div className="flex flex-col items-center">

                      <div className="w-[40px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img className="w-full h-full object-center object-cover" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715299200&semt=sph" alt="" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center text-xs text-yellow-500">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-start">
                      <div>
                        <h3 className="font-medium">Haddis Fanta</h3>
                      </div>
                      <div>
                        <p>
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <footer className="mt-10">
                <div>
                  <div className="flex items-center gap-2 px-3 py-1 border w-max rounded-md border-yellow-400 text-yellow-400 transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white cursor-pointer">
                    <div className="text-gray-800">get legal help</div>
                    <IoIosHelpCircle className="text-2xl" />
                  </div>
                </div>
              </footer>

            </div>
          </div>
        </div>
      </div>

      {/* second order container */}
      <div className="mb-16">
        <div className="my-2">
          <h3 className="header-level-3">
            Our services
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-5">

          <div className="flex flex-col items-center p-2 rounded-sm bg-gray-100">
            <div className="my-2 text-yellow-500">
              <HiDocumentMagnifyingGlass className="text-4xl" />
            </div>
            <div>
              <h3 className="header-level-4 text-center">Guidance on Maintenance Obligations</h3>
            </div>
            <div>
              <p>
                We offer counsel regarding maintenance responsibilities arising from marital and blood ties.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center p-2 rounded-sm bg-gray-100">
            <div className="my-2 text-yellow-500">
              <FaHandsHelping className="text-4xl" />
            </div>
            <div>
              <h3 className="header-level-4 text-center">Claim Negotiations</h3>
            </div>
            <div>
              <p>
                To prevent court proceedings, we’ll engage in negotiations with the opposing party.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center p-2 rounded-sm bg-gray-100">
            <div className="my-2 text-yellow-500">
              <SiHomeassistantcommunitystore className="text-3xl" />
            </div>
            <div>
              <h3 className="header-level-4 text-center">Additional Legal Assistance</h3>
            </div>
            <div>
              <p>
                Our team is equipped to handle a variety of other legal needs you may have.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center p-2 rounded-sm bg-gray-100">
            <div className="my-2 text-yellow-500">
              <MdAccountBalanceWallet className="text-4xl" />
            </div>
            <div>
              <h3 className="header-level-4 text-center">Court Representation</h3>
            </div>
            <div>
              <p>
                Whether you’re facing a maintenance claim or need to file one, we’ll represent your interests in the legal arena.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* third order container */}
      <div className="mb-16">
        <div className="flex gap-10">
          <div className="w-[50%]">
            <div>

              <div>
                <h1 className="header-level-3">Maintenance</h1>
              </div>

              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit omnis nulla sunt cumque perspiciatis inventore rem animi officia nisi eligendi nesciunt saepe vel, nam quas autem velit quisquam odit harum quae quo.
                </p>
              </div>

              <div className="my-3">

                <div className="flex items-center gap-3">

                  <div className="w-[50%] flex items-center gap-3 p-3 bg-white shadow-xl">
                    <div className="flex flex-col items-center">

                      <div className="w-[40px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img className="w-full h-full object-center object-cover" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715299200&semt=sph" alt="" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center text-xs text-yellow-500">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-start">
                      <div>
                        <h3 className="font-medium">Haddis Fanta</h3>
                      </div>
                      <div>
                        <p>
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%] flex items-center gap-3 p-3 bg-white shadow-xl">
                    <div className="flex flex-col items-center">

                      <div className="w-[40px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md">
                        <img className="w-full h-full object-center object-cover" src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1715299200&semt=sph" alt="" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <div className="flex items-center text-xs text-yellow-500">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-start">
                      <div>
                        <h3 className="font-medium">Haddis Fanta</h3>
                      </div>
                      <div>
                        <p>
                          adipisicing elit.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              <footer className="mt-10">
                <div>
                  <div className="flex items-center gap-2 px-3 py-1 border w-max rounded-md border-yellow-400 text-yellow-400 transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white cursor-pointer">
                    <div className="text-gray-800">get legal help</div>
                    <IoIosHelpCircle className="text-2xl" />
                  </div>
                </div>
              </footer>

            </div>
          </div>
          <div className="w-[50%] relative flex">
            {/* absolute */}
            <div className="absolute top-0 mt-[-24px] left-0 w-[60%] h-[75%] bg-yellow-500 z-30">
              <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://onecms-res.cloudinary.com/image/upload/s--9JcjOGK---/f_auto,q_auto/c_fill,g_auto,h_622,w_830/v1/mediacorp/tdy/image/2023/01/27/20230127_istock_tqdivorce.jpg?itok=TcPyvIX2" alt="" />
              </div>
            </div>
            <div className="w-[30%] h-full"></div>
            <div className="w-[70%] h-full bg-blue-900 flex">
              <div className="h-full w-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://bloximages.newyork1.vip.townnews.com/trinidadexpress.com/content/tncms/assets/v3/editorial/c/0b/c0b1b098-92fd-11ee-89a8-7fd8ad588c06/656e625c9c656.image.jpg?resize=812%2C500" alt="" />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default CivilFamilyMaintenance
