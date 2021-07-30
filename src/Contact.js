import React from "react";
import "./Contact.css";
import contactFrame from "./images/portfolio-frame.jpg";

const Contact = () => {
  return (
    <div>
      <h1 className="contact-heading" id="contact">CONTACT ME</h1>
      <img className="contactFrame" src={contactFrame} alt="line-star-line" />

      <div class="form-container">
        <form class="register-form">
          
          <input
            id="first-name"
            class="form-field"
            type="text"
            placeholder="First Name"
            name="firstName"
          />
          
          <input
            id="last-name"
            class="form-field"
            type="text"
            placeholder="Last Name"
            name="lastName"
          />
          
          <input
            id="email"
            class="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          
          <textarea
            id="message"
            class="form-field"
            type="text"
            placeholder="Message"
            name="message"
            rows="3"
            cols="33"
          />
          <button class="form-field" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
