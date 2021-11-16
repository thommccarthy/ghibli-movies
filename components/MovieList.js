import React from 'react';
import Image from 'next/image';
import movieListStyles from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <div>
      <div className={movieListStyles.movieGrid}>
        {movies.map((movie) => (
          <div className={movieListStyles.singleMovieCard}>
            <h2 className={movieListStyles.movieTitle}>{movie.title}</h2>
            <div className={movieListStyles.movieImageWrapper}>
              <img className={movieListStyles.movieImage} src={movie.image} />
            </div>
            <p className={movieListStyles.description}>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
