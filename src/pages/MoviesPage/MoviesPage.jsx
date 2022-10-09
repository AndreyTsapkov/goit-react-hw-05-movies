import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { fetchMoviesBySearch } from 'services/MoviesApi';
import MoviesList from 'components/MoviesList';
import {
  MoviesPageContainer,
  MoviesPageInput,
  MoviesPageButton,
} from './MoviesPage.styled';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleSubmit = e => {
    e.preventDefault();

    setSearchQuery(
      e.currentTarget.elements.searchQuery.value.toLowerCase().trim()
    );
    setSearchParams({
      query: e.currentTarget.elements.searchQuery.value.toLowerCase().trim(),
    });
  };

  const currentQuery = searchParams.get('query');

  useEffect(() => {
    if (!currentQuery) {
      console.log('no movies');
    }
  }, [currentQuery]);

  useEffect(() => {
    if (searchQuery !== '') {
      const getMovieBySearch = async () => {
        try {
          const response = await fetchMoviesBySearch(searchQuery);
          console.log(response);
          setMovies(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };
      getMovieBySearch();
    } else if (currentQuery) {
      const getMovieBySearch = async () => {
        try {
          const response = await fetchMoviesBySearch(currentQuery);
          console.log(response);
          setMovies(response);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      };
      getMovieBySearch();
    }

    return;
  }, [searchQuery, currentQuery]);

  return (
    <>
      <MoviesPageContainer onSubmit={handleSubmit}>
        <MoviesPageInput
          name="searchQuery"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search..."
        />
        <MoviesPageButton type="submit">
          <ImSearch size="30" color="#fff" />
        </MoviesPageButton>
      </MoviesPageContainer>
      {!error ? (
        <MoviesList movies={movies} />
      ) : (
        <p>No results found for '{searchQuery}'</p>
      )}
    </>
  );
};

export default MoviesPage;
