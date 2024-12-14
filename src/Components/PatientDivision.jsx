import React, { useState, useEffect } from "react";

const PatientDivision = () => {
  const patientData = [
    { division: "Surgery", inpatient: 9471, outpatient: 17642 },
    { division: "Dermatology", inpatient: 6869, outpatient: 13053 },
    { division: "Neurology", inpatient: 5299, outpatient: 9772 },
  ];

  const [animatedData, setAnimatedData] = useState(
    patientData.map((data) => ({
      ...data,
      animatedInpatient: 0,
      animatedOutpatient: 0,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedData((prevData) =>
        prevData.map((data, index) => {
          const inpatientDone = data.animatedInpatient >= patientData[index].inpatient;
          const outpatientDone = data.animatedOutpatient >= patientData[index].outpatient;

          if (inpatientDone && outpatientDone) return data;

          return {
            ...data,
            animatedInpatient: inpatientDone
              ? data.animatedInpatient
              : Math.min(data.animatedInpatient + 50, patientData[index].inpatient),
            animatedOutpatient: outpatientDone
              ? data.animatedOutpatient
              : Math.min(data.animatedOutpatient + 50, patientData[index].outpatient),
          };
        })
      );
    }, 20); // Adjust this value for smoother or faster animations

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Patient By Division</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-2">Division</th>
            <th className="py-2">Inpatient</th>
            <th className="py-2">Outpatient</th>
          </tr>
        </thead>
        <tbody>
          {animatedData.map((data, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-2">{data.division}</td>
              <td className="py-2">{data.animatedInpatient.toLocaleString()}</td>
              <td className="py-2">{data.animatedOutpatient.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientDivision;
