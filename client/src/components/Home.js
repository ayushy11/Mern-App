import React from "react";
import { NavLink } from "react-router-dom";
import img from "../images/img1.jpg";

function Home() {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome <strong className="brand-name"> </strong>
                  </h1>
                  <h2 className="my-6">Happy, to see you back.</h2>
                  <div className="mt-3">
                    {/* <NavLink 
                    // to={props.visit}
                     className="btn-get-started">
                      btn
                    </NavLink> */}
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={img}
                    className="img-fluid animated"
                    alt="home img"
                  />
                  {/* <h2 className="my-3">
                    We are a team of talented developers making scalable Web
                    applications.
                  </h2> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
