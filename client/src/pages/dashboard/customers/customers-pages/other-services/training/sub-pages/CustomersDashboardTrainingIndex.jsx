import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { IoMdMore } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

const CustomersDashboardTrainingIndex = () => {

    // states
    const [isMoreOption, setIsMoreOption] = useState(null)

    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 bg-gray-100 border rounded-md">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4">My Trainings</h3>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <NavLink>
                            <div className="py-[.15rem] px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200" onClick={() => {
                                // navigate(-1)
                            }}>
                                {/* <IoExitOutline className='text-xl' /> */}
                            </div>
                        </NavLink>
                    </div>
                </header>
                {/* content container */}
                <div>
                    {/* text */}
                    <div>
                        <p>
                            Your customized case history dashboard awaits you. Here, you’ll discover all the latest updates and details related to your ongoing case.
                        </p>
                    </div>
                    {/* btn */}
                    <div className='mt-3'>
                        <NavLink to={'/dashboard/customers/other-services/training/new-training'} className='px-3 py-[.35rem] rounded-sm bg-gray-700 text-white transition-colors ease-in-out duration-300 hover:bg-gray-600'>start new training</NavLink>
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div className="mt-10 p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md">
                <div className='grid grid-cols-4 gap-5'>
                    {
                        [...Array(7)].map((item, index) => {
                            return (
                                <div className='bg-white shadow-md border border-gray-100 rounded-sm relative'>

                                    <header className='px-1 py-1 border-b border-gray-100 flex items-center justify-between'>
                                        {/* profile */}
                                        <div className='flex items-center gap-2'>
                                            <div>
                                                <div className='w-[24px] aspect-square rounded-full overflow-hidden'>
                                                    <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" /></div>
                                            </div>
                                            <div>
                                                <div className='mb-[-5px] font-medium'>
                                                    <span>Haddis</span>
                                                </div>
                                                <div className='mt-[-5px] text-xs  text-gray-700'>
                                                    <span>Fanta</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center relative'>
                                            <button className='p-1 border border-transparent hover:border-gray-100' onClick={() => {
                                                if (isMoreOption?.id === index) {
                                                    setIsMoreOption(null)
                                                } else {
                                                    setIsMoreOption({ id: index })
                                                }
                                            }}>
                                                <IoMdMore className='text-xl' />
                                            </button>
                                            {/* more option pop up */}
                                            <div className={`absolute right-0 top-[100%] bg-white border border-gray-100 rounded-sm whitespace-nowrap shadow-xl transition-transform ease-in-out duration-300 ${isMoreOption?.id === index ? 'scale-100' : 'scale-0'}`}>
                                                <div className='px-3 py-1 flex items-center gap-5 cursor-pointer transition-colors ease-in-out duration-150 hover:bg-gray-100'>
                                                    <div>
                                                        <GrEdit />
                                                    </div>
                                                    <div>
                                                        <span>Edit</span>
                                                    </div>
                                                </div>

                                                <div className='px-3 py-1 flex items-center gap-5 cursor-pointer transition-colors ease-in-out duration-150 hover:bg-gray-100'>
                                                    <div>
                                                        <RiDeleteBin6Line />
                                                    </div>
                                                    <div>
                                                        <span>delete</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </header>
                                    <div className='p-1 px-3'>
                                        <h3 className='font-semibold'>Training Type</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aspernatur quae hic officiis.
                                        </p>
                                    </div>

                                    <footer>
                                        <div className='flex items-center gap-3 px-3 py-2 border-t border-gray-100'>
                                            <div className='flex items-center gap-1 flex-wrap'>
                                                <CiCalendarDate className='text-lg text-blue-700' />
                                                <div>
                                                    <span>23 June 2024</span>
                                                </div>
                                            </div>
                                            <div className='flex items-center gap-1 flex-wrap'>
                                                <CiLocationOn className='text-lg text-blue-700' />
                                                <div>
                                                    <span>Adama</span>
                                                </div>
                                            </div>

                                        </div>
                                    </footer>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}

export default CustomersDashboardTrainingIndex
