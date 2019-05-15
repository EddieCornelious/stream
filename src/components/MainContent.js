import "../styles/MainContent.scss";
import LinesEllipsis from "react-lines-ellipsis";
import React from "react";
const x = "Players Unknown Battle Grounds";

const GameCardRow = () => {
  return (
    <div className="row">
      <div className="col-sm-6 col-md-3">
        <GameCard />
      </div>
      <div className="col-sm-6 col-md-3">
        <GameCard />
      </div>
      <div className="col-sm-6 col-md-3">
        <GameCard />
      </div>
      <div className="col-sm-6 col-md-3">
        <GameCard />
      </div>
    </div>
  );
};

const GameCard = () => {
  return (
    <div className="game__card">
      <div className="game__card__top">&nbsp;</div>

      <div className="game__card__bottom">
        <em>{x}</em>
        <p>
          <i class="fa fa-eye" />
          2450
        </p>
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
          <GameCardRow />
          <GameCardRow />
          <GameCardRow />
          <h1>lol</h1>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
