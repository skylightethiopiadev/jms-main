import { MdArrowRightAlt } from "react-icons/md";
import siteLogo from "../../../../../assets/images/site-logo/final-logo.png";
const ConfirmNewCase = ({ stepCounter, setStepCounter, newCaseHistory }) => {
  console.log(newCaseHistory);
  return (
    <div className="w-full h-[72vh] p-[1%]">
      <div className="w-full h-full bg-white rounded-sm">
        <header className="px-[3%] py-1 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-700">Summary</h3>
          </div>
          <div>
            <img src={siteLogo} alt="" className="w-[90px] h-[75px]" />
          </div>
        </header>

        <div className="">
          <div className="p-[3%] ">
            <div className="border-b border-gray-200 pb-3">
              <div className="">
                {/* <span>Case Category: </span> */}
                <div className="text-gray-700 font-semibold text-lg">
                  Case Category:
                </div>
                <div className="ml-[10%] flex items-center gap-2">
                  <div className="w-2 bg-gradient-to-r from-gray-500 to-yellow-400 h-2 rounded-full"></div>
                  <span>{newCaseHistory?.caseCategory}</span>
                </div>
              </div>
              {newCaseHistory?.subCaseCategory ? (
                <div className="ml-[10%] whitespace-nowrap flex items-center gap-2">
                  <div className="w-2 bg-gradient-to-r from-gray-500 to-yellow-400 h-2 rounded-full"></div>
                  <span className=" text-gray-700">
                    {newCaseHistory?.subCaseCategory.title}
                  </span>
                </div>
              ) : (
                <></>
              )}
              {newCaseHistory?.subCaseCategory?.subSubCaseCategory ? (
                <div className="ml-[10%] whitespace-nowrap flex items-center gap-2">
                  <div className="w-2 bg-gradient-to-r from-gray-500 to-yellow-400 h-2 rounded-full"></div>
                  <span className=" text-gray-700">
                    {newCaseHistory?.subCaseCategory?.subSubCaseCategory.title}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
            {newCaseHistory?.services?.length > 0 ? (
              <div className="border-b border-gray-200">
                <h3 className="text-gray-700 font-semibold text-lg">
                  Services:{" "}
                </h3>
                <div className="ml-[10%] flex gap-[1%] flex-wrap whitespace-nowrap">
                  {newCaseHistory?.services?.map((item, index) => (
                    <div
                      key={index}
                      className="mb-2 font-medium flex items-center gap-[3%] text-gray-700 px-[2%] py-[1%] transition-all ease-in-out duration-300 hover:shadow-md shadow-sm"
                    >
                      <input
                        id={`${index}`}
                        type="checkbox"
                        className="focus:outline-none focus:ring-0"
                        value={item}
                        checked
                        disabled
                        // onChange={inputChangeHandler}
                      />
                      <label htmlFor={`${index}`} className="cursor-pointer">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="flex items-center  my-3">
              <button
                className="px-5 py-1 rounded-sm bg-blue-600 text-white"
                onClick={() => {
                  setStepCounter(stepCounter + 1);
                }}
              >
                confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmNewCase;
