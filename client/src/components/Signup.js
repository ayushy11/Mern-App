import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Signup() {

  const history = useHistory();

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

  const PostData = async (e) => {
    e.preventDefault();

    const { username, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");

      history.push("/login")
    }
  };

  return (
    <>
      <div className="signup-form">
        {/* action="/examples/actions/confirmation.php" */}
        <form method="post" />
        <h2>Sign Up</h2>
        <p>Fill this form to create an account!</p>
        <hr />
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="fa fa-user"></span>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              required="required"
              value={user.username}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-paper-plane"></i>
              </span>
            </div>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email Address"
              required="required"
              value={user.email}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-phone"></i>
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              name="phone"
              placeholder="Phone Number"
              required="required"
              value={user.phone}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-briefcase"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="work"
              placeholder="Your Profession"
              required="required"
              value={user.work}
              onChange={handleInput}
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
              type="text"
              className="form-control"
              name="password"
              placeholder="Password"
              required="required"
              value={user.password}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock"></i>
                <i className="fa fa-check"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="cpassword"
              placeholder="Confirm Password"
              required="required"
              value={user.cpassword}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-check-label">
            <input type="checkbox" required="required" /> I accept the{" "}
            <NavLink to="/login">Terms of Use</NavLink> &amp;{" "}
            <NavLink to="/login">Privacy Policy</NavLink>
          </label>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={PostData}
          >
            Register
          </button>
        </div>

        <div className="text-center">
          Already have an account? <NavLink to="/login">Login here</NavLink>
        </div>
      </div>
    </>
  );
}

export default Signup;
