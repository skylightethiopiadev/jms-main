import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

// icons
import { GoPlus } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { TiInputChecked } from "react-icons/ti";
import { CiClock2 } from "react-icons/ci";
import { CiSquareCheck } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";

const LawyersDashboardMyChartActiveCasesIndex = () => {

    // state
    const [caseType, setCaseType] = useState({ on: false, text: 'All Cases' })

    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border bg-gray-100 rounded-md">
                <h3 className='header-level-4'>Active Cases</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore provident autem nemo voluptatum obcaecati, reiciendis aut fuga consequuntur vel soluta, eligendi commodi minima qui blanditiis est amet assumenda velit? Pariatur, et impedit!
                </p>
            </div>

            {/* second order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border  mt-7 rounded-md">
                {/* header */}
                <header className='flex items-center justify-between py-2 border-b border-gray-200'>
                    {/* left */}
                    <div>
                        <NavLink>
                            <div className='flex items-center gap-1 px-1 py-0.5 text-white bg-yellow-400 rounded-sm transition-colors ease-in-out duration-300 hover:bg-yellow-500'>
                                <div>
                                    <GoPlus className='text-lg' />
                                </div>
                                <div>
                                    <span>create new</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    {/* right */}
                    <div className='flex items-center justify-end gap-3'>
                        {/* case category */}
                        <div className='relative'>
                            <div className='flex items-center justify-between gap-1 cursor-pointer px-2 py-0.5 border border-gray-200 rounded-md transition-colors ease-in-out duration-300 hover:border-gray-500 w-[110px]' onClick={() => {
                                if (caseType?.on) {
                                    setCaseType(prev => {
                                        return {
                                            ...prev,
                                            on: false,
                                        }
                                    })
                                } else {
                                    setCaseType(prev => {
                                        return {
                                            ...prev,
                                            on: true,
                                        }
                                    })
                                }
                            }}>
                                <span>{caseType?.text}</span>
                                <MdOutlineKeyboardArrowDown className={`text-xl transition-transform ease-in-out duration-300 ${caseType?.on ? '-rotate-180' : 'rotate-0'}`} />
                            </div>
                            <div className={`absolute right-0 w-max top-[100%] bg-white shadow-xl transition-all ease-in-out duration-150 overflow-hidden ${caseType?.on ? 'h-[122px]' : 'h-0'}`}>
                                <div>
                                    <div className='transition-colors ease-in-out border-b border-gray-200 duration-300 hover:border-gray-500 cursor-pointer px-5 py-1' onClick={() => {
                                        setCaseType(prev => {
                                            return {
                                                ...prev,
                                                text: 'Civil',
                                                on: false,
                                            }
                                        })
                                    }}>
                                        <span>Civil </span>
                                    </div>

                                    <div className='transition-colors ease-in-out border-b border-gray-200 duration-300 hover:border-gray-500 cursor-pointer px-5 py-1' onClick={() => {
                                        setCaseType(prev => {
                                            return {
                                                ...prev,
                                                text: 'Criminal',
                                                on: false,
                                            }
                                        })
                                    }}>
                                        <span>Criminal</span>
                                    </div>

                                    <div className='transition-colors ease-in-out border-b border-gray-200 duration-300 hover:border-gray-500 cursor-pointer px-5 py-1' onClick={() => {
                                        setCaseType(prev => {
                                            return {
                                                ...prev,
                                                text: 'Corporate',
                                                on: false,
                                            }
                                        })
                                    }}>
                                        <span>Corporate</span>
                                    </div>

                                    <div className='transition-colors ease-in-out border-b border-gray-200 duration-300 hover:border-gray-500 cursor-pointer px-5 py-1' onClick={() => {
                                        setCaseType(prev => {
                                            return {
                                                ...prev,
                                                text: 'All Cases',
                                                on: false,
                                            }
                                        })
                                    }}>
                                        <span>All Cases</span>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div>
                            {/* date */}
                        </div>
                        {/* search */}
                        <div>
                            <div className='flex items-center border border-gray-300 px-1 py-0.5 rounded-md'>
                                <CiSearch className='text-xl mr-1' />
                                <input
                                    type="text"
                                    className='focus:ring-0 focus:outline-none border-none p-0'
                                    placeholder='search' />
                            </div>
                        </div>
                        <div>
                            {/* other */}
                        </div>
                    </div>
                </header>
                {/* case grid */}
                <div>
                    {
                        [...Array(7)].map((item, index) => {
                            return (
                                <div className='flex items-center justify-between py-2 border-b border-gray-200'>
                                    {/* profile */}
                                    <div className='col-span-2 flex items-center gap-5'>
                                        <div className='text-xl text-green-300'>
                                            <TiInputChecked />
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <div>
                                                <div className='w-[24px] aspect-square rounded-full overflow-hidden'>
                                                    <img className='w-full h-full object-center object-cover' src="https://www.shutterstock.com/image-photo/smiling-mature-man-wearing-spectacles-600nw-1432699253.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className='mb-[-5px] text-sm font-medium'>
                                                    <span>Addis</span>
                                                </div>
                                                <div className='mt-[-5px] text-xs text-gray-700'>
                                                    <span>Fanta</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* case type */}
                                    <div className='col-span-2 flex items-center'>
                                        <div>
                                            <div className='font-medium'><span>Corporate</span></div>
                                            {/* <div className='text-sm mt-[-3px]'><span>Intellectual Property</span></div> */}
                                        </div>
                                    </div>
                                    {/* started date */}
                                    <div className='whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            <div className='flex items-center gap-1'>
                                                <CiClock2 className='text text-blue-800'/>
                                                <div>
                                                    <span>September 21, 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* end case */}
                                    <div className='whitespace-nowrap'>
                                        <div className='flex items-center'>
                                            <div className='flex items-center gap-1'>
                                                <CiClock2 className='text- text-blue-800' />
                                                <div>
                                                    <span>September 21, 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* statue */}
                                    <div>
                                        <div className='flex items-center gap-1 text-green-500'>
                                            <CiSquareCheck/>
                                            <div>
                                                <span>active</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* action */}
                                    <div className='flex items-center'>
                                        <div>
                                            <IoIosMore className='text-xl'/>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default LawyersDashboardMyChartActiveCasesIndex
