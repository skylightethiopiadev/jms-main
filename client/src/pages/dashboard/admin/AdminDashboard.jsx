import { Outlet } from "react-router-dom";
// admin-components
import AdminDashboardLeftSideNav from "./admin-components/AdminDashboardLeftSideNav";
// main
const AdminDashboard = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto">
      {/* main content container */}
      <div className="w-full h-full flex">
        {/* left side nav */}
        <AdminDashboardLeftSideNav />
        {/* dashboard content containers */}
        <div className="flex-grow bg-gray-50 h-[100vh] overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
