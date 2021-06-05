import React from "react";

function About() {
  return (
    <div>
      <h2>About Me</h2>
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="img-box">
              <img src="" alt="" />
            </div>
            <p class="testimonial">content</p>
            <p class="overview">
              <b>name</b>job <a href="#">place</a>
            </p>
          </div>
          <div class="carousel-item">
            <div class="img-box">
              <img src="" alt="" />
            </div>
            <p class="testimonial">content</p>
            <p class="overview">
              <b>name</b>job <a href="#">place</a>
            </p>
          </div>
          <div class="carousel-item">
            <div class="img-box">
              <img src="" alt="" />
            </div>
            <p class="testimonial">content</p>
            <p class="overview">
              <b>name</b>job <a href="#">place</a>
            </p>
          </div>
        </div>

        <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
