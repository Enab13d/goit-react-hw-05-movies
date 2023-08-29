import { getMovieCredits } from 'constants/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList, Placeholder, Thumb, ActorCard } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMovieCredits(movieId);
        const {
          data: { cast },
        } = response;
        setActors(cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <CastList>
      {actors &&
        actors.map(({ character, original_name, profile_path, id }) => (
          <ActorCard key={id}>
            {profile_path ? (
              <img
                src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`}
                alt={original_name}
                width="180"
              />
            ) : (
              <Thumb>
                <Placeholder />
              </Thumb>
            )}
            <p>{original_name}</p>
            <p>{character}</p>
          </ActorCard>
        ))}
    </CastList>
  );
};

export default Cast;
