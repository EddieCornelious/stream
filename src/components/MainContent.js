import "../styles/MainContent.scss";
import React from "react";

const GameCard = () => {
  return (
    <div className="game__card">
      <div className="game__card__top">j</div>

      <div className="game__card__bottom">
        <h2>GTA IV</h2>
        <p>ACTION</p>
      </div>
    </div>
  );
};
const MainContent = () => {
  return (
    <div className="container-fluid main">
      <div className="main__sidebar">
        <a className="sidebar__link" href="#">
          A
        </a>
        <a className="sidebar__link" href="#">
          A
        </a>
        <a className="sidebar__link" href="#">
          A
        </a>
        <a className="sidebar__link" href="#">
          A
        </a>
      </div>

      <div className="main__video__container">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <GameCard />
            </div>
            <div className="col-sm-6 col-md-4">
              <GameCard />
            </div>
            <div className="col-sm-6 col-md-4">
              <GameCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
