import React from 'react'
import { NavLink } from 'react-router-dom'
import Chart from 'react-apexcharts'

// icons
import { AiOutlineClose } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";

import { PiPhoneCallThin } from "react-icons/pi";
import { CiChat2 } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";

import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";



const CustomersDashboardMyChartCaseTeamIndex = () => {


    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border bg-gray-100 rounded-md">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4">Recent Histories</h3>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <NavLink to={'/dashboard/customers/compliance'} className="py-[.15rem] px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200">Start New Case</NavLink>
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
                    <div className='flex items-center justify-between mt-3'>
                        <div>
                            <NavLink className='flex items-center relative w-max cursor-pointer'>
                                <div className='absolute left-0 z-0 w-[28px] border-2 border-white shadow-md aspect-square rounded-full  overflow-hidden'>
                                    <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716940800&semt=sph" alt="" />
                                </div>
                                <div className='absolute left-5 z-10 w-[28px] border-2 border-white shadow-md aspect-square rounded-full  overflow-hidden'>
                                    <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg" alt="" />
                                </div>
                                <div className='absolute left-10 z-20 w-[28px] border-2 border-white bg-white flex items-center
                                 justify-center shadow-md aspect-square rounded-full  overflow-hidden font-bold'>
                                    <span>5+</span>
                                </div>
                            </NavLink>
                        </div>
                        <div>
                            <NavLink className={'px-2 py-[.15rem] rounded-sm border border-gray-200 transition-colors ease-in-out duration-300 hover:border-gray-500'}>view all</NavLink>
                        </div>
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-7">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4">Case Teams</h3>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <div className='flex items-center justify-end gap-3'>
                            <NavLink>
                                <div className='flex items-center gap-1 hover:text-blue-700'>
                                    <CiViewBoard className='text-lg' />
                                    <div>
                                        <span>view all</span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </header>
                {/* content container */}
                <div>
                    <div className='mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7'>
                        {
                            [...Array(4)].map((item, index) => {
                                return (

                                    <div key={index} className='p-3 bg-white shadow-md'>
                                        <div>

                                            <header className='flex justify-between items-center'>
                                                <div className='flex gap-1 items-center'>
                                                    <div>
                                                        <div className='w-[30px] aspect-square rounded-full overflow-hidden'>
                                                            <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716940800&semt=sph" alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='flex items-center gap-1 font-medium'>
                                                            <span>Haddis</span>
                                                            <span>Fanta</span>
                                                        </div>
                                                        <div className='mt-[-3px] text-xs text-gray-400'>
                                                            <span>offline</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='self-start transition-colors ease-in-out duration-300 hover:bg-gray-200 h-max'>
                                                    <NavLink className={''}><div>
                                                        <MdMoreHoriz className='text-xl' /></div></NavLink>
                                                </div>
                                            </header>

                                            <div className='py-1 my-1 border-b border-gray-200'>
                                                <div>
                                                    <span>here</span>
                                                </div>
                                                <div className='mt-[-5px] font-semibold'>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur.
                                                    </p>
                                                </div>
                                            </div>

                                            <footer className='flex items-center gap-3 mt-2'>

                                                <div className='flex items-center gap-1 cursor-pointer transition-colors ease-in-out duration-300 hover:text-blue-800'>
                                                    <div>
                                                        <div className='w-[20px] aspect-square rounded-full border border-gray-400 flex items-center justify-center'>
                                                            <CiChat2 />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span>message</span>
                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-1 cursor-pointer transition-colors ease-in-out duration-300 hover:text-blue-800'>
                                                    <div>
                                                        <div className='w-[20px] aspect-square rounded-full border border-gray-400 flex items-center justify-center'>
                                                            <CiWarning />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span>report</span>
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

            {/* third  order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-7">
                <div className='flex gap-3 flex-col md:flex-row'>
                    <div className='w-[100%] md:w-[35%] bg-gray-50'>
                        <Chart
                            type='line'
                            width={'100%'}
                            height={'100%'}
                            series={[
                                {
                                    name: 'active',
                                    data: [5, 23, 24, 4, 12, 28, 11, 13, 7, 30],
                                },
                                {
                                    name: 'pending',
                                    data: [20, 24, 12, 10, 27, 11, 19, 9, 26, 16],
                                },
                                {
                                    name: 'closed',
                                    data: [11, 3, 17, 9, 22, 28, 14, 33, 19, 20],
                                },
                            ]}

                            options={{
                                chart: {
                                    toolbar: {
                                        show: false
                                    },
                                    zoom: {
                                        enabled: false
                                    },

                                },
                                stroke: {
                                    curve: 'smooth',
                                    width: 1,
                                },
                                colors: ['#0bde7b', '#f5b907', '#cf0430'],
                                subtitle: {
                                    text: 'case history',
                                    align: 'center',
                                    style: {
                                        fontSize: 14,
                                        fontWeight: 600
                                    }
                                },
                                grid: {
                                    xaxis: {
                                        lines: {
                                            show: false,
                                        }
                                    },
                                    yaxis: {
                                        lines: {
                                            show: false
                                        }
                                    }
                                },
                                xaxis: {
                                    labels: {
                                        show: false
                                    },
                                    axisBorder: {
                                        show: false
                                    },
                                    axisTicks: {
                                        show: false
                                    }
                                },
                                yaxis: {
                                    labels: {
                                        show: false
                                    }
                                }

                            }}
                        />
                    </div>
                    <div className='w-[100%] md:w-[65%] border border-gray-200 p-3 rounded-md'>
                        {/* header */}
                        <header className='flex items-center justify-between pb-1 border-b border-gray-200'>
                            <div>
                                <h3 className='header-level-4'>Case Managers</h3>
                            </div>
                            <div>
                                <div>
                                    <NavLink>
                                        <div className='flex items-center gap-1 hover:text-blue-700'>
                                            <CiViewBoard className='text-lg' />
                                            <div>
                                                <span>view all</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </header>
                        <div className='mt-5'>
                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                                {
                                    [...Array(4)].map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='p-1 border border-gray-300 rounded-sm'>
                                                    <header className='flex items-center justify-between'>
                                                        <div>
                                                            <div className='w-[24px] aspect-square rounded-full overflow-hidden bg-yellow-400 mt-[-24px]'>
                                                                <img className='w-full h-full object-center object-cover' src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <NavLink>
                                                                    <div className='pxd-1 text-xl bg-gray-50 hover:bg-gray-200'>
                                                                        <MdMoreHoriz />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <div>
                                                        <div className='font-medium flex items-center gap-1'>
                                                            <span>Haddis</span>
                                                            <span>F.</span>
                                                        </div>
                                                        <div className='mt-[-5px] text-xs'>
                                                            <span>0923996736</span>
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
                </div>
            </div>

            {/* lawyer detail pop up */}
            <div className={`fixed z-50 w-[350px] h-[500px] bg-white shadow-md rounded-sm overflow-hidden top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform ease-in-out duration-300 ${true ? 'scale-100' : 'scale-0'} flex flex-col`} >
                {/* header */}
                <header className='border-b border-gray-300 relative'>
                    {/* close btn */}
                    <div className='absolute top-1 right-1 z-10 cursor-pointer w-[20px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-300 transition-colors ease-in-out duration-300 hover:bg-gray-100' onClick={() => {
                        // close
                    }}>
                        <MdOutlineClose />
                    </div>
                    {/* top */}
                    <div className='w-full h-[50px] overflow-hidden bg-gray-400 relative z-0'></div>
                    {/* bottom */}
                    <div className='relative z-0 px-7 flex items-center justify-between py-1'>
                        {/* left */}
                        <div className='flex gap-3'>
                            {/* image */}
                            <div>
                                <div className='w-[64px] aspect-square rounded-full overflow-hidden bg-white border-2 border-white shadow-md mt-[-25px]'>
                                    <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                </div>
                            </div>
                            {/* text */}
                            <div>
                                {/* full name */}
                                <div className='flex gap-1 font-bold'>
                                    <span>Addis</span>
                                    <span>Fanta</span>
                                </div>
                                {/* phone */}
                                <div className='flex items-center gap-1 cursor-pointer'>
                                    {/* icon */}
                                    <div>
                                        <PiPhoneCallThin />
                                    </div>
                                    {/* number */}
                                    <div>
                                        <span>0923996736</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <div className='self-start py-1'>
                            <div className='flex items-center justify-end gap-3 text-blue-700'>
                                <NavLink>
                                    <FaFacebookF />
                                </NavLink>
                                <NavLink>
                                    <BiLogoTelegram />
                                </NavLink>
                                <NavLink className={'ml-1'}>
                                    <RiTwitterXFill />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </header>
                {/* content */}
                <div className='flex-grow p-3'>
                    {/* bio */}
                    <div>
                        <p className='py-1 border-b border-gray-300'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque non reprehenderit vel.
                        </p>
                    </div>

                    {/* detail */}
                    <div className='p-5'>
                        <div>
                            <h3 className='font-bold'>Personal Detail</h3>
                        </div>
                        <div className='py-1 border-l border-green-500'>
                            {/* name */}
                            <div>
                                <header className='flex items-center gap-2 pt-3'>
                                    <div className='ml-[-8px]'>
                                        <div className='w-[14px] aspect-square border-2 border-green-500 rounded-full bg-white'></div>
                                    </div>
                                    <div className='font-black'>
                                        <span>Name</span>
                                    </div>
                                </header>
                                <div className='ml-4'>
                                    <div className='flex gap-5'>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>First</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Haddis</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Middle</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Fanta</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Last</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Shiferaw</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* contact */}
                            <div>
                                <header className='flex items-center gap-2 pt-3'>
                                    <div className='ml-[-8px]'>
                                        <div className='w-[14px] aspect-square border-2 border-green-500 rounded-full bg-white'></div>
                                    </div>
                                    <div className='font-black'>
                                        <span>Contact</span>
                                    </div>
                                </header>
                                <div className='ml-4'>
                                    <div className='flex gap-5'>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Phone</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>+251923996736</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Email</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>haddisfun@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* address */}
                            <div>
                                <header className='flex items-center gap-2 pt-3'>
                                    <div className='ml-[-8px]'>
                                        <div className='w-[14px] aspect-square border-2 border-green-500 rounded-full bg-white'></div>
                                    </div>
                                    <div className='font-black'>
                                        <span>Address</span>
                                    </div>
                                </header>
                                <div className='ml-4'>
                                    <div className='flex gap-5'>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Country</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Ethiopia</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Region</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Amhara</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>City</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Bahir Dar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer */}
                    <footer>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center gap-1 cursor-pointer hover:text-green-500'>
                                <div>
                                    <div className='w-[24px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
                                        <CiChat2 />
                                    </div>
                                </div>
                                <div>
                                    <span>message</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer hover:text-green-500'>
                                <div>
                                    <div className='w-[24px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
                                        <CiWarning />
                                    </div>
                                </div>
                                <div>
                                    <span>report</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer hover:text-green-500'>
                                <div>
                                    <div className='w-[24px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
                                        <IoCloseOutline />
                                    </div>
                                </div>
                                <div>
                                    <span>close</span>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardMyChartCaseTeamIndex
