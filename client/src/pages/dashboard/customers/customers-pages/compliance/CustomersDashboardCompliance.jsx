import {Outlet} from 'react-router-dom'

const CustomersDashboardCompliance = () => {
    return (
        <div className='bg-gray-100 rounded-md overflow-hidden flex-grow flex'>
            <Outlet />
        </div>
    )
}

export default CustomersDashboardCompliance
