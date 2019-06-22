import "../styles/VideoPlayer.scss";
import React from "react";

class VideoPlayer extends React.Component {
  render() {
    const streamer = this.props.liveStreamer;
    const cName = this.props.shouldShow
      ? "video__overlay__container"
      : "video__overlay__container hidden";
    return (
      <div className={cName}>
        <iframe
          className="stream__video"
          src={"https://player.twitch.tv/?channel=" + streamer}
          frameBorder="0"
          allowFullScreen={true}
          scrolling="no"
        />
        <button
          onClick={() => this.props.closeStream()}
          className="exit__stream"
        >
          X
        </button>
      </div>
    );
  }
}

export default VideoPlayer;
