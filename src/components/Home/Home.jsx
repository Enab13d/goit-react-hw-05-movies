import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'constants/api';
import { useLocation, Link } from 'react-router-dom';
import { MovieList, MovieItem } from './Home.styled';


const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTrendingMovies();
        const {
          data: { results },
        } = response;
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Trending Today</h2>
      <MovieList>
        {movies.map(({ title, id }) => (
          <MovieItem key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </>
  );
};
export default Home;
