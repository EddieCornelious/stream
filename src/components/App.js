import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import MainContent from "./MainContent.js";
import VideoPlayer from "./VideoPlayer.js";
import { mergesort, genGameViews, toKViewers } from "./util.js";
import debounce from "lodash.debounce";

//process.env.REACT_APP_TWITCH_CLIENT_ID || ID

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cursor = null;
    this.gameIdMap = {};
    this.state = {
      topGames: null,
      topStreams: null,
      mode: "topGames",
      activeData: null,
      shouldShowPlayer: false,
      liveStreamer: null,
      loadingApp: true,
      loadingData: false
    };

    const scrollCheck = debounce(() => {
      if (
        window.innerHeight + window.scrollY >=
        document.querySelector(".main__video__container").offsetHeight
      ) {
        if (this.state.mode === "topGames") {
          this.loadMore();
        }
      }
    }, 100);

    window.addEventListener("scroll", scrollCheck, false);

    window.addEventListener("touchmove", scrollCheck, false);
  }

  loadMore() {
    const generator = genGameViews();
    this.fetchGames(
      "https://api.twitch.tv/helix/games/top?first=10&after=" + this.cursor
    ).then(games => {
      this.cursor = games.pagination.cursor;
      games.data.forEach(game => {
        this.gameIdMap[game.id] = game.name;
        game.viewers = generator.gen();
      });
      this.setState({
        topGames: [...this.state.topGames, ...games.data],
        activeData: [...this.state.activeData, ...games.data]
      });
    });
  }

  fetchGames(url) {
    return fetch(url || "https://api.twitch.tv/helix/games/top?first=100", {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    }).then(response => {
      return response.json();
    });
  }

  fetchStreams(gameId) {
    const withID =
      "https://api.twitch.tv/helix/streams?first=100&game_id=" + gameId;
    const url = gameId
      ? withID
      : "https://api.twitch.tv/helix/streams?first=100";
    return fetch(url, {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    }).then(response => {
      return response.json();
    });
  }

  getChannelBanners(channelIdArray) {
    const userQuery = "id=" + channelIdArray.join("&id=");
    return fetch("https://api.twitch.tv/helix/users?" + userQuery, {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    }).then(response => {
      return response.json();
    });
  }

  componentDidMount() {
    const userBannerArray = [];
    const generator = genGameViews();
    this.fetchGames()
      .then(games => {
        this.cursor = games.pagination.cursor;
        games.data.forEach(game => {
          this.gameIdMap[game.id] = game.name;
          game.viewers = generator.gen();
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
            this.getBannerAndUpdateStreams(streams, userBannerArray).then(
              streams => {
                this.setState({
                  topStreams: streams.data,
                  loadingApp: false
                });
              }
            );
          });
      });
    generator.cancel();
  }

  getBannerAndUpdateStreams(streams, userBannerArray) {
    return this.getChannelBanners(userBannerArray).then(banners => {
      streams.data.forEach((stream, i) => {
        stream["banner"] = banners.data[i].profile_image_url;
      });
      return Promise.resolve(streams);
    });
  }

  displayCertainStreams(gameId) {
    const userBannerArray = [];
    this.setState({
      loadingData: true
    });
    this.fetchStreams(gameId)
      .then(streams => {
        streams.data.forEach(stream => {
          stream["game_played"] = this.gameIdMap[stream.game_id];
          userBannerArray.push(stream.user_id);
        });
        return Promise.resolve(streams);
      })
      .then(streams => {
        this.getBannerAndUpdateStreams(streams, userBannerArray).then(
          streams => {
            this.setState({
              mode: "certainStreams",
              activeData: streams.data,
              loadingData: false
            });
          }
        );
      });
    //polyfill plz
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  displayStreams() {
    const streams = this.state.topStreams;
    const self = this;
    this.setState({
      mode: "topStreams",
      activeData: streams,
      loadingData: true
    });

    setTimeout(() => {
      self.setState({ loadingData: false });
    }, 100);
  }

  displayGames() {
    const games = this.state.topGames;
    const self = this;
    this.setState({
      mode: "topGames",
      activeData: games,
      loadingData: true
    });

    setTimeout(() => {
      self.setState({ loadingData: false });
    }, 100);
  }

  showStream(streamerName) {
    this.setState({
      shouldShowPlayer: true,
      liveStreamer: streamerName
    });
  }

  closeStream() {
    this.setState({
      shouldShowPlayer: false,
      liveStreamer: null
    });
  }

  filterData(stringToMatch) {
    if (this.state.mode === "certainStreams") {
      return;
    }
    const stringToMatch_LC = stringToMatch.toLowerCase();
    if (stringToMatch_LC === "") {
      this.state.mode === "topGames"
        ? this.displayGames()
        : this.displayStreams();
      return;
    }
    const dataToFilterProp =
      this.state.mode === "topGames" ? "topGames" : "topStreams";
    const dataToFilter = this.state[dataToFilterProp.toString()];
    const contentProp = this.state.mode === "topGames" ? "name" : "game_played";

    const newData = dataToFilter.filter(e => {
      if (!e[contentProp]) {
        return;
      }
      return e[contentProp].toLowerCase().startsWith(stringToMatch_LC);
    });
    this.setState({
      activeData: newData
    });
  }

  sortData(type = "desc") {
    const propWanted =
      this.state.mode === "topStreams" || this.state.mode === "certainStreams"
        ? "viewer_count"
        : "viewers";
    function comp(a, b) {
      if (a[propWanted] < b[propWanted]) {
        return type === "desc" ? 1 : -1;
      }
      if (a[propWanted] > b[propWanted]) {
        return type === "desc" ? -1 : 1;
      }
      return 0;
    }

    this.setState({
      activeData: mergesort(this.state.activeData, comp)
    });
  }

  render() {
    if (this.state.loadingApp) {
      return null;
    }

    return (
      <React.Fragment>
        <Header
          sortData={this.sortData.bind(this)}
          filterData={this.filterData.bind(this)}
        />
        <VideoPlayer
          liveStreamer={this.state.liveStreamer}
          shouldShow={this.state.shouldShowPlayer}
          closeStream={this.closeStream.bind(this)}
        />
        <MainContent
          toggleStreamVideo={this.showStream.bind(this)}
          currentPage={this.state.currentPage}
          data={this.state.activeData}
          displayStreams={this.displayStreams.bind(this)}
          mode={this.state.mode}
          displayGames={this.displayGames.bind(this)}
          displayCertainStreams={this.displayCertainStreams.bind(this)}
          loadingData={this.state.loadingData}
        />
      </React.Fragment>
    );
  }
}

export default App;
