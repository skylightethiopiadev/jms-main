import FroalaEditorComponent from "react-froala-wysiwyg";

import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

const NewCaseServices = props => {
    // services
    const newCaseServices = [
        "Representation",
        "Mediation center",
        "Advisory",
        "Preparation of documents and review",
        "Legal due diligence",
        "Legal opinion",
        "Review of content",
        "Visa and work permit",
        "Others",
    ];

    const inputChangeHandler = (e) => {
        if (e.target.checked) {
            props?.setNewCaseHistory((prev) => {
                return {
                    ...prev,
                    services: [...prev.services, e.target.value],
                };
            });
        } else {
            props?.setNewCaseHistory((prev) => {
                return {
                    ...prev,
                    services: prev.services?.filter((elm) => elm !== e.target.value),
                };
            });
        }
    };

    return (
        <div className="overflow-y-auto h-[66vh] p-2 flex flex-col gap-y-3">
            <header>
                <h4 className="header-level-4">Related Services</h4>
                <div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti quis non voluptatibus, ipsam earum eos est mollitia, quam maxime incidunt, ratione quisquam possimus doloremque.
                    </p>
                </div>
            </header>
            <div className="flex-grow bg-white border border-gray-200 rounded-md p-2 relative">
                <div className="border border-gray-200 p-3 rounded-md grid grid-cols-3 gap-x-5">
                    {newCaseServices?.map((service, index) => (
                        <div
                            key={index}
                            className="mb-2 font-medium flex items-center gap-[3%] p-[1%] transition-colors ease-in-out duration-300 hover:bg-gray-100"
                        >
                            <input
                                id={`${index}`}
                                type="checkbox"
                                className="focus:outline-none focus:ring-0 cursor-pointer"
                                value={service}
                                onChange={inputChangeHandler}
                                checked={props?.newCaseHistory?.services?.find((item) =>
                                    item === service ? true : false
                                )}
                            />
                            <label htmlFor={`${index}`} className="cursor-pointer bg-red-50f0 h-full w-full">
                                {service}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="p-2 border border-gray-200 rounded-md mt-3">bottom text container</div>

                {/* next btn */}
                <div className="absolute bottom-1 right-1 cursor-pointer px-7 py-1 rounded-md bg-blue-700 text-white transition-colors ease-in-out duration-300 hover:bg-blue-500" onClick={()=>{
                    props?.setStepCounter(props?.stepCounter + 1);
                }}>
                    <span>next</span>
                </div>
            </div>
        </div>
    );
};

export default NewCaseServices;
