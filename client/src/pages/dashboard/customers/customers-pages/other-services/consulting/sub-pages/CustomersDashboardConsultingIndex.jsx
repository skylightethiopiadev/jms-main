import React from 'react'
import {NavLink} from 'react-router-dom'

const CustomersDashboardConsultingIndex = () => {
    return (
        <div className='overflow-x-hidden flex-grow pr-1'>
            <div>
                <NavLink to={'/dashboard/customers/other-services/consulting/new-consulting-form'}>
                    <h3 className="font-bold">New Consulting Form</h3>
                </NavLink>
            </div>
            CustomersDashboardConsultingIndex
            CustomersDashboardConsultingIndex
        </div>
    )
}

export default CustomersDashboardConsultingIndex
