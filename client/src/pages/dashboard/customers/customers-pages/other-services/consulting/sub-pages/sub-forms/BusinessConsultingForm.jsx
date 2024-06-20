import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

// icons
import { RiPictureInPictureExitLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";

import { FaFile } from "react-icons/fa";


const BusinessConsultingForm = () => {

    
    const [orgName, setOrgName] = useState({
        orgNames: [
            {
                text: 'Partnership',
            },
            {
                text: 'Plc',
            },
            {
                text: 'Omplc',
            },
            {
                text: 'Sc',
            },
            {
                text: 'Other',
            },
        ],
        isOn: false,
        isSelected: '',
    })

    const [businessStatus, setBusinessStatus] = useState({
        status: [
            {
                text: 'Currently Active',
            },
            {
                text: 'Suspended',
            },
            {
                text: 'Other',
            },
        ],
        isOn: false,
        isSelected: ''
    })

    const [legalExperts,setLegalExperts] = useState({
        experts: [
            {
                text: 'Contract',
            },
            {
                text: 'Marriage',
            },
            {
                text: 'Divorce',
            },
            {
                text: 'Child Custody',
            },
            {
                text: 'Adoption',
            },
            {
                text: 'Succession',
            },
            {
                text: 'Property',
            },
            {
                text: 'Company Formation',
            },
            {
                text: 'Merger',
            },
            {
                text: 'Division',
            },
            {
                text: 'Acquisition',
            },
            {
                text: 'Bankruptcy',
            },
            {
                text: 'Employment',
            },
            {
                text: 'Real-Estate',
            },
            {
                text: 'Land',
            },
            {
                text: 'Tax',
            },
            {
                text: 'Customs',
            },
            {
                text: 'Immigration',
            },
            {
                text: 'Extra Contractual Responsibility',
            },
            {
                text: 'Data Protection And Privacy',
            },
            {
                text: 'Other',
            },
        ],
        isOn: false,
        isSelected: '',
    })
    

    // hooks
    const navigate = useNavigate()


    


    return (
        <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md  bg-white my-7">
            {/* header */}
            <header className="flex items-center justify-between mb-3 border-b border-gray-100">
                {/* left */}
                <div>
                    <h3 className="font-bold text-lg">Consultancy For Business</h3>
                </div>
                {/* right */}
                <div>
                    <button className='text-xl text-gray-400 hover:text-gray-700' onClick={() => {
                        navigate(-1)
                    }}>
                        <RiPictureInPictureExitLine />
                    </button>
                </div>
            </header>

            {/* form */}
            <div>
                {/* organizational information */}
                <div>

                    {/* org name */}
                    <div className='grid grid-cols-3 gap-3 mt-2'>
                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Business Organization Name</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm relative'>
                                <div className='flex items-center justify-between w-full cursor-pointer' onClick={() => {
                                    setOrgName(prev => {
                                        return {
                                            ...prev,
                                            isOn: !prev.isOn,
                                        }
                                    })
                                }}>
                                    <div className='flex-grow'>
                                        {
                                            orgName?.isSelected
                                                ?
                                                <span>{orgName?.isSelected}</span>
                                                :
                                                <span>select here</span>
                                        }
                                    </div>
                                    <div>
                                        <MdKeyboardArrowDown className={`text-xl text-gray-500 transition-transform ease-in-out duration-300 ${orgName?.isOn ? '-rotate-180' : 'rotate-0'}`} />
                                    </div>
                                </div>
                                {/* pop up list */}
                                <div className={`absolute left-0 w-full  top-[105%] transition-all ease-in-out duration-300 ${orgName?.isOn ? 'h-[300px]' : 'h-0 overflow-hidden'}`}>
                                    <div className='bg-white shadow-xl'>
                                        {
                                            orgName?.orgNames.map((item, index) => {
                                                return (
                                                    <div className='px-3 py-1 border-b border-gray-200 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-blue-100' onClick={() => {
                                                        setOrgName(prev => {
                                                            return {
                                                                ...prev,
                                                                isSelected: item?.text,
                                                                isOn: false,
                                                            }
                                                        })
                                                    }}>
                                                        <span>{item?.text}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Registration Detail</h3>
                    {/* registration detail */}
                    <div className='grid grid-cols-3 gap-3 mt-2'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Place Of Registration</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='place of registration' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Business License Number</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='business license number' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Field Of Business</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='field of business' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Tin Number</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='tin number' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Office</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='office' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Status Of The Business</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm relative'>
                                <div className='flex items-center justify-between w-full cursor-pointer' onClick={() => {
                                    setBusinessStatus(prev => {
                                        return {
                                            ...prev,
                                            isOn: !prev.isOn,
                                        }
                                    })
                                }}>
                                    <div className='flex-grow'>
                                        {
                                            businessStatus?.isSelected
                                                ?
                                                <span>{businessStatus?.isSelected}</span>
                                                :
                                                <span>select here</span>
                                        }
                                    </div>
                                    <div>
                                        <MdKeyboardArrowDown className={`text-xl text-gray-500 transition-transform ease-in-out duration-300 ${businessStatus?.isOn ? '-rotate-180' : 'rotate-0'}`} />
                                    </div>
                                </div>
                                {/* pop up list */}
                                <div className={`absolute left-0 w-full  top-[105%] transition-all ease-in-out duration-300 ${businessStatus?.isOn ? 'h-[300px]' : 'h-0 overflow-hidden'}`}>
                                    <div className='bg-white shadow-xl'>
                                        {
                                            businessStatus?.status.map((item, index) => {
                                                return (
                                                    <div className='px-3 py-1 border-b border-gray-200 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-blue-100' onClick={() => {
                                                        setBusinessStatus(prev => {
                                                            return {
                                                                ...prev,
                                                                isSelected: item?.text,
                                                                isOn: false,
                                                            }
                                                        })
                                                    }}>
                                                        <span>{item?.text}</span>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Name Of General Manager</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='name of general manager' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Incorporation Date</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="date"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='incorporation date' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Other Information</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='other information' />
                            </div>
                        </div>

                    </div>

                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Number Of Employees</h3>
                    {/* Number Of Employees */}
                    <div className='grid grid-cols-2 gap-3 mt-2'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Managerial Employees</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="number"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='managerial employees' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Ordinary Employees</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="number"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='ordinary employees' />
                            </div>
                        </div>

                    </div>

                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Contact Information</h3>
                    {/* contact information */}
                    <div className='grid grid-cols-3 gap-3 mt-2'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Phone Number</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='phone number' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Email</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='email' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Postal Code</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="number"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='postal code' />
                            </div>
                        </div>

                    </div>


                    {/* preferred communication method */}
                    <div className='grid grid-cols-1 gap-3 mt-5'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Preferred Communication Method</h3>
                            </div>
                            <div className='flex items-center p-1  bg-white rounded-sm gap-3'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-phone" name="communication_method" value="Married" />
                                <label for="communication-phone">phone</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-email" name="communication_method" value="Separated" />
                                <label for="communication-email" >email</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-text" name="communication_method" value="Divorced" />
                                <label for="communication-text" >text</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-other" name="communication_method" value="Divorced" />
                                <label for="communication-other" >other</label>

                            </div>
                        </div>

                    </div>

                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Business Organization’s Representative Information</h3>
                    {/* business organization’s representative information */}
                    <div className='grid grid-cols-3 gap-3 mt-2'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>First Name</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='first name' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Middle Name</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='middle name' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Family Name</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='family name' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Position</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='position' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Contact Number</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='contact number' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Email Address</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='email address' />
                            </div>
                        </div>

                    </div>


                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Power Of Attorney Or Position Letter</h3>
                    {/* Power Of Attorney Or Position Letter */}
                    <div className='grid grid-cols-1 gap-3 mt-2'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero quis natus autem.
                        </p>
                        <div>

                            <div className='flex items-center gap-1'>
                                <input type="file" hidden id='file-up' />
                                <label htmlFor="file-up" className='cursor-pointer'>
                                    <div className='flex items-center gap-1 w-max px-3 py-1 rounded-sm bg-yellow-500 text-white'>
                                        <div>
                                            <FaFile className="" />
                                        </div>
                                        <div>
                                            <span>upload file</span>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>

                    </div>


                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Specific Legal Expertise Sought</h3>
                    {/* Specific Legal Expertise Sought  */}
                    <div className='flex gap-x-5 gap-y-2 flex-wrap my-3'>

                        {
                            legalExperts?.experts.map((item,index)=>{
                                return (
                                    <div className='flex items-center gap-2 bg-white py-1 px-3 border border-gray-200 rounded-sm shadow-sm hover:shadow-md'>
                                        <input className='focus:outline-none focus:ring-0 outline-none ring-0 cursor-pointer' type="checkbox" id={`${item?.text}-${index}`} />
                                        <label className='cursor-pointer' htmlFor={`${item?.text}-${index}`}>{item?.text}</label>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Potential Date And Time Of Consultancy</h3>
                    {/* Potential Date And Time Of Consultancy */}
                    <div className='grid grid-cols-2 gap-3 mt-2'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Date</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="date"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='date' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Time</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="time"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='time' />
                            </div>
                        </div>

                    </div>


                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Preferred Consultancy Method</h3>
                    {/* Preferred Consultancy Method */}
                    <div className='grid grid-cols-1 gap-3 mt-2'>

                        <div>
                            <div className='flex items-center p-1  bg-white rounded-sm gap-2'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="consultancy-method-in-person" name="consultancy-method" value="In Person" />
                                <label for="consultancy-method-in-person">In Person</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="consultancy-method-virtual" name="consultancy-method" value="Virtual" />
                                <label for="consultancy-method-virtual" >Virtual</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="consultancy-method-both" name="consultancy-method" value="Both" />
                                <label for="consultancy-method-both" >Both</label>

                            </div>
                        </div>

                    </div>

                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Desired Outcome From The Consultancy </h3>
                    {/* Desired Outcome From The Consultancy  */}
                    <div className='my-3'>

                        <div className='border border-gray-400 rounded-sm'>
                            <textarea placeholder='type the desired outcome from the consultancy ' className='w-full border-none focus:outline-none focus:ring-0 resize-none h-[120px]' name="" id=""></textarea>
                        </div>

                    </div>

                    {/* submit or cancel buttons */}
                    <div className='my-5 flex items-center gap-5'>
                        <button className='px-5 py-1 rounded-sm bg-blue-500 text-white transition-colors ease-in-out duration-300 hover:bg-blue-600'>submit</button>
                        <button className='px-5 py-1 rounded-sm bg-gray-600 text-white transition-colors ease-in-out duration-300 hover:bg-gray-800'>cancel</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BusinessConsultingForm
