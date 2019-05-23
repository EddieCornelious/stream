import "../styles/MainContent.scss";
import React from "react";
import Fade from "react-reveal/Fade";

const GameCardRow = ({ data, displayStreams, mode }) => {
  if (mode !== "topGames") {
    return (
      <div className="row">
        {data.map((content, i) => {
          const url = content.thumbnail_url;
          return (
            <div className="col-sm-6 col-md-6">
              <StreamCard
                key={content.stream_id}
                bg={url.replace("{width}x{height}", "500x300")}
                userName={content.user_name}
                type={content.type}
                gameId={content.game_id}
                streamId={content.id}
                viewers={content.viewer_count}
                game={content.game_played}
                banner={content.banner}
              />
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
              bg={url.replace("{width}x{height}", "300x400")}
              key={content.id}
              name={content.name}
              views={content.views}
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
      <div className="game__card__top">
        <Fade>
          <img alt="GAME__PHOTO" src={props.bg} />
        </Fade>
      </div>
      <div className="game__card__bottom">
        <em>{props.name}</em>
        <p>
          <i className="fa fa-eye" />
          {props.views + "K"}
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

const StreamCard = props => {
  return (
    <div className="stream__card">
      <div className="stream__card__top">
        <Fade>
          <img src={props.bg} alt="streamer banner" />
        </Fade>
        <button className="stream__status">{props.type}</button>
        <button className="stream__viewers">
          {props.viewers.toString().substring(0, 2) + "K viewers"}
        </button>
      </div>

      <div className="stream__card__bottom">
        <div className="stream__card__left">
          <img src={props.banner} alt="stream banner" />
        </div>
        <div className="stream__card__right">
          <em>{props.userName}</em>
          <p>{props.game}</p>
        </div>
      </div>
    </div>
  );
};

const MainContent = ({
  data,
  currentPage,
  changePage,
  displayStreams,
  mode,
  displayGames
}) => {
  const lowerBound = 12 * (currentPage - 1);
  const upperBound = 12 * currentPage;
  const pageData = data.slice(lowerBound, upperBound);

  return (
    <div className="container-fluid main">
      <div className="main__sidebar">
        <a onClick={() => displayGames()} className="sidebar__link" href="#">
          Games
        </a>
        <a onClick={() => displayStreams()} className="sidebar__link" href="#">
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
