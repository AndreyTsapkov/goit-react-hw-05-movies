import axios from 'axios';
import {
  normalizationMovieObj,
  normalizationMoviesDetails,
} from './normalizationObj';

const API_KEY = 'e5517ae4303f5ec2cd4c7059ec556fc9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
};

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?`);
  const response = normalizationMovieObj(data.results);
  return response;
};

export const fetchMoviesById = async id => {
  const { data } = await axios.get(`/movie/${id}?`);
  const response = normalizationMoviesDetails(data);
  return response;
};

export const fetchMoviesBySearch = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}&page=1`);
  const response = normalizationMovieObj(data.results);
  return response;
};

export const fetchMoviesCredits = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?`);
  return data.cast;
};

export const fetchMoviesReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?`);
  return data.results;
};
