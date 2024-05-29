import { useState } from 'react'

// icons
import { TiPrinter } from "react-icons/ti";
import { AiFillPrinter } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

const ConfirmNewCase = props => {

    // state
    const [isPrint, setIsPrint] = useState(false)

    // console.log(props?.newCaseHistory?.caseCategory)
    // console.log(props?.newCaseHistory?.services)
    // console.log(props?.newCaseHistory?.subCaseCategory?.subType?.caseName)
    // console.log(props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory?.subSubType?.title)

    return (
        <div className="overflow-y-auto h-[66vh] p-2 flex relative text-[1.05rem]">
            <div className="flex-grow bg-white rounded-md border border-gray-200 p-3 h-max">
                <header className="py-1 border-b border-gray-100 flex items-center justify-between">
                    <h4 className="font-semibold">New Case Summary</h4>
                    <div>
                        <div className="flex items-center cursor-pointer px-1 rounded-sm transition-colors ease-in-out duration-300 hover:border-gray-400 border border-gray-200" onClick={() => {
                            setIsPrint(true)
                        }}>
                            <TiPrinter className="text-blue-700" />
                            <span>print</span>
                        </div>
                    </div>
                </header>
                {/* summary */}
                <div className="border border-gray-200 mt-3 ml-10 text-[.875rem]">

                    <div>
                        {/* first order */}
                        <header className='flex items-center gap-2 py-2 border-b border-gray-200'>
                            <div className='ml-[-11px]'>
                                <div className='w-[20px] aspect-square rounded-full overflow-hidden bg-green-400 flex items-center justify-center text-white text-xl'>
                                    <BsArrowRightShort />
                                </div>
                            </div>
                            <div>
                                <span>{props?.newCaseHistory?.caseCategory} Case</span>
                            </div>
                        </header>
                        {/* second order */}
                        <header className='flex items-center gap-2 py-2 border-l border-b border-gray-200 ml-10'>
                            <div className='ml-[-11px]'>
                                <div className='w-[20px] aspect-square rounded-full overflow-hidden bg-green-400 flex items-center justify-center text-white text-xl'>
                                    <BsArrowRightShort />
                                </div>
                            </div>
                            <div>
                                <span>{props?.newCaseHistory?.subCaseCategory?.subType?.caseName}</span>
                            </div>
                        </header>

                        {
                            props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory?.subSubType?.title
                                ?
                                <header className='flex items-center gap-2 py-2 border-l border-b border-gray-200 ml-20'>
                                    <div className='ml-[-11px]'>
                                        <div className='w-[20px] aspect-square rounded-full overflow-hidden bg-green-400 flex items-center justify-center text-white text-xl'>
                                            <BsArrowRightShort />
                                        </div>
                                    </div>
                                    <div>
                                        <span>{props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory?.subSubType?.title}</span>
                                    </div>
                                </header>
                                :
                                <></>
                        }

                        {/* services */}
                        <div className='p-5'>
                            <div>
                                <h3 className='font-bold w-max border-b border-gray-600'>Requested Services</h3>
                            </div>
                            {/* services list */}
                            <div>
                                <div className='flex gap-x-5 gap-y-3 flex-wrap my-3'>
                                    {
                                        props?.newCaseHistory?.services?.length > 0 ?
                                            <>
                                                {
                                                    props?.newCaseHistory?.services.map((item, index) => {
                                                        return (
                                                            <div key={index} className='flex gap-1'>
                                                                <div className='flex items-center'>
                                                                    <div className='w-[7px] aspect-square rounded-full bg-green-500'></div>
                                                                </div>
                                                                <div>
                                                                    <span>{item}</span>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                            :
                                            <div><span>No Service selected</span></div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* action buttons */}
                <div className='my-5'>
                    <div className='flex items-center gap-5'>
                        <div className='px-5 py-[.1rem] rounded-sm bg-blue-600 text-white transition-colors ease-in-out duration-300 hover:bg-blue-500 cursor-pointer'>
                            <span>submit</span>
                        </div>
                        <div className='px-5 py-[.1rem] rounded-sm bg-gray-600 text-white transition-colors ease-in-out duration-300 hover:bg-gray-500 cursor-pointer'>
                            <span>cancel</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* case summary pop-up */}
            <div className={`transition-transform ease-in-out duration-300 fixed inset-0 bg-gray-100 z-50 flex items-center justify-center ${isPrint ? 'scale-100' : 'scale-0'}`}>
                {/* action btn */}
                <div className='absolute right-1 top-1 z-50'>
                    <div className='flex items-center gap-3 px-3'>
                        <div className='flex items-center gap-1 p-1 rounded-sm text-sm cursor-pointer'>
                            <AiFillPrinter className='text-xl text-blue-700' />
                            <span>Print</span>
                        </div>
                        <div className='flex items-center gap-1 border border-gray-300 px-1 py-[.1rem] cursor-pointer transition-colors ease-in-out duration-300 hover:bg-gray-300' onClick={() => {
                            setIsPrint(false)
                        }}>
                            <MdOutlineClose />
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className='absolute z-40 w-[75%] h-[98%] bg-white rounded-md overflow-hidden flex flex-col'>
                    {/* header */}
                    <header className='flex justify-between px-5 py-7 gap-10'>
                        {/* left */}
                        <div className='self-center w-[100px] bg-transparent'>
                            <div className='w-full h-full'>
                                <img className='w-full h-full object-center object-cover' src="/logoFinal.png" alt="" />
                            </div>
                        </div>
                        {/* right */}
                        <div className='flex-grow border-b-8 border-yellow-300 self-start'>
                            <div className='w-max py-1'>
                                <h1 className='text-4xl'>MAKUTA LAW FIRM</h1>
                                <h1 className=''>New Case Summary Form</h1>
                            </div>
                        </div>
                    </header>
                    {/* content */}
                    <div className='flex-grow flex gap-10'>
                        <div className='w-[100px] h-full'></div>
                        <div className='w-[85%] px-5 text-[.9875rem]'>
                            {/* top */}
                            <div>
                                <h3 className='font-semibold'>Case Statement</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque esse vero! Inventore asperiores excepturi eius consectetur molestias corrupti modi rerum doloremque labore aspernatur? Recusandae exercitationem harum reiciendis culpa modi porro molestiae.
                                </p>
                            </div>
                            {/* bottom */}
                            <div className='my-3 ml-16'>
                                <div className='border-l border-green-500 py-d1'>
                                    {/* first */}
                                    <div className='flex items-center gap-3 mb-3'>
                                        <div className='ml-[-13px]'>
                                            <div className='w-[24px] aspect-square rounded-full bg-white flex items-center justify-center border border-green-500'>
                                                <span>1</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span>{props?.newCaseHistory?.caseCategory} Case</span>
                                        </div>
                                    </div>
                                    {/* second */}
                                    <div className='flex items-center gap-3 my-3'>
                                        <div className='ml-[-13px]'>
                                            <div className='w-[24px] aspect-square rounded-full bg-white flex items-center justify-center border border-green-500'>
                                                <span>2</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span>{props?.newCaseHistory?.subCaseCategory?.subType?.caseName}</span>
                                        </div>
                                    </div>
                                    {/* third */}
                                    {
                                        props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory?.subSubType?.title
                                            ?
                                            <div className='flex items-center gap-3'>
                                                <div className='ml-[-13px]'>
                                                    <div className='w-[24px] aspect-square rounded-full bg-white flex items-center justify-center border border-green-500'>
                                                        <span>3</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span>{props?.newCaseHistory?.subCaseCategory?.subSubCaseCategory?.subSubType?.title}</span>
                                                </div>
                                            </div>
                                            :
                                            <></>
                                    }


                                </div>
                            </div>
                            {/* services */}
                            <div>
                                <h3 className='mt-5 font-semibold w-max border-b border-gray-500 mb-2'>Requested Services</h3>
                                <div className='ml-14'>
                                    <div className='flex gap-x-5 gap-y-3 flex-wrap'>
                                        {
                                            props?.newCaseHistory?.services?.length > 0 ?
                                                <>
                                                    {
                                                        props?.newCaseHistory?.services.map((item, index) => {
                                                            return (
                                                                <div key={index} className='flex gap-1'>
                                                                    <div className='flex items-center'>
                                                                        <div className='w-[7px] aspect-square rounded-full bg-green-600'></div>
                                                                    </div>
                                                                    <div>
                                                                        <span>{item}</span>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </>
                                                :
                                                <div><span>No Servece Requested</span></div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmNewCase;
