import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Link, Route, Switch, useLocation } from 'react-router-dom';

import fetchMoviesAPI from '../../ThemoviedbAPI';

import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('../Cast/Cast' /* webpackChunkName: "cast"*/));

const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "reviews"*/),
);

export default function MovieDetailsPage() {
  const location = useLocation();
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovie();

    async function fetchMovie() {
      const newMovie = await fetchMoviesAPI.fetchMovie(movieId.slice(1));

      setMovie(newMovie);
    }
  }, [movieId]);

  return (
    <>
      {movie && (
        <div className={s.Container}>
          <Link
            to={location?.state?.from?.location ?? '/movies'}
            className={s.Back}
          >
            {location?.state?.from?.label ?? 'Назад'}
          </Link>

          <div className={s.SubContainer}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                alt={`Poster for movie ${movie.original_title}`}
                className={s.Poster}
              />
            )}

            {!movie.poster_path && (
              <img
                src="http://i.piccy.info/i9/08d3b2fdf0c0f72070b26eb5c84de9f9/1606074167/25052/1406275/68511fake_img.jpg"
                alt={`Poster for movie ${movie.original_title}`}
                className={s.Poster}
              />
            )}

            <div className={s.TextContentContainer}>
              <h2 className={s.Title}>{`${
                movie.original_title
              } (${movie.release_date.slice(0, 4)})`}</h2>

              <p> {`User score ${movie.vote_average * 10}%`}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>

              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(' | ')}</p>
            </div>
          </div>

          <div className={s.AddInfoContainer}>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <Route path="/movies/:movieId/cast" exact component={Cast} />

              <Route
                path="/movies/:movieId/reviews"
                exact
                component={Reviews}
              />
            </Switch>
          </Suspense>
        </div>
      )}
    </>
  );
}
