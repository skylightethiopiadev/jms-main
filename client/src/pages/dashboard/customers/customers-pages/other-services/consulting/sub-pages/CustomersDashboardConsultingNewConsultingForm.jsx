import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


// icons
import { IoExitOutline } from "react-icons/io5";

// sub-forms
import IndividualConsultingForm from './sub-forms/IndividualConsultingForm';
import BusinessConsultingForm from './sub-forms/BusinessConsultingForm';

const CustomersDashboardConsultingNewConsultingForm = () => {
    // states 
    const [consultingForm, setConsultingForm] = useState('individual')

    // hooks
    const navigate = useNavigate()



    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            {/* first order container */}
            <div >
                <header className="flex items-center justify-between">
                    <div>
                        <h3 className="header-level-4">Application Form for Consultancy</h3>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        {/* here content */}
                    </div>
                </header>
                {/* content container */}
                <div>
                    {/* text */}
                    <div>
                        <p>
                            Your customized case history dashboard awaits you. Here, you’ll discover all the latest updates and details related to your ongoing case.
                        </p>
                    </div>
                    {/* btn */}
                    <div className='mt-3 flex items-center gap-x-5 flex-wrap'>
                        <button className={`px-5 py-[.15rem] rounded-sm  text-white transition-opacity ease-in-out duration-300 ${consultingForm === 'individual' ? 'bg-blue-600' : 'bg-gray-700'} hover:opacity-85`} onClick={() => {
                            setConsultingForm('individual')
                        }}>For Individual</button>
                        <button className={`px-5 py-[.15rem] rounded-sm  text-white transition-opacity ease-in-out duration-300 ${consultingForm === 'business' ? 'bg-blue-600' : 'bg-gray-700'} hover:opacity-85`} onClick={() => {
                            setConsultingForm('business')
                        }}>For Business</button>
                    </div>
                </div>
            </div>

            {
                consultingForm === 'individual'
                    ?
                    <IndividualConsultingForm />
                    :
                    <BusinessConsultingForm />
            }
        </div>
    )
}

export default CustomersDashboardConsultingNewConsultingForm
