import React, { useState } from 'react'

// icons
import { FaCheck } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const CorporateInvestment = () => {
    const [investmentIndex, setInvestmentIndex] = useState(0)

    const investmentTypes = [
        {
            title: 'Joint investment with the government',
            text: 'Investment in the areas listed within this category is restricted to joint ventures with the government. Collaboration with the government is a prerequisite for investing in these sectors.',
        },
        {
            title: 'Investment areas reserved for domestic investors',
            text: 'The investment sectors listed in this category are exclusively accessible to domestic investors, implying that foreign investors are not permitted to invest in these areas.',
        },
        {
            title: 'Joint investment/domestic and foreign investors',
            text: 'These investment sectors are available to foreign investors provided they form partnerships with local investors. This collaborative approach is a requirement for foreign investment in these areas.',
        },
        {
            title: 'Investment open for foreign investors',
            text: 'Except for those found under the above categories any other investment is open to foreigners.',
        },
    ]

    const investmentAreas = [
        {
            image: 'https://news.va.gov/wp-content/uploads/sites/3/2023/10/Veggies-GettyImages-870915532_vp1.jpg?w=1400',
            title: 'Agriculture',
            text: 'Opportunities in commercial farming, agro-processing, and export of agricultural products.',
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Tesla_auto_bots.jpg',
            title: 'Manufacturing',
            text: 'Investment in textile, automotive, leather, and consumer goods manufacturing.',
        },
        {
            image: 'https://justenergy.com/wp-content/uploads/2022/08/energy-storage-examples-of-renewables-and-solar.jpeg',
            title: 'Energy',
            text: 'Renewable energy projects, including hydro, wind, and solar power.',
        },
        {
            image: 'https://cdn.britannica.com/24/4624-050-D2CAB6B1/Radio-wave-dish-type-antennas-diameter-satellite-communications.jpg',
            title: 'Telecommunications',
            text: 'Expansion of telecom services and infrastructure.',
        },
        {
            image: 'https://tourismnewslive.com/wp-content/uploads/2018/05/ethiopia.jpg',
            title: 'Tourism',
            text: 'Hotels, resorts, and tourism-related infrastructure.',
        },
        {
            image: 'https://menetsir.com/cdn/shop/products/image_251ed0c4-d3cc-417a-8ae2-4dc106ba2716_1025x593.jpg?v=1611275913',
            title: 'Real Estate',
            text: 'Investment in commercial and residential real estate projects.',
        },
    ]
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
            <div className='mt-20 mb-10 md:mt-36 md:mb-20'>
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

            {/* pre-fourth order container */}
            <div>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='max-w-[850px] mx-auto p-5 border border-yellow-400 rounded-md'>
                        <header className='my-2'>
                            <p className='header-level-3 text-center capitalize'>Legislation applicable to investment in Ethiopia includes</p>
                        </header>
                        <div>
                            {/* item */}
                            <div className='flex gap-3 mt-4'>
                                <div className='flex items-start mt-1'>
                                    <div className='w-[18px] text-white text-xs aspect-square rounded-full bg-yellow-400 flex items-center justify-center'>
                                        <FaCheck />
                                    </div>
                                </div>
                                <p>The Investment Proclamation (Proclamation No. 1180/2020)</p>
                            </div>
                            {/* item */}
                            <div className='flex gap-3 mt-4'>
                                <div className='flex items-start mt-1'>
                                    <div className='w-[18px] text-white text-xs aspect-square rounded-full bg-yellow-400 flex items-center justify-center'>
                                        <FaCheck />
                                    </div>
                                </div>
                                <p>The Investment Incentives Regulation (Regulation No. 270/2012)</p>
                            </div>
                            {/* item */}
                            <div className='flex gap-3 mt-4'>
                                <div className='flex items-start mt-1'>
                                    <div className='w-[18px] text-white text-xs aspect-square rounded-full bg-yellow-400 flex items-center justify-center'>
                                        <FaCheck />
                                    </div>
                                </div>
                                <p>The Ethiopian Investment Board and Investment Commission Establishment Council of Ministers Regulation (Regulation No. 474/2021)</p>
                            </div>
                            {/* item */}
                            <div className='flex gap-3 mt-4'>
                                <div className='flex items-start mt-1'>
                                    <div className='w-[18px] text-white text-xs aspect-square rounded-full bg-yellow-400 flex items-center justify-center'>
                                        <FaCheck />
                                    </div>
                                </div>
                                <p>Investment regulation NO474/2020</p>
                            </div>
                            {/* item */}
                            <div className='flex gap-3 mt-4'>
                                <div className='flex items-start mt-1'>
                                    <div className='w-[18px] text-white text-xs aspect-square rounded-full bg-yellow-400 flex items-center justify-center'>
                                        <FaCheck />
                                    </div>
                                </div>
                                <p>Directive number 1001/2024</p>
                            </div>
                            {/* item */}
                            <div className='flex gap-3 mt-4'>
                                <div className='flex items-start mt-1'>
                                    <div className='w-[18px] text-white text-xs aspect-square rounded-full bg-yellow-400 flex items-center justify-center'>
                                        <FaCheck />
                                    </div>
                                </div>
                                <p>The Industrial Parks Proclamation (Proclamation No. 886/2015)</p>
                            </div>
                            {/* item */}
                            <div className='flex gap-3 mt-4'>
                                <div className='flex items-start mt-1'>
                                    <div className='w-[18px] text-white text-xs aspect-square rounded-full bg-yellow-400 flex items-center justify-center'>
                                        <FaCheck />
                                    </div>
                                </div>
                                <p>Tax Proclamations and Regulations</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* fourth order container */}
            <div className='my-20 bg-neutral-700'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-white py-10'>
                        <div>
                            <div>
                                <p>
                                    Local authorities are equally zealous in their quest for Foreign Direct Investment, making Ethiopia a magnet for global capital. With its doors wide open to FDI and a series of liberalization efforts, Ethiopia is quickly becoming the go-to spot for savvy investors worldwide. Before diving in, every investor, local or international, should consider the array of investment avenues available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* fifth order container */}
            <div className='md:my-36'>
                {/* content container */}
                <div className='static-padding-x'>
                    {/* header */}
                    <div>
                        {/* bold */}
                        <div className='header-level-3 mb-2'>
                            <p>Types of investment</p>
                        </div>
                        {/* normal */}
                        <div>
                            <p>
                                Ethiopia is on the rise as an investment powerhouse, with a government that’s not just investment-friendly but investment-forward. Under the strategic guidance of the Ethiopian Investment Board, chaired by none other than the Prime Minister, the nation is crafting policies that are as progressive as they are fair.
                            </p>
                        </div>
                    </div>
                    {/* accordion */}
                    <div>
                        {/* first accordion */}
                        {
                            investmentTypes.map((item, index) => {
                                return (
                                    <div key={index} className='p-1 md:p-5 rounded-sm bg-white shadow-md mt-5 text-[.85rem] md:text-[1.05rem]'>
                                        <header className='flex items-center justify-between py-2'>
                                            <div>
                                                <p className='font-bold w-max cursor-pointer hover:underline' onClick={() => {
                                                    setInvestmentIndex(index)
                                                }}>{item.title}</p>
                                            </div>
                                            <div>
                                                <div className='w-[28px] aspect-square rounded-full bg-gray-100 flex items-center justify-center transition-colors ease-in-out duration-300 hover:bg-gray-200 cursor-pointer' onClick={() => {
                                                    setInvestmentIndex(index)
                                                }}>
                                                    <MdKeyboardArrowDown className={`text-2xl transition-transform ease-in-out duration-300 ${investmentIndex === index ? '-rotate-180' : 'rotate-0'}`} />
                                                </div>
                                            </div>
                                        </header>

                                        <div className={`overflow-hidden ${investmentIndex === index ? 'h-auto' : 'h-0'}`}>
                                            <div className='pt-3 border-t border-gray-200'>
                                                <div>
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
            </div>

            {/* pre-six order container */}
            <div className='bg-neutral-50'>
                {/* content-container */}
                <div className='static-padding-x py-10'>
                    <header className='flex items-center justify-center mb-3 header-level-3'>
                        <p>Investment Areas</p>
                    </header>
                    {/* grids */}
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10'>
                            {
                                investmentAreas.map((item, index) => {
                                    return (
                                        <div key={index} className='flex flex-col bg-white border border-neutral-100 p-3 rounded-md'>
                                            {/* image */}
                                            <div className='w-[120px] aspect-[2/1.5] rounded-md overflow-hidden'>
                                                <img className='w-full h-full object-center object-cover' src={item.image} alt="" />
                                            </div>
                                            {/* title */}
                                            <div>
                                                <h3 className='font-bold my-1'>{item.title}</h3>
                                            </div>
                                            {/* text */}
                                            <div>
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
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
                                <img className='w-full h-full object-center object-cover' src="https://thereportermagazines.com/wp-content/uploads/2024/03/FuzAf-fWYAArIim-1-1.jpg" alt="" />
                            </div>
                        </div>

                        <div className='w-[100%] md:w-[50%]'>
                            <div className='header-level-3'>
                                <p>
                                    Requirements to investment in Ethiopia
                                </p>
                            </div>
                            <div className='my-3'>
                                <p>
                                    Investing in Ethiopia involves a range of intricate process that necessitate professional guidance.
                                </p>
                            </div>
                            <div className='my-3 flex gap-3 flex-wrap'>
                                <div className='p-1 bg-white shadow-md'>
                                    <p>Choosing business structure</p>
                                </div>
                                <div className='p-1 bg-white shadow-md'>
                                    <p>Obtain investment license</p>
                                </div>
                                <div className='p-1 bg-white shadow-md'>
                                    <p>Registering company</p>
                                </div>
                                <div className='p-1 bg-white shadow-md'>
                                    <p>Name reservation</p>
                                </div>
                                <div className='p-1 bg-white shadow-md'>
                                    <p>Land lease</p>
                                </div>
                                <div className='p-1 bg-white shadow-md'>
                                    <p>Acquire business license </p>
                                </div>
                                <div className='p-1 bg-white shadow-md'>
                                    <p>Tax registration</p>
                                </div>
                            </div>

                            <div className='bg-white p-5 shadow-lg'>
                                <div className='px-5 border-l-4 border-yellow-400'>
                                    <p>
                                        Investment in Ethiopia, particularly Foreign Direct Investment (FDI), is governed by a multifaceted set of legal procedures and regulations.
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

export default CorporateInvestment
