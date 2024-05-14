// icons
import { IoIosMore } from "react-icons/io";
import { MdArrowRightAlt } from "react-icons/md";

const CaseCategory = props => {


    return (
        <div className="overflow-y-auto h-[66vh] p-2 flex flex-col gap-y-3">
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
                            <div key={index} className="p-3 border border-gray-300 rounded-md mb-3">
                                <header className="flex items-center justify-between">
                                    <h3 className="header-level-4">{item.caseCategory}</h3>
                                    <button className="text-2xl opacity-55 transition-opacity ease-in-out duration-300 hover:opacity-100">
                                        <IoIosMore />
                                    </button>
                                </header>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aut ratione enim perspiciatis assumenda aliquid nisi maiores!
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
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default CaseCategory;


// {
//     caseCategories,
//         stepCounter,
//         setStepCounter,
//         setNewCase,
//         setNewCaseHistory,
// }


