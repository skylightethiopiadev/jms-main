import { Outlet } from 'react-router-dom'
// components
import CustomersHeader from "../customers-components/CustomersHeader"
const CustomersDashboardPacket = () => {
    return (
        <div className="flex-grow bg-white">
            <CustomersHeader />
            {/* outlet */}
            <div className='overflow-y-auto h-[93vh] h-maxv px-[.5%] sm:[.75%] md:[1%] lg:px-[3%] py-[2%] flex'>
                <Outlet />
            </div>
        </div>
    )
}

export default CustomersDashboardPacket
