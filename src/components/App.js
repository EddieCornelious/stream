import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../styles/App.scss';
import { Component } from 'react';
import Dashboard from './Dashboard';
//process.env.REACT_APP_TWITCH_CLIENT_ID || ID

class App extends Component {
  render() {
    return <Dashboard />;
  }
}

export default App;
