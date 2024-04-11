// admin dashboard sub components
import AdminDashboardHeader from "../admin-dashboard-components/AdminDashboardHeader";
import AdminDashboardRightSideComponent from "../admin-dashboard-components/AdminDashboardRightSideComponent";

const AdminDashboardHome = () => {
  return (
    <div className="flex-grow bg-green-400 flex flex-col h-[100vh] relative pt-[7vh]">
      <AdminDashboardHeader />
      <div className="flex-grow flex">
        <div className="flex-grow bg-yellow-300 h-[93vh]">Contents Here ...</div>
        <AdminDashboardRightSideComponent />
      </div>
    </div>
  );
};

export default AdminDashboardHome;
