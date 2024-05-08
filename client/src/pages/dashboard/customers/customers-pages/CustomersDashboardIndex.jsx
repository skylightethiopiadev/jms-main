import {NavLink} from 'react-router-dom'

// icons
import { AiOutlineClose } from "react-icons/ai";
import { VscNewFolder } from "react-icons/vsc";
import { PiStack } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import { PiBankThin } from "react-icons/pi";

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
                            <VscNewFolder className='text-2xl text-blue-900'/>
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
                {
                    [...Array(3)].map((item, index) => {
                        return (
                            <div key={index} className="border border-gray-200 rounded-md px-7 py-5">
                                <header className="flex items-center justify-between">
                                    <div>
                                        <h3 className="header-level-4">Recent</h3>
                                    </div>
                                    <div></div>
                                </header>
                                <div className="flex flex-col items-center justify-center my-1">
                                    <div className="w-[48px] h-[64px]">
                                        <img className="w-full h-full object-center object-cover" src="https://d1whtlypfis84e.cloudfront.net/guides/wp-content/uploads/2018/10/11114250/Notes.png" alt="" />
                                    </div>
                                    <div className="text-center">
                                        <p>
                                            ipsum dolor sit amet consectetur adipisicing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

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
