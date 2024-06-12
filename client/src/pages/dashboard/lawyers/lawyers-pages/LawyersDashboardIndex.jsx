
import { useRef } from 'react'
import Slider from "react-slick";
import { NavLink } from 'react-router-dom'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { VscNewFolder } from "react-icons/vsc";
import { PiStack } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import { PiBankThin } from "react-icons/pi";
import { MdChevronRight } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";
import { MdOutlineChevronLeft } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";


const LawyersDashboardIndex = () => {

    // refs
    // case slider ref
    let caseHistorySliderRef = useRef(null)

    // case history slider settings
    const caseHistorySliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }


    // functions
    // prev
    const showPreviousCaseHistory = () => {
        caseHistorySliderRef?.slickPrev()
    }
    // next
    const showNextCaseHistory = () => {
        caseHistorySliderRef?.slickNext()
    }

    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border bg-gray-100 rounded-md">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4">Lawyers Dashboard</h3>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <button className="py-[.15rem] px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200">Browse Templates</button>
                        <button className="py-1 flex items-center justify-center px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200">
                            <AiOutlineClose />
                        </button>
                    </div>
                </header>
                {/* cards container */}
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-2 xl:gap-3">

                    {/* first card */}
                    <NavLink className="flex gap-3 bg-white px-3 py-2 rounded-md border border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-pointer" to={'#'}>
                        <div className="w-[48px] bg-yellow-100 flex items-center justify-center aspect-square rounded-md overflow-hidden">
                            <VscNewFolder className='text-2xl text-blue-900' />
                        </div>
                        <div>
                            <h3 className="font-semibold">Pending Cases</h3>
                            <p>
                                all pending cases
                            </p>
                        </div>
                    </NavLink>

                    {/* second card */}
                    <NavLink to={'#'} className="flex gap-3 bg-white px-3 py-2 rounded-md border border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-pointer">
                        <div className="w-[48px] bg-blue-100 flex items-center justify-center aspect-square rounded-md overflow-hidden">
                            <CiClock1 className='text-3xl text-blue-900' />
                        </div>
                        <div>
                            <h3 className="font-semibold">Office Appointment</h3>
                            <p>
                                make appointment
                            </p>
                        </div>
                    </NavLink>

                    {/* third card */}
                    <NavLink className="flex gap-3 bg-white px-3 py-2 rounded-md border border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-pointer">
                        <div className="w-[48px] bg-orange-100 flex items-center justify-center aspect-square rounded-md overflow-hidden">
                            <PiStack className='text-2xl text-blue-900' />
                        </div>
                        <div>
                            <h3 className="font-semibold">Attachments</h3>
                            <p>
                                all attachments
                            </p>
                        </div>
                    </NavLink>

                    {/* fourth card */}
                    <NavLink className="flex gap-3 bg-white px-3 py-2 rounded-md border border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-pointer">
                        <div className="w-[48px] bg-green-100 flex items-center justify-center aspect-square rounded-md overflow-hidden">
                            <PiBankThin className='text-3xl text-blue-900' />
                        </div>
                        <div>
                            <h3 className="font-semibold">Billing </h3>
                            <p>
                                bill service
                            </p>
                        </div>
                    </NavLink>

                </div>
            </div>

            {/* second order container */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5">

                {/* first card */}
                <div className="border border-gray-200 rounded-md px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 py-5">
                    <header className="flex items-center justify-between">
                        <div>
                            <h3 className="header-level-4">Next Appointment</h3>
                        </div>
                        <div></div>
                    </header>
                    <div className='h-[85%] w-full p-1 relative rounded-md mt-2'>
                        {/* bg */}
                        <div className='absolute left-0 top-0 w-full h-full z-0'>
                            <div className='w-full h-full overflow-hidden rounded-md bg-gradient-to-r from-white to-green-200'>

                            </div>
                        </div>
                        <div className='relative z-10 flex items-center gap-2'>
                            <div className='p-1 bg-white flex-grow pr-6 rounded-sm shadow-2xl'>
                                <div className='my-1'>
                                    <span>Type: </span>
                                    <span className='font-semibold'>Oral Litigation</span>
                                </div>
                                <div className='my-1'>
                                    <span>Court: </span>
                                    <span className='font-semibold'>Ledeta</span>
                                </div>
                                <div>
                                    <span className='font-bold text-lg'>5 march, 2024</span>
                                </div>
                            </div>
                            <div className='p-1 bg-white rounded-sm shadow-2xl py-[.65rem] self-start min-w-[90px]'>
                                <div className='flex flex-col items-center'>
                                    <div className='w-[28px] aspect-square rounded-full overflow-hidden'>
                                        <img className='w-full h-full object-center object-cover'
                                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                                            alt="" />
                                    </div>
                                    <div className='text-xs flex flex-col items-center my-1'>
                                        <h3 className='font-semibold'>Haddis Fanta</h3>
                                        <span>lawyer</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute bottom-1 right-20'>
                            <div className='text-5xl'>
                                <GiAlarmClock />
                            </div>
                            <div
                                className='absolute right-0 top-1/2 -translate-y-1/2 mr-[-64px] flex items-center justify-center rounded-full bg-purple-700 text-white font-bold px-2 py-[.1rem]'>
                                <span>07:45am</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className="border border-gray-200 rounded-md px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 py-5">
                    <header className="flex items-center justify-between">
                        <div>
                            <h3 className="header-level-4">Schedule</h3>
                        </div>
                        <div></div>
                    </header>
                    <div className='mt-1 p-1 rounded-md bg-gray-100'>
                        <header className='flex items-center justify-between'>
                            <div className='flex items-center'>
                                <button>
                                    <MdChevronRight className='text-xl rotate-180' />
                                </button>
                            </div>
                            <div>
                                <h3 className='text-sm font-bold py-2'>march 2024</h3>
                            </div>
                            <div className='flex items-center'>
                                <button>
                                    <MdChevronRight className='text-xl' />
                                </button>
                            </div>
                        </header>
                        <div className='flex justify-between p-2'>
                            <div className='flex flex-col items-center justify-between gap-5 p-1'>
                                <div>
                                    <div>m</div>
                                </div>
                                <div>
                                    <div>11</div>
                                </div>
                            </div>
                            <div
                                className='flex flex-col items-center justify-between gap-5 p-[.13rem] rounded-full bg-gray-700 text-white'>
                                <div>
                                    <div>t</div>
                                </div>
                                <div>
                                    <div
                                        className='bg-red-600 text-white flex items-center justify-center rounded-full overflow-hidden p-[.1rem] w-[20px] aspect-square'>
                                        <span className='text-sm font-medium'>12</span></div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between gap-5 p-1'>
                                <div>
                                    <div>w</div>
                                </div>
                                <div>
                                    <div>13</div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between gap-5 p-1'>
                                <div>
                                    <div>th</div>
                                </div>
                                <div>
                                    <div>14</div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between gap-5 p-1'>
                                <div>
                                    <div>f</div>
                                </div>
                                <div>
                                    <div>15</div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between gap-5 p-1'>
                                <div>
                                    <div>sa</div>
                                </div>
                                <div>
                                    <div>16</div>
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-between gap-5 p-1'>
                                <div>
                                    <div>su</div>
                                </div>
                                <div>
                                    <div>17</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* third card */}
                <div className="border border-gray-200 rounded-md px-1 sm:px-2 md:px-3 lg:px-5 xl:px-7 py-5 col-span-1 sm:col-span-2 md:col-span-1">
                    <header className="flex items-center justify-between">
                        <div>
                            <h3 className="header-level-4">Current Balance</h3>
                        </div>
                        <div></div>
                    </header>
                    <div className='mt-1 p-2 rounded-md bg-gradient-to-r from-white to-orange-200'>
                        <header className='flex items-center justify-between'>
                            <div>
                                <h3 className='font-medium'></h3>
                            </div>
                            <div>
                                <div
                                    className='flex items-center gap-1 cursor-pointer border border-gray-100 px-2 rounded-full transition-colors ease-in-out duration-150 hover:border-gray-300'>
                                    <div><span>Sep</span></div>
                                    <div>
                                        <MdKeyboardArrowDown className={`text-xl`} />
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className='text-sm'>
                            <h1 className='text-xl font-bold'>$21,328.00</h1>
                            <div className='mt-[-2px]'>
                                <h3 className='text-gray-700  font-semibold'>left to spend</h3>
                            </div>
                            <div className='mt-[-2px]'>
                                <span className='text-xs'>last update 2 months ago</span>
                            </div>
                        </div>
                        <div className='mt-2 flex items-center gap-5'>
                            <button
                                className='px-3 py-[.15rem] rounded-full border border-yellow-400 bg-yellow-400 text-white transition-colors ease-in-out duration-300 hover:bg-transparent hover:text-black'>Withdraw
                                funds</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* third order container */}
            <div className="mt-7 px-[3%] py-[2%] rounded-md border border-gray-200">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4 whitespace-nowrap">Case History</h3>
                    </div>
                    <div className='flex items-center justify-end gap-3'>
                        <div
                            className='text-gray-500 transition-colors text-xs ease-in-out duration-150 hover:text-blue-600 hover:underline cursor-pointer'>
                            <span>view all case histories</span>
                        </div>
                        <div className='w-[20px] aspect-square border border-blue-900 rounded-full overflow-hidden flex items-center justify-center text-blue-900 text-lg cursor-pointer transition-colors ease-in-out duration-150 hover:bg-blue-900 hover:text-white'
                            onClick={() => {
                                showPreviousCaseHistory()
                            }}>
                            <MdOutlineChevronLeft />
                        </div>
                        <div className='w-[20px] aspect-square border border-blue-900 rounded-full overflow-hidden flex items-center justify-center text-blue-900 text-lg cursor-pointer transition-colors ease-in-out duration-150 hover:bg-blue-900 hover:text-white'
                            onClick={() => {
                                showNextCaseHistory()
                            }}>
                            <MdOutlineChevronRight />
                        </div>
                    </div>
                </header>
                <div className="mt-4 h-[110px] overflow-y-hidden max-w-[380px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1024px] xl:max-w-[1133.86px] overflow-x-hidden flex gap-5">
                    <div className='w-full'>
                        <Slider ref={slider => {
                            caseHistorySliderRef = slider;
                        }} {...caseHistorySliderSettings}>
                            {
                                [...Array(12)].map((item, index) => {
                                    return (
                                        <div key={index} className='px-1 md:px-3 pb-5'>
                                            <div className={`px-2 py-3 rounded-md bg-white shadow-md border-l-[3px] ${index % 3 === 0
                                                ? 'border-green-400' : index % 2 === 0 ? 'border-yellow-400' : 'border-red-500'}`}>
                                                <header className='flex items-center justify-between'>
                                                    <div>
                                                        <span className='text-gray-700 font-medium text-sm'>No.732164a</span>
                                                    </div>
                                                    <div>
                                                        <div
                                                            className='w-[24px] rounded-sm border border-gray-200 flex items-center justify-center text-gray-600 cursor-pointer transition-colors ease-in-out duration-150 hover:border-gray-400 hover:text-black'>
                                                            <GoArrowUpRight />
                                                        </div>
                                                    </div>
                                                </header>
                                                <div>
                                                    <h3 className='font-bold'>Ledeta Kefele Ketema</h3>
                                                </div>
                                                <div>
                                                    <h4 className='font-semibold text-sm text-gray-700'>fetaber chelot</h4>
                                                </div>
                                                <div className='flex items-center justify-between'>
                                                    <div>
                                                        <span className='text-xs'>starts 5 days ago</span>
                                                    </div>
                                                    <div>
                                                        <div className='relative flex items-center justify-end cursor-pointer'>
                                                            <div
                                                                className='absolute right-7 z-0 w-[24px] aspect-square rounded-full overflow-hidden bg-red-500'>
                                                                <img className='w-full h-full object-center object-cover'
                                                                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                                                                    alt="" />
                                                            </div>
                                                            <div
                                                                className='absolute right-4 z-10 w-[24px] aspect-square rounded-full overflow-hidden bg-green-500'>
                                                                <img className='w-full h-full object-center object-cover'
                                                                    src="https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg"
                                                                    alt="" />
                                                            </div>
                                                            <div
                                                                className='absolute right-0 z-20 w-[26px] aspect-square rounded-full overflow-hidden bg-white shadow-md border border-white flex items-center justify-center'>
                                                                <span className='text-xs font-bold'>5+</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LawyersDashboardIndex
