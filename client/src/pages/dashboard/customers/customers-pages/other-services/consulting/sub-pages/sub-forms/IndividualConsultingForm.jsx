import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

// icons
import { RiPictureInPictureExitLine } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";

const IndividualConsultingForm = () => {

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

    // states
    const [employmentStatus, setEmploymentStatus] = useState({
        status: [
            {
                text: 'Full-Time',
            },
            {
                text: 'Part-Time',
            },
            {
                text: 'Self-Employed',
            },
            {
                text: 'Other',
            },
        ],
        isSelected: '',
        isOn: false,
    }, [])

    const [isEmployed, setIsEmployed] = useState(false)

    const [dependent, setDependent] = useState({
        dependents: [
        ],
        isOn: false,
    })

    const [dependentName, setDependentName] = useState('')
    const [dependentAge, setDependentAge] = useState(0)


    // hooks
    const navigate = useNavigate()


    const addDependentHandler = () => {
        setDependent(prev => {
            return {
                ...prev,
                dependents: [...prev.dependents, { name: dependentName, age: parseInt(dependentAge) }],
                isOn: false,
            }
        })
        setDependentAge(0)
        setDependentName('')
    }

    return (
        <div className="p-[.75%] md:p-[1.5%] lg:p-[3%] border-gray-200 border rounded-md  bg-white my-7">
            {/* header */}
            <header className="flex items-center justify-between mb-3 border-b border-gray-100">
                {/* left */}
                <div>
                    <h3 className="font-bold text-lg">Consultancy For Individuals</h3>
                </div>
                {/* right */}
                <div>
                    <button className='text-xl text-gray-400 hover:text-gray-700' onClick={() => {
                        navigate(-1)
                    }}>
                        <RiPictureInPictureExitLine />
                    </button>
                </div>
            </header>

            {/* form */}
            <div>
                {/* personal information */}
                <div>
                    <h3 className='font-semibold text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Personal Information</h3>
                    {/* name */}
                    <div className='grid grid-cols-3 gap-3 mt-2'>
                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>First Name</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='first name' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Last Name</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='last name' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Sir Name</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='sir name' />
                            </div>
                        </div>

                    </div>

                    {/* gender-birth-date-nation */}
                    <div className='grid grid-cols-3 gap-3 mt-5'>
                        <div className='border border-gray-200 px-1'>
                            <div className='font-semibold mb-1'>
                                <h3>Gender</h3>
                            </div>
                            <div className='flex p-1  bg-white rounded-sm gap-3'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="individual-male" name="individual_gender" value="MALE" />
                                <label for="individual-male">Male</label>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="individual-female" name="individual_gender" value="FEMALE" />
                                <label for="individual-female">Female</label>
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Date Of Birth</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="date"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='date of birth' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Nationality</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='nationality' />
                            </div>
                        </div>

                    </div>

                    {/* employment information */}
                    <div className='grid grid-cols-1 gap-3 mt-5'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Employment Information</h3>
                            </div>
                            <div className='flex p-1  bg-white rounded-sm gap-3'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="individual-employed" name="individual_employment" value="EMPLOYED" onClick={() => {
                                    setIsEmployed(true)
                                }} />
                                <label for="individual-employed" onClick={() => {
                                    setIsEmployed(true)
                                }}>Employed</label>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="individual-unemployed" name="individual_employment" value="UNEMPLOYED" onClick={() => {
                                    setIsEmployed(false)
                                }} />
                                <label for="individual-unemployed" onClick={() => {
                                    setIsEmployed(false)
                                }}>Unemployed</label>
                            </div>
                        </div>

                    </div>


                    {/* is employed ? employment information */}

                    {
                        isEmployed
                            ?
                            <div className='grid grid-cols-3 gap-3 mt-5'>

                                <div>
                                    <div className='font-semibold mb-1'>
                                        <h3>Current Employer</h3>
                                    </div>
                                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                        <input
                                            type="text"
                                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                            placeholder='current employer' />
                                    </div>
                                </div>

                                <div>
                                    <div className='font-semibold mb-1'>
                                        <h3>Job Title</h3>
                                    </div>
                                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                        <input
                                            type="text"
                                            className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                            placeholder='job title' />
                                    </div>
                                </div>

                                <div>
                                    <div className='font-semibold mb-1'>
                                        <h3>Employment Status</h3>
                                    </div>
                                    <div className='flex p-1 border border-gray-200 bg-white rounded-sm relative'>
                                        <div className='flex items-center w-full cursor-pointer' onClick={() => {
                                            setEmploymentStatus(prev => {
                                                return {
                                                    ...prev,
                                                    isOn: !prev?.isOn,
                                                }
                                            })
                                        }}>
                                            <div className='flex-grow'>
                                                {
                                                    employmentStatus?.isSelected
                                                        ?
                                                        <span className='text-[.95rem]'>{employmentStatus?.isSelected}</span>
                                                        :
                                                        <span className='text-gray-500 text-[.95rem]'>employment status</span>
                                                }
                                            </div>
                                            <MdKeyboardArrowDown className={`text-xl transition-transform ease-in-out duration-300 ${employmentStatus?.isOn ? '-rotate-180' : 'rotate-0'}`} />
                                        </div>
                                        {/* pop up list */}
                                        <div className={`absolute left-0 top-[110%] w-full overflow-hidden transition-all ease-in-out duration-300 ${employmentStatus?.isOn ? 'h-[250px]' : 'h-0'}`}>
                                            <div className='bg-white border border-gray-200 rounded-sm'>
                                                {
                                                    employmentStatus?.status.map((item, index) => {
                                                        return (
                                                            <div className='py-1 px-3 border-b border-gray-200 cursor-pointer transition-colors ease-in-out duration-300 hover:bg-blue-100' onClick={() => {
                                                                setEmploymentStatus(prev => {
                                                                    return {
                                                                        ...prev,
                                                                        isOn: false,
                                                                        isSelected: item?.text,
                                                                    }
                                                                })
                                                            }}>
                                                                <span>{item?.text}</span>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            :
                            <></>
                    }


                    <h3 className='font-semibold text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Address</h3>
                    {/* address */}
                    <div className='grid grid-cols-3 gap-3 mt-2'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Country</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='country' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Region</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='region' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>City</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='city' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Sub-City</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='sub-city' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Woreda</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='woreda' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>House Number</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='house number' />
                            </div>
                        </div>

                    </div>

                    {/* marital status */}
                    <div className='grid grid-cols-1 gap-3 mt-5'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Marital Status</h3>
                            </div>
                            <div className='flex p-1  bg-white rounded-sm gap-3'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="marital_status_married" name="marital_status" value="Married" />
                                <label for="marital_status_married">Married</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="marital_status_separated" name="marital_status" value="Separated" />
                                <label for="marital_status_separated" >Separated</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="marital_status_divorced" name="marital_status" value="Divorced" />
                                <label for="marital_status_divorced" >Divorced</label>

                            </div>
                        </div>

                    </div>


                    {/* dependent information */}
                    <h3 className='font-medium text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Dependents Information</h3>
                    {/* get info */}
                    <div className='mt-2'>

                        {/* lists here */}
                        <div>
                            <div className='ml-2'>
                                {
                                    dependent?.dependents.map((item, index) => {
                                        return (
                                            <div className='flex items-center gap-1'>
                                                <div>
                                                    <span>{index + 1}. </span>
                                                </div>
                                                <div className='flex items-center gap-5'>
                                                    <div className='flex items-center gap-1'>
                                                        <span>Name: </span>
                                                        <span>{item.name}</span>
                                                    </div>
                                                    <div className='flex items-center gap-1'>
                                                        <span>Age: </span>
                                                        <span>{item.age}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* data input  */}
                        {
                            dependent?.isOn
                                ?
                                <div>
                                    <div className='grid grid-cols-2 gap-3 py-3'>
                                        <div>
                                            <div className='font-semibold mb-1'>
                                                <h3>Full Name</h3>
                                            </div>
                                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                                <input
                                                    type="text"
                                                    value={dependentName}
                                                    onChange={e => setDependentName(e.target.value)}
                                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                                    placeholder='full name' />
                                            </div>
                                        </div>

                                        <div>
                                            <div className='font-semibold mb-1'>
                                                <h3>Age</h3>
                                            </div>
                                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                                <input
                                                    type="number"
                                                    onChange={e => setDependentAge(e.target.value)}
                                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                                    placeholder='age' />
                                            </div>
                                        </div>
                                    </div>
                                    <button className='px-1 py-0.5 bg-blue-500 text-white rounded-sm' onClick={() => {
                                        addDependentHandler()
                                    }}>add</button>
                                </div>
                                :
                                <div className='mt-3'>
                                    <div className='w-[30px] aspect-square rounded-full flex items-center justify-center bg-blue-500 text-white text-xl cursor-pointer' onClick={() => {
                                        setDependent(prev => {
                                            return {
                                                ...prev,
                                                isOn: true,
                                            }
                                        })
                                    }}>
                                        <IoMdAdd />
                                    </div>
                                </div>
                        }

                        {/* add button */}
                    </div>


                    <h3 className='font-semibold text-gray-700 w-max border-b border-gray-300 text-lg mt-5'>Contact Information</h3>
                    {/* contact information */}
                    <div className='grid grid-cols-3 gap-3 mt-2'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Phone Number</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='phone number' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Email</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="text"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='email' />
                            </div>
                        </div>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Postal Code</h3>
                            </div>
                            <div className='flex p-1 border border-gray-200 bg-white rounded-sm'>
                                <input
                                    type="number"
                                    className='w-full p-0 ring-0 focus:ring-0 outline-none border-none bg-transparent'
                                    placeholder='postal code' />
                            </div>
                        </div>

                    </div>

                    {/* preferred communication method */}
                    <div className='grid grid-cols-1 gap-3 mt-5'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Preferred Communication Method</h3>
                            </div>
                            <div className='flex p-1  bg-white rounded-sm gap-3'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-phone" name="communication_method" value="Married" />
                                <label for="communication-phone">phone</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-email" name="communication_method" value="Separated" />
                                <label for="communication-email" >email</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-text" name="communication_method" value="Divorced" />
                                <label for="communication-text" >text</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-other" name="communication_method" value="Divorced" />
                                <label for="communication-other" >other</label>

                            </div>
                        </div>

                    </div>


                    {/* criminal history (for criminal case) */}
                    <div className='grid grid-cols-1 gap-3 mt-5'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Criminal History (For Criminal Case)</h3>
                            </div>
                            <div className='flex p-1  bg-white rounded-sm gap-3'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="individual-criminal-history-yes" name="individual-criminal-history" value="YES" />
                                <label for="individual-criminal-history-yes">Yes</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="individual-criminal-history-no" name="individual-criminal-history" value="NO" />
                                <label for="individual-criminal-history-no" >No</label>
                            </div>
                        </div>

                    </div>


                    {/* prior legal representation over the legal issue */}
                    <div className='grid grid-cols-1 gap-3 mt-5'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Prior Legal Representation Over The Legal Issue</h3>
                            </div>
                            <div className='flex p-1  bg-white rounded-sm gap-3'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="individual-legal-representation-yes" name="individual-legal-representation" value="YES" />
                                <label for="individual-legal-representation-yes" >Yes</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="individual-legal-representation-no" name="individual-legal-representation" value="NO" />
                                <label for="individual-legal-representation-no" >No</label>
                            </div>
                        </div>

                    </div>

                    {/* preferred time of communication */}
                    <div className='grid grid-cols-1 gap-3 mt-5'>

                        <div>
                            <div className='font-semibold mb-1'>
                                <h3>Preferred Time Of Communication</h3>
                            </div>
                            <div className='flex p-1  bg-white rounded-sm gap-3'>
                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-time-morning" name="communication-time" value="Morning" />
                                <label for="communication-time-morning">Morning</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-time-afternoon" name="communication-time" value="Afternoon" />
                                <label for="communication-time-afternoon" >Afternoon</label>

                                <input className='outline-none ring-0 focus:ring-0 focus:outline-none' type="radio" id="communication-time-evening" name="communication-time" value="Evening" />
                                <label for="communication-time-evening" >Evening</label>


                            </div>
                        </div>

                    </div>


                    {/* submit or cancel buttons */}
                    <div className='my-5 flex items-center gap-5'>
                        <button className='px-5 py-1 rounded-sm bg-blue-500 text-white transition-colors ease-in-out duration-300 hover:bg-blue-600'>submit</button>
                        <button className='px-5 py-1 rounded-sm bg-gray-600 text-white transition-colors ease-in-out duration-300 hover:bg-gray-800'>cancel</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default IndividualConsultingForm
