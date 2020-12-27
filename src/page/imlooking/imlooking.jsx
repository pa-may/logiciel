import React, { useState } from "react";
import "./imlooking.css";

const ImLooking = () => {
  const [submit, setSubmit] = useState(false);
  return (
    <div className="">
      <h1 className="banner-header">Looking for job</h1>
      <p className="headertwo">
        Please fill out the form below and we will get in contact with you
        shortly for jobs opportunities relating to your skillset!
      </p>
      <div className="side">
        <form
          className="register"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmit(true);
            setTimeout(() => {
              window.location = "/";
            }, 2000);
          }}
        >
          <div className="form__input">
            <label htmlFor="firstName">*First name</label>
            <input type="text" id="firstName" required />
          </div>
          <div className="form__input">
            <label htmlFor="lastName">*Last name</label>
            <input type="text" id="lastName" required />
          </div>
          <div className="form__input">
            <label htmlFor="email">*Email address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form__input">
            <label htmlFor="address">*Address</label>
            <input type="text" id="address" required />
          </div>
          <div className="form__input">
            <label htmlFor="phoneNumber">Phone number</label>
            <input type="text" id="phoneNumber" />
          </div>
          <div className="form__input">
            <label htmlFor="keySkills">Key skills</label>
            <input type="text" id="keySkills" />
          </div>
          <div className="form__input">
            <label htmlFor="cv">*Upload CV</label>
            <input type="file" id="cv" required />
          </div>
          <button className="btn btn--black">Submit</button>
          {submit && <div className="submit">Submiited</div>}
        </form>
        <img src="img/office-image-2.jpg" alt="" className="form-img" />
      </div>
    </div>
  );
};

export default ImLooking;
