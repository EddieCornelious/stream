import '../styles/App.scss';
import { Component, Fragment } from 'react';
import Dashboard from './Dashboard';
import Movie from './Movie';
import smoothscroll from 'smoothscroll-polyfill';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { Compare } from './util';
const SORT_TYPES = { 1: 'popularity', 2: 'top rated', 3: 'a-z' };
//process.env.REACT_APP_TWITCH_CLIENT_ID || ID
//TODO: Add react router
//Filtered movies is actually sorted
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMovies: [],
      filteredMovies: [],
      filteredGenre: [],
      page: 1,
      isLoading: true,
      genres: null,
      activeSort: 1,
      alteringMovies: false,
      activeFilter: null,
      genreList: [],
    };
  }
  componentDidMount() {
    this.initialLoad();
    smoothscroll.polyfill();
  }

  sortBy = (type) => {
    const sorts = { 1: 'popularity', 2: 'vote_average', 3: 'title' };
    if (Object.keys(sorts).indexOf(type.toString()) === -1) return;
    this.setState({ alteringMovies: true }, () => {
      const res = this.state.filteredMovies
        .slice(0)
        .sort(Compare(sorts[type], type === 3 ? true : false));
      this.setState(
        {
          filteredMovies: res,
        },
        () => this.setState({ alteringMovies: false, activeSort: type })
      );
    });
  };

  filterMovies = (e) => {
    const filter = parseInt(e.target.id);
    this.setState({ alteringMovies: true }, () => {
      if (!this.state.genres[filter]) return;
      const filtered = this.state.currentMovies.filter(
        (e) => e.genre_ids.indexOf(filter) !== -1
      );
      this.setState({ alteringMovies: false, filteredMovies: filtered });
    });
  };

  fetchTrending(page = 1) {
    return axios.get(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=' +
        process.env.REACT_APP_API_KEY +
        '&page=' +
        page
    );
  }

  fetchGenres = () => {
    return axios.get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=' +
        process.env.REACT_APP_API_KEY +
        '&language=en-US'
    );
  };

  mapGenres = (results, callback) => {
    const genres = results || [];
    const mappedGenres = {};
    for (let i = 0; i < genres.length; i++) {
      const genre = genres[i];
      mappedGenres[genre.id] = genre.name;
    }
    return callback(mappedGenres);
  };

  updateSearch = (e) => {};

  search = (term) => {};

  initialLoad() {
    this.setState({ isLoading: true }, () => {
      Promise.all([this.fetchTrending(), this.fetchGenres()]).then((data) =>
        this.mapGenres(data[1].data.genres, (mappedGenres) => {
          this.setState(
            {
              genres: mappedGenres,
              currentMovies: data[0].data.results,
              filteredMovies: data[0].data.results,
              genreList: data[1].data.genres,
            },
            () => this.setState({ isLoading: false })
          );
        })
      );
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div
          style={{
            margin: '0 auto',
            color: 'red',
            width: '100vw',
            fontSize: '100px',
          }}
        >
          LOADING...
        </div>
      );
    }

    return (
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/movie"
              element={
                <Dashboard
                  movies={this.state.filteredMovies}
                  genres={this.state.genres}
                  sortBy={this.sortBy}
                  alteringMovies={this.state.alteringMovies}
                  sortTypes={SORT_TYPES}
                  isLoading={this.state.isLoading}
                  activeSort={this.state.activeSort}
                  genreList={this.state.genreList}
                  filterMovies={this.filterMovies}
                  updateSearch={this.updateSearch}
                  search={this.search}
                />
              }
            />
            <Route exact path="movie/:id" element={<Movie />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
