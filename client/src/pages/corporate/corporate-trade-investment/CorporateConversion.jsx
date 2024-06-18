import React from 'react'

// icons
import { HiArrowLongRight } from "react-icons/hi2";
import { LiaUserClockSolid } from "react-icons/lia";
import { MdOutlineAddHome } from "react-icons/md";
import { CgDisplayFlex } from "react-icons/cg";


const CorporateConversion = () => {
    const services = [
        {
            title: 'Selection and Advice',
            text: 'We’ll aid in selecting the ideal legal framework for your enterprise, taking into account aspects such as liability safeguards, tax considerations, and functional requirements. Additionally, we’ll navigate you through the strategic choices involved in evolving from a sole proprietorship to a partnership or transforming a partnership into a company.',
        },
        {
            title: 'Document Preparation and Filing',
            text: 'We will handle the preparation and submission of all required documentation for entity conversion, including the creation and filing of the Articles of Conversion and any other pertinent forms for the new business structure.',
        },
        {
            title: 'Contract and Agreement Updates',
            text: 'Transitioning between business entities may affect current contracts and agreements, such as leases, employment terms, and insurance coverage. We are committed to making all essential modifications and providing support in renegotiating any alterations with external vendors or associates.',
        },
        {
            title: 'Tax Implications',
            text: 'Altering your business structure can have a profound impact on taxation. We dedicate ourselves to clarifying the tax consequences to empower you to make knowledgeable choices that promote your company’s fiscal well-being.',
        },
        {
            title: 'Compliance and Legal Compliance',
            text: 'We will ensure the entity conversion process is in strict compliance with legal standards and regulations. Additionally, we will lead you through any further procedures necessary to uphold adherence to state laws.',
        },
    ]

    return (
        <div>
            {/* first order container */}
            <div className='relative'>
                {/* content container */}
                <div className='static-padding-x flex flex-col-reverse md:flex-row'>
                    <div className='py-7 md:py-12 w-[100%] md:w-[50%]'>
                        <div className='text-5xl font-bold'>
                            <p>
                                Entity Conversion
                            </p>
                        </div>
                        <div className='my-3'>
                            <p>
                                Legal mechanism permitting a company to alter its organizational structure from one form to another
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] bg-yellow-500 md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] h-[170px] md:h-auto'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://assets.contenthub.wolterskluwer.com/api/public/content/db8abe35a16e4a3290c98b794d1d097e" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* second order container */}
            <div>
                <div className='static-padding-x'>
                    {/* content container */}
                    <div className='max-w-[640px] mx-auto p-5 rounded-md bg-white shadow-2xl mt-[-16px] md:mt-[-25px] relative z-10 flex flex-col items-center gap-3'>
                        <div className='text-center'>
                            <p>
                                This transformation occurs without necessitating the dissolution of the current entity or the establishment of a new one. The process is intended to be efficient and can confer multiple advantages, including fiscal benefits, enhanced prospects for investment, or greater congruence with the company’s strategic development objectives. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* third order container */}
            <div className='mt-20 mb-10 md:my-36'>
                {/* content container */}
                <div className='static-padding-x flex flex-col-reverse md:flex-row gap-5 md:gap-10'>
                    <div className='w-[100%] md:w-[50%] py-5 md:py-10'>
                        <div className='header-level-3 capitalize'>
                            <p>
                                Effect of conversion on the business, members and creditors
                            </p>
                        </div>
                        <div>
                            <p>
                                The conversion of a business from one organizational structure to another does not disrupt its ongoing existence. Essentially, this means that conversion does not create a new entity; instead, all rights and obligations of the original organization are transferred to the restructured entity. The primary outcome of this process is the modification of the memorandum of association to reflect the new structure.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%]'>
                        <div className='w-full h-[210px] md:h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://api.kemperhosting.com/files/2021-01/entity-choice-560x292.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* pre-fourth order container */}
            <div className='bg-black bg-opacity-10'>
                {/* content container */}
                <div className='static-padding-x py-10'>
                    <div className='flex items-center justify-center'>
                        <div className='grid grid-cols-3 gap-3 md:gap-10'>
                            <div>
                                <div>
                                    <LiaUserClockSolid className='text-5xl' />
                                </div>
                                <div className='font-black my-2'>
                                    <p>
                                        Maximize billable hours
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Easily track billable time against clients and cases with our mobile apps.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <MdOutlineAddHome className='text-5xl' />
                                </div>
                                <div className='font-black my-2'>
                                    <p>
                                        Work from anywhere
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Get anywhere anytime access to your firm with cloud-based solutions.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <CgDisplayFlex className='text-5xl' />
                                </div>
                                <div className='font-black my-2'>
                                    <p>
                                        Be more flexible
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Building on top of Microsoft Office 365 means full integration with your email and calendar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* fourth order container */}
            <div className='md:my-36'>
                {/* content container */}
                <div className='static-padding-x flex flex-col md:flex-row gap-5 md:gap-10'>
                    <div className='w-[100%] md:w-[50%]'>
                        <div className='w-full h-[210px] md:h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://www.pinnaclevaluations.com/wp-content/uploads/2021/01/bigstock-Co-Working-Conference-Busines-270114049-1030x687-1.jpeg" alt="" />
                        </div>
                    </div>

                    <div className='w-[100%] md:w-[50%] py-5 md:py-10'>
                        <div className='header-level-3 capitalize'>
                            <p>
                                Convert a business organization’s structure 
                            </p>
                        </div>
                        <div>
                            <p>
                                The decision to convert a business organization’s structure must be publicly announced in a widely circulated newspaper and on the company’s website once a month for three consecutive months. This ensures transparency and informs creditors, who are given the opportunity to assert their claims immediately. If creditors do not raise objections during this period, they will automatically be recognized as creditors of the restructured business entity.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* fifth order container */}
            <div className='my-10 bg-neutral-700'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-white py-10'>
                        <div>
                            <div>
                                <p>
                                    The conversion of a business entity does not alter the rights or increase the liabilities of its members. The legal framework ensures that members who disagree with the conversion decision have the option to exit the organization by selling their shares back to it.
                                </p>
                            </div>
                        </div>
                        <div>
                            <button className='px-10 py-2 rounded-md bg-yellow-400 transition-colors ease-in-out duration-300 hover:bg-yellow-300 whitespace-nowrap'>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* sixth order container */}
            <div className='my-10 md:my-20'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                        <div className='w-[100%] md:w-[50%]'>
                            <div className='w-full h-[210px] md:h-full overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://www.legalreader.com/wp-content/uploads/2019/07/adeolu-eletu-E7RLgUjjazc-unsplash.jpg" alt="" />
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[50%]'>
                            <div className='header-level-3'>
                                <p>
                                    Alter its organizational structure
                                </p>
                            </div>
                            <div className='my-3'>
                                <p>
                                    The general process of converting a business organization involves altering its legal structure without affecting its legal identity or increasing the members’ liabilities, nor diminishing the rights of members and creditors. 
                                </p>
                            </div>
                            <div className='bg-white p-5 shadow-lg'>
                                <div className='px-5 border-l-4 border-yellow-400'>
                                    <p>
                                        Under the new commercial code there is no limitation imposed on which business organization could be converted to which organization
                                    </p>
                                </div>
                            </div>
                            <div className='mt-7'>
                                <button className='px-10 py-2 border-2 border-yellow-400 rounded-full text-yellow-500 transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white'>Open Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* seventh order container */}
            <div className='my-20'>
                {/* content container */}
                <div className='static-padding-x flex flex-col md:flex-row gap-5 md:gap-10'>
                    <div className='w-[100%] md:w-[50%] bg-black bg-opacity-10 rounded-md overflow-hidden flex items-center'>

                        <div className='self-start h-full'>
                            <div className='w-[90px] h-full overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://archive.mbda.gov/sites/mbda.gov/files/styles/scale_700w/public/media/images/2017/istock-5188714625012.jpg?itok=KHh3q0zT" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className='p-3'>
                                <div className='font-bold'>
                                    <p>
                                        Lorem, ipsum dolor.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='w-[100%] md:w-[50%] bg-black bg-opacity-10 rounded-md overflow-hidden flex items-center'>

                        <div className='self-start h-full'>
                            <div className='w-[90px] h-full overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://archive.mbda.gov/sites/mbda.gov/files/styles/scale_700w/public/media/images/2017/istock-5188714625012.jpg?itok=KHh3q0zT" alt="" />
                            </div>
                        </div>

                        <div>
                            <div className='p-3'>
                                <div className='font-bold'>
                                    <p>
                                        Lorem, ipsum dolor.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            {/* eight order container */}
            <div className='mb-28'>
                {/* content container */}
                <div className='static-padding-x'>
                    {/* bold container */}
                    <div className='header-level-3 mb-5 pb-3 border-b-4 border-yellow-500'>
                        <p>
                            Our Legal Services
                        </p>
                    </div>
                    <div>
                        <div>
                            {
                                services.map((item, index) => {
                                    return (
                                        <div key={index} className='mb-3 border-b border-yellow-500 pb-3'>
                                            <header className='py-2'>
                                                <h3 className='font-bold'>{item.title}</h3>
                                            </header>
                                            <div className='px-10'>
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
            </div>

        </div>
    )
}

export default CorporateConversion
