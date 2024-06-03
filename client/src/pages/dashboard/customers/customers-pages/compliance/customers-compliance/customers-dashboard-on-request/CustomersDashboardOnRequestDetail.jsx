import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// icons
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

import { RiUser4Line } from "react-icons/ri";
import { BiMessage } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

const CustomersDashboardOnRequestDetail = () => {
    // states
    const [caseDetail, setCaseDetail] = useState('CASE-DETAIL')
    const [isCaseDescriptionPopUp, setIsCaseDescriptionPopUp] = useState(false)
    const [lawyerNav, setLawyerNav] = useState('Personal')

    const lawyerNavLink = [
        {
            title: 'Personal',
            icon: RiUser4Line,
        },
        {
            title: 'Messages',
            icon: BiMessage,
        },
        {
            title: 'Notification',
            icon: IoIosNotificationsOutline,
        },
    ]

    // hooks
    const navigate = useNavigate()

    return (
        <div>
            {/* first order container */}
            <div className="bg-gray-100 rounded-md border border-gray-200 p-5">
                <div>
                    <header className="flex items-center justify-between">
                        <div>
                            <h3 className='header-level-4'>Case Summary</h3>
                        </div>
                        <div>
                            <button className='text-lg transition-colors ease-in-out duration-300 hover:text-blue-700' onClick={() => {
                                navigate(-1)
                            }}>

                                <BsBoxArrowUpRight />
                            </button>
                        </div>
                    </header>
                    <div className='w-[95%] my-3'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa quae laborum voluptatum consequatur pariatur, ex fugiat, hic, totam repellendus minima impedit ad iure.
                        </p>
                    </div>
                </div>
            </div>
            {/* second order container */}
            <div className='mt-7 border border-gray-200 rounded-md'>
                <div className='p-5'>
                    <header className='flex items-center gap-7'>

                        <div className={`w-[50%] py-2 cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-700 after:transition-all after:ease-in-out after:duration-300 hover:after:w-full ${caseDetail === 'CASE-DETAIL' ? 'after:w-full' : ''}`} onClick={() => {
                            setCaseDetail('CASE-DETAIL')
                        }}>
                            <h3 className='font-medium'>Case Detail</h3>
                        </div>

                        <div className={`w-[50%] py-2 cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-700 after:transition-all after:ease-in-out after:duration-300 hover:after:w-full ${caseDetail === 'LAWYER-DETAIL' ? 'after:w-full' : ''}`} onClick={() => {
                            setCaseDetail('LAWYER-DETAIL')
                        }}>
                            <h3 className='font-medium'>Lawyer Detail</h3>
                        </div>

                        <div className={`w-[50%] py-2 cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-blue-700 after:transition-all after:ease-in-out after:duration-300 hover:after:w-full ${caseDetail === 'PAYMENT-DETAIL' ? 'after:w-full' : ''}`} onClick={() => {
                            setCaseDetail('PAYMENT-DETAIL')
                        }}>
                            <h3 className='font-medium'>Payment Detail</h3>
                        </div>
                    </header>
                    {
                        caseDetail === 'CASE-DETAIL'
                            ?
                            <div>
                                <div className='mt-5 flex gap-5'>
                                    {/* case detail */}
                                    <div className='w-[50%] grid grid-cols-2 gap-y-0 relative'>
                                        <div className='col-span-2'>
                                            <header>
                                                <h3 className='header-level-4'>CORPORATE</h3>
                                            </header>
                                        </div>
                                        {/* id */}
                                        <div className='p-1 border-b border-gray-200'>
                                            <h3 className='font-medium'>ID</h3>
                                        </div>
                                        <div className='p-1 border-b border-gray-200'>
                                            <span>
                                                CVI-2024-05-012000001
                                            </span>
                                        </div>

                                        {/* type */}
                                        <div className='p-1 border-b border-gray-200'>
                                            <h3 className='font-medium'>TYPE</h3>
                                        </div>
                                        <div className='p-1 border-b border-gray-200'>
                                            <span>
                                                Intellectual Property
                                            </span>
                                        </div>

                                        {/* sub-type */}
                                        <div className='p-1 border-b border-gray-200'>
                                            <h3 className='font-medium'>SUB-TYPE</h3>
                                        </div>
                                        <div className='p-1 border-b border-gray-200'>
                                            <span>
                                                Trademark
                                            </span>
                                        </div>

                                        {/* created at */}
                                        <div className='p-1 border-b border-gray-200'>
                                            <h3 className='font-medium'>CREATED AT</h3>
                                        </div>
                                        <div className='p-1 border-b border-gray-200'>
                                            <span>
                                                5 months ago
                                            </span>
                                        </div>

                                        {/* updated at */}
                                        <div className='p-1 border-b border-gray-200'>
                                            <h3 className='font-medium'>UPDATED AT</h3>
                                        </div>
                                        <div className='p-1 border-b border-gray-200'>
                                            <span>
                                                3 months ago
                                            </span>
                                        </div>

                                        {/* status */}
                                        <div className='p-1 border-b border-gray-200'>
                                            <h3 className='font-medium'>STATUS</h3>
                                        </div>
                                        <div className='p-1 border-b border-gray-200'>
                                            <span>
                                                pending
                                            </span>
                                        </div>

                                        {/* description */}
                                        <div className='col-span-2'>
                                            <header>
                                                <h3 className='font-medium uppercase my-2'>Description</h3>
                                            </header>
                                            <div className='ml-5'>
                                                <p>
                                                    Itaque, quia, dignissimos numquam sit ipsum possimus totam temporibus harum ad qui soluta commodi maxime alias blanditiis dolorem minus iusto at consequuntur consequatur corporis. <span className='text-blue-700 hover:underline cursor-pointer' onMouseEnter={() => {
                                                        setIsCaseDescriptionPopUp(true)
                                                    }} onClick={() => {
                                                        setIsCaseDescriptionPopUp(true)
                                                    }}>more</span>
                                                </p>
                                            </div>
                                        </div>

                                        {/* services */}
                                        <div className='col-span-2'>
                                            <header>
                                                <h3 className='font-medium uppercase my-1'>Services</h3>
                                            </header>
                                            <div>
                                                <ul className='ml-5'>
                                                    <li className='flex items-center gap-1'>
                                                        <div className='w-[7px] aspect-square rounded-full bg-gray-500'></div>
                                                        <div>
                                                            <span>Mediation Center</span>
                                                        </div>
                                                    </li>
                                                    <li className='flex items-center gap-1'>
                                                        <div className='w-[7px] aspect-square rounded-full bg-gray-500'></div>
                                                        <div>
                                                            <span>Advisory</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* detail pop up */}
                                        <div className={`absolute inset-1 overflow-x-hidden overflow-y-auto bg-white shadow-md flex flex-col transition-transform ease-in-out duration-300 ${isCaseDescriptionPopUp ? 'scale-100' : 'scale-0'}`} onMouseLeave={() => {
                                            setIsCaseDescriptionPopUp(false)
                                        }}>
                                            {/* header */}
                                            <header className='flex items-center justify-between px-3 py-2 border-b border-gray-200'>
                                                <div>
                                                    <h3 className='font-bold text-gray-700'>Case Description</h3>
                                                </div>
                                                <div>
                                                    <div>
                                                        <button className='w-[24px] aspect-square rounded-full flex items-center justify-center bg-gray-100 transition-colors ease-in-out duration-300 hover:bg-gray-300' onClick={() => {
                                                            setIsCaseDescriptionPopUp(false)
                                                        }}>
                                                            <IoCloseOutline />
                                                        </button>
                                                    </div>
                                                </div>
                                            </header>

                                            {/* text */}
                                            <div>
                                                <div className='p-3'>
                                                    <p>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat dolore ipsum debitis numquam obcaecati minima animi itaque! Ipsam perferendis nobis quae harum quidem. Distinctio dicta explicabo, suscipit nobis, quo nemo dignissimos voluptatibus error perferendis rerum illum aspernatur sapiente et eveniet odit voluptatum fugit quaerat ipsa minima consectetur in obcaecati. Totam natus nihil molestiae voluptatem soluta. Ea vitae porro labore harum! Ipsum debitis nam vero!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* attached files */}
                                    <div className='w-[50%] border border-gray-200 p-3'>
                                        {/* top */}
                                        <div>
                                            <h3 className='font-bold'>Attached Files</h3>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ad ratione distinctio, nemo laboriosam consequatur neque necessitatibus maiores ex ipsam reiciendis officiis non repudiandae.
                                            </p>
                                        </div>
                                        {/* file */}
                                        <div className='w-full py-3 grid grid-cols-1 gap-y-3'>
                                            {
                                                [...Array(3)].map((item, index) => {
                                                    return (
                                                        <div className='w-full px-3 py-2 border border-gray-300 flex items-center justify-between'>
                                                            {/* left */}
                                                            <div>
                                                                <div className='flex items-center gap-3'>
                                                                    <div>
                                                                        <div className='w-[28px]'>
                                                                            <img className='w-full object-center object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaLnfexVH4aZTNMXYe1VkjEL6DxxzJ1nXUTQ&usqp=CAU" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='font-medium'>
                                                                            <p>ethiopia the land of wisdom.pdf</p>
                                                                        </div>
                                                                        <div className='mt-[-3px] text-xs text-gray-500'>
                                                                            <span>12.23kb</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* right */}
                                                            <div>
                                                                <div>
                                                                    <button className='text-xl text-xl text-gray-500 hover:text-red-600'>
                                                                        <TiDeleteOutline />
                                                                    </button>
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
                            :
                            caseDetail === 'PAYMENT-DETAIL'
                                ?
                                <div>Payment Detail</div>
                                :
                                caseDetail === 'LAWYER-DETAIL'
                                    ?
                                    <div className='mt-3'>
                                        <div className='bg-gray-100 p-3'>
                                            <div className='flex gap-5'>
                                                <div className='w-[20%] h-max bg-white border border-gray-300 shadow-sm'>
                                                    <div className='cursor-pointer px-3 py-1'>
                                                        <div>
                                                            <h3 className='font-semibold'>Settings</h3>
                                                        </div>
                                                        <div className='mt-[-5px]'>
                                                            <span>Lorem ipsum</span>
                                                        </div>
                                                    </div>
                                                    {/* some nav */}
                                                    <div>
                                                        {
                                                            lawyerNavLink.map((item, index) => {
                                                                return (
                                                                    <div className={`px-1 py-[.15rem] cursor-pointer ${lawyerNav === item.title ? 'bg-gray-100 border-l-4 border-yellow-500' : 'bg-white border-l-4 border-white'}`} onClick={() => {
                                                                        setLawyerNav(item.title)
                                                                    }}>
                                                                        <div className='flex items-center'>
                                                                            <div>
                                                                                <item.icon className='text-lg' />
                                                                            </div>
                                                                            <div>
                                                                                <span>{item.title}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                <div className='w-[50%] bg-white h-max shadow-md'>
                                                    {
                                                        lawyerNav === 'Personal'
                                                            ?
                                                            <div>
                                                                <div>
                                                                    {/* header image */}
                                                                    <div className='flex items-center justify-center my-1'>
                                                                        <div className='w-[120px] aspect-square rounded-full overflow-hidden border-4 border-white shadow-md'>
                                                                            <img className='w-full h-full object-center object-cover' src="/gedi.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className='mx-10'>
                                                                            <p>
                                                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt explicabo est ipsum deleniti.
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    {/* personal detail */}
                                                                    <div className='p-3 md:px-16'>
                                                                        <div className='flex flex-wrap gap-x-7'>
                                                                            {/* name */}
                                                                            {/* first name */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>First Name</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>Haddis</span>
                                                                                </div>
                                                                            </div>

                                                                            {/* middle name */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>Middle Name</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>Fanta</span>
                                                                                </div>
                                                                            </div>

                                                                            {/* last name */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>Last Name</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>Shiferaw</span>
                                                                                </div>
                                                                            </div>

                                                                            {/* Phone */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>Phone</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>+251923996736</span>
                                                                                </div>
                                                                            </div>

                                                                            {/* email */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>Email</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>haddisfun7@gmail.com</span>
                                                                                </div>
                                                                            </div>

                                                                            {/* nationality */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>Nationality</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>Ethiopian</span>
                                                                                </div>
                                                                            </div>

                                                                            {/* Country */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>Country</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>Ethiopia</span>
                                                                                </div>
                                                                            </div>

                                                                            {/* region */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>Region</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>Amhara</span>
                                                                                </div>
                                                                            </div>

                                                                            {/* city */}
                                                                            <div className='py-1 border-b border-gray-200'>
                                                                                <div>
                                                                                    <span className='font-bold text-xs text-gray-700'>City</span>
                                                                                </div>
                                                                                <div className='mt-[-5px] font-medium'>
                                                                                    <span>Bahir Dar</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            :
                                                            lawyerNav === 'Messages'
                                                                ?
                                                                <div>Messages</div>
                                                                :
                                                                lawyerNav === 'Notification'
                                                                    ?
                                                                    <div>
                                                                        <div>
                                                                            <header className='flex items-center justify-between px-3 py-1 border-b border-blue-700'>
                                                                                <div>
                                                                                    <h3 className='text-blue-700 font-semibold'>Notifications</h3>
                                                                                </div>
                                                                                <div>
                                                                                    <div>
                                                                                        <button className='text-xl text-blue-700'>
                                                                                            <IoMdMore />
                                                                                        </button>
                                                                                    </div>
                                                                                </div>
                                                                            </header>

                                                                            {/* notification list */}
                                                                            <div>
                                                                                {
                                                                                    [...Array(4)].map((item, index) => {
                                                                                        return (
                                                                                            <div key={index} className='w-full px-3 py-1 border-b border-gray-200 flex items-center hover:bg-gray-50'>
                                                                                                <div className='flex-grow cursor-pointer'>
                                                                                                    <div>
                                                                                                        <div>
                                                                                                            <p>
                                                                                                                Lorem ipsum dolor sit amet.
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <div className='mt-[-5px] text-xs text-gray-700'>
                                                                                                            <span>5 minutes ago</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <div className='flex items-center gap-1'>
                                                                                                        <button className='text-gray-400 hover:text-gray-700'>
                                                                                                            <IoEyeOutline className='text-lg' />
                                                                                                        </button>
                                                                                                        <button className='text-gray-400 hover:text-gray-700'>
                                                                                                            <AiOutlineDelete className='text-lg' />
                                                                                                        </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    :
                                                                    <></>
                                                    }
                                                </div>
                                                <div className='w-[30%] bg-white shadow-md h-max'>
                                                    {/* you can add something here */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardOnRequestDetail
