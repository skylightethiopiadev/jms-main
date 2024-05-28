
const ConfirmNewCase = props => {
    return (
        <div className="overflow-y-auto h-[66vh] p-2 flex">
            <div className="flex-grow bg-white rounded-md border border-gray-200 p-3 h-max">
                <header className="py-1 border-b border-gray-100">
                    <h4 className="font-semibold">New Case Summary</h4>
                </header>
                <div className="border border-gray-200 p-2 mt-2">
                    {/* first order */}
                    <div>
                        <header>
                            <h3 className="header-level-4">{props?.newCaseHistory.caseCategory}</h3>
                        </header>
                        <div>
                            <p>
                                Nisi perspiciatis, aperiam repudiandae quibusdam nostrum unde. Veritatis nostrum reprehenderit expedita, odit soluta corrupti in totam deserunt numquam? Incidunt amet earum sunt. Iste, fugit?
                            </p>
                        </div>
                        {/* second order */}
                        <div className="pl-5 mt-2">
                            <div className="p-2 border border-gray-200">
                                <header>
                                    <h3 className="header-level-4">{props?.newCaseHistory?.subCaseCategory?.subType?.caseName}</h3>
                                </header>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nam mollitia nisi quos debitis ullam cum praesentium voluptatibus. Odio aliquam vero voluptatem corrupti velit.
                                    </p>
                                </div>
                                {/* third order */}
                                {
                                    props?.newCaseHistory.subCaseCategory.subSubCaseCategory
                                        ?
                                        <div className="pl-5 mt-2">
                                            <div className="border border-gray-200 p-2">
                                                <header>
                                                    <h3 className="header-level-4">{props?.newCaseHistory.subCaseCategory.subSubCaseCategory.title}</h3>
                                                </header>
                                                <div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae, dolore ullam alias vero dolores illum nisi rerum sed omnis at culpa deserunt velit!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                }
                            </div>
                        </div>
                        {/* services */}
                        {
                            props?.newCaseHistory.services.length > 0
                                ?
                                <div className="pl-5 mt-2">
                                    <div className="p-2 border border-gray-200">
                                        <header>
                                            <h3 className="header-level-4">Services</h3>
                                        </header>
                                        <div className="flex gap-[1%] flex-wrap whitespace-nowrap">
                                            {props?.newCaseHistory?.services?.map((item, index) => (
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
                                                    <label htmlFor={`${index}`} className="cursor-pointer capitalize">
                                                        {item}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                :
                                <></>
                        }
                        <div className="flex items-center gap-5 mt-3">
                            <button className="border border-transparent px-5 py-1 transition-colors ease-in-out duration-150 hover:border-red-600 hover:text-red-600 rounded-sm">cancel</button>
                            <button className="px-10 py-1 bg-blue-700 text-white rounded-sm hover:bg-blue-600 transition-colors ease-in-out duration-150">submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmNewCase;
