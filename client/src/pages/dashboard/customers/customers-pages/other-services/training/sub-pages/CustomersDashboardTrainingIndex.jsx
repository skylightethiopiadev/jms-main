import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { RiGraduationCapFill } from "react-icons/ri";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoMdVideocam } from "react-icons/io";

const CustomersDashboardTrainingIndex = () => {

    // states
    const [isMoreOption, setIsMoreOption] = useState(null)

    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md">
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
            <div className="mt-10 p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md bg-gray-100">
                <div className='grid grid-cols-1 gap-y-10'>
                    {
                        [...Array(3)].map((item, index) => {
                            return (
                                <div className='p-[1px] bg-blue-400 rounded-md overflow-hidden'>
                                    <header className='flex items-center justify-center text-white'>
                                        <div>center content</div>
                                    </header>
                                    <div className='p-3 bg-white rounded-md'>
                                        {/* header */}
                                        <header className='flex justify-between'>
                                            {/* left */}
                                            <div className='flex items-center gap-3'>
                                                {/* icon */}
                                                <div>
                                                    <div className='w-[50px] aspect-square rounded-md bg-gray-100 flex items-center justify-center text-3xl text-yellow-800'>
                                                        <RiGraduationCapFill />
                                                    </div>
                                                </div>
                                                {/* text */}
                                                <div>
                                                    <p className='font-semibold'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis eos quibusdam deleniti.
                                                    </p>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptates, quasi sed, praesentium tenetur provident quos minima officiis porro quaerat at ipsa maxime sapiente?
                                                    </p>
                                                </div>
                                            </div>
                                            {/* right */}
                                            <div>
                                                <div>
                                                    <button className='p-1 text-lg rounded-sm bg-gray-50 hover:bg-gray-300'>
                                                        <MdOutlineMoreHoriz />
                                                    </button>
                                                </div>
                                            </div>
                                        </header>
                                        {/* card */}
                                        <div className='flex flex-wrap items-center gap-5 pl-16 py-2'>
                                            <div className='px-2 py-1 border border-gray-300 rounded-md flex items-center gap-1'>
                                                <div>
                                                    <CiCalendarDate className='text-lg'/>
                                                </div>
                                                <div className='font-medium text-gray-700'>
                                                    <span>
                                                        September 13, 2024
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='px-2 py-1 border border-gray-300 rounded-md flex items-center gap-1'>
                                                <div>
                                                    <CiClock2 className='text-lg' />
                                                </div>
                                                <div className='font-medium text-gray-700'>
                                                    <span>
                                                        10:00-11:00 pm
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='px-2 py-1 border border-gray-300 rounded-md flex items-center gap-1'>
                                                <div>
                                                    <CiLocationOn className='text-lg' />
                                                </div>
                                                <div className='font-medium text-gray-700'>
                                                    <span>
                                                        Addis Ababa, Ethiopia
                                                    </span>
                                                </div>
                                            </div>


                                            <div className='flex items-center gap-1'>
                                                <div>
                                                    <div className='w-[24px] aspect-square rounded-full overflow-hidden'>
                                                        <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className='font-bold text-gray-800'>
                                                    <span>Haddis F.</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* footer */}
                                        <footer className='flex items-center justify-between'>
                                            <div>
                                                {/* left */}
                                            </div>
                                            <div>
                                                <div className='cursor-pointer p-1 rounded-sm bg-blue-500 hover:bg-blue-400 text-white flex items-center gap-1'>
                                                    <div>
                                                        <IoMdVideocam className='text-xl'/>
                                                    </div>
                                                    <div>
                                                        <span>Join Training</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </footer>
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

export default CustomersDashboardTrainingIndex
