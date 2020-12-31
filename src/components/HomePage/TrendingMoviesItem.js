import s from './ImageGalleryItem.module.css';

function TrendingMoviesItem({ movies }) {
  return movies.map(movie => (
    <li key={movie.id} className={s.TrendingMoviesItem}>
      <img
        id={movie.id}
        src={movie.webformatURL}
        srclarge={movie.largeImageURL}
        alt=""
        className={s.TrendingMoviesItemImage}
      />
    </li>
  ));
}

export default TrendingMoviesItem;
