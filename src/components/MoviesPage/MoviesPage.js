import fetchMoviesAPI from '../../ThemoviedbAPI';
import { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-loader-spinner';

import s from './MoviesPage.module.css';

import Searchbar from '../Searchbar/Searchbar';
import Movies from '../Movies/Movies';
import Button from '../Button/Button';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [visibilityLoadMore, setVisibilityLoadMore] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchMovies();

    async function fetchMovies() {
      if (!query) {
        return;
      }

      setShowLoader(true);

      const newMovies = await fetchMoviesAPI.fetchMovies(query, page);

      setMovies(state => [...state, ...newMovies.results]);

      setLastPage(newMovies.total_pages);

      if (page < newMovies.total_pages) {
        setVisibilityLoadMore(true);
      }

      setShowLoader(false);

      moviesIsAvailable();

      if (page !== 1) {
        scrollToEndPage();
      }

      function moviesIsAvailable() {
        if (!newMovies.total_pages) {
          toast.error('За запитом нічого не знайдено. Спробуйте інший запит!');
          resetState();
        }
      }
    }
  }, [query, page]);

  const resetState = () => {
    setMovies([]);
    setQuery('');
    setPage(0);
    setLastPage(1);
    setVisibilityLoadMore(false);
  };

  const handleFormSubmit = newQuery => {
    setQuery(newQuery);
    setPage(1);
  };

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
    <>
      <Searchbar onSubmit={handleFormSubmit} resetState={resetState} />

      {movies && (
        <div>
          <Movies movies={movies} />

          {showLoader && (
            <div className={s.Loader}>
              <Loader type="Circles" color="#3f51b5" height={40} width={40} />
            </div>
          )}

          {visibilityLoadMore && <Button onClick={handleLoadMore} />}
        </div>
      )}

      <ToastContainer autoClose={4000} />
    </>
  );
}

export default MoviesPage;
