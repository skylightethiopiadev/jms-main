import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoMdMore } from "react-icons/io";


const CustomersDashboardMyChartActiveCaseIndex = () => {

    const [isLawyerImagePopUp, setIsLawyerImagePopUp] = useState(null)

    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border bg-gray-100 rounded-md">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4">Active Case Histories</h3>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <NavLink className="py-[.15rem] px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200">closed case</NavLink>
                        <button className="py-1 flex items-center justify-center px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200">
                            <AiOutlineClose />
                        </button>
                    </div>
                </header>
                {/* content container */}
                <div>
                    {/* text */}
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt assumenda libero est adipisci praesentium odit sequi! Magni asperiores natus repellendus iusto mollitia, nam quos?</p>
                    </div>
                    {/* avatar */}
                    <div className='flex items-center justify-between mt-1'>
                        <div>
                            <NavLink>
                                <div className='flex items-center gap-1 hover:text-blue-600 px-2 rounded-sm hover:bg-white border border-gray-300'>
                                    <span>start new case</span>
                                    <MdOutlineArrowRightAlt className='text-xl' />
                                </div>
                            </NavLink>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>


            {/* second order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-7">
                <header className="flex items-center justify-between pb-2">
                    <div>
                        <h3 className="header-level-4">Active Cases</h3>
                    </div>
                </header>
                {/* content container */}
                <div>
                    {/* active case grid */}
                    <div className='grid grid-cols-2 gap-5'>
                        {/* grid-items */}
                        {
                            [...Array(4)].map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='p-3 border border-gray-200 rounded-md'>
                                            {/* header */}
                                            <header className='flex items-center justify-between py-1'>
                                                <div>//</div>
                                                <div>
                                                    <NavLink>
                                                        <div className='hover:bg-gray-100'>
                                                            <IoMdMore className='text-xl' />
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </header>
                                            {/* content */}
                                            {/* case detail */}
                                            <div>
                                                {/* case detail */}
                                                <div>
                                                    <div className='grid grid-cols-2 gap-3'>
                                                        {/* case */}
                                                        <div>
                                                            <div className='pl-5 p-1 border border-gray-100 bg-white shadow-md'>
                                                                <div>
                                                                    <h3>Case Category</h3>
                                                                </div>
                                                                <div>
                                                                    <div className='border-l border-gray-500'>
                                                                        {/* first */}
                                                                        <header className='flex items-center gap-3 mb-1'>
                                                                            <div className='ml-[-12px]'>
                                                                                <div className='w-[22px] aspect-square rounded-full border border-gray-500 flex items-center justify-center bg-white'>
                                                                                    <span>1</span>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <span>Civil Case</span>
                                                                            </div>
                                                                        </header>
                                                                        {/* first */}
                                                                        <header className='flex items-center gap-3 mb-1'>
                                                                            <div className='ml-[-12px]'>
                                                                                <div className='w-[22px] aspect-square rounded-full border border-gray-500 flex items-center justify-center bg-white'>
                                                                                    <span>2</span>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <span>Contract</span>
                                                                            </div>
                                                                        </header>
                                                                        {/* first */}
                                                                        <header className='flex items-center gap-3'>
                                                                            <div className='ml-[-12px]'>
                                                                                <div className='w-[22px] aspect-square rounded-full border border-gray-500 flex items-center justify-center bg-white'>
                                                                                    <span>3</span>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <span>Contract Of Special Movables</span>
                                                                            </div>
                                                                        </header>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* file */}
                                                        <div>
                                                            <div className='p-3 border border-gray-100 bg-white shadow-md'>
                                                                <div>
                                                                    <h3>File Detail</h3>
                                                                </div>
                                                                <div>
                                                                    {/* file no */}
                                                                    <div className='font-medium text-gray-600'>
                                                                        <span>NO.7F000NM649</span>
                                                                    </div>
                                                                    {/* chilot place */}
                                                                    <div className='font-bold'>
                                                                        <span>Ledeta Kefele Ketema</span>
                                                                    </div>
                                                                    {/* chilot type */}
                                                                    <div className='font-medium text-gray-700'>
                                                                        <span>
                                                                            fetaber chilot
                                                                        </span>
                                                                    </div>
                                                                    {/* date */}
                                                                    <div className='text-xs'>
                                                                        <span>starts 4 weeks ago</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* description */}
                                                    <div className='my-3'>
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ad inventore, aliquid sint fugit dolores laborum dolorum error ducimus atque, animi quaerat, blanditiis vel?
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* lawyer and case manager detail */}
                                            <div className='flex gap-3'>
                                                here is the shit
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardMyChartActiveCaseIndex
