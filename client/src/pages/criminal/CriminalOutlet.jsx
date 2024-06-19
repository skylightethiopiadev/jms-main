import React from 'react'
import { Outlet } from 'react-router-dom'

const CriminalOutlet = () => {
    return (
        <div className='text-[1.05rem] text-justify'>
            <Outlet />
        </div>
    )
}

export default CriminalOutlet
