import '../styles/App.scss';
import { Component, Fragment } from 'react';
import Dashboard from './Dashboard';
import Movie from './Movie';
import smoothscroll from 'smoothscroll-polyfill';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
//process.env.REACT_APP_TWITCH_CLIENT_ID || ID
//TODO: Add react router
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovies: [],
      filteredMovies: [],
      page: 1,
      isLoading: true,
      genres: {},
    };
  }
  componentDidMount() {
    this.initialLoad();
    smoothscroll.polyfill();
  }

  fetchTrending() {
    return axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=' +
        process.env.REACT_APP_API_KEY
    );
  }

  fetchGenres() {
    return axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=' +
        process.env.REACT_APP_API_KEY +
        '&language=en-US'
    );
  }

  initialLoad() {
    Promise.all([this.fetchTrending(), this.fetchGenres()]).then((results) =>
      console.log(results)
    );
  }

  render() {
    if (this.state.isLoading) {
      return <h1>LOADING...................</h1>;
    }
    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/movie"
              element={<Dashboard movies={this.state.filteredMovies} />}
            />
            <Route exact path="movie/:id" element={<Movie />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
