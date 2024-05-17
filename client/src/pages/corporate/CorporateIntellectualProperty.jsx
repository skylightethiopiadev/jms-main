import { useState, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

// icons
import { FaChevronDown } from "react-icons/fa";

const CorporateIntellectualProperty = () => {
    const { state } = useLocation()
    const content = useMemo(() => state, [])
    const [isAccordion, setIsAccordion] = useState(-1)

    console.log(content)
    return (
        <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%] text-[1.05rem] flex flex-col gap-y-24 pb-20'>
            {/* first order container */}
            {
                content?.firstOrder
                    ?
                    <div>
                        <div className='mt-1 relative'>
                            {/* background */}
                            <div className='absolute left-0 top-0 -z-10 w-full h-full overflow-hidden'>
                                <div className='w-full h-full overflow-hidden'>
                                    <img className='w-full h-full object-center object-cover' src={content?.firstOrder.bg} alt="" />
                                </div>
                            </div>
                            {/* bg-gradient */}
                            <div className='absolute left-0 top-0 z-0 w-full h-full bg-gradient-to-r from-white to-transparent flex'>
                                <div className='bg-white w-[50%]'></div>
                                <div className='bg-gradient-to-r from-white to-transparent w-[50%]'></div>
                            </div>
                            {/* content */}
                            <div className='relative z-10'>
                                <div className='w-[55%] py-16'>
                                    <h1 className='text-4xl font-bold my-3 capitalize'>
                                        {content?.firstOrder.title}
                                    </h1>
                                    <div>
                                        <p>
                                            {content?.firstOrder.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
            {/* second order container */}
            {
                content?.secondOrder
                    ?
                    <div className='relative z-20 mt-[-120px] flex items-center justify-center'>
                        <div className='grid grid-cols-3 gap-10 px-24'>
                            {
                                content?.secondOrder.map((item, index) => {
                                    return (
                                        <div key={index} className='bg-white shadow-xl p-5'>{item.text}</div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <></>
            }
            {/* third order container */}
            {
                content?.thirdOrder
                    ?
                    <div>
                        <div>
                            <h3 className='header-level-3'>{content?.thirdOrder.title}</h3>
                            <div>
                                <p className='my-2'>
                                    {content?.thirdOrder.text}
                                </p>
                            </div>
                        </div>
                    </div>
                    :
                    <></>
            }
            {/* fourth order container */}
            {
                content?.fourthOrder
                    ?
                    <div>
                        <div className='flex gap-10'>
                            {/* left */}
                            <div className='w-[50%] relative'>
                                <div className='absolute left-0 top-0 w-full h-full bg-yellow-400'>
                                    <div className='w-full h-full overflow-hidden'>
                                        <img className='w-full h-full object-center object-cover' src={content?.fourthOrder.left.bg} alt="" />
                                    </div>
                                    <div className='absolute left-0 top-0 w-[60%] h-max z-10 bg-white shadow-xl mt-[-24px] ml-[-24px] p-2'>
                                        <h4 className='font-bold'>{content?.fourthOrder.left.title}</h4>
                                        <p>
                                            {content?.fourthOrder.left.text}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* right */}
                            <div className='w-[50%]'>
                                <div>
                                    <h3 className='header-level-3'>{content?.fourthOrder.right.title}</h3>
                                </div>
                                <div>
                                    <p>
                                        {content?.fourthOrder.right.text}
                                    </p>
                                </div>
                                <div>
                                    <div className='flex items-center gap-5 my-5'>
                                        <div className='w-max flex items-center gap-3 border border-gray-200 rounded-md p-3'>
                                            <div className='w-[50px] aspect-square rounded-full overflow-hidden border border-white shadow-lg'>
                                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg" alt="" />
                                            </div>
                                            <div>
                                                <div>
                                                    <span className='font-medium'>Meseret Seyoume</span>
                                                </div>
                                                <div className='mt-[-7px]'>
                                                    <span>Lawyer</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='w-max flex items-center gap-3 border border-gray-200 rounded-md p-3'>
                                            <div className='w-[50px] aspect-square rounded-full overflow-hidden border border-white shadow-lg'>
                                                <img className='w-full h-full object-center object-cover' src="https://www.shutterstock.com/image-photo/smiling-mature-man-wearing-spectacles-600nw-1432699253.jpg" alt="" />
                                            </div>
                                            <div>
                                                <div>
                                                    <span className='font-medium'>Haddis Fanta</span>
                                                </div>
                                                <div className='mt-[-7px]'>
                                                    <span>Developer</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    :
                    <></>
            }
            {/* fifth order container */}
            {
                content?.cardsContent

                    ?
                    <div>
                        <div>
                            <div>
                                <h3 className='header-level-3'>{content?.cardsContent.title}</h3>
                            </div>
                            <div>
                                <p>
                                    {content?.cardsContent.text}
                                </p>
                            </div>
                            <div className='grid grid-cols-2 gap-10 my-4'>
                                {
                                    content?.cardsContent?.cards.map((item, index) => {
                                        return (
                                            <div key={index} className='bg-white p-3 shadow-xl'>
                                                <div>
                                                    <h3 className='font-semibold'>{item.title}</h3>
                                                </div>
                                                <div>
                                                    <p>
                                                        {item.text}
                                                    </p>
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
            {/* accordion container */}
            {
                content?.accordionContent
                    ?
                    <div>
                        <header className='py-1 border-b-8 border-yellow-400'>
                            <h3 className='header-level-3'>{content?.accordionContent.title}</h3>
                        </header>
                        <div>
                            {
                                content?.accordionContent.items.map((item, index) => {
                                    return (
                                        <div key={index} className='my-3 py-2 border-b-2 border-yellow-400'>
                                            <header className='flex items-center justify-between py-2 cursor-pointer' onClick={() => {
                                                if (isAccordion === index) {
                                                    setIsAccordion(-1)
                                                } else {
                                                    setIsAccordion(index)
                                                }
                                            }}>
                                                <div>
                                                    <h3 className='header-level-4 hover:underline'>{item.title}</h3>
                                                </div>
                                                <div>
                                                    <FaChevronDown className={`text-2xl transition-transform ease-in-out duration-300 ${isAccordion === index ? '-rotate-180' : 'rotate-0'}`} />
                                                </div>
                                            </header>
                                            <div className='px-20'>
                                                <div className={`overflow-hidden ${isAccordion === index ? 'h-auto' : 'h-0'}`}>
                                                    <div className='my-3'>
                                                        <p>
                                                            {item.text}
                                                        </p>
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
                    <></>
            }
        </div>
    )
}

export default CorporateIntellectualProperty
