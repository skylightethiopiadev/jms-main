import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { LiaUserClockSolid } from "react-icons/lia";
import { IoMdMore } from "react-icons/io";
import { CiAlarmOn } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { VscNote } from "react-icons/vsc";
import { CiEdit } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

const CustomersDashboardAppointmentOfficeAppointmentIndex = () => {
    const [actionPopUp, setActionPopUp] = useState(null)

    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="px-[.75%] md:px-[1.5%] lg:px-[3%] py-1 md:py-3 border-gray-200 bg-gray-100 border rounded-md">
                <header className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-gray-700 font-bold text-lg'>Office Appointments</h3>
                    </div>
                    <div>
                        <NavLink to={'/dashboard/customers/appointment/office-appointment/new-office-appointment'}>
                            <div className='flex items-center gap-1 hover:text-blue-700 px-1 py-[.15rem] bg-gray-200 hover:bg-gray-300 rounded-sm'>
                                <div className='text-xl'>
                                    <LiaUserClockSolid />
                                </div>
                                <div>
                                    <span className='sm:hidden'>new</span>
                                    <span className='hidden sm:inline-flex'>schedule new appointment</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </header>
                <div className='my-1'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, iusto esse? Laboriosam quas voluptatum corporis repellendus impedit consectetur suscipit, deleniti ut excepturi cupiditate accusantium!
                    </p>
                </div>
            </div>

            {/* second order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] md:py-3 border-gray-200 border rounded-md mt-7">
                <div>
                    {/* card grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            [...Array(6)].map((item, index) => {
                                return (
                                    <div className='border border-gray-200 p-3'>
                                        <div>
                                            <header className='flex items-center justify-between border-b border-gray-100'>
                                                <div>
                                                    <div className='flex items-center gap-1 font-black text-gray-700'>
                                                        <div className='text-xl'>
                                                            <CiAlarmOn />
                                                        </div>
                                                        <div>
                                                            <span>3 days left</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='relative'>
                                                    <div>
                                                        <button className='text-xl hover:bg-gray-100' onClick={() => {
                                                            if (actionPopUp) {
                                                                setActionPopUp(null)
                                                            } else {
                                                                setActionPopUp({ id: index })
                                                            }
                                                        }}>
                                                            <IoMdMore />
                                                        </button>
                                                    </div>
                                                    {/* action pop up */}
                                                    <div className={`absolute top-[100%] right-0 ${actionPopUp?.id === index ? 'scale-100' : 'scale-0'}`}>
                                                        <div className='w-max h-max px-5 py-3 bg-white shadow-md'>

                                                            {/* detail */}
                                                            <div className='flex items-center gap-1 border-b border-gray-200 cursor-pointer'>
                                                                <div>
                                                                    <VscNote />
                                                                </div>
                                                                <div>
                                                                    <span>Detail</span>
                                                                </div>
                                                            </div>

                                                            {/* edit */}
                                                            <div className='flex items-center gap-1 my-2 border-b border-gray-200 cursor-pointer'>
                                                                <div>
                                                                    <CiEdit />
                                                                </div>
                                                                <div>
                                                                    <span>Edit</span>
                                                                </div>
                                                            </div>

                                                            {/* close */}
                                                            <div className='flex items-center gap-1 border-b border-gray-200 cursor-pointer'>
                                                                <div>
                                                                    <IoCloseOutline />
                                                                </div>
                                                                <div>
                                                                    <span>Cancel</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </header>
                                            {/* appointment detail */}
                                            <div className='py-1'>
                                                <div>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    </p>
                                                </div>
                                                {/* info */}
                                                {/* legal issue */}
                                                <div className='border-b border-gray-200 my-1'>
                                                    <header>
                                                        <div className='font-medium'>
                                                            <span>Legal Issues</span>
                                                        </div>
                                                    </header>
                                                    {/* services */}
                                                    <div className='flex items-center gap-x-3 flex-wrap ml-[7px]'>
                                                        {
                                                            [...Array(2)].map((item, index) => {
                                                                return (
                                                                    <div className='my-1'>
                                                                        <div className='flex items-center gap-1'>
                                                                            <div>
                                                                                <CiCircleCheck className='text-' />
                                                                            </div>
                                                                            <div>
                                                                                <span>Criminal Case</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                {/* legal service */}
                                                <div className='border-b border-gray-200 my-1'>
                                                    <header>
                                                        <div className='font-medium'>
                                                            <span>Legal Services Required</span>
                                                        </div>
                                                    </header>
                                                    {/* services */}
                                                    <div className='flex items-center gap-x-3 flex-wrap ml-[7px]'>
                                                        {
                                                            [...Array(3)].map((item, index) => {
                                                                return (
                                                                    <div className='my-1'>
                                                                        <div className='flex items-center gap-1'>
                                                                            <div>
                                                                                <div className='w-[7px] aspect-square rounded-full bg-gray-500'></div>
                                                                            </div>
                                                                            <div>
                                                                                <span>New Deligences</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                {/* appointment detail */}
                                                <div className='border-b border-gray-200 my-1'>
                                                    <header>
                                                        <div className='font-medium'>
                                                            <span>Appointment Detail</span>
                                                        </div>
                                                    </header>
                                                    {/* services */}
                                                    <div className='flex items-center gap-x-3 flex-wrap ml-[7px]'>

                                                        <div>
                                                            <div className='flex items-center gap-1'>
                                                                <div>
                                                                    <div className='text-xs'>
                                                                        <span>Date: </span>
                                                                    </div>
                                                                </div>
                                                                <div className='font-bold'>
                                                                    <span>June 5, 2024 at 03:15am</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className='flex items-center gap-1'>
                                                                <div>
                                                                    <div className='text-xs'>
                                                                        <span>Place: </span>
                                                                    </div>
                                                                </div>
                                                                <div className='font-bold'>
                                                                    <span>Ledeta Kefele Ketema</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* footer */}
                                            <footer>
                                                <div>
                                                    <button className='px-3 py-[.15rem] rounded-sm bg-gray-100 hover:bg-gray-200'>cancel appointment</button>
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
        </div>
    )
}

export default CustomersDashboardAppointmentOfficeAppointmentIndex
