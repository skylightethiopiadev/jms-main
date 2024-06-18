import React from 'react'

const CorporateMerger = () => {
    const services = [
        {
            title: 'Legal advice and regulatory compliance',
            text: 'Our firm provides comprehensive guidance on issues related to mergers and divisions. We support our clients in examining their options and understanding the consequences of their decisions. Considering the variety of laws relevant to mergers and divisions, we ensure that all actions and decisions comply with legal standards.',
        },
        {
            title: 'Structuring Transactions',
            text: 'Providing guidance on the best transaction structure to meet strategic objectives, while taking into account tax implications and regulatory mandates.',
        },
        {
            title: 'Due Diligence',
            text: 'To mitigate potential risks and liabilities, we will undertake a comprehensive evaluation of the financial, operational, and legal facets and any associated issues within business organizations before finalizing a deal.',
        },
        {
            title: 'Risk Management',
            text: 'Vigilantly monitoring the merger or division process, proactively addressing potential legal risks, and safeguarding client interests is essential. This encompasses the thorough assessment, evaluation, and mitigation of risks to secure the new entity’s success and financial health.',
        },
        {
            title: 'Contract drafting and negotiation',
            text: 'The legal aspects of mergers and divisions require the drafting and negotiation of various contracts. Our role is to assist in creating these professional agreements and actively engage in the negotiation proceedings to ensure a smooth transition.',
        },
        {
            title: 'Representation',
            text: 'Mergers and divisions entail intricate discussions and negotiations with various stakeholders and regulatory bodies. To navigate these processes efficiently, we will act on your behalf, ensuring your representation throughout.',
        },
        {
            title: 'Post-Integration',
            text: 'This service involves facilitating the integration of entities, resolving corporate governance matters, and ensuring seamless operational alignment.',
        },
        {
            title: 'Employment and Labor Issues',
            text: 'Providing guidance on the impact of merger or division  on workforce agreements and employee relations, while ensuring compliance with employment regulations and facilitating the smooth transition of staff.'
        },
        {
            title: 'Intellectual Property',
            text: 'We provide extensive legal counsel to assist in safeguarding and transferring intellectual property rights among organizations. Additionally, we conduct thorough due diligence related to intellectual property to ensure meticulous oversight.',
        },
    ]

    return (
        <div>
            {/* zero order container */}
            <div className="relative">
                {/* bg */}
                <div className="absolute inset-0 bg-white z-0 flex">
                    <div className="w-[50%] bg-white"></div>
                    <div className="w-[50%] relative">
                        <div className="absolute inset-0 z-0">
                            <div className="w-full h-full overflow-hidden">
                                <img className="w-full h-full object-center object-cover" src="https://legaldux.com/wp-content/uploads/2020/06/istockphoto-1131985774-170667a.jpg" alt="" />
                            </div>
                        </div>
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white to-transparent"></div>
                    </div>
                </div>
                {/* content container */}
                <div className="static-padding-x py-16 relative z-20">
                    <div>
                        <div className="text-5xl font-bold my-2">
                            <p>Merger and Division</p>
                        </div>
                        <div>
                            <span>Key strategies in corporate restructuring and expansion</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* first order container */}
            <div className='relative mt-10'>
                {/* content container */}
                <div className='static-padding-x flex flex-col-reverse md:flex-row'>
                    <div className='py-7 md:py-12 w-[100%] md:w-[50%]'>
                        <div className='header-level-3'>
                            <p>
                                Merger
                            </p>
                        </div>
                        <div className='my-3'>
                            <p>
                                A merger unites multiple companies into one, aiming for operational synergies, broader market presence, or a stronger competitive position.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] bg-yellow-500 md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] h-[170px] md:h-auto'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://natlawreview.com/sites/default/files/styles/article_image/public/2024-05/Corporation%20Business%20Meeting%20Cooperation%20Problem%20Solving.jpg?h=c567c2f4&itok=9eis4r7E" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div>
                <div className='static-padding-x'>
                    {/* content container */}
                    <div className='max-w-[640px] mx-auto p-5 rounded-md bg-white shadow-2xl mt-[-16px] md:mt-[-50px] relative z-10 flex flex-col items-center gap-3'>
                        <div className='header-level-3 capitalize'>
                            <p>Division</p>
                        </div>
                        <div className='text-center'>
                            <p>
                                Division separates a company into distinct entities, often to enhance operational efficiency, concentrate on primary strengths, or increase value for shareholders.
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
                                Merger by acquisition
                            </p>
                        </div>
                        <div>
                            <p>
                                Merger by acquisition is a corporate strategy where one business takes over other business entities. Under the new legislation, it is described as an action in which one or more companies are dissolved without undergoing liquidation, and all their assets and liabilities are assimilated by an existing organization. In this scenario, the acquired businesses cease to exist as separate legal entities, and their assets and liabilities become part of the acquiring company’s portfolio. This process streamlines the consolidation of businesses and resources without the need for liquidation procedures.

                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%]'>
                        <div className='w-full h-[210px] md:h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://imageio.forbes.com/blogs-images/allbusiness/files/2014/12/Fotolia_73155469_Subscription_Monthly_M.jpg?format=jpg&height=900&width=1600&fit=bounds" alt="" />
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
                            <img className='w-full h-full object-center object-cover' src="https://imageio.forbes.com/specials-images/imageserve/62c597ffc9297f98aff9d82f/Close-Up-Of-Woman-Hand-On-Table/960x0.jpg?height=474&width=711&fit=bounds" alt="" />
                        </div>
                    </div>

                    <div className='w-[100%] md:w-[50%] py-5 md:py-10'>
                        <div className='header-level-3 capitalize'>
                            <p>
                                Merger by forming a new organization
                            </p>
                        </div>
                        <div>
                            <p>
                                Merger by formation of a new organization is a strategic corporate action where two or more companies unite to create a new organization. As per Ethiopian law, it is defined as the process by which multiple business entities are terminated without liquidation, with all their assets and liabilities being transferred to a newly established organization that they collectively form. This method results in the consolidation of the merging businesses into a completely new corporate entity. 
                            </p>
                        </div>
                        <div>
                            <p>
                                Differing from preventive restructuring, the reorganization procedure is compulsory; a debtor may be compelled to undergo this process.
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
                            <div className='header-level-3'>
                                <p>
                                    Division of business organization
                                </p>
                            </div>
                            <div>
                                <p>
                                    In the context of the new commercial code of Ethiopia, Division is defined as a process in which a business organization is dissolved without undergoing liquidation. Instead, its entire assets and liabilities are allocated to multiple existing organizations or to new entities established by it.
                                </p>
                            </div>
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
                                <img className='w-full h-full object-center object-cover' src="https://etimg.etb2bimg.com/photo/108056812.cms" alt="" />
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[50%]'>
                            <div className='header-level-3'>
                                <p>
                                    Division by acquisition
                                </p>
                            </div>
                            <div className='my-3'>
                                <p>
                                    Division by acquisition is a corporate restructuring process where a business organization is dissolved without the need for liquidation. Instead, its assets and liabilities are distributed among several pre-existing organizations.
                                </p>
                            </div>
                            <div className='bg-white p-5 shadow-lg'>
                                <div className='px-5 border-l-4 border-yellow-400'>
                                    <p>
                                        The shareholders or partners from the original organization are compensated with shares in the recipient organizations, and they may also receive supplementary cash payments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* post-six order container */}
            <div className='my-10 md:my-20'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                        <div className='w-[100%] md:w-[50%] md:self-center'>
                            <div className='header-level-3'>
                                <p>
                                    Division by Formation of new organization
                                </p>
                            </div>
                            <div className='my-3'>
                                <p>
                                    In the division by formation of a new organization, the existing business entity is dissolved without undergoing liquidation.
                                </p>
                            </div>
                            <div className='bg-white p-5 shadow-lg'>
                                <div className='px-5 border-l-4 border-yellow-400'>
                                    <p>
                                        Instead, its entire assets and liabilities are allocated to one or more newly established organizations. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[50%]'>
                            <div className='w-full h-[210px] md:h-full overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://f.hellowork.com/seo/domaine/formation.jpeg" alt="" />
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

export default CorporateMerger
