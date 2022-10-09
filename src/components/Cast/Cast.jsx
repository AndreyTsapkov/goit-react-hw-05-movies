import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/MoviesApi';
import { getImgPath } from 'services/normalizationObj';
import { CastContainer, CastList, CastItem, CastData } from './Cast.styled';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await fetchMoviesCredits(Number(movieId));
        console.log(response);
        setCredits(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <CastContainer>
      {credits.length ? (
        <CastList>
          {credits &&
            credits.map(({ name, profile_path, character, id }) => {
              const img = getImgPath(profile_path);
              return (
                <CastItem key={id}>
                  <img src={img} alt={name} />
                  <CastData>{name}</CastData>
                  <CastData>Character: {character}</CastData>
                </CastItem>
              );
            })}
        </CastList>
      ) : (
        <CastData>
          We don`t have information about the actors of this movie
        </CastData>
      )}
    </CastContainer>
  );
};

export default Cast;
