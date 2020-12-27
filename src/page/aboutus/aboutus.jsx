import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className="">
      <h1 className="banner-header">About us</h1>
      <div className="side">
        <img src="img/office-image-3.jpeg" alt="" className="side__about" />
        <div className="side__text-black">
          <div className="text">
            Our people. Since we launched, our people and our culture have
            continuously set us apart from the competition. The Logiciel
            solution attitude towards internal recruitment remains the same:
            bring in great people and offer them all the tools, support and
            training they need to become truly excellent market specialists.
            Every member of our team lives the values of Logiciel solution: earn
            it, own it, love it.
          </div>
        </div>
      </div>
      <div className="side">
        <div className="side__text-red">
          <div className="text">
            Let our people do the talking. We could write for days about what
            makes us special, but we wouldn’t, we don’t take ourselves that
            seriously! It all boils down to one thing; our people. The people
            who show up every day of every week, who really care about the
            people they connect with and the cities they work in, who get stuck
            into opportunities and go after them like no one else. They’re the
            people you want in your corner, fighting for you, sharing your
            challenges and celebrating your wins.
          </div>
        </div>
        <img src="img/office-image-4.jpg" alt="" className="side__about" />
      </div>
      <div className="side">
        <img src="img/office-image-5.jpg" alt="" className="side__about" />
        <div className="side__text-black">
          <div className="text">
            We don’t just talk the talk, we walk it too. We know great
            relationships don’t happen overnight so we make sure we’re reliable,
            trustworthy and knowledgeable for our communities, clients,
            candidates and each other. We’re loyal to the core. ​ We’re
            committed to putting in the ground work and work hard to be valued
            as much as we value others. We give advice, offer solutions and
            respect those who’ve been in the game longer. We get to the top
            through working smart and not giving up. ​ We never tear someone
            else down to big ourselves up. This is how we earn our stripes and
            are rewarded when we achieve.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
