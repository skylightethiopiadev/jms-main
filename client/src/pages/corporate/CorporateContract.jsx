import React from 'react'
import { Outlet } from 'react-router-dom'


const CorporateContract = () => {
    return (
        <div className='text-[1.05rem]'>
            <Outlet />
        </div>
    )
}

export default CorporateContract
