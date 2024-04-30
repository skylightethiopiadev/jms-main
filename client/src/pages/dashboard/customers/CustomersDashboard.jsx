
// components
import CustomersSideNav from "./customers-components/CustomersSideNav"
// container
import CustomersDashboardPacket from "./customers-container/CustomersDashboardPacket"

const CustomersDashboard = () => {
    return (
        <div className="w-screen h-screen relative overflow-x-hidden overflow-y-auto">
            {/* background */}
            <div className="absolute left-0 top-0 w-full h-full flex -z-50">
                {/* white */}
                <div className="w-[50%] h-full bg-gray-100"></div>
                {/* gray */}
                <div className="w-[50%] h-full bg-white-100">
                    {/* header background */}
                    <header className="w-full h-[7vh] bg-white border-b border-gray-200"></header>
                </div>
            </div>
            {/* content container */}
            <div className="bg-transparent relative z-0 max-w-[1500px] mx-auto h-[100vh] overflow-y-auto px-[1%] flex">
                <CustomersSideNav />
                <CustomersDashboardPacket />
            </div>
        </div>
    )
}

export default CustomersDashboard
