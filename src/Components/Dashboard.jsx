import React from "react";
import DashboardCards from "./DashboardCards";
import OutpatientsVsInpatientsChart from "./OutpatientsVsInpatientsChart ";

export default function Dashboard() {
  return (
    <div>
      <h1 className="font-bold mb-10 text-2xl"> Dashboard </h1>

      <div>
        <DashboardCards />
      </div>

      <div className="p-4 grid grid-cols-1 gap-4">

      
      {/* Outpatients vs Inpatients Chart */}
      <OutpatientsVsInpatientsChart />
    </div> 
    </div>
  );
}
