import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Dashboard() {
  return (
    <div className="container mt-4">

      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-3">

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Total Users</h5>
            <p className="fs-4 fw-bold">120</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>New Orders</h5>
            <p className="fs-4 fw-bold">35</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5>Messages</h5>
            <p className="fs-4 fw-bold">18</p>
          </div>
        </div>

      </div>

      <div className="card shadow-sm p-4 mt-4">
        <h4>Welcome Back!</h4>
        <p>
          This is your dashboard. You can manage your data, view analytics,
          track user activity, and more.
        </p>
      </div>

    </div>
  );
}
