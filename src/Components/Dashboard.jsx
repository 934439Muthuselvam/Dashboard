import React from "react";
import DashboardCards from "./DashboardCards";
import OutpatientsVsInpatientsChart from "./OutpatientsVsInpatientsChart ";
import ExactChart from "./DonutBarChart";
import PatientDivision from "./PatientDivision";
import WaitingTime from "./WaitingTime";

export default function Dashboard() {
  return (
    <div>
      <h1 className="font-bold mb-10 text-2xl"> Dashboard </h1>

      <div>
        <DashboardCards />
      </div>

      <div className="flex justify-start gap-5">
        <div className="p-4 grid grid-cols-1 gap-4 mt-3">
          {/* Outpatients vs Inpatients Chart */}
          <OutpatientsVsInpatientsChart />

          <div className="bg-gray-100  w-[1050px]  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Patient Division */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <PatientDivision />
              </div>

              {/* Waiting Time */}
              <div className="bg-white shadow-lg rounded-lg p-6">
                <WaitingTime />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <ExactChart />
        </div>
      </div>
    </div>
  );
}
