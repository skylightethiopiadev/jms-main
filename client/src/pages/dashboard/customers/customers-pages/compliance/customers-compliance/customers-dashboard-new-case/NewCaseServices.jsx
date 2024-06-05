import React, { useState } from 'react';
// text editor components
import Editor from '../../../../../../../components/text-editor/Editor'

// icons
import { AiOutlineFileAdd } from "react-icons/ai";

const NewCaseServices = props => {

    // states
    const [description, setDescription] = useState('')

    // services
    let newCaseServices = props?.newCaseHistory?.
        subCaseCategory?.subSubCaseCategory?.subSubType?.services || props?.newCaseHistory?.subCaseCategory?.
            subType?.services || []

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
        <div className="overflow-y-auto h-[66vh] p-2 pb-12 flex flex-col gap-y-3">
            <header>
                <h4 className="header-level-4">Related Services</h4>
                <div>
                    <p>
                        Please specify the legal service related to <span className="font-bold">{props?.newCaseHistory?.
                            subCaseCategory?.subType?.caseName}</span> that you require, so we can provide tailored assistance
                    </p>
                </div>
            </header>
            <div className="flex-grow border border-gray-200 rounded-md p-2 bg-white relative pb-10">
                <div className="border border-gray-200 p-3 rounded-md flex gap-x-2 flex-wrap">
                    {newCaseServices?.map((service, index) => (
                        <div
                            key={index}
                            className="mb-2 font-medium flex gap-[3%] p-[1%] transition-colors ease-in-out duration-300 hover:bg-gray-100 whitespace-nowrap px-1 w-max"
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
                            <label htmlFor={`${index}`} className="cursor-pointer bg-red-50f0 h-full w-full capitalize">
                                {service}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="p-2 border border-gray-200 rounded-md mt-3">
                    <Editor
                        description={description}
                        setDescription={setDescription}
                        theme="snow"
                    />
                </div>

                <div className="p-2 border border-gray-200 rounded-md mt-3 mb-10">
                    <div>
                        <h3 className='my-1 font-semibold'>Attach Your Files Here</h3>
                    </div>
                    <div className='flex items-center gap-10 flex-wrap'>
                        {/* file one */}
                        {
                            [...Array(4)].map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div>
                                            <input type="file" hidden id='attach-file-one' />
                                            <label htmlFor="attach-file-one" className='cursor-pointer'>
                                                <div className='w-[38px] border border-gray-400 rounded-md flex items-center justify-center aspect-square text-gray-400 text-3xl bg-gray-100'>
                                                    <AiOutlineFileAdd />
                                                </div>
                                            </label>
                                        </div>
                                        <div className='text-xs text-gray-700'>
                                            <span>browse file</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                {/* next btn */}
                <div className="absolute bottom-5 right-1 cursor-pointer px-7 py-1 rounded-md bg-blue-700 text-white transition-colors ease-in-out duration-300 hover:bg-blue-500" onClick={() => {
                    props?.setStepCounter(props?.stepCounter + 1);
                }}>
                    <span>next</span>
                </div>
            </div>
        </div>
    );
};

export default NewCaseServices;
