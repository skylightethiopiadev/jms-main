import React, { useState, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useReactTable, getCoreRowModel, flexRender, getFilteredRowModel } from '@tanstack/react-table'

// icons
import { RiSettings4Line } from "react-icons/ri";
import { CiViewBoard } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

import { CiSearch } from "react-icons/ci";



const LawyersDashboardAllPendingCases = () => {

    // states

    const [services,setServices] = useState(null) 

    const [pendingCaseData, setPendingCaseData] = useState(() => {
        return [
            {
                customer: {
                    first_name: 'Haddis',
                    last_name: 'Fanta',
                    profile: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
                },
                case_detail: {
                    case_type: 'Corporate',
                    second_type: 'Intellectual Property',
                    third_type: 'Trademark',
                    application_date: 'January 21, 2024',
                },
                services: [
                    'Assist The Creation Of Will',
                    'Liquidation',
                    'Legal Consultation',
                    'Secure Legal Documents',
                ],
            },
            {
                customer: {
                    first_name: 'Zewoditu',
                    last_name: 'Alemayehu',
                    profile: 'https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg',
                },
                case_detail: {
                    case_type: 'Civil',
                    second_type: 'Contract',
                    third_type: 'Contract of Special Movables',
                    application_date: 'September 3, 2023',
                },
                services: [
                    'Assist The Creation Of Will',
                    'Liquidation',
                    'Legal Consultation',
                    'Secure Legal Documents',
                ],
            },
            {
                customer: {
                    first_name: 'Andualem',
                    last_name: 'Chane',
                    profile: 'https://media.istockphoto.com/id/644244886/photo/portrait-of-businessman-in-office-standing-by-window.webp?b=1&s=170667a&w=0&k=20&c=g9g077LMBXXEynx8xcKeEjH6r6Q4svu5OzT5zOSzGoM=',
                },
                case_detail: {
                    case_type: 'Corporate',
                    second_type: 'Intellectual Property',
                    third_type: 'Trademark',
                    application_date: 'January 21, 2024',
                },
                services: [
                    'Assist The Creation Of Will',
                    'Liquidation',
                    'Legal Consultation',
                    'Secure Legal Documents',
                ],
            },
            {
                customer: {
                    first_name: 'Messeret',
                    last_name: 'Seeyoum',
                    profile: 'https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg',
                },
                case_detail: {
                    case_type: 'Civil',
                    second_type: 'Contract',
                    third_type: 'Contract of Special Movables',
                    application_date: 'September 3, 2023',
                },
                services: [
                    'Assist The Creation Of Will',
                    'Liquidation',
                    'Legal Consultation',
                    'Secure Legal Documents',
                ],
            },
        ]
    }, [])

    // columns 
    const pendingCaseColumns = useMemo(() => {
        return [
            {
                header: 'Customer',
                cell: ({ row }) => {
                    console.log(row?.original?.customer?.profile)
                    return (
                        <div>
                            <div className='flex items-center gap-1'>
                                <div>
                                    <div className='w-[32px] aspect-square rounded-full overflow-hidden'>
                                        <img className='w-full h-full object-center object-cover' src={row?.original?.customer?.profile} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className='mb-[-5px] font-medium'>
                                        <span>{row?.original?.customer?.first_name}</span>
                                    </div>
                                    <div className='mt-[-5px] text-xs text-gray-700'>
                                        <span>{row?.original?.customer?.last_name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: 'Case Type',
                cell: ({ row }) => {
                    console.log(row?.original?.case_detail?.case_type)
                    return (
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <span>{row?.original?.case_detail?.case_type}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: 'Case Sub Type',
                cell: ({ row }) => {
                    console.log(row?.original?.case_detail)
                    return (
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <span>{row?.original?.case_detail?.second_type}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: 'Application Date',
                cell: ({ row }) => {
                    return (
                        <div>
                            <div className='flex items-center gap-1'>
                                <CiClock2  className='text-lg text-gray-700'/>
                                <span>{row?.original?.case_detail?.application_date}</span>
                            </div>
                        </div>
                    )
                },
            },
            {
                header: 'Required Services',
                cell: ({ row }) => {
                    // console.log(row?.original?.services)
                    return (
                        <div>
                            <div className='relative'>

                                {/* services */}
                                <div className={`absolute left-0 bottom-[100%] p-3 w-max h-max bg-white shadow-xl transition-transform ease-in-out duration-300 ${services?.id === row?.index ? 'scale-0' : 'scale-0'}`}>Hello World</div>

                                <div className='w-max px-3 py-1 cursor-pointer text-blue-800' onClick={()=>{
                                    console.log(row.index)
                                    if(services?.id === row?.index){
                                        setServices(null)
                                    }else {
                                        setServices({id: row?.index})
                                    }
                                }}>
                                    <span>{row?.original?.services.length-1}+ services</span>
                                </div>
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
                            pending
                        </div>
                    )
                },
            },
        ]
    }, [])

    // tables
    const caseTeamTable = useReactTable({
        columns: pendingCaseColumns,
        data: pendingCaseData,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border bg-gray-100 rounded-md">
                {/* header */}
                <header className='flex justify-between'>
                    {/* left */}
                    <div>
                        <div>
                            <h3 className='header-level-4'>Pending Cases</h3>
                        </div>
                    </div>
                    {/* right */}
                    <div>
                        <div>
                            <button className='hover:text-blue-700 flex items-center gap-1'>
                                <RiSettings4Line />
                                <span>settings</span>
                            </button>
                        </div>
                    </div>
                </header>
                {/* content */}
                <div>
                    <p className='my-1'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, aliquid quas! Dolorum consequatur eveniet explicabo, ex et iusto nihil? Rerum libero dolorum possimus rem?
                    </p>
                    <button className='px-3 py-0.5 border border-blue-500 rounded-sm transition-colors ease-in-out duration-300 hover:bg-transparent hover:border-gray-300 hover:text-black bg-blue-500 text-white'>
                        view  all
                    </button>
                </div>
            </div>

            {/* second order container */}
            <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md mt-7">
                <header className="flex items-center justify-between py-3 border-b border-gray-300">
                    <div className='flex items-center gap-5'>
                        {/* left */}
                        <div>
                            <div className='flex items-center gap-1 border border-gray-300 rounded-full px-1'>
                                <CiSearch className='text-xl' />
                                <input
                                    type="text"
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
                                            <tr key={row.id} className='hover:bg-gray-50 border-b border-neutral-300'>
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


        </div>
    )
}

export default LawyersDashboardAllPendingCases
