import {Outlet} from 'react-router-dom'

const CustomersDashboardOnRequest = () => {
    return (
        <div className='flex-grow bg-white overflow-y-auto pr-1'>
            <Outlet />
        </div>
    )
}

export default CustomersDashboardOnRequest
