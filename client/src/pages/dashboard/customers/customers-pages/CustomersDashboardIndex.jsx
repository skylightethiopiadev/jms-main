import { NavLink } from 'react-router-dom'

// icons
import { AiOutlineClose } from "react-icons/ai";
import { VscNewFolder } from "react-icons/vsc";
import { PiStack } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import { PiBankThin } from "react-icons/pi";
import { MdChevronRight } from "react-icons/md";
import { GiAlarmClock } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";

const CustomersDashboardIndex = () => {
    return (
        <div>
            {/* first order container */}
            <div className="p-[3%] border-gray-200 border bg-gray-100 rounded-md">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4">Start with template</h3>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <button className="py-[.15rem] px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200">Browse Templates</button>
                        <button className="py-1 flex items-center justify-center px-2 rounded-sm transition-colors ease-in-out duration-300 hover:bg-gray-200">
                            <AiOutlineClose />
                        </button>
                    </div>
                </header>
                {/* cards container */}
                <div className="mt-2 grid grid-cols-4 gap-3">

                    {/* first card */}
                    <NavLink className="flex gap-3 bg-white px-3 py-2 rounded-md border border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-pointer">
                        <div className="w-[48px] bg-yellow-100 flex items-center justify-center aspect-square rounded-md overflow-hidden">
                            <VscNewFolder className='text-2xl text-blue-900' />
                        </div>
                        <div>
                            <h3 className="font-semibold">New Case</h3>
                            <p>
                                Start New Case
                            </p>
                        </div>
                    </NavLink>

                    {/* second card */}
                    <NavLink className="flex gap-3 bg-white px-3 py-2 rounded-md border border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-pointer">
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
            <div className="mt-7 grid grid-cols-3 gap-5">

                {/* first card */}
                <div className="border border-gray-200 rounded-md px-7 py-5">
                    <header className="flex items-center justify-between">
                        <div>
                            <h3 className="header-level-4">Next Appointment</h3>
                        </div>
                        <div></div>
                    </header>
                    <div className='h-[85%] w-full p-1 bg-gray-100k relative rounded-md'>
                        <div className='pb-3'>
                            <div>
                                <span>Case: </span>
                                <span className='font-semibold'>Criminal</span>
                            </div>
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
                        <div className='absolute bottom-0 right-20'>
                            <div className='text-5xl'>
                                <GiAlarmClock />
                            </div>
                            <div className='absolute right-0 top-1/2 -translate-y-1/2 mr-[-64px] flex items-center justify-center rounded-full bg-purple-700 text-white font-bold px-2 py-[.1rem]'>
                                <span>07:45am</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className="border border-gray-200 rounded-md px-7 py-5">
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
                            <div className='flex flex-col items-center justify-between gap-5 p-[.13rem] rounded-full bg-gray-700 text-white'>
                                <div>
                                    <div>t</div>
                                </div>
                                <div>
                                    <div className='bg-emerald-700 text-white flex items-center justify-center rounded-full overflow-hidden p-[.1rem] w-[20px] aspect-square'><span className='text-sm font-medium'>12</span></div>
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
                <div className="border border-gray-200 rounded-md px-7 py-5">
                    <header className="flex items-center justify-between">
                        <div>
                            <h3 className="header-level-4">Balance</h3>
                        </div>
                        <div></div>
                    </header>
                    <div>
                        <header className='flex items-center justify-between'>
                            <div>
                                <h3 className='font-medium'>Expense Analysis</h3>
                            </div>
                            <div>
                                <div className='flex items-center gap-1 cursor-pointer border border-gray-100 px-2 rounded-full transition-colors ease-in-out duration-150 hover:border-gray-300'>
                                    <div><span>Sep</span></div>
                                    <div>
                                        <MdKeyboardArrowDown className={`text-xl`}/>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div className='text-sm'>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center w-[115px]'><span>current balance</span></div>
                                <div className='w-[90px] h-[4px] bg-transparent rounded-full'>
                                    <div className='w-full h-full rounded-full bg-green-400'></div>
                                </div>
                                <div className='flex items-center font-medium'><span>$21,328</span></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center w-[115px]'><span>total spent</span></div>
                                <div className='w-[90px] h-[4px] bg-transparent rounded-full'>
                                    <div className='h-full w-[65%] rounded-full bg-red-500'></div>
                                </div>
                                <div className='flex items-center font-medium'><span>$21,328</span></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center w-[115px]'><span>utility</span></div>
                                <div className='w-[90px] h-[4px] bg-transparent rounded-full'>
                                    <div className='w-[85%] h-full bg-yellow-400 rounded-full'></div>
                                </div>
                                <div className='flex items-center font-medium'><span>$21,328</span></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='flex items-center w-[115px]'><span>total refund</span></div>
                                <div className='w-[90px] h-[4px] bg-transparent rounded-full'>
                                    <div className='w-[50%] h-full rounded-full bg-blue-600'></div>
                                </div>
                                <div className='flex items-center font-medium'><span>$21,328</span></div>
                            </div>
                        </div>
                        <div className='mt-2 flex items-center gap-3'>
                            <button className='px-1 py-[.1rem] rounded-sm bg-yellow-400 text-white transition-colors ease-in-out duration-150 hover:bg-yellow-300'>Add fund</button>
                            <button className='px-1 py-[.1rem] rounded-sm bg-yellow-400 text-white transition-colors ease-in-out duration-150 hover:bg-yellow-300'>Withdraw funds</button>
                        </div>
                    </div>
                </div>

            </div>

            {/* third order container */}
            <div className="mt-7 px-[3%] py-[2%] rounded-md border border-gray-200">
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4 whitespace-nowrap">Create first wiki</h3>
                    </div>
                    <div>
                        <p className="text-xs text-gray-600">
                            use wikis to organize information, and prioritize it as results when you ask AI.  you can <span className="underline transition-colors ease-in-out duration-300 hover:text-black cursor-pointer">create a new wiki</span> or <span className="underline transition-colors ease-in-out duration-300 hover:text-black cursor-pointer">import from confluence</span>.
                        </p>
                    </div>
                </header>
                <div className="mt-4 grid grid-cols-4 gap-3">
                    {
                        [...Array(4)].map((item, index) => {
                            return (

                                <div key={index} className="flex gap-3 bg-white px-3 py-2 rounded-md border border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-pointer">
                                    <div className="w-[48px] bg-pink-700 aspect-square rounded-md overflow-hidden">
                                        <img className="w-full opacity-90 h-full object-center object-cover" src="https://i0.wp.com/lbcommuter.com/wp-content/uploads/2023/01/22874414_6682385.jpg?fit=1024%2C1024&ssl=1" alt="" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Project Plan</h3>
                                        <p>
                                            create a project plan
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>

        </div>
    )
}

export default CustomersDashboardIndex
