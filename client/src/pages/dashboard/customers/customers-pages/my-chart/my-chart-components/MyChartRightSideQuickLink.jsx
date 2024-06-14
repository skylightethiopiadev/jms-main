import React from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineLockClosed } from "react-icons/hi";
import { VscLayersActive } from "react-icons/vsc";
import { TbHelp } from "react-icons/tb";

const MyChartRightSideQuickLink = () => {
    return (
        <div className='flex-grow'>
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
                                <NavLink to={'/dashboard/customers/my-chart/case-team'}>
                                    <div className='flex items-center p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                        <div className='flex items-center text-xl'>
                                            <MdOutlineSupervisorAccount className='text-blue-700'/>
                                        </div>
                                        <div>
                                            <span>Case Teams</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                            {/* second link */}
                            <div className='w-full my-1'>
                                <NavLink to={'/dashboard/customers/my-chart/active-case'}>
                                    <div className='flex items-center p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                        <div className='flex items-center text-xl'>
                                            <VscLayersActive className='text-blue-700'/>
                                        </div>
                                        <div>
                                            <span>Active Cases</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                            {/* third link */}
                            <div className='w-full'>
                                <NavLink to={'/dashboard/customers/my-chart/closed-case'}>
                                    <div className='flex items-center p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                        <div className='flex items-center text-xl'>
                                            <HiOutlineLockClosed className='text-[1.15rem] text-blue-700'/>
                                        </div>
                                        <div>
                                            <span>Closed Cases</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>

                {/* common questions order container */}
                <div className='mt-7'>
                    {/* header */}
                    <header className='flex items-center justify-between'>
                        {/* left */}
                        <div>
                            <h3 className='font-semibold text-gray-700'>Common Questions</h3>
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
                                <NavLink>
                                    <div className='flex p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                        <div className='flex text-xl'>
                                            <TbHelp className='text-blue-400 mt-1' />
                                        </div>
                                        <div>
                                            <span>
                                                What is "Ethiopia the land of wisdom" mean ?
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                            {/* second link */}
                            <div className='w-full'>
                                <NavLink>
                                    <div className='flex p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                        <div className='flex text-xl'>
                                            <TbHelp className='text-blue-400 mt-1' />
                                        </div>
                                        <div>
                                            <span>
                                                How "Ethiopia the land of wisdom" ?
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                            {/* third link */}
                            <div className='w-full'>
                                <NavLink>
                                    <div className='flex p-1 gap-2 rounded-sm transform-cpu ease-in-out duration-300 hover:bg-gray-100'>
                                        <div className='flex text-xl'>
                                            <TbHelp className='text-blue-400 mt-1' />
                                        </div>
                                        <div>
                                            <span>
                                                When "Ethiopia the land of wisdom" ?
                                            </span>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyChartRightSideQuickLink
