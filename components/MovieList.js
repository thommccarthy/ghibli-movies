import React from 'react';
import movieListStyles from './MovieList.module.css';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div>
      <div className={movieListStyles.movieGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
