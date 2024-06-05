import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoMdMore } from "react-icons/io";

import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiChat2 } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { PiAlarmLight } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";


const CustomersDashboardMyChartActiveCaseIndex = () => {

    const [isLawyerImagePopUp, setIsLawyerImagePopUp] = useState(false)

    const [caseTeamHint, setCaseTeamHint] = useState(null)
    const [managersTeamHint, setManagersTeamHint] = useState(null)
    const [caseDetailPopup,setCaseDetailPopup] = useState(false)




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
                        <p>
                            Your customized case history dashboard awaits you. Here, you’ll discover all the latest updates and details related to your ongoing case. Stay informed about the progress, completed tasks, and any pending actions to ensure a smooth journey toward resolving your legal matters.
                        </p>
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
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-7 ">
                <header className="flex items-center gap-16 pb-3 mb-5 border-b border-gray-200">
                    <div className='hidden md:inline-flex'>
                        <h3 className="header-level-4">Active Cases</h3>
                    </div>
                    <div>
                        <div className='flex items-center gap-1 px-3 py-[.1rem] border border-gray-300 rounded-full'>
                            <CiSearch className='text-lg text-gray-600'/>
                            <input 
                                type="text" 
                                placeholder='search by title' 
                                className='focus:outline-none focus:ring-0 border-none p-0 bg-transparent text-sm placeholder:text-xs text-xs'
                                />
                        </div>
                    </div>
                </header>
                {/* content container */}
                <div>
                    {/* active case grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                        {/* grid-items */}
                        {
                            [...Array(8)].map((item, index) => {
                                return (
                                    <div>
                                        <div className='bg-white shadow-md'>

                                            <header className='flex justify-between px-3 py-1 border-b border-gray-300'>
                                                <div>
                                                    <div>
                                                        <h3 className='font-semibold'>criminal case</h3>
                                                    </div>
                                                    <div className='mt-[-3px] text-xs text-gray-600'>
                                                        <span>123k followers</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className='flex items-center justify-end'>
                                                        <button className='bg-transparent px-[3px] rounded-full transition-colors ease-in-out duration-300 hover:bg-gray-300' onClick={()=>{
                                                            setCaseDetailPopup(true)
                                                        }}>
                                                            <IoIosMore className='text-xl my-[-4px]' />
                                                        </button>
                                                    </div>
                                                    <div className='text-gray-600 text-xs'>
                                                        <span>detail</span>
                                                    </div>
                                                </div>
                                            </header>

                                            <div>

                                                {/* icons */}
                                                <div className='px-3 py-1'>
                                                    <div className='flex gap-x-3 flex-wrap'>
                                                        <div className='flex items-center gap-1'>
                                                            <div>
                                                                <PiAlarmLight className='text-lg text-blue-700' />
                                                            </div>
                                                            <div className='text-sm font-semibold text-gray-600'>
                                                                <span>23-05-2024</span>
                                                            </div>
                                                        </div>

                                                        <div className='flex items-center gap-1'>
                                                            <div>
                                                                <CiLocationOn className='text-lg text-blue-700' />
                                                            </div>
                                                            <div className='text-sm font-semibold text-gray-600'>
                                                                <span>ledeta</span>
                                                            </div>
                                                        </div>

                                                        <div className='flex items-center gap-1'>
                                                            <div>
                                                                <LiaBalanceScaleSolid className='text-lg text-blue-500' />
                                                            </div>
                                                            <div className='text-sm font-semibold text-gray-600'>
                                                                <span>fitaber chilot</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>

                                                {/* text */}
                                                <div className='px-3 py-1'>
                                                    <p>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate.
                                                    </p>
                                                </div>

                                            </div>

                                            {/* footer */}
                                            <footer className='px-3 py-1 pb-3 border-t border-gray-300 pt-2'>
                                                <div className='flex items-center justify-between'>
                                                    {/* case teams */}
                                                    <div className='relative'>
                                                        <div className={`absolute left-3 z-40 top-[-34px] whitespace-nowrap px-3 rounded-md bg-gray-700 text-white transition-transform ease-in-out duration-150 ${caseTeamHint?.id === index ? 'scale-100' : 'scale-0'}`} id='case-team-hint-txt'>
                                                            <span>lawyers</span>
                                                        </div>
                                                        <div className='relative flex items-center cursor-pointer' onMouseEnter={() => {
                                                            setCaseTeamHint({ id: index })
                                                        }}
                                                            onMouseLeave={() => {
                                                                setCaseTeamHint(null)
                                                            }}
                                                            onClick={() => {
                                                                setIsLawyerImagePopUp(true)
                                                            }}
                                                        >
                                                            <div className='w-[20px] absolute left-0 z-0 aspect-square rounded-full bg-green-600 overflow-hidden'>
                                                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                                            </div>
                                                            <div className='w-[20px] absolute left-2 z-10 aspect-square rounded-full bg-yellow-300 overflow-hidden'>
                                                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="" />
                                                            </div>
                                                            <div className='w-[20px] absolute left-4 z-20 aspect-square rounded-full bg-gray-300 flex items-center justify-center text-[.75rem] font-black'>
                                                                <span>5+</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* spacer */}
                                                    <div className='flex-grow flex items-center justify-center my-2'>
                                                        <div className='mx-auto w-[60%] h-[3px] rounded-full bg-gray-50 relative flex items-center justify-center'>
                                                            <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 h-[7px] w-[25%] rounded-full bg-inherit'></div>
                                                        </div>
                                                    </div>
                                                    {/* managers team */}
                                                    <div className='relative'>
                                                        <div className={`absolute right-3 top-[-34px] whitespace-nowrap z-30 px-3 rounded-md bg-gray-700 text-white transition-transform ease-in-out duration-150 ${managersTeamHint?.id === index ? 'scale-100' : 'scale-0'}`}>
                                                            <span>managers</span>
                                                        </div>
                                                        <div className='relative flex items-center justify-end cursor-pointer' onMouseEnter={() => {
                                                            setManagersTeamHint({ id: index, flag: 'manager' })
                                                        }}
                                                            onMouseLeave={() => {
                                                                setManagersTeamHint(null)
                                                            }}
                                                            onClick={() => {
                                                                setIsLawyerImagePopUp(true)
                                                            }}
                                                        >
                                                            <div className='w-[20px] absolute right-4 z-0 aspect-square rounded-full bg-green-600 overflow-hidden'>
                                                                <img className='w-full h-full object-center object-cover' src="https://www.shutterstock.com/image-photo/smiling-mature-man-wearing-spectacles-600nw-1432699253.jpg" alt="" />
                                                            </div>
                                                            <div className='w-[20px] absolute right-2 z-10 aspect-square rounded-full bg-red-600 overflow-hidden'>
                                                                <img className='w-full h-full object-center object-cover' src="https://static.vecteezy.com/system/resources/thumbnails/003/657/056/small/asian-woman-feeling-happy-smiling-and-looking-to-camera-while-relax-on-table-in-garden-at-home-in-the-morning-lifestyle-women-relax-at-home-concept-photo.jpg" alt="" />
                                                            </div>
                                                            <div className='w-[20px] absolute right-0 z-20 aspect-square rounded-full bg-gray-300 flex items-center justify-center text-[.75rem] font-black'>
                                                                <span>3+</span>
                                                            </div>
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

            {/* personal detail pop up  */}
            <div className={`fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 w-[400px] h-[550px] bg-white shadow-xl overflow-y-auto p-3 pt-7 transition-transform ease-in-out duration-300 ${isLawyerImagePopUp ? 'scale-100' : 'scale-0'}`}>
                {/* close btn */}
                <div className='absolute top-1 right-1 z-10 cursor-pointer w-[22px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-400' onClick={() => {
                    setIsLawyerImagePopUp(false)
                }}>
                    <MdOutlineClose />
                </div>
                {
                    [...Array(3)].map((item, index) => {
                        return (
                            <div key={index} className={`w-[350px] mx-auto mb-5 h-[500px] bg-white shadow-md rounded-sm overflow-hidden flex flex-col`} >
                                {/* header */}
                                <header className='border-b border-gray-300 relative'>
                                    {/* top */}
                                    <div className='w-full h-[50px] overflow-hidden bg-gray-300 relative z-0'></div>
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
                                                    <div className='w-[22px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
                                                        <CiChat2 />
                                                    </div>
                                                </div>
                                                <div>
                                                    <span>message</span>
                                                </div>
                                            </div>

                                            <div className='flex items-center gap-1 cursor-pointer hover:text-green-500'>
                                                <div>
                                                    <div className='w-[22px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
                                                        <CiWarning />
                                                    </div>
                                                </div>
                                                <div>
                                                    <span>report</span>
                                                </div>
                                            </div>

                                            <div className='flex items-center gap-1 cursor-pointer hover:text-green-500' onClick={() => {
                                                // setIsLawyerDetail(false)
                                            }}>
                                                <div>
                                                    <div className='w-[22px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
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
                        )
                    })
                }
            </div>

            {/* case detail pop up */}
            <div className={`fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 w-[400px] h-max bg-white shadow-2xl overflow-y-auto transition-transform ease-in-out duration-300 ${caseDetailPopup ? 'scale-100' : 'scale-0'}`}>
                <div className='border border-gray-200 rounded-md bg-white shadow-2xl'>
                    {/* header */}
                    <header className='flex items-center justify-between py-2 px-3 bg-blue-400'>
                        <div>
                            <div className='w-[42px] aspect-square flex items-center justify-center rounded-full bg-white overflow-hidden'>
                                <img
                                    className='w-[28px] object-cover object-center'
                                    src="/logoFinal.png"
                                    alt="" />
                            </div>
                        </div>
                        <div>
                            <NavLink>
                                <div className='w-[24px] aspect-square rounded-full flex items-center justify-center bg-white bg-opacity-75 hover:bg-opacity-100' onClick={()=>{
                                    setCaseDetailPopup(false)
                                }}>
                                    <AiOutlineClose className='text-lg' />
                                </div>
                            </NavLink>
                        </div>
                    </header>
                    {/* content */}
                    {/* case detail */}
                    <div className='p-3'>
                        {/* case detail */}
                        <div>
                            <div className='grid grid-cols-1 gap-3'>
                                {/* case */}
                                <div>
                                    <div className='pl-5 p-1 border border-gray-100 bg-white shadow-md'>
                                        <div>
                                            <h3 className='font-black w-max border-b border-gray-300 mb-1'>Case Category</h3>
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
                                            <h3 className='font-black w-max border-b border-gray-300 mb-1'>File Detail</h3>
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
                            <div className='my-3 mb-5'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ad inventore, aliquid sint fugit dolores laborum dolorum error ducimus atque, animi quaerat, blanditiis vel?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardMyChartActiveCaseIndex
