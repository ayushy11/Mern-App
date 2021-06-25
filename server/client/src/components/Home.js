import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../images/img1.jpg";

function Home() {
  const [userName, setUserName] = useState({
    username: "",
  });

  const [showData, setShowData] = useState(false);

  const userHome = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName({
        username: data.username,
      });
      setShowData(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHome();
  }, []);

  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Welcome {userName?.username}
                    <strong className="brand-name"> </strong>
                  </h1>
                  <h2 className="my-6">
                    {showData ? "Happy, to see you back" : "Hello, please log in."}
                  </h2>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={img}
                    className="img-fluid animated"
                    alt="home img"
                  />
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
