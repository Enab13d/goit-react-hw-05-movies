import { getMovieReviews } from 'constants/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMovieReviews(movieId);
        const {
          data: { results },
        } = response;
        setReviews(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <ul>
      {reviews.length ? (
        [...reviews].flatMap(({ author, content, id }) => (
          <Review key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </Review>
        ))
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </ul>
  );
};
export default Reviews;
