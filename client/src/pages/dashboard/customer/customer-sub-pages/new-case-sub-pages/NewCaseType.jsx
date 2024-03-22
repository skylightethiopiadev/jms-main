import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";

const NewCaseType = ({ stepCounter, setStepCounter, newCase, setNewCase ,setNewCaseHistory}) => {
  const [drop, setDrop] = useState(null);

  return (
    <div className="w-full h-[72vh] p-[1%]">
      <div className="w-full h-full bg-white rounded-sm">
        <header className="px-[3%] py-1 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold text-gray-700">
              {newCase?.caseCategory}
            </h3>
          </div>
        </header>
        <div className="my-[3%] ml-[7%] h-[58vh] overflow-y-auto">
          {newCase?.subCategories.map((item, index) => (
            <div key={index}>
              {/* header */}
              {item?.subType ? (
                <div>
                  <header
                    className="p-[1%] font-semibold cursor-pointer text-gray-700 flex items-center gap-[5%] transition-all ease-in-out duration-300 hover:shadow-md shadow-md my-2 w-[85%]"
                    onClick={() => {
                      if (drop === item?.caseName) {
                        setDrop(null);
                      } else {
                        setDrop(item?.caseName);
                      }
                    }}
                  >
                    <h3>{item?.caseName} </h3>
                    {
                        drop === item?.caseName ?
                        <IoMdArrowDropup className="text-xl" />
                        :
                        <IoMdArrowDropdown className="text-xl" />
                    }
                  </header>
                  <div
                    className={`ml-[5%] overflow-hidden transition-all ease-in-out duration-300 ${
                      drop === item?.caseName ? "max-h-max" : "max-h-0"
                    }`}
                  >
                    {item?.subType.map((subItem, index) => (
                      <div
                        key={index}
                        className="cursor-pointer py-[1%] px-[3%] transition-all ease-in-out duration-300 hover:shadow-md shadow-sm w-[85%] my-2 font-semibold text-gray-700 flex items-center gap-[1%]"
                        onClick={() => {
                          setStepCounter(stepCounter + 1);
                          setNewCaseHistory(prev=>{
                            return {
                                ...prev,
                                subCaseCategory: {
                                    title: item?.caseName,
                                    subSubCaseCategory: {
                                        title: subItem,
                                    }
                                }
                            }
                        })
                        }}
                      >
                        <MdArrowRightAlt className="text-lg" />
                        <span>{subItem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  className="cursor-pointer p-[1%] transition-all ease-in-out duration-300 hover:shadow-md shadow-sm w-[85%] my-2 font-semibold text-gray-700 flex items-center gap-[1%]"
                  onClick={() => {
                    setStepCounter(stepCounter + 1);
                    setNewCaseHistory(prev=>{
                        return {
                            ...prev,
                            subCaseCategory: {
                                title: item?.caseName
                            }
                        }
                    })
                  }}
                >
                  <MdArrowRightAlt className="text-lg" />
                  <span>{item?.caseName}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCaseType;
