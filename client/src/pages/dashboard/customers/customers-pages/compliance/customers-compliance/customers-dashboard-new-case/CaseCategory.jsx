import { useState } from 'react'

// icons
import { IoIosMore } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const CaseCategory = props => {

    // case description
    const [isCaseCategoryDescription, setIsCaseCategoryDescription] = useState(null)


    return (
        <div className="overflow-y-auto h-[76vh] md:h-[66vh] p-2 flex flex-col gap-y-3">
            <div>
                <header>
                    <h4 className="header-level-4">Available Cases</h4>
                </header>
            </div>
            {/* cases list here */}
            <div className="flex-grow bg-white rounded-md border border-gray-200 p-2">
                {
                    props?.caseCategories.map((item, index) => {
                        return (
                            <div key={index} className="p-3 border border-gray-300 rounded-md mb-3 relative">
                                <header className="flex items-center justify-between">
                                    <h3 className="header-level-4">{item.caseCategory}</h3>
                                    <button className="text-2xl opacity-55 transition-opacity ease-in-out duration-300 hover:opacity-100" onMouseEnter={() => {
                                        setIsCaseCategoryDescription(item)
                                    }}
                                        onClick={() => {
                                            setIsCaseCategoryDescription(item)
                                        }}
                                    >
                                        <IoIosMore />
                                    </button>
                                </header>
                                <div>
                                    <p>
                                        {item?.description?.substring(0, 130)}...
                                    </p>
                                </div>
                                <footer className="mt-2">
                                    <div
                                        className="flex items-center gap-1 w-max cursor-pointer px-3 py-[.15rem] border border-gray-700 rounded-full hover:bg-gray-700 hover:text-white transition-colors ease-in-out duration-300"
                                        onClick={() => {
                                            props?.setNewCaseHistory((prev) => {
                                                return {
                                                    ...prev,
                                                    caseCategory: item?.caseCategory,
                                                };
                                            });
                                            props?.setNewCase(item);
                                            props?.setStepCounter(props?.stepCounter + 1);
                                        }}
                                    >
                                        <span>select</span>
                                        <MdArrowRightAlt className="text-xl" />
                                    </div>
                                </footer>

                                {/* detail pop up */}
                                <div className={`absolute top-1 md:top-auto z-30 right-1 md:bottom-1 w-[95%] h-max bg-white border border-blue-200 rounded-md shadow-xl transition-transform ease-in-out duration-150 ${isCaseCategoryDescription?.caseCategory === item.caseCategory ? 'scale-100' : 'scale-0'}`} onMouseLeave={() => {
                                    setIsCaseCategoryDescription(null)
                                }}>
                                    <div className='absolute top-1 right-1 w-[24px] aspect-square rounded-full bg-gray-100 flex items-center justify-center text-2xl transition-colors ease-in-out duration-150 hover:bg-gray-300 cursor-pointer' onClick={() => {
                                        setIsCaseCategoryDescription(null)
                                    }}>
                                        <IoIosClose />
                                    </div>
                                    <div className="p-5">
                                        <p>{item?.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default CaseCategory;


