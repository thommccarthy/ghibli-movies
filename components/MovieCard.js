import React from 'react';
import Link from 'next/link';
import movieCardStyles from './MovieCard.module.css';

const MovieCard = ({ movie }) => {
  movie.title.replace(/\s+/g, '-');

  return (
    <Link href='/movie/[id]' as={`/movie/${movie.id}`}>
      <div className={movieCardStyles.singleMovieCard}>
        <h2 className={movieCardStyles.movieTitle}>{movie.title}</h2>
        <div className={movieCardStyles.movieImageWrapper}>
          <img className={movieCardStyles.movieImage} src={movie.image} />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
