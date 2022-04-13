import '../styles/App.scss';
import { Component, Fragment } from 'react';
import Dashboard from './Dashboard';
import Movie from './Movie';
import smoothscroll from 'smoothscroll-polyfill';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//process.env.REACT_APP_TWITCH_CLIENT_ID || ID
//TODO: Add react router
class App extends Component {
  componentDidMount() {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="movie/:id" element={<Movie />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
