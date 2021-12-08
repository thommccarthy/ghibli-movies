import React from 'react';

const movie = ({ movie }) => {
  console.log(movie);

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.movie_banner} />
      <p>{movie.description}</p>
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
