import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register() {
  return (
    <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: "100vh", width:"100vw" }}>
      <div className="card shadow p-4" style={{ width: "400px", borderRadius: "15px" }}>
        <h3 className="text-center mb-3">Create Account</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input type="text" className="form-control" placeholder="Enter your name" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Create a password" />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">Register</button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}
