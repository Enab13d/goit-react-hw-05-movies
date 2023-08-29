import { useState, useEffect } from 'react';
import { findMovieByName } from 'constants/api';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { MovieList, MovieItem } from '../Home/Home.styled';
import { SearchInput, SearchBtn, SearchForm } from './Movies.styled';

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

  return (
    <div>
      <SearchForm onSubmit={onSubmit}>
        <SearchInput name="name" type="text" autoComplete="off" />
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
// replace index in map method with id from object in iterable array
