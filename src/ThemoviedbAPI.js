async function fetchTrendingMovies() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=7e78d9d0b80a5a9938ce5aba09bf2c47`,
  );

  return await response.json();
}

const api = {
  fetchTrendingMovies,
};

export default api;
