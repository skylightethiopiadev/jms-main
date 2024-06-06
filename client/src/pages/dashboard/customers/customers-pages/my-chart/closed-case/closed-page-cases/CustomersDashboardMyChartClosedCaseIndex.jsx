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


const CustomersDashboardMyChartClosedCaseIndex = () => {

    const [isLawyerImagePopUp, setIsLawyerImagePopUp] = useState(false)
    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border bg-gray-100 rounded-md">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4">Closed Case Histories</h3>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <NavLink className="py-[.15rem] px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200">active case</NavLink>
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
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-7">
                <header className="flex items-center justify-between pb-2">
                    <div>
                        <h3 className="header-level-4">Closed Cases</h3>
                    </div>
                </header>
                {/* content container */}
                <div>
                    {/* active case grid */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {/* grid-items */}
                        {
                            [...Array(4)].map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='border border-gray-200 rounded-md bg-white shadow-md'>
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
                                                        <div className='hover:bg-gray-100'>
                                                            <IoMdMore className='text-xl' />
                                                        </div>
                                                    </NavLink>
                                                </div>
                                            </header>
                                            {/* content */}
                                            {/* case detail */}
                                            <div className='p-3'>
                                                {/* case detail */}
                                                <div>
                                                    <div className='grid grid-cols-2 gap-3'>
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
                                            {/* lawyer and case manager detail */}
                                            <div className='flex gap-3 md:gap-5 my-3 px-3'>
                                                {/* lawyer */}
                                                <div>
                                                    <div className='flex items-center cursor-pointer' onClick={() => {
                                                        setIsLawyerImagePopUp(true)
                                                    }}>
                                                        <div className='relative flex items-center'>
                                                            <div className='absolute left-0 z-0 w-[22px] aspect-square rounded-full overflow-hidden'>
                                                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg" alt="" />
                                                            </div>
                                                            <div className='absolute left-3 z-10 w-[22px] aspect-square rounded-full overflow-hidden'>
                                                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                                            </div>
                                                            <div className='absolute left-6 z-20 w-[22px] aspect-square rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-xs font-bold'>
                                                                <span>5+</span>
                                                            </div>
                                                        </div>
                                                        <div className='ml-[50px]'>
                                                            <span>case lawyers</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* managers */}
                                                <div>
                                                    <div className='flex items-center cursor-pointer' onClick={() => {
                                                        setIsLawyerImagePopUp(true)
                                                    }}>
                                                        <div className='relative flex items-center'>
                                                            <div className='absolute left-0 z-0 w-[22px] aspect-square rounded-full overflow-hidden'>
                                                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg" alt="" />
                                                            </div>
                                                            <div className='absolute left-3 z-10 w-[22px] aspect-square rounded-full overflow-hidden'>
                                                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                                            </div>
                                                            <div className='absolute left-6 z-20 w-[22px] aspect-square rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-xs font-bold'>
                                                                <span>3+</span>
                                                            </div>
                                                        </div>
                                                        <div className='ml-[50px]'>
                                                            <span>case managers</span>
                                                        </div>
                                                    </div>
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
        </div>
    )
}

export default CustomersDashboardMyChartClosedCaseIndex
