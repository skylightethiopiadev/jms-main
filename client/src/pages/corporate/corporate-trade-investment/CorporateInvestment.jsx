import React from 'react'

const CorporateInvestment = () => {
    const services = [
        {
            title: 'Strategic Investment Design',
            text: 'Providing guidance on the most advantageous investment framework, taking into account legal, tax, and regulatory considerations, and crafting investment approaches aimed at optimizing gains while avoiding legal risks.',
        },
        {
            title: 'Legal Compliance',
            text: 'Guaranteeing adherence to Ethiopian legal statutes and regulations concerning investment activities. Additionally, assisting in securing essential authorizations, permits, and endorsements from federal and regional regulatory bodies.',
        },
        {
            title: 'Due Diligence',
            text: 'Conducting comprehensive legal due diligence on target companies or projects to identify legal risks and liabilities. Reviewing contracts, agreements, and corporate documents to assess the legal status of the investment.',
        },
        {
            title: 'Negotiation and Drafting of Agreements',
            text: 'Negotiating and drafting, joint venture agreements, public private partnership agreements, shareholder agreements, and other legal documents and Ensuring that agreements protect the interests of the investor and comply with local laws.',
        },
        {
            title: 'Corporate Governance and Compliance',
            text: 'Establishing corporate governance structures for foreign-owned entities.   Providing ongoing legal advice on compliance with corporate laws, reporting requirements, and governance best practices.',
        },
        {
            title: 'Tax related services',
            text: 'Advising on tax-efficient investment structures and strategies to minimize tax liabilities. In addition we provide Assistance with tax registration, incentive and compliance.',
        },
        {
            title: 'Intellectual Property Protection',
            text: 'Advising on intellectual property (IP) rights protection, registration, and enforcement in Ethiopia. Moreover, when conditions arise Drafting and negotiating IP-related agreements, such as licensing and technology transfer agreements.',
        },
        {
            title: 'Labor and Employment Law',
            text: 'Advising on labor laws, employment contracts, and workforce management issues. Assisting with work permit applications for foreign employees and compliance with immigration regulations.'
        },
        {
            title: 'Dispute Resolution',
            text: 'Representing clients in dispute resolution proceedings, including arbitration, mediation, and litigation.',
        },
        {
            title: 'Government Relations and Advocacy',
            text: 'Advocating on behalf of foreign investors with government agencies and policymakers.',
        },
        {
            title: 'Exit Strategies and Disinvestment',
            text: 'Advising on exit strategies, including mergers, acquisitions, divestitures, and liquidation and Assisting with the legal aspects of disinvestment and repatriation of funds.',
        },
        {
            title: 'Crisis Management and Risk Mitigation',
            text: 'Providing legal advice and support in crisis situations, such as political instability, regulatory changes, or expropriation risks. Developing risk mitigation strategies to protect investments and assets.',
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
                                Investment 
                            </p>
                        </div>
                        <div className='my-3'>
                            <p>
                                Ethiopia stands as a beacon for investment in Africa, boasting a large population and a dynamic economy.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] bg-yellow-500 md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] h-[170px] md:h-auto'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://www.fanabc.com/english/wp-content/uploads/2023/02/FB_IMG_1677346028693.jpg" alt="" />
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
                            <p>Foreign Direct Investment</p>
                        </div>
                        <div className='text-center'>
                            <p>
                                Foreign Direct Investment (FDI) plays a significant role in bolstering Ethiopia’s economy. Factors such as its strategic location, vigorous economic progress, a well-trained workforce, and infrastructural enhancements have all magnified its attractiveness to foreign investors, leading to a marked increase in FDI.
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
                                Ethiopia’s leadership committed to fostering investment
                            </p>
                        </div>
                        <div>
                            <p>
                                The country’s investment initiatives are strategically managed by investment bodies at the federal and regional tiers, offering diverse enticements to entice overseas capital. This approach has resulted in a surge of international investor activity in multiple sectors of the economy.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%]'>
                        <div className='w-full h-[210px] md:h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://myviewsonnews.net/wp-content/uploads/2024/04/ethiopian-agriculture.jpg" alt="" />
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
                            <img className='w-full h-full object-center object-cover' src="https://www.lendio.com/wp-content/uploads/2020/09/business-people-planning.jpg" alt="" />
                        </div>
                    </div>

                    <div className='w-[100%] md:w-[50%] py-5 md:py-10'>
                        <div className='header-level-3 capitalize'>
                            <p>
                                Draft memorandum of  Association(MOA)
                            </p>
                        </div>
                        <div>
                            <p>
                                The document delineates the company’s strategic goals, equity distribution, organizational governance, and regulatory guidelines. The Memorandum of Association (MOA) must encompass specifics like the company’s designation, principal place of business, capital stock, entitlements of shareholders, duties of directors, and methodologies for executive decision-making and corporate administration.
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
                                    Obtain Permits and Licenses
                                </p>
                            </div>
                            <div>
                                <p>
                                    Depending on the specific business activities and industry sector, business need to obtain additional permits or licenses from relevant government authorities or sector-specific regulatory bodies.
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
                                <img className='w-full h-full object-center object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ethiopian_Commercial_Bank_Addis_Abeba.jpg/1024px-Ethiopian_Commercial_Bank_Addis_Abeba.jpg" alt="" />
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[50%]'>
                            <div className='header-level-3'>
                                <p>
                                    Open Bank Account
                                </p>
                            </div>
                            <div className='my-3'>
                                <p>
                                    Establishing a corporate bank account under the company’s name is essential for handling financial dealings and overseeing corporate finances.
                                </p>
                            </div>
                            <div className='bg-white p-5 shadow-lg'>
                                <div className='px-5 border-l-4 border-yellow-400'>
                                    <p>
                                        It is necessary to furnish the banking institution with mandatory documentation, which typically includes the company’s registration certificate, MOA, identification proofs for shareholders and directors, along with any other pertinent details.
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

export default CorporateInvestment
