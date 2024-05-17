import { useState, useRef } from 'react'
// icons
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const CorporateCopyright = () => {

    // states
    const [isService, setIsService] = useState(-1)
    const [isMore, setIsMore] = useState(false)

    // reference
    let readMoreRef = useRef(null)

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

    // read more ref
    const readMoreReferenceHandler = () => {
        readMoreRef?.current.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>
            {/* first order container */}
            <div className='mt-1 mb-28 relative'>
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
                                <button className='border-2 border-yellow-400 rounded-full px-10 py-2 transition-colors ease-in-out duration-300 hover:bg-yellow-400 hover:text-white' onClick={() => {
                                    readMoreReferenceHandler()
                                }}>read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* second order container */}
            <div className='mb-28'>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <div className='flex flex-col-reverse lg:flex-row gap-12 lg:gap-24'>

                        <div className='w-[100%] lg:w-[50%] bg-yellow-400 relative'>
                            <div className='w-full h-full overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://www.drakelawfirmpc.com/wp-content/uploads/2012/10/img-civil-litigation2.jpg" alt="" />
                            </div>

                            <div className='absolute top-[-58px] z-10 right-0 lg:right-[-50px] w-[50%] h-max bg-white shadow-2xl p-5 cursor-pointer'>
                                <header>
                                    <h4 className='font-bold'>Collective Works</h4>
                                </header>
                                <div>
                                    <p>
                                        Ownership may be assigned to the person who initiated and supervised the assembly of the work
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] lg:w-[50%] py-5'>
                            <header>
                                <h4 className='header-level-3'>Rights protected </h4>
                            </header>
                            <div>
                                <p>
                                    The Ethiopian Copyrights Proclamation articulates that within the nation’s jurisdiction, copyright encompasses the economic rights bestowed upon authors over their creative outputs. These rights extend beyond mere economic interests to include moral rights, provided certain legal conditions are met. The scope of protection under this law covers works produced in literary, scientific, and artistic domains, ensuring they are legally safeguarded.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* grid container */}
            <div className='mb-28'>
                {/* content */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <header className='mb-5'>
                        <h1 className='header-level-3'>The creative outputs protected includes</h1>
                    </header>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>

                        <div className='bg-white shadow-xl p-3'>
                            <p>
                                Books, booklets, articles in reviews and newspaper, computer programs
                            </p>
                        </div>

                        <div className='bg-white shadow-xl p-3'>
                            <p>
                                Dramatic, dramatic co-musical works, pantomimes, choreographic works, and other works created for stage production
                            </p>
                        </div>

                        <div className='bg-white shadow-xl p-3'>
                            <p>
                                Speeches, lectures, addresses, sermons, and other oral works
                            </p>
                        </div>

                        <div className='bg-white shadow-xl p-3'>
                            <p>
                                Musical compositions, Audiovisual works, Works of architecture, Photographic works, Applied art
                            </p>
                        </div>

                        <div className='bg-white shadow-xl p-3'>
                            <p>
                                Collection of works such as encyclopedia or anthologies or databases whether in machine readable or other form provided that such collections are original by reason of the selection or arrangement of their contents
                            </p>
                        </div>

                        <div className='bg-white shadow-xl p-3'>
                            <p>
                                Illustrations, maps, plans, sketches, and three-dimensional works related to geography, topography, architecture or science
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            {/* flex container */}
            <div className='mb-28'>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <div className='flex flex-col lg:flex-row gap-12 lg:gap-24'>

                        <div className='w-[100%] lg:w-[50%] py-5'>
                            <header>
                                <h4 className='header-level-3'>Persons entitled to copyright protection</h4>
                            </header>
                            <div>
                                <p>
                                    In the realm of legal matters addressed by copyright law, the ownership of creative works is a key aspect. The law typically presumes that the creator of a work is its original owner. However, there are notable exceptions where ownership may be attributed to someone other than the creator.
                                </p>
                            </div>
                        </div>

                        <div className='w-[100%] lg:w-[50%] bg-yellow-400 relative'>
                            <div className='w-full h-full overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://frostbrowntodd.com/app/uploads/2022/12/group-of-people-on-a-conference-room-stockpack-pexels-600x350.jpg" alt="" />
                            </div>

                            <div className='absolute top-[-52px] z-10 left-0 lg:left-[-50px] w-[50%] h-max bg-white shadow-2xl p-5 cursor-pointer'>
                                <header>
                                    <h4 className='font-bold'>Co-authorship</h4>
                                </header>
                                <div>
                                    <p>
                                        When a work is created jointly, ownership may be shared.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* gradient container */}
            <div className='mt-1 mb-28 relative'>
                {/* bg-image */}
                <div className='absolute left-0 top-0 w-full h-full -z-30 flex'>
                    <div className='w-[50%] bg-white'></div>
                    <div className='absolute z-10 top-0 left-1/2 h-full w-[75%] sm:w-[50%] md:w-[35%] bg-gradient-to-r from-white to-transparent'></div>
                    <div className='w-[50%]'>
                        <div className='w-full h-full overflow-hidden bg-yellow-400'>
                            <img className='w-full h-full object-center object-cover' src="https://www.shutterstock.com/image-photo/law-justice-concept-judge-hammer-260nw-1078173260.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <div>
                        <div className='w-[95%] sm:[85%] md:w-[65%] py-16'>
                            {/* title */}
                            <div>
                                <h1 className='text-3xl sm:text-4xl font-bold'>Conditions for copyrights protection</h1>
                            </div>
                            {/* intro text */}
                            <div className='my-2'>
                                <p>
                                    The law confers copyright protection upon a work immediately upon its creation, without necessitating any formal procedure, regardless of the work’s intent or merit. This ensures that the work is legally protected from the moment of its inception, provided it fulfills the requisite criteria for copyright eligibility.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* more section container */}
            <div ref={readMoreRef} />
            <div className='mb-28'>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <header className='w-[75%] mb-5'>
                        <h1 className='header-level-3'>
                            Copyrights, afford authors exclusive legal protection for their original creations
                        </h1>
                    </header>
                    <div>
                        <div>
                            <p>
                                Copyrights constitute a segment of intellectual property rights that afford authors exclusive legal protection for their original creations. These protections are pivotal in nurturing artistic innovation, guaranteeing that creators can profit from their contributions. Copyrights bestow upon creators certain exclusive rights over their creative and innovative outputs, playing a vital role in defending creators’ interests and fostering a milieu that is conducive to creative and innovative pursuits. As a facet of intellectual property law, copyrights aim to strike a balance between the proprietary interests of creators and the broader public good, thereby stimulating a culture of artistic advancement and innovation. The spectrum of works shielded by copyrights spans literary, dramatic, musical, and artistic domains, encompassing novels, compositions, artworks, and cinematography.
                            </p>
                            <div className={`overflow-hidden ${isMore ? 'h-auto' : 'h-0'}`}>
                                <div>
                                    <p>
                                        Within the Ethiopian legal framework, copyrights represent a significant category of intellectual property rights that are expressly safeguarded by legislation. The Federal Democratic Republic of Ethiopia’s Constitution, specifically Article 93, unequivocally endorses copyright protection. This constitutional endorsement has led to the enactment of the Copyrights and Neighboring Rights Protection Proclamation No. 410/2004, along with its subsequent amendment, Proclamation No. 872/2014. Additionally, the nation’s adherence to the civil and criminal codes, as well as the WIPO treaty, further fortifies these protections. As a member of the World Intellectual Property Organization (WIPO), Ethiopia has demonstrated a firm commitment to advancing the protection of intellectual property and the Ethiopian Intellectual Property Office is the designated authority responsible for overseeing the enforcement of intellectual property rights within the country.
                                    </p>
                                </div>
                            </div>
                            <button className='text-blue-700 flex items-center gap-3' onClick={() => {
                                setIsMore(!isMore)
                            }}>
                                {
                                    isMore
                                        ?
                                        <span>show less</span>
                                        :
                                        <span>show more</span>
                                }
                                <MdKeyboardArrowDown className={`transition-transform ease-in-out duration-300 ${isMore ? '-rotate-180' : 'rotate-0'}`} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* our service container */}
            <div className='mb-28'>
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
                                                <div className="w-[28px] aspect-square rounded-full overflow-hidden  flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-200 bg-gray-100" onClick={() => {
                                                    if (isService === index) {
                                                        setIsService(-1)
                                                    } else {
                                                        setIsService(index)
                                                    }
                                                }}>
                                                    <FaChevronDown className={`text-xl transition-transform ease-in-out duration-300 ${isService === index ? '-rotate-180' : 'rotate-0'}`} />
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

export default CorporateCopyright
