import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import img from "../images/img.jpg";
import aboutImg from "../images/logo512.png";

function About() {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

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
    callAboutPage();
  }, []);

  return (
    <div>
      <h2>About Me</h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="img-box">
              <img
                src={
                  userData?.username === "AYUSH" || "Ayush Yadav"
                    ? img
                    : aboutImg
                }
                alt="img"
              />
            </div>
            <p className="testimonial">{userData?.work}</p>
            <p className="overview">
              <b>{userData?.username}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
