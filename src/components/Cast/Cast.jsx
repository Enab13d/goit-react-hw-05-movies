import { getMovieCredits } from 'constants/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList } from './Cast.styled';

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
          <li key={id}>
            <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`} alt={original_name} width='180'/>
                <p>{original_name}</p>
                <p>{character}</p>
          </li>
        ))}
    </CastList>
  );
};

export default Cast;
