import React from 'react'
import { Outlet } from 'react-router-dom'

// components
import LawyersHeader from '../lawyers-components/LawyersHeader'

const LawyersDashboardPacket = () => {
    return (
        <div className="flex-grow bg-white">
            <LawyersHeader />
            {/* outlet */}
            <div className='overflow-y-auto h-[93vh] h-maxv px-[.5%] sm:[.75%] md:[1%] lg:px-[3%] py-[2%] flex'>
                <Outlet />
            </div>
        </div>
    )
}

export default LawyersDashboardPacket
