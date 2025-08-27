import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewReportPage() {
  const [reports, setReports] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/reports");
        setReports(res.data);
      } catch (err) {
        setMessage(err.response?.data?.message || "Failed to fetch reports");
      }
    };
    fetchReports();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Community Reports</h2>
      {message && <p className="mb-3 text-red-600">{message}</p>}
      <ul className="space-y-4">
        {reports.map((report) => (
          <li key={report.id} className="border p-3 rounded shadow">
            <h3 className="font-semibold">{report.title}</h3>
            <p>{report.description}</p>
            <p className="text-sm text-gray-600">📍 {report.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewReportPage;
