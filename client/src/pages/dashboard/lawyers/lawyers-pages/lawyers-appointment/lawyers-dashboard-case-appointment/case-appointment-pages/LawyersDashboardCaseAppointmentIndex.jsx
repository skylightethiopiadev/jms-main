import React from 'react'

import { NavLink } from 'react-router-dom'

const LawyersDashboardCaseAppointmentIndex = () => {
    return (
        <div>
            <div className='font-bold'>
                <NavLink to={'/dashboard/lawyers/appointment/case-appointment/new-case-appointment'}>New Case Appointment Form</NavLink>
            </div>
            <div>
                <h3>
                    LawyersDashboardCaseAppointmentIndex
                </h3>
            </div>
        </div>
    )
}

export default LawyersDashboardCaseAppointmentIndex
