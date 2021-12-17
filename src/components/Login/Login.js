import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import * as authService from "../../services/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();
  
  const onLogin = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let email = formData.get("email");

    authService.login(email);

    navigate('/');
  };

  return (
    <div className="Login">
      <div id="main">
        <section className="row section">
          <div className="row-content buffer even clear-after">
            <div className="section-title">
              <h3>Login</h3>
            </div>
            <div className="column nine">
              <form
                id="contact-form"
                className="contact-section"
                onSubmit={onLogin}
              >
                <span className="pre-input">
                  <i className="icon icon-user"></i>
                </span>
                <input
                  className="email plain buffer"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  autoComplete="username"
                />
                <span className="pre-input">
                  <i className="icon icon-lock"></i>
                </span>
                <input
                  className="name plain buffer"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <input
                  id="send"
                  className="plain button red"
                  type="submit"
                  value="Login"
                />
              </form>
              <div id="success"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
