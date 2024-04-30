import { Outlet } from 'react-router-dom'
// components
import CustomersHeader from "../customers-components/CustomersHeader"
const CustomersDashboardPacket = () => {
    return (
        <div className="flex-grow bg-white">
            <CustomersHeader />
            {/* outlet */}
            <div className='overflow-y-auto h-[93vh] px-[3%] py-[2%]'>
                <Outlet />
            </div>
        </div>
    )
}

export default CustomersDashboardPacket
