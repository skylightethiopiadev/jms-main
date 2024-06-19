import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { TbListDetails } from "react-icons/tb";
import { VscLayersActive } from "react-icons/vsc";
import { PiFolderOpenDuotone } from "react-icons/pi";
import { TiCancelOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { TiInputChecked } from "react-icons/ti";
import { ImBlocked } from "react-icons/im";
import { BsClipboard2Pulse } from "react-icons/bs";

const LawyersDashboardMyChartAllCasesIndex = () => {

    // states
    const [caseFilter, setCaseFilter] = useState({ on: false, text: 'All Cases' })
    const [caseData, setCaseData] = useState(() => [
        {
            customer: {
                first_name: 'Haddis',
                last_name: 'Fanta',
                profile: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718150400&semt=sph',
            },
            case_detail: {
                case_type: 'Corporate',
                file_no: 'FRKM000007369',
                started_date: 'June 12, 2023',
                end_date: 'September 23, 2024',
                place: 'Addis Ababa',
                status: 'active',
            },
        },
        {
            customer: {
                first_name: 'Mulatu',
                last_name: 'Girima',
                profile: 'https://www.shutterstock.com/image-photo/smiling-mature-man-wearing-spectacles-600nw-1432699253.jpg',
            },
            case_detail: {
                case_type: 'Criminal',
                file_no: 'KMRM000007369',
                started_date: 'February 7, 2023',
                end_date: 'August 19, 2024',
                place: 'Bahir Dar',
                status: 'pending',
            },
        },
        {
            customer: {
                first_name: 'Kalkidan',
                last_name: 'Shiferaw',
                profile: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
            },
            case_detail: {
                case_type: 'Civil',
                file_no: 'XWPQ000007369',
                started_date: 'October 27, 2023',
                end_date: 'December 3, 2024',
                place: 'Adama',
                status: 'closed',
            },
        },
        {
            customer: {
                first_name: 'Haddis',
                last_name: 'Fanta',
                profile: 'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1718150400&semt=sph',
            },
            case_detail: {
                case_type: 'Corporate',
                file_no: 'FRKM000007369',
                started_date: 'June 12, 2023',
                end_date: 'September 23, 2024',
                place: 'Addis Ababa',
                status: 'active',
            },
        },
        {
            customer: {
                first_name: 'Mulatu',
                last_name: 'Girima',
                profile: 'https://www.shutterstock.com/image-photo/smiling-mature-man-wearing-spectacles-600nw-1432699253.jpg',
            },
            case_detail: {
                case_type: 'Criminal',
                file_no: 'KMRM000007369',
                started_date: 'February 7, 2023',
                end_date: 'August 19, 2024',
                place: 'Bahir Dar',
                status: 'pending',
            },
        },
        {
            customer: {
                first_name: 'Kalkidan',
                last_name: 'Shiferaw',
                profile: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
            },
            case_detail: {
                case_type: 'Civil',
                file_no: 'XWPQ000007369',
                started_date: 'October 27, 2023',
                end_date: 'December 3, 2024',
                place: 'Adama',
                status: 'closed',
            },
        },
    ], [])

    // filters
    const [caseHint, setCaseHint] = useState(null)

    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border bg-gray-100 rounded-md">
                <header className='flex items-center justify-between'>
                    <div>
                        <div>
                            <h3 className='header-level-4'>All Cases</h3>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>

                        <div className='relative'>
                            <NavLink to={'/dashboard/lawyers/my-chart/active-cases'} onMouseEnter={() => {
                                setCaseHint('active')
                            }} onMouseLeave={() => {
                                setCaseHint(null)
                            }}>
                                <div className='text-gray-500 hover:text-blue-700'>
                                    <TiInputChecked className='text-xl' />
                                </div>
                            </NavLink>
                            <div className={`absolute right-0 bottom-[120%] px-1 rounded-sm bg-gray-700 text-white transition-transform ease-in-out duration-300 ${caseHint === 'active' ? 'scale-100' : 'scale-0'}`}>
                                <span>active</span>
                            </div>
                        </div>

                        <div className='relative'>
                            <NavLink to={'/dashboard/lawyers/pending-cases'} onMouseEnter={() => {
                                setCaseHint('pending')
                            }} onMouseLeave={() => {
                                setCaseHint(null)
                            }}>
                                <div className='text-gray-500 hover:text-blue-700'>
                                    <BsClipboard2Pulse className='text-sm' />
                                </div>
                            </NavLink>
                            <div className={`absolute right-0 bottom-[120%] px-1 rounded-sm bg-gray-700 text-white transition-transform ease-in-out duration-300 ${caseHint === 'pending' ? 'scale-100' : 'scale-0'}`}>
                                <span>pending</span>
                            </div>
                        </div>

                        <div className='relative'>
                            <NavLink to={'/dashboard/lawyers/my-chart/closed-cases'} onMouseEnter={() => {
                                setCaseHint('closed')
                            }} onMouseLeave={() => {
                                setCaseHint(null)
                            }}>
                                <div className='text-gray-500 hover:text-blue-700'>
                                    <ImBlocked className='text-sm' />
                                </div>
                            </NavLink>
                            <div className={`absolute right-0 bottom-[120%] px-1 rounded-sm bg-gray-700 text-white transition-transform ease-in-out duration-300 ${caseHint === 'closed' ? 'scale-100' : 'scale-0'}`}>
                                <span>closed</span>
                            </div>
                        </div>

                    </div>
                </header>
                {/* intro */}
                <div>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium natus soluta alias, mollitia odit facere beatae! Voluptatum beatae possimus maxime, ratione saepe illum nesciunt.
                        </p>
                    </div>
                    <div className='flex items-center gap-3 mt-1'>
                        <div>
                            <div className='flex items-center gap-1'>
                                <span className='text-gray-400'>active: </span>
                                <span className='font-black text-green-500'>64</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <span className='text-gray-400'>pending: </span>
                                <span className='font-black text-yellow-500'>21</span>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-1'>
                                <span className='text-gray-400'>closed: </span>
                                <span className='font-black text-red-600'>73</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div className="mt-10 p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border  rounded-md">
                <header className='flex items-center justify-between py-2 border-b border-gray-300'>
                    <div>
                        <div>
                            <div className='px-1 py-0.5 rounded-sm bg-yellow-400 text-white flex items-center justify-between gap-1 cursor-pointer'>
                                <MdOutlineCreateNewFolder />
                                <span>create new</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        {/* filter */}
                        <div>
                            <div className='relative'>
                                <div className='flex items-center justify-between cursor-pointer w-[120px] border border-gray-300 rounded-sm py-0.5 px-1' onClick={() => {
                                    if (caseFilter?.on) {
                                        setCaseFilter(prev => {
                                            return {
                                                ...prev,
                                                on: false,
                                            }
                                        })
                                    } else {
                                        setCaseFilter(prev => {
                                            return {
                                                ...prev,
                                                on: true,
                                            }
                                        })
                                    }
                                }}>
                                    <span>{caseFilter?.text}</span>
                                    <MdKeyboardArrowDown className={`text-xl transition-transform ease-in-out duration-300 ${caseFilter?.on ? '-rotate-180' : 'rotate-0'}`} />
                                </div>
                                {/* dropdown */}
                                <div className={`absolute right-0 top-[100%] bg-white shadow-2xl w-[120px] transition-all ease-in-out duration-300 overflow-hidden ${caseFilter?.on ? 'h-[136px]' : 'h-0'}`}>
                                    <div>
                                        {/* all cases */}
                                        <div className='px-1 py-1.5 cursor-pointer border-b border-gray-300 hover:border-gray-500' onClick={() => {
                                            setCaseFilter(prev => {
                                                return {
                                                    ...prev,
                                                    on: false,
                                                    text: 'All Case'
                                                }
                                            })
                                        }}>
                                            <span>All Cases</span>
                                        </div>
                                        <div className='px-1 py-1.5 cursor-pointer border-b border-gray-300 hover:border-gray-500' onClick={() => {
                                            setCaseFilter(prev => {
                                                return {
                                                    ...prev,
                                                    on: false,
                                                    text: 'Civil'
                                                }
                                            })
                                        }}>
                                            <span>Civil</span>
                                        </div>
                                        <div className='px-1 py-1.5 cursor-pointer border-b border-gray-300 hover:border-gray-500' onClick={() => {
                                            setCaseFilter(prev => {
                                                return {
                                                    ...prev,
                                                    on: false,
                                                    text: 'Criminal'
                                                }
                                            })
                                        }}>
                                            <span>Criminal</span>
                                        </div>
                                        <div className='px-1 py-1.5 cursor-pointer border-b border-gray-300 hover:border-gray-500' onClick={() => {
                                            setCaseFilter(prev => {
                                                return {
                                                    ...prev,
                                                    on: false,
                                                    text: 'Corporate'
                                                }
                                            })
                                        }}>
                                            <span>Corporate</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* search */}
                        <div>
                            <div className='flex items-center gap-1 px-1 border border-gray-300 rounded-sm'>
                                <CiSearch className='text-xl' />
                                <input
                                    type="text"
                                    className='focus:ring-0 focus:outline-none border-none p-0'
                                    placeholder='search' />
                            </div>
                        </div>
                        {/* buttons */}
                        <div className='flex items-center gap-3'>
                            <div className='cursor-pointer flex items-center gap-1 hover:text-blue-700 text-gray-500 border border-gray-300 rounded-sm px-1 hover:border-blue-700 transition-colors ease-in-out duration-300'>
                                <TbListDetails />
                                <span>all</span>
                            </div>
                            <div className='cursor-pointer flex items-center gap-1 hover:text-blue-700 text-gray-500 border border-gray-300 rounded-sm px-1 hover:border-blue-700 transition-colors ease-in-out duration-300'>
                                <VscLayersActive />
                                <span>active</span>
                            </div>
                            <div className='cursor-pointer flex items-center gap-1 hover:text-blue-700 text-gray-500 border border-gray-300 rounded-sm px-1 hover:border-blue-700 transition-colors ease-in-out duration-300'>
                                <PiFolderOpenDuotone />
                                <span>pending</span>
                            </div>
                            <div className='cursor-pointer flex items-center gap-1 hover:text-blue-700 text-gray-500 border border-gray-300 rounded-sm px-1 hover:border-blue-700 transition-colors ease-in-out duration-300'>
                                <TiCancelOutline />
                                <span>closed</span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* table */}
                <div className='mt-3'>
                    <table className='w-full'>
                        {/* header */}
                        <thead className='bg-gray-200 py-1'>
                            <tr>
                                <th>
                                    {/* icons */}
                                </th>
                                <th className='text-left'>
                                    <div className='py-2 font-medium'>
                                        <span>Customers</span>
                                    </div>
                                </th>
                                <th className='text-left'>
                                    <div className='py-1 font-medium'>
                                        <span>Case</span>
                                    </div>
                                </th>
                                <th className='text-left'>
                                    <div className='py-1 font-medium'>
                                        <span>File No</span>
                                    </div>
                                </th>
                                <th className='text-left'>
                                    <div className='py-1 font-medium'>
                                        <span>Started Date</span>
                                    </div>
                                </th>
                                <th className='text-left'>
                                    <div className='py-1 font-medium'>
                                        <span>End Date</span>
                                    </div>
                                </th>
                                <th className='text-left'>
                                    <div className='py-1 font-medium'>
                                        <span>Place</span>
                                    </div>
                                </th>
                                <th className='text-left'>
                                    <div className='py-1 font-medium'>
                                        <span>Status</span>
                                    </div>
                                </th>
                                <th>
                                    {/* action */}
                                </th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody>
                            {
                                caseData?.map((item, index) => {
                                    console.log(item)
                                    return (
                                        <tr className='border-b border-gray-200 hover:bg-neutral-100 hover:border-gray-300'>
                                            <td>
                                                <div className='text-lg w-[40px]'>
                                                    {
                                                        item?.case_detail?.status === 'active'
                                                            ?
                                                            <TiInputChecked className='text-green-500' />
                                                            :
                                                            item?.case_detail?.status === 'pending'
                                                                ?
                                                                <BsClipboard2Pulse className='text-yellow-400 text-sm' />
                                                                :
                                                                item?.case_detail?.status === 'closed'
                                                                    ?
                                                                    <ImBlocked className='text-red-600 text-xs' />
                                                                    :
                                                                    <></>

                                                    }
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex items-center gap-2 py-1.5'>
                                                    <div>
                                                        <div className='w-[24px] aspect-square rounded-full overflow-hidden'>
                                                            <img className='w-full h-full object-cover object-center' src={item?.customer?.profile} alt="" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='mb-[-5px]'>
                                                            <span>{item?.customer?.first_name}</span>
                                                        </div>
                                                        <div className='mt-[-5px] text-gray-700 text-xs'>
                                                            <span>{item?.customer?.last_name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div>
                                                    <span>
                                                        {item?.case_detail?.case_type}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='text-xs'>
                                                    <span>
                                                        {item?.case_detail?.file_no}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex items-center gap-1'>
                                                    <CiClock2 className='text-lg text-blue-500' />
                                                    <span>
                                                        {item?.case_detail?.started_date}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex items-center gap-1'>
                                                    <CiClock2 className='text-lg text-blue-500' />
                                                    <span>
                                                        {item?.case_detail?.end_date}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='flex items-center gap-1'>
                                                    <CiLocationOn className='text-lg text-blue-500' />
                                                    <span>
                                                        {item?.case_detail?.place}
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className={`px-1 w-[65px] flex items-center justify-center rounded-sm ${item?.case_detail?.status === 'active' ? 'bg-green-50' : item?.case_detail?.status === 'pending' ? 'bg-yellow-50' : item?.case_detail?.status === 'closed' ? 'bg-red-50' : ''}`}>
                                                    <span>{item?.case_detail?.status}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='cursor-pointer bg-neutral-200 flex items-center justify-center rounded-sm'>
                                                    <IoMdMore className='text-lg text-gray-600' />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default LawyersDashboardMyChartAllCasesIndex
