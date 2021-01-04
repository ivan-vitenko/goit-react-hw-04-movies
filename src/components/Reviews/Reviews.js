import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchMoviesAPI from '../../ThemoviedbAPI';

import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews();

    async function fetchReviews() {
      const newReviews = await fetchMoviesAPI.fetchReviews(movieId.slice(1));

      setReviews(newReviews.results);
    }
  }, [movieId]);

  return (
    <ul className={s.Reviews}>
      {reviews.map(review => (
        <li key={review.id} className={s.Review}>
          <h3>{`Author: ${review.author}`}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
