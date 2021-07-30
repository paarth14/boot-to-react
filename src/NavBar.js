import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light meraBg heightWala">
        <div className="container-fluid">
          <a className="navbar-brand firstOne" href="#startbootstrap">
            START BOOTSTRAP
          </a>
          <button
            className="navbar-toggler"
            type="button"
            dataBsToggle="collapse"
            dataBsTarget="#navbarNav"
            ariaControls="navbarNav"
            ariaExpanded="false"
            ariaLabel="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link secondOne active"
                  aria-current="page"
                  href="#portfolio"
                >
                  PORTFOLIO
                </a>
              </li>
              <li className="nav-item thirdOne">
                <a className="nav-link active" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fourthOne active" href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
