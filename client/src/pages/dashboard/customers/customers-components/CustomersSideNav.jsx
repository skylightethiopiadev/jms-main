import { NavLink } from 'react-router-dom'
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

import { IoSettingsOutline } from "react-icons/io5";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";

import { MdKeyboardArrowDown } from "react-icons/md";

const CustomersSideNav = () => {
    // link items
    const linkItems = [
        {
            icon: HiOutlineHome,
            title: 'Home',
            path: '#',
        },
        {
            icon: BsInbox,
            title: 'Inbox',
            path: '#',
        },
        {
            icon: CiFileOn,
            title: 'Docs',
            path: '#',
        },
        {
            icon: RxDashboard,
            title: 'Dashboard',
            path: '#',
        },
        {
            icon: PiVideoLight,
            title: 'Clips',
            path: '#',
            height: '',
            subLinkItems: [
                {
                    icon: CiWallet,
                    title: 'All',
                    path: '#',
                },
                {
                    icon: CiImageOn,
                    title: 'Image',
                    path: '#',
                },
                {
                    icon: PiFileAudioLight,
                    title: 'Audio',
                    path: '#',
                },
                {
                    icon: CiVideoOn,
                    title: 'Video',
                    path: '#',
                },
            ]
        },
        {
            icon: CiClock1,
            title: 'Timesheet',
            path: '#',
        },
        {
            icon: CiCircleMore,
            title: 'More',
            path: '#',
            height: '',
            subLinkItems: [
                {
                    icon: IoSettingsOutline,
                    title: 'Setting',
                    path: '#',
                },
                {
                    icon: HiArrowPathRoundedSquare,
                    title: 'Upgrade',
                    path: '#',
                },
                {
                    icon: AiOutlineAppstoreAdd,
                    title: 'Apps',
                    path: '#',
                },
                {
                    icon: LuUsers,
                    title: 'users',
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
                                        <li key={index}>
                                            <div key={index} className='flex items-center mb-3'>
                                                <NavLink className={'w-full flex items-center justify-between p-1 rounded-sm bg-transparent transition-colors ease-in-out duration-300 hover:bg-gray-200'}>
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
                                                                <MdKeyboardArrowDown className='text-lg' />
                                                                :
                                                                <></>
                                                        }
                                                    </div>
                                                </NavLink>
                                            </div>
                                            {/* sub list */}
                                            {
                                                linkItem.subLinkItems && false
                                                    ?
                                                    <div>
                                                        <ul>
                                                            <li>
                                                                <NavLink>
                                                                    <div>Left</div>
                                                                </NavLink>
                                                            </li>
                                                        </ul>
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
