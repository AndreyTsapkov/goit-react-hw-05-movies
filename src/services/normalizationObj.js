import { genreList } from './genreList';
import noImg from '../images/noImageAvailable.jpg';

const getGenreArray = genre_ids =>
  genre_ids.map(el => genreList[`${el}`]).join(', ');

const getGenreArrayLibrary = genres => genres.map(el => el.name).join(', ');

export const getImgPath = imgPath =>
  !imgPath ? `${noImg}` : `https://image.tmdb.org/t/p/w500/${imgPath}`;

const getDate = date => (!date ? date : date.slice(0, 4));

// -------------------------------------------------------------
export const normalizationMovieObj = movies => {
  return movies.map(
    ({
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
      original_name,
    }) => ({
      genre: genre_ids
        ? getGenreArray(genre_ids)
        : getGenreArrayLibrary(genres),
      id: id,
      title: original_title ? original_title : original_name,
      about: overview,
      popularity: popularity,
      img: getImgPath(poster_path),
      releaseDate: release_date ? getDate(release_date) : '',
      vote: vote_average,
      votes: vote_count,
    })
  );
};

export const normalizationMoviesDetails = ({
  poster_path,
  title,
  original_title,
  vote_average,
  overview,
  genres,
  release_date,
}) => {
  return {
    genre: getGenreArrayLibrary(genres),
    title: original_title ? original_title : title,
    about: overview,
    img: getImgPath(poster_path),
    releaseDate: release_date ? getDate(release_date) : '',
    vote: vote_average,
  };
};
