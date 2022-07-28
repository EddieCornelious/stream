import React, { Component, useState, useEffect } from 'react';
import '../styles/Movie.scss';
import { ReactComponent as Star } from '../star-solid.svg';
import { ReactComponent as HalfStar } from '../star-half-stroke-solid.svg';
import bg from '../test.jpg';
import { ReactComponent as House } from '../house-solid.svg';
import { ReactComponent as LeftArrow } from '../left-long-solid.svg';
import { ReactComponent as RightCaret } from '../caret-right-solid.svg';
import { ReactComponent as Trailer } from '../video-solid.svg';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

function displayGenres(genres) {
  let str = '';
  for (let i = 0; i < genres.length; i++) {
    str += genres[i].name + ' / ';
  }
  return str;
}

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: null, pageLoading: true };
  }

  componentDidMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/movie/' +
          this.props.params.id +
          '?api_key=' +
          process.env.REACT_APP_API_KEY +
          '&language=en-US'
      )
      .then(({ data }) => {
        if (!data) return;
        this.setState({ movie: data }, () => {
          this.setState({ pageLoading: false });
        });
      });
  }

  render() {
    if (this.state.pageLoading) return null;
    const movie = this.state.movie;
    console.log(movie);
    return (
      <div
        style={{
          backgroundImage:
            'url(https://image.tmdb.org/t/p/original/' +
            movie.backdrop_path +
            ')',
        }}
        className="movie__bg"
      >
        <div className="blur">lol</div>
        <div className="movie__poster">
          <div className="movie__poster__title">
            <h1>{movie.title}</h1>
            <span className="movie__poster__rating">
              <Star className="full" />
              <Star />
              <Star />
              <Star />
              <HalfStar />
              <span className="num-rating">
                {movie.vote_average.toFixed(1)}
              </span>
            </span>
          </div>
          <div className="movie__poster__hero">
            <img
              alt="movie poster"
              src={'https://image.tmdb.org/t/p/w1280/' + movie.poster_path}
            />
          </div>
          <div className="movie__poster__body">
            <div className="movie__poster__body__top">
              <h3 className="quote">
                {`"${movie.tagline}"` || 'welcome to the next level'}
              </h3>
              <span>
                {displayGenres(movie.genres) + movie.release_date + ' / 122min'}
              </span>
              <a href="#">Full Cast</a>
              <div className="movie__poster__body__btn__group">
                <a id="home" href="#">
                  <House />
                </a>
                <a id="trailer" href="#">
                  <Trailer />
                </a>
              </div>
            </div>

            <div className="movie__poster__body__bottom">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withParams(Movie);
