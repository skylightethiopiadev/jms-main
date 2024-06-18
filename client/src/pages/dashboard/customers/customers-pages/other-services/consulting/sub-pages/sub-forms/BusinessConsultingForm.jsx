

const BusinessConsultingForm = () => {

    // local data
    const typeOfTrainings = [
        {
            title: 'Corporate Compliance Training',
        },
        {
            title: 'Contract Law And Negotiation Training',
        },
        {
            title: 'Employment Law Training',
        },
        {
            title: 'Litigation And Dispute Resolution Training',
        },
        {
            title: 'Real Estate Law Training',
        },
        {
            title: 'Cybersecurity And Data Protection Training',
        },
        {
            title: 'Others',
        },
    ]

    return (
        <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md  bg-white my-7">
            {/* form */}
            <div>
                {/* org detail */}
                <div>
                    <div className='font-semibold mb-1'>
                        <h3>Business Organization</h3>
                    </div>
                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='business organization' />
                    </div>
                </div>

                <div className='mt-5'>
                    <div className='font-semibold mb-1'>
                        <h3>Organization Name</h3>
                    </div>
                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='organization name' />
                    </div>
                </div>

                {/* registration detail */}
                <div className='mt-5'>
                    <div className='font-semibold mb-1'>
                        <h3>Registration Detail</h3>
                    </div>

                    <div className='grid grid-cols-3 gap-x-7 gap-y-3'>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Place Of Registration' />
                        </div>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Field Of Business' />
                        </div>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Office' />
                        </div>

                        <div>
                            <div>
                                <h3 className='font-medium'>Status Of The Business</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <select className='w-full p-0 focus:outline-none focus:ring-0 border-none'>
                                    <option >Currently Active</option>
                                    <option >Suspended</option>
                                    <option >Other Status</option>
                                </select>
                            </div>
                        </div>


                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Name Of General Manager' />
                        </div>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Incorporation Date' />
                        </div>

                    </div>
                </div>

                {/* address */}
                <div className='mt-5'>
                    <div>
                        <h3 className='font-semibold mb-1'>Address</h3>
                    </div>
                    <div className='grid grid-cols-4 gap-x-3 gap-y-3'>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Country' />
                        </div>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Region' />
                        </div>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='City' />
                        </div>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Sub-City' />
                        </div>

                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input
                                type="text"
                                className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                placeholder='Woreda' />
                        </div>

                    </div>
                </div>
            </div>

            {/*  detail */}
            <div className='mt-5'>
                <div className='font-semibold mb-1'>
                    <h3>Contact Information</h3>
                </div>

                <div className='grid grid-cols-1 gap-x-7 gap-y-3'>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='Phone Number' />
                    </div>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='Email' />
                    </div>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='Postal Code' />
                    </div>

                </div>
            </div>

            {/* personal detail detail */}
            <div className='mt-5'>
                <div className='font-semibold mb-1'>
                    <h3>Business Organization Representative Information</h3>
                </div>

                <div className='grid grid-cols-3 gap-x-7 gap-y-3'>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='First Name' />
                    </div>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='Middle Name' />
                    </div>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='Family Name' />
                    </div>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='Position' />
                    </div>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='Contact Number' />
                    </div>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <input
                            type="text"
                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                            placeholder='Email Address' />
                    </div>

                </div>
            </div>

            {/* letter */}
            <div className='mt-5'>
                <div className='font-semibold mb-1'>
                    <h3>Power Of Attorney Or Position Letter</h3>
                </div>

                <div className='grid grid-cols-1 gap-x-7 gap-y-3'>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <textarea
                            name=""
                            className='resize-none ring-0 focus:outline-none focus:ring-0 w-full border-none'
                            placeholder='letter'
                            id=""></textarea>
                    </div>

                </div>
            </div>

            {/* type of training */}
            <div className='mt-5'>
                <div className='font-semibold mb-1'>
                    <h3>Type Of Training Requested</h3>
                </div>

                <div className='flex flex-wrap gap-x-7 gap-y-3 w-full bg-white p-3'>

                    {
                        typeOfTrainings.map((item, index) => {
                            return (
                                <div>
                                    <div className='flex items-center gap-2'>
                                        <input type="checkbox" id={`training-type-${index}`} className='focus:outline-none focus:ring-0' />
                                        <label htmlFor={`training-type-${index}`} className='cursor-pointer'>{item.title}</label>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className='mt-5'>
                <div className='font-semibold mb-1'>
                    <h3>Objective Of The Training</h3>
                </div>

                <div className='grid grid-cols-1 gap-x-7 gap-y-3'>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <textarea
                            name=""
                            className='resize-none ring-0 focus:outline-none focus:ring-0 h-[110px] w-full border-none'
                            placeholder='Objective Of The Training'
                            id=""></textarea>
                    </div>

                </div>
            </div>


            {/* registration detail */}
            <div className='mt-5'>
                <div className='font-semibold'>
                    <h3>Perefferals</h3>
                </div>

                <div className='grid grid-cols-4 gap-x-7 gap-y-3'>

                    <div>
                        <div>
                            <h3 className='font-medium'>Preferred Delivery Method</h3>
                        </div>
                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <select className='w-full p-0 focus:outline-none focus:ring-0 border-none'>
                                <option >select</option>
                                <option >In Person Workshop</option>
                                <option >Online Training</option>
                                <option >Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className='font-medium'>Preferred Training Dates</h3>
                        </div>
                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input type="date" className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent' />
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className='font-medium'>Number Of Training Days</h3>
                        </div>
                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input type="number" className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent' />
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className='font-medium'>Preferred Training Venue</h3>
                        </div>
                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <select className='w-full p-0 focus:outline-none focus:ring-0 border-none'>
                                <option >select</option>
                                <option >Office</option>
                                <option >Hotel</option>
                                <option >Other</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3 className='font-medium'>Number Of Participants</h3>
                        </div>
                        <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                            <input type="number" className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent' />
                        </div>
                    </div>

                </div>
            </div>

            {/* special requirements */}
            <div className='mt-5'>
                <div className='font-semibold mb-1'>
                    <h3>Any Special Requirements</h3>
                </div>
                <div>
                    <p>
                        Please Delineate The Specific Training Objectives And Outcomes Your Organization Aims To Achieve.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-x-7 gap-y-3'>

                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                        <textarea
                            name=""
                            className='resize-none ring-0 focus:outline-none focus:ring-0 h-[130px] w-full border-none'
                            placeholder='any special requirements'
                            id=""></textarea>
                    </div>

                </div>
            </div>

            <div className='my-10'>
                <div className='flex items-center gap-5'>
                    <button className='px-5 py-1 rounded-sm bg-blue-600 text-white transition-colors ease-in-out duration-300 hover:bg-blue-500'>submit</button>
                    <button className='px-5 py-1 rounded-sm bg-gray-600 text-white transition-colors ease-in-out duration-300 hover:bg-gray-500'>cancel</button>
                </div>
            </div>

        </div>
    )
}

export default BusinessConsultingForm
