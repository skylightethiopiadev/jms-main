import React, { useState, useRef } from 'react'

// icons
import { CiSearch } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const LawyerList = props => {

    // scroll reference
    let scrollReference = useRef(null)

    const [isLawyerDetailPopup,setIsLawyerDetailPopup] = useState(null)

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
                    <h3 className='font-bold text-xl'>Lawyer List</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit neque itaque quos repudiandae facere ab, deleniti ullam, corporis rem deserunt repellat voluptate laudantium cupiditate!
                    </p>
                </div>
                {/* bottom container */}
                <div className='bg-white m-1 p-2 rounded-md'>
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
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                            {
                                [...Array(12)].map((item, index) => {
                                    return (
                                        <div key={index} className='flex gap-2 p-3 relative z-0 border border-gray-300 rounded-md w-max'>
                                            {/* more btn */}
                                            <div className='absolute top-1 right-1 text-x bg-gray-100 cursor-pointer hover:bg-gray-300' onClick={()=> {
                                                setIsLawyerDetailPopup(true)
                                            }}>
                                                <IoMdMore />
                                            </div>
                                            {/* image */}
                                            <div className='w-[100px] aspect-square'>
                                                <div className='w-full h-full rounded-md overflow-hidden'>
                                                    <img className='w-full h-full object-center object-cover' src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" alt="" />
                                                </div>
                                            </div>
                                            {/* detail */}
                                            <div>
                                                {/* full name */}
                                                <div className='flex gap-1 font-semibold'>
                                                    <span>Haddis</span>
                                                    <span>Fanta</span>
                                                </div>
                                                {/* phone */}
                                                <div className='font-medium'>
                                                    <span>+251923996736</span>
                                                </div>
                                                {/* rating */}
                                                <div className='my-1'>
                                                    <div className='flex items-center gap-1 text-sm bg-green-500 w-max p-1 rounded-sm text-white'>
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStar />
                                                        <IoMdStarHalf />
                                                        <IoMdStarOutline />
                                                    </div>
                                                </div>
                                                {/* button */}
                                                <div className='mt-3'>
                                                    <div className='w-max px-6 py-[.13rem] flex items-center justify-center cursor-pointer bg-blue-600 text-white transition-colors ease-in-out duration-300 hover:bg-blue-500 rounded-sm' onClick={() => {
                                                        props?.setStepCounter(props?.stepCounter + 1);
                                                    }}>
                                                        <span>select</span>
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
            <div className={`fixed z-50 w-[300px] h-[400px] bg-red-500 rounded-md top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform ease-in-out duration-300 ${isLawyerDetailPopup ? 'scale-100' : 'scale-0'}`} onMouseLeave={()=>{
                setIsLawyerDetailPopup(null)
            }}></div>
        </div>
    )
}

export default LawyerList
