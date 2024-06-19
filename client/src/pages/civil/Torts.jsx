// icons
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Torts = () => {
  return <div className="text-[1.05rem]">
    <div className="px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]">

      {/* first order container */}
      <div className="mt-1 relative">
        {/* content container */}
        <div className="relative z-10">
          <div className="w-[95%] sm:w-[85%] md:[75%] lg:w-[50%] py-16">
            <div>
              <h1 className="text-4xl font-bold">Extra contractual liability</h1>
            </div>
            <div className="my-3">
              <p>
                Ethiopian extra-contractual law, also known as the law of torts, deals with civil wrongdoings that are not based on contractual agreements.
              </p>
            </div>
            <div className="my-5">
              <button className="px-7 py-2 border-2 border-blue-800 rounded-full text-blue-800 transition-colors ease-in-out duration-300 hover:bg-blue-800 hover:text-white">Get Legal Help</button>
            </div>
          </div>
        </div>
        {/* background image */}
        <div className="absolute left-0 top-0 w-full h-full -z-10">
          <div className="w-full h-full overflow-hidden">
            <img className="w-full h-full object-center object-cover" src="https://www.alexanderlawgroupplc.com/images/stories/blog/most_significant_tort_laws_in_virginia.jpg" alt="" />
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
          <div className="grid grid-cols-2 gap-3 sm:gap-5 md:gap-7 lg:gap-10 mt-[-50px] relative z-20">

            <div className="flex flex-col items-center p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-md bg-white shadow-xl">
              <header>
                <h3 className="header-level-4 w-min border-b border-gray-200 whitespace-nowrap">Non-Contractual Acts</h3>
              </header>
              <div>
                <p className="text-center">
                  The law addresses wrongs that arise independently of a contract. This includes various forms of harm or injury that one party may cause to another.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 rounded-md bg-white shadow-xl">
              <header>
                <h3 className="header-level-4 w-min border-b border-gray-200 whitespace-nowrap">Legal Responsibility</h3>
              </header>
              <div>
                <p className="text-center">
                  The law determines who is legally responsible for causing harm and under what circumstances they must compensate the victim
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
                <img className="w-full h-full object-center object-cover" src="https://bytevarsity.com/wp-content/uploads/2023/06/best-practices-working-with-criminal-defense-lawyer.jpg" alt="" />
              </div>
              <div className="absolute left-0 top-0 w-[45%] aspect-[3/2] mt-[-32px] ml-[-24px] bg-white shadow-xl p-3">
                <header className="flex items-center gap-1">
                  <div>
                    <MdOutlineAccountBalanceWallet className="text-3xl" />
                  </div>
                  <div>
                    <h4 className="font-bold">Compensation</h4>
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
              <h3 className="header-level-3 capitalize">Remedies of extra contractual liability</h3>
            </header>
            <div>
              <p>
                In Extra-contractual liabilities, the liable person should compensate the injured party. In Ethiopia, proving damage is a prerequisite for compensation The compensations offered could take any of the following their forms.
              </p>
            </div>
            <div className="my-3">
              <button className="px-10 py-2 border-2 border-yellow-500 bg-yellow-500 text-white rounded-full transition-colors ease-in-out duration-300 hover:text-yellow-500 hover:bg-white">Get Legal Help</button>
            </div>
          </div>
        </div>
      </div>

      {/* fourth order container */}
      <div className="my-20">
        <header className="py-2">
          <h3 className="header-level-3">Legal services we offer</h3>
        </header>
        <div className='grid grid-cols-3 gap-7'>
          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Legal Consultation</h3>
            </header>
            <div>
              <p>
                Advise clients on their legal rights and the viability of pursuing a claim for damages.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Case Evaluation</h3>
            </header>
            <div>
              <p>
                Assess the details of the case to determine the presence of elements such as duty, breach, causation, and damages.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Legal Documentation</h3>
            </header>
            <div>
              <p>
                Prepare legal documents, such as pleadings and motions, related to the case.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Damage Calculation</h3>
            </header>
            <div>
              <p>
                Help in calculating the quantum of damages, including economic and non-economic losses.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Representation in Court</h3>
            </header>
            <div>
              <p>
                Represent clients in civil court proceedings to seek compensation for damages incurred.
              </p>
            </div>
          </div>

          <div className='p-3 bg-white rounded-sm shadow-md'>
            <header>
              <h3 className='header-level-4'>Legal Research</h3>
            </header>
            <div>
              <p>
                Conduct research on legal precedents and current laws to build a strong case.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>;
}

export default Torts