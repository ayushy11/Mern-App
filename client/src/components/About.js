import React from "react";

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
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
              <b>name</b>job <a href="#">place</a>
            </p>
          </div>
          <div className="carousel-item">
            <div className="img-box">
              <img src="" alt="" />
            </div>
            <p className="testimonial">content</p>
            <p className="overview">
              <b>name</b>job <a href="#">place</a>
            </p>
          </div>
          <div className="carousel-item">
            <div className="img-box">
              <img src="" alt="" />
            </div>
            <p className="testimonial">content</p>
            <p className="overview">
              <b>name</b>job <a href="#">place</a>
            </p>
          </div>
        </div>

        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i className="fa fa-angle-left"></i>
        </a>
        <a className="carousel-control-next" href="#myCarousel" data-slide="next">
          <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
