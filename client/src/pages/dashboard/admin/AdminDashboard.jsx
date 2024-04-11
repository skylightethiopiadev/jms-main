// admin dashboard sub components
import AdminDashboardLeftSideNav from "./admin-dashboard-components/AdminDashboardLeftSideNav";
// admin dashboard sub pages
import AdminDashboardHome from "./admin-dashboard-sub-pages/AdminDashboardHome";

const AdminDashboard = () => {
  return <div className="w-screen h-screen flex">
    <AdminDashboardLeftSideNav />
    <AdminDashboardHome />
  </div>;
};

export default AdminDashboard;
