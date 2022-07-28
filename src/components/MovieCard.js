import React from 'react';
import '../styles/MovieCard.scss';
import Fade from 'react-reveal/Fade';
export default function MovieCard({ title, imgSrc, id, genre }) {
  const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Fade delay={3000}>
      <a href={'/movie/' + id} className="moviecard">
        <div className="moviecard__img__wrap">
          <img alt={title} src={IMG_BASE_URL + imgSrc} />
        </div>

        <div className="moviecard__title">
          {title.length > 25 ? title.substring(0, 25) + '...' : title}
        </div>
        <div className="moviecard__type">{genre}</div>
      </a>
    </Fade>
  );
}
