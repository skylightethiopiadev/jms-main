import React from 'react'

// icons
import { GoArrowRight } from "react-icons/go";

const CorporateTradeInvestmentOthers = () => {

    const services = [
        {
            title: 'Formation and Structuring',
            text: 'We provide strategic support in the development of Group companies, involving the formation of Group holding entities and their subsidiary units. Our expertise is directed towards selecting an architecture that is congruent with the company’s strategic ambitions, fiscal responsibilities, and statutory obligations. Draft shareholder agreements, articles of association, and other foundational documents to define ownership, control, and governance within the group.',
        },
        {
            title: 'Compliance and Regulatory Matters',
            text: 'Ensure that the group complies with the prevailing legislations governing Grouping of business. Guide companies through mergers, acquisitions, and restructuring, ensuring compliance with prevailing legislations.',
        },
        {
            title: 'Intellectual Property (IP) Protection',
            text: 'Assist in IP management within the group. This includes registering trademarks, patents, and copyrights, as well as handling licensing agreements.   Ensure that IP rights are properly assigned or licensed among group entities.',
        },
        {
            title: 'Tax Planning and Optimization',
            text: 'Work closely to devise tax-efficient group structures. We consider transfer pricing, intercompany transactions, and tax treaties. Advise on group relief, consolidated tax returns, and other tax-saving mechanisms.',
        },
        {
            title: 'Dispute Resolution and Litigation',
            text: 'We represent companies in arbitration, mediation, or court proceedings.',
        },
        {
            title: 'Corporate Governance',
            text: 'Provide guidance on board composition, director duties, and fiduciary responsibilities. Assist in drafting group policies, ensuring transparency, accountability, and ethical conduct.',
        },
        {
            title: 'Cross-Border Transactions',
            text: 'For multinational groups, we navigate cross-border legal complexities. We address issues related to different legal systems, currencies, and cultural norms. Facilitate international contracts, joint ventures, and cross-border financing.',
        },
    ]

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
                            <img className='w-full h-full object-center object-cover' src="https://www.earth-th.com/wp-content/uploads/2018/08/group-company.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* content container */}
                <div className='px-[1%] sm:px-[3%] md:px-[5%] lg:px-[7%] xl:px-[10%]'>
                    <div>
                        <div className='w-[95%] sm:[85%] md:w-[65%] py-16'>
                            {/* title */}
                            <div>
                                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Group of companies</h1>
                            </div>
                            {/* intro text */}
                            <div className='my-2'>
                                <p>
                                    Group companies are organized as a network of a parent company and its subsidiary entities, with the parent typically maintaining a dominant stake, usually through a majority of shares. This structure enables the parent to guide or manage the subsidiary companies’ strategies and activities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div className='my-20'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div>
                        {/* bold text */}
                        <div className='header-level-3'>
                            <p>Our Dedicated Team of Legal Professionals</p>
                        </div>
                        <div className='my-5'>
                            <p>
                                At Makuta Law Firm, our dedicated team of legal professionals is committed to meticulously creating and examining contracts, ensuring compliance with Ethiopian regulations while placing your priorities at the forefront
                            </p>
                        </div>
                        {/* expert grids */}
                        <div className='flex items-center justify-center my-5'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                                {
                                    [...Array(4)].map((item, index) => {
                                        return (
                                            <div key={index} className='bg-black bg-opacity-5 rounded-md p-3'>
                                                {/* image */}
                                                <div className='w-[64px] aspect-square rounded-full overflow-hidden'>
                                                    <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                                                </div>
                                                <div className='font-bold mt-2'>
                                                    <h3>Haddis Fanta</h3>
                                                </div>
                                                <div>
                                                    <p>
                                                        Sequi laudantium explicabo molestiae tenetur alias dolores velit in totam inventore
                                                    </p>
                                                </div>
                                                <div className='mt-3'>
                                                    <button className='flex items-center justify-center gap-1 px-5 py-1 rounded-full border border-yellow-500 hover:bg-yellow-500 hover:text-white transition-colors ease-in-out duration-300 bg-transparent text-yellow-500'>
                                                        <span>Contact</span>
                                                        <GoArrowRight />
                                                    </button>
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

            {/* third order container */}
            <div className='relative'>
                {/* content container */}
                <div className='static-padding-x flex flex-col-reverse md:flex-row'>
                    <div className='py-7 md:py-12 w-[100%] md:w-[50%]'>
                        <div className='text-5xl font-bold capitalize'>
                            <p>
                                prevalence of group companies
                            </p>
                        </div>
                        <div className='my-3'>
                            <p>
                                The global prevalence of group companies is significant and is becoming increasingly relevant in Ethiopia's expanding economy. As these business entities grow, it is crucial to regulate them to maintain transparency, accountability, and fair market practices.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] bg-yellow-500 md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] h-[170px] md:h-auto'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://t3.ftcdn.net/jpg/01/90/16/76/360_F_190167656_cK3yLZL56RgApdgEd0IGJV28N4qrk6fC.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* fourth order container */}
            <div className='my-5 md:my-20 bg-neutral-700'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-white py-10'>
                        <div>
                            <div>
                                <p>
                                    Group companies under Ethiopian law consist of a parent company and its subsidiaries, which can be both domestic and foreign entities. The eligible business organizations allowed to form this company form are share companies (S.C.), private limited companies (PLC), and one-member private limited companies.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* fifth order container */}
            <div className='my-5 md:my-28'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='w-[100%] md:w-[50%] relative'>
                            <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://www.doola.com/wp-content/uploads/2023/10/Parent-Subsidiary-LLC-Structure.jpg" alt="" />
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-t-transparent md:border-b-gray-200 md:border-l-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
                            {/* bold text */}
                            <div className='header-level-3 capitalize'>
                                <p>
                                    Parent Company
                                </p>
                            </div>
                            {/* normal text */}
                            <div className='my-5'>
                                <p>
                                    Parent companies are defined under the law to be a company that has subjected another company to control either directly or indirectly through the instrumentality of another company.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* sixth order container */}
            <div className='my-5 md:my-28'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row'>
                        <div className='w-[100%] md:w-[50%] py-7 px-5 border border-gray-200 border-b-transparent md:border-b-gray-200 md:border-r-transparent bg-white transition-all ease-in-out duration-300 hover:border-gray-100 hover:shadow-md'>
                            {/* bold text */}
                            <div className='header-level-3 capitalize'>
                                <p>
                                    Subsidiary
                                </p>
                            </div>
                            {/* normal text */}
                            <div className='my-5'>
                                <p>
                                    A subsidiary is a company that is subject to the control of another company, known as the “parent” company. This control can be either direct or indirect, often through other intermediary companies. Subsidiaries operate under the umbrella of the parent company and are typically owned by it.
                                </p>
                            </div>
                        </div>
                        <div className='w-[100%] md:w-[50%] relative'>
                            <div className='md:absolute md:inset-0 h-[210px] md:h-auto overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://img.freepik.com/premium-photo/statue-justice-with-wooden-hummer_488220-25763.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* seventh order container */}
            <div className='mb-28 mt-10'>
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

export default CorporateTradeInvestmentOthers
