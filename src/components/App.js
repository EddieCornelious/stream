import '../styles/App.scss';
import { Component } from 'react';
import Dashboard from './Dashboard';
import smoothscroll from 'smoothscroll-polyfill';
//process.env.REACT_APP_TWITCH_CLIENT_ID || ID
//TODO: Add react router
//TODO: Remove bootstrap
class App extends Component {
  componentDidMount() {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }
  render() {
    return <Dashboard />;
  }
}

export default App;
