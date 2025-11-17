import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
  return (
    <div className="bg-light d-flex justify-content-center align-items-center" style={{ height: "100vh", width:"100vw" }}>
      <div className="card shadow p-4" style={{ width: "350px", borderRadius: "15px" }}>
        <h3 className="text-center mb-3">Login</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" />
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-2">Login</button>

          <p className="text-center mt-3">
            Don't have an account? <a href="/register" className="text-decoration-none">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
