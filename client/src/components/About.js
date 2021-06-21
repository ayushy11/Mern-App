import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function About() {
  const history = useHistory();
  const [userData, setUserData] = useState();

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
              <img src="" alt="" />
            </div>
            <p className="testimonial">content</p>
            <p className="overview">
              <b>{userData?.username}</b>
              {userData?.work}
              <a href="#">place</a>
            </p>
          </div>
          <div className="carousel-item">
            <div className="img-box">
              <img src="" alt="" />
            </div>
            <p className="testimonial">content</p>
            <p className="overview">
              <b>{userData?.username}</b>
              {userData?.work}
              <a href="#">place</a>
            </p>
          </div>
          <div className="carousel-item">
            <div className="img-box">
              <img src="" alt="" />
            </div>
            <p className="testimonial">content</p>
            <p className="overview">
              <b>{userData?.username}</b>
              {userData?.work}
              <a href="#">place</a>
            </p>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#myCarousel"
          data-slide="prev"
        >
          <i className="fa fa-angle-left"></i>
        </a>
        <a
          className="carousel-control-next"
          href="#myCarousel"
          data-slide="next"
        >
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
