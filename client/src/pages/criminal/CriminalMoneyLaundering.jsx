import React from 'react'

const CriminalMoneyLaundering = () => {
    const services = [
        {
            title: 'Criminal defence and Legal advocacy',
            text: 'Our legal team ensures a robust defence and protection of the accused’s rights, supporting in pursuing legal remedies including assistance in bail right. We advocate for individuals under suspicion or accusation from the investigation phase through to court proceedings, providing counsel and legal representation.'
        },
        {
            title: 'Preparation of legal documents',
            text: 'Our team will prepare legal documents such as statement of defence and appeal which are helpful to defend the client.',
        },
        {
            title: 'Bail and Bond Proceedings',
            text: 'Assisting clients in securing bail or bond to be released from custody pending trial.',
        },
        {
            title: 'Negotiation and plea bargaining',
            text: 'We engage in negotiation and plea bargaining with prosecutors on behalf of our clients to achieve favorable outcomes in criminal cases.',
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
                                Ordinary Crime
                            </p>
                        </div>
                        <div className='my-3'>
                            <p>
                                Facing criminal charges can lead to severe outcomes, such as incarceration, loss of job opportunities, a permanent criminal record, and in some cases, capital punishment.
                            </p>
                        </div>
                    </div>
                    <div className='w-[100%] md:w-[50%] bg-yellow-500 md:[clip-path:polygon(25%_0%,100%_0%,100%_100%,0%_100%)] h-[170px] md:h-auto'>
                        <div className='w-full h-full overflow-hidden'>
                            <img className='w-full h-full object-center object-cover' src="https://churcev.cz/wp-content/uploads/2023/05/https___churcev1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* second order container */}
            <div>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='mx-[5%] sm:mx-[10%] md:mx-[15%] bg-white shadow-2xl p-10 mt-[-24px] relative z-20'>
                        <p>
                            It’s vital to have competent legal advice to steer through the intricacies of the justice system and safeguard your legal rights. The importance of legal support cannot be overstated for those accused of crimes, as it is a fundamental aspect of ensuring a just trial and handling the potential ramifications of a conviction.
                        </p>
                    </div>
                </div>
            </div>

            {/* third order container */}
            <div className='my-28 mb-48'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row md:gap-10'>
                        {/* left - image */}
                        <div className='w-full h-[180px] md:h-auto md:w-[50%] relative'>
                            <div className='absolute inset-0 overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://5116038a59.clvaw-cdnwnd.com/0b7cd8ed47d667bd91c7bf627f174258/200000121-dd1dddd1e0/1-187248976.jpeg?ph=5116038a59" alt="" />
                            </div>
                        </div>
                        {/* right */}
                        <div className='w-full md:w-[50%]'>
                            {/* title */}
                            <div>
                                <h3 className='my-3 header-level-3'>[Title Here]</h3>
                            </div>
                            {/* text */}
                            <div>
                                <p>
                                    Under Ethiopian legal system, the entitlement to legal representation is a safeguard for those charged with criminal charges that may lead to sanctions. legal provision guarantees the right to proficient defense support. Therefore, Legal representation is a pivotal advantage for all criminal defendants, as it significantly influences their capacity to exercise their constitutional protections and secure an equitable trial process.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* forth order container */}
            <div className='bg-neutral-800 text-white mt-28'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row gap-10 py-10'>
                        <div className='w-full md:w-[35%] relative bg-inherit'>
                            <div className='absolute w-full bottom-0 rounded-md p-5 border-8 border-white left-0 h-max bg-neutral-800 z-40'>
                                <p>
                                    The primary law governing crimes in Ethiopia is the criminal code of Ethiopia, a code which outlines the conditions of criminal liability, extent of punishment, crime types, possible defenses, aggravating and mitigating conditions among many issues addressed.
                                </p>
                            </div>
                        </div>
                        <div className='w-full md:w-[65%]'>
                            {/* title */}
                            <div>
                                {/* <h3 className='header-level-3'>[Title Here]</h3> */}
                            </div>
                            {/* text */}
                            <div className='font-semibold'>
                                <p>
                                    In addition to the criminal code there exits diverse legislations like the tax, customs, anti-corruption and other proclamation which have criminal law related provisions. And crimes under these legislations could be categorized ad ordinary and special crimes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* fifth order container */}
            <div className='my-28'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col-reverse md:flex-row md:gap-10'>
                        {/* right */}
                        <div className='w-full md:w-[50%]'>
                            {/* title */}
                            <div>
                                <h3 className='my-3 header-level-3'>[Title Here]</h3>
                            </div>
                            {/* text */}
                            <div>
                                <p>
                                    Ordinary crime refers to offenses that are commonly committed in society and regulated by the criminal code, as opposed to special crimes which are regulated by special legal stipulation. Ordinary crimes encompass a wide range of offenses that are generally covered by the criminal Code. These crimes are not specific to any particular context or group and they are generally regulated by the criminal code. They are considered ordinary because they occur with some regularity in everyday life and are addressed through standard legal procedures and penalties within the legal system.
                                </p>
                            </div>
                        </div>

                        {/* left - image */}
                        <div className='w-full h-[180px] md:h-auto md:w-[50%] relative'>
                            <div className='absolute inset-0 overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://i0.wp.com/ctmirror-images.s3.amazonaws.com/wp-content/uploads/2022/10/2021_Roberts_Court_Formal_131209_Web2.jpg?fit=1500%2C891&ssl=1" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* sixth order container */}
            <div>
                {/* content container */}
                <div className='static-padding-x'>
                    <div>
                        {/* title */}
                        <div>
                            <h3 className='header-level-3'>[Title Here]</h3>
                        </div>
                        {/* text */}
                        <div>
                            <p>
                                The Ethiopian criminal code incorporates as a broad variety of offences, which could be classified as crimes against persons, crimes against the nation, financial crimes and crimes against property. These offences are usually detailed and defined in the Ethiopian Criminal Code and other related laws. The punishment for these offences might vary based on the severity of the offence and may range from death penalty to fine.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* seventh order container */}
            <div className='my-28 mb-48'>
                {/* content container */}
                <div className='static-padding-x'>
                    <div className='flex flex-col md:flex-row md:gap-10'>
                        {/* left - image */}
                        <div className='w-full h-[180px] md:h-auto md:w-[50%] relative'>
                            <div className='absolute inset-0 overflow-hidden'>
                                <img className='w-full h-full object-center object-cover' src="https://www.austinchronicle.com/binary/83a5/GettyImages-1055249400.jpg" alt="" />
                            </div>
                        </div>
                        {/* right */}
                        <div className='w-full md:w-[50%]'>
                            {/* title */}
                            <div>
                                <h3 className='my-3 header-level-3'>[Title Here]</h3>
                            </div>
                            {/* text */}
                            <div className='grid grid-cols-1 gap-y-3'>
                                <div>
                                    <p>
                                        The Ethiopian criminal code establishes a robust legal framework to address these crimes and maintain the rule of law. By defining and regulating these common offenses, the criminal code helps protect individuals and property, promote justice, and deter criminal behaviour. At the same time in order for suspected and accused parties to defend themselves the criminal code has also provided detailed legal procedures for individuals to defend themselves.
                                    </p>
                                </div>

                                <div>
                                    <p>
                                        When confronted with criminal allegations, the situation can be overwhelming, threatening essential liberties. Securing legal support is imperative, whether it’s for oneself or someone close facing arrest or investigation. Being supported by Skilled defence attorneys are key in safeguarding legal rights at every stage of the criminal proceedings.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* pre-eight order container */}
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

            {/* eighth order container */}
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
