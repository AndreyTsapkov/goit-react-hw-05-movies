import {
  MoviesTitleStyled,
  MoviesListStyled,
  MoviesItemStyled,
} from './MoviesList.styled';
import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesListStyled>
      {movies &&
        movies.map(({ id, img, title, name }) => (
          <MoviesItemStyled
            to={`/moviespage/${id}`}
            key={id}
            state={{ from: location }}
          >
            <img src={img} alt={title} />
            <MoviesTitleStyled>{title ? title : name}</MoviesTitleStyled>
          </MoviesItemStyled>
        ))}
    </MoviesListStyled>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
