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

function convertRating(num) {
  const onePlace = parseInt(num.toString().substring(0, 1)) + '.0';
  return (onePlace / 10) * 5;
}
function displayStars(rating) {
  const stars = [];
  const whole = parseInt(rating.toString().substring(0, 1));
  const decimal = parseInt(rating.toString().substring(2, 3));
  for (let i = 0; i < whole; i++) {
    stars.push(<Star className="full" />);
  }
  if (decimal >= 5) {
    stars.push(<HalfStar className="full" />);
  }

  while (stars.length < 5) {
    stars.push(<Star className="empty" />);
  }
  return stars;
}

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
    //console.log(movie);
    return (
      <div
        style={{
          backgroundImage:
            'url(https://image.tmdb.org/t/p/w1280/' + movie.backdrop_path + ')',
        }}
        className="movie__bg"
      >
        <div className="blur">&nbsp;</div>
        <div className="movie__poster">
          <div className="movie__poster__title">
            <h1>{movie.title}</h1>
            <span className="movie__poster__rating">
              {displayStars(convertRating(movie.vote_average))}

              <span className="num-rating">
                {movie.vote_average.toString().substring(0, 3)}
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
              <a href={movie.homepage}>Full Cast</a>
              <div className="movie__poster__body__btn__group">
                <a id="home" href="/">
                  <House />
                </a>
                <a
                  target="_blank"
                  id="trailer"
                  href={movie.homepage}
                  rel="noopener noreferrer"
                >
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
