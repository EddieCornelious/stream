import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import MainContent from "./MainContent.js";

class App extends React.Component {
  gameIdMap = {};
  state = {
    topGames: null,
    topStream: null,
    currentPage: 1,
    mode: "topGames",
    activeData: null
  };
  fetchGames() {
    return fetch("https://api.twitch.tv/helix/games/top?first=75", {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    }).then(response => {
      return response.json();
    });
  }

  fetchStreams(gameId) {
    const withID =
      "https://api.twitch.tv/helix/streams?first=75&game_id=" + gameId;
    const url = gameId
      ? withID
      : "https://api.twitch.tv/helix/streams?first=75";
    return fetch(url, {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    }).then(response => {
      return response.json();
    });
  }

  getChannelBanner(channelIdArray) {
    const userQuery = "id=" + channelIdArray.join("&id=");
    return fetch("https://api.twitch.tv/helix/users?" + userQuery, {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    }).then(response => {
      return response.json();
    });
  }

  fetchStreamsAndUpdateData() {}

  componentDidMount() {
    const userBannerArray = [];
    this.fetchGames()
      .then(games => {
        games.data.forEach(game => {
          this.gameIdMap[game.id] = game.name;
          game.viewers = Math.floor(Math.random() * 100);
        });
        this.setState({
          topGames: games.data,
          activeData: games.data
        });
      })
      .then(() => {
        this.fetchStreams()
          .then(streams => {
            streams.data.forEach(stream => {
              stream["game_played"] = this.gameIdMap[stream.game_id];

              userBannerArray.push(stream.user_id);
            });
            return Promise.resolve(streams);
          })
          .then(streams => {
            this.getChannelBanner(userBannerArray)
              .then(banners => {
                streams.data.forEach((stream, i) => {
                  stream["banner"] = banners.data[i].profile_image_url;
                });

                return Promise.resolve(streams);
              })
              .then(streams => {
                this.setState({
                  topStreams: streams.data
                });
              });
          });
      });
  }

  displayCertainStreams(gameId) {
    const userBannerArray = [];
    this.fetchStreams(gameId)
      .then(streams => {
        streams.data.forEach(stream => {
          stream["game_played"] = this.gameIdMap[stream.game_id];
          userBannerArray.push(stream.user_id);
        });
        return Promise.resolve(streams);
      })
      .then(streams => {
        this.getChannelBanner(userBannerArray)
          .then(banners => {
            streams.data.forEach((stream, i) => {
              stream["banner"] = banners.data[i].profile_image_url;
            });
            return Promise.resolve(streams);
          })
          .then(streams => {
            this.setState({
              mode: "topStreams",
              activeData: streams.data
            });
          });
      });
  }

  displayStreams() {
    const streams = this.state.topStreams;
    this.setState({
      mode: "topStreams",
      activeData: streams
    });
  }

  displayGames() {
    const games = this.state.topGames;
    this.setState({
      mode: "topGames",
      activeData: games
    });
  }

  changePage(page) {
    this.setState({
      currentPage: Number(page)
    });
  }
  render() {
    if (!this.state.topGames || !this.state.topStreams) {
      return <div>LOOADING....</div>;
    }

    return (
      <React.Fragment>
        <Header />
        <MainContent
          currentPage={this.state.currentPage}
          data={this.state.activeData}
          changePage={this.changePage.bind(this)}
          displayStreams={this.displayStreams.bind(this)}
          mode={this.state.mode}
          displayGames={this.displayGames.bind(this)}
          displayCertainStreams={this.displayCertainStreams.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default App;
