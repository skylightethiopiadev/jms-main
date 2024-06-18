// icons
import { FaBalanceScale } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { TfiHummer } from "react-icons/tfi";

const CivilFamilyDivorce = () => {
  return (
    <div className="mt-1">
      {/* first order container */}
      <div className="relative">
        {/* background */}
        <div className="absolute left-0 top-0 z-0 w-full h-full bg-gradient-to-r from-white to-transparent">

        </div>
        <div className="absolute left-0 top-0 w-full h-full -z-10">
          <div className="w-full h-full overflow-hidden">
            <img className="w-full h-full object-center object-cover" src="https://extensishr.com/wp-content/uploads/2023/06/legal-services-benefits.png" alt="" />
          </div>
        </div>
        {/* content container */}
        <div className="w-full h-full flex relative z-10 bg-gradient-to-r from-white to-transparent">
          <div className="w-[55%] py-16">
            {/* bold text */}
            <div>
              <h3 className="text-4xl font-semibold">Mankuta network, equipped to offer comprehensive legal services</h3>
            </div>
            {/* normal text */}
            <div className="my-3">
              <p>
                Divorce signifies the formal end of a marriage and is a procedure that can be emotionally challenging and legally intricate.
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* second order containers */}
      <div>
        {/* content container */}
        <div className="flex justify-center gap-5 mt-[-32px] relative z-20 max-w-[820px] mx-auto">

          <div className="bg-white shadow-lg p-5 flex flex-col items-center">
            <div>
              <FaBalanceScale className="text-3xl" />
            </div>
            <div>
              <h4 className="header-level-4">Legal Assist</h4>
            </div>
            <div>
              <p className="text-center">
                comprehensive legal services
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg p-5 flex flex-col items-center">
            <div>
              <MdManageAccounts className="text-3xl" />
            </div>
            <div>
              <h4 className="header-level-4">The Title Here</h4>
            </div>
            <div>
              <p className="text-center">
                Amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg p-5 flex flex-col items-center">
            <div>
              <TfiHummer className="text-3xl" />
            </div>
            <div>
              <h4 className="header-level-4">The Title Here</h4>
            </div>
            <div>
              <p className="text-center">
                Amet consectetur adipisicing elit.
              </p>
            </div>
          </div>

        </div>
      </div>
      {/* third order container */}
      <div className="my-14">
        <div className="flex gap-5">
          <div className="w-[50%]">
            <div>
              <header>
                <div className="text-xs uppercase">
                  <span>formal end of a marriage</span>
                </div>
              </header>
              <div>
                <h3 className="header-level-3">Divorce</h3>
              </div>
              <div className="my-2">
                <p>
                  In addition to the dissolution of marriage, divorce proceedings also entail significant repercussions regarding the division of assets, liabilities, and child custody arrangements. The Ethiopian Family Code offers a mechanism to mitigate disputes over asset distribution through marriage or divorce agreements. Spouses are afforded the autonomy to dictate their financial relations via marital contracts, which can be established prior to or during the marriage.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%] bg-yellow-500">
            <div className="w-full h-full overflow-hidden">
              <img className="w-full h-full object-center object-cover" src="https://tiyce.com/wordpress/wp-content/uploads/2022/09/courtroom-jargon.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* forth order container */}
      <div className="mb-16">
        <div>
          <header>
            <h4 className="header-level-3">Lists of legal support we offer</h4>
          </header>
          <ul className="pl-10">

            <li className="mt-2">
              <div className="header-level-4 flex items-center gap-2">
                <div className="w-[8px] aspect-square rounded-full bg-gray-700"></div>
                <div>
                  <span>Advocacy and Legal Representation</span>
                </div>
              </div>
              <div className="pl-3">
                <p>
                  In the realm of divorce, our attorneys acts as a staunch defender of your legal rights and interests. They provide representation during negotiations, legal hearings, and other procedural matters, ensuring that your perspectives and concerns are adequately represented.
                </p>
              </div>
            </li>

            <li className="mt-2">
              <div className="header-level-4 flex items-center gap-2">
                <div className="w-[8px] aspect-square rounded-full bg-gray-700"></div>
                <div>
                  <span>Jurisdiction and applicable laws ascertainment</span>
                </div>
              </div>
              <div className="pl-3">
                <p>
                  Under the Ethiopian legal framework, each state possesses distinct family laws, and there is also a federal law. Therefore, it’s crucial to determine the applicable law and the appropriate venue for filing a divorce petition. Our nationwide network of legal experts will guide you in identifying the correct court for submitting your divorce application.
                </p>
              </div>
            </li>

            <li className="mt-2">
              <div className="header-level-4 flex items-center gap-2">
                <div className="w-[8px] aspect-square rounded-full bg-gray-700"></div>
                <div>
                  <span>Legal drafting</span>
                </div>
              </div>
              <div className="pl-3">
                <p>
                  draft marriage contracts and divorce agreements.
                </p>
              </div>
            </li>

            <li className="my-2">
              <div className="header-level-4 flex items-center gap-2">
                <div className="w-[8px] aspect-square rounded-full bg-gray-700"></div>
                <div>
                  <span>Other related services.</span>
                </div>
              </div>

            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default CivilFamilyDivorce
