import React, { useState } from 'react';
// text editor components
import Editor from '../../../../../../../components/text-editor/Editor'

// icons
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";

const NewCaseServices = props => {

    // states
    const [description, setDescription] = useState('')
    const [fileSet, setFileSet] = useState({
        fileList: [],
    }, [])

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

    // attach file selector
    const attachFileSelectorHandler = e => {
        setFileSet(prev => {
            return {
                ...prev,
                fileList: [...prev.fileList, e.target.files[0]]
            }
        })
    }

    // remove selected file
    const removeSelectedFile = index => {
        setFileSet(prev => {
            let filteredFile = prev?.fileList.filter((file, i) => i !== index)
            return {
                ...prev,
                fileList: filteredFile,
            }
        })
    }


    // textIn Handler
    const textInHandler = () => {

        props?.setNewCaseHistory((prev) => {
            return {
                ...prev,
                textIn: description,
            };
        });
    }

    // attach file to the case
    const attachFilesToNewCaseHistory = () => {
        props?.setNewCaseHistory((prev) => {
            return {
                ...prev,
                fileIn: fileSet?.fileList,
            };
        });
    }


    return (
        <div className="overflow-y-auto h-[66vh] p-2 pb-12 flex flex-col gap-y-3">
            <header>
                <h4 className="header-level-4">Related Services</h4>
                <div>
                    <p>
                        Explore our lists of legal services, each meticulously aligned with your chosen case category. Whether it’s Civil, Criminal, or corporate law, our offerings are comprehensive and designed to meet your specific legal requirements. Delve into the selection to find expert assistance that resonates with your case’s needs. Feel free to select more than one choice.
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
                    <div>
                        {
                            fileSet?.fileList.map((item, index) => {
                                return (
                                    <div key={index} className=' flex items-center justify-between px-3 py-1 border border-gray-300 rounded-sm mb-3'>
                                        {/* left */}
                                        <div className='flex items-center gap-3'>
                                            {/* left */}
                                            <div>
                                                <div className='w-[32px] aspect-square rounded-md overflow-hidden flex items-center justify-center border border-yellow-500 text-xl text-yellow-500'>
                                                    <CiFolderOn />
                                                </div>
                                            </div>
                                            {/* right */}
                                            <div>
                                                {/* file name */}
                                                <div className='font-medium'>
                                                    <span>{item?.name}</span>
                                                </div>
                                                {/* file size */}
                                                <div className='text-xs text-gray-600'>
                                                    <span>{item?.size / 1000}kb</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div>
                                            <div className='w-[20px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer' onClick={() => {
                                                removeSelectedFile(index)
                                            }}>
                                                <IoMdClose />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {
                            fileSet?.fileList.length <= 3
                                ?
                                <div>
                                    <input type="file" id='attach-file-selector' hidden onChange={attachFileSelectorHandler} />
                                    <div className='my-3'>
                                        <label htmlFor="attach-file-selector" className='cursor-pointer w-max'>
                                            <div className='w-[32px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-yellow-400 hover:bg-yellow-500' >
                                                <GoPlus className='text-xl' />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                :
                                <></>
                        }
                    </div>
                </div>

                {/* next btn */}
                <div className="absolute bottom-5 right-1 cursor-pointer px-7 py-1 rounded-md bg-blue-700 text-white transition-colors ease-in-out duration-300 hover:bg-blue-500" onClick={() => {
                    textInHandler()
                    attachFilesToNewCaseHistory()
                    props?.setStepCounter(props?.stepCounter + 1);
                }}>
                    <span>next</span>
                </div>
            </div>
        </div>
    );
};

export default NewCaseServices;
