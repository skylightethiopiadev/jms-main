import React from 'react'

// icons
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const CriminalMoneyLaundering = () => {
    const services = [
        {
            title: 'Legal Consultation',
            text: 'We offer a comprehensive legal Advising for clients on legal aspects of anti-money laundering legislations, policy, and compliance requirements.'
        },
        {
            title: 'Compliance Programs',
            text: 'Assisting clients in developing and implementing anti money laundering compliance programs to meet regulatory standards.',
        },
        {
            title: 'Due Diligence Services',
            text: 'Conducting due diligence investigations to ensure that clients’ and their financial transactions including their clients are legitimate and free from money laundering risks.',
        },
        {
            title: 'Preparation of legal documents',
            text: 'Prepare legal documents such as statement of defense, and appeal which are helpful to defend the client.',
        },
        {
            title: 'Representation in Legal Proceedings',
            text: 'Representing clients in court proceeding related to money laundering or other financial crimes charges or investigations.',
        },
        {
            title: 'Training',
            text: 'Providing training sessions for clients and their employees on anti-money laundry laws, detection methods, and prevention strategies.',
        },
        {
            title: 'Risk Assessment and Management',
            text: 'Assessing clients’ exposure to money laundering risks and advising on risk management strategies.',
        },
        {
            title: 'Negotiation and plea bargaining',
            text: 'Our team can engage in negotiation and plea bargaining with prosecutors on behalf of our clients to achieve favourable outcomes in criminal cases.',
        },
        {
            title: 'Compliance and Advisory Services',
            text: 'Our service encompasses a comprehensive approach to anti-money laundering regulations. conducting Rethe service includes regulatory adherence Reviews to ensure that your business meets all anti money laundry requirements. Our team is adept at Policy Formulation, tailoring internal controls and procedures to effectively prevent money laundering. Risk Evaluation is another critical service we provide, identifying and mitigating money laundering risks. Comprehensive Investigations involving meticulous background checks and due diligence on all clients and transactions, safeguarding your operations from potential legal exposure.',
        },
    ]
    return (
        <div>
            {/* first order container */}
            <div className='relative flex flex-col'>
                {/* header-bg */}
                <div className='relative h-[200px] lg:h-auto lg:absolute lg:inset-0 z-0 flex'>
                    {/* left */}
                    <div className='w-0 lg:w-[50%]'></div>
                    {/* right */}
                    <div className='w-[100%] lg:w-[50%] flex relative'>
                        <div className='absolute inset-0 z-0'>
                            {/* image-container */}
                            <div className='w-full h-full overflow-hidden'>
                                <img 
                                    className='w-full h-full object-center object-cover' 
                                    src="https://cdn01.alison-static.net/courses/5641/alison_courseware_intro_5641.jpg" alt="" />
                            </div>
                        </div>
                        {/* left */}
                        <div className='w-0 lg:w-[15%] bg-white relative z-10'></div>
                        {/* right */}
                        <div className='w-0 lg:w-[85%] relative z-10 bg-gradient-to-r from-white to-transparent'></div>
                    </div>
                </div>
                {/* content container */}
                <div className='static-padding-x flex flex-col-reverse md:flex-row relative z-10'>
                    <div className='lg:w-[50%] md:py-12'>
                        <div className='text-5xl font-bold  mt-3 md:mt-0 md:mb-3 text-left'>
                            <h3>Money Laundering and Financial Crimes</h3>
                        </div>
                        <div>
                            <p>
                                Money laundering, a critical facet of financial crime, poses significant challenges to global economies, businesses, and societies. It involves the concealment of the origins of illegally acquired money, typically through complex financial manoeuvres or commercial dealings. This nefarious activity allows offenders to validate and merge their tainted assets with the legitimate economy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div className='my-28'>
                {/* content container */}
                <div className='static-padding-x flex flex-col lg:flex-row gap-16'>
                    {/* left */}
                    <div className='w-full lg:w-[50%] h-[230px] lg:h-auto flex relative before:absolute before:w-full before:h-full before:border-2 before:border-yellow-500 before:bottom-5 before:left-5 z-0'>
                        {/* card */}
                        <div className='absolute left-0 -top-5 z-20 w-[75%] md:w-[50%] h-max bg-white shadow-2xl p-5 text-left'>
                            {/* top */}
                            <div className='flex items-center gap-3 my-2'>
                                <div>
                                    <div className='w-[32px]'>
                                        <img className='w-full h-full object-center object-cover' src="/final-logo.png" alt="" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className='font-bold text-lg'>[Title Here]</h3>
                                </div>
                            </div>
                            <div>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati possimus.
                                </p>
                            </div>
                        </div>
                        <div className='flex-grow overflow-hidden relative z-10'>
                            <img className='w-full h-full object-center object-cover' src="https://new.turlock.ca.us/_images/financialcrimes.jpg" alt="" />
                        </div>
                    </div>
                    {/* right */}
                    <div className='w-full lg:w-[50%]'>
                        <div>
                            <h3 className='header-level-3 my-1'>
                                [Title Here]
                            </h3>
                        </div>
                        <div>
                            <p>
                                Money laundering similar with other countries is major problem in Ethiopia which will results in serious criminal liability. The earnings of numerous illicit acts, such as human trafficking and corruption, are frequently laundered via Ethiopia's banking system, jeopardizing the country's economic integrity. In order to regulate money laundering activities in Ethiopia, the country have taken serious stapes like issuing specific money launder proclamation, including the establishment of financial intelligence service with the objective of coordinate the various institutions involved in the fight against money laundering, financing of terrorism and prefiltration financing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* third order container */}
            <div className='py-20 bg-gray-100'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div>
                        <div>
                            <h1 className='header-level-3 my-1'>[Title Here] </h1>
                        </div>
                        <div>
                            <p>
                                The detrimental impact of money laundering on the economy is profound, as it enables criminal endeavours and compromises the integrity of financial systems. Governments enforce rigorous regulations to thwart such unlawful activities, mandating strict adherence and oversight of financial dealings.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* fourth order container */}
            <div className='relative flex flex-col my-24'>
                {/* bg */}
                <div className='relative h-[200px] lg:h-auto lg:absolute lg:inset-0 z-0 flex'>
                    {/* left */}
                    <div className='w-0 lg:w-[50%]'></div>
                    {/* right */}
                    <div className='w-[100%] lg:w-[50%] flex relative'>
                        <div className='absolute inset-0 z-0'>
                            {/* image-container */}
                            <div className='w-full h-full overflow-hidden'>
                                <img
                                    className='w-full h-full object-center object-cover'
                                    src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_teaser_image/shutterstock_92847241_0.jpg?itok=fu2EjptB" alt="" />
                            </div>
                        </div>
                        {/* left */}
                        <div className='w-0 lg:w-[15%] bg-white relative z-10'></div>
                        {/* right */}
                        <div className='w-0 lg:w-[85%] relative z-10 bg-gradient-to-r from-white to-transparent'></div>
                    </div>
                </div>
                {/* content container */}
                <div className='static-padding-x flex flex-col-reverse md:flex-row relative z-10'>
                    <div className='lg:w-[50%] md:py-12'>
                        <div className='header-level-3 font-bold  my-2'>
                            <h3>[Title Here]</h3>
                        </div>
                        <div>
                            <p>
                                Nonetheless, these regulations often result in a convoluted legal environment for enterprises, requiring strong legal assistance and advocacy. Legal experts are instrumental in guiding through this maze of regulations, securing adherence, and safeguarding against possible legal challenges. Their specialized knowledge is vital for businesses to sidestep harsh sanctions and preserve their operational integrity, thereby aiding in the collective effort to prevent financial crimes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* fifth order container */}
            <div className='mb-28'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-10'>
                        {
                            [...Array(3)].map((item,index)=>{
                                return (
                                    <div className='border-2 p-5 border-gray-300 rounded-md text-left'>
                                        {/* image */}
                                        <div>
                                            <div className='w-[100px] aspect-square overflow-hidden rounded-full'>
                                                <img className='w-full h-full object-center object-cover' src="/images/lawyers/lawyer-three.jpg" alt="" />
                                            </div>
                                        </div>
                                        {/* name and rating */}
                                        <div>
                                            <h3 className='text-lg font-medium text-gray-700'>Er. Haddis Fanta</h3>
                                            <div className='w-max px-3 py-1 flex my-1 bg-green-500 rounded-sm text-white'>
                                                <IoMdStar />
                                                <IoMdStar />
                                                <IoMdStar />
                                                <IoMdStarHalf />
                                                <IoMdStarOutline />
                                            </div>
                                        </div>
                                        <div className='my-3 text-left'>
                                            <p>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium accusamus minus quia et odit adipisci.
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            {/* six order container */}
            <div className='text-white bg-neutral-800 my-20 md:my-32'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row'>

                        <div className='w-[100%] p-7 pr-0'>
                            {/* bold */}
                            <div className='header-level-3'>
                                <p>
                                    Ethiopian legal framework
                                </p>
                            </div>
                            {/* normal text */}
                            <div className='my-2'>
                                <p>
                                    At Makuta Law Firm, our dedicated team of legal professionals is committed to meticulously creating and examining a variety of contracts, ensuring compliance with Ethiopian regulations while placing your priorities at the forefront
                                </p>
                            </div>
                            {/* button */}
                            <div className='mt-5'>
                                <button className='flex items-center justify-center gap-3 px-7 py-2 border-2 border-yellow-500 bg-yellow-500 text-white transition-colors ease-in-out duration-300 hover:bg-transparent'>
                                    <span>Contact Our Legal Team</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* seventh order container */}
            <div className='my-28'>
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

export default CriminalMoneyLaundering
