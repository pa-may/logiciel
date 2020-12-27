import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (

    <div>
      <div className="home">
        <div
          className="banner-con"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 25%, transparent 50%), url(img/office-image.jpeg)",
          }}
        >
          <div className="banner-box">
            <h1 className="banner-header">
              Providing you with the best opportuniies
          </h1>
            <h2 className="headertwo">Recruitment Agency</h2>
            <h3 className="headerthree">
              Matching exceptional support staff to top businesses and private
              individuals globally.
          </h3>
          </div>
        </div>
        <div className="side">
          <img className="side__img" src="img/laptop-office.jpg" alt="" />
          <div className="side__black">
            <h1 className="primary-header">We know our stuff.</h1>
            <p className="text">
              At our core we’re specialist tech recruiters who provide access to
              the whole market for both our candidates and clients. We make this
              possible through intelligent market mapping and by deeply embedding
              ourselves in the cities we operate, nurturing and growing specialist
              tech communities.
          </p>
            <p className="text">
              To put it simply, we live and breathe technology in our cities,
              ensuring we introduce you to a world of permanent and contract
              opportunities.
          </p>
          </div>
        </div>
        <div className="side">
          <div className="side__white">
            <h2 className="side__white-text">FOCUSED ON</h2>
            <h2 className="side__white-text side--white-text-1">EFFECTIVENESS</h2>
          </div>
          <div
            className="home__action side__red"
          // style={{ backgroundImage: "url(img/home-banner.jpg)" }}
          >
            <h2 className="action-text">
              Our business has two primary concerns: placing workers in positions
              where they have an opportunity to achieve their personal goals and
              providing workers that are prepared for the tasks and environment in
              which they operate.
          </h2>

            <h2 className="action-text">
              We are also committed to ensuring employers and workers behave
              ethically, professionally and responsibly. This is fundamental to
              developing a sustainable working relationship.
          </h2>
            <div className="link-box">
              <Link className="box" to="/logiciel/im-looking">
                <h2 className="secondary-header">I want to find a great job</h2>
                <button className="btn">Sign up for jobs alert</button>
              </Link>
              <Link className="box" to="/logiciel/im-hiring">
                <h2 className="secondary-header">I want to hire someone epic</h2>
                <button className="btn">Submit a vacancy</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
