import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

import fetchMoviesAPI from '../../ThemoviedbAPI';
import Movies from '../Movies/Movies';
import Button from '../Button/Button';

import s from './HomePage.module.css';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [visibilityLoadMore, setVisibilityLoadMore] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      setShowLoader(true);
      const newTrendingMovies = await fetchMoviesAPI.fetchTrendingMovies(page);

      setTrendingMovies(state => [...state, ...newTrendingMovies.results]);
      setLastPage(newTrendingMovies.total_pages);

      if (page < newTrendingMovies.total_pages) {
        setVisibilityLoadMore(true);
      }

      setShowLoader(false);

      moviesIsAvailable();

      scrollToEndPage();

      function moviesIsAvailable() {
        if (!newTrendingMovies.total_pages) {
          toast.error(
            'Щось пішло не так... Сервіс не відповідає. Спробуйте пізніше...',
          );
        }
      }
    }
  }, [page]);

  const handleLoadMore = () => {
    setPage(state => state + 1);

    if (page === lastPage - 1) {
      setVisibilityLoadMore(false);
      toast.info('За запитом завантажено останні фільми');
    }
  };

  const scrollToEndPage = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    trendingMovies && (
      <div>
        <Movies movies={trendingMovies} />

        {showLoader && (
          <div className={s.Loader}>
            <Loader type="Circles" color="#3f51b5" height={40} width={40} />
          </div>
        )}

        {visibilityLoadMore && <Button onClick={handleLoadMore} />}

        <ToastContainer autoClose={4000} />
      </div>
    )
  );
}

export default HomePage;
