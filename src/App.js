import { lazy, Suspense } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import { useState } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';

import HomePage from './components/HomePage/HomePage';

function App() {
  // const [query, setQuery] = useState('');
  // const [isNewQuery, setIsNewQuery] = useState(true);
  // const [page, setPage] = useState(0);
  // const [lastPage, setLastPage] = useState(1);
  // const [visibilityLoadMore, setVisibilityLoadMore] = useState(false);
  // const [largeImageURL, setLargeImageURL] = useState('');

  // const resetState = () => {
  //   setQuery('');
  //   setIsNewQuery(true);
  //   setPage(0);
  //   setLastPage(1);
  //   setVisibilityLoadMore(false);
  //   setLargeImageURL('');
  // };

  // const handleLoadMore = () => {
  //   setIsNewQuery(false);

  //   setPage(state => state + 1);

  //   if (page === lastPage - 1) {
  //     setVisibilityLoadMore(false);
  //     toast.info('За запитом завантажено останні картинки');
  //   }
  // };

  // const handleFormSubmit = newQuery => {
  //   setIsNewQuery(true);
  //   setQuery(newQuery);
  //   setPage(1);
  // };

  // const openImage = imageURL => {
  //   setLargeImageURL(imageURL);
  // };

  // const closeImage = event => {
  //   if (event.target === event.currentTarget || event.code === 'Escape') {
  //     setLargeImageURL('');
  //     window.removeEventListener('keydown', closeImage);
  //   }
  // };

  return (
    <>
      <Suspense fallback={<h1>ЗАГРУЖАЕМ МАРШРУТ...</h1>}>
        <BrowserRouter>
          {/* <Switch> */}
          <Route path="/" exact component={HomePage} />
          {/* </Route> */}
          {/* </Switch> */}
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
