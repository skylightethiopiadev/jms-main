import React from 'react'

import { useNavigate } from 'react-router-dom'

// icons
import { IoExitOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const LawyersDashboardOfficeAppointmentNewAppointmentForm = () => {

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

    // hooks
    const navigate = useNavigate()


    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="px-[.75%] md:px-[1.5%] lg:px-[3%] py-1 md:py-3 border-gray-200 border rounded-md">
                <header className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-gray-700 font-bold text-lg'>New Office Appointment Form</h3>
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
                        To arrange a consultation with our law firm, kindly complete the form below with your personal information. Providing accurate and comprehensive responses will allow us to prepare for our meeting thoroughly and address your legal requirements effectively. Should you need to cancel or reschedule, please promptly notify us using the provided cancellation form. We appreciate your choice in selecting our services.
                    </p>
                </div>
            </div>

            {/* second order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-5">
                {/* personal information part */}
                <div className='p-3 bg-gray-100'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full lg:w-[65%]'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Personal Information</h3>
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
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
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
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
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
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* gender-birth-date-nationality */}
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
                                    {/* date of birth */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Date of Birth</span>
                                            </div>
                                            <div>
                                                <input
                                                    type="date"
                                                    className='focus:ring-0 focus:outline-none ring-0 border-none p-[.1rem] placeholder:text-sm text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* nationality */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Nationality</span>
                                            </div>
                                            <div className='flex gap-1'>
                                                <div>
                                                    <input type="text" className='w-full p-0' />
                                                </div>
                                                <div>
                                                    <div className='flex items-center justify-center cursor-pointer text-xl'>
                                                        <IoMdArrowDropdown />
                                                    </div>
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

                {/* address and contact information part */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Contact Information</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* contact detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                                    {/* phone */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Phone Number</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter  phone number'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* email */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Email Address</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter email address'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* postal code */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Postal Code</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="number"
                                                    placeholder='enter postal code'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* country */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Country</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter country'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* region */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Region</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter region'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* city */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>City</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter city'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* sub-city */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Sub-City</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter sub-city'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* woreda */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Woreda</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='enter woreda'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* preferable information part */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Preferal Information</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* contact detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                                    {/* Preferred Method Of Communication */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Preferred Method Of Communication</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='select '
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm w-full'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* {Preferred Appointment Date} */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Preferred Appointment Date</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
                                                    placeholder='select'
                                                    className='focus:outline-none focus:ring-0 border-none outline-none p-0 bg-transparent placeholder:text-sm'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* time */}
                                    <div>
                                        <div className='p-1 bg-white rounded-sm border border-gray-200'>
                                            <div className='font-semibold'>
                                                <span>Preferred Appointment Time</span>
                                            </div>
                                            <div className='border-b border-gray-300'>
                                                <input
                                                    type="text"
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

                {/* legal issue information part */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Legal Issue For The Appointment</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* content */}
                            <div>
                                <p>
                                    Our law firm offers a comprehensive range of legal services to cater to your needs. Please peruse the list provided and select the service(s) that best align with the legal assistance you require. You are welcome to select multiple services if they apply to your situation.
                                </p>
                            </div>
                            {/* legal detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='p-3 border border-gray-200 bg-white'>
                                    {/* list */}
                                    <div>
                                        <div className='flex gap-5 flex-wrap'>
                                            {
                                                legalIssues.map((item, index) => {
                                                    return (
                                                        <div key={index} className='flex items-center gap-1'>
                                                            <input type="checkbox" id={`legal-issue-${index}`} className='focus:outline-none focus:ring-0 outline-none ring-0' />
                                                            <label htmlFor={`legal-issue-${index}`} className='cursor-pointer'>{item?.title}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* other */}
                                    {/* <div>other</div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* legal services information part */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Types Of Legal Services Required</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* content */}
                            <div>
                                <p>
                                    Please indicate the type(s) of legal issues you require assistance with by selecting from the following options. Feel free to choose more than one option. Your choices will help us offer the most pertinent and thorough legal support tailored to your needs.
                                </p>
                            </div>
                            {/* legal detail form */}
                            <div className='my-3'>
                                {/* name */}
                                <div className='p-3 border border-gray-200 bg-white'>
                                    {/* list */}
                                    <div>
                                        <div className='flex gap-5 flex-wrap'>
                                            {
                                                legalServices.map((item, index) => {
                                                    return (
                                                        <div key={index} className='flex items-center gap-1'>
                                                            <input type="checkbox" id={`legal-service-${index}`} className='focus:outline-none focus:ring-0 outline-none ring-0' />
                                                            <label htmlFor={`legal-service-${index}`} className='cursor-pointer'>{item?.title}</label>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    {/* other */}
                                    {/* <div>other</div> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* legal issue description information part */}
                <div className='p-3 bg-gray-100 mt-5'>
                    <div className='flex flex-col lg:flex-row lg:gap-5'>
                        {/* form */}
                        <div className='w-full'>
                            <header className='flex items-center py-1 justify-between'>
                                <div>
                                    <h3 className='w-max border-b border-gray-300 text-lg'>Briefly Describe Your Legal Issue</h3>
                                </div>
                                <div>
                                    {/* right content */}
                                </div>
                            </header>
                            {/* content */}
                            <div>
                                <p>
                                    In the space provided, please provide a concise yet detailed description of your legal issue. Include key facts and any relevant information that will help us understand your situation better. This will enable us to offer you the most accurate and effective legal advice.
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

export default LawyersDashboardOfficeAppointmentNewAppointmentForm
