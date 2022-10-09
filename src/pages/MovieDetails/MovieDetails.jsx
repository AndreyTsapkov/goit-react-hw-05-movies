import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  MovieDetailsContainer,
  ImageContainer,
  Image,
  BackButton,
  DataContainer,
  DataTitle,
  DataText,
  AdditInfoContainer,
  AdditInfoLink,
} from './MovieDetails.styled';
import { fetchMoviesById } from 'services/MoviesApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetchMoviesById(Number(movieId));
        console.log(response);
        setDetails(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <>
      {details && (
        <MovieDetailsContainer>
          <ImageContainer>
            <BackButton to={location?.state?.from ?? '/'}>⇦ Go back</BackButton>
            <Image src={details.img} alt={details.title}></Image>
          </ImageContainer>
          <DataContainer>
            <DataTitle>
              {details.title} ({details.releaseDate})
            </DataTitle>
            <DataText>User score: {details.vote}</DataText>
            <DataTitle>Overview</DataTitle>
            <DataText>{details.about}</DataText>
            <DataTitle>Genres</DataTitle>
            <DataText>{details.genre}</DataText>
          </DataContainer>
        </MovieDetailsContainer>
      )}
      <AdditInfoContainer>
        <DataTitle>
          <AdditInfoLink to="cast">Cast</AdditInfoLink>
          <AdditInfoLink to="reviews">Reviews</AdditInfoLink>
        </DataTitle>
      </AdditInfoContainer>
      <Outlet />
    </>
  );
};

export default MovieDetails;
