import React from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";


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
                            <div className='w-[22px] aspect-square rounded-full bg-gray-50 border border-gray-300 flex items-center justify-center text-xl cursor-pointer transition-colors ease-in-out duration-300 hover:bg-gray-300'>
                                <MdOutlineKeyboardArrowLeft />
                            </div>
                            <div className='w-[22px] aspect-square rounded-full bg-gray-50 border border-gray-300 flex items-center justify-center text-xl cursor-pointer transition-colors ease-in-out duration-300 hover:bg-gray-300'>
                                <MdOutlineKeyboardArrowRight />
                            </div>
                        </div>
                    </div>
                </header>
                {/* content container */}
                <div>
                    <div className='mt-3 grid grid-cols-4 gap-5'>
                        <div className='p-3'>
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
                                            <MdMoreHoriz className='text-xl'/></div></NavLink>
                                    </div>
                                </header>
                                <div>content</div>
                                <footer>footer</footer>
                            </div>
                        </div>
                        <div>One</div>
                        <div>One</div>
                        <div>One</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomersDashboardMyChartCaseTeamIndex
