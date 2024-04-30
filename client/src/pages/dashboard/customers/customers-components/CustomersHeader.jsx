import { NavLink } from 'react-router-dom'

// icons
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";

const CustomersHeader = () => {
    return (
        <div className="h-[7vh] px-[2%] bg-white border-b border-gray-200 flex items-center justify-between">
            {/* left */}
            <div>
                <NavLink className={'header-level-4'}>
                    <span>Dashboard</span>
                </NavLink>
            </div>
            {/* search */}
            <div>
                <div className='flex items-center bg-gray-100 rounded-sm px-1 py-[.13rem]'>
                    <button>
                        <CiSearch className='text-xl mr-1' />
                    </button>
                    <input className='focus:outline-none focus:ring-0 border-none bg-transparent w-full text-sm p-0' type="text" placeholder='search here' />
                </div>
            </div>
            {/* right */}
            <div className='flex items-center gap-10'>
                {/* language */}
                <div>
                    <div className='flex items-center gap-1 cursor-pointer px-1 py-[.13rem] border border-transparent rounded-sm transition-colors ease-in-out duration-300 hover:border-gray-200'>
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
                <div className='flex items-center gap-3'>
                    {/* notification */}
                    <div>
                        <div className='relative flex items-center justify-center cursor-pointer bg-transparent transition-colors ease-in-out duration-300 hover:bg-orange-100 p-[.15rem] rounded-sm'>
                            <IoIosNotificationsOutline className='text-xl' />
                            <div className='w-[6px] aspect-square rounded-full bg-red-700 absolute top-1 right-1'></div>
                        </div>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer px-2 border border-transparent transition-colors ease-in-out duration-300 hover:border-gray-200'>
                        {/* image */}
                        <div className='w-[22px] aspect-square rounded-sm overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                        </div>
                        {/* name */}
                        <div className='flex flex-col text-xs'>
                            <div>
                                <span className='font-semibold'>First</span>
                            </div>
                            <div className='mt-[-5px]'>Last</div>
                        </div>
                        {/* icon */}
                        <div className='self-start ml-'>
                            <MdKeyboardArrowDown className='text-lg'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersHeader
