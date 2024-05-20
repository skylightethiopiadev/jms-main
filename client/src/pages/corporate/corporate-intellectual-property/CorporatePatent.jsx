import { useState, useRef } from 'react'
// icons
import { FaChevronDown } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const CorporatePatent = () => {

    // states
    const [isService, setIsService] = useState(-1)
    const [isMore, setIsMore] = useState(false)
    const [isReq, setIsReq] = useState(1)

    // reference
    let readMoreRef = useRef(null)

    // local data
    const services = {
        title: 'Legal services we offer include',
        items: [
            {
                title: 'Patent Search and Analysis',
                text: 'Conducting thorough searches of existing patents to determine the novelty and patentability of an invention. Assessing whether the invention meets the legal criteria for patent protection. Evaluating prior art and existing inventions to guide inventors in their patent journey.'
            },
            {
                title: 'Patent Application Preparation',
                text: 'Drafting detailed patent applications that describe the invention’s technical specifications, claims, and drawings. Ensuring compliance with the specific requirements of the relevant patent office (e.g., the United States Patent & Trademark Office). Crafting a strong application that maximizes the chances of successful patent approval.'
            },
            {
                title: 'Filing and Prosecution',
                text: 'Submitting patent applications to the appropriate patent office. Engaging in ongoing correspondence with patent examiners to address questions, objections, and modifications to the application. Navigating the complex process to successfully obtain patents.'
            },
            {
                title: 'Patent Strategy and Counseling',
                text: 'Providing strategic advice on patent portfolio development. Advising on the best approach for protecting inventions based on business goals and market dynamics. Offering guidance on patent enforcement and defense strategies'
            },
            {
                title: 'Due Diligence and Freedom-to-Operate Analysis',
                text: 'Conducting due diligence assessments to evaluate the strength and validity of existing patents. Analyzing potential infringement risks and advising clients on navigating around existing patents. Assisting with freedom - to - operate opinions to ensure that inventors can commercialize their inventions without infringing on others’ rights.'
            },
            {
                title: 'Patent Litigation and Dispute Resolution',
                text: 'Representing clients in patent-related disputes, including infringement lawsuits. Defending patent rights or challenging the validity of existing patents. Negotiating settlements or licensing agreements.'
            },
            {
                title: 'International Patent Services',
                text: 'Assisting inventors in obtaining patents in Ethiopia. Navigating the complexities of foreign patent systems.'
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
                            <img className='w-full h-full object-center object-cover' src="https://images.ctfassets.net/8bbwomjfix8m/23Zh1GFmA7M3k3CgMRrZjl/6ea65156a30d14124a69872d1e7091f2/Chemical_Lab_Technology-min.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <div>
                        <div className='w-[95%] sm:[85%] md:w-[65%] py-16'>
                            {/* title */}
                            <div>
                                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Grants the creator exclusive legal rights to their invention</h1>
                            </div>
                            {/* intro text */}
                            <div className='my-2'>
                                <p>
                                    Allows the inventor to market, sell, manufacture, and profit from their creation. The purpose of patents is to encourage innovation by providing an incentive to share ideas through a temporary monopoly.
                                </p>
                            </div>
                            {/* read more btn */}
                            <div className='my-4'>
                                <button className='border-2 border-yellow-400 bg-yellow-400 text-white rounded-full px-10 py-2 transition-colors ease-in-out duration-300 hover:bg-white hover:text-yellow-500' onClick={() => {
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
                                <img className='w-full h-full object-center object-cover' src="https://www.obhanandassociates.com/blog/wp-content/uploads/2022/09/Getting-to-Grant-Patent-Prosecution-in-India.jpg" alt="" />
                            </div>

                            <div className='absolute top-[-58px] z-10 right-0 lg:right-[-50px] w-[50%] h-max bg-white shadow-2xl p-5 cursor-pointer'>
                                <header>
                                    <h4 className='font-bold'>Criminal Remedies</h4>
                                </header>
                                <div>
                                    <p>
                                        Patent infringement can be a criminal offense punishable by fines or imprisonment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] lg:w-[50%] py-5'>
                            <header>
                                <h4 className='header-level-3'>Patent of Invention</h4>
                            </header>
                            <div>
                                <p>
                                    A patent of invention is granted for an original and novel invention that meets specific criteria such as Novelty, Inventive Step, and industrial applicability
                                </p>
                            </div>
                            <div className='my-3'>
                                <button className='px-7 py-2 border-2 border-yellow-400 rounded-full bg-yellow-400 text-white transition-colors ease-in-out duration-300 hover:bg-white hover:text-yellow-500'>Get Legal Help</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* third order container */}
            <div className='mb-28'>
                {/* content */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <header className='mb-5'>
                        <h1 className='header-level-3'>Patentability Requirements For Patent Of Invention </h1>
                    </header>
                    <div>
                        <p>The legal framework stipulates specific criteria that an invention must meet to be considered patentable. These requirements ensure that only certain types of ideas, which meet the established legal standards, receive the protection afforded by a patent.</p>
                    </div>
                    {/* requirements */}
                    <div>
                        {/* first - req */}
                        <div className='bg-white shadow-md p-3 mb-10'>
                            <header className='flex items-center justify-between py-2'>
                                <div>
                                    <h4 className='header-level-4 hover:underline cursor-pointer' onClick={() => {
                                        setIsReq(1)
                                    }}>Novelty</h4>
                                </div>
                                <div>
                                    <div className='w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer' onClick={() => {
                                        setIsReq(1)
                                    }}>
                                        <FaChevronDown className={`transition-transform ease-in-out duration-300 ${isReq === 1 ? '-rotate-180' : 'rotate-0'}`} />
                                    </div>
                                </div>
                            </header>
                            <div className={`overflow-hidden ${isReq === 1 ? 'h-auto' : 'h-0'}`}>
                                <div className='pb-3 px-14'>
                                    <p>An invention shall be considered new if it is not anticipated by prior art. Prior art shall consist of everything disclosed to the public, anywhere in the world, by publication in tangible form or by oral disclosure, by use or in any other way, prior to the filling or, where appropriate" the priority date, of the application claiming the invention.</p>
                                </div>
                            </div>
                        </div>

                        {/* second - req */}
                        <div className='bg-white shadow-md p-3 mb-10'>
                            <header className='flex items-center justify-between py-2'>
                                <div>
                                    <h4 className='header-level-4 hover:underline cursor-pointer' onClick={() => {
                                        setIsReq(2)
                                    }}>Inventive Step</h4>
                                </div>
                                <div>
                                    <div className='w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer' onClick={() => {
                                        setIsReq(2)
                                    }}>
                                        <FaChevronDown className={`transition-transform ease-in-out duration-300 ${isReq === 2 ? '-rotate-180' : 'rotate-0'}`} />
                                    </div>
                                </div>
                            </header>
                            <div className={`overflow-hidden ${isReq === 2 ? 'h-auto' : 'h-0'}`}>
                                <div className='pb-3 px-14'>
                                    <p>The invention must not be obvious to a person with ordinary skill in the relevant field. It should involve an inventive step compared to the prior art. The inventive step is a measure of the invention’s contribution to the field; it must represent more than a trivial or expected advancement over prior art. This criterion ensures that patents are granted for truly innovative ideas rather than for mere enhancements or modifications of existing products or processes.</p>
                                </div>
                            </div>
                        </div>

                        {/* third - req */}
                        <div className='bg-white shadow-md p-3 mb-10'>
                            <header className='flex items-center justify-between py-2'>
                                <div>
                                    <h4 className='header-level-4 hover:underline cursor-pointer' onClick={() => {
                                        setIsReq(3)
                                    }}>Industrial Applicability</h4>
                                </div>
                                <div>
                                    <div className='w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 cursor-pointer' onClick={() => {
                                        setIsReq(3)
                                    }}>
                                        <FaChevronDown className={`transition-transform ease-in-out duration-300 ${isReq === 3 ? '-rotate-180' : 'rotate-0'}`} />
                                    </div>
                                </div>
                            </header>
                            <div className={`overflow-hidden ${isReq === 3 ? 'h-auto' : 'h-0'}`}>
                                <div className='pb-3 px-14'>
                                    <p>It means that the invention can be made or used in some kind of industry, which includes a broad range of activities such as agriculture, manufacturing, and services. An invention is considered to have industrial applicability if it can be produced repeatedly and has at least one practical application in any industry.
                                        If the above requirements are fulfilled, unlike copyrights, in order for patents to be protected and become binding on third parties an application must be filled to Ethiopian intellectual property office. </p>
                                </div>
                            </div>
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
                                <h4 className='header-level-3'>Non-patentable inventions</h4>
                            </header>
                            <div>
                                <p>
                                    Within the Ethiopian patent legal framework, there are specific types of inventions that are deemed non-patentable. This exclusion is based on considerations of public policy, the non-qualification of certain inventions for patent eligibility, and the potential ambiguity or contentious nature of the subject matter in question. 
                                </p>
                            </div>
                        </div>

                        <div className='w-[100%] lg:w-[50%] bg-yellow-400 relative'>
                            <div className='w-full h-full overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://i0.wp.com/cjp.org.in/wp-content/uploads/2018/12/Saffron-Judiciary-Feature-Image.png?fit=1020%2C534&ssl=1" alt="" />
                            </div>

                            <div className='absolute top-[-52px] z-10 left-0 lg:left-[-50px] w-[50%] h-max bg-white shadow-2xl p-5 cursor-pointer'>
                                <header>
                                    <h4 className='font-bold'>Civil Remedies</h4>
                                </header>
                                <div>
                                    <p>
                                        Patent holder can file a lawsuit in court to seek damages
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
                            <img className='w-full h-full object-center object-cover' src="https://www.indiaspend.com/h-upload/2020/12/10/1500x900_353924-fast-track-court-india-indiaspend1600x900.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <div>
                        <div className='w-[95%] sm:[85%] md:w-[65%] py-16'>
                            {/* title */}
                            <div>
                                <h1 className='text-3xl sm:text-4xl font-bold'>Patent infringement and remedies of the law</h1>
                            </div>
                            {/* intro text */}
                            <div className='my-2'>
                                <p>
                                    Patent infringement occurs when someone unlawfully uses, makes, sells, or imports a patented invention without the patent holder’s permission. Infringement can involve both literal infringement (directly copying the patented invention) and equivalent infringement (using a similar but non-identical invention).
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
                    <header className='md:w-[75%] mb-5'>
                        <h1 className='header-level-3'>
                            An exclusive right granted for an invention
                        </h1>
                    </header>
                    <div>
                        <div>
                            <p>
                                A patent is a form of intellectual property (IP) protection that grants the creator exclusive legal rights to their invention. It allows the inventor to market, sell, manufacture, and profit from their creation. The purpose of patents is to encourage innovation by providing an incentive to share ideas through a temporary monopoly. By disclosing the full invention in a publicly available application, inventors can recoup development costs by enforcing exclusivity, licensing, suing for damages, or selling the invention. Hence, A patent is an exclusive right granted for an invention, which can be a product or a process that provides a new way of doing something or offers a new technical solution to a problem.
                            </p>
                            <div className={`overflow-hidden ${isMore ? 'h-auto' : 'h-0'}`}>
                                <div>
                                    <p>
                                        Under Ethiopian legal system, the protection of patents is recognized both under the FDRE constitution and proclamation No. 123/1995 and Regulation number 12/1997. These laws outlines the requirements for patent eligibility, the patent application process, rights granted to patent holders, and enforcement mechanisms for patent infringement.
                                        According to Ethiopian laws, a patent is a title issued by EIPO for inventions of a person, inventions which might relate to products or process (product is when something is made and a process is when it is used for making something). Patents are applicable to inventions and these inventions are the idea of the investor. By idea the law infers an idea of an inventor which permits in practice the solution to a specific problem in the field of technology.
                                        Similar to any other intellectual property rights, patents grant the inventor an exclusive right to exploit his inventions. And the primary objectives to protect invention of individuals is to encourage local inventive activities, building technology capabilities, and to encourage transfer and adoptability of foreign technologies.
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

export default CorporatePatent
