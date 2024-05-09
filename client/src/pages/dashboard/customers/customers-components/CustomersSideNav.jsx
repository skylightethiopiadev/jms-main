import { NavLink } from 'react-router-dom'
import { useState } from 'react';
// icons
import { HiOutlineHome } from "react-icons/hi2";
import { BsInbox } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import { PiVideoLight } from "react-icons/pi";
import { CiClock1 } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiImageOn } from "react-icons/ci";
import { PiFileAudioLight } from "react-icons/pi";
import { CiVideoOn } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";
import { CiMedicalCase } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import { IoSettingsOutline } from "react-icons/io5";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";

import { IoIosAddCircleOutline } from "react-icons/io";
import { CiSquareQuestion } from "react-icons/ci";
import { TfiLoop } from "react-icons/tfi";
import { VscArrowSwap } from "react-icons/vsc";
import { LuGraduationCap } from "react-icons/lu";
import { CiRollingSuitcase } from "react-icons/ci";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { VscLayersActive } from "react-icons/vsc";
import { HiOutlineLockClosed } from "react-icons/hi";
import { VscNewFolder } from "react-icons/vsc";
import { CiViewTable } from "react-icons/ci";

import { MdKeyboardArrowDown } from "react-icons/md";

const CustomersSideNav = () => {
    const [activeLink, setActiveLink] = useState({
        icon: RxDashboard,
        title: 'Dashboard',
        path: '#',
    })
    const [subLinks, setSubLinks] = useState(null)
    const [activeSubLink, setActiveSubLink] = useState(null)

    // link items
    const linkItems = [
        {
            icon: RxDashboard,
            title: 'Dashboard',
            path: '#',
        },
        {
            icon: CiMedicalCase,
            title: 'Compliance',
            path: '#',
            height: '',
            subLinkItems: [
                {
                    icon: VscNewFolder,
                    title: 'New Case',
                    path: '#',
                },
                {
                    icon: CiViewTable,
                    title: 'On Request',
                    path: '#',
                },

            ]
        },
        {
            icon: HiOutlineDocumentChartBar,
            title: 'My Chart',
            path: '#',
            height: '',
            subLinkItems: [
                {
                    icon: MdOutlineSupervisorAccount,
                    title: 'Case Team',
                    path: '#',
                },
                {
                    icon: VscLayersActive,
                    title: 'Active Case',
                    path: '#',
                },
                {
                    icon: HiOutlineLockClosed,
                    title: 'Closed Case',
                    path: '#',
                },
            ]
        },
        {
            icon: CiChat1,
            title: 'Message',
            path: '#',
        },
        {
            icon: CiClock1,
            title: 'Appointment',
            path: '#',

        },
        {
            icon: CiDollar,
            title: 'Finance',
            path: '#',
            height: '',
            subLinkItems: [
                {
                    icon: IoIosAddCircleOutline,
                    title: 'Add Funds',
                    path: '#',
                },
                {
                    icon: CiSquareQuestion,
                    title: 'Requested Payment',
                    path: '#',
                },
                {
                    icon: TfiLoop,
                    title: 'Refund Funds',
                    path: '#',
                },
                {
                    icon: VscArrowSwap,
                    title: 'Recent Transactions',
                    path: '#',
                },
            ]
        },
        {
            icon: CiCircleMore,
            title: 'Other Services',
            path: '#',
            height: '',
            subLinkItems: [
                {
                    icon: LuGraduationCap,
                    title: 'Training',
                    path: '#',
                },
                {
                    icon: CiRollingSuitcase,
                    title: 'Consulting',
                    path: '#',
                },
                {
                    icon: IoDocumentTextOutline,
                    title: 'Research',
                    path: '#',
                },

            ]
        },
    ]
    return (
        <div className="w-[180px] min-w-[180px] bg-gray-100 border-r border-gray-200 pr-3">
            <div className="w-full h-full flex flex-col ">
                {/* site logo */}
                <NavLink className="flex items-center justify-center border-b border-gray-200">
                    <div className="w-[90px] aspect-square overflow-hidden">
                        <img className="h-full w-full object-center object-contain" src="/final-logo.png" alt="" />
                    </div>
                </NavLink>
                {/* nav container */}
                <div className="flex-grow flex flex-col justify-between">
                    {/* nav */}
                    <div className='mt-3'>
                        <ul>
                            {
                                linkItems.map((linkItem, index) => {
                                    return (
                                        <li key={index} className='relative'>
                                            <div key={index} className='flex items-center mb-3'>
                                                <NavLink className={`w-full flex items-center justify-between p-1 rounded-sm  transition-colors ease-in-out duration-300  ${activeLink?.title === linkItem.title ? 'bg-blue-200' : 'bg-transparent hover:bg-gray-200'}`} onClick={() => {
                                                    setActiveLink(linkItem)
                                                    if (!linkItem.subLinkItems) {
                                                        setActiveSubLink(null)
                                                    }
                                                    if (activeLink?.title === linkItem.title && subLinks) {
                                                        setSubLinks(null)
                                                    } else {
                                                        setSubLinks(linkItem.subLinkItems)
                                                    }
                                                }}>
                                                    <div className='flex items-center gap-3'>
                                                        <div>
                                                            <linkItem.icon className='text-xl' />
                                                        </div>
                                                        <div>
                                                            <span>{linkItem.title}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        {
                                                            linkItem.subLinkItems ?
                                                                <IoCloseOutline className={`text-sm transition-transform ease-in-out duration-300 ${activeLink?.title === linkItem.title && subLinks ? 'rotate-0' : '-rotate-45'}`} />
                                                                :
                                                                <></>
                                                        }
                                                    </div>
                                                </NavLink>
                                            </div>
                                            {/* sub list */}
                                            {
                                                linkItem.subLinkItems
                                                    ?
                                                    <div className={`absolute left-[108%] bg-gray-100 whitespace-nowrap shadow-lg top-1/2 w-[200px] border border-gray-300 -translate-y-1/2 z-50 p-2 transition-transform ease-in-out duration-300 ${activeLink?.title === linkItem.title && subLinks ? 'scale-100' : 'scale-0'}`}>
                                                        <ul>
                                                            {
                                                                linkItem.subLinkItems?.map((subLinkItem, index) => {
                                                                    return (
                                                                        <li key={index} className='flex items-center my-1 relative z-30'>
                                                                            <NavLink className={`w-full p-1  transition-colors ease-in-out duration-300 ${activeSubLink?.title === subLinkItem.title ? 'bg-blue-200' : 'bg-transparent hover:bg-gray-200'}`} onClick={() => {

                                                                                setActiveSubLink(subLinkItem)
                                                                                setSubLinks(null)
                                                                            }}>
                                                                                <div className='flex items-center gap-3'>
                                                                                    <div>
                                                                                        <subLinkItem.icon className='text-lg' />
                                                                                    </div>
                                                                                    <div><span>{subLinkItem.title}</span></div>
                                                                                </div>
                                                                            </NavLink>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                        {/* icon */}
                                                        <div className='absolute left-0 top-1/2 -translate-y-1/2 w-[18px] rotate-45 ml-[-9px] aspect-square bg-inherit border-b border-l border-gray-300'></div>
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    {/* footer */}
                    <div>footer</div>
                </div>
            </div>
        </div>
    )
}

export default CustomersSideNav
