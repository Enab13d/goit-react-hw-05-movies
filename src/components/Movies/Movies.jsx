import { useState, useEffect, useRef } from 'react';
import { findMovieByName } from 'constants/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MovieList, MovieItem } from '../Home/Home.styled';
import { SearchInput, SearchBtn, SearchForm } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  const queryRef = useRef(query);
  const [inpuValue, setInpuValue] = useState(queryRef.current ?? '');

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
    queryRef.current = value;

    // e.target.reset();
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput
          name="name"
          type="text"
          autoComplete="off"
          onChange={e => setInpuValue(e.target.value)}
          value={inpuValue}
        />
        <SearchBtn type="submit"></SearchBtn>
      </SearchForm>
      {movies.length > 0 && (
        <MovieList>
          {movies.map(({ title, id }, idx) => (
            <MovieItem key={idx}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </MovieItem>
          ))}
        </MovieList>
      )}
    </div>
  );
};

export default Movies;
