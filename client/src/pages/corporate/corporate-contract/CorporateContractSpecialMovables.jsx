import React, { useState } from 'react'

// icons
import { MdKeyboardArrowDown } from "react-icons/md";

const CorporateContractSpecialMovables = () => {

    // states
    // states
    const [isService, setIsService] = useState(-1)

    // local data
    const services = {
        title: 'Legal services we offer include',
        items: [
            {
                title: 'Legal Consultation',
                text: 'Our team of expert will provide you the best advice on how to proceed with lease or purchase agreement of special movables.'
            },
            {
                title: 'Drafting Agreements',
                text: 'Our contract specialists are ready to assist you with your next purchase lease or pledge of special vehicles.'
            },
            {
                title: 'Legal representation',
                text: 'If you come across any dispute with regards to ownership or lease agreements of special movables our teams of well-versed lawyers are here to assist.'
            },
        ]
    }

    return (
        <div>
            {/* first order container */}
            <div className='relative'>
                {/* bg */}
                <div className='absolute inset-0 flex'>
                    <div className='w-full lg:w-[60%] absolute left-0 top-0 h-full z-10 bg-white bg-opacity-75 lg:relative'></div>
                    <div className='w-full lg:w-[40%] absolute left-0 top-0 h-full z-0 lg:relative'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/premium-photo/lot-used-car-sales-stock-isolated_293060-21065.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* content container */}
                <div className='relative z-30 static-padding-x pt-14 pb-32'>
                    {/* content */}
                    <div className='lg:w-[50%]'>
                        {/* bold text */}
                        <div className='text-3xl sm:text-4xl md:text-5xl font-bold capitalize'>
                            <p>
                                [Page Title Here]
                            </p>
                        </div>
                        {/* normal texts */}
                        <div className='my-5'>
                            <p>
                                Special movables are a category under Ethiopian law encompassing movable assets of substantial economic value that seldom change hands. These high-value assets, while movable, are subject to legal provisions akin to those governing immovable properties due to their economic significance. The Ethiopian legal framework categorizes special movables into tangible assets (such as motor vehicles, ships, and capital goods) and intangible assets (including patents, businesses, and copyrights).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div className='text-white bg-neutral-800'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='w-[85%] sm:w-[65%] mx-auto md:w-[40%] lg:w-[30%] relative '>
                            <div className='relative md:absolute w-full h-max z-30 left-0 top-0 mt-[-60px] border-8 rounded-xl border-white bg-neutral-800'>
                                <div className='flex items-center justify-center py-3'>
                                    <div className='grid grid-cols-3 gap-3'>
                                        <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                                            <img className='w-full h-full object-center object-cover' src="https://d.newsweek.com/en/full/2223161/2024-lincoln-nautilus.jpg?w=400&e=e474d5058b0c341cd5369f7aa7e9164c" alt="" />
                                        </div>
                                        <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                                            <img className='w-full h-full object-center object-cover' src="https://www.cdtruck.com/uploads/202112156/sinotruk-howo-380-dump-truck00283132898.jpg" alt="" />
                                        </div>
                                        <div className='w-[90px] aspect-[2/1.5] overflow-hidden rounded-md'>
                                            <img className='w-full h-full object-center object-cover' src="https://osabus.com/wp-content/uploads/2022/09/49-MAN-1024x768.jpeg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='p-3'>
                                    <p>
                                        The contractual relations relating to special movables, whether gratuitous or onerous, necessitates compliance with specific legal stipulations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] md:w-[60%] lg:w-[70%] p-7 pr-0'>
                            {/* bold */}
                            <div className='header-level-3'>
                                <p>
                                    [Title Here]
                                </p>
                            </div>
                            {/* normal text */}
                            <div className='my-2'>
                                <p>
                                    Ethiopian property legislation delineates distinct classifications for properties, each bearing unique legal ramifications, particularly in the context of ownership acquisition and transfer. The nation’s laws governing contracts and property impose a series of formalities that must be satisfied to effectuate a legitimate transfer of ownership or creation of legal relationship.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* third order container */}
            <div>
                {/* content container */}
                <div className='static-padding-x py-24'>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='w-[100%] md:w-[50%]'>
                            {/* bold text */}
                            <div className='header-level-3'>
                                <p>
                                    Parties engaged in the sale, purchase, or conveyance of property are obliged to observe these formalities:
                                </p>
                            </div>
                            {/* normal text */}
                            <div>
                                <p>
                                    failure to do so renders the contract null and void, thereby precluding the transferee from exercising rights such as usage, profit generation, and disposal of the property. Additionally, the law prescribes formality requirements for engaging in any legal transactions, including mortgages, pledges, donations, and leases of special movables.
                                </p>
                            </div>
                        </div>
                        <div className='w-[100%] md:w-[50%] border-l-8 border-blue-900 flex items-center'>
                            <div className='pl-5 font-medium text-blue-900'>
                                <p>
                                    In today’s business environment, agreements form the backbone of interactions between individuals and companies, setting the stage for long-term relationships, delineating rights and duties, enhancing operational efficiency, and fostering trust
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* fourth order container */}
            <div className='bg-black bg-opacity-10'>
                {/* content container */}
                <div className='static-padding-x py-10'>
                    <div>
                        <p>
                            Corporations and businesses often require vehicles for work-related transportation or to facilitate the pick-up and drop-off of their employees. When a corporate entity leases or purchases a vehicle, it must adhere to various requirements.
                        </p>
                    </div>
                </div>
            </div>

            {/* fifth order container */}
            <div className='my-20'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col-reverse md:flex-row gap-10'>
                        <div className='w-[100%] md:w-[50%] relative'>
                            <div className='h-[270px] md:h-auto md:absolute md:inset-0 overflow-hidden bg-yellow-500'>
                                <img className='w-full h-full object-center object-cover' src="https://legalthirst.com/wp-content/uploads/2021/02/Transfer-of-Property-Act-TOPA-1882-_-Complete-Information.jpg" alt="" />
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[50%]'>
                            {/* bold */}
                            <div className='header-level-3'>
                                <p>
                                    [Title Here]
                                </p>
                            </div>
                            {/* normal text */}
                            <div className='mt-3'>
                                <p>
                                    If you are in the market to conduct a business towards the capital of a business organization, purchase, sell, Hire, or mortgage business, ship, motor vehicle, construction machinery, aircraft, non-negotiable instruments, patents, or trademarks, it is prudent to consult with our legal experts.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* sixth */}
            <div className='text-white bg-neutral-800'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='p-7 pr-0'>
                            {/* normal text */}
                            <div className='my-2'>
                                <p>
                                    At Makuta Law Firm, our dedicated team of legal professionals is committed to meticulously creating and examining a variety of contracts, ensuring compliance with Ethiopian regulations while placing your priorities at the forefront.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* seventh order container */}
            <div className='my-20'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
                            <div className='flex flex-col items-center border border-gray-300 rounded-sm p-3'>
                                <div className='w-[120px] aspect-square rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-center' src="/gedi.jpg" alt="" />
                                </div>
                                <div className='flex items-center justify-center gap-2 font-medium my-1'>
                                    <span> Er. Gedion</span>
                                    <span>Agmass</span>
                                </div>
                                <div className='text-justify'>
                                    <p>
                                        sed maxime assumenda quia veritatis asperiores est vitae quis incidunt eos ipsa commodi numquam reiciendis, quam quaerat similique.</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center border border-gray-300 rounded-sm p-3'>
                                <div className='w-[120px] aspect-square rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-center' src="/gedi.jpg" alt="" />
                                </div>
                                <div className='flex items-center justify-center gap-2 font-medium my-1'>
                                    <span> Er. Gedion</span>
                                    <span>Agmass</span>
                                </div>
                                <div className='text-justify'>
                                    <p>
                                        sed maxime assumenda quia veritatis asperiores est vitae quis incidunt eos ipsa commodi numquam reiciendis, quam quaerat similique.</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center border border-gray-300 rounded-sm p-3'>
                                <div className='w-[120px] aspect-square rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-center' src="/gedi.jpg" alt="" />
                                </div>
                                <div className='flex items-center justify-center gap-2 font-medium my-1'>
                                    <span> Er. Gedion</span>
                                    <span>Agmass</span>
                                </div>
                                <div className='text-justify'>
                                    <p>
                                        sed maxime assumenda quia veritatis asperiores est vitae quis incidunt eos ipsa commodi numquam reiciendis, quam quaerat similique.</p>
                                </div>
                            </div>

                            <div className='flex flex-col items-center border border-gray-300 rounded-sm p-3'>
                                <div className='w-[120px] aspect-square rounded-full overflow-hidden'>
                                    <img className='w-full h-full object-center' src="/gedi.jpg" alt="" />
                                </div>
                                <div className='flex items-center justify-center gap-2 font-medium my-1'>
                                    <span> Er. Gedion</span>
                                    <span>Agmass</span>
                                </div>
                                <div className='text-justify'>
                                    <p>
                                        sed maxime assumenda quia veritatis asperiores est vitae quis incidunt eos ipsa commodi numquam reiciendis, quam quaerat similique.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* our service container */}
            <div className='mb-28'>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <header className='py-7 border-b-4 border-yellow-400'>
                        <h1 className='header-level-3'>{services?.title}</h1>
                    </header>
                    <div>

                        {
                            services?.items.map((item, index) => {
                                return (
                                    <div key={index} className='py-2 border-b border-yellow-400'>
                                        <header className='flex items-center justify-between py-5'>
                                            <div>
                                                <h4 className="header-level-4 hover:underline cursor-pointer" onClick={() => {
                                                    if (isService === index) {
                                                        setIsService(-1)
                                                    } else {
                                                        setIsService(index)
                                                    }
                                                }}>{item.title}</h4>
                                            </div>
                                            <div>
                                                <div className='w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200' onClick={() => {
                                                    if (isService === index) {
                                                        setIsService(-1)
                                                    } else {
                                                        setIsService(index)
                                                    }
                                                }}>
                                                    <MdKeyboardArrowDown className={`text-2xl transition-transform ease-in-out duration-300 ${isService === index ? '-rotate-180' : 'rotate-0'}`} />
                                                </div>
                                            </div>
                                        </header>
                                        <div className={`overflow-hidden ${isService === index ? 'h-auto' : 'h-0'}`}>
                                            <div className="px-5 sm:px-10 md:px-16 lg:px-20 pb-5">
                                                <p>
                                                    {item.text}
                                                </p>
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
    )
}

export default CorporateContractSpecialMovables
