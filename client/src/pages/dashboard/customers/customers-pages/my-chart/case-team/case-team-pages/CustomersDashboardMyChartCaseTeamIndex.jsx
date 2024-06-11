import React, { useState, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel } from '@tanstack/react-table'
import Chart from 'react-apexcharts'


// icons
import { AiOutlineClose } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";

import { PiPhoneCallThin } from "react-icons/pi";
import { CiChat2 } from "react-icons/ci";
import { CiWarning } from "react-icons/ci";
import { CiViewBoard } from "react-icons/ci";

import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";



const CustomersDashboardMyChartCaseTeamIndex = () => {

    const [isLawyerDetail, setIsLawyerDetail] = useState(false)
    const [filtering, setFiltering] = useState('')

    // states
    const [caseTeamData, setCaseTeamData] = useState(() => {
        return [
            {
                lawyers: [
                    {
                        first_name: 'Haddis',
                        last_name: 'Fanta',
                        profile: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
                    },
                    {
                        first_name: 'Haddis',
                        last_name: 'Fanta',
                        profile: 'https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg',
                    },
                ],
                caseType: 'Civil',
                startedDate: 'September 21, 2023',
                endDate: 'January 23, 2024',
                status: 'closed',
            },
            {
                lawyers: [
                    {
                        first_name: 'Haddis',
                        last_name: 'Fanta',
                        profile: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
                    },
                    {
                        first_name: 'Haddis',
                        last_name: 'Fanta',
                        profile: 'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg',
                    },
                ],
                caseType: 'Corporate',
                startedDate: 'September 21, 2023',
                endDate: 'January 23, 2024',
                status: 'pending',
            },
            {
                lawyers: [
                    {
                        first_name: 'Haddis',
                        last_name: 'Fanta',
                        profile: 'https://www.shutterstock.com/image-photo/smiling-mature-man-wearing-spectacles-600nw-1432699253.jpg',
                    },
                    {
                        first_name: 'Haddis',
                        last_name: 'Fanta',
                        profile: 'https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?cs=srgb&dl=pexels-pixabay-247322.jpg&fm=jpg',
                    },
                ],
                caseType: 'Criminal',
                startedDate: 'September 21, 2023',
                endDate: 'January 23, 2024',
                status: 'active',
            },
        ]
    }, [])

    // columns 
    const caseTeamColumns = useMemo(() => {
        return [
            {
                header: 'Teams',
                cell: ({ row }) => {
                    return (
                        <div>
                            <div className='flex items-center gap-2'>
                                {
                                    row?.original?.lawyers.map((lawyer) => {
                                        return (
                                            <div>
                                                <div className='w-[24px] aspect-square rounded-full overflow-hidden'>
                                                    <img className='w-full h-full object-center object-cover' src={lawyer.profile} alt="" />
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div>
                                    <div className='w-[26px] aspect-square rounded-full flex items-center justify-center text-xs font-black text-gray-700 border-2 border-white shadow-lg bg-white'>
                                        <span>+3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: 'Case',
                cell: ({ row }) => {
                    console.log(row?.original?.caseType)
                    return (
                        <div>
                            <div className='font-medium text-gray-700'>
                                <span>{row?.original?.caseType}</span>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: 'Started Date',
                cell: ({ row }) => {
                    return (
                        <div>
                            <div>
                                <span>{row?.original?.startedDate}</span>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: 'End Date',
                cell: ({ row }) => {
                    return (
                        <div>
                            <div>
                                <span>{row?.original?.endDate}</span>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: 'Status',
                cell: ({ row }) => {
                    console.log(row?.original?.status)
                    return (
                        <div>
                            <div className={`w-max px-2 rounded-sm bg-opacity-45 ${row?.original?.status === 'closed' ? 'bg-red-200' : row?.original?.status === 'active' ? 'bg-green-200' : row?.original?.status === 'pending' ? 'bg-yellow-100' : ''}`}>
                                <span>{row?.original?.status}</span>
                            </div>
                        </div>
                    )
                },
            },
        ]
    }, [])

    // tables
    const caseTeamTable = useReactTable({
        columns: caseTeamColumns,
        data: caseTeamData,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            filtering: filtering,
        }
    })

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
                <header className="flex items-center justify-between py-3 border-b border-gray-300">
                    <div className='flex items-center gap-5'>
                        {/* left */}
                        <div>
                            <h3 className='font-bold'>CASE TEAMS</h3>
                        </div>
                        {/* right */}
                        <div>
                            <div className='flex items-center gap-1 border border-gray-300 rounded-full px-1'>
                                <CiSearch className='text-xl' />
                                <input
                                    type="text"
                                    value={filtering}
                                    onChange={e => {
                                        setFiltering(e.target.value)
                                    }}
                                    className='p-0 focus:outline-none focus:ring-0 border-none bg-transparent'
                                    placeholder='search' />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <div className='flex items-center justify-end gap-3'>
                            <NavLink>
                                <div className='flex items-center gap-1 hover:text-blue-700'>
                                    <CiViewBoard className='text-lg' />
                                    <div>
                                        <span>view all</span>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </header>
                {/* content container */}
                <div>
                    {/* table */}
                    <div className='mt-5 w-full'>
                        <table className='w-full'>
                            <thead>
                                {
                                    caseTeamTable.getHeaderGroups().map(headerGroup => {
                                        return (
                                            <tr key={headerGroup.id} className='bg-gray-200 '>
                                                {
                                                    headerGroup.headers.map(header => {
                                                        return (
                                                            <th key={header.id} className='text-left p-2 cursor-pointer hover:bg-gray-300'>
                                                                {
                                                                    flexRender(
                                                                        header.column.columnDef.header,
                                                                        header.getContext()
                                                                    )
                                                                }
                                                            </th>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </thead>
                            <tbody>
                                {
                                    caseTeamTable.getRowModel().rows.map(row => {
                                        return (
                                            <tr key={row.id} className='hover:bg-gray-50 border-b border-neutral-100' onClick={() => {
                                                setIsLawyerDetail(true)
                                            }}>
                                                {
                                                    row.getVisibleCells().map(cell => {
                                                        return (
                                                            <td key={cell.id} className='p-2'>
                                                                {
                                                                    flexRender(
                                                                        cell.column.columnDef.cell,
                                                                        cell.getContext()
                                                                    )
                                                                }
                                                            </td>
                                                        )
                                                    })
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* third  order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-7">
                <div className='flex gap-3 flex-col md:flex-row'>
                    <div className='w-[100%] md:w-[35%] bg-gray-50'>
                        <Chart
                            type='line'
                            width={'100%'}
                            height={'100%'}
                            series={[
                                {
                                    name: 'active',
                                    data: [5, 23, 24, 4, 12, 28, 11, 13, 7, 30],
                                },
                                {
                                    name: 'pending',
                                    data: [20, 24, 12, 10, 27, 11, 19, 9, 26, 16],
                                },
                                {
                                    name: 'closed',
                                    data: [11, 3, 17, 9, 22, 28, 14, 33, 19, 20],
                                },
                            ]}

                            options={{
                                chart: {
                                    toolbar: {
                                        show: false
                                    },
                                    zoom: {
                                        enabled: false
                                    },

                                },
                                stroke: {
                                    curve: 'smooth',
                                    width: 1,
                                },
                                colors: ['#0bde7b', '#f5b907', '#cf0430'],
                                subtitle: {
                                    text: 'case history',
                                    align: 'center',
                                    style: {
                                        fontSize: 14,
                                        fontWeight: 600
                                    }
                                },
                                grid: {
                                    xaxis: {
                                        lines: {
                                            show: false,
                                        }
                                    },
                                    yaxis: {
                                        lines: {
                                            show: false
                                        }
                                    }
                                },
                                xaxis: {
                                    labels: {
                                        show: false
                                    },
                                    axisBorder: {
                                        show: false
                                    },
                                    axisTicks: {
                                        show: false
                                    }
                                },
                                yaxis: {
                                    labels: {
                                        show: false
                                    }
                                }

                            }}
                        />
                    </div>
                    <div className='w-[100%] md:w-[65%] border border-gray-200 p-3 rounded-md'>
                        {/* header */}
                        <header className='flex items-center justify-between pb-1 border-b border-gray-200'>
                            <div>
                                <h3 className='header-level-4'>Case Managers</h3>
                            </div>
                            <div>
                                <div>
                                    <NavLink>
                                        <div className='flex items-center gap-1 hover:text-blue-700'>
                                            <CiViewBoard className='text-lg' />
                                            <div>
                                                <span>view all</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </header>
                        <div className='mt-5'>
                            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
                                {
                                    [...Array(4)].map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <div className='p-1 border border-gray-300 rounded-sm'>
                                                    <header className='flex items-center justify-between'>
                                                        <div>
                                                            <div className='w-[24px] aspect-square rounded-full overflow-hidden bg-yellow-400 mt-[-24px]'>
                                                                <img className='w-full h-full object-center object-cover' src="https://t4.ftcdn.net/jpg/03/25/73/59/360_F_325735908_TkxHU7okor9CTWHBhkGfdRumONWfIDEb.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <NavLink>
                                                                    <div className='pxd-1 text-xl bg-gray-50 hover:bg-gray-200'>
                                                                        <MdMoreHoriz />
                                                                    </div>
                                                                </NavLink>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <div>
                                                        <div className='font-medium flex items-center gap-1'>
                                                            <span>Haddis</span>
                                                            <span>F.</span>
                                                        </div>
                                                        <div className='mt-[-5px] text-xs'>
                                                            <span>0923996736</span>
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
                </div>
            </div>

            {/* lawyer detail pop up */}
            <div className={`fixed z-50 w-[350px] h-[500px] bg-white shadow-2xl rounded-sm overflow-hidden top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-transform ease-in-out duration-300 ${isLawyerDetail ? 'scale-100' : 'scale-0'} flex flex-col`} >
                {/* header */}
                <header className='border-b border-gray-300 relative'>
                    {/* close btn */}
                    <div className='absolute top-1 right-1 z-10 cursor-pointer w-[20px] aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-200 transition-colors ease-in-out duration-300 hover:bg-gray-100' onClick={() => {
                        setIsLawyerDetail(false)
                    }}>
                        <MdOutlineClose />
                    </div>
                    {/* top */}
                    <div className='w-full h-[50px] overflow-hidden bg-gray-300 relative z-0'></div>
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
                        <p className='py-1 border-b border-gray-300'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque non reprehenderit vel.
                        </p>
                    </div>

                    {/* detail */}
                    <div className='p-5'>
                        <div>
                            <h3 className='font-bold'>Personal Detail</h3>
                        </div>
                        <div className='py-1 border-l border-green-500'>
                            {/* name */}
                            <div>
                                <header className='flex items-center gap-2 pt-3'>
                                    <div className='ml-[-8px]'>
                                        <div className='w-[14px] aspect-square border-2 border-green-500 rounded-full bg-white'></div>
                                    </div>
                                    <div className='font-black'>
                                        <span>Name</span>
                                    </div>
                                </header>
                                <div className='ml-4'>
                                    <div className='flex gap-5'>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>First</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Haddis</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Middle</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Fanta</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Last</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Shiferaw</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* contact */}
                            <div>
                                <header className='flex items-center gap-2 pt-3'>
                                    <div className='ml-[-8px]'>
                                        <div className='w-[14px] aspect-square border-2 border-green-500 rounded-full bg-white'></div>
                                    </div>
                                    <div className='font-black'>
                                        <span>Contact</span>
                                    </div>
                                </header>
                                <div className='ml-4'>
                                    <div className='flex gap-5'>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Phone</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>+251923996736</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Email</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>haddisfun@gmail.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* address */}
                            <div>
                                <header className='flex items-center gap-2 pt-3'>
                                    <div className='ml-[-8px]'>
                                        <div className='w-[14px] aspect-square border-2 border-green-500 rounded-full bg-white'></div>
                                    </div>
                                    <div className='font-black'>
                                        <span>Address</span>
                                    </div>
                                </header>
                                <div className='ml-4'>
                                    <div className='flex gap-5'>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Country</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Ethiopia</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>Region</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Amhara</span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='font-semibold'>
                                                <span>City</span>
                                            </div>
                                            <div className='mt-[-5px]'>
                                                <span>Bahir Dar</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* footer */}
                    <footer>
                        <div className='flex items-center gap-5'>
                            <div className='flex items-center gap-1 cursor-pointer hover:text-green-500'>
                                <div>
                                    <div className='w-[22px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
                                        <CiChat2 />
                                    </div>
                                </div>
                                <div>
                                    <span>message</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer hover:text-green-500'>
                                <div>
                                    <div className='w-[22px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
                                        <CiWarning />
                                    </div>
                                </div>
                                <div>
                                    <span>report</span>
                                </div>
                            </div>

                            <div className='flex items-center gap-1 cursor-pointer hover:text-green-500' onClick={() => {
                                setIsLawyerDetail(false)
                            }}>
                                <div>
                                    <div className='w-[22px] aspect-square flex items-center justify-center border border-gray-300 rounded-full'>
                                        <IoCloseOutline />
                                    </div>
                                </div>
                                <div>
                                    <span>close</span>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardMyChartCaseTeamIndex
