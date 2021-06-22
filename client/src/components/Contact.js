import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Contact() {
  const history = useHistory();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        username: data.username,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200 || !data) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  // storing data in states

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // sending data to backend

  const postData = async (e) => {
    e.preventDefault();

    const { username, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        message,
      }),
    });

    const data = await res.json();

    if (!data) {
      console.log("Message not sent");
    } else {
      alert("Message sent");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="signup-form">
        <form method="POST" />
        <h2>Contact us</h2>
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
              value={userData.username}
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
              value={userData.email}
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
              value={userData.phone}
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
              name="message"
              placeholder="Your Message"
              required="required"
              value={userData.message}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            onClick={postData}
          >
            Contact us
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
