import React, { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { CiSearch } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { PiPhoneCallThin } from "react-icons/pi";
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const LawyerList = props => {

    // scroll reference
    let scrollReference = useRef(null)

    const [isLawyerDetailPopup, setIsLawyerDetailPopup] = useState(null)

    // location
    const [locationKey, setLocationKey] = useState(false)
    const [locationValue, setLocationValue] = useState('')
    const [locationIndex, setLocationIndex] = useState(0)
    const [locationList, setLocationList] = useState([
        "Addis Ababa",
        "Adama",
        "Assossa",
        "Bahir Dar",
        "Gambela",
        "Gonder",
        "Mekele",
        "Semera",
        "Jijiga"
    ])

    // gender
    const [genderKey, setGenderKey] = useState(false)
    const [genderValue, setGenderValue] = useState('')
    const [genderIndex, setGenderIndex] = useState(0)
    const [genderList, setGenderList] = useState([
        "All",
        "Male",
        "Female",
    ])
    // age
    const [ageKey, setAgeKey] = useState(false)
    const [ageValue, setAgeValue] = useState('')
    const [ageIndex, setAgeIndex] = useState(0)
    const [ageList, setAgeList] = useState([
        "25-30",
        "30-35",
        "35-40",
        "40-45",
        "45-50",
        "50-55",
        "55-60",
        "60-65",
        "65-70",
        ">70"
    ])



    const locationInputChangeHandler = e => {
        console.log(e.target.value)
        setLocationValue(e.target.value)
    }

    // scroll reference handler
    const scrollReferenceHandler = () => {
        scrollReference?.current.scrollIntoView({ behavior: 'smooth' })
        console.log('MOUSE ENTER')
    }

    return (
        <div className='mt-1 relative'>
            <div className='h-[65vh] overflow-y-auto'>
                {/* top container */}
                <div className='my-2 mx-1'>
                    <div className='flex items-center justify-between'>
                        <h3 className='font-bold text-xl'>Lawyer List</h3>
                        <div>
                            <div className='px-5 py-[.05rem] rounded-full bg-blue-600 transition-colors ease-in-out duration-300 hover:bg-blue-500 cursor-pointer text-white' onClick={() => {
                                props?.setStepCounter(props?.stepCounter + 1);
                            }}><span>Skip</span></div>
                        </div>
                    </div>
                    <p>
                        Welcome to our attorney selection interface. Here, we showcase a collection of esteemed legal professionals, each with expertise in distinct areas of law. Delve into the biographies to identify the legal representative who aligns with the unique requirements of your case and your individual expectations. Our service is designed to facilitate an effortless engagement with the legal counsel of your choice.
                    </p>
                </div>
                {/* bottom container */}
                <div className='bg-white m-1 p-2 rounded-md pb-10'>
                    {/* header */}
                    <header className='flex items-center justify-between py-2 border-b border-gray-300'>
                        {/* left */}
                        <div>
                            {/* search bar */}
                            <div>
                                <div className='flex items-center bg-white border border-gray-500 rounded-full px-1 py-[.15rem]'>
                                    <CiSearch className='text-xl' />
                                    <input
                                        type="text"
                                        placeholder='search lawyer'
                                        className='focus:outline-none focus:border-none border-none ring-0 focus:ring-0 bg-transparent h-[20px] text-[.875rem]'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <div>
                            <div className='flex items-center justify-end gap-5'>
                                {/* location */}
                                <div className='flex items-center gap-2'>
                                    <div>
                                        <span className='font-medium'>Location: </span>
                                    </div>
                                    <div className='relative'>
                                        <div className={`flex w-[120px] bg-white border px-1 py-[.1rem] rounded-sm  cursor-pointer ${locationKey ? 'border-blue-700' : 'border-gray-200'}`} onClick={() => {
                                            setLocationKey(!locationKey)
                                        }}>
                                            <input
                                                type="text"
                                                value={locationValue?.trim() ? locationValue : locationList[locationIndex]}
                                                // disabled={locationKey}
                                                className='focus:outline-none focus:ring-0 border-none text-[.875rem] bg-transparent p-0 cursor-pointer text-center w-full flex items-center justify-center'
                                                onChange={locationInputChangeHandler}
                                            />
                                        </div>

                                        {/* list */}
                                        <div className={`absolute right-0 top-[100%] w-[100%]  bg-transparent transition-all ease-in-out duration-300 overflow-hidden ${locationKey ? 'h-[250px]' : 'h-0'}`}>
                                            <div className={`w-full h-max max-h-[230px] overflow-y-auto bg-white border relative z-30  p-1 ${locationKey ? 'border-gray-300' : 'border-transparent'}`}>
                                                {
                                                    locationList.map((item, index) => {
                                                        return (
                                                            <div key={index} className='py-1 border-b border-gray-200 cursor-pointer whitespace-nowrap overflow-x-hidden' onClick={() => {
                                                                setLocationIndex(index)
                                                                setLocationKey(false)
                                                            }}>
                                                                <span>{item}</span>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* gender */}
                                <div className='flex items-center gap-2'>
                                    <div>
                                        <span className='font-medium'>Gender: </span>
                                    </div>
                                    <div className='relative'>
                                        <div className={`flex w-[70px] bg-white border px-1 py-[.1rem] rounded-sm  cursor-pointer ${genderKey ? 'border-blue-700' : 'border-gray-200'}`} onClick={() => {
                                            setGenderKey(!genderKey)
                                        }}>
                                            <input
                                                type="text"
                                                value={genderList[genderIndex]}
                                                // disabled={locationKey}
                                                className='focus:outline-none focus:ring-0 border-none text-[.875rem] bg-transparent p-0 cursor-pointer text-center w-full flex items-center justify-center'
                                            />
                                        </div>

                                        {/* list */}
                                        <div className={`absolute right-0 top-[100%] w-[100%]  bg-transparent transition-all ease-in-out duration-300 overflow-hidden ${genderKey ? 'h-[250px]' : 'h-0'}`}>
                                            <div className={`w-full h-max max-h-[230px] relative z-30 overflow-y-auto bg-white border  p-1 ${locationKey ? 'border-gray-300' : 'border-transparent'}`}>
                                                {
                                                    genderList.map((item, index) => {
                                                        return (
                                                            <div key={index} className='py-1 border-b border-gray-200 cursor-pointer whitespace-nowrap overflow-x-hidden' onClick={() => {
                                                                setGenderIndex(index)
                                                                setGenderKey(false)
                                                            }}>
                                                                <span>{item}</span>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* age */}
                                <div className='flex items-center gap-2'>
                                    <div>
                                        <span className='font-medium'>Age: </span>
                                    </div>
                                    <div className='relative'>
                                        <div className={`flex w-[80px] bg-white border px-1 py-[.1rem] rounded-sm  cursor-pointer ${ageKey ? 'border-blue-700' : 'border-gray-200'}`} onClick={() => {
                                            setAgeKey(!ageKey)
                                        }}>
                                            <input
                                                type="text"
                                                value={ageList[ageIndex]}
                                                // disabled={locationKey}
                                                className='focus:outline-none focus:ring-0 border-none text-[.875rem] bg-transparent p-0 cursor-pointer text-center w-full flex items-center justify-center'
                                            // onChange={locationInputChangeHandler}
                                            />
                                        </div>

                                        {/* list */}
                                        <div className={`absolute right-0 top-[100%] w-[100%]  bg-transparent transition-all ease-in-out duration-300 overflow-hidden ${ageKey ? 'h-[250px]' : 'h-0'}`}>
                                            <div className={`w-full h-max max-h-[230px] relative z-30 overflow-y-auto bg-white border  p-1 ${ageKey ? 'border-gray-300' : 'border-transparent'}`}>
                                                {
                                                    ageList.map((item, index) => {
                                                        return (
                                                            <div key={index} className='py-1 border-b border-gray-200 cursor-pointer whitespace-nowrap overflow-x-hidden' onClick={() => {
                                                                setAgeIndex(index)
                                                                setAgeKey(false)
                                                            }}>
                                                                <span>{item}</span>
                                                            </div>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* lawyer list */}
                    <div className='mt-3 h-max'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                            {
                                [...Array(15)].map((item, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-3 bg-white p-3 rounded-sm shadow-sm transition-shadow ease-in-out duration-300 hover:shadow-md border hover:border-transparent border-gray-200 cursor-pointer' onClick={() => {
                                            setIsLawyerDetailPopup(true)
                                        }}>
                                            {/* left image */}
                                            <div>
                                                <div className='w-[32px] aspect-square rounded-full overflow-hidden border-2 border-white shadow-md'>
                                                    <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                                </div>
                                            </div>
                                            {/* right */}
                                            <div>
                                                {/* full name */}
                                                <div className='flex items-center gap-1 font-medium'>
                                                    <span>Addis</span>
                                                    <span>Fenta</span>
                                                </div>
                                                {/* phone */}
                                                <div>
                                                    <span>+251923996736</span>
                                                </div>
                                                {/* cases */}
                                                <div className='font-semibold text-xs'>
                                                    <span>1.23K cases</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* scroll reference */}
                <div ref={scrollReference} />
            </div>
            {/* page navigator */}
            <div className='absolute bottom-1 z-10 left-1/2 -translate-x-1/2'>
                <div className='flex items-center justify-center gap-3 w-max px-1 py-[.15rem] rounded-sm bg-black bg-opacity-75' onMouseEnter={scrollReferenceHandler}>
                    <div className='flex items-center gap-0 cursor-pointer text-white border border-transparent px-1 rounded-sm transition-colors ease-in-out duration-300 hover:border-gray-500'>
                        <div className='flex items-center justify-center'>
                            <MdNavigateBefore className='text-xl' />
                            <span>Previous</span>
                        </div>
                    </div>
                    <div>
                        <div className='w-[24px] aspect-square rounded-full bg-white flex items-center justify-center font-bold'>
                            <span>3</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-0 cursor-pointer text-white border border-transparent px-1 rounded-sm transition-colors ease-in-out duration-300 hover:border-gray-500'>
                        <div className='flex items-center justify-center'>
                            <span>Next</span>
                            <MdNavigateNext className='text-xl' />
                        </div>
                    </div>
                </div>
            </div>
            {/* lawyer detail pop up */}
            <div className={`fixed z-50 w-[350px] h-[400px] bg-white shadow-md rounded-sm overflow-hidden top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform ease-in-out duration-300 ${isLawyerDetailPopup ? 'scale-100' : 'scale-0'} flex flex-col`} >
                {/* header */}
                <header className='border-b border-gray-300 relative'>
                    {/* close btn */}
                    <div className='absolute top-1 right-1 z-10 cursor-pointer w-[20px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-black bg-opacity-10 transition-opacity ease-in-out duration-300 hover:bg-opacity-25' onClick={() => {
                        setIsLawyerDetailPopup(false)
                    }}>
                        <MdOutlineClose />
                    </div>
                    {/* top */}
                    <div className='w-full h-[50px] overflow-hidden bg-yellow-400 relative z-0'></div>
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
                        <p className='py-1 border-y border-gray-100'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque non reprehenderit vel.
                        </p>
                    </div>

                    {/* cases handled */}
                    <div className='my-3'>
                        <div className='flex items-center justify-evenly'>
                            {/* active */}
                            <div className='px-3 py-1 rounded-sm border border-gray-100'>
                                <div className='text-xl text-green-500b'>
                                    <span>12.3k+</span>
                                </div>
                                <div className='font-bold text-green-500'>
                                    <span>active</span>
                                </div>
                            </div>
                            {/* pending */}
                            <div className='px-3 py-1 rounded-sm border border-gray-100'>
                                <div className='text-xl text-yellow-500b'>
                                    <span>12.3k+</span>
                                </div>
                                <div className='font-bold text-yellow-500'>
                                    <span>pending</span>
                                </div>
                            </div>
                            {/* active */}
                            <div className='px-3 py-1 rounded-sm border border-gray-100'>
                                <div className='text-xl text-red-600b'>
                                    <span>12.3k+</span>
                                </div>
                                <div className='font-bold text-red-600'>
                                    <span>closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* address detail */}
                    <div className='h-[130px] flex gap-2 py-2'>
                        <div className='w-full relative'>
                            {/* address */}
                            <h3 className='font-bold w-full py-1 border-b border-gray-300'>Address/Contact Detail</h3>
                            {/* address */}
                            <div>
                                {/* phone */}
                                <div className='flex items-center gap-1 py-1 cursor-pointer'>
                                    <div>
                                        <FaPhone className='text-gray-400' />
                                    </div>
                                    <div>
                                        <span>+251923996736</span>
                                    </div>
                                </div>
                                {/* email */}
                                <div className='flex items-center gap-1 py-1 cursor-pointer'>
                                    <div>
                                        <MdEmail className='text-gray-400 text-lg' />
                                    </div>
                                    <div>
                                        <span>haddisfun7@gmail.com</span>
                                    </div>
                                </div>
                                {/* phone */}
                                <div className='flex items-center gap-1 py-1 cursor-pointer'>
                                    <div>
                                        <MdLocationPin className='text-gray-400 text-lg' />
                                    </div>
                                    <div>
                                        <span>Addis Ababa, Ethiopia</span>
                                    </div>
                                </div>

                                {/* select btn */}
                                <div className='absolute bottom-1 right-1'>
                                    <div className='flex items-center justify-center px-3 py-1 rounded-sm bg-blue-700 text-white cursor-pointer transition-colors ease-in-out duration-300 hover:bg-blue-600' onClick={() => {
                                        props?.setStepCounter(props?.stepCounter + 1);
                                    }}>
                                        <span>select</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LawyerList
