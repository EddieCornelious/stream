import "../styles/MainContent.scss";
import React from "react";

const GameCardRow = ({ data, displayStreams, mode }) => {
  const ComponentToRender = mode === "games" ? GameCard : StreamCard;

  if (mode === "streams") {
    return (
      <div className="row">
        {data.map((content, i) => {
          return (
            <div className="col-sm-6 col-md-3">
              <StreamCard />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="row">
      {data.map((content, i) => {
        const url = content.box_art_url;
        return (
          <div className="col-sm-6 col-md-3">
            <GameCard
              id={content.id}
              displayStreams={displayStreams}
              bg={url.replace("{width}x{height}", "300x300")}
              key={content.id}
              name={content.name}
            />
          </div>
        );
      })}
    </div>
  );
};

const GameCard = props => {
  return (
    <div onClick={() => props.displayStreams(props.id)} className="game__card">
      <div
        style={{ backgroundImage: "url(" + props.bg + ")" }}
        className="game__card__top"
      >
        &nbsp;
      </div>

      <div className="game__card__bottom">
        <em>{props.name}</em>
        <p>
          <i className="fa fa-eye" />
          {Math.floor(Math.random() * 100) + "k"}
        </p>
      </div>
    </div>
  );
};

const Pagination = ({ dataSize, changePage }) => {
  const pagin = [];
  for (let i = 0; i < Math.ceil(dataSize / 12); i++) {
    pagin.push(
      <li onClick={() => changePage(i + 1)} key={i}>
        <a href="#">{i + 1}</a>
      </li>
    );
  }
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination pagination-lg">
        <li>
          <a href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pagin}
        <li>
          <a href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

const StreamCard = () => {
  return <div>LOL STREAM</div>;
};

const MainContent = ({
  data,
  currentPage,
  changePage,
  displayStreams,
  mode
}) => {
  const lowerBound = 12 * (currentPage - 1);
  const upperBound = 12 * currentPage;
  const pageData = data.slice(lowerBound, upperBound);

  return (
    <div className="container-fluid main">
      <div className="main__sidebar">
        <a className="sidebar__link" href="#">
          Games
        </a>
        <a className="sidebar__link" href="#">
          Streams
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
          <GameCardRow
            mode={mode}
            displayStreams={displayStreams}
            data={pageData.slice(0, 4)}
          />
          <GameCardRow
            mode={mode}
            displayStreams={displayStreams}
            data={pageData.slice(4, 8)}
          />
          <GameCardRow
            mode={mode}
            displayStreams={displayStreams}
            data={pageData.slice(8, 12)}
          />
          <Pagination
            displayStreams={displayStreams}
            changePage={changePage}
            dataSize={data.length}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
