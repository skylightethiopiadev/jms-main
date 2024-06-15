import React from 'react'

// icons
import { CiMedicalCase } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";


const CustomersDashboardMyChartActiveCaseIndex = () => {

    return (
        <div className='overflow-x-hidden flex-grow p-1'>
            {/* header */}
            <header className='my-3 flex items-center justify-between'>
                {/* left */}
                <div>
                    <h3 className='header-level-4'>
                        Billing and Payment
                    </h3>
                </div>
                {/* right */}
                <div>
                    <button className='text-xs text-blue-300 hover:text-blue-700'>
                        See all (7)
                    </button>
                </div>
            </header>

            {/* cards */}
            <div className='mt-3'>
                <div className='grid grid-cols-3 gap-5'>
                    {
                        [...Array(3)].map((item, index) => {
                            return (
                                <div className='bg-white shadow-lg rounded-sm overflow-hidden p-3 relative'>
                                    {/* header */}
                                    <header className='flex items-center justify-between border-b border-gray-200 py-1'>
                                        {/* left */}
                                        <div className='flex items-center gap-1'>
                                            <div>
                                                <CiMedicalCase className='text-3xl text-blue-600' />
                                            </div>
                                            <div className='font-medium text-gray-700'>
                                                <span>
                                                    FRL237100
                                                </span>
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div>
                                            <div className='flex items-center gap-1'>
                                                <div>
                                                    <CiWarning className='text-green-500' />
                                                </div>
                                                <div className='text-xs font-bold text-gray-500'>
                                                    <span>active</span>
                                                </div>
                                            </div>
                                        </div>
                                    </header>
                                    {/* content */}
                                    <div className='flex items-center gap-5 py-10'>
                                        {/* left */}
                                        <div>
                                            <div className='w-[80px] aspect-square rounded-full overflow-hidden flex items-center justify-center border-2 border-blue-400 border-l-transparent border-t-green-500 border-b-red-600'>
                                                <div>
                                                    <div className='font-black text-blue-700 flex items-center justify-center'>
                                                        <span>75%</span>
                                                    </div>
                                                    <div className='text-xs'>
                                                        <span>covered</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div>
                                            <div className='text-xs text-gray-500'>
                                                <span>Payment Amount</span>
                                            </div>
                                            <div>
                                                <div className='flex items-center gap-1 mb-[-3px]'>
                                                    <div className='text-lg font-bold'>
                                                        <span>$1.075</span>
                                                    </div>
                                                    <div>
                                                        <IoHelpCircleOutline className='text-lg text-gray-400'/>
                                                    </div>
                                                </div>
                                                <div className='mt-[-3px] text-xs text-gray-500'>
                                                    <span>20 Oct 2024</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className='text-blue-400 hover:text-blue-600'>MAKE PAYMENT</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* footer */}
                                    <footer className='flex items-center justify-between border-t border-gray-200 py-1'>
                                        {/* left */}
                                        <div>
                                            <div className='mb-[-3px] text-xs text-gray-700'>
                                                <span>last payment</span>
                                            </div>
                                            <div className='mt-[-3px] text-xs font-black text-gray-700'>
                                                <span>$179.23</span>
                                            </div>
                                        </div>
                                        {/* right */}
                                        <div>
                                            <div className='mb-[-3px] text-xs text-gray-700'>
                                                <span>next payment</span>
                                            </div>
                                            <div className='mt-[-3px] text-xs font-black text-gray-700'>
                                                <span>$179.23</span>
                                            </div>
                                        </div>
                                    </footer>

                                    {/* left border */}
                                    <div className='absolute left-0 top-0 h-full w-[4px] bg-gradient-to-t from-blue-300 to-yellow-300'></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardMyChartActiveCaseIndex
