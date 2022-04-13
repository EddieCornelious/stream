import React from 'react';
import '../styles/MovieCard.scss';
import testImg from '../test.jpg';
export default function MovieCard({ title, imgSrc, id }) {
  return (
    <div className="moviecard">
      <div className="moviecard__img__wrap">
        <img alt={title} src={testImg} />
      </div>
      <div className="moviecard__title">{id + ' harry potter'}</div>
      <div className="moviecard__type">Thriller</div>
    </div>
  );
}
