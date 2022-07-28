import { Component } from 'react';
import MovieCard from './MovieCard';
import Pagination from './Pagination';

function displayMovies(movies = [], genres = {}) {
  const newMovies = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    newMovies.push(
      <MovieCard
        id={movie.id}
        imgSrc={movie.poster_path}
        title={movie.title}
        genre={genres[movie.genre_ids[0]]}
      />
    );
  }
  return newMovies;
}

function getGenreList(list) {
  const newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(<li id={list[i].id}>{list[i].name}</li>);
  }
  return newList;
}

export default function Dashboard({
  movies,
  genres,
  sortBy,
  alteringMovies,
  activeSort,
  sortTypes,
  isLoading,
  filterMovies,
  genreList,
  updateSearch,
  search,
  page,
  changePage,
}) {
  return (
    <div className="dashboard">
      <div className="dashboard__top">
        <span className="title">dashboard box</span>
        <input
          onChange={updateSearch}
          onKeyDown={search}
          placeholder="Search Movies..."
          type="text"
        />
        <div className="dropdown">
          <button className="dropbtn">{sortTypes[parseInt(activeSort)]}</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => sortBy(1)}>
              popularity
            </a>
            <a href="#" onClick={() => sortBy(2)}>
              top rated
            </a>
            <a href="#" onClick={() => sortBy(3)}>
              a-z
            </a>
          </div>
        </div>
      </div>
      <div className="sidebar__wrap">
        <div className="dashboard__sidebar">
          <ul onClick={filterMovies} className="dashboard__sidebar__list">
            {getGenreList(genreList)}
          </ul>
        </div>
      </div>
      <Pagination page={page} changePage={changePage} />
      <div className="content__wrap">
        {alteringMovies === true ? (
          <div className="loading">LOADING</div>
        ) : (
          displayMovies(movies, genres)
        )}
      </div>
    </div>
  );
}
