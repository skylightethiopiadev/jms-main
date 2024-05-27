import React from 'react'
import { Outlet } from 'react-router-dom'

const CriminalOutlet = () => {
    return (
        <div className='p-28'>
            <Outlet />
        </div>
    )
}

export default CriminalOutlet
