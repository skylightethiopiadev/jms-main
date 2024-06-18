import React, { useMemo, useState } from 'react'

import { useNavigate } from 'react-router-dom'

// icons
import { IoExitOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";

const LawyersDashboardCaseAppointmentNewCaseAppointmentForm = () => {

    // local data
    const legalIssues = [
        {
            title: 'Family Law',
        },
        {
            title: 'Succession',
        },
        {
            title: 'Property',
        },
        {
            title: 'Contract',
        },
        {
            title: 'Personal Injury',
        },
        {
            title: 'Corporate Law',
        },
        {
            title: 'Real-Estate',
        },
        {
            title: 'Immigration',
        },
        {
            title: 'Labour',
        },
        {
            title: 'Intellectual Property',
        },
        {
            title: 'Tax',
        },
        {
            title: 'Customs',
        },
        {
            title: 'Others',
        },
    ]

    const legalServices = [
        {
            title: 'Legal Consultation',
        },
        {
            title: 'Document Preparation',
        },
        {
            title: 'Document Review',
        },
        {
            title: 'Legal Representation',
        },
        {
            title: 'Other Services',
        },
    ]

    const caseCategories = useMemo(() => [
        {
            text: 'Family Law',
        },
        {
            text: 'Succession',
        },
        {
            text: 'Property',
        },
        {
            text: 'Contract',
        },
        {
            text: 'Personal Injury',
        },
        {
            text: 'Corporate Law',
        },
        {
            text: 'Real-Estate',
        },
        {
            text: 'Immigration',
        },
        {
            text: 'Labour',
        },
        {
            text: 'Intellectual Property',
        },
        {
            text: 'Tax',
        },
        {
            text: 'Customs',
        },
        {
            text: 'Others',
        },
    ], [])

    const [selectedCaseCategory, setSelectedCaseCategory] = useState({ on: false, text: '' })
    const [specifiedCase, setSpecifiedCase] = useState('')

    // hooks
    const navigate = useNavigate()

    // case specification handler
    const caseSpecificationHandler = () => {
        console.log(specifiedCase)
        if (specifiedCase?.trim()) {
            setSelectedCaseCategory(prev => {
                return {
                    ...prev,
                    text: specifiedCase,
                }
            })
            setSpecifiedCase('')
        }
    }


    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="px-[.75%] md:px-[1.5%] lg:px-[3%] py-1 md:py-3 border-gray-200 border rounded-md">
                <header className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-gray-700 font-bold text-lg'>New Case Appointment Form</h3>
                    </div>
                    <div>
                        <div className='text-xl cursor-pointer hover:text-blue-800' onClick={() => {
                            navigate(-1)
                        }}>
                            <IoExitOutline />
                        </div>
                    </div>
                </header>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum optio rerum id voluptates deserunt nesciunt dolore, vero eius, delectus molestiae temporibus voluptatibus eos quia soluta aperiam iste porro sequi commodi nisi.
                    </p>
                </div>
            </div>

            {/* second order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-5">
                {/* lawyer personal information part */}
                <div className='p-3 bg-gray-100'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full lg:w-[65%]'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Lawyer Personal Information</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* personal detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                                    {/* first name */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>First Name</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter first name'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* middle name */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Middle Name</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter middle name'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* last name */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Last Name</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter last name'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* gender-phone-email */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3'>
                                    {/* gender */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Gender</span>
                                            </div>

                                            <div className='flex items-center gap-3 my-1'>

                                                <div class="flex items-center">
                                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">male</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 ring-0 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">female</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* phone */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Phone No</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter phone number'
                                                    className='focus:ring-0 focus:outline-none ring-0 border-none p-[.1rem] placeholder:text-sm text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* email */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Email</span>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='border-b border-gray-300'>
                                                    <input type="text" className='w-full focus:ring-0 focus:outline-none ring-0 border-none p-[.1rem] placeholder:text-sm text-sm' placeholder='enter email address' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* hint */}
                        <div className='w-full lg:w-[35%] py-10'>
                            <div>
                                <header className='px-2 border-l-4 border-yellow-400'>
                                    <h3 className='text-[.9rem] font-medium'>How to fill this form</h3>
                                </header>
                                <div className='my-2'>
                                    <p>
                                        Just enter the required information on the provided form field.
                                    </p>
                                </div>
                                <div>
                                    <button className='px-3 py-[.15rem] rounded-sm bg-gray-500 text-white hover:bg-gray-400'>need help</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* client personal information part */}
                <div className='p-3 bg-gray-100'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full lg:w-[65%]'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Client Personal Information</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* personal detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                                    {/* first name */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>First Name</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter first name'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* middle name */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Middle Name</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter middle name'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* last name */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Last Name</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter last name'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* gender-phone-email */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3'>
                                    {/* gender */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Gender</span>
                                            </div>

                                            <div className='flex items-center gap-3 my-1'>

                                                <div class="flex items-center">
                                                    <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">male</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 ring-0 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">female</label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* phone */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Phone No</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter phone number'
                                                    className='focus:ring-0 focus:outline-none ring-0 border-none p-[.1rem] placeholder:text-sm text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* email */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Email</span>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div className='border-b border-gray-300'>
                                                    <input type="text" className='w-full focus:ring-0 focus:outline-none ring-0 border-none p-[.1rem] placeholder:text-sm text-sm' placeholder='enter email address' />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* hint */}
                        <div className='w-full lg:w-[35%] py-10'>
                            <div>
                                <header className='px-2 border-l-4 border-yellow-400'>
                                    <h3 className='text-[.9rem] font-medium'>How to fill this form</h3>
                                </header>
                                <div className='my-2'>
                                    <p>
                                        Just enter the required information on the provided form field.
                                    </p>
                                </div>
                                <div>
                                    <button className='px-3 py-[.15rem] rounded-sm bg-gray-500 text-white hover:bg-gray-400'>need help</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* case detail */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg font-medium'>Case Details</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* contact detail form */}
                            <div className='my-3'>
                                {/* case */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                                    {/* file no */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>File No</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter  case file number'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* case category */}
                                    <div>
                                        <div className='p-0.5 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Case Category</span>
                                            </div>
                                            <div className='border border-gray-300 p-0.5 rounded-sm relative'>
                                                <div className='flex items-center justify-between cursor-pointer text-[1rem]' onClick={() => {
                                                    if (selectedCaseCategory?.on) {
                                                        setSelectedCaseCategory(prev => {
                                                            return {
                                                                ...prev,
                                                                on: false,
                                                            }
                                                        })
                                                    } else {
                                                        setSelectedCaseCategory(prev => {
                                                            return {
                                                                ...prev,
                                                                on: true,
                                                            }
                                                        })
                                                    }
                                                }}>
                                                    <div>
                                                        {
                                                            selectedCaseCategory?.text
                                                                ?
                                                                <span>{selectedCaseCategory?.text === 'Others' ? '. . .' : selectedCaseCategory?.text}</span>
                                                                :
                                                                <span>select case category</span>
                                                        }
                                                    </div>
                                                    <div>
                                                        <MdKeyboardArrowDown className={`text-xl transition-transform ease-in-out duration-300 ${selectedCaseCategory?.on || selectedCaseCategory?.text === 'Others' ? '-rotate-180' : 'rotate-0'}`} />
                                                    </div>
                                                </div>

                                                {/* other case category specify */}
                                                <div className={`absolute left-0 bottom-[110%] w-full bg-white transition-transform ease-in-out duration-300 ${selectedCaseCategory?.text === 'Others' ? 'scale-100' : 'scale-0'}`}>
                                                    <div className='flex items-center gap-2 justify-between'>
                                                        <div className='flex-grow bg-white my-1 px-1 py-0.5 border border-gray-500 rounded-sm'>
                                                            <input
                                                                type="text"
                                                                value={specifiedCase}
                                                                onChange={e => setSpecifiedCase(e.target.value)}
                                                                className='p-0 focus:ring-0 border-none w-full bg-transparent'
                                                                placeholder='specify your case here' />
                                                        </div>
                                                        <div className='mx-1'>
                                                            <button className='px-1 py-0.5 rounded-sm bg-blue-500 text-white' onClick={() => {
                                                                caseSpecificationHandler()
                                                            }}>done</button>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* case categories drop down */}
                                                <div className={`absolute left-0 top-[110%] bg-white shadow-2xl w-full transition-all ease-in-out duration-300 overflow-hidden ${selectedCaseCategory?.on ? 'h-[390px]' : 'h-0'}`} id='ddd' onClick={() => {
                                                    console.log(window.getComputedStyle(document.getElementById('ddd')).height)
                                                }}>
                                                    <div>
                                                        {
                                                            caseCategories?.map((item, index) => {
                                                                return (
                                                                    <div>
                                                                        <div className='px-3 py-1 border-b border-gray-300 transition-colors ease-in-out duration-300 hover:border-gray-500 cursor-pointer' onClick={() => {
                                                                            setSelectedCaseCategory(prev => {
                                                                                return {
                                                                                    ...prev,
                                                                                    text: item?.text,
                                                                                    on: false,
                                                                                }
                                                                            })
                                                                        }}>
                                                                            <span>
                                                                                {item?.text}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* case file opening date */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Case File Opening Date</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="date"
                                                    placeholder='case file opening date'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* second portion */}
                            <header className='flex items-center py-1 justify-between mt-5'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Name And Address Of The Court Entertaining The Case</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            <div className='my-3'>
                                {/* case */}
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                                    {/* name */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Name Of The Court</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter  name of the court'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* address */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Address Of The Court</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter address of the court'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* third portion */}
                            <header className='flex items-center py-1 justify-between mt-5'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Nearest Court Proceeding Date And Time</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            <div className='my-3'>
                                {/* case */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                                    {/* date */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Date</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="date"
                                                    placeholder='enter  date'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* time */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Time</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="time"
                                                    placeholder='enter time'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Update Date */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Update Date</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="date"
                                                    placeholder='enter  update date'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Activities Under The Last Court Proceeding */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Activities Under The Last Court Proceeding</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* content */}
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, asperiores! Qui iste voluptatibus quos perspiciatis quae cum unde corrupti, ratione dolor, praesentium totam magnam.
                                </p>
                            </div>
                            {/* legal detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='p-3 border border-gray-200 bg-white'>
                                    {/* list */}
                                    <div className='border border-gray-200'>
                                        <textarea name="" id="" className='w-full h-[120px] focus:outline-none focus:ring-0 resize-none border-none' placeholder='description'></textarea>
                                    </div>
                                    {/* other */}
                                    {/* <div>other</div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* next appointment date and time */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            {/* third portion */}
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Next Court Appointment</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            <div className='my-3'>
                                {/* case */}
                                <div className='grid grid-cols-2 sm:grid-cols-2 gap-3'>
                                    {/* date */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Date</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="date"
                                                    placeholder='enter  date'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* time */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Time</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="time"
                                                    placeholder='enter time'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* reason for the appointment */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Reason For Appointment</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* content */}
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, asperiores! Qui iste voluptatibus quos perspiciatis quae cum unde corrupti, ratione dolor, praesentium totam magnam.
                                </p>
                            </div>
                            {/* legal detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='p-3 border border-gray-200 bg-white'>
                                    {/* list */}
                                    <div className='border border-gray-200'>
                                        <textarea name="" id="" className='w-full h-[120px] focus:outline-none focus:ring-0 resize-none border-none' placeholder='enter reason'></textarea>
                                    </div>
                                    {/* other */}
                                    {/* <div>other</div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Next Step For The Client */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Next Step For The Client</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* content */}
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, asperiores! Qui iste voluptatibus quos perspiciatis quae cum unde corrupti, ratione dolor, praesentium totam magnam.
                                </p>
                            </div>
                            {/* legal detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='p-3 border border-gray-200 bg-white'>
                                    {/* list */}
                                    <div className='border border-gray-200'>
                                        <textarea name="" id="" className='w-full h-[120px] focus:outline-none focus:ring-0 resize-none border-none' placeholder='enter next step for the client'></textarea>
                                    </div>
                                    {/* other */}
                                    {/* <div>other</div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Comments Or Questions From The Client */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Comments Or Questions From The Client</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* content */}
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, asperiores! Qui iste voluptatibus quos perspiciatis quae cum unde corrupti, ratione dolor, praesentium totam magnam.
                                </p>
                            </div>
                            {/* legal detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='p-3 border border-gray-200 bg-white'>
                                    {/* list */}
                                    <div className='border border-gray-200'>
                                        <textarea name="" id="" className='w-full h-[120px] focus:outline-none focus:ring-0 resize-none border-none' placeholder='comments or questions from the client'></textarea>
                                    </div>
                                    {/* other */}
                                    {/* <div>other</div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* submit or cancel btn information part */}
                <div className='p-3 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        <div className='flex items-center gap-3'>
                            <button className='px-7 py-1 rounded-sm text-white bg-blue-700 transition-colors ease-in-out duration-200 hover:bg-blue-600'>Submit</button>
                            <button className='px-7 py-1 rounded-sm text-white bg-gray-700 transition-colors ease-in-out duration-200 hover:bg-gray-600'>Cancel</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LawyersDashboardCaseAppointmentNewCaseAppointmentForm
