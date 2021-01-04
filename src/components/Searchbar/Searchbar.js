import { useState } from 'react';
import { toast } from 'react-toastify';

import s from './Searchbar.module.css';

function Searchbar({ onSubmit, resetState }) {
  const [query, setQuery] = useState('');

  const handleQueryChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Enter image query');
      return;
    }

    resetState();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={s.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleQueryChange}
        />
      </form>
    </header>
  );
}

export default Searchbar;
