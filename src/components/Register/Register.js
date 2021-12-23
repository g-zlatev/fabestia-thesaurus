// import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Register({ onRegister }) {
  const { login } = useContext(AuthContext);
  let navigate = useNavigate();

  const onRegisterHandler = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    // let email = formData.get("email");
    let { email, password, confirmPassword } = Object.fromEntries(formData);

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords dont match!");
      }
      authService
        .register(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          console.log(user.uid, user.email);
          onRegister(email);
          login(user)
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          window.alert(errorMessage);
        });
    } catch (error) {
      window.alert(error.message);
    }
  };

  return (
    <div id="main">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form onSubmit={onRegisterHandler} method="POST">
            <h3>Register</h3>

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
                autoComplete="new-password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                className="form-control"
                placeholder="Confirm password"
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

export default Register;
