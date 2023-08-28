import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDkxYTk0YTEzZTE0MDRhNmMwYjE4ZmNlNTJjNjZhZiIsInN1YiI6IjY0ZWIzZDk4ZTg5NGE2MDBlNGU3NDQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M1mjCyNIFJY4epTLKOIOEdVuRIgspD3cZvdRm_-7Ebs';

const basicParams = new URLSearchParams({
  language: 'en-US',
  include_adult: false,
});

export const getTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, basicParams);
  return response;
};

export const findMovieByName = async name =>
  await axios.get(`search/movie?query=${name}`, basicParams);

export const findMovieById = async id =>
  await axios.get(`movie/${id}`, basicParams);

export const getMovieCredits = async id =>
  await axios.get(`movie/${id}/credits`, basicParams);

export const getMovieReviews = async id =>
  await axios.get(`movie/${id}/reviews`, basicParams);
