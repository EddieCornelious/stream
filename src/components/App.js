import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "../styles/App.scss";
import React from "react";
import Header from "./Header.js";
import MainContent from "./MainContent.js";

class App extends React.Component {
  componentDidMount() {
    /*
    fetch("https://api.twitch.tv/helix/streams?game_id=33214", {
      headers: {
        "Client-ID": process.env.REACT_APP_TWITCH_CLIENT_ID
      }
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });**/
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default App;
