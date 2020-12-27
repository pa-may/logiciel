import React, { useState } from "react";
import "./imhiring.css";

const ImHiring = () => {
  const [submit, setSubmit] = useState(false);
  return (
    <div className="">
      <h1 className="banner-header">Looking to hire</h1>
      <p className="headertwo">
        Please tell us a little more about the opportunity and we'll be right
        back with you to discuss your opportunity further!
      </p>
      <div className="side">
        <img src="img/office-image-2.jpg" alt="" className="form-img" />
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
            <label htmlFor="name">*Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form__input">
            <label htmlFor="company">*Company</label>
            <input type="text" id="company" required />
          </div>
          <div className="form__input">
            <label htmlFor="email">*Email address</label>
            <input type="email" id="email" required />
          </div>
          <div className="form__input">
            <label htmlFor="phoneNumber">Phone number</label>
            <input type="text" id="phoneNumber" />
          </div>
          <div className="form__input">
            <label htmlFor="keySkills">*About the job</label>
            <textarea type="text" id="keySkills" />
          </div>
          <button className="btn btn--black">Submit</button>
          {submit && <div className="submit">Submiited</div>}
        </form>
      </div>
    </div>
  );
};

export default ImHiring;
