import { Component } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

function displayMovies(movies = []) {
  const newMovies = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    newMovies.push(
      <MovieCard id={movie.id} imgSrc={movie.poster_path} title={movie.title} />
    );
  }
  return newMovies;
}

export default function Dashboard({ movies }) {
  console.log(movies);
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
        <div className="content_height_wrap">
          {displayMovies(movies)}
          <Pagination />
        </div>
      </div>
    </div>
  );
}
