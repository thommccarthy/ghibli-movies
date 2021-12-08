import React from 'react';
import Link from 'next/link';
import movieStyles from './movie.module.css';

const movie = ({ movie }) => {
  console.log(movie);

  return (
    <div>
      <h1 className={movieStyles.title}>{movie.title}</h1>
      <div>
        <img className={movieStyles.banner} src={movie.movie_banner} />
      </div>
      <ul className={movieStyles.creditsWrapper}>
        <li>
          <p>
            Director: <span>{movie.director}</span>
          </p>
        </li>
        <li>
          <p>
            Producer: <span>{movie.producer}</span>
          </p>
        </li>
        <li>
          <p>
            Release year: <span>{movie.release_date}</span>
          </p>
        </li>
      </ul>

      <p className={movieStyles.description}>{movie.description}</p>
      <div className={movieStyles.linkWrapper}>
        <Link className={movieStyles.linkComponent} href='/'>
          <span className={movieStyles.homeLink}>Home</span>
        </Link>
      </div>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://ghibliapi.herokuapp.com/films/${context.params.id}`
  );

  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://ghibliapi.herokuapp.com/films`);

  const movies = await res.json();

  const ids = movies.map((movie) => movie.id);
  const paths = ids.map((id) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default movie;
