import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// icons
import { BsBoxArrowUpRight } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";

const CustomersDashboardOnRequestDetail = () => {
    // states
    const [caseDetail, setCaseDetail] = useState('CASE-DETAIL')
    const [isCaseDescriptionPopUp, setIsCaseDescriptionPopUp] = useState(false)

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
                                <></>
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomersDashboardOnRequestDetail
