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
import { CiSearch } from "react-icons/ci";
import { HiArrowLongDown } from "react-icons/hi2";
import { CiViewBoard } from "react-icons/ci";

import { IoIosEye } from "react-icons/io";
import { GoClock } from "react-icons/go";
import { FaEdit } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiDetail } from "react-icons/bi";
import { IoHelpCircleOutline } from "react-icons/io5";

const CustomersDashboardAppointmentOfficeAppointmentIndex = () => {
    const [actionPopUp, setActionPopUp] = useState(null)
    const [cancelAppointment, setCancelAppointment] = useState(null)
    const [issues, setIssues] = useState(null)
    const [services, setServices] = useState(null)
    const [appDate, setAppDate] = useState(null)
    const [appPlace, setAppPlace] = useState(null)

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
                        Welcome to your personalized appointment dashboard. Here, you can manage and view all your scheduled appointments conveniently.
                    </p>
                </div>
            </div>

            {/* second order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] md:py-3 border-gray-200 border rounded-md mt-7">
                <header className='flex items-center justify-between py-2 border-b border-gray-200'>
                    <div>
                        <div className='flex items-center gap-1 p-1 py-0.5 bg-gray-200 rounded-sm'>
                            <CiSearch className='text-xl' />
                            <input
                                type="text"
                                className='p-0 focus:outline-none focus:ring-0 border-none bg-transparent'
                                placeholder='search' />
                        </div>
                    </div>
                    <div className='flex items-center justify-end gap-3'>
                        <div className='flex items-center w-max pr-1.5 py-0.5 hover:bg-gray-300 cursor-pointer'>
                            <div className='w-[8px]'>
                                <HiArrowLongDown />
                            </div>
                            <div className='ml-[-2px] w-[7px]'>
                                <HiArrowLongDown className='rotate-180' />
                            </div>
                        </div>
                        <NavLink>
                            <div className='flex items-center gap-1 text-blue-700 hover:text-blue-800'>
                                <CiViewBoard className='text-lg' />
                                <span>view all</span>
                            </div>
                        </NavLink>
                    </div>
                </header>

                <div className='my-3'>

                    {
                        [...Array(2)].map((item, index) => {
                            return (
                                <div key={index} className='mt-7 border border-gray-300 rounded-sm p-3 bg-white hover:shadow-md'>
                                    <header className='flex items-center justify-between border-b border-gray-200'>
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <div className='w-[32px]'>
                                                    <img className='w-full h-full object-center object-cover' src="/final-logo.png" alt="" />
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className=' text-gray-700'>makuta law firm</h3>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='flex items-center gap-3'>
                                                <div className='cursor-pointer'>
                                                    <IoIosEye className='text-xl text-gray-500 hover:text-blue-700' />
                                                </div>
                                                <div className='relative'>
                                                    {/* clock */}
                                                    <div className={`absolute right-0 top-5 w-max h-map p-5 bg-white shadow-xl transition-transform ease-in-out duration-300 ${appDate?.id === index ? 'scale-100' : 'scale-0'}`}>
                                                        <div>
                                                            <h3 className='font-bold'>January 7, 2024</h3>
                                                        </div>
                                                        <div className='font-medium'>
                                                            <span>05:45am</span>
                                                        </div>
                                                    </div>
                                                    <div className='cursor-pointer' onClick={() => {
                                                        setAppPlace(null)
                                                        if (appDate?.id === index) {
                                                            setAppDate(null)
                                                        } else {
                                                            setAppDate({ id: index })
                                                        }
                                                    }}
                                                        onMouseEnter={() => {
                                                            setAppPlace(null)
                                                            if (appDate?.id === index) {
                                                                setAppDate(null)
                                                            } else {
                                                                setAppDate({ id: index })
                                                            }
                                                        }}
                                                        onMouseLeave={() => {
                                                            setAppDate(null)
                                                        }}
                                                    >
                                                        <GoClock className='text-lgf text-gray-500 hover:text-blue-700' />
                                                    </div>
                                                </div>
                                                <div className='relative'>
                                                    <div className={`absolute right-0 top-5 w-max h-map p-5 bg-white shadow-xl transition-transform ease-in-out duration-300 ${appPlace?.id === index ? 'scale-100' : 'scale-0'}`}>
                                                        <div>
                                                            <h3 className='font-bold'>Addis Ababa</h3>
                                                        </div>
                                                        <div className='font-medium'>
                                                            <span>Ledeta Kefele Ketema</span>
                                                        </div>
                                                    </div>
                                                    <div className='cursor-pointer' onClick={() => {
                                                        setAppDate(null)
                                                        if (appPlace?.id === index) {
                                                            setAppPlace(null)
                                                        } else {
                                                            setAppPlace({ id: index })
                                                        }
                                                    }}
                                                        onMouseEnter={() => {
                                                            setAppDate(null)
                                                            if (appPlace?.id === index) {
                                                                setAppPlace(null)
                                                            } else {
                                                                setAppPlace({ id: index })
                                                            }
                                                        }}
                                                        onMouseLeave={() => {
                                                            setAppPlace(null)
                                                        }}
                                                    >
                                                        <CiLocationOn className='text-lg text-gray-500 hover:text-blue-700' />
                                                    </div>
                                                </div>
                                                <div className='cursor-pointer'>
                                                    <FaEdit className='text-lgf text-gray-500 hover:text-blue-700' />
                                                </div>
                                                <div className='cursor-pointer' onClick={() => {
                                                    setCancelAppointment(true)
                                                }}>
                                                    <IoCloseOutline className='text-xl text-gray-500 hover:text-blue-700' />
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    <div>
                                        <h3 className='font-bold mt-1'>Description</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem excepturi repellat aspernatur optio, beatae quidem magni, quos quisquam corporis eveniet iure hic autem quod!
                                        </p>
                                    </div>
                                    <footer className='py-1'>
                                        <div className='flex items-center justify-between'>
                                            {/* btns */}
                                            <div className='flex items-center gap-5'>
                                                <div className='relative'>
                                                    <div className={`absolute left-0 bottom-7 w-max h-max bg-white shadow-xl p-3 px-5 transition-transform ease-in-out duration-300 ${issues?.id === index ? 'scale-100' : 'scale-0'}`}>
                                                        <div>
                                                            <h3 className='font-bold w-max border-b border-black'>Legal Issue For The Appointment</h3>
                                                        </div>
                                                        <div className='ml-5'>
                                                            <div className=''>
                                                                {
                                                                    [...Array(3)].map((item, index) => {
                                                                        return (
                                                                            <div className='flex gap-1 my-1'>
                                                                                <div className='flex items-center'>
                                                                                    <div className='w-[7px] aspect-square rounded-full bg-green-500'></div>
                                                                                </div>
                                                                                <div>
                                                                                    <span>Intellectual Property</span>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='absolute bottom-3 right-3 cursor-pointer' onClick={() => {
                                                            setIssues(null)
                                                        }}>
                                                            <IoCloseOutline className='text-lg' />
                                                        </div>
                                                    </div>
                                                    <button className='flex items-center gap-1 hover:text-blue-700' onClick={() => {
                                                        setServices(null)
                                                        if (issues?.id === index) {
                                                            setIssues(null)
                                                        } else {
                                                            setIssues({ id: index })
                                                        }
                                                    }}>
                                                        <IoHelpCircleOutline className='text-lg' />
                                                        <span>issues</span>
                                                    </button>
                                                </div>

                                                <div className='relative'>
                                                    <div className={`absolute left-0 bottom-7 w-max h-max bg-white shadow-xl p-3 px-5 transition-transform ease-in-out duration-300 ${services?.id === index ? 'scale-100' : 'scale-0'}`}>
                                                        <div>
                                                            <h3 className='font-bold w-max border-b border-black'>Types Of Legal Services Required</h3>
                                                        </div>
                                                        <div className='ml-5'>
                                                            <div className=''>
                                                                {
                                                                    [...Array(3)].map((item, index) => {
                                                                        return (
                                                                            <div className='flex gap-1 my-1'>
                                                                                <div className='flex items-center'>
                                                                                    <div className='w-[7px] aspect-square rounded-full bg-green-500'></div>
                                                                                </div>
                                                                                <div>
                                                                                    <span>Legal Consultation</span>
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                        <div className='absolute bottom-3 right-3 cursor-pointer' onClick={() => {
                                                            setServices(null)
                                                        }}>
                                                            <IoCloseOutline className='text-lg' />
                                                        </div>
                                                    </div>

                                                    <button className='flex items-center gap-1 hover:text-blue-700' onClick={() => {
                                                        setIssues(null)
                                                        if (services?.id === index) {
                                                            setServices(null)
                                                        } else {
                                                            setServices({ id: index })
                                                        }
                                                    }}>
                                                        <BiDetail />
                                                        <span>services</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* actions */}
                                            <div>
                                                {/* actions */}
                                            </div>
                                        </div>
                                    </footer>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* cancel appointment form */}
            <div className={`fixed z-50 w-[380px] md:w-[420px] h-[300px] bg-gray-100 border border-gray-200 rounded-md left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col shadow-2xl transition-transform ease-in-out duration-150 ${cancelAppointment ? 'scale-100' : 'scale-0'}`}>
                {/* close btn */}
                <div className='absolute right-1 top-1'>
                    <div className='w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 cursor-pointer' onClick={() => {
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
                        <button className='px-3 py-1 rounded-sm bg-gray-700 text-white transition-colors ease-in-out duration-300 hover:bg-gray-600' onClick={() => {
                            setCancelAppointment(false)
                        }}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardAppointmentOfficeAppointmentIndex
