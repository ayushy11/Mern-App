import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid Credentials");
      console.log("Invalid Credentials");
    } else {
      window.alert("Login Successful");
      console.log("Login Successful");

      history.push("/")
    }
  };
  return (
    <>
      <div className="login-form">
        <form method="post">
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <span className="fa fa-user"></span>
                </span>
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary login-btn btn-block"
              onClick={loginUser}
            >
              Log in
            </button>
          </div>
          <div className="clearfix">
            <label className="float-left form-check-label">
              <input type="checkbox" /> Remember me
            </label>
            <NavLink to="#" className="float-right">
              Forgot Password?
            </NavLink>
          </div>
          <div className="or-seperator">
            <i>or</i>
          </div>
          <p className="text-center">Login with your social media account</p>
          <div className="text-center social-btn">
            <NavLink to="/" className="btn btn-secondary">
              <i className="fa fa-facebook"></i>&nbsp; Facebook
            </NavLink>
            <NavLink to="/" className="btn btn-info">
              <i className="fa fa-twitter"></i>&nbsp; Twitter
            </NavLink>
            <NavLink to="/" className="btn btn-danger">
              <i className="fa fa-google"></i>&nbsp; Google
            </NavLink>
          </div>
        </form>
        <p className="text-center text-muted small">
          Don't have an account? <NavLink to="/signup">Sign up here!</NavLink>
        </p>
      </div>
    </>
  );
}

export default Login;
