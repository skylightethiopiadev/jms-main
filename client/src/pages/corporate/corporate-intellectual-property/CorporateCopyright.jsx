import { useState } from 'react'
// icons
import { FaChevronDown } from "react-icons/fa";

const CorporateCopyright = () => {

    // states
    const [isService, setIsService] = useState(-1)

    // local data
    const services = {
        title: 'Legal services we offer include',
        items: [
            {
                title: 'Determining the Appropriate Copyright Type',
                text: 'Helps you understand which type of copyright protection is suitable for your creative work. Whether it’s a song, novel, movie, computer software, poetry, or architecture, and guide you through the process.'
            },
            {
                title: 'Copyright Registration',
                text: 'While copyright automatically applies to original works as soon as they’re created, formal registration is essential for enforcement purposes. Hence, we will assist with the registration process, ensuring correctness and enforceability.'
            },
            {
                title: 'Drafting Contracts',
                text: 'Draft licensing agreements, assignments, and work-for-hire contracts. These contracts define terms for using copyrighted material, transfer ownership, and outline rights and responsibilities.'
            },
            {
                title: 'Fair Use and Counseling',
                text: 'Copyright law includes the concept of fair use, allowing limited use of copyrighted works without permission (e.g., for commentary or criticism). We will counsel clients on acquiring, protecting, and exploiting copyrights.'
            },
            {
                title: 'Handling Copyright Infringement',
                text: 'If someone uses your copyrighted material without permission, we can help you address the issue. we handle infringement disputes, whether it’s defending your rights or requesting others to cease using your copyrighted items.'
            },
            {
                title: 'Legal Expertise and Strategy Development',
                text: 'Provide legal expertise to determine the legality of third-party actions and the existence of actual violations of the law. We develop strategies to protect your interest, ensuring effective representation.'
            },
            {
                title: 'Investigation and Clarification',
                text: 'Conduct detailed investigations into copyright infringement circumstances by examine all available evidence, including contracts, witness statements, or digital footprints.'
            },
            {
                title: 'Litigation Support',
                text: 'In cases where a copyrighted idea has been unlawfully used, we can assist with litigation. We will help you navigate complex legal processes and ensure that all paperwork submitted is legally valid.'
            },
        ]
    }
    return (
        <div>
            {/* first order container */}
            <div className='mt-1 mb-20 relative'>
                {/* bg-image */}
                <div className='absolute left-0 top-0 w-full h-full -z-30 flex'>
                    <div className='w-[50%] bg-white'></div>
                    <div className='absolute z-10 top-0 left-1/2 h-full w-[75%] sm:w-[50%] md:w-[35%] bg-gradient-to-r from-white to-transparent'></div>
                    <div className='w-[50%]'>
                        <div className='w-full h-full overflow-hidden bg-yellow-400'>
                            <img className='w-full h-full object-center object-cover' src="https://dfadvisors.gr/wp-content/uploads/2021/01/business-legal-protection.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <div>
                        <div className='w-[95%] sm:[85%] md:w-[65%] py-16'>
                            {/* title */}
                            <div>
                                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Legal Protection for Original Owners</h1>
                            </div>
                            {/* intro text */}
                            <div className='my-2'>
                                <p>
                                    These protections are pivotal in nurturing artistic innovation, guaranteeing that creators can profit from their contributions.
                                </p>
                            </div>
                            {/* read more btn */}
                            <div className='my-4'>
                                <button className='border-2 border-yellow-400 rounded-full px-10 py-2 transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white'>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* our service container */}
            <div className='mb-20'>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <header className='py-2 border-b-4 border-yellow-400'>
                        <h1 className='header-level-3'>{services?.title}</h1>
                    </header>
                    <div>

                        {
                            services?.items.map((item, index) => {
                                return (
                                    <div key={index} className='py-2 border-b border-yellow-400'>
                                        <header className='flex items-center justify-between py-2'>
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
                                                <div className="w-[28px] aspect-square rounded-full overflow-hidden  flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-200 bg-gray-100">
                                                    <FaChevronDown className={`text-xl`} />
                                                </div>
                                            </div>
                                        </header>
                                        <div className={`overflow-hidden ${isService === index ? 'h-auto' : 'h-0'}`}>
                                            <div className="px-20 pb-5">
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

export default CorporateCopyright
