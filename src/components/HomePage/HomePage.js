import fetchMoviesAPI from '../../ThemoviedbAPI';
import { useState, useEffect } from 'react';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  //   const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    fetchImages();

    async function fetchImages() {
      //   setShowLoader(true);

      const newTrendingMovies = await fetchMoviesAPI.fetchTrendingMovies();
      console.log(newTrendingMovies.results);
      //   setTrendingMovies(state => [...state, ...newTrendingMovies.results]);

      //   setShowLoader(false);

      //   imagesIsAvailable();

      //   function imagesIsAvailable() {
      //     if (!newTrendingMovies.hits.length) {
      //       toast.error('За запитом нічого не знайдено. Спробуйте інший запит!');
      //       resetState();
      //     }
      //   }
    }
  });

  //   const handleClickImage = event => {
  //     openImage(
  //       event.target
  //         .closest(`.${sItem.ImageGalleryItem}`)
  //         .querySelector('img')
  //         .getAttribute('srclarge'),
  //     );
  //   };

  return (
    <div></div>
    // trendingMovies && (
    //   <div>
    //     {/* <ul onClick={handleClickImage} className={s.trendingMovies}>
    //       <TrendingMoviesItem
    //         images={trendingMovies}
    //         //   openMovie={openMovie}
    //       />
    //     </ul> */}

    //     {/* {showLoader && (
    //       <div className={s.Loader}>
    //         <Loader type="Circles" color="#3f51b5" height={40} width={40} />
    //       </div>
    //     )} */}
    //   </div>
    // )
  );
}

export default HomePage;
