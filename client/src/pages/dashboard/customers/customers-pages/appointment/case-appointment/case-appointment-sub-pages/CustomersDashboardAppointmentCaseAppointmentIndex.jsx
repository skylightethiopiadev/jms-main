import React from 'react'

import { NavLink } from 'react-router-dom'

// icons
import { LiaUserClockSolid } from "react-icons/lia";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { VscLayersActive } from "react-icons/vsc";
import { VscNewFolder } from "react-icons/vsc";
import { PiPhoneCallFill } from "react-icons/pi";
import { RiMessage2Fill } from "react-icons/ri";
import { MdPersonAddAlt1 } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { FaLink } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiRollingSuitcase } from "react-icons/ci";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { BsSuitcase2 } from "react-icons/bs";
import { LuBarChart2 } from "react-icons/lu";


const CustomersDashboardAppointmentCaseAppointmentIndex = () => {

    return (
        <div className='overflow-x-hidden flex-grow pr-1 relative'>

            {/* first order container */}
            <div className="px-[.75%] md:px-[1.5%] lg:px-[3%] py-1 md:py-3 border-gray-200 bg-gray-100 border rounded-md">
                <header className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-gray-700 font-bold text-lg'>Case Appointments</h3>
                    </div>
                    <div>
                        <NavLink >
                            {/* stuff here */}
                        </NavLink>
                    </div>
                </header>
                <div className='my-1'>
                    <p>
                        Welcome to your personalized appointment dashboard. Here, you can manage and view all your scheduled appointments conveniently.
                    </p>
                </div>
            </div>

            {/* second order container */}
            <div className='mt-5 px-[.75%] md:px-[1.5%] lg:px-[3%] py-1 md:py-3  bg-gray-100 h-max'>
                {/* container */}
                <div className='flex gap-8'>
                    {/* left */}
                    <div className='w-[75%]'>
                        {/* first container */}
                        <div className=''>
                            {/* header */}
                            <header className='flex items-center justify-between'>
                                {/* left */}
                                <div>
                                    <h3 className='font-semibold text-gray-700'>Coming Case Appointments</h3>
                                </div>
                                {/* right */}
                                <div>
                                    <div>
                                        <button className='text-xs text-blue-400 hover:text-blue-700'>See all (7)</button>
                                    </div>
                                </div>
                            </header>
                            {/* content */}
                            <div>
                                {
                                    [...Array(3)].map((item, index) => {
                                        return (
                                            <div className='bg-white border border-gray-200 rounded-sm p-3 my-3'>
                                                {/* content */}
                                                <div className='flex items-center justify-between gap-5'>
                                                    {/* left */}
                                                    <div>
                                                        <div className='w-[42px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-lg'>
                                                            <img className='h-full w-full object-center object-cover' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    {/* right */}
                                                    <div className='flex-grow'>
                                                        <div className='flex items-center justify-between'>
                                                            {/* left */}
                                                            <div>
                                                                <div className='mb-[-5px] flex items-center gap-1 font-semibold text-gray-700'>
                                                                    <span>Haddis</span>
                                                                    <span>Fanta</span>
                                                                </div>
                                                                <div className='mt-[-5px] text-xs text-gray-700'>
                                                                    <span>Senior Office Manager</span>
                                                                </div>
                                                            </div>
                                                            {/* right */}
                                                            <div className='self-start flex items-center justify-end gap-2'>
                                                                <div>
                                                                    <div className='w-[20px] aspect-square rounded-full bg-green-400 overflow-hidden flex items-center justify-center text-white cursor-pointer transition-colors ease-in-out duration-300 hover:bg-green-500'>
                                                                        <RiMessage2Fill />
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <div className='w-[20px] aspect-square rounded-full bg-green-400 overflow-hidden flex items-center justify-center text-white cursor-pointer transition-colors ease-in-out duration-300 hover:bg-green-500'>
                                                                        <PiPhoneCallFill />
                                                                    </div>
                                                                </div>

                                                                <div>
                                                                    <div className='px-1 py-0.5 rounded-sm border flex items-center gap-1 border-gray-200 cursor-pointer'>
                                                                        <span className='text-xs'>CONNECT</span>
                                                                        <MdPersonAddAlt1 className='text-blue-600' />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className='px-1 py-0.5 rounded-sm border flex items-center gap-1 border-gray-200 cursor-pointer'>
                                                                        <MdOutlineMoreHoriz className='text-blue-600' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-2 my-1'>
                                                            <div>
                                                                <div className='flex items-center gap-1 px-1 py-0.5 rounded-sm bg-blue-500 text-white'>
                                                                    <FaLink className='text-xs' />
                                                                    <div className='text-xs'>
                                                                        <span>add text here</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className='flex items-center gap-1 px-1 py-0.5 rounded-sm bg-blue-500 text-white'>
                                                                    <FaLink className='text-xs' />
                                                                    <div className='text-xs'>
                                                                        <span>add text here again</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center gap-3 mt-3'>
                                                            <div>
                                                                <div className='flex items-center gap-1'>
                                                                    <CiCalendarDate className='text-blue-600 text-lg' />
                                                                    <span className='text-xs text-gray-600'>Jan 23, 2024</span>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className='flex items-center gap-1'>
                                                                    <CiClock2 className='text-blue-600 text-lg' />
                                                                    <span className='text-xs text-gray-600'>10:45-11:15 pm </span> <span className='text-xs text-gray-600 font-semibold'>local</span>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className='flex items-center gap-1'>
                                                                    <CiRollingSuitcase className='text-blue-600 text-lg' />
                                                                    <span className='text-xs text-gray-600'>corporate</span>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <div className='flex items-center gap-1'>
                                                                    <IoFileTrayFullOutline className='text-blue-500' />
                                                                    <span className='text-xs text-gray-600'>FLRN1102259</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    {/* right - side nav  */}
                    <div className='w-[25%]'>
                        <div>
                            {/* first order container */}
                            <div>
                                {/* header */}
                                <header className='flex items-center justify-between'>
                                    {/* left */}
                                    <div>
                                        <h3 className='font-semibold text-gray-700'>My Agents</h3>
                                    </div>
                                    {/* right */}
                                    <div>
                                        <div className='flex items-center justify-end gap-1 text-xl'>
                                            <button className='text-gray-500 transition-colors ease-in-out duration-300 hover:text-black'>
                                                <MdChevronLeft />
                                            </button>
                                            <button className='text-gray-500 transition-colors ease-in-out duration-300 hover:text-black'>
                                                <MdKeyboardArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                </header>
                                {/* slider */}
                                <div>
                                    {/* first card */}
                                    <div className='bg-white shadow-sm border border-gray-200 rounded-sm mt-1 p-1 flex items-center justify-between'>
                                        {/* left */}
                                        <div className='flex items-center gap-1'>
                                            {/* image */}
                                            <div>
                                                <div className='w-[32px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-xl'>
                                                    <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg" alt="" />
                                                </div>
                                            </div>
                                            {/* name */}
                                            <div>
                                                <div className='flex items-center gap-1 font-medium text-gray-700 mb-[-3px]'>
                                                    <span>Meseret</span>
                                                    <span>Seeyoum</span>
                                                </div>
                                                <div className='mt-[-3px] text-xs'>
                                                    <span>07/10/1016</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div className='flex items-center'>
                                            <button className='text-blue-400 text-xl hover:text-blue-700'>
                                                <RiMessage2Line />
                                            </button>
                                        </div>
                                    </div>

                                    {/* second card */}
                                    <div className='bg-white shadow-sm border border-gray-200 rounded-sm mt-2 p-1 flex items-center justify-between'>
                                        {/* left */}
                                        <div className='flex items-center gap-1'>
                                            {/* image */}
                                            <div>
                                                <div className='w-[32px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-xl'>
                                                    <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                                </div>
                                            </div>
                                            {/* name */}
                                            <div>
                                                <div className='flex items-center gap-1 font-medium text-gray-700 mb-[-3px]'>
                                                    <span>Abebe</span>
                                                    <span>Tafere</span>
                                                </div>
                                                <div className='mt-[-3px] text-xs font-semibold'>
                                                    <span>21/11/2016</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div className='flex items-center'>
                                            <button className='text-blue-400 text-xl hover:text-blue-700'>
                                                <RiMessage2Line />
                                            </button>
                                        </div>
                                    </div>

                                    {/* third card */}
                                    <div className='bg-white shadow-sm border border-gray-200 rounded-sm mt-1 p-1 flex items-center justify-between'>
                                        {/* left */}
                                        <div className='flex items-center gap-1'>
                                            {/* image */}
                                            <div>
                                                <div className='w-[32px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-xl'>
                                                    <img className='w-full h-full object-center object-cover' src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?cs=srgb&dl=pexels-pixabay-247322.jpg&fm=jpg" alt="" />
                                                </div>
                                            </div>
                                            {/* name */}
                                            <div>
                                                <div className='flex items-center gap-1 font-medium text-gray-700 mb-[-3px]'>
                                                    <span>Kalkidan</span>
                                                    <span>Teshome</span>
                                                </div>
                                                <div className='mt-[-3px] text-xs'>
                                                    <span>17/03/2016</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div className='flex items-center'>
                                            <button className='text-blue-400 text-xl hover:text-blue-700'>
                                                <RiMessage2Line />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* quick links order container */}
                            <div className='mt-7'>
                                {/* header */}
                                <header className='flex items-center justify-between'>
                                    {/* left */}
                                    <div>
                                        <h3 className='font-semibold text-gray-700'>Quick Links</h3>
                                    </div>
                                    {/* right */}
                                    <div>
                                        <div className='flex items-center justify-end gap-1 text-xl'>
                                            {/* some content here */}
                                        </div>
                                    </div>
                                </header>
                                {/* links */}
                                <div>
                                    {/* first card */}
                                    <div className='bg-white shadow-lg border border-gray-50 rounded-sm mt-1 p-1 '>

                                        {/* first link */}
                                        <div className='w-full'>
                                            <NavLink to={'/dashboard/lawyers/appointment/case-appointment'}>
                                                <div className='flex items-center p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                                    <div className='flex items-center text-xl'>
                                                        <VscLayersActive className='text-blue-700' />
                                                    </div>
                                                    <div>
                                                        <span>Case Appointment</span>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>

                                        {/* second link */}
                                        <div className='w-full my-1'>
                                            <NavLink to={'/dashboard/lawyers/appointment/case-appointment/new-case-appointment'}>
                                                <div className='flex items-center p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                                    <div className='flex items-center text-xl'>
                                                        <VscNewFolder className='text-blue-700' />
                                                    </div>
                                                    <div>
                                                        <span>New Case Appointment</span>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>

                                        {/* third link */}
                                        <div className='w-full'>
                                            <NavLink to={'/dashboard/lawyers/appointment/office-appointment'}>
                                                <div className='flex items-center p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                                    <div className='flex items-center text-xl'>
                                                        <MdOutlineSupervisorAccount className='text-[1.15rem] text-blue-700' />
                                                    </div>
                                                    <div>
                                                        <span>Office Appointment</span>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <footer className='my-3'>
                    {/* second order container */}
                    <div className='mt-3'>
                        <header className='flex items-center justify-between my-2'>
                            {/* left */}
                            <div>
                                <h3 className='text-gray-700 font-semibold'>Recent Claims</h3>
                            </div>
                            {/* right */}
                            <div>
                                <button className='text-xs text-blue-400 transition-colors ease-in-out duration-300 hover:text-blue-700'>
                                    See all (5)
                                </button>
                            </div>
                        </header>
                        {/* cards container */}
                        <div>
                            <div className='flex items-center justify-between my-2 p-1 bg-white border border-gray-300 rounded-sm shadow-md'>
                                {/* left */}
                                <div>
                                    <h3 className='my-1 font-black text-[.75rem]'>MAKUTA LAW FIRM</h3>
                                </div>
                                <div className='flex items-center justify-end gap-3'>
                                    <div>
                                        <div className='flex items-center gap-1 text-gray-500'>
                                            <div>
                                                <BsSuitcase2 />
                                            </div>
                                            <div>
                                                <span>RV18000100</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className='flex items-center gap-1 text-gray-500'>
                                            <div>
                                                <LuBarChart2 />
                                            </div>
                                            <div>
                                                <span>RV18000100</span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='flex items-center text-xs font-bold text-gray-400'>
                                        <span>
                                            Jan 27,  2024
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* third order container */}
                    <div className='mt-10 mb-3'>
                        <div>
                            <h3 className='text-gray-700 text-xs'>
                                <span>Designed & Developed By </span>
                                <span className='font-black text-gray-700'>Skylight Technology</span>
                            </h3>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default CustomersDashboardAppointmentCaseAppointmentIndex
