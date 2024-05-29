import { useState } from "react";

// icons
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";

const NewCaseType = props => {
    const [drop, setDrop] = useState(null);


    return (
        <div className="overflow-y-auto h-[66vh] p-2 flex flex-col gap-y-3">
            <header>
                <h4 className="header-level-4">{props?.newCase?.caseCategory}</h4>
                <p>
                    From the following lists Select the legal service you wish to receive in relation to <span className="font-bold">{props?.newCase?.caseCategory}</span> cases:
                </p>
            </header>
            <div className="flex-grow border border-gray-200 rounded-md p-2 pb-10 bg-white flex flex-col gap-y-3">
                {
                    props?.newCase?.subCategories.map((item, index) => {
                        return (
                            <div key={index}>
                                {
                                    item?.subType
                                        ?
                                        <div className="border border-gray-200 rounded-md">
                                            <header className="p-2 flex items-center justify-between cursor-pointer transition-colors ease-in-out duration-300 hover:bg-gray-100" onClick={() => {
                                                if (drop === item?.caseName) {
                                                    setDrop(null);
                                                } else {
                                                    setDrop(item?.caseName);
                                                }
                                            }}>
                                                <div>
                                                    <h4 className="font-medium">{item?.caseName}</h4>
                                                </div>
                                                <div>
                                                    <button>
                                                        <MdKeyboardArrowDown className={`text-xl transition-transform ease-in-out duration-150 ${drop === item?.caseName ? '-rotate-180' : 'rotate-0'}`} />
                                                    </button>
                                                </div>
                                            </header>
                                            <div className={`overflow-hidden ${drop === item?.caseName ? 'h-auto' : 'h-0'}`}>
                                                <div className="mt-2 border-t border-gray-200 pl-10 p-2 flex flex-col gap-y-3">
                                                    {
                                                        item?.subType.map((subItem, index) => {
                                                            return (
                                                                <div
                                                                    key={index} className="border border-gray-200 rounded-md p-2 cursor-pointer flex items-center gap-2 transition-colors ease-in-out duration-150 hover:bg-gray-100"
                                                                    onClick={() => {
                                                                        props?.setStepCounter(props?.stepCounter + 1);
                                                                        props?.setNewCaseHistory((prev) => {
                                                                            return {
                                                                                ...prev,
                                                                                subCaseCategory: {
                                                                                    subType: item,
                                                                                    subSubCaseCategory: {
                                                                                        subSubType: subItem,
                                                                                    },
                                                                                },
                                                                            };
                                                                        });
                                                                    }}
                                                                >

                                                                    {/* <div className="w-[7px] aspect-square rounded-full bg-gray-700"></div> */}

                                                                    <IoMdArrowForward className="text-gray-700" />
                                                                    <div>
                                                                        <span>{subItem?.title}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div
                                            className="p-2 py-3 border border-gray-200 rounded-md cursor-pointer transition-colors ease-in-out duration-300 hover:bg-gray-100"
                                            onClick={() => {
                                                props?.setStepCounter(props?.stepCounter + 1);
                                                props?.setNewCaseHistory((prev) => {
                                                    return {
                                                        ...prev,
                                                        subCaseCategory: {
                                                            subType: item,
                                                        },
                                                    };
                                                });
                                            }}
                                        >
                                            <span>{item?.caseName}</span>
                                        </div>

                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default NewCaseType;

