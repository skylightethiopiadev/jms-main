import React from 'react'
import { Outlet } from 'react-router-dom'

// components
import CustomersDashboardOtherServicesRightSideLinks from './other-services-components/CustomersDashboardOtherServicesRightSideLinks'
import CustomersDashboardOtherServicesFooter from './other-services-components/CustomersDashboardOtherServicesFooter'

const CustomersDashboardOtherServices = () => {
    return (
        <div className='p-[.75%] md:p-[1.5%] lg:p-[3%]  bg-gray-100 rounded-md h-max flex-grow'>
            {/* UI container */}
            <div className='flex gap-5'>
                {/* left */}
                <div className='w-[75%]'>
                    {/* outlet container */}
                    <Outlet />
                    {/* footer */}
                    <CustomersDashboardOtherServicesFooter />
                </div>
                {/* right */}
                <CustomersDashboardOtherServicesRightSideLinks />
            </div>
        </div>
    )
}

export default CustomersDashboardOtherServices
