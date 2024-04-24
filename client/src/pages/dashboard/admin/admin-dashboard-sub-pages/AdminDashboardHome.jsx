import {Outlet} from 'react-router-dom'

// admin dashboard sub components
import AdminDashboardHeader from "../admin-dashboard-components/AdminDashboardHeader";
import AdminDashboardRightSideComponent from "../admin-dashboard-components/AdminDashboardRightSideComponent";

const AdminDashboardHome = () => {
  return (
    <div className="flex-grow flex flex-col h-[100vh] relative pt-[7vh]">
      <AdminDashboardHeader />
      <div className="flex-grow flex relative overflow-x-hidden">
        <div className="flex-grow w-[100%] bg-gray-50  p-[1%] overflow-y-auto">
          <Outlet />
        </div>
        <AdminDashboardRightSideComponent />
      </div>
    </div>
  );
};

export default AdminDashboardHome;
