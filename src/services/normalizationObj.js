import genreList from './genreList';
import settings from './settings';
import noImg from '../images/noImageAvailable.jpg';

const ssettings = {
  API_KEY: '7cb8097836a7a1f4e5c19953961668c8',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMG_URL: 'https://image.tmdb.org/t/p/w500/',
};

const { IMG_URL } = ssettings;

const getGenreArray = genre_ids => genre_ids.map(el => genreList[`${el}`]);

const getGenreArrayLibrary = genres => genres.map(el => el.name);

export const getImgPath = imgPath =>
  !imgPath ? `${noImg}` : `${IMG_URL}${imgPath}`;

const getDate = date => (!date ? date : date.slice(0, 4));

// -------------------------------------------------------------
export const normalizationMovieObj = ({
  genres = null,
  genre_ids = null,
  id,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  vote_average,
  vote_count,
}) => ({
  genre: genre_ids ? getGenreArray(genre_ids) : getGenreArrayLibrary(genres),
  id: id,
  title: original_title,
  about: overview,
  popularity: popularity,
  img: getImgPath(poster_path),
  releaseDate: release_date ? getDate(release_date) : '',
  vote: vote_average,
  votes: vote_count,
});
