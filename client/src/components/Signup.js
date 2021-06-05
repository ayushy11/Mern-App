import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    // const {name, value} = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div class="signup-form">
        <form action="/examples/actions/confirmation.php" method="post" />
        <h2>Sign Up</h2>
        <p>Fill this form to create an account!</p>
        <hr />
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <span class="fa fa-user"></span>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Username"
              required="required"
              value={user.username}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-paper-plane"></i>
              </span>
            </div>
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email Address"
              required="required"
              value={user.email}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-phone"></i>
              </span>
            </div>
            <input
              type="number"
              class="form-control"
              name="phone"
              placeholder="Phone Number"
              required="required"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-briefcase"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="work"
              placeholder="Your Profession"
              required="required"
              value={user.work}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="password"
              placeholder="Password"
              required="required"
              value={user.password}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock"></i>
                <i class="fa fa-check"></i>
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              name="cpassword"
              placeholder="Confirm Password"
              required="required"
              value={user.cpassword}
              onChange={handleInput}
            />
          </div>
        </div>
        <div class="form-group">
          <label class="form-check-label">
            <input type="checkbox" required="required" /> I accept the{" "}
            <NavLink to="/login">Terms of Use</NavLink> &amp;{" "}
            <NavLink to="/login">Privacy Policy</NavLink>
          </label>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>

        <div class="text-center">
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </div>
      </div>
    </>
  );
}

export default Signup;
