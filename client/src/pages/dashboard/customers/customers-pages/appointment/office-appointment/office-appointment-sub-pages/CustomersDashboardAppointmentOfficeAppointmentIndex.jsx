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
    const [cancelAppointment,setCancelAppointment] = useState(null)

    return (
        <div className='overflow-x-hidden flex-grow pr-1 relative'>
            {/* first order container */}
            <div className="px-[.75%] md:px-[1.5%] lg:px-[3%] py-1 md:py-3 border-gray-200 bg-gray-100 border rounded-md">
                <header className='flex items-center justify-between'>
                    <div>
                        <h3 className='text-gray-700 font-bold text-lg'>Office Appointments</h3>
                    </div>
                    <div>
                        <NavLink to={'/dashboard/customers/appointment/office-appointment/new-office-appointment'}>
                            <div className='flex items-center gap-1  px-3 py-[.35rem] rounded-sm text-white bg-blue-500 hover:bg-blue-600'>
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
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7'>
                        {
                            [...Array(6)].map((item, index) => {
                                return (
                                    <div className='border border-gray-100 bg-white shadow-xl'>
                                        <div>
                                            <header className='flex items-center justify-between px-3 py-1 bg-blue-500 text-white'>
                                                <div>
                                                    <div className='flex items-center gap-1 font-black text-white'>
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
                                                        <button className='text-xl hover:bg-blue-700 transition-colors ease-in-out duration-300 rounded-sm' onClick={() => {
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
                                                        <div className='w-max h-max px-5 py-3 bg-white shadow-md text-black'>

                                                            {/* detail */}
                                                            <div className='flex items-center gap-1 border-b border-gray-200 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-blue-100 px-1'>
                                                                <div>
                                                                    <VscNote />
                                                                </div>
                                                                <div>
                                                                    <span>Appointment Detail</span>
                                                                </div>
                                                            </div>

                                                            {/* edit */}
                                                            <div className='flex items-center gap-1 my-2 border-b border-gray-200 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-blue-100 px-1'>
                                                                <div>
                                                                    <CiEdit />
                                                                </div>
                                                                <div>
                                                                    <span>Edit Appointment</span>
                                                                </div>
                                                            </div>

                                                            {/* close */}
                                                            <div className='flex items-center gap-1 border-b border-gray-200 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-blue-100 px-1' onClick={()=>{
                                                                setCancelAppointment(true)
                                                                setActionPopUp(null)
                                                            }}>
                                                                <div>
                                                                    <IoCloseOutline />
                                                                </div>
                                                                <div>
                                                                    <span>Cancel Appointment</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </header>
                                            {/* appointment detail */}
                                            <div className='py-1 px-3'>
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
                                            <footer className='p-3'>
                                                <div>
                                                    <button className='px-3 py-[.15rem] rounded-sm bg-red-600 hover:bg-red-500 transition-colors ease-in-out duration-300 text-white' onClick={()=>{
                                                        setCancelAppointment(true)
                                                    }}>cancel appointment</button>
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

            {/* cancel appointment form */}
            <div className={`fixed z-50 w-[380px] md:w-[420px] h-[300px] bg-gray-100 border border-gray-200 rounded-md left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col shadow-2xl transition-transform ease-in-out duration-150 ${cancelAppointment ? 'scale-100' : 'scale-0'}`}>
                {/* close btn */}
                <div className='absolute right-1 top-1'>
                    <div className='w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer' onClick={()=>{
                        setCancelAppointment(false)
                    }}>
                        <IoCloseOutline />
                    </div>
                </div>
                <div className='p-3 w-[95%]'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda vero exercitationem eos quam, nulla quae itaque perferendis minima tempora temporibus consectetur.
                    </p>
                </div>
                <div className='flex-grow p-3 flex'>
                    <div className='flex-grow bg-white border border-gray-200 rounded-md'>
                        <textarea 
                            name=""  
                            id=""
                            className='w-full h-full resize-none focus:outline-none focus:ring-0 border-none bg-transparent'
                            placeholder='enter you reason'
                            ></textarea>
                    </div>
                </div>
                <div>
                    <div className='p-3 flex items-center gap-3'>
                        <button className='px-3 py-1 rounded-sm bg-blue-700 text-white transition-colors ease-in-out duration-300 hover:bg-blue-600'>submit</button>
                        <button className='px-3 py-1 rounded-sm bg-gray-700 text-white transition-colors ease-in-out duration-300 hover:bg-gray-600' onClick={()=>{
                            setCancelAppointment(false)
                        }}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardAppointmentOfficeAppointmentIndex
