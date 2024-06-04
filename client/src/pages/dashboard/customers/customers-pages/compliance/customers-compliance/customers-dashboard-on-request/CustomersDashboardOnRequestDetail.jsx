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

import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { BiTransfer } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { BiBlock } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";
import { GiProgression } from "react-icons/gi";
import { GoClockFill } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

const CustomersDashboardOnRequestDetail = () => {
    // states
    const [caseDetail, setCaseDetail] = useState('CASE-DETAIL')
    const [isCaseDescriptionPopUp, setIsCaseDescriptionPopUp] = useState(false)
    const [lawyerNav, setLawyerNav] = useState('Personal')

    const [paymentDetailFlag, setPaymentDetailFlag] = useState('Payed')

    const [payedDetailPopUp, setPayedDetailPopUp] = useState(null)

    const [cancelPaymentForm, setCancelPaymentForm] = useState(false)

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

    const paymentDetailNavLinks = [
        {
            title: 'All',
            icon: HiOutlineMenuAlt1,
        },
        {
            title: 'Payed',
            icon: BiTransfer,
        },
        {
            title: 'On Request',
            icon: CiCirclePlus,
        },
        {
            title: 'Canceled',
            icon: BiBlock,
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

                        <div className={`w-[50%] py-2 cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:transition-all after:ease-in-out after:duration-300 hover:after:w-full ${caseDetail === 'CASE-DETAIL' ? ' after:bg-blue-700' : 'after:bg-gray-300'}`} onClick={() => {
                            setCaseDetail('CASE-DETAIL')
                        }}>
                            <h3 className='font-medium'>Case Detail</h3>
                        </div>

                        <div className={`w-[50%] py-2 cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:transition-all after:ease-in-out after:duration-300 hover:after:w-full ${caseDetail === 'LAWYER-DETAIL' ? 'after:bg-blue-700' : 'after:bg-gray-300'}`} onClick={() => {
                            setCaseDetail('LAWYER-DETAIL')
                        }}>
                            <h3 className='font-medium'>Lawyer Detail</h3>
                        </div>

                        <div className={`w-[50%] py-2 cursor-pointer relative after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:transition-all after:ease-in-out after:duration-300 hover:after:w-full ${caseDetail === 'PAYMENT-DETAIL' ? 'after:bg-blue-700' : 'after:bg-gray-300'}`} onClick={() => {
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
                                <div className='mt-3'>
                                    <div className='bg-gray-100 p-3'>
                                        <div className='flex gap-5'>
                                            <div className='w-[20%] bg-white h-max'>
                                                {/* nav header */}
                                                <div className='px-3 py-2 border-b border-gray-200 mb-1'>
                                                    <div className='flex items-center gap-1'>
                                                        <div>
                                                            <TbListDetails className='text-lg' />
                                                        </div>
                                                        <div className='text-lg'>
                                                            <span>Detail</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* links */}
                                                {
                                                    paymentDetailNavLinks.map((item, index) => {
                                                        return (
                                                            <header key={index} className={`px-1 py-1 cursor-pointer  transition-colors ease-in-out duration-300 border-l-4 ${paymentDetailFlag === item.title ? 'border-yellow-400 bg-blue-50' : 'border-white'}`} onClick={() => {
                                                                setPaymentDetailFlag(item.title)
                                                            }}>
                                                                <div className='flex items-center gap-1'>
                                                                    <div>
                                                                        <item.icon className='text-lg' />
                                                                    </div>
                                                                    <div>
                                                                        <span>{item.title}</span>
                                                                    </div>
                                                                </div>
                                                            </header>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='flex-grow h-max max-h-[450px] overflow-y-auto bg-white p-3'>
                                                {
                                                    paymentDetailFlag === 'All'
                                                        ?
                                                        <div>
                                                            {/* all here */}
                                                        </div>
                                                        :
                                                        paymentDetailFlag === 'Payed'
                                                            ?
                                                            <div>
                                                                {/* payed here */}
                                                                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-3'>
                                                                    {
                                                                        [...Array(2)].map((item, index) => {
                                                                            return (
                                                                                <div key={index} className='flex justify-between px-3 py-1 border border-gray-200 bg-white shadow-none transition-shadow ease-in-out duration-300 hover:shadow-md mb-3' onClick={(e) => {
                                                                                    // setPayedDetailPopUp({ id: index })
                                                                                    e.stopPropagation()
                                                                                }}>
                                                                                    <div>
                                                                                        <div>
                                                                                            <div className='flex items-center gap-1'>
                                                                                                <h3 className='font-black text-[1.05rem] text-blue-500'>$435/700</h3>
                                                                                                <span className='font-semibold text-yellow-500'>payed</span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div>
                                                                                            <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                                                                                        </div>
                                                                                        <div className='text-xs flex items-center flex-wrap gap-3 my-1'>
                                                                                            <div className='flex items-center gap-1'>
                                                                                                <GoClockFill className='text-blue-400 text-lg' />
                                                                                                <span>payed 5 days ago</span>
                                                                                            </div>

                                                                                            <div className='flex items-center gap-1'>
                                                                                                <GiProgression className='text-blue-400 text-lg' />
                                                                                                <span>64% covered</span>
                                                                                            </div>

                                                                                        </div>

                                                                                        <div className='my-2'>
                                                                                            <div className='font-semibold'>
                                                                                                <p>payment options</p>
                                                                                            </div>
                                                                                            <div className='my-1 flex items-center gap-2'>
                                                                                                <div>
                                                                                                    <div className='w-[16px] aspect-square rounded-full overflow-hidden'>
                                                                                                        <img className='h-full w-full object-center object-cover' src="https://banksethiopia.com/wp-content/uploads/2020/10/unnamed-1.png" alt="" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <div className='w-[16px] aspect-square rounded-full overflow-hidden'>
                                                                                                        <img className='h-full w-full object-center object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Awash_International_Bank.png/220px-Awash_International_Bank.png" alt="" />
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <div className='w-[16px] aspect-square rounded-full overflow-hidden'>
                                                                                                        <img className='h-full w-full object-center object-cover' src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1447476896/lcrdrlh1hfa0nbl9ycy3.png" alt="" />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div>
                                                                                        <button onClick={() => {
                                                                                            setPayedDetailPopUp({ id: index })
                                                                                        }}>
                                                                                            <IoMdMore className='text-lg bg-gray-50 hover:bg-gray-200' />
                                                                                        </button>
                                                                                    </div>

                                                                                    {/* payed --- pop-up */}
                                                                                    <div className={`fixed w-[450px] h-[450px] bg-white shadow-xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform ease-in-out duration-300 overflow-y-auto ${payedDetailPopUp?.id === index ? 'scale-100' : 'scale-0'}`} id='customers-dashboard-cancel-payment-form-popup'>
                                                                                        {/* header */}
                                                                                        <header className='flex items-center justify-between px-3 py-2 bg-blue-400 text-white'>
                                                                                            <div>
                                                                                                <h3 className='font-bold'>Payment Detail</h3>
                                                                                            </div>
                                                                                            <div>
                                                                                                <button className='w-[26px] aspect-square rounded-full flex items-center justify-center text-lg border border-white transition-colors ease-in-out duration-300 hover:bg-white hover:text-red-700' onClick={(e) => {
                                                                                                    e.stopPropagation()
                                                                                                    setPayedDetailPopUp(null)
                                                                                                }}>
                                                                                                    <IoCloseOutline />
                                                                                                </button>
                                                                                            </div>
                                                                                        </header>
                                                                                        {/* content container */}
                                                                                        <div className='p-3'>
                                                                                            {/* grid container */}
                                                                                            <div className='flex gap-5'>
                                                                                                {/* left */}
                                                                                                <div className='w-[50%] bg-white border border-gray-100 rounded-sm shadow-sm p-3'>
                                                                                                    <div className='flex items-center gap-3'>
                                                                                                        <div className='w-[42px] aspect-square border-2 border-blue-400 rounded-full flex items-center justify-center font-black text-xs border-r-transparent'>
                                                                                                            <span>64%</span>
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <div className='font-semibold'>
                                                                                                                <span>$13765 payed</span>
                                                                                                            </div>
                                                                                                            <div className='mt-[-3px] text-xs text-gray-700'>
                                                                                                                <span>5 days ago</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='my-2 flex'>
                                                                                                        <button className='px-3 py-1 rounded-sm bg-red-400 text-white transition-colors ease-in-out duration-500 hover:bg-red-500 flex items-center gap-1' onClick={() => {
                                                                                                            if(cancelPaymentForm){
                                                                                                                setCancelPaymentForm(false)
                                                                                                            }else{
                                                                                                                setCancelPaymentForm(true)
                                                                                                            }
                                                                                                        }}>
                                                                                                            <span>
                                                                                                                cancel payment
                                                                                                            </span>
                                                                                                            < MdKeyboardArrowDown className={`text-2xl transition-transform ease-in-out duration-150 ${cancelPaymentForm ? '-rotate-180' : 'rotate-0'}`}/>
                                                                                                            </button>
                                                                                                    </div>
                                                                                                </div>
                                                                                                {/* right */}
                                                                                                <div className='w-[50%] bg-white border border-gray-100 rounded-sm shadow-sm p-3'>
                                                                                                    <div className='flex items-center gap-3'>
                                                                                                        <div className='w-[42px] aspect-square border-2 border-red-400 rounded-full flex items-center justify-center font-black text-xs border-r-transparent'>
                                                                                                            <span>36%</span>
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <div className='font-semibold'>
                                                                                                                <span>$13765 unpayed</span>
                                                                                                            </div>
                                                                                                            <div className='mt-[-3px] text-xs text-gray-700'>
                                                                                                                <span>3 months left</span>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className='my-2 flex'>
                                                                                                        <button className='px-3 py-1 rounded-sm bg-blue-400 text-white transition-colors ease-in-out duration-500 hover:bg-blue-500'>add payment</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* cancel payment form */}
                                                                                            <div className={`transition-all ease-in-out duration-300 overflow-hidden ${cancelPaymentForm ? 'h-[250px]' : 'h-0'}`}>
                                                                                                <div className='p-3 my-3 border border-gray-200 rounded-sm'>
                                                                                                    <div className='text-xs text-gray-700'>
                                                                                                        <p>
                                                                                                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                                                            Lorem ipsum dolor sit amet.
                                                                                                        </p>
                                                                                                    </div>
                                                                                                    <div className='my-1 border border-gray-300 rounded-sm'>
                                                                                                        <textarea
                                                                                                            className='w-full focus:outline-none focus:ring-0 border-none resize-none h-[120px]'
                                                                                                        ></textarea>
                                                                                                    </div>
                                                                                                    <div className='mt-3 flex items-center gap-x-5'>
                                                                                                        <button className='px-7 py-[.175rem] bg-blue-400 text-white'>done</button>
                                                                                                        <button className='px-7 py-[.175rem] bg-red-400 text-white' onClick={() => setCancelPaymentForm(false)}>cancel</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                            {/* payment history */}
                                                                                            <div className='mt-3'>
                                                                                                <div>
                                                                                                    <header className='flex items-center gap-1  '>
                                                                                                        <div>
                                                                                                            <TbListDetails />
                                                                                                        </div>
                                                                                                        <div>
                                                                                                            <span>Payment History</span>
                                                                                                        </div>
                                                                                                    </header>

                                                                                                    <div className='ml-10'>
                                                                                                        {
                                                                                                            [...Array(3)].map((item, index) => {
                                                                                                                return (
                                                                                                                    <div className='px-1 py-1 border-l border-blue-400'>
                                                                                                                        <header className='flex items-center gap-1'>
                                                                                                                            <div className='w-[20px] aspect-square border border-blue-500 rounded-full flex items-center justify-center text-xs bg-white ml-[-15px]'>
                                                                                                                                <span>{index + 1}</span>
                                                                                                                            </div>
                                                                                                                            <div>
                                                                                                                                <span>last payment {index + 1} weeks ago</span>
                                                                                                                            </div>
                                                                                                                        </header>
                                                                                                                    </div>
                                                                                                                )
                                                                                                            })
                                                                                                        }
                                                                                                    </div>

                                                                                                    {/* some text */}
                                                                                                    <div className='mt-3'>
                                                                                                        <div>
                                                                                                            <p>
                                                                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis illo suscipit neque quia quas ut atque quo unde porro praesentium! Cupiditate, maxime! Fugiat fuga laboriosam placeat.
                                                                                                            </p>
                                                                                                        </div>
                                                                                                        <div className='mt-3'>
                                                                                                            <button className='px-5 py-1 rounded-sm bg-blue-400 hover:bg-blue-500 text-white'>Bill Next</button>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>

                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>

                                                            </div>
                                                            :
                                                            paymentDetailFlag === 'On Request'
                                                                ?
                                                                <div>On request</div>
                                                                :
                                                                paymentDetailFlag === 'Canceled'
                                                                    ?
                                                                    <div>Canceled</div>
                                                                    :
                                                                    <></>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                                    {/* you can add something */}
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
