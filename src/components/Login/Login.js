import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import * as authService from "../../services/authService";

function Login({ onLogin }) {
  let navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");

    authService.login(email);
    onLogin(email);
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={onLoginHandler} method="POST">
          <h3>Sign In</h3>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password" />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
}


export default Login;