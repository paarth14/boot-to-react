import React from "react";
import "./Portfolio.css";
import portfolioFrame from "./images/portfolio-frame.jpg";
import cabin from "./images/cabin.png";
import cake from "./images/cake.png";
import circus from "./images/circus.png";
import game from "./images/game.png";
import safe from "./images/safe.png";
import submarine from "./images/submarine.png";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-content" id="portfolio">PORTFOLIO</div>
      <img
        className="portfolio-frame"
        src={portfolioFrame}
        alt="line-star-line"
      />
      {/* <img className="cabinStyle" src={cabin} alt="cabin-image-reload" /> */}
      <div className="allPicsBR">
        <div class="row">
          <div class="column">
            <img
              className="cabin1"
              src={cabin}
              alt="Snow"
              style={{ width: "100%" }}
            />
          </div>
          <div class="column">
            <img
              className="cake1"
              src={cake}
              alt="Forest"
              style={{ width: "100%" }}
            />
          </div>
          <div class="column">
            <img
              className="circus1"
              src={circus}
              alt="Mountains"
              style={{ width: "100%" }}
            />
          </div>
          <div class="column">
            <img
              className="game1"
              src={game}
              alt="Mountains"
              style={{ width: "100%" }}
            />
          </div>
          <div class="column">
            <img
              className="safe1"
              src={safe}
              alt="Mountains"
              style={{ width: "100%" }}
            />
          </div>
          <div class="column">
            <img
              className="submarine1"
              src={submarine}
              alt="Mountains"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
