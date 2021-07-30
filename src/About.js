import React from "react";
import "./About.css";
import frame from "./images/frame.jpg";

const About = () => {
  return (
    <div>
      <h1 className="about-heading" id="about">ABOUT</h1>
      <img className="frame3" src={frame} alt="line-star-line" />
      {/* <div className="section1">
        <p>
          Freelancer is a free bootstrap theme created by Start Bootstrap. The
          download includes the complete source files including HTML, CSS, and
          JavaScript as well as optional SASS stylesheets for easy
          customization.
        </p>
      </div> */}
      <div class="row-new">
        <div class="column-new">
          <p>
            Freelancer is a free bootstrap theme created by Start Bootstrap. The
            download includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div class="column-new">
          <p>
            You can create your own custom avatar for the masthead, change the
            icon in the dividers, and add your email address to the contact form
            to make it fully functional!
          </p>
        </div>
      </div>

      <button className="buttonWalaScene">
        <i className="fa fa-download" aria-hidden="true"></i>Free Download!
      </button>
    </div>
  );
};

export default About;
