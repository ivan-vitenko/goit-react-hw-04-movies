import { Link, useLocation } from 'react-router-dom';
import s from './Movies.module.css';

function Movies({ movies }) {
  const location = useLocation();

  return (
    <ul className={s.Movies}>
      {movies.map(movie => (
        <li key={movie.id} className={s.Movie}>
          <Link
            to={{
              pathname: `/movies/:${movie.id}`,
              state: {
                from: {
                  location,
                  label: 'Назад',
                },
              },
            }}
          >
            {movie.poster_path && (
              <img
                id={movie.id}
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                alt={`Poster for movie ${movie.original_title}`}
                className={s.MovieImage}
              />
            )}

            {!movie.poster_path && (
              <img
                id={movie.id}
                src={
                  'http://i.piccy.info/i9/08d3b2fdf0c0f72070b26eb5c84de9f9/1606074167/25052/1406275/68511fake_img.jpg'
                }
                alt={`Poster for movie ${movie.original_title}`}
                className={s.MovieImage}
              />
            )}

            <p className={s.Name}>{movie.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Movies;
