import Head from 'next/head';
import Image from 'next/image';
import MovieList from '../components/MovieList';
import styles from '../styles/Home.module.css';

export default function Home({ movies }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Studio Ghibli Tribute</title>
        <meta
          name='Studio Ghibli Tribute'
          content='A tribute to Studio Ghibli built with Next JS'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MovieList movies={movies} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://ghibliapi.herokuapp.com/films`);
  const movies = await res.json();

  // props get pulled in up top
  return {
    props: {
      movies,
    },
  };
};
