import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

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
                method="post"
                action=""
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
                  type="button"
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
