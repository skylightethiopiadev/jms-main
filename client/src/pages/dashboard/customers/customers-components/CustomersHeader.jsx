import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdPhotoCamera } from "react-icons/md";
import { VscVerifiedFilled } from "react-icons/vsc";
import { PiUserCircleGearThin } from "react-icons/pi";
import { CiLock } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const CustomersHeader = () => {
    // states
    const [isUserProfilePopUpOpen, setIsUserProfilePopUpOpen] = useState(false)

    // customers dashboard toggler
    const customersDashboardToggler = () => {
        let sideNav = document.getElementById('customers-dashboard-side-nav') 

        if (sideNav?.classList.contains('absolute')) {
            if (sideNav?.classList.contains('left-[-100vw]')) {
                sideNav?.classList.remove('left-[-100vw]')
                sideNav?.classList.add('left-0') 
            } else {
                sideNav?.classList.remove('left-0')
                sideNav?.classList.add('left-[-100vw]') 
            }
        }
    }
    return (
        <div className="h-[7vh] px-[.5%] sm:[.75%] md:[1%] lg:px-[2%] bg-white border-b border-gray-200 flex items-center justify-between">
            {/* left */}
            <div className='flex items-center gap-3'>
                {/* menu drawer */}
                <div className='xl:hidden'>
                    <div className='flex flex-col items-start justify-between gap-[5px] cursor-pointer' onClick={() => {
                        customersDashboardToggler()
                    }}>
                        <div className='w-[20px] h-[2px] rounded-full bg-blue-900' ></div>
                        <div className='w-[16px] h-[2px] rounded-full bg-yellow-400'></div>
                        <div className='w-[20px] h-[2px] rounded-full bg-blue-900'></div>
                    </div>
                </div>
                <NavLink className={'header-level-4'}>
                    <span>Dashboard</span>
                </NavLink>
            </div>
            {/* search */}
            <div className='hidden md:flex'>
                <div className='flex items-center bg-gray-100 rounded-sm px-1 py-[.13rem]'>
                    <button>
                        <CiSearch className='text-xl mr-1' />
                    </button>
                    <input className='focus:outline-none focus:ring-0 border-none bg-transparent w-full text-sm p-0' type="text" placeholder='search here' />
                </div>
            </div>
            {/* right */}
            <div className='flex items-center gap-2 sm:gap-3 md:gap-5 xl:gap-10'>
                {/* language */}
                <div>
                    <div className='flex items-center gap-1 cursor-pointer px-1 py-[.25rem] border border-transparent rounded-sm transition-colors ease-in-out duration-300 hover:border-gray-200'>
                        <div className='w-[16px] aspect-square rounded-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg" alt="" />
                        </div>
                        <div className='text-xs'>
                            <span>Eng(US)</span>
                        </div>
                        <div>
                            <MdKeyboardArrowDown className='text-lg' />
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-1 md:gap-3'>
                    {/* notification */}
                    <div>
                        <div className='relative flex items-center justify-center cursor-pointer bg-transparent transition-colors ease-in-out duration-300 hover:bg-orange-100 p-[.15rem] rounded-sm'>
                            <IoIosNotificationsOutline className='text-xl' />
                            <div className='w-[6px] aspect-square rounded-full bg-red-700 absolute top-1 right-1'></div>
                        </div>
                    </div>
                    {/* user */}
                    <div className='relative'>
                        <div className='flex items-center gap-1 cursor-pointer px-2 py-[.15rem] border border-transparent transition-colors ease-in-out duration-300 hover:border-gray-200' onClick={() => {
                            setIsUserProfilePopUpOpen(!isUserProfilePopUpOpen)
                        }}>
                            {/* image */}
                            <div className='w-[22px] aspect-square rounded-sm overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                            </div>
                            {/* name */}
                            <div className='flex items-center gap-1 text-xs'>
                                <div>
                                    <span >Haddis</span>
                                </div>

                            </div>
                            {/* icon */}
                            <div className='self-start'>
                                <MdKeyboardArrowDown className={`text-lg transition-transform ease-in-out duration-300 ${isUserProfilePopUpOpen ? '-rotate-180' : 'rotate-0'}`} />
                            </div>
                        </div>
                        {/* pop up */}
                        <div className={`absolute z-50 w-[170px]  overflow-hidden bg-transparent right-0 top-[100%] transition-all ease-in-out duration-300 ${isUserProfilePopUpOpen ? 'h-[320px]' : 'h-0'}`}>
                            <div className='mt-5 w-full h-[270px] bg-white relative border rounded-md border-gray-200 ppt-12'>
                                <div className='w-[24px] aspect-square bg-inherit rotate-45 absolute top-0 right-10 mt-[-12px] border-gray-200 border-t border-l'></div>
                                {/* user profile */}
                                <div className='flex items-center justify-center'>
                                    <div className='w-max mt-1 relative'>
                                        <div className='w-[72px] border-4 border-white shadow-lg aspect-square rounded-full overflow-hidden'>
                                            <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                        </div>
                                        {/* new profile input */}
                                        <input type="file" name="profile" id="profile" accept='image/*' hidden />
                                        <label htmlFor="profile" className='absolute left-0 top-0 w-full h-full z-40 cursor-pointer rounded-full overflow-hidden bg-transparent flex flex-col'>
                                            <div></div>
                                            <div className='flex-grow'></div>
                                            <div className='w-full flex items-center justify-center'>
                                                <MdPhotoCamera className='text-black text-xl' />
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                {/* username */}
                                <div className='mt-1'>
                                    <div className='flex items-center justify-center gap-1'>
                                        <div className='flex items-center justify-center gap1 font-medium'>
                                            <span>Haddis</span>
                                            <span>Fanta</span>
                                        </div>
                                        <div>
                                            <VscVerifiedFilled className='text-xl text-sky-500' />
                                        </div>
                                    </div>
                                </div>
                                {/* bio */}
                                <div className='px-2 py-3'>
                                    <div className='border-y border-gray-200 py-1'>
                                        <p className='text-center text-xs p-1'>
                                            dolor sit amet, consectetur adipisicing elit. Nesciunt ipsa ducimus sequi.
                                        </p>
                                    </div>
                                </div>
                                {/* btns */}
                                <div className='flex items-center gap-3 px-1'>
                                    <button className='flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-red-600'>
                                        <PiUserCircleGearThin className='text-xl' />
                                        <span className='text-xs'>profile</span>
                                    </button>
                                    <button className='flex items-center gap-1 transition-colors ease-in-out duration-300 hover:text-red-600'>
                                        <CiLock className='text-xl' />
                                        <span className='text-xs'>security</span>
                                    </button>

                                </div>
                                <button className='flex items-center gap-1 absolute right-1 bottom-2 px-2 py-[.15rem] rounded-sm bg-gray-700 text-white'>
                                    <CiLogout className='text-lg rotate-180' />
                                    <span className='text-xs'>logout</span>
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersHeader
