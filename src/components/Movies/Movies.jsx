import { useState, useEffect } from 'react';
import { findMovieByName } from 'constants/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchData() {
      try {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
        const response = await findMovieByName(query);
        const {
          data: { results },
        } = response;
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [query, setSearchParams]);

  const onSubmit = e => {
    e.preventDefault();
    const {
      name: { value },
    } = e.currentTarget;
    setQuery(value);

    e.target.reset();
  };
  console.log(location);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name="name" type="text" autoComplete="off" />
        <button type="submit">Search</button>
      </form>
      {movies && (
        <ul>
          {movies.map(({ title, id }, idx) => (
            <li key={idx}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
// replace index in map method with id from object in iterable array
