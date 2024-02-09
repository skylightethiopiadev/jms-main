import React, { useContext } from "react";
import Tables from "../../../components/Tables";
import { mobileContext } from "../HomeDashboard";
import { MoreHoriz } from "@mui/icons-material";

const Read = () => {
  const context = useContext(mobileContext);
  const data = [
    {
      id: 1,
      name: "Family",
      type: "Divorce",
    },
  ];

  const columns = [
    {
      name: "name",
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {row.name}
        </div>
      ),
      sortable: true,
    },
    {
      name: "type",
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {row.type}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          <MoreHoriz sx={{ width: 20, height: 20 }} />
        </div>
      ),
      sortable: true,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Tables columns={columns} data={data} title="All categories" />
    </div>
  );
};

export default Read;
