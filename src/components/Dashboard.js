import { Component } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  initialLoad() {
    const movies = [];
    for (let i = 0; i < 8; i++) {
      movies.push(<MovieCard id={i} />);
    }
    return movies;
  }
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__top">
          <span className="title">dashboard box</span>
          <input placeholder="Search Movies..." type="text" />
          <div class="dropdown">
            <button class="dropbtn">popularity</button>
            <div class="dropdown-content">
              <a href="#">popularity</a>
              <a href="#">top rated</a>
              <a href="#">now playing</a>
            </div>
          </div>
        </div>
        <div className="sidebar__wrap">
          <div className="dashboard__sidebar">
            <ul className="dashboard__sidebar__list">
              <li>all genres</li>
              <li>action</li>
              <li>adventure</li>
              <li>animation</li>
              <li>comedy</li>
              <li>crime</li>
              <li>documentary</li>
              <li>drama</li>
              <li>family</li>
              <li>fantasy</li>
              <li>history</li>
              <li>horror</li>
              <li>music</li>
              <li>mystery</li>
              <li>romance</li>
              <li>science fiction</li>
              <li>tv movie</li>
              <li>war</li>
              <li>western</li>
            </ul>
          </div>
        </div>

        <div className="content__wrap">
          {this.initialLoad()}
          <Pagination />
        </div>
      </div>
    );
  }
}
