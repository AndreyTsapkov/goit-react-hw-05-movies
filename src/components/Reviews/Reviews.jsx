import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/MoviesApi';
import {
  ReviewsContainer,
  ReviewsList,
  ReviewsItem,
  ReviewsData,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await fetchMoviesReviews(Number(movieId));
        console.log(response);
        setReviews(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length !== 0 ? (
        <ReviewsList>
          {reviews &&
            reviews.map(({ content, author_details, id }) => {
              return (
                <ReviewsItem key={id}>
                  <ReviewsData>
                    Author:{' '}
                    {author_details.name ? author_details.name : 'Anonymous'}
                  </ReviewsData>
                  <ReviewsData>Rating: {author_details.rating}</ReviewsData>
                  <ReviewsData>{content}</ReviewsData>
                </ReviewsItem>
              );
            })}
        </ReviewsList>
      ) : (
        <ReviewsData>We don't have any reviews for this movie</ReviewsData>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
