import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SubmitReportPage from "./pages/SubmitReportPage";
import ViewReportPage from "./pages/ViewReportsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PrivateRoute from "./components/PrivateRouter";

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submit" element={<SubmitReportPage />} />
          <Route path="/reports" element={<ViewReportPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="submit-report"
            element={
              <PrivateRoute>
                <SubmitReportPage></SubmitReportPage>
              </PrivateRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute>
                <ReportsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;
