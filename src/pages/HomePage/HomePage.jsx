import { useState, useEffect } from 'react';
import { HomePageTitle } from './HomePage.styled';
import MoviesList from 'components/MoviesList';
import { fetchTrendingMovies } from 'services/MoviesApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <HomePageTitle>Trending Movies</HomePageTitle>
      <MoviesList movies={movies} />
    </>
  );
};

export default HomePage;
