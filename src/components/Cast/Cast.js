import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMoviesAPI from '../../ThemoviedbAPI';

import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast();

    async function fetchCast() {
      const newCast = await fetchMoviesAPI.fetchCast(movieId.slice(1));

      setCast(newCast.cast);
    }
  }, [movieId]);

  return (
    <ul className={s.Cast}>
      {cast.map(castItem => (
        <li key={castItem.id} className={s.CastItem}>
          {castItem.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w92${castItem.profile_path}`}
              alt={castItem.original_name}
              className={s.Photo}
            />
          )}

          {!castItem.profile_path && (
            <img
              src="http://i.piccy.info/i9/96a28b444584d2013a87fc5565557395/1609765209/2100/1412179/uP3Fs3QUsGBxhNqGFWMnN1Z2l8z_profile.jpg"
              alt={castItem.original_name}
            />
          )}

          <p className={s.Name}>{castItem.original_name}</p>
        </li>
      ))}
    </ul>
  );
}
