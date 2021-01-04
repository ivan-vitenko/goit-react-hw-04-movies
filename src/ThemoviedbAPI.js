async function fetchTrendingMovies(page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47&page=${page}`,
  );

  return await response.json();
}

async function fetchMovie(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47`,
  );

  return await response.json();
}

async function fetchCast(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47`,
  );

  return await response.json();
}

async function fetchReviews(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47`,
  );

  return await response.json();
}

async function fetchMovies(query, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47&query=${query}&page=${page}`,
  );

  return await response.json();
}

const api = {
  fetchTrendingMovies,
  fetchMovie,
  fetchCast,
  fetchReviews,
  fetchMovies,
};

export default api;
