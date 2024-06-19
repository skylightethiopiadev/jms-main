import { NavLink } from 'react-router-dom'
import Chart from 'react-apexcharts'
// icons
import { BsBoxArrowUpRight } from "react-icons/bs";

const CustomersDashboardOnRequestList = () => {
    return (
        <div>
            {/* first order container */}
            <div className="w-full rounded-md bg-gray-100 border border-gray-200 mb-7">
                <div className="p-5">
                    <header className="flex items-center justify-between">
                        <h3 className="header-level-4">Makuta Law Firm</h3>
                        <div>
                            <div className="cursor-pointer flex items-center justify-end gap-1 transition-colors ease-in-out duration-150 hover:text-blue-700">
                                <BsBoxArrowUpRight />
                                <div>
                                    <span>start a new case</span>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="flex mt-3">
                        <div className="w-[95%]">
                            <div className="">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit placeat et esse vero maiores illo voluptatem voluptas quaerat pariatur animi, reprehenderit distinctio. Labore, laboriosam?
                                </p>
                            </div>
                            <div className="mt-3">
                                <button className="px-3 py-1 rounded-sm bg-black text-white transition-colors ease-in-out duration-300 hover:bg-gray-800">Get Access</button>
                            </div>
                        </div>
                        <div className="w-[5%]"></div>
                    </div>
                </div>
            </div>
            {/* second order container */}
            <div className="rounded-md border border-gray-200">
                <div className="p-5">
                    <header className="flex items-center justify-between">
                        <div>
                            <h3 className="header-level-4">Pending Cases</h3>
                        </div>
                        <div>
                            <div className="cursor-pointer flex items-center justify-end gap-1 transition-colors ease-in-out duration-150 hover:text-blue-700">
                                <BsBoxArrowUpRight />
                                <div>
                                    <span>view all</span>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/* table */}
                    <div className="mt-3">
                        {/* table header */}
                        <header className="grid grid-cols-4 bg-gray-200 rounded-t-md p-2 w">
                            <div>
                                <h3 className="font-semibold">ID</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">TYPE</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">CREATED AT</h3>
                            </div>
                            <div>
                                <h3 className="font-semibold">STATUS</h3>
                            </div>
                        </header>
                        {
                            [...Array(7)].map((item, index) => {
                                return (
                                    <NavLink to={'/dashboard/customers/compliance/on-request/detail'} key={index} className="grid grid-cols-4 mt-2 p-2 bg-white border-b border-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100 cursor-default">
                                        <div>
                                            <span>CVI--2024-04-01000002</span>
                                        </div>
                                        <div>
                                            <span>Succession</span>
                                        </div>
                                        <div>
                                            <span>3 month ago</span>
                                        </div>
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <span>Pending</span>
                                            </div>
                                            <div>
                                                <button className='transition-colors ease-in-out duration-300 hover:text-blue-700'>
                                                    <BsBoxArrowUpRight />
                                                </button>
                                            </div>
                                        </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default CustomersDashboardOnRequestList
