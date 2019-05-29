import "../styles/MainContent.scss";
import React from "react";
import Fade from "react-reveal/Fade";

const GameCardRow = ({
  data,
  displayStreams,
  mode,
  displayCertainStreams,
  toggleStreamVideo
}) => {
  if (mode !== "topGames") {
    return (
      <div className="row">
        {data.map((content, i) => {
          const url = content.thumbnail_url;
          return (
            <div key={i} className="col-sm-6 col-md-6">
              <StreamCard
                toggleStreamVideo={toggleStreamVideo}
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
          <div key={i} className="col-sm-6 col-md-3">
            <GameCard
              id={content.id}
              displayStreams={displayStreams}
              bg={url.replace("{width}x{height}", "300x400")}
              key={content.id}
              game={content.name}
              viewers={content.viewers}
              displayCertainStreams={displayCertainStreams}
            />
          </div>
        );
      })}
    </div>
  );
};

const GameCard = props => {
  return (
    <div className="game__card">
      <div
        onClick={() => props.displayCertainStreams(props.id)}
        className="game__card__top"
      >
        <Fade>
          <img alt="GAME__PHOTO" src={props.bg} />
        </Fade>
      </div>
      <div className="game__card__bottom">
        <em>{props.game}</em>
        <p>
          <i className="fa fa-eye" />
          {props.viewers + "K"}
        </p>
      </div>
    </div>
  );
};

const StreamCard = props => {
  return (
    <div
      onClick={() => props.toggleStreamVideo(props.userName)}
      className="stream__card"
    >
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

function renderData(
  dataToRender,
  mode,
  displayStreams,
  displayCertainStreams,
  toggleStreamVideo
) {
  const renderedData = [];

  for (let i = 0; i < dataToRender.length; i += 4) {
    renderedData.push(
      <GameCardRow
        key={i}
        mode={mode}
        toggleStreamVideo={toggleStreamVideo}
        displayStreams={displayStreams}
        data={dataToRender.slice(i, i + 4)}
        displayCertainStreams={displayCertainStreams}
      />
    );
  }
  return renderedData;
}

const MainContent = ({
  data,
  displayStreams,
  mode,
  displayGames,
  displayCertainStreams,
  toggleStreamVideo
}) => {
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
          Sort
        </a>
        <a className="sidebar__link" href="#">
          A
        </a>
      </div>

      <div className="main__video__container">
        <div className="container">
          {renderData(
            data,
            mode,
            displayStreams,
            displayCertainStreams,
            toggleStreamVideo
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
