
const ConfirmNewCase = props => {

    console.log(props?.newCaseHistory)

    return (
        <div className="overflow-y-auto h-[66vh] p-2 flex flex-col gap-y-3 items-center">
            <div className="p-5 px-10 border border-gray-200 rounded-md bg-white shadow-xl flex flex-col gap-y-1">
                <header className="flex items-center justify-center py-1 border-b border-gray-200">
                    <h3 className="font-blackk text-2xl">Summary</h3>
                </header>
                <div>
                    <h3 className="text-xl">{props?.newCaseHistory?.caseCategory}</h3>
                    {
                        props?.newCaseHistory?.subCaseCategory
                            ?
                            <h4 className="text-lg ml-5d">{props?.newCaseHistory?.subCaseCategory.title}</h4>
                            :
                            <></>
                    }
                    {
                        props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory
                            ?
                            <h5 className="ml-10d">{props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory.title}</h5>
                            :
                            <></>
                    }
                    {
                        props?.newCaseHistory?.services?.length > 0
                            ?
                            <div>

                                <h3 className="text-xl">Services</h3>
                                <div className="ml-5">
                                    {props?.newCaseHistory?.services?.map((item, index) => (
                                        <div
                                            key={index}
                                            className="mb-2 font-medium flex items-center gap-[3%] text-gray-700 px-[2%] py-[1%] transition-all ease-in-out duration-300 hover:shadow-md shadow-sm whitespace-nowrap"
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
                            :
                            <></>
                    }
                </div>
                <div className="w-full flex items-center justify-center bg-blue-700 py-1 rounded-md text-white mt-3 my-1 transition-colors ease-in-out duration-150 hover:bg-blue-600 cursor-pointer">
                    <span>Submit</span>
                </div>
                <div className="w-full flex items-center justify-center bg-gray-700 py-1 rounded-md text-white my-1 transition-colors ease-in-out duration-150 hover:bg-gray-600 cursor-pointer">
                    <span>Cancel</span>
                </div>
            </div>
        </div>
    );
};

export default ConfirmNewCase;
