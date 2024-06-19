
const CorporateBankruptcy = () => {
    const services = [
        {
            title: 'Representation',
            text: 'Acting on behalf of our clients in court, handling all legal filings, and advocating for their interests throughout the process.',
        },
        {
            title: 'Documentation',
            text: 'Preparing and reviewing all necessary legal documents, including petitions and schedules of assets and liabilities.',
        },
        {
            title: 'Negotiation',
            text: 'Working with creditors to negotiate debt settlements or payment plans.',
        },
        {
            title: 'Asset Management',
            text: 'Assisting clients in understanding which assets are exempt and how to best manage non-exempt assets during bankruptcy.',
        },
        {
            title: 'Discharge Analysis',
            text: 'Advising clients on which debts can be discharged and the potential outcomes of the bankruptcy.',
        },
        {
            title: 'Credit Counseling',
            text: 'Guiding clients through mandatory credit counseling and financial management courses required during bankruptcy.',
        },
        {
            title: 'Preventive Restructuring',
            text: 'Advising on early intervention strategies, negotiating debt restructuring agreements, and facilitating stakeholder negotiations to avoid insolvency.',
        },
        {
            title: 'Reorganization',
            text: 'Assisting in the development of reorganization plans, advising on operational and financial restructuring, and representing clients in court proceedings.'
        },
        {
            title: 'Bankruptcy',
            text: 'Providing guidance through the bankruptcy process, including filing petitions, representing debtors or creditors, and managing the liquidation or reorganization of assets.',
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
                                <img className="w-full h-full object-center object-cover" src="https://www.debt.org/wp-content/uploads/2015/06/File-For-Bankruptcy.jpg" alt="" />
                            </div>
                        </div>
                        <div className="absolute inset-0 z-10 bg-gradient-to-r from-white to-transparent"></div>
                    </div>
                </div>
                {/* content container */}
                <div className="static-padding-x py-16 relative z-20">
                    <div>
                        <div className="text-5xl font-bold my-2">
                            <p>Bankruptcy Legislation</p>
                        </div>
                        <div>
                            <span>Coercive tool for creditors to compel payment from debtors</span>
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
                                The progression of bankruptcy laws
                            </p>
                        </div>
                        <div className='my-3'>
                            <p>
                                The progression of bankruptcy laws reflects the diverse economic and sociopolitical contexts across nations, leading to nuanced legal infrastructures.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] bg-yellow-500 md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] h-[170px] md:h-auto'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://static.news.bitcoin.com/wp-content/uploads/2023/02/coin-cloud-bankruptcy.jpg" alt="" />
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
                            <p>Commercial Code of Ethiopia</p>
                        </div>
                        <div className='text-center'>
                            <p>
                                In the current commercial landscape, entities grappling with fiscal challenges are empowered by novel provisions in the Commercial Code of Ethiopia to engage in preventive restructuring and reorganization proceedings.
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
                                Preventive Restructuring
                            </p>
                        </div>
                        <div>
                            <p>
                                Preventive Restructuring is a legal process designed to facilitate the reorganization of a debtor’s financial obligations with the full agreement of all involved creditors. It allows a financially distressed but viable business to restructure its debts in an efficient and effective manner at an early stage, either to continue its operations or to prepare for the sale of the business as an ongoing concern.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%]'>
                        <div className='w-full h-[210px] md:h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://res.cloudinary.com/zenbusiness/q_auto,w_1200,h_800,c_lfill/v1/shared-assets/s2/raster/depressed-businessman-with-downward-arrow.jpg" alt="" />
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
                            <img className='w-full h-full object-center object-cover' src="https://i.insider.com/6536ab8196f7540cd06325b5?width=700" alt="" />
                        </div>
                    </div>

                    <div className='w-[100%] md:w-[50%] py-5 md:py-10'>
                        <div className='header-level-3 capitalize'>
                            <p>
                                Reorganization Procedure
                            </p>
                        </div>
                        <div>
                            <p>
                                Reorganization is a remedial process activated when a business is in severe financial trouble or insolvency, rendering it incapable of fulfilling its monetary commitments. It serves as a corrective action to address pre-existing fiscal issues.
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
                            <div>
                                <p>
                                    Thus, reorganization serves as an intermediary step between Preventive Restructuring and Bankruptcy (liquidation), involving rigorous court oversight, including the appointment of a supervisory judge and a supervisor.
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
                                <img className='w-full h-full object-center object-cover' src="https://bunny-wp-pullzone-bevwoe5i5b.b-cdn.net/wp-content/uploads/2022/12/claiming-bankruptcy.jpg" alt="" />
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[50%]'>
                            <div className='header-level-3'>
                                <p>
                                    Bankruptcy (liquidation)
                                </p>
                            </div>
                            <div className='my-3'>
                                <p>
                                    Bankruptcy, distinct from Preventive Restructuring (PR) and reorganization, refers to the definitive cessation of a company’s operations.
                                </p>
                            </div>
                            <div className='bg-white p-5 shadow-lg'>
                                <div className='px-5 border-l-4 border-yellow-400'>
                                    <p>
                                        The objective is to manage the liquidation of the debtor’s business in a timely, efficient, and effective manner. This may involve dismantling the business piece by piece or selling it as an ongoing concern, with the aim of optimizing asset value for creditor reimbursement.
                                    </p>
                                </div>
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

export default CorporateBankruptcy
