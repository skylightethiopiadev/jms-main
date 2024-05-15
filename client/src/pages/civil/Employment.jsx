// icons
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { FaTools } from "react-icons/fa";

const Employment = () => {
  return <div className="text-[1.05rem]">
    <div className="px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]">
      {/* first order container */}
      <div className="mt-1 relative">
        {/* content container */}
        <div className="relative z-10">
          <div className="w-[95%] sm:w-[85%] md:[75%] lg:w-[50%] py-16">
            <div>
              <h1 className="text-4xl font-bold">Safeguarding the rights of all parties involved</h1>
            </div>
            <div className="my-3">
              <p>
                Employment law covers a wider spectrum of workplace issues beyond union relations.
              </p>
            </div>
            <div className="my-3">
              <button className="px-10 py-2 border-2 border-blue-800 rounded-full text-blue-800 transition-colors ease-in-out duration-300 hover:bg-blue-800 hover:text-white">Get Legal Help</button>
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

      

      {/* post second order container */}
      <div className="mt-20">
        <header>
          <h3 className="header-level-3">Working hour, weekly rests and public holidays</h3>
        </header>
        <div>
          <p>
            Ethiopian labor regulations stipulate that the standard work schedule should not surpass 8 hours per day or 48 hours per week.
          </p>
        </div>
      </div>

      {/* third order container */}
      <div className="mt-16">
        <div className="flex gap-10">
          <div className="w-[50%] relative">
            <div className="absolute left-0 top-0 w-full h-full bg-yellow-500">
              <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://mcm.edu/app/uploads/2022/08/AdobeStock_280792377-scaled.jpeg" alt="" />
              </div>
              <div className="absolute left-0 top-0 w-[45%] aspect-[3/2] mt-[-32px] ml-[-24px] bg-white shadow-xl p-3">
                <header className="flex items-center gap-2">
                  <div>
                    <FaTools className="" />
                  </div>
                  <div>
                    <h4 className="font-bold">Employment</h4>
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
              <h3 className="header-level-3 capitalize">Special employees</h3>
            </header>
            <div>
              <p>
                Ethiopian labor legislation acknowledges the unique circumstances of certain groups of workers by categorizing them as “special employees.” This category encompasses probationary workers, apprentices, young workers, women, individuals with disabilities, and foreign workers.
              </p>
            </div>
            <div className="my-3">
              <button className="px-10 py-2 border-2 border-yellow-500 bg-yellow-500 text-white rounded-full transition-colors ease-in-out duration-300 hover:text-yellow-500 hover:bg-white">Get Legal Help</button>
            </div>
          </div>
        </div>
      </div>

      {/* third order container */}
      <div className="mb-20 mt-32">
        <div className="flex gap-10">

          <div className="w-[50%] py-7">
            <header>
              <h3 className="header-level-3 capitalize">Foreign employees</h3>
            </header>
            <div>
              <p>
                Under the labor law, foreign individuals seeking employment in Ethiopia, as well as employers wishing to hire expats, are required to obtain a work permit.
              </p>
            </div>
            <div className="my-3">
              <button className="px-10 py-2 border-2 border-yellow-500 bg-yellow-500 text-white rounded-full transition-colors ease-in-out duration-300 hover:text-yellow-500 hover:bg-white">Get Legal Help</button>
            </div>
          </div>

          <div className="w-[50%] relative">
            <div className="absolute left-0 top-0 w-full h-full bg-yellow-500">
              <div className="w-full h-full overflow-hidden">
                <img className="w-full h-full object-center object-cover" src="https://images.fastcompany.com/image/upload/f_auto,c_fit,w_3840,q_auto/wp-cms/uploads/2017/10/p-1-handshake.jpg" alt="" />
              </div>
              <div className="absolute left-0 top-0 w-[45%] aspect-[3/2] mt-[-32px] ml-[-24px] bg-white shadow-xl p-3">
                <header className="flex items-center gap-2">
                  <div>
                    <FaTools className="" />
                  </div>
                  <div>
                    <h4 className="font-bold">Employment</h4>
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

      {/* fourth order container */}
      <div className="my-20">
        <header className="py-2">
          <h3 className="header-level-3">Legal services we offer</h3>
        </header>
        <div className='grid grid-cols-2 gap-7'>
          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Drafting and Reviewing Employment Contracts</h3>
            </header>
            <div>
              <p>
                Assist in creating legally sound employment contracts that outline the rights and obligations of both employers and employees.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Termination and Severance Advice</h3>
            </header>
            <div>
              <p>
                Advise on lawful termination procedures, including notice periods and severance pay
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Collective Bargaining and Labor Relations</h3>
            </header>
            <div>
              <p>
                Represent employers or employee unions during collective bargaining negotiations
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Labor Litigation and Dispute Resolution</h3>
            </header>
            <div>
              <p>
                Handle cases involving wage disputes, discrimination claims, workplace injuries, and more
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>;
};

export default Employment;
