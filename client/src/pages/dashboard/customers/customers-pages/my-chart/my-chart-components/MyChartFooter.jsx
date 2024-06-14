import React from 'react'

// icons
import { CiLocationOn } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";

import { BsSuitcase2 } from "react-icons/bs";
import { LuBarChart2 } from "react-icons/lu";

const MyChartFooter = () => {
    return (
        <div className='px-1'>
            {/* first order container */}
            <div>
                <header className='flex items-center justify-between my-2'>
                    {/* left */}
                    <div>
                        <h3 className='text-gray-700 font-semibold'>My Polices</h3>
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
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            [...Array(2)].map((item, index) => {
                                return (
                                    <div className='bg-white rounded-sm shadow-md border border-gray-200 overflow-hidden relative pl-10 px-2'>
                                        {/* header */}
                                        <header className='flex items-center justify-between py-1 border-b border-gray-200'>
                                            {/* left */}
                                            <div>
                                                <div>
                                                    <h3 className='text-gray-900 font-semibold'>ALAN BRADY</h3>
                                                    <p>PL12345612 | Family Residence</p>
                                                </div>
                                            </div>
                                            {/* right */}
                                            <div>
                                                <button className='uppercase text-blue-400 hover:text-blue-700'>documents</button>
                                            </div>
                                        </header>
                                        {/* content */}
                                        <div className='my-3'>
                                            {/* address */}
                                            <div className='flex items-center gap-1 mb-2'>
                                                <div>
                                                    <CiLocationOn className='text-lg text-gray-500' />
                                                </div>
                                                <div className='text-gray-600'>
                                                    <span>
                                                        2301 First Avenue Dallas. TX75234
                                                    </span>
                                                </div>
                                            </div>
                                            {/* date */}
                                            <div className='flex items-center gap-1 mt-2'>
                                                <div>
                                                    <CiCalendarDate className='text-lg text-gray-500' />
                                                </div>
                                                <div className='text-gray-600'>
                                                    <span>
                                                        Jan 10, 2024 - Jan 11, 2024
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* left stuff */}
                                        <div className={`absolute left-0  top-0 h-full w-[24px] p-1 flex items-center justify-center  ${index === 0 ? 'bg-green-400' : index === 1 ? 'bg-red-500' : index === 2 ? 'bg-yellow-400' : ''}`}>
                                            <div className='-rotate-90 font-bold text-white'>
                                                <span>active</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div className='mt-5'>
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

            
        </div>
    )
}

export default MyChartFooter
