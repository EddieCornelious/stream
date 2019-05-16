import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import MainContent from "./MainContent.js";

class App extends React.Component {
  state = {
    topGames: null,
    currentPage: 1,
    mode: "games"
  };
  componentDidMount() {
    fetch("https://api.twitch.tv/helix/games/top?first=53", {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    })
      .then(response => {
        return response.json();
      })
      .then(games => {
        console.log(games);
        this.setState({
          topGames: games.data
        });
      });
  }

  displayStreams(id) {
    this.setState({
      mode: "streams"
    });
  }

  displayGames() {
    this.setState({
      mode: "games"
    });
  }

  changePage(page) {
    this.setState({
      currentPage: Number(page)
    });
  }
  render() {
    if (!this.state.topGames) {
      return <div>LOOADING....</div>;
    }
    return (
      <React.Fragment>
        <Header />
        <MainContent
          currentPage={this.state.currentPage}
          data={this.state.topGames}
          changePage={this.changePage.bind(this)}
          displayStreams={this.displayStreams.bind(this)}
          mode={this.state.mode}
          displayGames={this.displayGames.bind(this)}
        />
      </React.Fragment>
    );
  }
}

export default App;
