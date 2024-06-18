// cases sub pages
import CasesHeader from "./CasesHeader";
import CasesManagement from "./CasesManagement";

const SuperAdminCases = () => {
  return (
    <div
      className="w-full h-full overflow-y-auto pr-1"
      id="super-admin-case-management-container"
    >
      <div className="w-full h-max min-h-[90vh] bg-white rounded-xl">
        <CasesHeader />
        <CasesManagement />
      </div>
    </div>
  );
};

export default SuperAdminCases;
