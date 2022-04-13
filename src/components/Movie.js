import { Component } from 'react';
import '../styles/Movie.scss';
import { ReactComponent as Star } from '../star-solid.svg';
import bg from '../test.jpg';
import { ReactComponent as House } from '../house-solid.svg';

export default function Movie(props) {
  return (
    <div className="movie__bg">
      <div className="movie__poster">
        <div className="movie__poster__title">
          <h1>sonic the hedgehog</h1>
          <span className="movie__poster__rating">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <span className="num-rating">7.1</span>
          </span>
        </div>
        <div className="movie__poster__hero">
          <img alt="movie poster" src={bg} />
        </div>
        <div className="movie__poster__body">
          <div className="movie__poster__body__top">
            <span>
              Action / Science Fiction / Comedy / Family / 2022-03-30 / 122min
            </span>
            <a href="#">Full Cast</a>
            <div className="movie__poster__body__btn__group">
              <a href="#">
                <House />
              </a>
              <a href="#">watch trailer</a>
            </div>
          </div>

          <div className="movie__poster__body__bottom">
            After settling in Green Hills, Sonic is eager to prove he has what
            it takes to be a true hero. His test comes when Dr. Robotnik
            returns, this time with a new partner, Knuckles, in search for an
            emerald that has the power to destroy civilizations. Sonic teams up
            with his own sidekick, Tails, and together they embark on a
            globe-trotting journey to find the emerald before it falls into the
            wrong hands.
          </div>
        </div>
      </div>
    </div>
  );
}
