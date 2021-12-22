// import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import * as authService from "../../services/authService";

function Login({ onLogin }) {
  let navigate = useNavigate();

  const onLoginHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let { email, password } = Object.fromEntries(formData);

    authService
      .login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        onLogin({uid: user.uid, email: user.email, accessToken: user.accessToken});
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        window.alert(errorMessage);
      });
  };

  return (
    <div id="main">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={onLoginHandler} method="POST">
            <h3>Sign In</h3>

            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name="email"
                autoComplete="username"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                autoComplete="current-password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
            {/* <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
